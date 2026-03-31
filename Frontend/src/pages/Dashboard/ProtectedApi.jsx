import { useState } from "react";
import {
  LockKeyhole,
  Monitor,
  ShieldCheck,
  Dot,
  Plus,
  Trash2,
  GlobeLock,
  TriangleAlert,
  Construction,
} from "lucide-react";

function ProtectedApi() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);
  const [formData, setFormData] = useState({
    method: "ALL",
    priority: "Normal",
  });
  return (
    <div className="bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          Protected Apis
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white py-2">
              Protected Requests
            </h1>
          </div>

          {/* RIGHT HEADER FEATURES */}
          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                <div className="flex items-center gap-2">
                  <LockKeyhole className="w-4 h-4 text-pink-400" />
                  <span>Secure API Routes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-blue-400" />
                  <span>Monitor Traffic</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Realtime Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8">
          Protected APIs are the routes in your backend that are secured using
          our middleware. Once added, these APIs will automatically apply rate
          limiting and block malicious traffic.
        </p>
      </div>

      <div className="mt-10 max-w-6xl mx-auto flex justify-between gap-10">
        <div className="h-fit top-6 sticky w-1/2 bg-zinc-950 border border-zinc-800 rounded-lg p-7 shadow-lg">
          <h2 className="font-semibold text-white mb-1">Add Protected Route</h2>
          <p className="text-sm text-zinc-500 mb-8">
            Configure how this specific route should be protected by the
            middleware.
          </p>

          {/* Route Setup */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-zinc-200 mb-4 font-medium">
              Route Setup
            </h3>

            {/* Base Route */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
                Base Route <span className="text-red-400">*</span>
              </label>
              <div className="flex items-center bg-black border border-zinc-900 rounded-md px-3 py-3 text-sm text-zinc-300">
                <span className="text-zinc-500 mr-1">/</span>
                <input
                  type="text"
                  placeholder="api"
                  className="bg-transparent outline-none text-white w-full placeholder-zinc-600"
                />
              </div>
              <p className="text-xs text-zinc-600 mt-2">
                Example: api, users, auth, admin
              </p>
            </div>

            {/* Sub Route */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
                Sub Route <span className="text-zinc-500">(optional)</span>
              </label>
              <div className="flex items-center bg-black border border-zinc-900 rounded-md px-3 py-3 text-sm text-zinc-300">
                <span className="text-zinc-500 mr-1">/</span>
                <input
                  type="text"
                  placeholder="users"
                  className="bg-transparent outline-none text-white w-full placeholder-zinc-600"
                />
              </div>
              <p className="text-xs text-zinc-600 mt-2">
                Example: users, profile, admin
              </p>
            </div>

            {/* Child Route */}
            <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
                Child Route <span className="text-zinc-500">(optional)</span>
              </label>
              <div className="flex items-center bg-black border border-zinc-900 rounded-md px-3 py-3 text-sm text-zinc-300">
                <span className="text-zinc-500 mr-1">/</span>
                <input
                  type="text"
                  placeholder="profile"
                  className="bg-transparent outline-none text-white w-full placeholder-zinc-600"
                />
              </div>
              <p className="text-xs text-zinc-600 mt-1">
                You can use dynamic params like{" "}
                <span className="text-emerald-400">:id</span> or{" "}
                <span className="text-emerald-400">:userId</span>
              </p>
            </div>

            {/* HTTP Method */}
            {/* <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
                HTTP Method
              </label>
              <select className="w-full bg-black border border-zinc-900 text-white rounded-md px-4 py-3 text-sm outline-none focus:border-zinc-700 transition">
                <option value="ALL">All Methods</option>
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="PATCH">PATCH</option>
                <option value="DELETE">DELETE</option>
              </select>
            </div> */}

            <div className="mb-6">
              <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
                HTTP Method
              </label>

              <div className="relative">
                {/* Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-left text-zinc-100 flex items-center justify-between transition-colors"
                >
                  <span>
                    {formData.method === "ALL"
                      ? "All Methods"
                      : formData.method}
                  </span>

                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 bottom-full mb-1 w-full bg-zinc-950 border border-zinc-800 rounded-md overflow-hidden text-sm transition-all duration-300 ${
                    isOpen
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95 pointer-events-none"
                  }`}
                >
                  {["ALL", "GET", "POST", "PUT", "PATCH", "DELETE"].map(
                    (method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, method });
                          setIsOpen(false);
                        }}
                        className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
                      >
                        {method === "ALL" ? "All Methods" : method}
                      </button>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Wildcard Toggle */}
            <div className="mb-6">
              <label className="group flex items-center justify-between bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-5 py-4 cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center">
                    <span className="text-slate-400">
                      <GlobeLock className="w-5 h-5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-white font-medium">
                      Protect all nested routes
                    </span>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      This will protect everything under this path (wildcard)
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-11 h-6 bg-zinc-800 peer-checked:bg-emerald-600 rounded-full transition-all duration-300"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
            </div>
          </div>

          {/* Protection Rules */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-zinc-300 mb-4 font-medium">
              Protection Rules
            </h3>

            <div className="space-y-2">
              <label className="flex items-center gap-3 bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  name="protectionType"
                  className="accent-amber-400"
                  defaultChecked
                />
                <span className="text-sm text-zinc-300">API Key only</span>
              </label>

              <label className="flex items-center gap-3 bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  name="protectionType"
                  className="accent-blue-400"
                />
                <span className="text-sm text-zinc-300">
                  Require valid JWT Token only
                </span>
              </label>

              <label className="flex items-center gap-3 bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  name="protectionType"
                  className="accent-purple-400"
                />
                <span className="text-sm text-zinc-300">
                  Require both API Key and JWT Token
                </span>
              </label>

              <label className="flex items-center gap-3 bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-4 py-3 cursor-pointer">
                <input
                  type="radio"
                  name="protectionType"
                  className="accent-emerald-400"
                />
                <span className="text-sm text-zinc-300">
                  Public but rate-limited
                </span>
              </label>
            </div>
          </div>

          {/* Security Features */}
          <div className="mb-8">
            <h3 className="text-xs uppercase tracking-widest text-zinc-300 mb-4 font-medium">
              Security Features
            </h3>

            <div className="space-y-3">
              {/* Rate Limiting */}
              <label className="group flex items-center justify-between bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-5 py-2 cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-amber-400">
                      <TriangleAlert className="w-5 h-5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-white font-medium">
                      Apply Rate Limiting
                    </span>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Limit requests per minute
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-zinc-800 peer-checked:bg-emerald-600 rounded-full transition-all duration-300"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>

              {/* Block Bots */}
              <label className="group flex items-center justify-between bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-5 py-2 cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center">
                    <span className="text-red-600">
                      <Construction className="w-5 h-5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-white font-medium">
                      Block Bots &amp; Crawlers
                    </span>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Block malicious automated traffic
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <input type="checkbox" className="peer sr-only" />
                  <div className="w-11 h-6 bg-zinc-800 peer-checked:bg-emerald-600 rounded-full transition-all duration-300"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>

              {/* Enable Protection */}
              <label className="group flex items-center justify-between bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-5 py-2 cursor-pointer transition-all duration-200">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-md flex items-center justify-center">
                    <span className="text-sky-400 text-xl">
                      <LockKeyhole className="w-5 h-5" />
                    </span>
                  </div>
                  <div>
                    <span className="text-sm text-white font-medium">
                      Enable Protection
                    </span>
                    <p className="text-xs text-zinc-500 mt-0.5">
                      Activate middleware for this route
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="checkbox"
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className="w-11 h-6 bg-zinc-800 peer-checked:bg-emerald-600 rounded-full transition-all duration-300"></div>
                  <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
                </div>
              </label>
            </div>
          </div>

          {/* Route Priority */}
          <div className="mb-8">
            <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
              Route Priority
            </label>
            <div className="relative">
              {/* Button */}
              <button
                type="button"
                onClick={() => setIsPriorityOpen(!isPriorityOpen)}
                className="w-full bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-left text-zinc-100 flex items-center justify-between transition-colors"
              >
                <span>
                  {formData.priority === "HIGH"
                    ? "High"
                    : formData.priority === "LOW"
                      ? "Low"
                      : "Normal"}
                </span>

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isPriorityOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown */}
              <div
                className={`absolute left-0 bottom-full mb-1 w-full bg-zinc-950 border border-zinc-800 rounded-md overflow-hidden text-sm transition-all duration-300 ${
                  isPriorityOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                {["HIGH", "NORMAL", "LOW"].map((priority) => (
                  <button
                    key={priority}
                    type="button"
                    onClick={() => {
                      setFormData({ ...formData, priority });
                      setIsPriorityOpen(false);
                    }}
                    className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
                  >
                    {priority === "HIGH"
                      ? "High"
                      : priority === "LOW"
                        ? "Low"
                        : "Normal"}
                  </button>
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-600 mt-2">
              More specific routes should have higher priority
            </p>
          </div>

          {/* FINAL ROUTE PREVIEW */}
          <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-md px-5 py-4">
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
              Final Route Preview
            </div>
            <div className="font-mono text-white flex items-center gap-3">
              <span className="text-emerald-400">GET</span>
              <span>/api/users/profile</span>
            </div>
            <div className="mt-1 text-sm text-zinc-400">
              Protection: <span className="text-amber-400">API Key + JWT</span>{" "}
              • Rate Limited • Bots Blocked
            </div>
          </div>

          <button className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-950/50 hover:border-zinc-700 text-white font-semibold py-3.5 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer">
            <LockKeyhole className="w-4 h-4" />
            Save Protected Route
          </button>
        </div>

        <div className="flex flex-col h-fit sticky top-6 w-1/2">
          <div className="bg-black border border-zinc-900 rounded-lg px-6 py-5 shadow-inner mb-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-white">
                Protected Route Structure
              </h3>

              <span className="text-xs text-zinc-500">
                Auto-generated from your inputs
              </span>
            </div>

            <div className="space-y-4 text-sm font-mono text-zinc-300">
              <div>
                <div className="text-white font-medium">/apikey</div>

                <div className="ml-6 mt-2 space-y-1 border-l border-zinc-800 pl-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">/key-details</span>
                    <button className="text-xs text-red-400 hover:text-red-500">
                      remove
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">/key-status</span>
                    <button className="text-xs text-red-400 hover:text-red-500">
                      remove
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-white font-medium">/auth</div>

                <div className="ml-6 mt-2 space-y-1 border-l border-zinc-800 pl-4">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">/login</span>
                    <button className="text-xs text-red-400 hover:text-red-500">
                      remove
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-zinc-400">/register</span>
                    <button className="text-xs text-red-400 hover:text-red-500">
                      remove
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs text-zinc-600 mt-5 text-center">
              Routes are grouped automatically based on parent path
            </p>
          </div>
          
          <div className="bg-black border border-zinc-800 rounded-lg px-7 py-4 shadow-inner mb-5">
            {/* Route Description */}
            <div className="">
              <label className="text-xs uppercase tracking-widest text-white block mb-4">
                Route Description{" "}
                <span className="text-zinc-500">(optional)</span>
              </label>
              <textarea
                placeholder="Protect user profile and settings endpoints"
                className="w-full bg-black border border-zinc-900 rounded-md px-4 py-3 text-sm text-zinc-300 placeholder-zinc-600 outline-none"
              />
            </div>
          </div>
          <div className="bg-black border border-zinc-800 rounded-lg px-7 py-4 shadow-inner">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                How to configure protected routes
              </h3>

              <div className="space-y-4 text-sm text-zinc-400">
                <div className="flex gap-1">
                  <Dot className="w-4" />
                  <p>
                    Enter the route exactly as it exists in your backend (for
                    example
                    <span className="text-white"> /api/users</span>).
                  </p>
                </div>

                <div className="flex gap-1">
                  <Dot className="w-4" />
                  <p>
                    Use <span className="text-white">*</span> if you want to
                    protect all nested routes automatically.
                  </p>
                </div>

                <div className="flex gap-1">
                  <Dot className="w-4" />
                  <p>
                    Enable API Key or JWT depending on how your backend handles
                    authentication.
                  </p>
                </div>

                <div className="flex gap-1">
                  <Dot className="w-4" />
                  <p>
                    Once saved, every request to this route will automatically
                    go through the protection layer.
                  </p>
                </div>
              </div>

              <div className="mt-7">
                <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
                  Example routes
                </p>

                <div className="space-y-2 text-sm">
                  <div className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-zinc-300">
                    /api/*
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-zinc-300">
                    /users/*
                  </div>
                  <div className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-zinc-300">
                    /admin/*
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-500">
              <div className="flex items-center gap-4">
                <span>Secure APIs</span>
                <span>
                  <Dot className="w-4" />
                </span>
                <span>Block Bots</span>
                <span>
                  <Dot className="w-4" />
                </span>
                <span>Rate Limit</span>
              </div>

              <span>Protection enabled instantly</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProtectedApi;
