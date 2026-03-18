import { KeyRound, Plus, Copy, Info } from "lucide-react";

function GenerateApiKeys() {
  return (
    <div className="w-full max-w-4xl bg-zinc-900 border border-zinc-800/80 rounded-lg shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-zinc-800">
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
      <div className="p-6 space-y-5">
        <div className="space-y-3">
          <label className="text-xs font-medium text-zinc-400 flex items-center gap-1.5">
            KEY NAME
            <Info className="w-3 h-3" />
          </label>
          <input
            type="text"
            placeholder="frontend-service, mobile-app, etc."
            className="w-full bg-zinc-950 border border-zinc-800 rounded-md px-3 py-2 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-700 transition-all duration-200"
          />
          <p className="text-[10px] text-zinc-500">
            Give your key a descriptive name for easy identification
          </p>
        </div>

        <div className="bg-zinc-950 border border-amber-500/20 rounded-md p-4 flex gap-3">
          <div className="text-amber-400">
            <Info className="w-4 h-4" />
          </div>
          <div className="text-xs text-zinc-400">
            This key will have full access to your middleware. Store it securely
            and never expose it in client-side code.
          </div>
        </div>

        <button className="w-full bg-zinc-950/80 border border-zinc-800 hover:bg-zinc-950/50 text-white font-semibold py-3.5 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer">
          <Plus className="w-4 h-4 text-emerald-400" />
          Generate New Key
        </button>

        <p className="text-center text-[10px] text-zinc-500">
          Generated keys are shown only once. Make sure to copy and save it
          immediately.
        </p>
      </div>
    </div>
  );
}

export default GenerateApiKeys;
