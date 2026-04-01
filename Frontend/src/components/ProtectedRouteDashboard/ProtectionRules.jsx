function ProtectionRules() {
  return (
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
          <span className="text-sm text-zinc-300">Public but rate-limited</span>
        </label>
      </div>
    </div>
  );
}

export default ProtectionRules;
