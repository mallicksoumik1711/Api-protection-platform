import { useState, useEffect } from "react";
import {
  LayoutDashboard,
  Box,
  FileText,
  BarChart2,
  Gauge,
  Eye,
  Shield,
  Globe,
  TriangleAlert,
  FileLock,
  Settings,
  BookKey,
  Wrench,
  HeartPlusIcon,
  FolderCog,
  Menu,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../api/auth";

export default function Sidebar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getUser();
        setUser(data);
      } catch (error) {
        console.log("Error fetching user:", error.message);
      }
    };
    fetchUser();
  }, []);
  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-4 left-4 z-50 bg-zinc-900 p-2 rounded-md border border-zinc-800"
      >
        <Menu size={20} />
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      <aside
        className={`fixed md:static top-0 left-0 z-50 h-screen 
  w-64 md:w-1/5 bg-black border-r border-zinc-800 
  flex flex-col overflow-y-auto scrollbar scrollbar-thumb-zinc-800 scrollbar-track-black
  transform transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* PROJECT HEADER */}
        <div
          onClick={() => navigate("/frontpage")}
          className="px-4 py-4 border-b border-zinc-800 flex items-center gap-2 cursor-pointer"
        >
          <img className="w-6 h-6" src="/asset/Images/bouncer.png" alt="Logo" />
          <p className="text-sm font-medium text-zinc-200 ">
            {user?.name ? `${capitalize(user.name)}'s projects` : "BOUNCER"}
          </p>
        </div>

        {/* MENU */}
        <div className="flex-1 px-2 py-3 space-y-2 text-sm">
          <SidebarItem
            icon={<LayoutDashboard size={16} />}
            text="Projects"
            path="/frontpage"
            active
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            icon={<Wrench size={16} />}
            text="Setup Guide"
            path="/setup-guide"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            icon={<Box size={16} />}
            text="Create Project"
            path="/create-project"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            icon={<BookKey size={16} />}
            text="API Keys"
            path="/api-keys"
          />
          <SidebarItem
            icon={<FileLock size={16} />}
            text="Protected APIs"
            path="/protected-api"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            icon={<Settings size={16} />}
            text="JWT Settings"
            path="/jwt-settings"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            icon={<TriangleAlert size={16} />}
            text="Rate Limit"
            path="/rate-limit"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            icon={<FolderCog size={16} />}
            text="Integration"
            path="/integration"
          />
          <SidebarItem
            icon={<FileText size={16} />}
            text="Logs"
            path="/api-logs"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            icon={<HeartPlusIcon size={16} />}
            text="Favourites"
            path="/favourites"
            setIsOpen={setIsOpen}
          />
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
          <img
            src={`https://api.dicebear.com/7.x/shapes/svg?seed=${user?.name}`}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm text-zinc-300">
            {user?.name ? capitalize(user.name) : "User"}
          </span>
        </div>
      </aside>
    </>
  );
}

function SidebarItem({ icon, text, path, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const active =
    location.pathname === path ||
    (location.pathname.startsWith(`/project/`) &&
      location.pathname.endsWith(path));

  return (
    <div
      onClick={() => {
        navigate(path);
        if (setIsOpen) setIsOpen(false);
      }}
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
