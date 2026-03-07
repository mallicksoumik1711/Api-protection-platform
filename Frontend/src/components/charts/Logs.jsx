export default function LogsDemo() {
  return (
    <section className="relative py-6 lg:py-8 bg-black overflow-hidden">
      {/* Very subtle background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-950 to-black opacity-90" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 lg:px-6">

        {/* The log viewer – looks like real app */}
        <div className="
          rounded-lg overflow-hidden
          border border-white/10
          bg-gradient-to-b from-slate-950 to-black
          backdrop-blur-xl shadow-2xl shadow-black/70
        ">
          {/* Thin top bar */}
          <div className="h-10 bg-black/80 border-b border-white/8 px-6 flex items-center">
            <span className="text-xs font-medium text-slate-600">
              bouncer.app • Live Logs
            </span>
          </div>

          {/* Logs content – column layout */}
          <div className="px-4 py-2 lg:px-6 lg:py-4 font-mono text-sm">
            <div className="">
              {[
                {
                  time: "2026-03-07 21:14:22.847",
                  status: 200,
                  message: "POST /api/v1/auth/login → success (user: rajaditya_42)",
                },
                {
                  time: "2026-03-07 21:14:18.312",
                  status: 200,
                  message: "GET /api/v1/users/me → success",
                },
                {
                  time: "2026-03-07 21:13:59.004",
                  status: 429,
                  message: "GET /api/v1/search?q=premium+dark+theme → rate limit exceeded (key: sk_live_…f8a2)",
                },
                {
                  time: "2026-03-07 21:13:41.778",
                  status: 403,
                  message: "POST /api/v1/payments → forbidden (invalid signature)",
                },
                {
                  time: "2026-03-07 21:13:22.193",
                  status: 200,
                  message: "GET /api/v1/docs/openapi.json → success",
                },
              ].map((log, i) => (
                <div
                  key={i}
                  className="
                    grid grid-cols-[auto,auto,1fr] gap-6 items-start
                    py-2.5 border-b border-white/5 last:border-0
                    hover:bg-white/[0.015] transition-colors
                  "
                >
                  {/* Timestamp column */}
                  <div className="text-slate-600 whitespace-nowrap text-right">
                    {log.time}
                  </div>

                  {/* Status code column */}
                  <div className="w-16 text-right">
                    <span
                      className={`
                        inline-block w-12 text-center font-medium rounded
                        ${
                          log.status === 200
                            ? "text-emerald-400"
                            : log.status === 429
                            ? "text-amber-400"
                            : "text-red-400"
                        }
                      `}
                    >
                      {log.status}
                    </span>
                  </div>

                  {/* Message column */}
                  <div className="text-slate-300 break-all">
                    {log.message}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}