import imaps from "imap-simple";
import Email from "./models/Email.js";
import { getSentimentTone } from "./sentiment.js";
import { htmlToText } from "html-to-text";
import iconv from "iconv-lite"; // npm install iconv-lite

/* ----------------------------- Helpers ----------------------------- */
function collectMimeParts(struct, list = []) {
  if (!struct) return list;
  if (Array.isArray(struct)) struct.forEach(s => collectMimeParts(s, list));
  else {
    if (struct.type === "text") list.push(struct);
    if (struct.parts) struct.parts.forEach(p => collectMimeParts(p, list));
  }
  return list;
}

async function fetchPart(connection, email, part) {
  try {
    const raw = await connection.getPartData(email, part);

    if (Buffer.isBuffer(raw)) {
      try {
        return raw.toString("utf8").trim();
      } catch (err) {
        return iconv.decode(raw, "latin1").trim();
      }
    }

    if (typeof raw !== "string") return String(raw || "").trim();
    return raw.trim();
  } catch (e) {
    console.log("⚠️ Error fetching part:", e.message);
    return "";
  }
}

async function getCleanBody(connection, email) {
  const parts = collectMimeParts(email.attributes.struct);

  const plain = parts.find(p => p.subtype === "plain");
  if (plain) {
    const text = await fetchPart(connection, email, plain);
    if (text) return cleanText(text);
  }

  const html = parts.find(p => p.subtype === "html");
  if (html) {
    const htmlBody = await fetchPart(connection, email, html);
    const text = htmlToText(htmlBody || "", {
      wordwrap: false,
      preserveNewlines: true,
      ignoreImage: true,
      ignoreHref: true,
    });
    return cleanText(text);
  }

  return "";
}

function cleanText(text = "") {
  return text
    .replace(/\r/g, "")
    .replace(/\n\s*\n/g, "\n")
    .replace(/&nbsp;/g, " ")
    .trim();
}

/* ----------------------------- Process Emails ----------------------------- */
async function processSearchResults(connection, results = []) {
  const sorted = results.sort((a, b) => b.attributes.uid - a.attributes.uid);

  for (const email of sorted) {
    try {
      const header = email.parts.find(p => p.which === "HEADER");
      const from = header?.body?.from?.[0] || "unknown";
      const subject = header?.body?.subject?.[0] || "(no subject)";
      const body = await getCleanBody(connection, email);
      const tone = getSentimentTone(body || subject);

      const seen = email.attributes.flags?.includes("\\Seen") || false;

      const exists = await Email.findOne({ uid: email.attributes.uid });
      if (exists) continue;

      await Email.create({
        uid: email.attributes.uid,
        from,
        subject,
        content: body,
        tone,
        seen,
        time: new Date().toISOString(),
      });
    } catch (err) {
      console.log("❌ Error processing email:", err.message);
    }
  }
}

/* ----------------------------- IMAP Listener ----------------------------- */
export async function setupImapListener() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log("❌ Missing Gmail credentials.");
    return;
  }

  const config = {
    imap: {
      user: process.env.EMAIL_USER,
      password: process.env.EMAIL_PASS,
      host: "imap.gmail.com",
      port: 993,
      tls: true,
      tlsOptions: { rejectUnauthorized: false },
    },
  };

  try {
    const connection = await imaps.connect(config);
    await connection.openBox("INBOX");

    const getLatestUid = async () => {
      const latest = await Email.findOne({}).sort({ uid: -1 }).limit(1);
      return latest ? latest.uid : 0;
    };

    let lastUID = await getLatestUid();
    console.log(`📥 Starting initial sync from UID ${lastUID}...`);

    const initialResults = await connection.search(
      [lastUID ? ["UID", `${lastUID + 1}:*`] : ["ALL"]],
      { bodies: ["HEADER", "TEXT"], struct: true, markSeen: false }
    );

    await processSearchResults(connection, initialResults);

    lastUID = await getLatestUid();
    console.log(`✅ Initial sync complete. Last UID: ${lastUID}`);

    connection.imap.on("mail", async () => {
      console.log(`📩 Checking for new emails after UID ${lastUID}`);

      const newResults = await connection.search(
        [["UID", `${lastUID + 1}:*`]],
        { bodies: ["HEADER", "TEXT"], struct: true, markSeen: false }
      );

      await processSearchResults(connection, newResults);
      lastUID = await getLatestUid();
    });

    console.log("✅ IMAP listener active (UID-based)");
  } catch (err) {
    console.log("❌ Failed to connect IMAP:", err.message);
  }
}
