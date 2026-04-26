import React from "react";

export default function ProcessJourney() {
  const steps = [
    {
      number: "01",
      title: "Enter Your Idea or Prompt",
      description:
        "Describe the full-stack web app or site you want in plain words or refine your prompt for more powerful results.",
    },
    {
      number: "02",
      title: "Get First Version",
      description:
        "Meku instantly builds a beautiful, working version of your project — fully functional and ready in less than a minute.",
    },
    {
      number: "03",
      title: "Customize and Improve",
      description:
        "Continue conversation, reference files and styles to customize, extend, and perfect your app until it matches your expectations.",
    },
    {
      number: "04",
      title: "Deploy & Go Live",
      description:
        "Your project is production-ready and optimized. Connect your domain or push code to GitHub instantly.",
    },
  ];

  return (
    <section className="relative bg-[#0a0a0f] text-white py-20 md:py-28 px-6 md:px-10 overflow-hidden">
      
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-[0.07]"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            
            <pattern
              id="hexMesh"
              width="120"
              height="104"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M60 0 L120 30 L120 74 L60 104 L0 74 L0 30 Z"
                fill="none"
                stroke="#ffffff"
                strokeWidth="0.8"
                strokeOpacity="0.4"
              />
            </pattern>

            <linearGradient id="glowLine" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
            </linearGradient>
          </defs>

          <rect width="100%" height="100%" fill="url(#hexMesh)" />

          <g opacity="0.25">
            <line
              x1="200"
              y1="100"
              x2="1100"
              y2="700"
              stroke="url(#glowLine)"
              strokeWidth="1.5"
            />
            <line
              x1="100"
              y1="600"
              x2="1200"
              y2="150"
              stroke="url(#glowLine)"
              strokeWidth="1"
            />
            <line
              x1="300"
              y1="200"
              x2="950"
              y2="650"
              stroke="#ffffff"
              strokeWidth="0.8"
              strokeOpacity="0.2"
            />
          </g>

          <g fill="#ffffff" fillOpacity="0.25">
            <circle cx="180" cy="120" r="1.5" />
            <circle cx="420" cy="280" r="1" />
            <circle cx="680" cy="90" r="2" />
            <circle cx="950" cy="450" r="1" />
            <circle cx="1150" cy="180" r="1.5" />
            <circle cx="250" cy="720" r="1" />
            <circle cx="820" cy="650" r="1.5" />
            <circle cx="1050" cy="780" r="1" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[520px] h-[520px] bg-purple-500/10 blur-[160px] rounded-full" />
        <div className="absolute bottom-1/3 right-1/4 w-[380px] h-[380px] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div>
            <p className="text-sm text-white/40 mb-6">// How It Works</p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Describe It. Build It.
              <br />
              Launch and Scale It.
            </h2>

            <p className="text-white/60 max-w-md mb-8">
              Turn your ideas into full-stack production-ready web apps and
              sites in minutes.
            </p>

            <div className="inline-flex rounded-full border border-white/15 bg-white/5 backdrop-blur-md p-1">
              <button
                className="
      px-6 py-2.5 
      rounded-full 
      bg-white text-black 
      font-medium text-sm
      transition
      hover:bg-white/90
    "
              >
                Start Building
              </button>

              <button
                className="
      px-6 py-2.5 
      rounded-full 
      text-white/80 text-sm
      font-medium
      transition
      hover:text-white
      hover:bg-white/10
    "
              >
                View Pricing
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-white/10" />

            <div className="space-y-12">
              {steps.map((step, index) => (
                <div key={index} className="flex items-start gap-6 group">
                  <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-[#111116] border border-white/10 text-sm font-medium transition group-hover:border-white/30 group-hover:bg-white/10">
                    {step.number}
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-white">
                      {step.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6"></div>
      </div>
    </section>
  );
}
