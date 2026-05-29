import DocsSidebar from "../components/DocsSidebar";

function Docs() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      {/* SIDEBAR */}
      <DocsSidebar />
    </div>
  );
}

function DocCard({ title, desc }) {
  return (
    <div
      className="bg-zinc-950 border border-zinc-800 rounded-2xl p-5
      hover:border-zinc-700 transition cursor-pointer"
    >
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>

      <p className="text-sm text-zinc-400 leading-6">{desc}</p>
    </div>
  );
}

export default Docs;
