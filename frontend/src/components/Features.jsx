import React from "react";
import { Brain, Shield, MailSearch, Eye, Mic, BarChart3 } from "lucide-react";

function Feature({ title, desc, icon: Icon, tone = "emerald" }) {
  const toneMap = {
    emerald: "text-emerald-400 bg-emerald-400/10",
    cyan: "text-cyan-400 bg-cyan-400/10",
    violet: "text-violet-400 bg-violet-400/10",
    rose: "text-rose-400 bg-rose-400/10",
    amber: "text-amber-400 bg-amber-400/10",
  };

  return (
    <div className="group rounded-2xl bg-gray-900/40 ring-1 ring-gray-800 p-6 hover:ring-2 hover:ring-emerald-400/40 hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-center gap-3 text-white font-semibold">
        <div className={`h-10 w-10 rounded-lg grid place-items-center ${toneMap[tone]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div className="text-lg">{title}</div>
      </div>
      <p className="mt-3 text-sm text-gray-300 leading-relaxed">{desc}</p>
      <div className="mt-6 h-1 w-20 rounded bg-gray-800 group-hover:bg-emerald-400/40 transition-colors" />
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-4 py-20">
      <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center leading-tight">
        AI That{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 animate-text">
          Thinks Ahead
        </span>
      </h2>

      <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto text-lg">
        Seven revolutionary AI engines working in harmony to predict, prevent,
        and protect against threats before they manifest.
      </p>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <Feature
          icon={Shield}
          title="AI Phishing & Spam Detection"
          desc="ML + NLP models detect suspicious patterns beyond filters, integrated with DKIM, SPF, and DMARC to block spoofing."
          tone="rose"
        />
        <Feature
          icon={Brain}
          title="Inbox Prioritization & Summarization"
          desc="Transformer models summarize long emails and split urgent vs. low-value messages for a smarter inbox."
          tone="cyan"
        />
        <Feature
          icon={MailSearch}
          title="Smart Reply & Tone/Urgency Detection"
          desc="Context-aware auto-replies with alerts for urgent, negative, or formal/informal emails."
          tone="emerald"
        />
        <Feature
          icon={Eye}
          title="Explainable AI"
          desc="Clear visibility into why emails are flagged, building transparency and user trust."
          tone="amber"
        />
        <Feature
          icon={Mic}
          title="Voice & Accessibility Support"
          desc="Compose or read emails by voice, accessibility tools for visually impaired, plus multilingual translation."
          tone="cyan"
        />
        <Feature
          icon={BarChart3}
          title="Organizational Dashboard"
          desc="Real-time analytics, inbox health scores, and visual phishing reports for IT/security teams."
          tone="emerald"
        />
      </div>
    </section>
  );
}
