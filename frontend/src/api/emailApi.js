const BASE_URL = "http://localhost:5000/api";

// Fetch recent emails (latest → oldest)
export const getRecentEmails = async () => {
  try {
    const res = await fetch(`${BASE_URL}/emails/recent`);
    if (!res.ok) throw new Error("Failed to fetch emails");

    const data = await res.json();

    // Map & clean frontend fields
    return data.map(email => ({
      uid: email.uid,                    // ⭐ added
      from: email.from,
      subject: email.subject,
      content: email.content,
      tone: email.tone,
      seen: email.seen,                  // ⭐ added
      time: email.time,                  // ⭐ added (important)
      
      // Tone suggestion
      suggestion: email.tone === "negative"
        ? "Check why it is negative"
        : ""
    }));
  } catch (err) {
    console.error(err);
    return [];
  }
};


// Analyze email tone
export const analyzeEmailTone = async (text) => {
  try {
    const res = await fetch(`${BASE_URL}/sentiment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });

    if (!res.ok) throw new Error("Failed to analyze tone");

    const data = await res.json();

    if (data.tone === "negative") {
      data.suggestion = "Consider rephrasing politely.";
    }

    return data;
  } catch (err) {
    console.error(err);
    return { tone: "neutral" };
  }
};
