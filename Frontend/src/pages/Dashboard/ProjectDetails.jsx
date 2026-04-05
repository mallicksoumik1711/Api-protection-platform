import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronsLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { getProjects } from "../../api/projects";
import { Package, Pyramid, UserCheck } from "lucide-react";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await getProjects();
        const found = res.projects.find((p) => p.projectId === projectId);
        setProject(found);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProject();
  }, [projectId]);

  if (!project) {
    return <div className="text-white p-6">Loading...</div>;
  }

  return (
    <div className="bg-black min-h-screen text-white px-6 py-4">
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
                  <Package className="w-4 h-4 text-sky-400" />
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
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => navigate("/frontpage")}
            className="cursor-pointer hover:text-sky-400 transition"
          >
            <ChevronsLeft size={18} />
          </button>

          <h1 className="text-xs uppercase font-semibold">{project.name}</h1>
        </div>

        {/* Project Info */}
        <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-6">
          <p className="text-sm text-zinc-400 mb-2">Base URL</p>
          <p className="text-white mb-4">{project.baseUrl}</p>

          <div className="flex gap-2 mb-4">
            <span className="text-xs px-2 py-1 bg-zinc-800 rounded">
              {project.framework}
            </span>
            <span className="text-xs px-2 py-1 bg-zinc-800 rounded">
              {project.environment}
            </span>
          </div>

          <p className="text-xs text-zinc-500">
            Created: {new Date(project.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
