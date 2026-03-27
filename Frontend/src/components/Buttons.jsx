import { useState } from "react";
import { useNavigate } from "react-router";

export default function SegmentedCTA() {
  const [hovered, setHovered] = useState("left");
  const navigate = useNavigate();

  return (
    <div className="mt-10 sm:mt-12 flex justify-center px-4">
      {/* OUTER CONTAINER - Made responsive */}
      <div
        className="
          relative
          w-full max-w-[620px]
          h-15 sm:h-14
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
    top-1 bottom-1 left-1
    w-[calc(50%-4px)]
    rounded-md
    bg-white
    transition-transform
    duration-200
    ease-out
    ${hovered === "right" ? "translate-x-full" : "translate-x-0"}
  `}
        />

        {/* BUTTONS */}
        <div className="relative z-10 grid grid-cols-2 h-full text-xs sm:text-sm">
          {/* ANALYZE / Sign In */}
          <button
            onMouseEnter={() => setHovered("left")}
            onClick={() => {
              setHovered("left");
              navigate("/signin");
            }}
            className={`
              font-medium
              transition
              ${hovered === "left" ? "text-black" : "text-white/70"}
            `}
          >
            Sign In →
          </button>

          {/* COMPARE / Try Demo */}
          <button
            onMouseEnter={() => setHovered("right")}
            onClick={() => {
              setHovered("right");
              navigate("");
            }}
            className={`
              font-medium
              transition
              ${hovered === "right" ? "text-black" : "text-white/70"}
            `}
          >
            Try Demo →
          </button>
        </div>
      </div>
    </div>
  );
}
