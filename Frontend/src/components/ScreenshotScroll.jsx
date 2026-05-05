import { useState } from "react";

const screenshot = "/screens/Frontpage.PNG";
const screenshotResponsive = "/screens/Frontpage-mobile.PNG";

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
      className="
        relative 
        py-16 sm:py-20 md:py-28 
        bg-[#07070a] 
        overflow-hidden 
        w-full md:w-3/4 
        mx-auto 
        px-4 sm:px-6
      "
    >
      {/* Interactive grid mask */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          WebkitMaskImage: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, white 0%, rgba(255,255,255,0.6) 40%, transparent 75%)`,
          maskImage: `radial-gradient(250px circle at ${pos.x}px ${pos.y}px, white 0%, rgba(255,255,255,0.6) 40%, transparent 75%)`,
        }}
      >
        <svg
          className="w-full h-full opacity-[0.25] sm:opacity-[0.3]"
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
                strokeWidth="0.6"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#triangles-screenshot)" />
        </svg>
      </div>

      {/* Glow layers (responsive) */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 
          -translate-x-1/2 -translate-y-1/2 
          w-[300px] h-[200px] 
          sm:w-[500px] sm:h-[300px] 
          md:w-[800px] md:h-[500px] 
          blur-[80px] md:blur-[120px] 
          rounded-full 
        "
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 
          w-[200px] h-[150px] 
          sm:w-[300px] sm:h-[200px] 
          md:w-[400px] md:h-[300px] 
          blur-[80px] md:blur-[120px] 
          rounded-full 
        "
        />
        <div
          className="absolute bottom-1/4 right-1/4 
          w-[200px] h-[150px] 
          sm:w-[300px] sm:h-[200px] 
          md:w-[400px] md:h-[300px] 
          blur-[80px] md:blur-[120px] 
          rounded-full 
        "
        />
      </div>

      {/* Content */}
      <div className="relative w-full rounded-lg sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-zinc-900">
        {/* Mobile Image */}
        <img
          src={screenshotResponsive}
          alt="Dashboard Mobile Screenshot"
          className="block md:hidden w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
        />

        {/* Desktop Image */}
        <img
          src={screenshot}
          alt="Dashboard Screenshot"
          className="hidden md:block w-full h-auto object-contain transition-transform duration-700 hover:scale-[1.02]"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-white/20 rounded-lg sm:rounded-2xl md:rounded-3xl pointer-events-none" />
      </div>
    </section>
  );
}
