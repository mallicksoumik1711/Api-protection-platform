import { useState } from "react";

const screenshot = "/screens/api-key.PNG";

export default function ScreenshotSection() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <section
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className="relative py-24 md:py-32 bg-[#07070a] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          WebkitMaskImage: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, white 0%, rgba(255,255,255,0.6) 40%, transparent 75%)`,
          maskImage: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, white 0%, rgba(255,255,255,0.6) 40%, transparent 75%)`,
        }}
      >
        <svg
          className="w-full h-full opacity-[0.35]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <pattern
              id="triangles-screenshot"
              width="80"
              height="70"
              patternUnits="userSpaceOnUse"
            >
              <polygon
                points="40,0 80,70 0,70"
                fill="none"
                stroke="rgba(255,255,255,0.7)"
                strokeWidth="0.8"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles-screenshot)" />
        </svg>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px]  blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px]  blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-zinc-900">
          <img
            src={screenshot}
            alt="Dashboard Screenshot"
            className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

          <div className="absolute inset-0 ring-1 ring-white/20 rounded-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
