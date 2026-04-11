import { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import { useSelector } from "react-redux";
import { getIntegrationData } from "../../api/integration";
import {
  Copy,
  Globe,
  NotebookPen,
  SquareMousePointer,
  Stethoscope,
  Unlink2,
  User,
  Workflow,
} from "lucide-react";
import toast from "react-hot-toast";

function Integration() {
  const projectId = useSelector((state) => state.project.selectedProjectId);
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchIntegration = async () => {
      try {
        const res = await getIntegrationData(projectId);
        setData(res);
      } catch (err) {
        toast.error("Failed to load integration data: " + err.message);
      }
    };

    if (projectId) {
      fetchIntegration();
    }
  }, [projectId]);

  const project = data?.project;
  const protectedRoutes = data?.protectedRoutes;
  const jwtSettings = data?.jwtSettings;
  const rateLimits = data?.rateLimits;
  const rateLimit = rateLimits?.[0];

  if (!data) {
    return <div className="text-white p-6">Loading...</div>; //skeleton dashboard
  }

  return (
    <div className="bg-black px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.integration.tag}
        title={DashboardHeaderValues.integration.title}
        description={DashboardHeaderValues.integration.description}
        features={DashboardHeaderValues.integration.features}
      />

      <div className="mt-6 max-w-6xl mx-auto flex pr-6 gap-6">
        {/* Project Info */}
        <div className="w-1/2">
          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="">
                  <User size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Name</p>
                <p className="text-xs text-zinc-500">Project display name</p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">{project?.name}</div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-sm">
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
              {project?.description || "No description available"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className=" text-sm">
                  <SquareMousePointer size={18} />
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
              <div className="text-sm text-zinc-400">{project?.projectId}</div>
              <Copy size={16} className="cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white">
              Project core details
            </h3>

            <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              Learn more ↗
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-sm">
                  <Unlink2 size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Base URL</p>
                <p className="text-xs text-zinc-500">Primary API endpoint</p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">{project?.baseUrl}</div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className=" text-sm">
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
              {project?.framework || "No framework specified"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className=" text-sm">
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

            <div className="text-sm text-zinc-400">{project?.environment}</div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-sm">
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

            <div className="text-sm text-zinc-400">{project?.status}</div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white">
              Middleware settings
            </h3>

            <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              Learn more ↗
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-sm">
                  <Stethoscope size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Protected APIs</p>
                <p className="text-xs text-zinc-500">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">
              {" "}
              {protectedRoutes?.length || 0} APIs protected
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-sm">
                  <Stethoscope size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">JWT Setting</p>
                <p className="text-xs text-zinc-500">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">
              {jwtSettings?.enabled
                ? `${jwtSettings.algorithm} • ${jwtSettings.expiresIn}`
                : "Disabled"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-sm">
                  <Stethoscope size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Rate Limits</p>
                <p className="text-xs text-zinc-500">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">
              {rateLimit
                ? `${rateLimit.limit} req / ${rateLimit.windowTime}s`
                : "Disabled"}
            </div>
          </div>

          <div className="flex items-center justify-between mb-3">
            <h3 className="text-sm font-semibold text-white">Validation URL</h3>

            <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              Learn more ↗
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3 flex items-center justify-between hover:border-zinc-800 transition">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <span className="text-sm">
                  <Stethoscope size={18} />
                </span>
              </div>
              <div>
                <p className="text-sm font-medium text-white">Validation URL</p>
                <p className="text-xs text-zinc-500">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-sm text-zinc-400">
              http://localhost:3000/validation
            </div>
          </div>
        </div>
        <div className="w-1/2 bg-zinc-950 rounded-md p-8">hello</div>
      </div>
    </div>
  );
}

export default Integration;
