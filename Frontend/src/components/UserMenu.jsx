import { LogOut, Settings } from "lucide-react";

export default function UserMenu() {
  return (
    <div
      className="
      absolute bottom-12 right-0 
      w-64 bg-zinc-950 border border-zinc-800 
      rounded-xl shadow-2xl p-2 z-50
    "
    >
      {/* User Info */}
      <div className="px-1 py-2 flex justify-between items-center hover:bg-zinc-800 rounded-lg cursor-pointer">
        <div>
          <p className="text-sm font-semibold text-white">Soumik</p>
          <p className="text-xs text-zinc-400">email@gmail.com</p>
        </div>
        <div>
          <Settings size={16} />
        </div>
      </div>

      <div className="mt-1 border-b border-zinc-800"></div>

      {/* Menu */}
      <div className="mt-1 space-y-1 text-sm">
        <Item text="Feedback" icon={<Settings size={16} />} />
        <Item text="Theme" icon={<Settings size={16} />} />
        <Item text="Home Page" icon={<Settings size={16} />} />
        <Item text="Changelog" icon={<Settings size={16} />} />
        <Item text="Help" icon={<Settings size={16} />} />
        <Item text="Docs" icon={<Settings size={16} />} />
        <Item text="Log Out" icon={<LogOut size={16} />} danger />
      </div>
    </div>
  );
}

function Item({ text, danger, icon }) {
  return (
    <div
      className={`px-1 py-2 rounded-md cursor-pointer flex items-center justify-between
      ${
        danger
          ? "text-red-400 hover:bg-red-500/10"
          : "text-zinc-300 hover:bg-zinc-800"
      }`}
    >
      <div>{text}</div>
      <div className="">{icon}</div>
    </div>
  );
}
