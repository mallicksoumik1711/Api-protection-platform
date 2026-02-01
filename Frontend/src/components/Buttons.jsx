import { useState } from "react";
import { useNavigate } from "react-router";

export default function SegmentedCTA() {
  const [hovered, setHovered] = useState("left"); 
  const navigate = useNavigate();

  return (
    <div className="mt-10 flex justify-center">
      {/* OUTER CONTAINER */}
      <div
        className="
          relative
          w-[620px]
          h-15
          rounded-lg
          border border-white/10
          bg-black/80
          backdrop-blur
          p-1
        "
        onMouseLeave={() => setHovered("left")}
      >
        {/* SLIDING WHITE PILL */}
        <div
          className={`
            absolute
            top-1 bottom-1
            w-1/2
            rounded-md
            bg-white
            transition-all
            duration-200
            ease-out
            ${hovered === "left" ? "left-1" : "left-1/2"}
          `}
        />

        {/* BUTTONS */}
        <div className="relative z-10 grid grid-cols-2 h-full">
          {/* ANALYZE */}
          <button
            onMouseEnter={() => setHovered("left")}
            onClick={() => navigate("/signin")}
            className={`
              text-sm
              font-medium
              transition
              ${hovered === "left" ? "text-black" : "text-white/70"}
            `}
          >
            Analyze a GitHub Profile →
          </button>

          {/* COMPARE */}
          <button
            onMouseEnter={() => setHovered("right")}
            onClick={() => navigate("/try-demo")}
            className={`
              text-sm
              font-medium
              transition
              ${hovered === "right" ? "text-black" : "text-white/70"}
            `}
          >
            Compare Developers →
          </button>
        </div>
      </div>
    </div>
  );
}
