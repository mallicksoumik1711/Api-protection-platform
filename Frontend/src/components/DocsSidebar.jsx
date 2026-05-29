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
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";

export default function DocsSidebar() {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState("getting-started");

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
        className={`fixed md:static top-0 left-0 z-50 h-screen
        w-72 bg-black border-r border-zinc-800
        flex flex-col overflow-y-auto
        transform transition-transform duration-300
        scrollbar scrollbar-thumb-zinc-800 scrollbar-track-black
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* HEADER */}
        <div
          onClick={() => navigate("/")}
          className="px-5 py-4 border-b border-zinc-800 flex items-center gap-3 cursor-pointer"
        >
          <img src="/asset/Images/bouncer.png" alt="Logo" className="w-6 h-6" />

          <div>
            <p className="text-sm font-semibold text-zinc-100">BOUNCER Docs</p>
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
              text="Quickstart"
              path="/docs/quickstart"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Installation"
              path="/docs/installation"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* API REFERENCE */}
          <DocsDropdown
            title="API Reference"
            icon={<Code2 size={16} />}
            open={openSection === "api"}
            onClick={() => toggleSection("api")}
          >
            <SidebarItem
              text="Authentication"
              path="/docs/authentication"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Protected APIs"
              path="/docs/protected-api"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Rate Limits"
              path="/docs/rate-limit"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Errors"
              path="/docs/errors"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* SDKS */}
          <DocsDropdown
            title="SDKs & Libraries"
            icon={<Boxes size={16} />}
            open={openSection === "sdk"}
            onClick={() => toggleSection("sdk")}
          >
            <SidebarItem
              text="React SDK"
              path="/docs/react-sdk"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Node SDK"
              path="/docs/node-sdk"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Python SDK"
              path="/docs/python-sdk"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* SECURITY */}
          <DocsDropdown
            title="Security"
            icon={<Shield size={16} />}
            open={openSection === "security"}
            onClick={() => toggleSection("security")}
          >
            <SidebarItem
              text="JWT Settings"
              path="/docs/jwt-settings"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="API Keys"
              path="/docs/api-keys"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="Firewall"
              path="/docs/firewall"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* DEPLOYMENT */}
          <DocsDropdown
            title="Deployment"
            icon={<Globe size={16} />}
            open={openSection === "deployment"}
            onClick={() => toggleSection("deployment")}
          >
            <SidebarItem
              text="Integrations"
              path="/docs/integrations"
              setIsOpen={setIsOpen}
            />

            <SidebarItem text="CDN" path="/docs/cdn" setIsOpen={setIsOpen} />

            <SidebarItem
              text="Observability"
              path="/docs/observability"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* CLI */}
          <DocsDropdown
            title="CLI"
            icon={<Terminal size={16} />}
            open={openSection === "cli"}
            onClick={() => toggleSection("cli")}
          >
            <SidebarItem
              text="CLI Installation"
              path="/docs/cli-installation"
              setIsOpen={setIsOpen}
            />

            <SidebarItem
              text="CLI Commands"
              path="/docs/cli-commands"
              setIsOpen={setIsOpen}
            />
          </DocsDropdown>

          {/* CHANGELOG */}
          <SidebarItem
            icon={<FileText size={16} />}
            text="Changelog"
            path="/docs/changelog"
            setIsOpen={setIsOpen}
          />

          <SidebarItem
            icon={<KeyRound size={16} />}
            text="API Status"
            path="/docs/status"
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
