import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProjects, toggleFavourite } from "../../api/projects"; // ✅ added
import { setProject } from "../../store/projectSlice";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import handleCopy from "../../utils/HelperFunctions/handleCopy";
import {
  Search,
  Grid,
  List,
  MoreHorizontal,
  HeartMinus,
  Copy,
  CopyCheck,
  Link2,
  ChartSpline,
  Trash2,
  Ghost,
  Box,
} from "lucide-react";
import { toast } from "react-hot-toast";

function Favourites() {
  const [openMenuId, setOpenMenuId] = useState(null);
  const [projects, setProjects] = useState([]);
  const [searchProject, setSearchProject] = useState("");
  const [copied, setCopied] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const selectedProject = useSelector(
    (state) => state.project.selectedProjectId,
  );

  // Fetch favourite projects
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await getProjects({ favourite: true });

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
          isFavourite: p.isFavourite || false,
        }));

        setProjects(updatedProjects);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, [selectedProject, dispatch]);

  // Search filter ONLY (no need to filter favourite again)
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
        tag={DashboardHeaderValues.favourites.tag}
        title={DashboardHeaderValues.favourites.title}
        description={DashboardHeaderValues.favourites.description}
        features={DashboardHeaderValues.favourites.features}
      />

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6">
        <div>
          {/* Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-10 gap-4">
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

            <div className="hidden sm:flex items-center gap-3">
              <button className="p-2 bg-zinc-900 border border-zinc-800 rounded-md">
                <Grid size={16} />
              </button>
              <button className="p-2 bg-zinc-900 border border-zinc-800 rounded-md">
                <List size={16} />
              </button>
            </div>
          </div>

          {/* Projects */}
          <div className="grid lg:grid-cols-1 gap-6">
            <h2 className="text-xs font-medium uppercase">Favourites</h2>

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
                    {/* Header */}
                    <div className="flex justify-between items-start">
                      <div className="flex gap-5 items-center">
                        <Box size={18} className="text-zinc-400" />
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
                          className="hover:bg-zinc-900 p-1 rounded-md"
                        >
                          <MoreHorizontal size={16} />
                        </button>

                        {/* Dropdown */}
                        {openMenuId === project.projectId && (
                          <div
                            onClick={(e) => e.stopPropagation()}
                            className={`absolute right-0 w-56 bg-zinc-950 border border-zinc-900 rounded-lg shadow-lg z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-100`}
                          >
                            <div className="text-sm">
                              <button
                                onClick={async (e) => {
                                  e.stopPropagation();

                                  try {
                                    const isNowFavourite = !project.isFavourite;
                                    await toggleFavourite(project.projectId);
                                    setProjects((prev) =>
                                      prev.filter(
                                        (p) =>
                                          p.projectId !== project.projectId,
                                      ),
                                    );

                                    setProjects((prev) =>
                                      prev.map((p) =>
                                        p.projectId === project.projectId
                                          ? {
                                              ...p,
                                              isFavourite: !p.isFavourite,
                                            }
                                          : p,
                                      ),
                                    );
                                    if (isNowFavourite) {
                                      toast.success("Added to favourites");
                                    } else {
                                      toast("Removed from favourites");
                                    }
                                  } catch (err) {
                                    console.error(err);
                                  }
                                }}
                                className="w-full text-left px-4 py-2 hover:bg-zinc-800 flex items-center gap-2"
                              >
                                <HeartMinus size={18} />
                                <div>
                                  {project.isFavourite
                                    ? "Remove from Favourite"
                                    : "Add to Favourite"}
                                </div>
                              </button>

                              <button
                                onClick={() =>
                                  handleCopy(project.projectId, (val) =>
                                    setCopied(val ? project.projectId : null),
                                  )
                                }
                                className="w-full text-left px-4 py-2 hover:bg-zinc-800 border-t border-zinc-800 flex items-center gap-2"
                              >
                                <div className="cursor-pointer">
                                  {copied === project.projectId ? (
                                    <CopyCheck size={18} />
                                  ) : (
                                    <Copy size={18} />
                                  )}
                                </div>
                                <div>Copy Project ID</div>
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

                    {/* Body */}
                    <p className="text-xs text-zinc-500 mb-2">
                      {project.baseUrl}
                    </p>

                    <div className="flex justify-between items-center mb-3">
                      <div className="flex gap-2">
                        <span className="text-[10px] px-2 py-0.5 bg-zinc-800 rounded">
                          {project.framework}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 bg-zinc-800 rounded">
                          {project.environment}
                        </span>
                      </div>

                      {project.isSelected && (
                        <span className="text-[10px] px-2 py-0.5 bg-green-500/10 text-green-400 border border-green-500/20 rounded-full">
                          Selected
                        </span>
                      )}
                    </div>

                    <div className="flex justify-between text-xs">
                      <span
                        className={
                          project.status === "active"
                            ? "text-green-400"
                            : "text-yellow-400"
                        }
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
              <div className="bg-zinc-950 border border-zinc-900 flex flex-col sm:flex-row text-center sm:text-left justify-center items-center py-10 lg:py-30 rounded-lg text-zinc-500 gap-5 px-4 sm:mt-0 mt-10">
                <Ghost />
                <p>No favourite projects yet.</p>
                <Link to="/create-project" className="text-blue-400">
                  Create a project
                </Link>
              </div>
            )}
          </div>

          <p className="text-xs pt-12 text-center text-zinc-600 lowercase">
            Only favourite projects are shown here.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
