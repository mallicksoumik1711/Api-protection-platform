import React from "react";
import {
  FaSquareXTwitter,
  FaSquareGithub,
  FaLinkedin,
  FaSquareInstagram,
} from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-br from-black via-slate-900 to-black text-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 w-full md:w-3/4 mx-auto">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div
          className="
          flex flex-col 
          md:flex-row 
          justify-between 
          items-center 
          gap-8 sm:gap-10
        "
        >
          {/* Left - Brand */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5 text-center sm:text-left">
            <h2
              className="text-7xl font-bold text-transparent tracking-tight"
              style={{
                WebkitTextStroke: "1px rgb(113 113 122)", // zinc-500
              }}
            >
              BOUNCER
            </h2>
            <p className="text-xs sm:text-sm text-white/60 max-w-xs">
              Bouncer® play with <br className="hidden sm:block" />
              the world
            </p>
          </div>

          {/* Right - Social Icons */}
          <div
            className="
            flex 
            justify-center md:justify-end 
            items-center 
            gap-5 sm:gap-6 
            text-white/70 
            w-full md:w-auto
          "
          >
            <FaSquareXTwitter
              size={18}
              className="hover:text-white cursor-pointer transition sm:w-6 sm:h-6 h-8 w-8"
            />
            <FaSquareGithub
              size={18}
              className="hover:text-white cursor-pointer transition sm:w-6 sm:h-6 h-8 w-8"
            />
            <FaLinkedin
              size={18}
              className="hover:text-white cursor-pointer transition sm:w-6 sm:h-6 h-8 w-8"
            />
            <FaSquareInstagram
              size={18}
              className="hover:text-white cursor-pointer transition sm:w-6 sm:h-6 h-8 w-8"
            />
            <SiGmail
              size={18}
              className="hover:text-white cursor-pointer transition sm:w-6 sm:h-6 h-8 w-8"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div
          className="
          flex flex-col 
          md:flex-row 
          justify-between 
          items-center 
          gap-4 sm:gap-6 
          text-xs sm:text-sm 
          text-white/50 
          mt-8 sm:mt-10
        "
        >
          {/* Left */}
          <div
            className="
            flex flex-col sm:flex-row 
            items-center 
            gap-2 sm:gap-6 
            text-zinc-500 font-medium text-center sm:text-left
          "
          >
            <p>All Rights Reserved © 2026</p>
            <p className="hover:text-white cursor-pointer transition">
              Privacy Policy
            </p>
          </div>

          {/* Right */}
          <div className="text-zinc-500 text-center md:text-right">
            <p>
              For press: <span className="text-white">Yet to deploy</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
