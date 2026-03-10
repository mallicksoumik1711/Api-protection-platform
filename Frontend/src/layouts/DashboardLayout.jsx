
import Sidebar from "../components/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-black text-zinc-200 overflow-hidden">
      <Sidebar />

      <main className="flex-1 w-4/5 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}