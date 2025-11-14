import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileFeatures, setMobileFeatures] = useState(false);

  const features = [
    "AI Phishing Detection",
    "Spam Detection",
    "Inbox Prioritization",
    "Email Summarization",
    "Smart Reply",
    "Tone & Urgency Detection",
    "Privacy Shield",
    "Explainable AI",
    "Organizational Dashboard",
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-[#05070d]/90 border-b border-[#0a0c14] shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-[#00c2ff] to-[#6a0dad] grid place-items-center relative transition-transform duration-300 transform group-hover:scale-110">
            <svg className="w-6 h-6 text-gray-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.25 6.75A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75zm2.25-.75L12 12l7.5-6.75H4.5zm0 12V8.25l7.5 6.75 7.5-6.75V18H4.5z"/>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-lg">ProtexaM</span>
            <span className="text-xs text-gray-400 opacity-80">Secure. Private. Productive.</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300 relative">
          <a href="#problem" className="relative group px-2 py-1 font-medium hover:text-white">
            Problem
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] group-hover:w-full transition-all duration-300"></span>
          </a>

          {/* Features Dropdown */}
          <div className="relative group">
            <button className="relative flex items-center gap-1 px-2 py-1 font-medium hover:text-white">
              Features ▼
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] group-hover:w-full transition-all duration-300"></span>
            </button>
            <div className="absolute top-full left-0 mt-2 w-64 bg-[#0a0c14] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
              {features.map((feature, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="block px-4 py-3 hover:bg-gradient-to-r from-[#00c2ff]/30 to-[#6a0dad]/30 hover:text-white font-medium rounded"
                >
                  {feature}
                </a>
              ))}
            </div>
          </div>

          <a href="#solutions" className="relative group px-2 py-1 font-medium hover:text-white">
            Solutions
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] group-hover:w-full transition-all duration-300"></span>
          </a>

          <a href="#dashboard" className="relative group px-2 py-1 font-medium hover:text-white">
            Dashboard
          </a>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/login"
            className="px-4 py-2 rounded-lg border border-[#00c2ff]/50 text-white font-medium hover:bg-[#00c2ff]/10 transition-colors duration-200"
          >
            Log in
          </Link>
          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] text-white font-medium hover:from-[#6a0dad] hover:to-[#00c2ff] transition-all duration-200"
          >
            Sign up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg bg-[#0a0c14] text-white"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {mobileMenu ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="md:hidden bg-[#0a0c14] text-gray-300 border-t border-[#1a1c23]">
          <a href="#problem" className="block px-4 py-3 hover:bg-[#1a1c23] hover:text-white">Problem</a>
          <div className="px-4 py-3 border-t border-[#1a1c23]">
            <button
              className="w-full text-left flex justify-between items-center"
              onClick={() => setMobileFeatures(!mobileFeatures)}
            >
              Features ▼
            </button>
            {mobileFeatures && (
              <div className="mt-2 space-y-1">
                {features.map((feature, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="block px-2 py-2 hover:bg-gradient-to-r from-[#00c2ff]/30 to-[#6a0dad]/30 hover:text-white rounded font-medium"
                  >
                    {feature}
                  </a>
                ))}
              </div>
            )}
          </div>
          <a href="#solutions" className="block px-4 py-3 hover:bg-[#1a1c23] hover:text-white">Solutions</a>
          <a href="#dashboard" className="block px-4 py-3 hover:bg-[#1a1c23] hover:text-white">Dashboard</a>
          <Link to="/login" className="block px-4 py-3 hover:bg-[#1a1c23] hover:text-white">Log in</Link>
          <Link
            to="/signup"
            className="block px-4 py-3 bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] text-white rounded mt-2 text-center hover:from-[#6a0dad] hover:to-[#00c2ff]"
          >
            Sign up
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
