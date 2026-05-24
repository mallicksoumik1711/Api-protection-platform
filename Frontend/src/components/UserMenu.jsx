import { House, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router";
import { logoutUser } from "../api/auth";
import toast from "react-hot-toast";

export default function UserMenu({ user, capitalize, setIsOpen, setShowMenu }) {
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logoutUser();
      toast.success("Logout successful.");

      setIsOpen(false);
      setShowMenu(false);

      navigate("/signin");
    } catch (error) {
      console.error(error.message);
      toast.error("Logout failed.");
    }
  };

  return (
    <div className="absolute bottom-12 right-0 w-58 sm:w-64 bg-zinc-950 border border-zinc-800 rounded-xl shadow-2xl p-2 z-50">
      {/* User Info */}
      <div
        onClick={() => {
          navigate("/profile-page");
          setIsOpen(false);
          setShowMenu(false);
        }}
        className="px-3 py-2 flex justify-between items-center hover:bg-zinc-800 rounded-lg cursor-pointer"
      >
        <div>
          <p className="text-sm font-semibold text-white">
            {user?.name ? capitalize(user.name) : "User"}
          </p>
          <p className="text-xs text-zinc-400">{user?.email || "user.email"}</p>
        </div>
        <div>
          <Settings size={16} />
        </div>
      </div>

      <div className="mt-1 border-b border-zinc-800"></div>

      {/* Menu */}
      <div className="mt-1 space-y-1 text-sm">
        <Item text="Feedback" icon={<Settings size={16} />} />
        <Item
          text="Home Page"
          icon={<House size={16} />}
          onClick={() => {
            navigate("/");
            setIsOpen(false);
            setShowMenu(false);
          }}
        />
        <Item text="CheckLogs" icon={<Settings size={16} />} />
        <Item text="Docs" icon={<Settings size={16} />} />
        <Item
          text="Log Out"
          icon={<LogOut size={16} />}
          danger
          onClick={handleLogout}
        />
      </div>
    </div>
  );
}

function Item({ text, danger, icon, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`px-1 py-2 rounded-md cursor-pointer flex items-center justify-between
      ${
        danger
          ? "text-red-400 hover:bg-red-500/10"
          : "text-zinc-300 hover:bg-zinc-800"
      }`}
    >
      <div className="px-2">{text}</div>
      <div className="px-2">{icon}</div>
    </div>
  );
}
