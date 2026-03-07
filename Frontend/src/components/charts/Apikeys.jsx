export default function ApiKeysShowcase() {
  return (
    <section className="py-4 lg:py-6 bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">
          Keys management
        </h2>
        <p className="mt-2 mb-6 text-slate-400">
          Real-time insights into API traffic, security, and performance • Last 30 days
        </p>
      </div>

        {/* Main card – very clean glass look */}
        <div className="
          rounded-lg border border-white/8
          bg-gradient-to-b from-slate-950 to-black
          backdrop-blur-xl overflow-hidden
          shadow-2xl shadow-black/60
        ">
          {/* Subtle top bar */}
          <div className="h-10 bg-black/80 border-b border-white/8 px-6 flex items-center">
            <span className="text-xs font-medium text-slate-600">
              bouncer.app • API Keys
            </span>
          </div>

          <div className="p-10 lg:p-14 space-y-12">
            {/* Key metrics – understated */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { label: "Active Keys", value: "Unlimited" },
                { label: "Requests (30d)", value: "47.2M" },
                { label: "Average Latency", value: "41ms" },
                { label: "Key Rotation", value: "Auto" },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-xl lg:text-2xl font-bold text-white tracking-tight">
                    {item.value}
                  </div>
                  <div className="mt-2 text-sm text-slate-500">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Table – very clean, professional typography */}
            <div className="rounded-lg border border-white/8 overflow-hidden bg-black/40">
              <table className="w-full text-left">
                <thead className="bg-slate-950/80">
                  <tr>
                    <th className="px-10 py-6 text-sm font-medium text-slate-400">Name</th>
                    <th className="px-10 py-6 text-sm font-medium text-slate-400">Prefix</th>
                    <th className="px-10 py-6 text-sm font-medium text-slate-400 hidden md:table-cell">Created</th>
                    <th className="px-10 py-6 text-sm font-medium text-slate-400 hidden lg:table-cell">Last used</th>
                    <th className="px-10 py-6 text-sm font-medium text-slate-400 hidden sm:table-cell">30d requests</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-sm">
                  {[
                    { name: "Production Frontend", prefix: "sk_live_", created: "Mar 4, 2026", last: "now", req: "19,840", status: "Active" },
                    { name: "Backend Service", prefix: "sk_live_", created: "Feb 22, 2026", last: "today", req: "8,310", status: "Active" },
                    { name: "Development Sandbox", prefix: "sk_test_", created: "Jan 12, 2026", last: "yesterday", req: "2,670", status: "Active" },
                  ].map((row, i) => (
                    <tr key={i} className="hover:bg-white/[0.015] transition-colors">
                      <td className="px-10 py-6 font-medium text-white">{row.name}</td>
                      <td className="px-10 py-6 font-mono text-slate-400">{row.prefix}••••</td>
                      <td className="px-10 py-6 text-slate-500 hidden md:table-cell">{row.created}</td>
                      <td className="px-10 py-6 text-slate-500 hidden lg:table-cell">{row.last}</td>
                      <td className="px-10 py-6 text-slate-400 hidden sm:table-cell">{row.req}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Small footer note */}
            <div className="text-center text-sm text-slate-600">
              Enterprise key management • Audit logs • Automatic rotation • Role-based access
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}