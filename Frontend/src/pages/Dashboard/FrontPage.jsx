import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
  HeartMinus,
  Copy,
  Cog,
  Link2,
  ChartSpline,
  Trash2,
  Ghost,
  Package2,
  Box,
} from "lucide-react";
import { getProjects } from "../../api/projects";

function FrontPage() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();
        setProjects(res.projects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div
      className="bg-black min-h-screen px-6 py-4 text-white"
      onClick={() => setOpenMenuId(null)}
    >
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

      <div className="max-w-6xl mx-auto pr-6">
        {projects.length > 0 ? (
          <div>
            <div className="flex items-center justify-between mb-10">
              {/* Search */}
              <div className="w-2/3">
                <div className="flex items-center bg-zinc-950/80 border border-zinc-800 rounded-md px-3 py-2">
                  <Search size={16} className="text-zinc-400 mr-2" />
                  <input
                    type="text"
                    placeholder="Search Projects..."
                    className="bg-transparent outline-none text-sm w-full placeholder:text-zinc-500"
                  />
                </div>
              </div>
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

            {/* Main Grid */}
            <div className="grid lg:grid-cols-1 gap-6">
              {/* Projects Card */}
              <h2 className="text-sm font-medium uppercase">Projects</h2>

              <div className="grid sm:grid-cols-2 gap-4">
                {projects.map((project) => (
                  <div
                    key={project.projectId}
                    className="bg-black border border-zinc-900 rounded-md p-4 hover:bg-zinc-950/80 hover:border-zinc-800 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-5 items-center">
                        <div className="flex items-center justify-center">
                          <Box size={18} className="text-purple-400" />
                        </div>
                        <h3 className="text-sm font-medium">{project.name}</h3>
                      </div>
                      <div className="relative">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setOpenMenuId(
                              openMenuId === project.projectId
                                ? null
                                : project.projectId,
                            );
                          }}
                          className="cursor-pointer hover:bg-zinc-900 p-1 rounded-md"
                        >
                          <MoreHorizontal size={16} className="text-zinc-400" />
                        </button>

                        {/* Dropdown */}
                        {openMenuId === project.projectId && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className={`absolute right-0 w-56 bg-zinc-950 border border-zinc-900 rounded-lg shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100`}
                          >
                            <div className="text-sm">
                              <button className="w-full text-left px-4 py-2 hover:bg-zinc-800 hover:rounded-t-md flex items-center gap-2">
                                <div className="cursor-pointer">
                                  <HeartMinus size={18} />
                                </div>
                                <div>Add to Favourite</div>
                              </button>

                              <div className="px-4 py-2 text-zinc-500 text-xs border-t border-zinc-800">
                                Project ID
                              </div>
                              <div className="px-4 pb-2 text-xs text-zinc-300 break-all">
                                {project.projectId}
                              </div>

                              <button className="w-full text-left px-4 py-2 hover:bg-zinc-800 border-t border-zinc-800 flex items-center gap-2">
                                <div className="cursor-pointer">
                                  <Copy size={18} />
                                </div>
                                <div>Copy Project ID</div>
                              </button>

                              <button className="w-full text-left px-4 py-2 hover:bg-zinc-800 flex items-center gap-2">
                                <div className="cursor-pointer">
                                  <Cog size={18} />
                                </div>
                                <div>Project Settings</div>
                              </button>

                              <button className="w-full text-left px-4 py-2 hover:bg-zinc-800 flex items-center gap-2">
                                <div className="cursor-pointer">
                                  <Link2 size={18} />
                                </div>
                                <div>Open Deployment</div>
                              </button>

                              <button className="w-full text-left px-4 py-2 hover:bg-zinc-800 flex items-center gap-2">
                                <div className="cursor-pointer">
                                  <ChartSpline size={18} />
                                </div>
                                <div>View Analytics</div>
                              </button>

                              <button className="w-full text-left px-4 py-2 text-red-400 hover:bg-red-500/10 border-t border-zinc-800 flex items-center gap-2">
                                <div className="cursor-pointer">
                                  <Trash2 size={18} />
                                </div>
                                <div>Delete Project</div>
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-zinc-500 mb-3">
                          {project.baseUrl}
                        </p>
                        <div className="flex gap-2 mb-2">
                          <span className="text-[10px] px-2 py-0.5 bg-zinc-800 rounded text-zinc-300">
                            {project.framework}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 bg-zinc-800 rounded text-zinc-400">
                            {project.environment}
                          </span>
                        </div>
                      </div>
                      <div className="flex text-[11px] text-zinc-500 gap-1 mt-2 gap-4">
                        <span>Last activity: 2h ago</span>
                        <span>Protection: Enabled</span>
                      </div>
                    </div>

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
                      <span className="text-zinc-500">
                        {new Date(project.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs pt-12 text-center text-zinc-600 lowercase">
              All the projects are listed above.
            </p>
          </div>
        ) : (
          <div className="lg:mt-20 bg-zinc-950 border border-zinc-900 flex justify-center items-center lg:py-40 rounded-lg text-zinc-500 gap-5">
            <div>
              <Ghost />
            </div>
            <p>
              No projects yet.{" "}
              <Link
                to="/create-project"
                className="hover:text-blue-400/60 transition"
              >
                Create your first project
              </Link>{" "}
              and start monitoring, securing, and controlling your API traffic
              in real time.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default FrontPage;
