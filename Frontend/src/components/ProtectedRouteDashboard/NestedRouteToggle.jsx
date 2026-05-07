import { GlobeLock } from "lucide-react";

function NestedRouteToggle({ formData, setFormData }) {
  return (
    <div className="mb-6">
      <label className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-black border border-zinc-800 hover:bg-zinc-900/20 rounded-md px-4 sm:px-5 py-4 cursor-pointer transition-all duration-200">
        
        {/* LEFT CONTENT */}
        <div className="flex items-start sm:items-center gap-3 min-w-0">
          <div className="w-8 h-8 rounded-md flex items-center justify-center shrink-0">
            <span className="text-slate-400">
              <GlobeLock className="w-4 h-4" />
            </span>
          </div>

          <div className="min-w-0">
            <span className="text-sm text-white font-medium block">
              Protect all nested routes
            </span>

            <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed break-words">
              This will protect everything under this path (wildcard)
            </p>
          </div>
        </div>

        {/* TOGGLE */}
        <div className="relative self-end sm:self-auto shrink-0 w-full sm:w-auto">
          <input
            type="checkbox"
            checked={formData.route.protectNestedRoute}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev,
                route: {
                  ...prev.route,
                  protectNestedRoute: e.target.checked,
                },
              }))
            }
            className="peer sr-only"
          />

          <div className="w-11 h-6 bg-zinc-800 peer-checked:bg-emerald-600 rounded-full transition-all duration-300"></div>

          <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-5"></div>
        </div>
      </label>
    </div>
  );
}

export default NestedRouteToggle;