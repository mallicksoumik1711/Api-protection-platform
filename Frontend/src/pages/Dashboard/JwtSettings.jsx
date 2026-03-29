import { useState } from "react";
import {
  Copy,
  CopyCheck,
  BotOff,
  ShieldAlert,
  Link,
  FilePlusCorner,
  ChevronDownIcon,
} from "lucide-react";

function JwtSettings() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [isExpiryOpen, setIsExpiryOpen] = useState(false);
  const [isAlgoOpen, setIsAlgoOpen] = useState(false);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const [formData, setFormData] = useState({
    secretKey: "",
    expiresInValue: "1",
    expiresInUnit: "h",
    tokenType: "cookie",
    tokenName: "authToken",
    algorithm: "HS256",
  });

  const generateSecretKey = () => {
    const randomSecret = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setFormData((prev) => ({ ...prev, secretKey: randomSecret }));
  };

  const handleSaveJwtSettings = async () => {
    try {
      const payload = {
        enabled: isEnabled,
        secretKey: formData.secretKey,
        expiresIn: `${formData.expiresInValue}${formData.expiresInUnit}`,
        tokenType: formData.tokenType,
        tokenName: formData.tokenName,
        algorithm: formData.algorithm,
      };

      console.log("Saving JWT Settings:", payload);

      // later we will call backend here
      // await axios.post("/api/jwt-settings", payload);
    } catch (error) {
      console.error("Failed to save JWT settings", error);
    }
  };

  return (
    <div className="bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          jwt settings
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white py-2">
              JWT Authentication Settings
            </h1>
          </div>

          {/* RIGHT HEADER FEATURES */}
          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-violet-400" />
                  <span>Attack Pattern Blocking</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link className="w-4 h-4 text-amber-400" />
                  <span>Analytics & Insights</span>
                </div>
                <div className="flex items-center gap-2">
                  <BotOff className="w-4 h-4 text-cyan-400" />
                  <span>Bot & Crawler Detection</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8">
          Configure your JWT authentication settings to secure your API
          endpoints, protect your routes, set your secret key, choose the
          signing algorithm, and specify token expiration.
        </p>
      </div>

      <div className="mt-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-3 mr-6">
          <h3 className="text-sm font-medium text-zinc-200">
            Enable JWT Security
          </h3>

          <label className="relative inline-flex items-center cursor-pointer group">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={isEnabled}
              onChange={() => setIsEnabled(!isEnabled)}
            />

            {/* Track */}
            <div className="w-12 h-6 bg-zinc-800/80 border border-zinc-700 rounded-full peer transition-all duration-300 peer-checked:bg-emerald-600 "></div>

            {/* Thumb */}
            <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-zinc-600 rounded-full shadow-lg transition-all duration-300 peer-checked:translate-x-6 peer-checked:bg-white peer-checked:shadow-emerald-500/30 flex items-center justify-center">
              <div className="w-2 h-2 bg-emerald-500 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
            </div>

            {/* Labels */}
            <div className="flex items-center gap-2.5 ml-4 text-xs font-medium">
              <span
                className={`transition-colors duration-200 ${isEnabled ? "text-emerald-400" : "text-zinc-500"}`}
              >
                Enable
              </span>
              <span
                className={`transition-colors duration-200 ${!isEnabled ? "text-zinc-400" : "text-zinc-500"}`}
              >
                Disable
              </span>
            </div>
          </label>
        </div>

        <div className="mt-6 bg-zinc-950/90 border border-zinc-900/80 rounded-lg p-7 space-y-7 shadow-inner mr-6 mb-6">
          {/* Secret Key */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-medium text-zinc-300">
                JWT Secret Key
              </label>
              <span className="text-xs lowercase text-zinc-500/70">
                Required • Keep it secret
              </span>
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={formData.secretKey}
                onChange={(e) =>
                  setFormData({ ...formData, secretKey: e.target.value })
                }
                placeholder="e.g. superlongrandomstring12345..."
                className="flex-1 bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-all"
              />
              <button
                type="button"
                onClick={generateSecretKey}
                className="whitespace-nowrap px-6 py-3.5 bg-zinc-900 hover:bg-zinc-950 border border-zinc-800/80 text-white text-xs font-semibold rounded-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                Generate Secret
              </button>
            </div>
            <p className="mt-2 text-xs text-zinc-500">
              Used to sign and verify tokens. A strong random secret prevents
              token forgery.
            </p>
          </div>

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

          {/* Token Location */}
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-2">
              Where should the token be stored?
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="tokenType"
                  value="header"
                  checked={formData.tokenType === "header"}
                  onChange={(e) =>
                    setFormData({ ...formData, tokenType: e.target.value })
                  }
                  className="w-4 h-4 accent-emerald-500 cursor-pointer"
                />
                <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors">
                  Authorization Header{" "}
                  <span className="text-xs text-zinc-500">(Bearer)</span>
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="tokenType"
                  value="cookie"
                  checked={formData.tokenType === "cookie"}
                  onChange={(e) =>
                    setFormData({ ...formData, tokenType: e.target.value })
                  }
                  className="w-4 h-4 accent-emerald-500 cursor-pointer"
                />
                <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors">
                  HttpOnly Cookie{" "}
                  <span className="text-xs text-emerald-500/70">
                    (More Secure)
                  </span>
                </span>
              </label>
            </div>
            <p className="mt-1.5 text-xs text-zinc-500">
              Cookies are generally safer against XSS attacks.
            </p>
          </div>

          {/* Cookie Name */}
          {formData.tokenType === "cookie" && (
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-2">
                Cookie Name
              </label>
              <input
                type="text"
                value={formData.tokenName}
                onChange={(e) =>
                  setFormData({ ...formData, tokenName: e.target.value })
                }
                placeholder="authToken"
                className="w-full bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
              <p className="mt-2 text-xs text-zinc-500">
                Recommended: authToken or jwt_token
              </p>
            </div>
          )}

          {/* Advanced Settings */}
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

                    {/* Dropdown menu */}
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

          {/* save */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <p className="text-xs text-zinc-500">
              These settings will be used to generate and verify JWT tokens for
              this project.
            </p>

            <button
              type="button"
              onClick={handleSaveJwtSettings}
              className="px-7 py-3 bg-zinc-900 hover:bg-zinc-950/80 border border-zinc-800 text-white text-sm font-semibold rounded-md transition-all cursor-pointer"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JwtSettings;
