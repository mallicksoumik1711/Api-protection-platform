import { useState } from "react";
import { integrationCode } from "../../utils/HelperFunctions/integrationCode";
import { Copy, CopyCheck, Link, FilePlusCorner } from "lucide-react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import Dropdown from "../../layouts/Dropdown";
import { createProject } from "../../api/projects";

import toast from "react-hot-toast";

import { useDispatch } from "react-redux";
import { setProject } from "../../store/projectSlice";
import { useNavigate } from "react-router-dom";

function CreateProject() {
  // redux
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [framework, setFramework] = useState("Node / Express");
  const [environment, setEnvironment] = useState("Development");
  const [projectId, setProjectId] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const projectData = {
      name: formData.get("name"),
      description: formData.get("description"),
      baseUrl: formData.get("baseUrl"),
      framework: formData.get("framework"),
      environment: formData.get("environment"),
    };

    if (!projectData.name || !projectData.baseUrl || !projectData.environment) {
      toast.error("Please fill in all required fields");
      console.error("Please fill in all required fields");
      return;
    }

    try {
      const res = await createProject(projectData);
      toast.success("Project created successfully");
      console.log("Project created:", res);
      const projectId = res.projectId;
      setProjectId(projectId);
      dispatch(setProject(projectId));
      setTimeout(() => {
        navigate(`/project/${projectId}/api-keys`);
      }, 1000); //navigate to other page after creating
    } catch (err) {
      toast.error(err.message);
      console.log(err.message);
    }
  };

  const handleCopy = async () => {
    if (projectId) {
      try {
        await navigator.clipboard.writeText(projectId);
        setCopied(true);
        toast.success("Project ID copied to clipboard");
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        toast.error("Failed to copy Project ID");
        console.error("Failed to copy:", err);
      }
    }
  };

  return (
    <div className="bg-black px-4 sm:px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.createProject.tag}
        title={DashboardHeaderValues.createProject.title}
        description={DashboardHeaderValues.createProject.description}
        features={DashboardHeaderValues.createProject.features}
      />

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
          {/* LEFT SIDE */}
          <form action="" method="post" onSubmit={handleSubmit}>
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-5 space-y-6 lg:sticky lg:top-6 h-fit">
              {/* Project Name */}
              <div className="border border-zinc-900 rounded-lg p-5">
                <h2 className="text-white font-medium mb-2">Project Name</h2>

                <p className="text-sm text-zinc-400 mb-4">
                  The visible name of your project in the dashboard.
                </p>

                <input
                  type="text"
                  name="name"
                  placeholder="My CRUD API"
                  className="w-full bg-black border border-zinc-900 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-800"
                />
              </div>

              {/* Description */}
              <div className="border border-zinc-900 rounded-lg p-5">
                <h2 className="text-white font-medium mb-2">
                  Project Description{" "}
                  <span className="text-zinc-500">(optional)</span>
                </h2>

                <p className="text-sm text-zinc-400 mb-4">
                  Short description about what this API project does.
                </p>

                <textarea
                  rows="3"
                  name="description"
                  placeholder="Simple user CRUD API"
                  className="w-full resize-none bg-black border border-zinc-900 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-800"
                />
              </div>

              {/* Backend URL */}
              <div className="border border-zinc-900 rounded-lg p-5">
                <h2 className="flex items-center gap-2 text-white font-medium mb-2">
                  Backend API Base URL{" "}
                  <span>
                    <Link className="w-4 h-4" />
                  </span>
                </h2>

                <p className="text-sm text-zinc-400 mb-4">
                  The base URL where your backend API is running.
                </p>

                <input
                  type="text"
                  name="baseUrl"
                  placeholder="https://api.mycrudapp.com or http://localhost:5000"
                  className="w-full bg-black border border-zinc-900 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-700"
                />
              </div>

              {/* Framework */}

              <Dropdown
                name="framework"
                label="Framework"
                optional={true}
                description="Select the backend framework used for this API."
                options={[
                  "Node / Express",
                  "FastAPI",
                  "Django",
                  "Spring Boot",
                  "Other",
                ]}
                value={framework}
                onChange={setFramework}
              />

              {/* Environment */}

              <Dropdown
                name="environment"
                label="Environment"
                description="Select the environment where this API will run."
                options={["Development", "Production"]}
                value={environment}
                onChange={setEnvironment}
              />

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-950/50 text-white font-semibold py-3.5 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                >
                  <FilePlusCorner className="w-4 h-4 relative z-10" />
                  <span className="relative z-10">Add Workspace</span>
                </button>
              </div>
            </div>
          </form>

          {/* RIGHT SIDE */}
          <div className="space-y-6 lg:sticky lg:top-6 h-fit">
            <div className="bg-black border border-zinc-900 rounded-lg p-4 sm:p-5">
              <h2 className="text-white font-medium mb-2">
                Framework Integration
              </h2>

              <p className="text-sm text-zinc-400 mb-4">
                After creating your project, add this middleware to your backend
                to start protecting API requests.
              </p>

              <div className="h-10 px-6 flex items-center rounded-md">
                <span className="text-xs font-medium text-slate-600">
                  {framework} • Integration
                </span>
              </div>
              <div className="bg-zinc-950 border border-zinc-900 rounded-md p-4">
                <pre className="text-xs sm:text-sm overflow-x-auto">
                  <code>{integrationCode[framework]}</code>
                </pre>
              </div>
            </div>

            {projectId ? (
              <div className="bg-black border border-zinc-900 rounded-lg p-5">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-zinc-200">
                    Project ID (auto-generated)
                  </h3>

                  <div className="bg-zinc-950/40 border border-zinc-900 rounded-md px-4 py-3 flex items-center justify-between">
                    <p className="text-xs sm:text-sm text-emerald-300 font-mono break-all">
                      {projectId}
                    </p>

                    <button
                      onClick={handleCopy}
                      className="text-xs text-zinc-400 hover:text-white transition cursor-pointer"
                    >
                      {copied ? (
                        <CopyCheck className="w-4 h-4" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-black border border-zinc-800 rounded-lg p-5">
                <div className="space-y-4">
                  <h3 className="text-sm font-medium text-zinc-200">
                    Project ID (auto-generated)
                  </h3>

                  <div className="bg-zinc-950/40 border border-zinc-900 rounded-md px-4 py-3 flex items-center justify-between">
                    <p className="text-sm text-zinc-300 font-mono">
                      Project-ID will appear here after project creation
                    </p>
                  </div>
                  <p className="text-xs text-zinc-500 text-center">
                    This ID is used to connect API keys, logs, and protected
                    routes. You can find it later in the project overview, list,
                    or URL
                  </p>
                </div>
              </div>
            )}

            <div className="bg-black border border-zinc-900 rounded-lg p-5">
              <div className="">
                <h3 className="text-sm font-medium text-zinc-200 mb-4">
                  Next steps after creation
                </h3>

                <ol className="space-y-4 text-sm">
                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-950/50 border border-violet-800 flex items-center justify-center text-violet-300 text-xs font-medium">
                      1
                    </div>
                    <div>
                      <p className="text-zinc-300">Copy your Project Key</p>
                      <p className="text-zinc-500 text-xs">
                        It will appear in the project overview
                      </p>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-950/50 border border-violet-800 flex items-center justify-center text-violet-300 text-xs font-medium">
                      2
                    </div>
                    <div>
                      <p className="text-zinc-300">
                        Add middleware to your backend
                      </p>
                      <p className="text-zinc-500 text-xs">
                        Paste the code above into your app
                      </p>
                    </div>
                  </li>

                  <li className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-violet-950/50 border border-violet-800 flex items-center justify-center text-violet-300 text-xs font-medium">
                      3
                    </div>
                    <div>
                      <p className="text-zinc-300">Test & monitor</p>
                      <p className="text-zinc-500 text-xs">
                        Send requests and check dashboard for analytics
                      </p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            <div className="bg-black border border-zinc-900 rounded-lg p-5">
              <div className="">
                <h3 className="text-sm font-medium text-zinc-200 mb-3">
                  Pro Tips
                </h3>

                <div className="space-y-3">
                  <div className="bg-zinc-950 border-l-4 border-violet-500 pl-3 py-2 text-xs">
                    <span className="text-violet-300 font-medium">
                      Start small:{" "}
                    </span>
                    <span className="text-zinc-400">
                      Test in development first before going to production.
                    </span>
                  </div>

                  <div className="bg-zinc-950 border-l-4 border-emerald-500 pl-3 py-2 text-xs">
                    <span className="text-emerald-300 font-medium">
                      Zero false positives:{" "}
                    </span>
                    <span className="text-zinc-400">
                      Our ML-tuned rules rarely block legitimate users.
                    </span>
                  </div>

                  <div className="bg-zinc-950 border-l-4 border-amber-500 pl-3 py-2 text-xs">
                    <span className="text-amber-300 font-medium">
                      Customize later:{" "}
                    </span>
                    <span className="text-zinc-400">
                      Adjust rules, add allowlists, or create custom challenges
                      from the dashboard.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProject;
