import { motion } from "framer-motion";

const screenshotPaths = [
  "/screens/api-key.PNG",
  "/screens/create-project.PNG",
  "/screens/integration.PNG",
  "/screens/jwt-configuration.PNG",
  "/screens/protected-api.PNG",
  "/screens/rate-limiting.PNG",
];

export default function ScreenshotScroll() {
  const images = screenshotPaths.map((path) => ({
    src: path,
    alt: path
      .split("/")
      .pop()
      .replace(/\.(png|jpg|jpeg|webp)$/i, "")
      .replace(/-/g, " "),
  }));

  return (
    <section className="relative py-24 md:py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          See Bouncer in Action
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Scroll down to explore our real dashboard screenshots
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-24 md:space-y-32">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className="flex justify-center will-change-transform"
            >
              <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-950">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
                <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-3xl pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {images.length > 2 && (
        <div className="flex justify-center mt-20">
          <p className="text-white/50 text-sm flex items-center gap-2">
            Scroll to see more screenshots{" "}
            <span className="animate-bounce">↓</span>
          </p>
        </div>
      )}
    </section>
  );
}


