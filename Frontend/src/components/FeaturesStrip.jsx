export default function FeaturesStrip() {
  const features = [
    {
      fig: "FIG 0.2",
      title: "Built for API protection",
      desc: "Bouncer is designed to secure your APIs with rate limiting, key validation, and request filtering at the edge.",
      svg: (
        <div
          className="tilt-card w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const midX = rect.width / 2;
            const midY = rect.height / 2;

            const rotateY = ((x - midX) / midX) * 15;
            const rotateX = ((midY - y) / midY) * 15;

            e.currentTarget.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "rotateX(0deg) rotateY(0deg) scale(1)";
          }}
        />
      ),
    },
    {
      fig: "FIG 0.3",
      title: "Smart rule enforcement",
      desc: "Define rules for access control & usage limits. Bouncer enforces them in real time across all requests.",
      svg: (
        <div
          className="tilt-card w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const midX = rect.width / 2;
            const midY = rect.height / 2;

            const rotateY = ((x - midX) / midX) * 15;
            const rotateX = ((midY - y) / midY) * 15;

            e.currentTarget.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "rotateX(0deg) rotateY(0deg) scale(1)";
          }}
        />
      ),
    },
    {
      fig: "FIG 0.4",
      title: "Fast middleware integration",
      desc: "Plug Bouncer into your backend with minimal setup and start protecting endpoints instantly without disrupting workflows.",
      svg: (
        <div
          className="tilt-card w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-xl bg-gradient-to-br from-white/10 to-white/[0.02] border border-white/10 backdrop-blur-sm"
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const midX = rect.width / 2;
            const midY = rect.height / 2;

            const rotateY = ((x - midX) / midX) * 15;
            const rotateX = ((midY - y) / midY) * 15;

            e.currentTarget.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform =
              "rotateX(0deg) rotateY(0deg) scale(1)";
          }}
        />
      ),
    },
  ];

  return (
    <section className="relative z-10 bg-gradient-to-br from-black via-slate-900 to-black text-white py-16 md:py-24 px-4 sm:px-6 w-full md:w-3/4 mx-auto md:my-20">
      
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3">
        {features.map((item, i) => (
          <div
            key={i}
            className={`
              px-4 sm:px-6 md:px-10 py-6 flex flex-col justify-between
              border-white/10

              /* FULL WIDTH ONLY FOR LAST ITEM ON MOBILE */
              ${i === 2 ? "col-span-2 md:col-span-1" : ""}

              /* desktop borders */
              md:border-r ${i === 2 ? "md:border-r-0" : ""}

              /* mobile borders */
              border-b 
              ${i % 2 === 0 && i !== 2 ? "border-r" : ""}
            `}
          >
            {/* Top Label */}
            <p className="text-[9px] sm:text-[10px] tracking-[0.2em] text-white/30 mb-6 sm:mb-8 md:mb-10">
              {item.fig}
            </p>

            {/* Illustration */}
            <div className="mb-6 sm:mb-8 md:mb-10 flex justify-center">
              {item.svg}
            </div>

            {/* Content */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="text-xs sm:text-sm font-medium text-white">
                {item.title}
              </h3>
              <p className="text-[11px] sm:text-sm text-white/50 leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
