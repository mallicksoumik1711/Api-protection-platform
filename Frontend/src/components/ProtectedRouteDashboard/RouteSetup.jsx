function RouteSetup() {
  return (
    <div>
      <h3 className="text-xs uppercase tracking-widest text-zinc-200 mb-4 font-medium">
        Route Setup
      </h3>

      {/* Base Route */}
      <div className="mb-6">
        <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
          Base Route <span className="text-red-400">*</span>
        </label>
        <div className="flex items-center bg-black border border-zinc-900 rounded-md px-3 py-3 text-sm text-zinc-300">
          <span className="text-zinc-500 mr-1">/</span>
          <input
            type="text"
            placeholder="api"
            className="bg-transparent outline-none text-white w-full placeholder-zinc-600"
          />
        </div>
        <p className="text-xs text-zinc-600 mt-2">
          Example: api, users, auth, admin
        </p>
      </div>

      {/* Sub Route */}
      <div className="mb-6">
        <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
          Sub Route <span className="text-zinc-500">(optional)</span>
        </label>
        <div className="flex items-center bg-black border border-zinc-900 rounded-md px-3 py-3 text-sm text-zinc-300">
          <span className="text-zinc-500 mr-1">/</span>
          <input
            type="text"
            placeholder="users"
            className="bg-transparent outline-none text-white w-full placeholder-zinc-600"
          />
        </div>
        <p className="text-xs text-zinc-600 mt-2">
          Example: users, profile, admin
        </p>
      </div>

      {/* Child Route */}
      <div className="mb-6">
        <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
          Child Route <span className="text-zinc-500">(optional)</span>
        </label>
        <div className="flex items-center bg-black border border-zinc-900 rounded-md px-3 py-3 text-sm text-zinc-300">
          <span className="text-zinc-500 mr-1">/</span>
          <input
            type="text"
            placeholder="profile"
            className="bg-transparent outline-none text-white w-full placeholder-zinc-600"
          />
        </div>
        <p className="text-xs text-zinc-600 mt-1">
          You can use dynamic params like{" "}
          <span className="text-emerald-400">:id</span> or{" "}
          <span className="text-emerald-400">:userId</span>
        </p>
      </div>
    </div>
  );
}

export default RouteSetup;
