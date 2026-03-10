import {
  LayoutDashboard,
  Box,
  FileText,
  BarChart2,
  Gauge,
  Eye,
  Shield,
  Globe,
  Search
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="h-screen w-1/5 bg-black border-r border-zinc-800 flex flex-col overflow-y-auto scrollbar scrollbar-thumb-zinc-800 scrollbar-track-black">
      {/* PROJECT HEADER */}
      <div className="px-4 py-4 border-b border-zinc-800">
        <p className="text-sm font-medium text-zinc-200">Soumik's projects</p>
      </div>

      {/* SEARCH */}
      <div className="px-2 py-3">
        <input
          placeholder="Find..."
          className="w-full bg-zinc-900 text-sm px-3 py-2 rounded-md border border-zinc-800 focus:outline-none"
        />
      </div>

      {/* MENU */}
      <div className="flex-1 px-2 space-y-2 text-sm">
        <SidebarItem
          icon={<LayoutDashboard size={16} />}
          text="Projects"
          active
        />

        <SidebarItem icon={<Box size={16} />} text="Deployments" />
        <SidebarItem icon={<FileText size={16} />} text="Logs" />
        <SidebarItem icon={<BarChart2 size={16} />} text="Analytics" />
        <SidebarItem icon={<Gauge size={16} />} text="Speed Insights" />
        <SidebarItem icon={<Eye size={16} />} text="Observability" />
        <SidebarItem icon={<Shield size={16} />} text="Firewall" />
        <SidebarItem icon={<Globe size={16} />} text="CDN" />

        <div className="my-4 border-t border-zinc-800"></div>

        <SidebarItem text="Domains" />
        <SidebarItem text="Integrations" />
        <SidebarItem text="Storage" />
        <SidebarItem text="Flags" />
        <SidebarItem text="Agent" />
        <SidebarItem text="AI Gateway" />
        <SidebarItem text="Sandboxes" />
      </div>

      {/* USER */}
      <div className="p-3 flex items-center gap-2 mt-5">
        <img src="https://i.pravatar.cc/32" className="w-7 h-7 rounded-full" />
        <span className="text-sm text-zinc-300">Soumik</span>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, text, active }) {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer
      ${
        active
          ? "bg-zinc-900 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
      }`}
    >
      {icon}
      {text}
    </div>
  );
}
