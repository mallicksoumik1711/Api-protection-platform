import { useState } from "react";
import Overview from "./charts/Overview";
import ApiKeys from "./charts/Apikeys";
import RateLimit from "./charts/Ratelimit";
import Logs from "./charts/Logs";
import Settings from "./charts/Settings";

export default function DashboardPreview() {
  const [active, setActive] = useState("overview");

  return (
    <div className="flex min-h-[60vh] max-h-[95vh] text-white">
      {/* Sidebar */}
      <aside
        className="
    w-56 p-4
    border-r border-white/5
    bg-black/5
    backdrop-blur-2xl
  "
      >
        {["overview", "apikeys", "ratelimit", "logs", "settings"].map(
          (item) => (
            <button
              key={item}
              onClick={() => setActive(item)}
              className={`
              w-full text-left px-3 py-4 rounded-lg mb-1
              text-sm font-medium
              transition-all duration-300
              ${
                active === item
                  ? "bg-white/10 text-white"
                  : "text-white/60 hover:bg-white/5 hover:text-white"
              }
            `}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ),
        )}
      </aside>

      {/* Main content area */}
      <main className="flex-1 p-6 bg-black/3 backdrop-blur-2xl">
        {active === "overview" && <Overview />}
        {active === "apikeys" && <ApiKeys />}
        {active === "ratelimit" && <RateLimit />}
        {active === "logs" && <Logs />}
        {active === "settings" && <Settings />}
      </main>
    </div>
  );
}
