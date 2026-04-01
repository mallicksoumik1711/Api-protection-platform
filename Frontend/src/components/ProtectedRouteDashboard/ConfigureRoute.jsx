import { Dot } from "lucide-react";

function ConfigureRoute() {
  return (
    <div className="bg-black border border-zinc-800 rounded-lg px-7 py-4 shadow-inner">
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">
          How to configure protected routes
        </h3>

        <div className="space-y-4 text-sm text-zinc-400">
          <div className="flex gap-1">
            <Dot className="w-4" />
            <p>
              Enter the route exactly as it exists in your backend (for example
              <span className="text-white"> /api/users</span>).
            </p>
          </div>

          <div className="flex gap-1">
            <Dot className="w-4" />
            <p>
              Use <span className="text-white">*</span> if you want to protect
              all nested routes automatically.
            </p>
          </div>

          <div className="flex gap-1">
            <Dot className="w-4" />
            <p>
              Enable API Key or JWT depending on how your backend handles
              authentication.
            </p>
          </div>

          <div className="flex gap-1">
            <Dot className="w-4" />
            <p>
              Once saved, every request to this route will automatically go
              through the protection layer.
            </p>
          </div>
        </div>

        <div className="mt-7">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
            Example routes
          </p>

          <div className="space-y-2 text-sm">
            <div className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-zinc-300">
              /api/*
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-zinc-300">
              /users/*
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2 text-zinc-300">
              /admin/*
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-8 pt-6 border-t border-zinc-800 text-xs text-zinc-500">
        <div className="flex items-center gap-4">
          <span>Secure APIs</span>
          <span>
            <Dot className="w-4" />
          </span>
          <span>Block Bots</span>
          <span>
            <Dot className="w-4" />
          </span>
          <span>Rate Limit</span>
        </div>

        <span>Protection enabled instantly</span>
      </div>
    </div>
  );
}

export default ConfigureRoute;
