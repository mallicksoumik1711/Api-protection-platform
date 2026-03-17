function ApiKeysLimits() {
  return (
    <div className="h-full flex flex-col bg-zinc-900 border border-zinc-800 rounded-lg p-6">

      <h2 className="text-white font-medium mb-3">
        API Key Limits
      </h2>

      <p className="text-sm text-zinc-400 mb-6">
        Configure request limits for each API key to prevent abuse.
      </p>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <label className="text-sm text-zinc-400 block mb-2">
            Requests per minute
          </label>
          <input
            type="number"
            placeholder="100"
            className="w-full bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-400 block mb-2">
            Requests per day
          </label>
          <input
            type="number"
            placeholder="10000"
            className="w-full bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm"
          />
        </div>

      </div>

      <button className="mt-6 bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-zinc-200 transition-colors">
        Save Limits
      </button>

    </div>
  );
}

export default ApiKeysLimits;