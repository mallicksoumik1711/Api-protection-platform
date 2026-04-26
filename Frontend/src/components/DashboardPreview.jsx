// import { useState } from "react";
// import Overview from "./charts/Overview";
// import ApiKeys from "./charts/Apikeys";
// import RateLimit from "./charts/Ratelimit";
// import Logs from "./charts/Logs";
// import Settings from "./charts/Settings";

// export default function DashboardPreview() {
//   const [active, setActive] = useState("overview");

//   const items = [
//     { id: "overview", label: "Overview" },
//     { id: "apikeys",   label: "API Keys" },
//     { id: "ratelimit", label: "Rate Limits" },
//     { id: "logs",      label: "Logs" },
//     { id: "settings",  label: "Settings" },
//   ];

//   return (
//     <div 
//       className="
//         flex h-[90vh] min-h-[60vh] w-full overflow-hidden
//         rounded-lg border border-white/10
//         bg-gradient-to-br from-slate-950 via-slate-950 to-black
//         shadow-2xl
//       "
//     >
//       {/* Sidebar */}
//       <aside className="
//         w-72 flex-shrink-0 border-r border-white/10
//         bg-black/30 backdrop-blur-xl
//       ">
//         <div className="p-6">
//           <h2 className="mb-8 text-xl font-semibold tracking-tight text-white/90">
//             API Dashboard
//           </h2>
//           <nav className="space-y-1.5">
//             {items.map((item) => (
//               <button
//                 key={item.id}
//                 onClick={() => setActive(item.id)}
//                 className={`
//                   w-full text-left px-4 py-3 rounded-lg text-sm font-medium
//                   transition-all duration-300
//                   ${active === item.id 
//                     ? "bg-white/15 text-white shadow-md" 
//                     : "text-slate-400 hover:bg-white/10 hover:text-white"
//                   }
//                 `}
//               >
//                 {item.label}
//               </button>
//             ))}
//           </nav>
//         </div>
//       </aside>

//       {/* Main content */}
//       <main className="flex-1 overflow-y-auto bg-black/20 backdrop-blur-sm">
//         {active === "overview" && <Overview />}
//         {active === "apikeys"   && <ApiKeys />}
//         {active === "ratelimit" && <RateLimit />}
//         {active === "logs"      && <Logs />}
//         {active === "settings"  && <Settings />}
//       </main>
//     </div>
//   );
// }