import { useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronsLeft,
  CircleUserRound,
  Copy,
  Globe,
  NotebookPen,
  Stethoscope,
  Unlink2,
  User,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getProjects } from "../../api/projects";
import { Package, Pyramid, UserCheck } from "lucide-react";
import { Global } from "recharts";

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
        <div className="max-w-4xl mx-auto mt-10">
          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 flex items-center justify-center">
                <span className="text-purple-400 text-sm">
                  <User size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Name</p>
                <p className="text-xs text-zinc-500">Project display name</p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">{project.name}</div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center">
                <span className="text-amber-400 text-sm">
                  <NotebookPen size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Description</p>
                <p className="text-xs text-zinc-500">
                  Short summary of the project
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">
              {project.description
                ? project.description
                : "No description available"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                <span className="text-emerald-400 text-sm">
                  <User size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">ProjectId</p>
                <p className="text-xs text-zinc-500">
                  Unique identifier for the project
                </p>
              </div>
            </div>

            <div className="flex gap-5 items-center">
              <div className="text-sm text-zinc-400">{project.projectId}</div>
              <Copy size={16} className="cursor-pointer" />
            </div>
          </div>

          {/* Marketplace Header */}
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white">
              Internal details by the company
            </h3>

            <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              Learn more ↗
            </button>
          </div>

          {/* Neon */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
                <span className="text-blue-400 text-sm">
                  <Unlink2 size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Base URL</p>
                <p className="text-xs text-zinc-500">Primary API endpoint</p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">{project.baseUrl}</div>
          </div>

          {/* AWS */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center">
                <span className="text-cyan-400 text-sm">
                  <Workflow size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Framework</p>
                <p className="text-xs text-zinc-500">
                  Technology stack used in the project
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">
              {project.framework ? project.framework : "No framework specified"}
            </div>
          </div>

          {/* Upstash */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-pink-500/10 flex items-center justify-center">
                <span className="text-pink-400 text-sm">
                  <Globe size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Environment</p>
                <p className="text-xs text-zinc-500">
                  Deployment environment of the project
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">{project.environment}</div>
          </div>

          {/* Supabase */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <span className="text-orange-400 text-sm">
                  <CircleUserRound size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">OwnerId</p>
                <p className="text-xs text-zinc-500">
                  Unique identifier for the project owner
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">{project.ownerId}</div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-9 h-9 rounded-lg bg-indigo-500/10 flex items-center justify-center">
                <span className="text-indigo-400 text-sm">
                  <Stethoscope size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Status</p>
                <p className="text-xs text-zinc-500">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">{project.status}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
