import { useState } from "react";
import { ChevronDownIcon } from "lucide-react";

function JwtAdvancedSettings() {
  const [formData, setFormData] = useState({
    secretKey: "",
    expiresInValue: "1",
    expiresInUnit: "h",
    tokenType: "cookie",
    tokenName: "authToken",
    algorithm: "HS256",
  });
  const [isAlgoOpen, setIsAlgoOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);
  return (
    <div className="pt-4 border-t border-zinc-800">
      <button
        type="button"
        onClick={() => setShowAdvanced(!showAdvanced)}
        className="flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-300 transition-colors"
      >
        Advanced Settings
        <span
          className={`transition-transform duration-300 ${showAdvanced ? "rotate-180" : ""}`}
        >
          <ChevronDownIcon className="w-4 h-4" />
        </span>
      </button>

      {showAdvanced && (
        <div className="mt-4 space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-2">
              JWT Algorithm
            </label>

            <div className="relative">
              <button
                type="button"
                onClick={() => setIsAlgoOpen(!isAlgoOpen)}
                className="w-full bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-left text-zinc-100 flex items-center justify-between transition-colors"
              >
                <span>
                  {formData.algorithm === "HS256"
                    ? "HS256 (Recommended for most cases)"
                    : formData.algorithm === "HS384"
                      ? "HS384"
                      : "HS512 (Stronger but slower)"}
                </span>

                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isAlgoOpen ? "rotate-180" : ""
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

              <div
                className={`absolute left-0 bottom-full mb-1 w-full bg-zinc-950 border border-zinc-800 rounded-md overflow-hidden text-sm transition-all duration-300 ${
                  isAlgoOpen
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, algorithm: "HS256" });
                    setIsAlgoOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
                >
                  HS256{" "}
                  <span className="text-xs text-emerald-500/70">
                    (Recommended)
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, algorithm: "HS384" });
                    setIsAlgoOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
                >
                  HS384
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setFormData({ ...formData, algorithm: "HS512" });
                    setIsAlgoOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
                >
                  HS512{" "}
                  <span className="text-xs text-zinc-500">
                    (Stronger but slower)
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default JwtAdvancedSettings;
