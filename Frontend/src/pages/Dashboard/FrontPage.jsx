import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Grid,
  List,
  MoreHorizontal,
  HeartMinus,
  Copy,
  Cog,
  Link2,
  ChartSpline,
  Trash2,
  Ghost,
  Box,
} from "lucide-react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import { getProjects } from "../../api/projects";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setProject } from "../../store/projectSlice";

function FrontPage() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [searchProject, setSearchProject] = useState("");
  const navigate = useNavigate();
  const selectedProject = useSelector(
    (state) => state.project.selectedProjectId,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects();

        let activeProjectId = selectedProject;

        if (!activeProjectId && res.projects.length > 0) {
          const latestProject = res.projects.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
          )[0];

          activeProjectId = latestProject.projectId;

          dispatch(setProject(activeProjectId));
        }

        const updatedProjects = res.projects.map((p) => ({
          ...p,
          isSelected: p.projectId === activeProjectId,
        }));

        setProjects(updatedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [selectedProject, dispatch]);

  const filteredProjects = projects.filter((project) => {
    const term = searchProject.toLowerCase();
    return (
      project.name.toLowerCase().includes(term) ||
      project.baseUrl.toLowerCase().includes(term) ||
      project.framework.toLowerCase().includes(term)
    );
  });

  return (
    <div
      className="bg-black min-h-screen px-4 sm:px-6 py-4 text-white"
      onClick={() => setOpenMenuId(null)}
    >
      <DashboardHeader
        tag={DashboardHeaderValues.frontpage.tag}
        title={DashboardHeaderValues.frontpage.title}
        description={DashboardHeaderValues.frontpage.description}
        features={DashboardHeaderValues.frontpage.features}
      />

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6">
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
            {/* Search */}
            <div className="w-full sm:w-2/3">
              <div className="flex items-center bg-zinc-950/80 border border-zinc-800 rounded-md px-3 py-2">
                <Search size={16} className="text-zinc-400 mr-2" />
                <input
                  type="text"
                  placeholder="Search Projects..."
                  className="bg-transparent outline-none text-sm w-full placeholder:text-zinc-500"
                  value={searchProject}
                  onChange={(e) => setSearchProject(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center gap-3 self-end sm:self-auto">
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
            <h2 className="text-xs font-medium uppercase">Projects</h2>

            {filteredProjects.length > 0 ? (
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredProjects.map((project) => (
                  <div
                    key={project.projectId}
                    onClick={() => {
                      dispatch(setProject(project.projectId));
                      navigate(`/project/${project.projectId}`);
                    }}
                    className="bg-zinc-950/80 border border-zinc-900 rounded-md p-4 hover:bg-zinc-950/20 hover:border-zinc-800 transition cursor-pointer"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex gap-5 items-center">
                        <div className="flex items-center justify-center">
                          <Box size={18} className="text-zinc-400" />
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

                    <div className="">
                      <p className="text-xs text-zinc-500 mb-2">
                        {project.baseUrl}
                      </p>

                      <div className="flex justify-between items-center mb-3">
                        <div className="flex gap-2">
                          <span className="text-[10px] px-2 py-0.5 bg-zinc-800 rounded text-zinc-300">
                            {project.framework}
                          </span>
                          <span className="text-[10px] px-2 py-0.5 bg-zinc-800 rounded text-zinc-400">
                            {project.environment}
                          </span>
                        </div>
                        <div className="flex items-center">
                          {project.isSelected ? (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
                              Selected
                            </span>
                          ) : (
                            <span className="text-[10px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-500 border border-zinc-700">
                              Not Selected
                            </span>
                          )}
                        </div>
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
            ) : (
              <div className="bg-zinc-950 border border-zinc-900 flex flex-col sm:flex-row text-center sm:text-left justify-center items-center py-10 lg:py-30 rounded-lg text-zinc-500 gap-5 px-4">
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
                  and start monitoring, securing, and controlling your API
                  traffic in real time.
                </p>
              </div>
            )}
          </div>

          <p className="text-xs pt-12 text-center text-zinc-600 lowercase">
            All the projects are listed above.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FrontPage;
