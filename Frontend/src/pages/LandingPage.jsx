import BackgroundDots from "../components/BackgroundDots";
import SegmentedCTA from "../components/Buttons";
import FeaturesStrip from "../components/FeaturesStrip";
import Navbar from "../components/Navbar";
import ScrollRevealSection from "../components/ScrollRevealSection";
import ScreenshotScroll from "../components/ScreenshotScroll";
import FeaturesPage from "./FeaturesPage";
import Footer from "./Footer";

export default function LandingPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans">
      <BackgroundDots />

      {/* Main hero section */}
      <ScrollRevealSection direction="up" duration="1000" delay="100">
        <section className="relative min-h-screen flex items-center justify-center">
          <Navbar />
          <div className="relative z-20 flex flex-col items-center text-center px-4 xs:px-6 sm:px-10 max-w-8xl mx-auto lg:mt-10 mt-18">
            <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.2] anton-regular">
              Supercharge your API Protection
              <br />
              <span className="">
                with Bouncer
              </span>
            </h1>

            <p className="oswald-text leading-[1.2] mt-6 sm:mt-8 max-w-3xl text-xl sm:text-4xl text-white/80 px-2 sm:px-0">
              The fastest API Protection Platform
              <br className="" />
              For Modern Applications
            </p>

            <div className="mt-8 sm:mt-10 w-full max-w-md sm:max-w-none">
              <SegmentedCTA />
            </div>
          </div>
        </section>
      </ScrollRevealSection>

      <ScrollRevealSection direction="up" duration="800" delay="100">
        <ScreenshotScroll />
      </ScrollRevealSection>

      <ScrollRevealSection direction="up" duration="800" delay="100">
        <FeaturesStrip />
      </ScrollRevealSection>

      <ScrollRevealSection direction="up" duration="800" delay="100">
        <FeaturesPage />
      </ScrollRevealSection>

      <ScrollRevealSection direction="up" duration="800" delay="100">
        <Footer />
      </ScrollRevealSection>
    </div>
  );
}
