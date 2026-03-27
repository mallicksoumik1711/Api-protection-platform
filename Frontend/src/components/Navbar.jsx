import { Github, ArrowRight, Menu, X } from "lucide-react";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";

export default function Navbar() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current > lastScroll && current > 80) {
        setShow(false);
        setIsMenuOpen(false);
      } else {
        setShow(true);
      }

      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div
      className={`
        fixed top-10 left-0 w-full flex justify-center z-50 px-4
        transition-transform duration-300 ease-out
        ${show ? "translate-y-0" : "-translate-y-32"}
      `}
    >
      <nav
        className="
          flex items-center justify-between
          w-full max-w-4xl
          rounded-md
          px-6 py-2
          bg-white/10 backdrop-blur-sm
          shadow-[0_8px_32px_rgba(0,0,0,0.35)]
        "
      >
        {/* Logo */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <img
            src="/asset/Images/bouncer.png"
            alt="Bouncer Logo"
            className="w-8"
          />
          <span className="text-gray-100">Bouncer</span>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center justify-center gap-3">
          <button className="flex items-center gap-2 px-6 py-2 text-sm rounded-md border border-white/20 text-white hover:bg-white/10">
            Analyze
            <ArrowRight size={14} />
          </button>

          <button className="w-9 h-9 flex items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10">
            <Github size={18} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden w-9 h-9 flex items-center justify-center rounded-md border border-white/20 text-white hover:bg-white/10"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 bg-white/10 backdrop-blur-sm rounded-md border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.35)] py-4 px-6 flex flex-col gap-3">
          <button
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-md border border-white/20 text-white hover:bg-white/10 w-full"
          >
            Analyze
            <ArrowRight size={14} />
          </button>

          <button
            onClick={() => {
              setIsMenuOpen(false);
            }}
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm rounded-md border border-white/20 text-white hover:bg-white/10 w-full"
          >
            <Github size={18} />
            GitHub
          </button>
        </div>
      )}
    </div>
  );
}
