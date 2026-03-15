function GetApiKeysList() {
  // For demo – replace with real data fetching later
  const apiKeys = [
    {
      id: "key_abc123",
      name: "Development Frontend",
      key: "sk_live_51J9...xYz",
      created: "2026-01-15",
      lastUsed: "2026-03-14",
      status: "active",
    },
    {
      id: "key_def456",
      name: "Backend Service",
      key: "sk_live_51K2...pQr",
      created: "2026-02-03",
      lastUsed: "2026-03-10",
      status: "active",
    },
    {
      id: "key_ghi789",
      name: "Old staging key",
      key: "sk_test_51H8...mNo",
      created: "2025-11-20",
      lastUsed: "2026-01-05",
      status: "revoked",
    },
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
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

      {apiKeys.length === 0 ? (
        <div className="text-center py-12 text-zinc-500">
          No API keys found. Generate your first key above.
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-zinc-300">
            <thead className="text-xs uppercase bg-zinc-800/70">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Key (preview)</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3">Last Used</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {apiKeys.map((key) => (
                <tr
                  key={key.id}
                  className="border-b border-zinc-800 hover:bg-zinc-800/40"
                >
                  <td className="px-4 py-4 font-medium text-white">
                    {key.name}
                  </td>
                  <td className="px-4 py-4 font-mono">
                    {key.key.substring(0, 12)}...
                  </td>
                  <td className="px-4 py-4">{key.created}</td>
                  <td className="px-4 py-4">{key.lastUsed || "—"}</td>
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