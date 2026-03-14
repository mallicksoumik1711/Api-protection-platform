import {
  LayoutDashboard,
  Box,
  FileText,
  BarChart2,
  Gauge,
  Eye,
  Shield,
  Globe,
  FileCodeCorner,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="h-screen w-1/5 bg-black border-r border-zinc-800 flex flex-col overflow-y-auto scrollbar scrollbar-thumb-zinc-800 scrollbar-track-black">
      {/* PROJECT HEADER */}
      <div className="px-4 py-4 border-b border-zinc-800 flex items-center gap-2">
        <img className="w-6 h-6" src="/asset/Images/bouncer.png" alt="Logo" />
        <p className="text-sm font-medium text-zinc-200">Soumik's projects</p>
      </div>

      {/* MENU */}
      <div className="flex-1 px-2 py-3 space-y-2 text-sm">
        <SidebarItem
          icon={<LayoutDashboard size={16} />}
          text="Projects"
          path="/frontpage"
          active
        />

        <SidebarItem
          icon={<Box size={16} />}
          text="Create Project"
          path="/create-project"
        />
        <SidebarItem
          icon={<FileCodeCorner size={16} />}
          text="API keys"
          path="/api-keys"
        />
        <SidebarItem icon={<FileText size={16} />} text="Logs" path="/logs" />
        <SidebarItem
          icon={<BarChart2 size={16} />}
          text="Analytics"
          path="/analytics"
        />
        <SidebarItem
          icon={<Gauge size={16} />}
          text="Speed Insights"
          path="/speed-insights"
        />
        <SidebarItem
          icon={<Eye size={16} />}
          text="Observability"
          path="/observability"
        />
        <SidebarItem
          icon={<Shield size={16} />}
          text="Firewall"
          path="/firewall"
        />
        <SidebarItem icon={<Globe size={16} />} text="CDN" path="/cdn" />

        <div className="my-4 border-t border-zinc-800"></div>

        <SidebarItem text="Domains" path="/domains" />
        <SidebarItem text="Integrations" path="/integrations" />
        <SidebarItem text="Storage" path="/storage" />
        <SidebarItem text="Flags" path="/flags" />
        <SidebarItem text="Agent" path="/agent" />
        <SidebarItem text="AI Gateway" path="/ai-gateway" />
        <SidebarItem text="Sandboxes" path="/sandboxes" />
      </div>

      {/* USER */}
      <div className="p-3 flex items-center gap-2 mt-5">
        <img src="https://i.pravatar.cc/32" className="w-7 h-7 rounded-full" />
        <span className="text-sm text-zinc-300">Soumik</span>
      </div>
    </aside>
  );
}

function SidebarItem({ icon, text, active, path }) {
  const navigate = useNavigate();
  const location = useLocation();

  active = location.pathname === path;

  return (
    <div
      onClick={() => navigate(path)}
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
