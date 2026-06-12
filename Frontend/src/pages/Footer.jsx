import React from "react";
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden sm:rounded-t-xl mx-auto w-full md:w-3/4 bg-gradient-to-br from-black via-slate-900 to-black py-4">
      <div className="relative z-10 flex flex-col justify-between">
        {/* Logo Text */}
        <div className="px-6 flex items-center justify-center sm:inline">
          <h1 className="text-[5rem] sm:text-[10rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-black/10 via-slate-900 to-black/20 anton-regular">
            BOUNCER
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-4 mt-8">
          <p className="text-xs text-white/50">
            © 2026 Bouncer. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-white/50">
            <div className="flex items-center gap-2 hover:text-white transition">
              <FaLinkedin />
              <a href="#" className="text-sm">
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
              <FaSquareGithub />
              <a href="#" className="text-sm">
                GitHub
              </a>
            </div>

            <div className="flex items-center gap-2 hover:text-white transition">
              <FaSquareXTwitter />
              <a href="#" className="text-sm">
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
