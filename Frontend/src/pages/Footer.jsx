import React from "react";
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden sm:rounded-t-xl mx-auto w-full md:w-3/4 bg-gradient-to-br from-black via-slate-900 to-black py-4">
      <div className="relative z-10 flex flex-col justify-between">
        {/* Logo Text */}
        <div className="px-6 flex items-center justify-center sm:inline">
          <h1 className="text-[4rem] sm:text-[8rem] font-black tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-br from-black/70 via-slate-900 to-black/30">
            BOUNCER
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 gap-4 mt-8">
          <p className="text-xs text-zinc-500">
            © 2026 Bouncer. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-zinc-500">
            <a href="#" className="hover:text-white transition text-sm">
              LinkedIn
            </a>

            <a href="#" className="hover:text-white transition text-sm">
              GitHub
            </a>

            <a href="#" className="hover:text-white transition text-sm">
              Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
