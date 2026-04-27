import React from "react";

const features = [
  {
    title: "JWT Authentication",
    description:
      "Secure your APIs with JSON Web Tokens for robust authentication.",
    image: "/screens/jwt-configuration.PNG",
  },
  {
    title: "Rate Limiting",
    description:
      "Easily customize and modify rate limits to control API usage.",
    image: "/screens/rate-limiting.PNG",
  },
  {
    title: "Protected Routes",
    description:
      "Define and secure your API routes with custom rules and permissions.",
    image: "/screens/protected-api.PNG",
  },
  {
    title: "Realtime Logs",
    description:
      "Monitor your API activity in real-time with detailed logs and analytics.",
    image: "/screens/logs.PNG",
  },
];

function Card({ feature }) {
  return (
    <div className="relative w-full h-[250px] sm:h-[300px] group overflow-hidden rounded-2xl border border-white/10">
      {/* Image */}
      <img
        src={feature.image}
        alt={feature.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-10 mix-blend-overlay"
        style={{
          backgroundImage: "url('/textures/otis-redding.png')",
        }}
      />

      {/* Text */}
      <div className="absolute bottom-4 left-4 right-4 z-10">
        <h3 className="text-sm font-semibold lowercase">{feature.title}</h3>
        <p className="text-xs text-white/70 mt-1">{feature.description}</p>
      </div>

      {/* Hover ring */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/20 transition" />
    </div>
  );
}

export default function FeaturesPage() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden shadow-lg shadow-white">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: "url('/textures/otis-redding.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 py-16">
        {/* Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-6 gap-6">
          {/* Row 1 */}
          <div className="sm:col-span-2">
            <Card feature={features[0]} />
          </div>

          <div className="sm:col-span-4">
            <Card feature={features[1]} />
          </div>

          {/* Row 2 */}
          <div className="sm:col-span-4">
            <Card feature={features[2]} />
          </div>

          <div className="sm:col-span-2">
            <Card feature={features[3]} />
          </div>
        </div>
      </div>
    </div>
  );
}
