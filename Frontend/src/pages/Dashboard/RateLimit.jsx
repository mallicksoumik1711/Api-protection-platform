import { useState } from "react";
import {
  TriangleAlert,
  BotOff,
  ShieldAlert,
  Info,
  Save,
  LockKeyhole,
  CircleCheckBig,
  CopyX,
} from "lucide-react";
import Dropdown from "../../layouts/Dropdown";

function RateLimit() {
  const [limit, setLimit] = useState(50);
  const [windowTime, setWindowTime] = useState(60);
  const [type, setType] = useState("apiKey");
  return (
    <div className="bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          Rate limit
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white py-2">
              Abuse Protection
            </h1>
          </div>

          {/* RIGHT HEADER FEATURES */}
          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                <div className="flex items-center gap-2">
                  <TriangleAlert className="w-4 h-4 text-amber-400" />
                  <span>Rate Limiting</span>
                </div>
                <div className="flex items-center gap-2">
                  <BotOff className="w-4 h-4 text-red-400" />
                  <span>Bot Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-emerald-400" />
                  <span>Attack Prevention</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8">
          Configure rate limits to control the number of requests your APIs can
          handle. This helps prevent abuse and ensures fair usage across all
          clients.
        </p>

        {/* Main Card */}

        <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800/60 rounded-lg p-8 shadow-2xl shadow-black/40 space-y-10 max-w-6xl mx-auto mb-5">
          {/* Header + Info pill */}
          <div className="flex items-start justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-lg font-semibold text-white tracking-tight">
                Rate Limit Settings
              </h1>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Control how many requests your APIs can handle within a defined
                time window.
              </p>
            </div>

            <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900/80 border border-zinc-700/60 rounded-md text-xs text-zinc-400">
              <Info className="w-4 h-4" />
              <span>Changes apply instantly</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left - Form Fields */}
            <div className="space-y-6">
              {/* Request Limit + Time Window – side by side */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-md p-5 space-y-5">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-300">
                      Request Limit
                    </label>
                    <input
                      type="number"
                      value={limit}
                      onChange={(e) => setLimit(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-white text-sm focus:border-zinc-700 outline-none transition"
                      placeholder="50"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-300">
                      Time Window (seconds)
                    </label>
                    <input
                      type="number"
                      value={windowTime}
                      onChange={(e) => setWindowTime(e.target.value)}
                      className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 text-white text-sm focus:border-zinc-700 outline-none transition"
                      placeholder="60"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="#"
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition flex items-center gap-1.5"
                  >
                    Learn more <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900/50 rounded-md space-y-4">
                {/* Limit Applied On */}
                <Dropdown
                  label="Limit Applied On"
                  description="Choose how the rate limit should be applied."
                  options={["Per API Key", "Per IP Address"]}
                  value={type === "apiKey" ? "Per API Key" : "Per IP Address"}
                  onChange={(val) =>
                    setType(val === "Per API Key" ? "apiKey" : "ip")
                  }
                />
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-md p-5 space-y-4">
                <p className="text-xs text-zinc-500">
                  Choose how the rate limit should be applied.
                </p>

                <a
                  href="#"
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition flex items-center gap-1.5"
                >
                  Learn more <span aria-hidden>↗</span>
                </a>
              </div>
            </div>

            {/* Right - Live Preview */}
            <div className="">
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-md p-6 h-fit space-y-4 mb-5">
                <span className="inline-flex items-center px-4 py-1 rounded-full text-xs font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-800/50">
                  Live Preview
                </span>

                <div className="bg-gradient-to-r from-zinc-950 to-zinc-900 rounded-md px-5 py-3">
                  <p className="text-base font-medium text-white leading-relaxed">
                    {limit || 0} requests per{" "}
                    <span className="text-zinc-100">
                      {type === "apiKey" ? "API key" : "IP address"}
                    </span>{" "}
                    every{" "}
                    <span className="text-zinc-100">{windowTime || 0}</span>{" "}
                    seconds
                  </p>
                </div>

                <p className="text-sm text-zinc-400">
                  This limit will be applied automatically across your protected
                  routes.
                </p>

                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <Info className="w-3.5 h-3.5" />
                  <span>Changes apply instantly</span>
                </div>
              </div>
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-md p-6 h-fit space-y-5">
                {/* Title */}
                <div>
                  <h3 className="text-white font-medium">
                    Choose the right protection for your APIs
                  </h3>
                  <p className="text-sm text-zinc-400 mt-2">
                    These settings help you control traffic, block abuse, and
                    keep your APIs stable even under heavy load.
                  </p>
                </div>

                {/* Feature list */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <CopyX className="w-4 text-emerald-400" />
                    <span className="text-zinc-300">
                      Prevent spam and request flooding
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <LockKeyhole className="w-4 text-amber-400" />
                    <span className="text-zinc-300">
                      Protect APIs from automated bots
                    </span>
                  </div>

                  <div className="flex items-start gap-3">
                    <CircleCheckBig className="w-4 text-blue-400" />
                    <span className="text-zinc-300">
                      Ensure fair usage across all API clients
                    </span>
                  </div>
                </div>

                {/* Footer text */}
                <p className="text-xs text-zinc-500">
                  These rules apply instantly once saved.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center gap-2 bg-white text-black px-6 py-2.5 rounded-md font-medium text-sm shadow-lg hover:bg-zinc-200 active:scale-98 transition-all">
              <Save className="w-4 h-4" />
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateLimit;
