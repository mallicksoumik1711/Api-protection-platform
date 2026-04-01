import { Construction, LockKeyhole, TriangleAlert } from "lucide-react";

function SecurityFeatures() {
  return (
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
            <input type="checkbox" className="peer sr-only" defaultChecked />
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
            <input type="checkbox" className="peer sr-only" defaultChecked />
            <div className="w-11 h-6 bg-zinc-800 peer-checked:bg-emerald-600 rounded-full transition-all duration-300"></div>
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
          </div>
        </label>
      </div>
    </div>
  );
}

export default SecurityFeatures;
