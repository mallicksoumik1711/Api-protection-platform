import { Activity } from "lucide-react";
import { useState, useEffect } from "react";
import { getApiKeysDetails } from "../../../../api/apikey";
import ApiKeysLimitsSkeleton from "../../../../layouts/skeletons/ApiKeysLimitSkeleton";

function ApiKeysLimits() {
  const [apiKeys, setApiKeys] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchKeys = async () => {
    try {
      // for testing, remove in production
      await new Promise((resolve) => setTimeout(resolve, 1000));
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
    <div className="flex flex-col bg-zinc-950 border border-zinc-900 rounded-lg p-4 sm:p-6">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <Activity className="w-5 h-5 text-emerald-400" />
        <h2 className="text-white font-medium">API Usage & Limits</h2>
      </div>

      <p className="text-sm text-zinc-400 mb-6">
        Monitor how your API keys are being used and track remaining limits.
      </p>

      {/* Loading */}
      {loading ? (
        <ApiKeysLimitsSkeleton />
      ) : apiKeys.length === 0 ? (
        <div className="text-center text-zinc-500 py-10">
          No API keys found.
        </div>
      ) : (
        <div className="space-y-4 pr-1 sm:pr-2 max-h-[50vh] sm:max-h-[40vh] overflow-y-auto">
          {apiKeys.map((key) => {
            const percentage =
              key.usage.limit > 0
                ? (key.usage.used / key.usage.limit) * 100
                : 0;

            return (
              <div
                key={key.id}
                className="border border-zinc-900 rounded-md p-4 bg-black"
              >
                {/* Top Row */}
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-white text-sm">{key.name}</h3>

                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      key.status === "active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {key.status}
                  </span>
                </div>

                {/* Usage */}
                <div className="flex justify-between text-xs text-zinc-400 mb-2">
                  <span>
                    {key.usage.used} / {key.usage.limit} requests
                  </span>
                  <span>
                    {Math.max(key.usage.limit - key.usage.used, 0)} left
                  </span>
                </div>

                {/* Progress */}
                <div className="w-full bg-zinc-800 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full ${
                      percentage > 80
                        ? "bg-red-500"
                        : percentage > 50
                          ? "bg-yellow-400"
                          : "bg-emerald-400"
                    }`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>

                {/* Expiry */}
                <p className="text-xs text-zinc-500 mt-2">
                  Expires on{" "}
                  {key.expiresAt
                    ? new Date(key.expiresAt).toLocaleDateString("en-IN")
                    : "Never"}
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ApiKeysLimits;
