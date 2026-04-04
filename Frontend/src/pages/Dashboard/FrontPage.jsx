import {
  Search,
  Grid,
  List,
  Plus,
  MoreHorizontal,
  ChartNoAxesCombinedIcon,
  Bug,
  Cctv,
  Package,
  Pyramid,
  UserCheck,
} from "lucide-react";

function FrontPage() {
  // Dummy data (replace with API later)
  const projects = [
    {
      id: 1,
      name: "project-91kjv",
      url: "project-91kjv.vercel.app",
      status: "active",
      createdAt: "Mar 12",
    },
    {
      id: 2,
      name: "drawly-vercel-backend",
      url: "drawly-vercel-backend.vercel.app",
      status: "building",
      createdAt: "Dec 15",
    },
    {
      id: 3,
      name: "drawly-vercel-backend",
      url: "drawly-vercel-backend.vercel.app",
      status: "building",
      createdAt: "Dec 15",
    },
    {
      id: 4,
      name: "drawly-vercel-backend",
      url: "drawly-vercel-backend.vercel.app",
      status: "building",
      createdAt: "Dec 15",
    },
    {
      id: 5,
      name: "drawly-vercel-backend",
      url: "drawly-vercel-backend.vercel.app",
      status: "building",
      createdAt: "Dec 15",
    },
    {
      id: 6,
      name: "drawly-vercel-backend",
      url: "drawly-vercel-backend.vercel.app",
      status: "building",
      createdAt: "Dec 15",
    },
  ];

  return (
    <div className="bg-black min-h-screen px-6 py-4 text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          Overview
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white py-2">
              View Workspace
            </h1>
          </div>

          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-purple-400" />
                  <span>Realtime Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Pyramid className="w-4 h-4 text-orange-400" />
                  <span>Centralized Request Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-rose-400" />
                  <span>Enforce Security Rules</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8">
          This is your workspace where all your API protection projects will
          live. Create and manage projects to monitor traffic and keep every
          request logged and accessible for analysis.
        </p>
      </div>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-sm font-semibold">All Projects</h1>

          <div className="flex items-center gap-3">
            {/* View toggle */}
            <button className="p-2 bg-zinc-900 border border-zinc-800 rounded-md">
              <Grid size={16} />
            </button>
            <button className="p-2 bg-zinc-900 border border-zinc-800 rounded-md">
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="mb-6">
          <div className="flex items-center bg-zinc-900 border border-zinc-800 rounded-md px-3 py-2">
            <Search size={16} className="text-zinc-400 mr-2" />
            <input
              type="text"
              placeholder="Search Projects..."
              className="bg-transparent outline-none text-sm w-full placeholder:text-zinc-500"
            />
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-1 gap-6">
          {/* Projects Card */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <h2 className="text-sm font-medium mb-4">Projects</h2>

            <div className="grid sm:grid-cols-2 gap-4">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-black border border-zinc-800 rounded-md p-4 hover:border-zinc-700 transition"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-sm font-medium">{project.name}</h3>
                    <MoreHorizontal size={16} className="text-zinc-400" />
                  </div>

                  <p className="text-xs text-zinc-500 mb-3">{project.url}</p>

                  <div className="flex justify-between text-xs">
                    <span
                      className={`${
                        project.status === "active"
                          ? "text-green-400"
                          : "text-yellow-400"
                      }`}
                    >
                      ● {project.status}
                    </span>
                    <span className="text-zinc-500">{project.createdAt}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
