export default function RateLimitsDemo() {
  return (
    <section className="relative py-4 lg:py-8 overflow-hidden">
      {/* Subtle background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-3xl" />
        <div className="absolute right-20 bottom-20 w-80 h-80 bg-indigo-900/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">

        {/* Main showcase – looks like real app window */}
        <div className="
          rounded-lg overflow-hidden
          border border-white/9
          bg-gradient-to-br from-slate-950 via-slate-930 to-black
          backdrop-blur-xl shadow-2xl shadow-black/60
        ">
          {/* Fake window controls */}
          <div className="h-10 bg-black/80 border-b border-white/8 px-6 flex items-center">
            <span className="text-xs font-medium text-slate-600">
              bouncer.app • Live Logs
            </span>
          </div>

          {/* Content area */}
          <div className="p-8 lg:p-12">
            {/* Top summary row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { label: "Active Rules", value: "14" },
                { label: "Limit Hits Today", value: "2,840" },
                { label: "Blocked Overages", value: "317" },
                { label: "Avg. Remaining", value: "73%" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <p className="text-sm text-slate-500 mb-1">{item.label}</p>
                  <p className="text-3xl lg:text-4xl font-bold text-white tracking-tight">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Rule cards – clean & visual */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Default Protection",
                  pattern: "All endpoints",
                  limit: "10,000 req / hour",
                  usage: 68,
                  status: "healthy",
                },
                {
                  name: "Authentication Burst",
                  pattern: "/api/auth/*",
                  limit: "300 req / minute",
                  usage: 42,
                  status: "healthy",
                },
                {
                  name: "Search & Analytics",
                  pattern: "/api/search, /analytics",
                  limit: "1,200 req / 15 min",
                  usage: 94,
                  status: "warning",
                },
              ].map((rule, i) => (
                <div
                  key={i}
                  className="
                    rounded-lg p-6
                    bg-gradient-to-br from-slate-900/60 to-black/70
                    border border-white/8 backdrop-blur-xl
                    shadow-xl shadow-black/40
                    transition-all hover:shadow-2xl hover:border-white/15
                  "
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <h4 className="font-semibold text-white text-lg">
                        {rule.name}
                      </h4>
                      <p className="text-sm text-slate-500 font-mono mt-1">
                        {rule.pattern}
                      </p>
                    </div>

                    <div className="text-right">
                      <div className="text-xl font-bold text-white">
                        {rule.limit.split(' / ')[0]}
                      </div>
                      <div className="text-xs text-slate-500">
                        per {rule.limit.split(' / ')[1]}
                      </div>
                    </div>
                  </div>

                  {/* Simple progress bar */}
                  <div className="relative h-2.5 bg-slate-800/70 rounded-full overflow-hidden mb-3">
                    <div
                      className={`absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ${
                        rule.status === 'healthy' ? 'bg-emerald-500' : 'bg-amber-500'
                      }`}
                      style={{ width: `${rule.usage}%` }}
                    />
                  </div>

                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-400">
                      {Math.round(rule.usage * parseInt(rule.limit.split(',')[0].replace(/,/g, '')) / 100).toLocaleString()} used
                    </span>
                    <span className={`font-medium ${
                      rule.status === 'healthy' ? 'text-emerald-400' : 'text-amber-400'
                    }`}>
                      {rule.status === 'healthy' ? 'Healthy' : 'Near limit'}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer hint */}
            <div className="mt-10 text-center text-sm text-slate-600">
              Granular control • Edge enforcement • Automatic burst handling • Full observability
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}