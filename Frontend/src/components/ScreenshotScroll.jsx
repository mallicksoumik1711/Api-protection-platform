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
          backgroundImage: `
      linear-gradient(to right, rgba(255,255,255,0.25) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.25) 1px, transparent 1px)
    `,
          backgroundSize: "50px 50px",
          WebkitMaskImage: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, white, transparent 70%)`,
          maskImage: `radial-gradient(200px circle at ${pos.x}px ${pos.y}px, white, transparent 70%)`,
        }}
      />

      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                    w-[800px] h-[500px] 
                    bg-purple-500/20 blur-[120px] rounded-full"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[300px] bg-blue-500/15 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[300px] bg-pink-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <div
          className="w-full h-full 
      bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] 
      bg-[size:50px_50px]"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#07070a]/80 via-transparent to-[#07070a]/80 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/15 bg-zinc-900 shadow-2xl group">
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
