import { ShieldCheck, Eye, AlarmClock, AlertTriangle } from "lucide-react";

function StatCard({ icon: Icon, value, title, desc, tone = "red" }) {
  const toneMap = {
    red: "text-rose-400 drop-shadow-[0_0_6px_rgba(244,63,94,0.8)]",
    cyan: "text-cyan-400 drop-shadow-[0_0_6px_rgba(34,211,238,0.8)]",
    violet: "text-violet-400 drop-shadow-[0_0_6px_rgba(167,139,250,0.8)]",
    emerald: "text-emerald-400 drop-shadow-[0_0_6px_rgba(52,211,153,0.8)]",
  };

  return (
    <div className="group rounded-2xl bg-gray-900/40 ring-1 ring-gray-800 p-6 hover:ring-2 hover:ring-cyan-400/40 hover:scale-[1.03] transition-all duration-300">
      <div className="flex items-center gap-3">
        <Icon className={`w-6 h-6 ${toneMap[tone]}`} />
        <div className={`text-3xl font-extrabold ${toneMap[tone]}`}>
          {value}
        </div>
      </div>
      <div className="mt-3 text-white font-semibold text-lg">{title}</div>
      <p className="text-sm text-gray-400 mt-1 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function Problem() {
  return (
    <section id="problem" className="relative mx-auto max-w-7xl px-4 py-20">
      <div className="relative">
        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-white text-center leading-tight">
          The{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-violet-400 to-cyan-400 animate-text">
            Email Crisis
          </span>{" "}
          Nobody Talks About
        </h2>

        <p className="mt-4 text-gray-300 text-center max-w-3xl mx-auto text-lg">
          While email remains the backbone of business communication,
          critical vulnerabilities continue to expose organizations to
          unprecedented cyber risks.
        </p>

        {/* Stat Cards */}
        <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          <StatCard
            icon={AlertTriangle}
            value="30%"
            title="Sophisticated Phishing"
            desc="Traditional filters miss advanced attacks that bypass standard measures."
            tone="red"
          />
          <StatCard
            icon={AlarmClock}
            value="2.6hrs"
            title="Inbox Overwhelm"
            desc="Workers spend hours daily managing emails buried in clutter."
            tone="cyan"
          />
          <StatCard
            icon={Eye}
            value="70%"
            title="Hidden Trackers"
            desc="Emails contain pixels exposing location, device, and reading behavior."
            tone="violet"
          />
          <StatCard
            icon={ShieldCheck}
            value="0%"
            title="Transparency"
            desc="Users rarely know why an email is flagged or allowed—trust erodes."
            tone="emerald"
          />
        </div>

        {/* Bottom Highlight */}
        <p className="mt-10 text-center text-lg font-semibold text-rose-400 drop-shadow-[0_0_8px_rgba(244,63,94,0.7)]">
          The result? Businesses lose{" "}
          <span className="font-extrabold text-white">$12.5B</span> annually to
          email-based attacks.
        </p>
      </div>
    </section>
  );
}
