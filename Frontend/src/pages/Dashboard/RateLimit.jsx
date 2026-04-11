import { useState } from "react";
import {
  Info,
  Save,
  LockKeyhole,
  CircleCheckBig,
  CopyX,
  Dices,
  Hourglass,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { rateLimit } from "../../api/rateLimit";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";

function RateLimit() {
  const navigate = useNavigate();
  const [limit, setLimit] = useState(50);
  const [windowTime, setWindowTime] = useState(60);
  const [type, setType] = useState("sliding");

  const projectId = useSelector((state) => state.project.selectedProjectId);
  if (!projectId) {
    toast.error(
      "No project selected. Please select a project to configure rate limits.",
    );
  }

  const handleSubmit = async () => {
    try {
      const rateLimitData = {
        projectId,
        limit,
        windowTime,
        type,
      };
      const response = await rateLimit(rateLimitData);
      toast.success("Rate limits saved successfully!");
      setTimeout(() => {
        navigate(`/project/${projectId}/integration`);
      }, 1000);
      console.log(response);
    } catch (error) {
      toast.error(error.message);
      console.error(error.message);
    }
  };

  return (
    <div className="bg-black px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.rateLimit.tag}
        title={DashboardHeaderValues.rateLimit.title}
        description={DashboardHeaderValues.rateLimit.description}
        features={DashboardHeaderValues.rateLimit.features}
      />

      <div className="">
        {/* Main Card */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-8 shadow-2xl shadow-black/40 space-y-10 max-w-6xl mx-auto mb-5">
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
            <div className="flex flex-col justify-between space-y-5">
              {/* Request Limit + Time Window – side by side */}
              <div className="bg-zinc-900/50 border border-zinc-800 rounded-md p-5 space-y-2">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-300">
                      Request Limit
                    </label>
                    <div className="relative">
                      {/* Icon */}
                      <Dices className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-amber-400 pointer-events-none" />

                      {/* Input */}
                      <input
                        type="number"
                        value={limit}
                        onChange={(e) => setLimit(e.target.value)}
                        placeholder="50"
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 pl-11 text-white text-sm focus:border-zinc-700 outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-zinc-300">
                      Time Window (seconds)
                    </label>
                    <div className="relative">
                      {/* Icon */}
                      <Hourglass className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-400 pointer-events-none" />

                      {/* Input */}
                      <input
                        type="number"
                        value={windowTime}
                        onChange={(e) => setWindowTime(e.target.value)}
                        className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-4 py-2.5 pl-11 text-white text-sm focus:border-zinc-700 outline-none transition"
                        placeholder="60"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <a
                    href="#"
                    className="text-xs text-zinc-500 hover:text-zinc-300 transition flex items-center gap-1.5"
                  >
                    Learn more <span aria-hidden>↗</span>
                  </a>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-zinc-800 rounded-md p-6 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-300 mb-1">
                    Rate Limit Strategy
                  </label>
                  <p className="text-xs text-zinc-500">
                    Choose how requests are counted and limited
                  </p>
                </div>

                {/* Segmented Control with Sliding Highlight */}
                <div className="relative bg-zinc-950 border border-zinc-800 rounded-md p-1.5">
                  {/* Sliding Highlight */}
                  <div
                    className="absolute top-1 bottom-1 bg-zinc-800/80 rounded-md shadow-lg shadow-black/50 transition-all duration-300 ease-out"
                    style={{
                      left:
                        type === "fixed"
                          ? "6px"
                          : type === "sliding"
                            ? "calc(33.333% + 6px)"
                            : "calc(66.666% + 6px)",
                      width: "calc(33.333% - 12px)",
                    }}
                  />

                  <div className="relative grid grid-cols-3 gap-2">
                    <button
                      onClick={() => setType("fixed")}
                      className={`relative py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 z-10 ${
                        type === "fixed"
                          ? "text-white"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      Fixed Window
                    </button>

                    <button
                      onClick={() => setType("sliding")}
                      className={`relative py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 z-10 ${
                        type === "sliding"
                          ? "text-white"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      Sliding Window
                    </button>

                    <button
                      onClick={() => setType("leaky")}
                      className={`relative py-3 px-4 rounded-md text-sm font-medium transition-all duration-200 z-10 ${
                        type === "leaky"
                          ? "text-white"
                          : "text-zinc-300 hover:text-white"
                      }`}
                    >
                      Leaky Bucket
                    </button>
                  </div>
                </div>

                <div className="bg-zinc-950/70 border border-zinc-800 rounded-lg p-4 text-xs text-zinc-400 space-y-3">
                  {type === "fixed" && (
                    <div>
                      <p className="font-medium text-zinc-300 mb-1">
                        Fixed Window
                      </p>
                      <p>
                        Simple and fast. Allows 50 requests every 60 seconds.
                        Can allow bursts at window boundaries.
                      </p>
                      <p className="text-emerald-400 mt-2 text-[10px]">
                        Good for small apps and internal APIs
                      </p>
                    </div>
                  )}

                  {type === "sliding" && (
                    <div>
                      <p className="font-medium text-zinc-300 mb-1">
                        Sliding Window
                      </p>
                      <p>
                        More accurate and fair. Prevents sudden bursts at window
                        edges. Recommended for most use cases.
                      </p>
                      <p className="text-emerald-400 mt-2 text-[10px]">
                        Best default choice
                      </p>
                    </div>
                  )}

                  {type === "leaky" && (
                    <div>
                      <p className="font-medium text-zinc-300 mb-1">
                        Leaky Bucket
                      </p>
                      <p>
                        Smooths out traffic like a bucket with a hole. Excellent
                        protection against spam and DDoS.
                      </p>
                      <p className="text-emerald-400 mt-2 text-[10px]">
                        Best for public APIs with heavy traffic
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-950/50 text-white font-semibold py-3.5 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <Save className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Save Configuration</span>
                </button>
              </div>
            </div>

            <div className="flex flex-col justify-between">
              <p className="bg-zinc-900/50 p-5 rounded-md text-base text-white leading-relaxed">
                <span className="text-sm">
                  {limit || 0} requests per {windowTime || 0} seconds using{" "}
                </span>
                <span className="text-emerald-400 font-medium">
                  {type === "fixed" && "Fixed Window"}
                  {type === "sliding" && "Sliding Window"}
                  {type === "leaky" && "Leaky Bucket"}
                </span>
              </p>
              <div className="flex flex-wrap bg-zinc-900/50 border border-zinc-900 rounded-md p-5 gap-2">
                <p className="w-full text-[11px] text-zinc-500 mb-1">
                  Not sure what to use? Choose a common rate limit:
                </p>

                <div
                  onClick={() => {
                    setLimit(15);
                    setWindowTime(60);
                  }}
                  className="flex-1 min-w-[120px] bg-black text-[11px] px-3 py-2 rounded-md text-center text-zinc-300 hover:bg-zinc-950 transition cursor-pointer"
                >
                  15 req / min
                </div>

                <div
                  onClick={() => {
                    setLimit(30);
                    setWindowTime(60);
                  }}
                  className="flex-1 min-w-[120px] bg-black text-[11px] px-3 py-2 rounded-md text-center text-zinc-300 hover:bg-zinc-950 transition cursor-pointer"
                >
                  30 req / min
                </div>

                <div
                  onClick={() => {
                    setLimit(50);
                    setWindowTime(60);
                  }}
                  className="flex-1 min-w-[120px] bg-black text-[11px] px-3 py-2 rounded-md text-center text-zinc-300 hover:bg-zinc-950 transition cursor-pointer"
                >
                  50 req / min
                </div>

                <div
                  onClick={() => {
                    setLimit(100);
                    setWindowTime(60);
                  }}
                  className="flex-1 min-w-[120px] bg-black text-[11px] px-3 py-2 rounded-md text-center text-zinc-300 hover:bg-zinc-950 transition cursor-pointer"
                >
                  100 req / min
                </div>

                <div
                  onClick={() => {
                    setLimit(200);
                    setWindowTime(60);
                  }}
                  className="flex-1 min-w-[120px] bg-black text-[11px] px-3 py-2 rounded-md text-center text-zinc-300 hover:bg-zinc-950 transition cursor-pointer"
                >
                  200 req / min
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
        </div>
      </div>
    </div>
  );
}

export default RateLimit;
