const screenshot = "/screens/test-frontpage.png";
const screenshotResponsive = "/screens/test-frontpage-responsive.png";

export default function ScreenshotSection() {
  return (
    <section className="relative bg-gradient-to-br from-black via-slate-900 to-black py-16 sm:py-10 md:py-10 bg-[#07070a] overflow-hidden w-full md:w-3/4 mx-auto px-4 sm:px-6 sm:rounded-xl">
      <div className="mb-10 md:mb-16">
        <p className="text-[10px] sm:text-xs text-white/40 tracking-widest mb-3 md:mb-4">
          Inside The Bouncer Dashboard
        </p>

        <div className="flex flex-col md:flex-row md:items-center md:gap-10">
          <h2 className="text-xl sm:text-2xl md:text-5xl font-semibold leading-tight">
            One Platform For Monitoring,
            <br />
            Access Control & Protection
          </h2>

          <div className="hidden md:block flex-1 h-[1px] bg-white/10 mt-4 md:mt-0" />
        </div>
      </div>
      {/* Content */}
      <div className="relative w-full rounded-lg sm:rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-zinc-900">
        {/* Mobile Image */}
        <img
          src={screenshotResponsive}
          alt="Dashboard Mobile Screenshot"
          className="block md:hidden w-full h-auto object-contain"
        />

        {/* Desktop Image */}
        <img
          src={screenshot}
          alt="Dashboard Screenshot"
          className="hidden md:block w-full h-auto object-contain"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        <div className="absolute inset-0 ring-1 ring-white/20 rounded-lg sm:rounded-2xl md:rounded-3xl pointer-events-none" />
      </div>
    </section>
  );
}
