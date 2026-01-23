import React from "react";

export default function ProcessJourney() {
  const steps = [
    {
      title: "Discovery",
      dotColor: "bg-purple-600",
      subtitle: "Competitor Analysis & Research",
    },
    {
      title: "Define",
      dotColor: "bg-green-600",
      subtitle: "Information Architecture & Sitemap",
    },
    {
      title: "Ideation",
      dotColor: "bg-blue-600",
      subtitle: "Sketch & Wireframe",
    },
    {
      title: "Design",
      dotColor: "bg-orange-600",
      subtitle: "Design & Preview",
    },
  ];

  return (
    <div className="relative bg-[#0a0a0f] mt-25 text-white py-24 px-5 md:px-10 overflow-hidden">
      {/* Optional subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,#a855f780_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_75%,#3b82f680_0%,transparent_40%)]" />
      </div>

      {/* Crystal triangle mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full opacity-[0.08]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="triangles"
              width="80"
              height="70"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="40,0 80,70 0,70"
                fill="none"
                stroke="white"
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles)" />
        </svg>
      </div>

      {/* Mesh fade overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f] pointer-events-none" />

      {/* Crystal glow accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/5 w-[420px] h-[420px] bg-white/20 blur-[140px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/5 w-[320px] h-[320px] bg-white/10 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <div className="inline-block px-5 py-2 mb-6 rounded-full bg-white/5 border border-white/10 text-sm font-medium tracking-wider uppercase">
            /PROCESS
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-5">
            The Step-by-Step Journey
            <br />
            of Our Design Process
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-white/60">
            Every stage is carefully crafted — from research and strategy,
            <br className="hidden md:block" />
            to design and innovation.
          </p>
        </div>

        {/* Steps cards */}
        <div className="relative mt-16 md:mt-35">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
            {steps.map((step, index) => {
              const translateClasses = [
                "-translate-y-24",
                "-translate-y-16",
                "-translate-y-8",
                "translate-y-0",
              ];

              return (
                <div
                  key={step.title}
                  className={`flex flex-col items-center ${translateClasses[index]}`}
                >
                  {/* Title + dot OUTSIDE card */}
                  <div className="mb-3 flex justify-start w-[260px] items-center gap-3">
                    <span className={`w-3 h-3 rounded-full ${step.dotColor}`} />
                    <h3 className="text-[16px] font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>

                  {/* Card */}
                  <div
                    className="
              relative w-[260px] h-[420px]
              rounded-2xl
              border border-white/10
              bg-gradient-to-b from-[#18142a] to-[#0c0a16]
              backdrop-blur-lg
              transition-all duration-300
              hover:-translate-y-2
              hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]
            "
                  >
                    {/* Content pinned to bottom */}
                    <div className="absolute inset-0 px-6 pb-8 flex items-end">
                      <p className="text-sm text-white/75 leading-relaxed">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
