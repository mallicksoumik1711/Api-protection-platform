import { GlobeLock } from "lucide-react";

function NestedRouteToggle({ formData, setFormData }) {
  return (
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
