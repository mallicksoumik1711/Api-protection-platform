function RouteStructure() {
  return (
    <div className="bg-black border border-zinc-900 rounded-lg px-6 py-5 shadow-inner mb-5">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-white">
          Protected Route Structure
        </h3>

        <span className="text-xs text-zinc-500">
          Auto-generated from your inputs
        </span>
      </div>

      <div className="space-y-4 text-sm font-mono text-zinc-300">
        <div>
          <div className="text-white font-medium">/apikey</div>

          <div className="ml-6 mt-2 space-y-1 border-l border-zinc-800 pl-4">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">/key-details</span>
              <button className="text-xs text-red-400 hover:text-red-500">
                remove
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-400">/key-status</span>
              <button className="text-xs text-red-400 hover:text-red-500">
                remove
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="text-white font-medium">/auth</div>

          <div className="ml-6 mt-2 space-y-1 border-l border-zinc-800 pl-4">
            <div className="flex items-center justify-between">
              <span className="text-zinc-400">/login</span>
              <button className="text-xs text-red-400 hover:text-red-500">
                remove
              </button>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-zinc-400">/register</span>
              <button className="text-xs text-red-400 hover:text-red-500">
                remove
              </button>
            </div>
          </div>
        </div>
      </div>

      <p className="text-xs text-zinc-600 mt-5 text-center">
        Routes are grouped automatically based on parent path
      </p>
    </div>
  );
}

export default RouteStructure;
