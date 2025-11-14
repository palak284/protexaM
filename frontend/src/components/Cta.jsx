import { ShieldCheck, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

function CtaCard({ icon: Icon, title, desc, tone = "blue" }) {
  const toneMap = {
    blue: "text-blue-400 bg-blue-400/10",
    sky: "text-sky-400 bg-sky-400/10",
    indigo: "text-indigo-400 bg-indigo-400/10",
  };

  return (
    <div
      className={`group rounded-2xl bg-gray-900/50 ring-1 ring-gray-800 p-6 transition-all duration-200 hover:scale-[1.02]`}
    >
      <div
        className={`w-12 h-12 rounded-xl grid place-items-center ${toneMap[tone]}`}
      >
        <Icon className="w-6 h-6" />
      </div>
      <div className="mt-4 text-white font-semibold text-lg">{title}</div>
      <p className="text-gray-300 text-sm mt-1">{desc}</p>
    </div>
  );
}

export default function Cta() {
  return (
    <section id="cta" className="mx-auto max-w-7xl px-4 py-20">
      <div className="text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          Transform Your{" "}
          <span className="text-blue-400">
            Email Defense
          </span>{" "}
          Today
        </h2>

        <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
          Deploy advanced AI email security with minimal setup. Safe, private, and efficient.
        </p>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <CtaCard
            icon={ShieldCheck}
            title="Enterprise Security"
            desc="Bank-level protection for your communications."
            tone="blue"
          />
          <CtaCard
            icon={Users}
            title="Team Dashboard"
            desc="Complete visibility for security teams."
            tone="sky"
          />
          <CtaCard
            icon={Zap}
            title="Quick Setup"
            desc="Deploy in minutes, not hours."
            tone="indigo"
          />
        </div>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link
            to="/signup"
            className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-500 transition-colors duration-200"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="px-6 py-2 rounded-lg border border-blue-600 text-white font-medium hover:bg-blue-600/10 transition-colors duration-200"
          >
            Log In
          </Link>
        </div>

        {/* Trust Badge */}
        <div className="mt-10 text-xs text-gray-400">
          <div className="h-px w-24 mx-auto bg-gray-700 mb-3" />
          Trusted worldwide · SOC 2 · GDPR · 99.9% Uptime
        </div>
      </div>
    </section>
  );
}
