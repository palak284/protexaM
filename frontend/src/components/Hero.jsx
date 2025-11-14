import React from "react";

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.querySelector("#problem");
    if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
  };

  const features = [
    {
      title: "Smart Email Security",
      description: "AI-driven threat detection to block phishing, spam, and malicious attachments."
    },
    {
      title: "Productivity Tools",
      description: "Organize emails, auto-prioritize important messages, and declutter your inbox."
    },
    {
      title: "Analytics & Insights",
      description: "Get detailed usage analytics and team performance metrics in real time."
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-[#05070d] via-[#0a0c14] to-[#05070d] text-white min-h-screen flex flex-col items-center justify-center px-6 md:px-12 lg:px-20 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/2 w-96 h-96 bg-gradient-to-r from-[#00c2ff]/30 to-[#6a0dad]/25 rounded-full filter blur-3xl animate-pulse-slow opacity-40 -translate-x-1/2 animate-float-1"></div>
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-gradient-to-l from-[#6a0dad]/25 to-[#00c2ff]/20 rounded-full filter blur-2xl animate-pulse-slower opacity-35 animate-float-2"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-gradient-to-tr from-[#00c2ff]/20 to-[#6a0dad]/15 rounded-full filter blur-xl opacity-25 animate-float-3"></div>

        {/* Floating Neon Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, #00c2ff, #6a0dad)`,
              animation: `particle ${5 + Math.random() * 10}s linear ${Math.random() * 5}s infinite`,
            }}
          ></div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl text-center space-y-4 animate-fade-in-up">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-[#00c2ff]/30 backdrop-blur-sm">
          <div className="w-2 h-2 bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] rounded-full mr-3 animate-pulse"></div>
          <p className="text-sm font-medium tracking-wider text-gray-300 uppercase">Secure • Smarter • Scalable</p>
        </div>

        <div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-200">
            All-in-One Email
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-snug text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] via-[#6a0dad] to-[#00c2ff] animate-gradient-x">
            SaaS Platform
          </h1>
        </div>

        <p className="text-gray-400 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto font-light">
          Supercharge your email experience with our SaaS suite. From{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] font-medium">
            AI-powered security
          </span>{" "}
          to productivity tools and advanced analytics, our platform keeps your communication{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] font-medium">
            efficient, private, and reliable
          </span>.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a href="/signup" className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00c2ff] to-[#6a0dad] text-white font-semibold text-lg shadow-2xl hover:shadow-[#00c2ff]/50 transform hover:scale-105 transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Start Free Trial</span>
          </a>
          <button onClick={scrollToNext} className="group px-8 py-4 rounded-2xl bg-[#0a0c14]/50 text-white border border-[#00c2ff]/40 font-medium text-lg shadow-lg backdrop-blur-sm hover:bg-[#0a0c14]/70 hover:border-[#00c2ff]/60 hover:scale-105 transform transition-all duration-300">
            Explore Features
          </button>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="group p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 hover:shadow-xl hover:shadow-white/5">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes gradient-x {0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes float-1 {0%,100%{transform:translateX(-50%) translateY(0) scale(1);}33%{transform:translateX(-50%) translateY(-20px) scale(1.05);}66%{transform:translateX(-50%) translateY(10px) scale(0.95);}}
        @keyframes float-2 {0%,100%{transform:translateY(0) scale(1);}33%{transform:translateY(15px) scale(1.03);}66%{transform:translateY(-10px) scale(0.97);}}
        @keyframes float-3 {0%,100%{transform:translate(0,0) scale(1);}50%{transform:translate(10px,-15px) scale(1.02);}}
        @keyframes fade-in-up {0%{opacity:0;transform:translateY(30px);}100%{opacity:1;transform:translateY(0);}}
        @keyframes particle {0%{transform:translate(0,0);}50%{transform:translate(10px,-15px);}100%{transform:translate(0,0);}}
        .animate-gradient-x {background-size:200% 200%;animation:gradient-x 3s ease infinite;}
        .animate-float-1 {animation:float-1 12s ease-in-out infinite;}
        .animate-float-2 {animation:float-2 15s ease-in-out infinite;}
        .animate-float-3 {animation:float-3 18s ease-in-out infinite;}
        .animate-fade-in-up {animation:fade-in-up 1s ease-out;}
        .animate-pulse-slow {animation:pulse 4s infinite;}
        .animate-pulse-slower {animation:pulse 6s infinite;}
      `}</style>
    </section>
  );
}
