import { useEffect, useState } from "react";

export default function ServerWakeupScreen({ show, completed }) {
  const [progress, setProgress] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const [messageIndex, setMessageIndex] = useState(0);

  const messages = [
    "Preparing API gateway",
    "Loading security rules",
    "Initializing middleware",
    "Establishing secure connection",
    "Waking backend server",
  ];

  // Progress animation
  useEffect(() => {
    if (!show) {
      setProgress(0);
      setElapsed(0);
      setMessageIndex(0);
      return;
    }

    const timer = setInterval(() => {
      setElapsed((prev) => prev + 1);

      setProgress((prev) => {
        if (prev < 50) return prev + 2.5;
        if (prev < 80) return prev + 0.75;
        if (prev < 95) return prev + 0.15;
        return 95;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [show]);

  useEffect(() => {
    if (!show || completed) return;

    const msgTimer = setInterval(() => {
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }, 4000);

    return () => clearInterval(msgTimer);
  }, [show, completed]);

  useEffect(() => {
    if (completed) {
      setProgress(100);
    }
  }, [completed]);

  if (!show) return null;

  const mins = String(Math.floor(elapsed / 60)).padStart(2, "0");
  const secs = String(elapsed % 60).padStart(2, "0");

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-xl px-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-black/20 p-8 shadow-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-white mb-3 anton-regular tracking-wide">BOUNCER</h2>

          <p className="text-white/70 mb-8 oswald-text tracking-wide">
            {completed ? "Connection established" : "Starting secure services"}
          </p>

          <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full bg-white transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="mt-3 text-sm text-white/50">
            {Math.floor(progress)}%
          </div>

          <div className="mt-8 text-white/80 min-h-[24px] oswald-text tracking-wide">
            {completed ? "Connected ✓" : messages[messageIndex]}
          </div>

          <div className="mt-4 text-sm text-white/40">
            Elapsed time: {mins}:{secs}
          </div>

          <div className="mt-8 text-xs text-white/30 leading-relaxed">
            Running on free infrastructure.
            <br />
            Initial startup may take up to 2 minutes.
          </div>
        </div>
      </div>
    </div>
  );
}
