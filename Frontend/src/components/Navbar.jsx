import { Github, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="w-full flex justify-center">
      <nav
        className="
          flex items-center justify-between
          w-[80%] max-w-4xl
          bg-white
          rounded-xl
          px-6 py-1
          shadow-[0_10px_30px_rgba(0,0,0,0.08)]
        "
      >
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🦊</span>
          <span className="font-semibold text-gray-900">
            SuperGitSight
          </span>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3">
          <button
            className="
              flex items-center gap-1
              px-4 py-1.5
              text-sm font-medium
              rounded-md
              border border-gray-300
              hover:bg-gray-100
              transition
            "
          >
            Analyze
            <ArrowRight size={14} />
          </button>

          <button
            className="
              w-9 h-9
              flex items-center justify-center
              rounded-md
              border border-gray-300
              hover:bg-gray-100
              transition
            "
          >
            <Github size={18} />
          </button>
        </div>
      </nav>
    </div>
  );
}
