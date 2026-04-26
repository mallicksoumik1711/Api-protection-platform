// // charts/Overview.jsx
// import RequestsChart from "../../utils/graphs/RequestsChart";

// const quickStats = [
//   {
//     title: "Total Requests",
//     value: "4.82M",
//     change: "+18.4%",
//     trend: "up",
//     color: "text-emerald-400",
//   },
//   {
//     title: "Blocked Requests",
//     value: "127,400",
//     change: "+9.2%",
//     trend: "up",
//     color: "text-red-400",
//   },
//   {
//     title: "Avg. Latency",
//     value: "41 ms",
//     change: "-6 ms",
//     trend: "down",
//     color: "text-cyan-400",
//   },
//   {
//     title: "Active API Keys",
//     value: "38",
//     change: "+4",
//     trend: "up",
//     color: "text-violet-400",
//   },
// ];

// export default function Overview() {
//   return (
//     <div className="space-y-10 px-4 py-8">
//       {/* Header */}
//       <div>
//         <h2 className="text-xl font-semibold tracking-tight text-white">
//           Dashboard Overview
//         </h2>
//         <p className="mt-2 text-slate-400">
//           Real-time insights into API traffic, security, and performance • Last 30 days
//         </p>
//       </div>

//       {/* Quick stats cards */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {quickStats.map((stat, index) => (
//           <div
//             key={index}
//             className="
//               rounded-lg px-4 py-2
//               bg-gradient-to-b from-slate-900/70 to-slate-950/70
//               border border-white/8 backdrop-blur-xl
//               shadow-xl shadow-black/30
//               transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
//             "
//           >
//             <div className="flex items-center justify-between mb-4">
//               <p className="text-sm font-medium text-slate-400">{stat.title}</p>
//               <span
//                 className={`
//                   text-xs font-medium px-2.5 py-1 rounded-full
//                   ${stat.trend === "up"
//                     ? "bg-emerald-950/60 text-emerald-300 border border-emerald-900/40"
//                     : "bg-red-950/60 text-red-300 border border-red-900/40"}
//                 `}
//               >
//                 {stat.change}
//               </span>
//             </div>

//             <p className="text-xl lg:text-2xl font-bold tracking-tight text-white">
//               {stat.value}
//             </p>

//             <div className={`mt-2 text-sm ${stat.color}`}>
//               {stat.trend === "up" ? "↑" : "↓"} {stat.change} this period
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Main chart section */}
//       <div className="
//         rounded-lg overflow-hidden
//         bg-gradient-to-b from-slate-900/60 to-black/70
//         border border-white/8 backdrop-blur-xl
//         shadow-2xl shadow-black/40
//       ">
//         <div className="p-7 lg:p-9 border-b border-white/8">
//           <div className="flex items-center justify-between">
//             <div>
//               <h3 className="text-xl font-semibold text-white">
//                 API Traffic & Protection
//               </h3>
//               <p className="mt-1.5 text-sm text-slate-400">
//                 Requests per day • Blocked vs Allowed • Last 14 days
//               </p>
//             </div>

//             {/* Simple period selector (static for demo) */}
//             <div className="flex items-center gap-2 text-sm text-slate-400">
//               <button className="px-3 py-1.5 rounded-lg bg-white/10 text-white">
//                 14 days
//               </button>
//               <button className="px-3 py-1.5 rounded-lg hover:bg-white/8">
//                 30 days
//               </button>
//               <button className="px-3 py-1.5 rounded-lg hover:bg-white/8">
//                 90 days
//               </button>
//             </div>
//           </div>
//         </div>

//         <div className="p-6 lg:p-8 h-[380px] lg:h-[420px]">
//           <RequestsChart />
//         </div>
//       </div>

//       {/* Secondary insights row */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//         {/* Top Attacked Endpoints */}
//         <div className="
//           rounded-2xl p-7
//           bg-gradient-to-b from-slate-900/50 to-black/60
//           border border-white/8 backdrop-blur-xl
//           shadow-xl shadow-black/30
//         ">
//           <h3 className="text-lg font-semibold text-white mb-5">
//             Top Attacked Endpoints
//           </h3>
//           <div className="space-y-4">
//             {[
//               { endpoint: "/api/v1/users/login", attacks: "47,820", percent: "38%" },
//               { endpoint: "/api/v1/payments", attacks: "29,300", percent: "23%" },
//               { endpoint: "/api/v1/search", attacks: "18,910", percent: "15%" },
//             ].map((item, i) => (
//               <div key={i} className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
//                 <span className="text-slate-300 font-medium">{item.endpoint}</span>
//                 <div className="text-right">
//                   <div className="text-white">{item.attacks}</div>
//                   <div className="text-xs text-slate-500">{item.percent} of total blocks</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Recent Activity */}
//         <div className="
//           rounded-2xl p-7
//           bg-gradient-to-b from-slate-900/50 to-black/60
//           border border-white/8 backdrop-blur-xl
//           shadow-xl shadow-black/30
//         ">
//           <h3 className="text-lg font-semibold text-white mb-5">
//             Recent Security Events
//           </h3>
//           <div className="space-y-4 text-sm">
//             {[
//               { time: "2 min ago", event: "Rate limit exceeded – IP 172.16.254.1" },
//               { time: "14 min ago", event: "SQL injection attempt blocked" },
//               { time: "37 min ago", event: "API key revoked – suspicious activity" },
//             ].map((item, i) => (
//               <div key={i} className="flex justify-between items-start py-2 border-b border-white/5 last:border-0">
//                 <div>
//                   <div className="text-slate-300">{item.event}</div>
//                   <div className="text-xs text-slate-500 mt-0.5">{item.time}</div>
//                 </div>
//                 <span className="text-xs px-2.5 py-1 rounded-full bg-red-950/60 text-red-300 border border-red-900/40">
//                   Critical
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }