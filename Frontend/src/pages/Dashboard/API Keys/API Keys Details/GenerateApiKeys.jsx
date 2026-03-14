import { KeyRound } from "lucide-react";

function GenerateApiKeys() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-3xl">

      <div className="flex items-center gap-2 mb-4">
        <KeyRound className="w-5 h-5 text-emerald-400" />
        <h2 className="text-white text-lg font-medium">Generate API Key</h2>
      </div>

      <p className="text-sm text-zinc-400 mb-6">
        Create a new API key to authenticate requests with your middleware.
      </p>

      <div className="space-y-4">

        <input
          type="text"
          placeholder="Key Name (ex: frontend-service)"
          className="w-full bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-700"
        />

        <select className="w-full bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm">
          <option>Development</option>
          <option>Production</option>
        </select>

        <button className="bg-white text-black px-5 py-2 rounded-md text-sm font-medium hover:bg-zinc-200 transition">
          Generate Key
        </button>

      </div>

    </div>
  );
}

export default GenerateApiKeys;