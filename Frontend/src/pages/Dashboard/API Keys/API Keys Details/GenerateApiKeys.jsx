import { useState } from "react";
import {
  KeyRound,
  Plus,
  Copy,
  CopyCheck,
  Info,
  ScanQrCode,
  Eye,
  EyeOff,
} from "lucide-react";
import { generateApiKeys } from "../../../../api/apikey";
import { toast } from "react-hot-toast";

function GenerateApiKeys() {
  const [keyName, setKeyName] = useState("");
  const [generatedKey, setGeneratedKey] = useState(null);
  const [showKey, setShowKey] = useState(false);
  const [keyCopied, setKeyCopied] = useState(false);

  const handleGenerate = async () => {
    if (!keyName.trim()) {
      toast.error("Please enter a valid key name");
      return;
    }
    if (generatedKey && !keyCopied) {
      toast.error("Please copy the generated key before creating a new one");
      return;
    }
    try {
      const response = await generateApiKeys(keyName);
      setGeneratedKey(response.apiKey);
      setKeyCopied(false);
      toast.success(
        "API Key generated successfully! Make sure to copy it now.",
      );
      console.log("Generated API Key:", response.apiKey);
    } catch (err) {
      toast.error("Failed to generate API key");
      console.error("Error generating API key:", err);
    }
  };

  const handleCopy = async () => {
    if (!generatedKey) return;
    try {
      await navigator.clipboard.writeText(generatedKey);
      setKeyCopied(true);
      toast.success("API Key copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy API key");
      console.error("Error copying API key:", err);
    }
  };

  const toggleShowKey = () => {
    setShowKey((prev) => !prev);
  };

  return (
    <div className="w-full w-full max-w-4xl bg-zinc-950/80 border border-zinc-900/80 rounded-lg shadow-2xl">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b border-zinc-900">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-md bg-emerald-500/10 flex items-center justify-center">
            <KeyRound className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <h2 className="text-white text font-semibold tracking-tight">
              Generate API Key
            </h2>
            <p className="text-zinc-400 text-sm mt-1">
              Create a secure key to authenticate your middleware requests
            </p>
          </div>
        </div>
      </div>

      {/* Form Content */}
      <div className="p-4 sm:p-6 space-y-5">
        <div className="space-y-3">
          <label className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
            KEY NAME
            <Info className="w-3 h-3" />
          </label>
          <input
            type="text"
            value={keyName}
            onChange={(e) => setKeyName(e.target.value)}
            placeholder="frontend-service, mobile-app, etc."
            className="w-full bg-black border border-zinc-900 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-all duration-200"
          />
          <p className="text-[10px] text-zinc-500">
            Give your key a descriptive name for easy identification
          </p>
        </div>

        <div className="bg-black border border-amber-500/20 rounded-md p-4 flex gap-3">
          <div className="text-amber-400">
            <Info className="w-4 h-4 " />
          </div>
          <div className="text-xs text-zinc-400 break-all">
            This key will have full access to your middleware. Store it securely
            and never expose it in client-side code.
          </div>
        </div>

        <button
          onClick={handleGenerate}
          className="w-full bg-zinc-950/80 border border-zinc-900 hover:bg-black text-white font-semibold py-3.5 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
        >
          <Plus className="w-4 h-4 text-emerald-400" />
          Generate New Key
        </button>

        {generatedKey && (
          <div className="bg-black border border-emerald-500/20 rounded-md p-4 flex justify-between items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="text-emerald-400">
                <ScanQrCode className="w-4 h-4" />
              </div>
              <div className="text-xs text-zinc-400 break-all">
                {showKey
                  ? generatedKey
                  : "••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••••"}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Eye toggle */}
              <button
                onClick={toggleShowKey}
                className="text-zinc-400 hover:text-emerald-300 transition"
              >
                {showKey ? (
                  <Eye className="w-4 h-4 cursor-pointer" />
                ) : (
                  <EyeOff className="w-4 h-4 cursor-pointer" />
                )}
              </button>

              {/* Copy button */}
              {showKey && (
                <button
                  onClick={handleCopy}
                  className="text-emerald-400 hover:text-emerald-300 transition"
                >
                  {!keyCopied ? (
                    <Copy className="w-4 h-4 text-amber-500" />
                  ) : (
                    <CopyCheck className="w-4 h-4 text-emerald-500" />
                  )}
                </button>
              )}
            </div>
          </div>
        )}

        <p className="text-center text-[10px] text-zinc-500">
          Generated keys are shown only once. Make sure to copy and save it
          immediately.
        </p>
      </div>
    </div>
  );
}

export default GenerateApiKeys;
