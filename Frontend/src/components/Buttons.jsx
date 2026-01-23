import { useState } from "react";

export default function SegmentedCTA() {
  const [active, setActive] = useState("left");

  return (
    <div className="mt-10 flex justify-center">
      {/* OUTER GLASS */}
      <div
        className="
          relative
          w-[420px] md:w-[480px]
          h-12
          rounded-xl
          bg-[#2a1446]/80
          backdrop-blur-md
          border border-white/10
          shadow-[0_0_70px_rgba(168,85,247,0.35)]
          p-1
        "
      >
        {/* MOVING PURPLE GLOW */}
        <div
          className={`
            absolute top-1 bottom-1
            w-1/2
            rounded-lg
            bg-gradient-to-b from-purple-400 to-purple-600
            shadow-[0_0_35px_rgba(168,85,247,0.8)]
            transition-all duration-300 ease-out
            ${active === "left" ? "left-1" : "left-1/2"}
          `}
        />

        {/* BUTTONS */}
        <div className="relative z-10 grid grid-cols-2 h-full">
          <button
            onClick={() => setActive("left")}
            className="
              text-sm md:text-base
              font-medium
              text-white/80
              hover:text-white
              transition
            "
          >
            Get Started
          </button>

          <button
            onClick={() => setActive("right")}
            className="
              text-sm md:text-base
              font-medium
              text-white/80
              hover:text-white
              transition
            "
          >
            Try Demo
          </button>
        </div>
      </div>
    </div>
  );
}
