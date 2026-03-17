import { useState, useEffect } from "react";
import { getApiKeysDetails } from "../../../../api/apikey";

function GetApiKeysList() {
  const [apiKeys, setApiKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchKeys = async () => {
    try {
      const data = await getApiKeysDetails();
      setApiKeys(data);
    } catch (error) {
      console.error("Error fetching API keys details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchKeys();
  }, []);

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 flex flex-col min-h-0">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white font-medium">Your API Keys</h2>
          <p className="text-sm text-zinc-400 mt-1">
            Manage and revoke existing API keys
          </p>
        </div>
        <button className="bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-zinc-200 transition-colors">
          Fetch / Refresh
        </button>
      </div>

      {loading ? (
        <div className="text-center py-12 text-zinc-500">Loading...</div>
      ) : apiKeys.length === 0 ? (
        <div className="text-center py-12 text-zinc-500">
          No API keys found. Generate your first key above.
        </div>
      ) : (
        <div className="flex-1 min-h-0 overflow-y-auto max-h-[60vh] custom-scroll">
          <table className="w-full text-sm text-left text-zinc-300">
            <thead className="text-xs uppercase bg-zinc-800/70 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3">Last Used</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Usage</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((key) => (
                <tr
                  key={key.id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/40"
                >
                  {/* Name */}
                  <td className="px-4 py-4 font-medium text-white">
                    {key.name}
                  </td>

                  {/* Created */}
                  <td className="px-4 py-4">
                    {new Date(key.createdAt).toLocaleDateString()}
                  </td>

                  {/* Last Used */}
                  <td className="px-4 py-4">
                    {key.lastUsed
                      ? new Date(key.lastUsed).toLocaleDateString()
                      : "—"}
                  </td>

                  {/* Status */}
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block px-2 py-0.5 text-xs rounded-full ${
                        key.status === "active"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {key.status}
                    </span>
                  </td>

                  {/* Usage */}
                  <td className="px-4 py-4 text-xs text-zinc-400">
                    {key.usage.used} / {key.usage.limit}
                  </td>

                  {/* Action */}
                  <td className="px-4 py-4 text-right">
                    <button className="text-red-400 hover:text-red-300 text-xs">
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default GetApiKeysList;
