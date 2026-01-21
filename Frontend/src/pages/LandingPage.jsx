import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

export default function LandingPage() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -9999, y: -9999, down: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width, height;

    // Config – tune these!
    const DOT_RADIUS = 1;
    const DOT_SPACING = 16; // matches your previous 16px grid
    const REPEL_RADIUS = 120; // how far the mouse influences dots
    const REPEL_STRENGTH = 1.5; // how strong the push (0.4–1.2)
    const DAMPING = 0.92; // how quickly dots slow down (0.85–0.97)
    const OPACITY = 0.3; // #ffffff33 ≈ 0.2

    // Store dots as {x, y, vx, vy, origX, origY}
    const dots = [];

    const resize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;

      dots.length = 0;
      for (let y = 0; y < height + DOT_SPACING; y += DOT_SPACING) {
        for (let x = 0; x < width + DOT_SPACING; x += DOT_SPACING) {
          dots.push({
            x,
            y,
            vx: 0,
            vy: 0,
            origX: x,
            origY: y,
          });
        }
      }
    };

    const onMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      const { x: mx, y: my } = mouseRef.current;

      dots.forEach((dot) => {
        // Distance from mouse to dot
        const dx = dot.x - mx;
        const dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < REPEL_RADIUS && dist > 0.1) {
          const force = (1 - dist / REPEL_RADIUS) ** 2 * REPEL_STRENGTH;
          dot.vx += (dx / dist) * force;
          dot.vy += (dy / dist) * force;
        }

        // Return to original position + damping
        dot.vx += (dot.origX - dot.x) * 0.04;
        dot.vy += (dot.origY - dot.y) * 0.04;

        dot.vx *= DAMPING;
        dot.vy *= DAMPING;

        dot.x += dot.vx;
        dot.y += dot.vy;

        // Draw dot
        ctx.globalAlpha = OPACITY;
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove);

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background dots canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none z-0"
      />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center text-center px-6 pt-32">
        {/* Bouncer title */}
        <h1 className="max-w-4xl text-3xl md:text-5xl lg:text-7xl font-semibold tracking-tight leading-tight">
          The fastest API Protection Platform
          <br />
          for modern applications.
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-2xl text-base md:text-lg text-white/60">
          Secure your APIs with rate limiting, API keys, abuse detection, and
          real-time monitoring — all from a single dashboard.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex items-center gap-4">
          <button className="inline-flex items-center gap-2 rounded-lg bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition">
            Get started
            <ArrowRight size={16} />
          </button>

          <button className="rounded-lg border border-white/15 px-5 py-2.5 text-sm text-white/80 hover:bg-white/5 transition">
            View documentation
          </button>
        </div>
      </div>

    </div>
  );
}
