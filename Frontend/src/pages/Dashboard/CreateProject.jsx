import { useState } from "react";
import { integrationCode } from "../../utils/HelperFunctions/integrationCode";
import { Waypoints, BotOff, ShieldAlert, Link } from "lucide-react";

function CreateProject() {
  const [framework, setFramework] = useState("Node / Express");

  return (
    <div className="bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          Project Setup
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white py-2">
              New Workspace
            </h1>
          </div>

          {/* RIGHT HEADER FEATURES */}
          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap animate-marquee text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                <div className="flex items-center gap-2">
                  <Waypoints className="w-4 h-4 text-emerald-400" />
                  <span>Rate Limiting</span>
                </div>
                <div className="flex items-center gap-2">
                  <BotOff className="w-4 h-4 text-amber-400" />
                  <span>Bot Detection</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 text-red-400" />
                  <span>Attack Prevention</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8">
          Create a project to start protecting and monitoring your APIs. After
          creating the project, integrate the middleware into your backend to
          enable request protection and analytics.
        </p>

        <div className="grid grid-cols-2 gap-6">
          {/* LEFT SIDE */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 space-y-6">
            {/* Project Name */}
            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">Project Name</h2>

              <p className="text-sm text-zinc-400 mb-4">
                The visible name of your project in the dashboard.
              </p>

              <input
                type="text"
                placeholder="My CRUD API"
                className="w-full bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-700"
              />
            </div>

            {/* Description */}
            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">
                Project Description{" "}
                <span className="text-zinc-500">(optional)</span>
              </h2>

              <p className="text-sm text-zinc-400 mb-4">
                Short description about what this API project does.
              </p>

              <textarea
                rows="3"
                placeholder="Simple user CRUD API"
                className="w-full resize-none bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-700"
              />
            </div>

            {/* Backend URL */}
            <div className="border border-zinc-800 rounded-lg p-5">
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
                placeholder="https://api.mycrudapp.com or http://localhost:5000"
                className="w-full bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-700"
              />
            </div>

            {/* Framework */}

            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">
                Framework <span className="text-zinc-500">(optional)</span>
              </h2>

              <p className="text-sm text-zinc-400 mb-4">
                Select the backend framework used for this API.
              </p>

              <select
                value={framework}
                onChange={(e) => setFramework(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-700"
              >
                <option>Node / Express</option>
                <option>FastAPI</option>
                <option>Django</option>
                <option>Spring Boot</option>
                <option>Other</option>
              </select>
            </div>

            {/* Environment */}
            <div className="border border-zinc-800 rounded-lg p-5">
              <h2 className="text-white font-medium mb-2">Environment</h2>

              <p className="text-sm text-zinc-400 mb-4">
                Select the environment where this API will run.
              </p>

              <select className="w-full bg-black border border-zinc-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:border-zinc-700">
                <option>Development</option>
                <option>Production</option>
              </select>
            </div>

            <div className="flex justify-end">
              <button className="bg-white text-black px-5 py-2 rounded-md cursor-pointer text-sm font-medium hover:bg-zinc-200 transition">
                Add Workspace
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <h2 className="text-white font-medium mb-2">
              Framework Integration
            </h2>

            <p className="text-sm text-zinc-400 mb-4">
              After creating your project, add this middleware to your backend
              to start protecting API requests.
            </p>

            <div className="h-10 bg-black/80 border-b border-white/8 px-6 flex items-center rounded-md">
              <span className="text-xs font-medium text-slate-600">
                {framework} • Integration
              </span>
            </div>
            <div className="bg-black border border-zinc-800 rounded-md p-4">
              <pre className="text-sm overflow-x-auto">
                <code>{integrationCode[framework]}</code>
              </pre>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-sm font-medium text-zinc-200">
                What gets protected automatically
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-3 flex items-start gap-3">
                  <Waypoints className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-300 font-medium">Rate Limiting</p>
                    <p className="text-zinc-500">
                      Prevents abuse from repeated requests
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-3 flex items-start gap-3">
                  <BotOff className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Bot & Crawler Detection
                    </p>
                    <p className="text-zinc-500">Blocks malicious automation</p>
                  </div>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-3 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-violet-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Attack Pattern Blocking
                    </p>
                    <p className="text-zinc-500">
                      SQLi, XSS, path traversal & more
                    </p>
                  </div>
                </div>

                <div className="bg-zinc-950/50 border border-zinc-800 rounded-lg p-3 flex items-start gap-3">
                  <Link className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-zinc-300 font-medium">
                      Analytics & Insights
                    </p>
                    <p className="text-zinc-500">
                      See blocked requests in dashboard
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xs text-zinc-500 text-center pt-2">
                All features enabled by default — customize later in project
                settings
              </p>
            </div>

            <div className="mt-6">
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

            <div className="mt-6">
              <h3 className="text-sm font-medium text-zinc-200 mb-3">
                Pro Tips
              </h3>

              <div className="space-y-3">
                <div className="bg-zinc-950/40 border-l-4 border-violet-500 pl-3 py-2 text-xs">
                  <span className="text-violet-300 font-medium">
                    Start small:{" "}
                  </span>
                  <span className="text-zinc-400">
                    Test in development first before going to production.
                  </span>
                </div>

                <div className="bg-zinc-950/40 border-l-4 border-emerald-500 pl-3 py-2 text-xs">
                  <span className="text-emerald-300 font-medium">
                    Zero false positives:{" "}
                  </span>
                  <span className="text-zinc-400">
                    Our ML-tuned rules rarely block legitimate users.
                  </span>
                </div>

                <div className="bg-zinc-950/40 border-l-4 border-amber-500 pl-3 py-2 text-xs">
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
  );
}

export default CreateProject;
