import { useState, useEffect, useRef } from "react";
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
  CircleChevronLeft,
  CircleChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { getUser } from "../api/auth";
import UserMenu from "./UserMenu";

export default function Sidebar() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef();

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const capitalize = (str) =>
    str ? str.charAt(0).toUpperCase() + str.slice(1) : "";

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-3 left-3 z-50 p-2"
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
  flex flex-col scrollbar scrollbar-thumb-zinc-800 scrollbar-track-black
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
        <div className="flex-1 px-2 py-3 space-y-2 text-sm overflow-y-auto">
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
            setIsOpen={setIsOpen}
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
            setIsOpen={setIsOpen}
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
            path=""
          />
          <SidebarItem
            icon={<Gauge size={16} />}
            text="Speed Insights"
            path=""
          />
          <SidebarItem icon={<Eye size={16} />} text="Observability" path="" />
          <SidebarItem icon={<Shield size={16} />} text="Firewall" path="" />
          <SidebarItem icon={<Globe size={16} />} text="CDN" path="" />

          <div className="my-4 border-t border-zinc-800"></div>

          <SidebarItem text="Domains" path="" />
          <SidebarItem text="Integrations" path="" />
          <SidebarItem text="Storage" path="" />
          <SidebarItem text="Flags" path="" />
          <SidebarItem text="Agent" path="" />
          <SidebarItem text="AI Gateway" path="" />
          <SidebarItem text="Sandboxes" path="" />
        </div>

        {/* USER */}
        <div className="flex px-3 py-2 justify-between items-center mb-2 mt-1">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={`https://api.dicebear.com/7.x/shapes/svg?seed=${user?.name}`}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-zinc-300">
              {user?.name ? capitalize(user.name) : "User"}
            </span>
          </div>

          <div ref={menuRef} className="relative">
            <button
              onClick={() => setShowMenu((prev) => !prev)}
              className="p-1 hover:rounded-full hover:bg-zinc-900 cursor-pointer"
            >
              <MoreHorizontal size={18} />
            </button>

            {showMenu && (
              <UserMenu
                user={user}
                capitalize={capitalize}
                setIsOpen={setIsOpen}
                setShowMenu={setShowMenu}
              />
            )}
          </div>
        </div>
      </aside>
    </>
  );
}

function SidebarItem({ icon, text, path, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const active =
    path &&
    (location.pathname === path ||
      (location.pathname.startsWith(`/project/`) &&
        location.pathname.endsWith(path)));

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
