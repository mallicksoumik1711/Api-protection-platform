
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
    <div className="bg-zinc-950/80 border border-zinc-900/80 rounded-lg flex flex-col min-h-0 p-6 shadow-2xl">
      
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-white font-medium">Your API Keys</h2>
          <p className="text-sm text-zinc-400 mt-1">
            Manage and revoke existing API keys
          </p>
        </div>
        <button
          onClick={fetchKeys}
          className="bg-white text-black px-4 py-2 rounded-md text-sm hover:bg-zinc-200 transition-colors"
        >
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
        <div className="flex-1 min-h-0 border border-zinc-900 rounded-lg overflow-hidden bg-black">
          
          <div className="overflow-y-auto h-full max-h-[50vh] custom-scroll scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900">
            <table className="w-full text-sm text-left text-zinc-300">
              
              <thead className="bg-zinc-950 sticky top-0 z-20 border-b border-zinc-700">
                <tr>
                  <th className="px-6 py-4 font-medium text-zinc-400">Name</th>
                  <th className="px-6 py-4 font-medium text-zinc-400">
                    Created
                  </th>
                  <th className="px-6 py-4 font-medium text-zinc-400">
                    Last Used
                  </th>
                  <th className="px-6 py-4 font-medium text-zinc-400">
                    Status
                  </th>
                  <th className="px-6 py-4 font-medium text-zinc-400">Usage</th>
                  <th className="px-6 py-4 w-24"></th>
                </tr>
              </thead>

              <tbody className="divide-y divide-zinc-800">
                {apiKeys.map((key) => (
                  <tr
                    key={key.id}
                    className="hover:bg-zinc-900 transition-all duration-200"
                  >
                    <td className="px-6 py-4 font-medium text-white">
                      {key.name}
                    </td>
                    <td className="px-6 py-4 text-zinc-400">
                      {new Date(key.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-zinc-400">
                      {key.lastUsed
                        ? new Date(key.lastUsed).toLocaleDateString()
                        : "—"}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                          key.status === "active"
                            ? "bg-green-500/10 text-green-400 border border-green-500/20"
                            : "bg-red-500/10 text-red-400 border border-red-500/20"
                        }`}
                      >
                        {key.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <span className="text-zinc-300 font-medium">
                          {key.usage.used}
                        </span>
                        <span className="text-zinc-600">/</span>
                        <span className="text-zinc-500">{key.usage.limit}</span>
                      </div>

                      <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-emerald-400 to-green-500 rounded-full"
                          style={{
                            width: `${Math.min(
                              (key.usage.used / key.usage.limit) * 100,
                              100,
                            )}%`,
                          }}
                        />
                      </div>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-red-400 hover:text-red-300 text-sm font-medium opacity-70 hover:opacity-100 transition-all cursor-pointer">
                        Revoke
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

export default GetApiKeysList;
