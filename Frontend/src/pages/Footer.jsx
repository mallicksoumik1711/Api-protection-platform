import React from "react";
import { Facebook, Send, Instagram, X, Disc } from "lucide-react";
import { FaSquareXTwitter,FaSquareGithub, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  return (
    <div className="relative z-10 bg-black text-white px-6 md:px-12 py-12">
      {/* Divider */}
      <div className="border-t border-white/10 mb-5 w-4/5 mx-auto" />
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
          {/* Left - Brand */}
          <div className="flex gap-5">
            <h1 className="text-3xl font-semibold italic tracking-wide">BOUNCER</h1>
            <p className="text-sm text-white/60 italic max-w-xs">
              Bouncer® play with <br /> the world
            </p>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-6 text-white/70">
            <FaSquareXTwitter size={18} className="hover:text-white cursor-pointer" />
            <FaSquareGithub size={18} className="hover:text-white cursor-pointer" />
            <FaLinkedin size={18} className="hover:text-white cursor-pointer" />
            <FaSquareInstagram size={18} className="hover:text-white cursor-pointer" />
            <SiGmail size={18} className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50 mt-10">
          {/* Left */}
          <div className="flex gap-6 text-zinc-600 font-bold">
            <p>All Rights Reserved © 2026</p>
            <p className="hover:text-white cursor-pointer">Privacy Policy</p>
          </div>

          {/* Right */}
          <div className="flex items-center text-zinc-600">
            <p>
              For press: <span className="text-white">yet to deploy</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
