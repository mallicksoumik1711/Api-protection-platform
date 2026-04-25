import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronsLeft,
  CircleUserRound,
  Copy,
  Globe,
  NotebookPen,
  SquareMousePointer,
  Stethoscope,
  Unlink2,
  User,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getProjects } from "../../api/projects";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";

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
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.frontpage.tag}
        title={DashboardHeaderValues.frontpage.title}
        description={DashboardHeaderValues.frontpage.description}
        features={DashboardHeaderValues.frontpage.features}
      />

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => navigate("/frontpage")}
            className="cursor-pointer hover:text-sky-400 transition"
          >
            <ChevronsLeft size={18} />
          </button>

          <h1 className="text-xs sm:text-sm uppercase font-semibold break-all">
            {project.name}
          </h1>
        </div>

        <div className="max-w-4xl mx-auto mt-6 sm:mt-10 space-y-3">
          {/* CARD TEMPLATE */}
          {[
            {
              icon: <User size={18} />,
              color: "purple",
              title: "Name",
              desc: "Project display name",
              value: project.name,
            },
            {
              icon: <NotebookPen size={18} />,
              color: "amber",
              title: "Description",
              desc: "Short summary of the project",
              value: project.description || "No description available",
            },
            {
              icon: <SquareMousePointer size={18} />,
              color: "emerald",
              title: "ProjectId",
              desc: "Unique identifier for the project",
              value: project.projectId,
              copy: true,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-900 rounded-md px-4 sm:px-5 py-3 hover:border-zinc-800 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                {/* LEFT */}
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div
                    className={`w-9 h-9 rounded-lg bg-${item.color}-500/10 flex items-center justify-center`}
                  >
                    <span className={`text-${item.color}-400`}>
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-3 text-sm text-zinc-400 break-all">
                  <span>{item.value}</span>
                  {item.copy && (
                    <Copy size={16} className="cursor-pointer shrink-0" />
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* SECTION HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4">
            <h3 className="text-sm font-semibold text-white">
              Internal details by the company
            </h3>

            <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              Learn more ↗
            </button>
          </div>

          {/* REMAINING CARDS */}
          {[
            {
              icon: <Unlink2 size={18} />,
              color: "blue",
              title: "Base URL",
              desc: "Primary API endpoint",
              value: project.baseUrl,
            },
            {
              icon: <Workflow size={18} />,
              color: "cyan",
              title: "Framework",
              desc: "Technology stack used",
              value: project.framework || "No framework specified",
            },
            {
              icon: <Globe size={18} />,
              color: "pink",
              title: "Environment",
              desc: "Deployment environment",
              value: project.environment,
            },
            {
              icon: <CircleUserRound size={18} />,
              color: "orange",
              title: "OwnerId",
              desc: "Project owner ID",
              value: project.ownerId,
            },
            {
              icon: <Stethoscope size={18} />,
              color: "indigo",
              title: "Status",
              desc: "Current status",
              value: project.status,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-900 rounded-md px-4 sm:px-5 py-3 hover:border-zinc-800 transition"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-0">
                <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                  <div
                    className={`w-9 h-9 rounded-lg bg-${item.color}-500/10 flex items-center justify-center`}
                  >
                    <span className={`text-${item.color}-400`}>
                      {item.icon}
                    </span>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">
                      {item.title}
                    </p>
                    <p className="text-xs text-zinc-500">{item.desc}</p>
                  </div>
                </div>

                <div className="text-sm text-zinc-400 break-all">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails;
