import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronsLeft,
  CircleUserRound,
  Copy,
  CopyCheck,
  Globe,
  NotebookPen,
  Pencil,
  SquareMousePointer,
  Stethoscope,
  Unlink2,
  User,
  Workflow,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getProjects, updateProject } from "../../api/projects";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import handleCopy from "../../utils/HelperFunctions/handleCopy";
import UpdateMenu from "../../components/UpdateMenu";

function ProjectDetails() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [projectCopied, setProjectCopied] = useState(false);
  const [updateMenu, setUpdateMenu] = useState({
    open: false,
    title: "",
    description: "",
    value: "",
    field: "",
    type: "input",
    options: [],
  });

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

  const handleProjectUpdate = async (newValue) => {
    try {
      const res = await updateProject(projectId, updateMenu.field, newValue);

      setProject(res.project);

      setUpdateMenu((prev) => ({
        ...prev,
        open: false,
      }));
    } catch (error) {
      console.error(error);
    }
  };

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
              isUpdate: true,
              type: "input",
              field: "name",
            },
            {
              icon: <NotebookPen size={18} />,
              color: "amber",
              title: "Description",
              desc: "Short summary of the project",
              value: project.description || "No description available",
              isUpdate: true,
              type: "textarea",
              field: "description",
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
              className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 hover:border-zinc-800 transition"
            >
              <div className="flex items-center justify-between gap-3">
                {/* LEFT */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div
                    className={`min-w-8 min-h-8 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-${item.color}-500/10 flex items-center justify-center`}
                  >
                    <span className={`text-${item.color}-400`}>
                      {item.icon}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm sm:font-medium text-white truncate">
                      {item.title}
                    </p>

                    {/* Hide desc on mobile */}
                    <p className="hidden sm:block text-xs text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 max-w-[45%] sm:max-w-none">
                  <span className="text-xs sm:text-sm text-zinc-400 truncate">
                    {item.value}
                  </span>

                  {item.copy && (
                    <button
                      onClick={() => handleCopy(projectId, setProjectCopied)}
                      className="flex-shrink-0 text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      {projectCopied ? (
                        <CopyCheck className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  )}

                  {item.isUpdate && (
                    <button
                      onClick={() =>
                        setUpdateMenu({
                          open: true,
                          title: `Update ${item.title}`,
                          description: item.desc,
                          value: item.value,
                          field: item.field,
                          type: item.type || "input",
                          options: item.options || [],
                        })
                      }
                      className="flex-shrink-0 text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* SECTION HEADER */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-4">
            <h3 className="text-sm font-semibold text-white">
              Core description of the Project
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
              isUpdate: true,
              field: "baseUrl",
              type: "input",
            },
            {
              icon: <Workflow size={18} />,
              color: "cyan",
              title: "Framework",
              desc: "Technology stack used",
              value: project.framework || "No framework specified",
              isUpdate: true,
              type: "input",
              field: "framework",
            },
            {
              icon: <Globe size={18} />,
              color: "pink",
              title: "Environment",
              desc: "Deployment environment",
              value: project.environment,
              isUpdate: true,
              type: "select",
              options: ["Development", "Production"],
              field: "environment",
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
              isUpdate: true,
              type: "select",
              options: ["Active", "Inactive"],
              field: "status",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 hover:border-zinc-800 transition"
            >
              <div className="flex items-center justify-between gap-3">
                {/* LEFT */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <div
                    className={`min-w-8 min-h-8 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-${item.color}-500/10 flex items-center justify-center`}
                  >
                    <span className={`text-${item.color}-400`}>
                      {item.icon}
                    </span>
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {item.title}
                    </p>

                    <p className="hidden sm:block text-xs text-zinc-500">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="min-w-0 max-w-[45%] sm:max-w-none flex items-center gap-2 sm:gap-3">
                  <p className="text-xs sm:text-sm text-zinc-400 truncate text-right">
                    {item.value}
                  </p>
                  {item.isUpdate && (
                    <button
                      onClick={() =>
                        setUpdateMenu({
                          open: true,
                          title: `Update ${item.title}`,
                          description: item.desc,
                          value: item.value,
                          type: item.type || "input",
                          options: item.options || [],
                          field: item.field || "",
                        })
                      }
                      className="flex-shrink-0 text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <UpdateMenu
        key={updateMenu.title}
        open={updateMenu.open}
        onClose={() =>
          setUpdateMenu((prev) => ({
            ...prev,
            open: false,
          }))
        }
        onSave={handleProjectUpdate}
        title={updateMenu.title}
        description={updateMenu.description}
        value={updateMenu.value}
        type={updateMenu.type}
        options={updateMenu.options}
      />
    </div>
  );
}

export default ProjectDetails;
