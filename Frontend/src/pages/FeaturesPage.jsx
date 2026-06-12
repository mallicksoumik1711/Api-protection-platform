import { useNavigate } from "react-router-dom";

export default function FeaturesPage() {
  const navigate = useNavigate();
  const steps = [
    {
      id: "01",
      title: "Create a project with all required details",
      desc: "Select the flexible or premium plan that suits your business needs.",
    },
    {
      id: "02",
      title: "Create API Keys for the activated Project",
      desc: "Activate your subscription with just a click no forms, no hassle.",
    },
    {
      id: "03",
      title: "Apply rules & Protected routes for your APIs",
      desc: "Receive personalized protection and support for your APIs.",
    },
    {
      id: "04",
      title: "Integrate Middleware with your Backend",
      desc: "Sit back while your APIs are monitored, protected, and optimized.",
    },
  ];

  return (
    <section className="relative z-10 bg-gradient-to-br from-black via-slate-900 to-black text-white py-12 px-4 sm:px-6 w-full md:w-3/4 mx-auto md:my-20 sm:rounded-xl">
      
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-10 md:mb-16">
          <p className="text-[10px] sm:text-xs text-white/40 tracking-widest mb-3 md:mb-4">
            4 SIMPLE STEPS
          </p>

          <div className="flex flex-col md:flex-row md:items-center md:gap-10 oswald-text">
            <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold leading-tight">
              Effortless Process,
              <br />
              Continuous Protection
            </h2>

            <div className="hidden md:block flex-1 h-[1px] bg-white/10 mt-4 md:mt-0" />
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative rounded-lg border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-4 sm:p-5 md:p-6 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_70%)] rounded-lg" />

              <div className="relative z-10 flex flex-col justify-between sm:h-92 min-h-[180px] sm:min-h-[200px] md:min-h-[260px]">
                <div>
                  <p className="text-sm sm:text-base text-white/40 mb-2 sm:mb-3">
                    {step.id}.
                  </p>
                  <h3 className="text-2xl sm:text-3xl font-medium mb-2 sm:mb-3 oswald-text">
                    {step.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-white/50 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 bg-white/[0.03] border border-white/10 rounded-xl px-4 sm:px-6 py-4">
          {/* Left */}
          <div className="flex items-center gap-3 sm:gap-4">
            <p className="text-white/60 oswald-text">
              Trusted by teams building modern APIs
            </p>
          </div>

          {/* Right */}
          <button
            onClick={() => navigate("/signin")}
            className="flex items-center gap-2 px-4 sm:px-5 py-2 rounded-md bg-white text-black font-medium transition hover:bg-white/10 hover:text-white oswald-text cursor-pointer"
          >
            Start Now →
          </button>
        </div>
      </div>
    </section>
  );
}
