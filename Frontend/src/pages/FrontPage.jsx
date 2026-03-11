function FrontPage() {
  return (
    <div className="bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-sm font-semibold mb-6">Overview</h1>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            Usage
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
