
export default function ProductPreview({ children }) {
  return (
    <div className="relative max-w-7xl mx-auto">
      {/* Extremely subtle outer glow — barely visible */}
      <div className="absolute -inset-8 rounded-[32px] bg-gradient-to-r from-purple-600/5 to-fuchsia-600/5 blur-3xl" />

      {/* Ultra-transparent glass shell */}
      <div
        className="
          relative rounded-3xl overflow-hidden
          border border-white/5
          bg-black/8
          backdrop-blur-xl
        "
      >
        {/* Very faint inner highlight — just enough for depth */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/3 to-transparent opacity-50" />

        {children}
      </div>
    </div>
  );
}
