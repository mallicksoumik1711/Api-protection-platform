import { useEffect, useState } from "react";

function DashboardHeader({ tag, title, features, description }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* FIXED TAG BAR FOR MOBILE */}
      <div
        className={`sm:hidden fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-zinc-800/80 shadow-md shadow-black/30"
            : "bg-black/40 backdrop-blur-xs"
        }`}
      >
        <div className="px-4 py-3 mt-2.5">
          <p className="text-xs uppercase tracking-widest text-zinc-400 flex justify-end">
            {tag}
          </p>
        </div>
      </div>

      {/* HEADER CONTENT */}
      <div className="max-w-6xl mx-auto pt-14 sm:pt-0">
        {/* DESKTOP TAG */}
        <p className="hidden sm:flex text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4 justify-start">
          {tag}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg sm:text-3xl font-semibold text-white py-2">
              {title}
            </h1>
          </div>

          {/* RIGHT SIDE FEATURES */}
          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                {features?.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon className={`w-4 h-4 ${item.color}`} />
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8 hidden sm:block">
          {description}
        </p>
      </div>
    </>
  );
}

export default DashboardHeader;
