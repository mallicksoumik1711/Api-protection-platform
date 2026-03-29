import { useState } from "react";

function JwtExpiry() {
  const [isExpiryOpen, setIsExpiryOpen] = useState(false);
  const [formData, setFormData] = useState({
    secretKey: "",
    expiresInValue: "1",
    expiresInUnit: "h",
    tokenType: "cookie",
    tokenName: "authToken",
    algorithm: "HS256",
  });
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-300 mb-2">
        Token Expiry Time
      </label>

      <div className="flex gap-3">
        <input
          type="number"
          min="1"
          value={formData.expiresInValue}
          onChange={(e) =>
            setFormData({ ...formData, expiresInValue: e.target.value })
          }
          className="w-28 bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-zinc-100 focus:outline-none"
        />

        <div className="relative w-40">
          <button
            type="button"
            onClick={() => setIsExpiryOpen(!isExpiryOpen)}
            className="w-full bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-left text-zinc-100 flex items-center justify-between transition-colors"
          >
            <span>
              {formData.expiresInUnit === "m"
                ? "Minutes"
                : formData.expiresInUnit === "h"
                  ? "Hours"
                  : "Days"}
            </span>

            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                isExpiryOpen ? "rotate-180" : ""
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

          {/* dropdown options */}
          <div
            className={`absolute left-0 w-full mt-1 bg-zinc-950 border border-zinc-800 rounded-md overflow-hidden text-sm transition-all duration-300 ${
              isExpiryOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <button
              type="button"
              onClick={() => {
                setFormData({ ...formData, expiresInUnit: "m" });
                setIsExpiryOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
            >
              Minutes
            </button>

            <button
              type="button"
              onClick={() => {
                setFormData({ ...formData, expiresInUnit: "h" });
                setIsExpiryOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
            >
              Hours
            </button>

            <button
              type="button"
              onClick={() => {
                setFormData({ ...formData, expiresInUnit: "d" });
                setIsExpiryOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
            >
              Days
            </button>
          </div>
        </div>
      </div>

      <p className="mt-2 text-xs text-zinc-500">
        Short expiry (e.g. 15m–1h) is recommended for better security.
      </p>
    </div>
  );
}

export default JwtExpiry;
