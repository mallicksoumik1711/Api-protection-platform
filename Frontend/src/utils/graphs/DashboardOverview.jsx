import RequestsChart from "../../utils/graphs/RequestsChart";

const stats = [
  { title: "Requests This Week", value: "3.45k", change: "+6.4%", color: "text-purple-400" },
  { title: "Revenue This Month", value: "$12.9k", change: "-3.1%", color: "text-indigo-400" },
  { title: "Forecast Next Month", value: "$14.4k", change: "+10.3%", color: "text-cyan-400" },
];

export default function Overview() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Dashboard Overview
        </h2>
        <p className="mt-1.5 text-slate-400">
          Real-time API usage & performance • Last 30 days
        </p>
      </div>

      {/* Stats cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="
              rounded-lg p-6
              bg-white/[0.04] border border-white/10
              backdrop-blur-xl shadow-xl shadow-black/20
              transition-all duration-300
              hover:scale-[1.02] hover:bg-white/[0.07] hover:shadow-2xl
            "
          >
            <p className="text-sm text-slate-400 mb-2 font-medium">
              {stat.title}
            </p>
            <p className="text-3xl font-bold tracking-tight text-white">
              {stat.value}
            </p>
            <p className={`mt-2 text-sm font-medium ${stat.color}`}>
              {stat.change}
            </p>
          </div>
        ))}
      </div>

      {/* Main chart card */}
      <div className="
        rounded-lg p-7
        bg-white/[0.04] border border-white/10
        backdrop-blur-xl shadow-xl shadow-black/20
        transition-all duration-300
        hover:shadow-2xl
      ">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              API Requests
            </h3>
            <p className="text-sm text-slate-400 mt-1">
              Daily traffic • Last 7 days
            </p>
          </div>
          {/* You can add time range picker here later */}
        </div>

        <div className="h-80 w-full">
          <RequestsChart />
        </div>
      </div>
    </div>
  );
}