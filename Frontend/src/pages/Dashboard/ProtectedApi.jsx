import { LockKeyhole, Monitor, ShieldCheck, Dot, Plus } from "lucide-react";

function ProtectedApi() {
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
        <div className="w-1/2 bg-zinc-950 border border-zinc-800 rounded-lg p-7 shadow-lg">
          <h2 className="font-semibold text-white mb-1">
            Add Protected Routes
          </h2>
          <p className="text-sm text-zinc-500 mb-6">
            Define a parent route and add multiple child routes under it.
          </p>

          <div className="mb-6">
            <label className="text-xs uppercase tracking-widest text-zinc-500 block mb-2">
              Parent Route
            </label>

            <div className="flex items-center bg-black border border-zinc-900 rounded-md px-3 py-3 text-sm text-zinc-300">
              <span className="text-zinc-500 mr-1">/</span>

              <input
                type="text"
                placeholder="apikey"
                className="bg-transparent outline-none text-white w-full placeholder-zinc-600"
              />
            </div>

            <p className="text-xs text-zinc-600 mt-2">
              Example: api, users, admin, auth
            </p>
          </div>

          <div className="mb-6">
            <label className="text-xs uppercase tracking-widest text-zinc-500 block mb-3">
              Child Routes
            </label>

            <div className="flex items-center gap-2 mb-3">
              <div className="flex-1 flex items-center bg-black border border-zinc-900 rounded-md px-3 py-3 text-sm text-zinc-300">
                <span className="text-zinc-500 mr-1">/</span>

                <input
                  type="text"
                  placeholder="key-details"
                  className="bg-transparent outline-none text-white w-full placeholder-zinc-600"
                />
              </div>

              <button className="p-3 cursor-pointer bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 rounded-md text-white transition">
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between bg-black border border-zinc-800 px-4 py-3 rounded-md text-sm text-zinc-300">
                <span>/apikey/key-details</span>
                <button className="text-red-400 hover:text-red-500 text-xs">
                  remove
                </button>
              </div>

              <div className="flex items-center justify-between bg-black border border-zinc-800 px-4 py-3 rounded-md text-sm text-zinc-300">
                <span>/apikey/key-status</span>
                <button className="text-red-400 hover:text-red-500 text-xs">
                  remove
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            <label className="flex items-center justify-between bg-black border border-zinc-800 rounded-md px-4 py-3">
              <span className="text-sm text-zinc-300">Require API Key</span>
              <input type="checkbox" className="accent-pink-500 w-5 h-5" />
            </label>

            <label className="flex items-center justify-between bg-black border border-zinc-800 rounded-md px-4 py-3">
              <span className="text-sm text-zinc-300">
                Require JWT Authentication
              </span>
              <input type="checkbox" className="accent-blue-500 w-5 h-5" />
            </label>

            <label className="flex items-center justify-between bg-black border border-zinc-800 rounded-md px-4 py-3">
              <span className="text-sm text-zinc-300">Apply Rate Limiting</span>
              <input type="checkbox" className="accent-emerald-500 w-5 h-5" />
            </label>
          </div>

          <button className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-950/50 text-white font-semibold py-3.5 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer">
            Save Protected Routes
          </button>
        </div>

        <div className="flex flex-col h-fit sticky top-6 w-1/2">
          <div className="bg-black border border-zinc-800 rounded-lg px-7 py-4 shadow-inner mb-8">
            <span className="text-xs text-zinc-500">Added keys</span>
          </div>
          <div className="bg-black border border-zinc-800 rounded-lg p-7 shadow-inner">
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

              {/* Examples */}
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

            {/* FOOTER ICONS */}
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
