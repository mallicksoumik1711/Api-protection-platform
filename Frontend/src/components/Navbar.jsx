import { Github, ArrowRight } from "lucide-react";

export default function Navbar() {
  return (
    <div className="fixed top-10 left-0 w-full flex justify-center z-50">
      <nav
        className="
    flex items-center justify-between
    w-[80%] max-w-4xl
    rounded-xl
    px-6 py-2

    bg-white/10
    backdrop-blur-sm

    shadow-[0_8px_32px_rgba(0,0,0,0.35)]
  "
      >
        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl">🦊</span>
          <span className="font-small text-gray-100">Bouncer</span>
        </div>

        {/* RIGHT: Actions */}
        <div className="flex items-center gap-3">
          <button
            className="
              flex items-center gap-1
              px-4 py-2
              text-sm font-medium
              rounded-md
              border border-white/20 text-white hover:bg-white/10
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
              border border-white/20 text-white hover:bg-white/10
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
