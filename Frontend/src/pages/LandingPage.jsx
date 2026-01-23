import BackgroundDots from "../components/BackgroundDots";
import SegmentedCTA from "../components/Buttons";
import ProductPreview from "../components/ProductPreview";
import DashboardPreview from "../components/DashboardPreview";
import ProcessJourney from "../components/ProcessJourney";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <BackgroundDots />

      {/* Main hero section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Top fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#100F0F] via-transparent to-transparent pointer-events-none" />

        {/* Main content */}
        <div className="relative z-20 flex flex-col items-center text-center px-6 max-w-8xl mx-auto">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Supercharge your API Protection
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-purple-500 bg-clip-text text-transparent">
              with Bouncer
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-sm md:text-2xl lg:text-3xl font-medium text-white/80">
            The fastest API Protection Platform
            <br className="hidden sm:block" />
            For Modern Application
          </p>

          {/* Buttons */}
          <div className="mt-16">
            <SegmentedCTA />
          </div>
        </div>
      </section>

      <ProductPreview>
        <DashboardPreview />
      </ProductPreview>

      <ProcessJourney />

      {/* bottom space */}
      <div className="h-32" />
    </div>
  );
}
