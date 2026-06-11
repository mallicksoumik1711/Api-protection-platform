import React from "react";
import { FaSquareXTwitter, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-gradient-to-br from-black via-slate-900 to-black text-white py-10 px-4 sm:px-6 w-full md:w-3/4 mx-auto sm:rounded-t-xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-sm font-medium text-white">
          <p>All Rights Reserved © 2026</p>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 sm:gap-10">
          <div className="flex justify-center md:justify-end items-center gap-5 sm:gap-6 text-white/70 w-full md:w-auto">
            <FaSquareXTwitter
              size={18}
              className="hover:text-white cursor-pointer transition h-6 w-6"
            />
            <FaSquareGithub
              size={18}
              className="hover:text-white cursor-pointer transition h-6 w-6"
            />
            <FaLinkedin
              size={18}
              className="hover:text-white cursor-pointer transition h-6 w-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
