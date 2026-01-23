// import DashboardOverview from "../../utils/graphs/DashboardOverview";

// function Overview() {
//   const stats = [
//     {
//       title: "Total Requests",
//       value: "1.2M",
//       change: "+12% this week",
//       color: "text-green-400",
//     },
//     {
//       title: "Blocked Requests",
//       value: "18,430",
//       change: "Attack traffic",
//       color: "text-red-400",
//     },
//     {
//       title: "Rate Limit Hits",
//       value: "3,218",
//       change: "Last 24h",
//       color: "text-purple-400",
//     },
//     {
//       title: "Avg Latency",
//       value: "128ms",
//       change: "Stable",
//       color: "text-cyan-400",
//     },
//   ];

//   return (
//     <div>
//       <h3 className="text-xl font-semibold mb-6">Dashboard Overview</h3>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
//         {stats.map((stat, i) => (
//           <div
//             key={i}
//             className="
//         rounded-xl p-5
//         bg-white/[0.015]
//         border border-white/5
//         backdrop-blur-xl
//         transition
//         hover:bg-white/[0.025]
//       "
//           >
//             <p className="text-xs text-white/50 mb-1">{stat.title}</p>
//             <p className="text-3xl font-bold">{stat.value}</p>
//             <p className={`text-sm mt-1 ${stat.color}/80`}>{stat.change}</p>
//           </div>
//         ))}
//       </div>

//       <div className="mt-8 rounded-xl p-5 bg-white/[0.015] border border-white/5 backdrop-blur-xl">
//         <p className="text-sm text-white/50 mb-4">
//           Conversion Rate (Last Year)
//         </p>
//         <DashboardOverview />
//       </div>
//     </div>
//   );
// }

// export default Overview;




import DashboardOverview from "../../utils/graphs/DashboardOverview";
import RequestsChart from "../../utils/graphs/RequestsChart"; // new chart

function Overview() {
  const stats = [
    {
      title: "This Week",
      value: "3.45k",
      change: "+6.4%",
      color: "text-purple-400",
    },
    {
      title: "This Month",
      value: "$12.9k",
      change: "-3.1%",
      color: "text-indigo-400",
    },
    {
      title: "Upcoming",
      value: "$14.4k",
      change: "+10.3%",
      color: "text-cyan-400",
    },
  ];

  return (
    <div>
      <h3 className="text-xl font-semibold mb-6">Dashboard Overview</h3>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT – VERTICAL CARDS */}
        <div className="flex flex-col gap-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="
                rounded-xl p-5
                bg-white/[0.04]
                border border-white/10
                backdrop-blur-xl
                hover:bg-white/[0.06]
                transition
              "
            >
              <p className="text-xs text-white/50 mb-1">{stat.title}</p>
              <p className="text-2xl font-semibold">{stat.value}</p>
              <p className={`text-sm mt-1 ${stat.color}`}>{stat.change}</p>
            </div>
          ))}
        </div>

        {/* RIGHT – CHART */}
        <div className="lg:col-span-2 rounded-xl p-5 bg-white/[0.04] border border-white/10 backdrop-blur-xl">
          <p className="text-sm text-white/50 mb-4">
            Traffic Analytics
          </p>

          {/* Swap chart types here */}
          <RequestsChart />
        </div>

      </div>
    </div>
  );
}

export default Overview;
