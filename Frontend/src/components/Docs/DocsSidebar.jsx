import { useState } from "react";
import {
  BookOpen,
  FileText,
  Shield,
  KeyRound,
  Globe,
  Boxes,
  Terminal,
  Code2,
  Menu,
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  Key,
  LaptopMinimalCheck,
  CodeXml,
  TriangleAlert,
  Toolbox,
  Logs,
  Users,
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import { getInitialSection } from "../../utils/HelperFunctions/docsPathSidebar";

export default function DocsSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const [openSection, setOpenSection] = useState(() =>
    getInitialSection(location.pathname),
  );

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  return (
    <>
      {/* MOBILE MENU BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed top-3 left-3 z-50 p-2"
      >
        <Menu size={20} />
      </button>

      {/* MOBILE OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`fixed top-0 left-0 z-50 h-screen
  w-72 bg-black border-r border-zinc-800
  flex flex-col
  overflow-y-auto
  transform transition-transform duration-300
  ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
  md:translate-x-0`}
      >
        {/* HEADER */}
        <div
          onClick={() => navigate("/")}
          className="px-5 py-4 border-b border-zinc-800 flex items-center gap-3 cursor-pointer"
        >
          <img src="/asset/Images/bouncer.png" alt="Logo" className="w-6 h-6" />

          <div>
            <p className="font-semibold text-zinc-100 oswald-text tracking-wide">BOUNCER Docs</p>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex-1 px-3 py-4 space-y-2 text-sm">
          {/* GETTING STARTED */}
          <DocsDropdown
            title="Getting Started"
            icon={<BookOpen size={16} />}
            open={openSection === "getting-started"}
            onClick={() => toggleSection("getting-started")}
          >
            <SidebarItem
              text="Introduction"
              path="/docs/introduction"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Quick Start"
              path="/docs/quickstart"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="How Bouncer Works"
              path="/docs/architecture"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* Project Configuration */}
          <DocsDropdown
            title="Project Configuration"
            icon={<Shield size={16} />}
            open={openSection === "configuration"}
            onClick={() => toggleSection("configuration")}
          >
            <SidebarItem
              text="Protected Routes"
              path="/docs/protected-routes"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="JWT Settings"
              path="/docs/jwt-settings"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Rate Limiting"
              path="/docs/rate-limiting"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* Integration guide */}
          <DocsDropdown
            title="Integration Guide"
            icon={<Code2 size={16} />}
            open={openSection === "integration"}
            onClick={() => toggleSection("integration")}
          >
            <SidebarItem
              text="Integration Overview"
              path="/docs/integration-overview"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Frontend Integration"
              path="/docs/frontend-integration"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Backend Integration"
              path="/docs/backend-integration"
              setIsOpen={setIsOpen}
            />

            {/* Setup Flow */}

            <SidebarItem
              text="Middleware Placement"
              path="/docs/middleware-placement"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Testing Integration"
              path="/docs/testing-integration"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Troubleshooting"
              path="/docs/integration-troubleshooting"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* Monitoring */}
          <DocsDropdown
            title="Monitoring"
            icon={<Globe size={16} />}
            open={openSection === "monitoring"}
            onClick={() => toggleSection("monitoring")}
          >
            <SidebarItem text="Logs" path="/docs/logs" setIsOpen={setIsOpen} />

            <SidebarItem
              text="Favorites"
              path="/docs/favorites"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* PROJECT MANAGEMENT */}
          <DocsDropdown
            title="Project Management"
            icon={<Boxes size={16} />}
            open={openSection === "projects"}
            onClick={() => toggleSection("projects")}
          >
            <SidebarItem
              text="All Projects Center"
              path="/docs/projects-center"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          <SidebarItem
            text="Project Templates"
            icon={<LayoutDashboard size={16} />}
            path="/docs/project-templates"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            text="Key Management Examples"
            icon={<Key size={16} />}
            path="/docs/key-management"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            text="Protected APIs Access Control"
            icon={<LaptopMinimalCheck size={16} />}
            path="/docs/access-control"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            text="JWT Configurations"
            icon={<CodeXml size={16} />}
            path="/docs/jwt-configurations"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            text="Rate Limiting Reference"
            icon={<TriangleAlert size={16} />}
            path="/docs/rate-limiting-reference"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            text="Integration Insights"
            icon={<Toolbox size={16} />}
            path="/docs/integration-insights"
            setIsOpen={setIsOpen}
          />
          <SidebarItem
            text="Logs Activity Reference"
            icon={<Logs size={16} />}
            path="/docs/logs-activity"
            setIsOpen={setIsOpen}
          />
        </div>
      </aside>
    </>
  );
}

function DocsDropdown({ title, icon, open, onClick, children }) {
  return (
    <div className="space-y-1">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-3 py-2 rounded-md
        text-zinc-300 hover:bg-zinc-900 hover:text-white transition"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{title}</span>
        </div>

        {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
      </button>

      {open && (
        <div className="ml-5 border-l border-zinc-800 pl-2 space-y-1">
          {children}
        </div>
      )}
    </div>
  );
}

function SidebarItem({ icon, text, path, setIsOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const active = location.pathname === path;

  return (
    <div
      onClick={() => {
        navigate(path);

        if (setIsOpen) {
          setIsOpen(false);
        }
      }}
      className={`flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition
      ${
        active
          ? "bg-zinc-900 text-white"
          : "text-zinc-400 hover:bg-zinc-900 hover:text-zinc-200"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
}
