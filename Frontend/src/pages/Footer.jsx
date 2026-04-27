import React from "react";

export default function Footer() {
  return (
    <section className="relative bg-zinc-950 text-white py-10 md:py-18 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        {/* texture */}
        <div
          className="absolute inset-0 opacity-[1]"
          style={{
            backgroundImage: "url('/textures/otis-redding.png')",
          }}
        />

        {/* Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                className="w-10 h-10 rounded-md"
                src="/asset/Images/bouncer.png"
                alt="Bouncer Logo"
              />
              <span className="text-lg font-semibold tracking-wide">
                BOUNCER
              </span>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-xs">
              Secure, monitor, and scale your APIs with a modern protection
              layer built for high-performance applications.
            </p>

            <div className="flex gap-2 pt-2">
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                MIT License
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                Open Source
              </span>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-xs tracking-widest text-white/40 mb-5">
              PRODUCT
            </h3>
            <ul className="space-y-3 text-sm">
              {["Dashboard", "Quick Start", "Features"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs tracking-widest text-white/40 mb-5">
              RESOURCES
            </h3>
            <ul className="space-y-3 text-sm">
              {["Documentation", "GitHub", "Sponsor"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs tracking-widest text-white/40 mb-5">
              CONNECT
            </h3>
            <ul className="space-y-3 text-sm">
              {["Twitter / X", "GitHub"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/70 hover:text-white transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-16 border-t border-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
          <p>© 2026 Bouncer. All rights reserved.</p>

          <p className="text-center md:text-right">
            Built with <span className="text-white/70">React.js</span> •{" "}
            <span className="text-white/70">Tailwind CSS</span> •{" "}
            <span className="text-white/70">Node.js</span>
          </p>
        </div>
      </div>
    </section>
  );
}
