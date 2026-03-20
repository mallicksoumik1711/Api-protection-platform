import { Bug, Cctv, ChartNoAxesCombinedIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { getApiLogs } from "../../../api/apilogs";

function ApiKeyLogs() {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const data = await getApiLogs();
        setLogs(data);
      } catch (err) {
        console.error("Failed to fetch API logs:", err);
      }
    };

    fetchLogs();
  }, []);

  const groupedLogs = [];

  logs.forEach((log) => {
    const last = groupedLogs[groupedLogs.length - 1];

    const isSameRequest =
      last &&
      last.method === log.method &&
      last.path === log.path &&
      last.status === log.status;

    // only group automatically if status = 304
    if (isSameRequest && log.status === 304) {
      last.count += 1;
      last.lastTime = log.createdAt;
    } else {
      groupedLogs.push({
        ...log,
        count: 1,
        firstTime: log.createdAt,
        lastTime: log.createdAt,
      });
    }
  });

  return (
    <div className="bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          API Logs
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white py-2">
              API Logs Management
            </h1>
          </div>

          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                <div className="flex items-center gap-2">
                  <ChartNoAxesCombinedIcon className="w-4 h-4 text-green-400" />
                  <span>Track API usage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Bug className="w-4 h-4 text-red-400" />
                  <span>Monitor Errors</span>
                </div>
                <div className="flex items-center gap-2">
                  <Cctv className="w-4 h-4 text-violet-400" />
                  <span>Improve Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8">
          Create a project to start monitoring and securely storing your API
          logs. Integrate log collection in your backend to keep all requests
          safely recorded and easily accessible for analysis.
        </p>
      </div>

      <div className="mt-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-medium text-zinc-200">
            All Protected Requests
          </h3>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-emerald-950/40 text-emerald-400 border border-emerald-800/50">
              Live Preview
            </span>
            <span className="text-xs text-zinc-500">Updated just now</span>
          </div>
        </div>

        <div
          className="
      bg-gradient-to-b from-black/80 to-zinc-950/90 
      border border-zinc-800/70 rounded-lg 
      shadow-inner shadow-black/40 
      overflow-hidden
    "
        >
          <div className="bg-zinc-900/70 px-4 py-1.5 border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-500 font-mono">
            <span>protect-middleware • request-log</span>
            <span>showing last 5 mins requests</span>
          </div>

          <div className="p-4 text-xs font-mono text-zinc-300 max-h-[55vh] overflow-auto scrollbar-thin scrollbar-thumb-zinc-700 scrollbar-track-zinc-950">

            {groupedLogs.map((log) => {
              const time = new Date(log.createdAt).toLocaleTimeString();

              const statusColor =
                log.status === 200
                  ? "text-emerald-400"
                  : log.status === 429
                    ? "text-amber-400"
                    : "text-red-400";

              const pathColor =
                log.status === 200
                  ? "text-emerald-300"
                  : log.status === 429
                    ? "text-amber-300"
                    : "text-red-300";

              return (
                <div
                  key={log._id}
                  className="group hover:bg-zinc-900/40 transition-colors -mx-1 px-2 py-1 rounded"
                >
                  <span className="inline-block w-20 text-zinc-600">
                    {time}
                  </span>

                  <span className={`${statusColor} font-medium`}>
                    {log.status}
                  </span>

                  <span className="text-zinc-500 mx-2">→</span>

                  <span className={pathColor}>
                    {log.method} {log.path}
                    {log.status === 304 && log.count > 1 && (
                      <span className="text-zinc-500 ml-2">
                        (x{log.count} in 1m)
                      </span>
                    )}
                  </span>

                  <span className="text-zinc-600 ml-3">• {log.result}</span>

                  <span className="ml-4 text-zinc-700 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                    {log.requestId}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <p className="mt-2 text-xs text-zinc-600 text-center">
          These logs are generated from real traffic passing through your protection layer
        </p>
      </div>
    </div>
  );
}

export default ApiKeyLogs;
