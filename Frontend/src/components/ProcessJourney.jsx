import React from "react";

export default function ProcessJourney() {
  const steps = [
    {
      number: "01",
      title: "Enter Your Project Credentials",
      description:
        "Create a project and define your application details to start securing your APIs with middleware protection.",
    },
    {
      number: "02",
      title: "Generate API keys and secrets",
      description:
        "Create secure API keys and JWT tokens to authenticate requests and control access to your backend services.",
    },
    {
      number: "03",
      title: "Customize your Protected routes",
      description:
        "Define rate limits, IP restrictions, and validation rules to protect your routes from unauthorized access.",
    },
    {
      number: "04",
      title: "Integrate with Project",
      description:
        "Plug middleware into your application and start filtering, monitoring, and securing every incoming request in real time.",
    },
  ];

  return (
    <section className="relative bg-zinc-950 text-white py-10 md:py-18 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* texture */}
        <div
          className="absolute inset-0 opacity-[1]"
          style={{
            backgroundImage: "url('/textures/otis-redding.png')",
          }}
        />

        {/* Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* LEFT */}
          <div>
            <p className="text-sm text-white/40 mb-6">// How It Works</p>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Secure Every Request.
              <br />
              Trust Every Response.
            </h2>

            <p className="text-white/60 max-w-md mb-8">
              Add a powerful middleware layer to your backend. Authenticate,
              authorize, and protect your APIs without complexity.
            </p>

            <div className="relative inline-flex rounded-full border border-white/15 bg-white/5 backdrop-blur-md p-1 overflow-hidden">
              <div className="absolute top-1 bottom-1 left-1 w-1/2 bg-white rounded-full transition-all duration-300 ease-in-out" />

              <button className="relative z-10 px-6 py-1 sm:px-6 sm:py-2.5 text-sm font-medium text-black">
                Start Protecting
              </button>

              <button className="relative z-10 px-6 py-1 sm:px-6 sm:py-2.5 text-sm font-medium text-white transition-colors duration-300">
                View Pricing
              </button>
            </div>
          </div>

          {/* RIGHT TIMELINE */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 sm:left-5 top-0 bottom-18 w-px bg-white/10" />

            <div className="space-y-10 sm:space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 sm:gap-6 group"
                >
                  {/* Step circle */}
                  <div
                    className="relative z-10 flex items-center justify-center 
          w-9 h-9 sm:w-10 sm:h-10 
          text-xs sm:text-sm 
          rounded-full bg-[#111116] border border-white/10
          shrink-0"
                  >
                    {step.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      {step.title}
                    </h3>

                    <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
