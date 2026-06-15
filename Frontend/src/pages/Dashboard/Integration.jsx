import { useState, useEffect } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import { useSelector } from "react-redux";
import { getIntegrationData } from "../../api/integration";
import {
  Braces,
  Copy,
  CopyCheck,
  Globe,
  NotebookPen,
  ShieldCheck,
  SquareMousePointer,
  Stethoscope,
  TriangleAlert,
  Unlink2,
  User,
  Workflow,
  UngroupIcon,
} from "lucide-react";
import handleCopy from "../../utils/HelperFunctions/handleCopy";
import toast from "react-hot-toast";

function Integration() {
  const projectId = useSelector((state) => state.project.selectedProjectId);
  const [data, setData] = useState(null);
  const [projectCopied, setProjectCopied] = useState(false);
  const [middlewareCopied, setMiddlewareCopied] = useState(false);
  const [tokenCopied, setTokenCopied] = useState(false);
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

  const middlewareCode = `const excludedRoutes = ["/login", "/signup"];

app.use(async (req, res, next) => {
  if (excludedRoutes.includes(req.path)) {
    return next();
  }

  try {
    const response = await fetch("https://bouncer-u9t6.onrender.com/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": "YOUR_API_KEY",
        "Authorization": req.cookies.token
        ? \`Bearer \${req.cookies.token}\`
        : "",
      },
      body: JSON.stringify({
        projectId: "${project?.projectId ?? "your_project_id"}",
        path: req.path,
        method: req.method,
      }),
    });

    const data = await response.json();

    if (!data.allowed) {
      return res.status(403).json({
        message: data.reason || data.message,
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      message: "Auth service unavailable",
    });
  }
});`;

  const tokenCode = `// Call this after user login/signup

const generateToken = async (userId) => {
  const response = await fetch("https://bouncer-u9t6.onrender.com/apiauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "YOUR_API_KEY",
    },
    body: JSON.stringify({
      projectId: "${project?.projectId ?? "your_project_id"}",
      userId: userId,
    }),
  });

  const data = await response.json();
  if (!data.success) {
    throw new Error("Token generation failed");
  }
  return data.token;
};

// Example usage
const token = await generateToken(user.id);
console.log("JWT Token:", token);
`;

  return (
    <div className="bg-black px-4 sm:px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.integration.tag}
        title={DashboardHeaderValues.integration.title}
        description={DashboardHeaderValues.integration.description}
        features={DashboardHeaderValues.integration.features}
      />

      <div className="mt-6 max-w-6xl mx-auto flex flex-col lg:flex-row pr-0 sm:pr-6 gap-6">
        {/* Project Info */}
        <div className="w-full lg:w-1/2 h-fit lg:sticky lg:top-6">
          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <User size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Name</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Project display name
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {project?.name ?? "No name available"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <NotebookPen size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Description</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Short summary of the project
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {project?.description ?? "No description available"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <SquareMousePointer size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">ProjectId</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Unique identifier for the project
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 min-w-0 max-w-[45%]">
              <div className="text-xs sm:text-sm text-zinc-400 truncate text-right">
                {project?.projectId ?? "No project ID available"}
              </div>

              {project?.projectId && (
                <div
                  onClick={() =>
                    handleCopy(project?.projectId, setProjectCopied)
                  }
                  className="cursor-pointer flex-shrink-0"
                >
                  {projectCopied ? (
                    <CopyCheck size={16} className="text-zinc-400" />
                  ) : (
                    <Copy size={16} className="text-zinc-400" />
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-semibold text-white">
              Project core details
            </h3>

            <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              Learn more ↗
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <Unlink2 size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Base URL</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Primary API endpoint
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {project?.baseUrl ?? "No base URL available"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <Workflow size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Framework</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Technology stack used in the project
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {project?.framework ?? "No framework specified"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <Globe size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Environment</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Deployment environment of the project
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {project?.environment ?? "No environment specified"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <Stethoscope size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Status</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {project?.status ?? "No status available"}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-semibold text-white">
              Middleware settings
            </h3>

            <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              Learn more ↗
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <ShieldCheck size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Protected APIs</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {protectedRoutes?.length ?? 0} APIs protected
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <Braces size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">JWT Setting</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {jwtSettings?.enabled
                ? `${jwtSettings.algorithm} • ${jwtSettings.expiresIn}`
                : "Disabled"}
            </div>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 mb-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <TriangleAlert size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Rate Limits</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              {rateLimit
                ? `${rateLimit.limit} req / ${rateLimit.windowTime}s`
                : "Disabled"}
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 mb-3">
            <h3 className="text-sm font-semibold text-white">Validation URL</h3>

            <button className="text-xs text-zinc-500 hover:text-white flex items-center gap-1">
              Learn more ↗
            </button>
          </div>

          <div className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3 flex items-center justify-between gap-3 hover:border-zinc-800 transition">
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">
              <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 bg-zinc-700/30 rounded-full">
                <UngroupIcon size={18} />
              </div>

              <div className="min-w-0">
                <p className="text-sm font-medium text-white">Validation URL</p>
                <p className="text-xs text-zinc-500 hidden sm:block">
                  Current status of the project
                </p>
              </div>
            </div>

            <div className="text-xs sm:text-sm text-zinc-400 truncate text-right max-w-[45%]">
              https://bouncer-u9t6.onrender.com/validate
            </div>
          </div>
        </div>
        {/* Middleware Integration */}
        <div className="w-full lg:w-1/2 bg-zinc-950 rounded-md p-3 sm:p-4 lg:p-6 border border-zinc-900 h-fit lg:sticky lg:top-6 overflow-hidden">
          <div className="flex items-center justify-between gap-2 mb-4">
            <h3 className="text-sm sm:text-base font-semibold text-white">
              Integration Middleware
            </h3>

            <button
              onClick={() => handleCopy(middlewareCode, setMiddlewareCopied)}
              className="cursor-pointer text-xs text-zinc-400 hover:text-white flex items-center gap-1 self-start sm:self-auto flex-shrink-0"
            >
              {middlewareCopied ? (
                <CopyCheck size={16} className="text-zinc-400" />
              ) : (
                <Copy size={16} className="text-zinc-400" />
              )}
              Copy
            </button>
          </div>

          <pre className="text-[10px] sm:text-xs text-zinc-300 bg-black rounded-md p-3 sm:p-4 overflow-x-auto border border-zinc-800 whitespace-pre-wrap break-words max-w-full">
            <code>{middlewareCode}</code>
          </pre>

          <div className="flex items-center justify-between gap-2 mt-4">
            <h3 className="text-sm sm:text-base font-semibold text-white">
              Token generation
            </h3>

            <button
              onClick={() => handleCopy(tokenCode, setTokenCopied)}
              className="cursor-pointer text-xs text-zinc-400 hover:text-white flex items-center gap-1 flex-shrink-0 self-start sm:self-auto"
            >
              {tokenCopied ? (
                <CopyCheck size={14} className="text-zinc-400" />
              ) : (
                <Copy size={14} className="text-zinc-400" />
              )}
              Copy
            </button>
          </div>

          <p className="text-[10px] sm:text-[11px] text-yellow-500 mt-2 flex items-start gap-2 leading-relaxed">
            <span className="mt-[2px] flex-shrink-0">
              <TriangleAlert size={12} />
            </span>

            <span>
              Run this on your backend after user login/signup. Do not run this
              in frontend.
            </span>
          </p>

          <pre className="text-[10px] sm:text-xs text-zinc-300 bg-black rounded-md p-3 sm:p-4 overflow-x-auto border border-zinc-800 mt-4 whitespace-pre-wrap break-words max-w-full">
            <code>{tokenCode}</code>
          </pre>

          <div className="bg-zinc-950 rounded-md p-4 sm:p-5 lg:p-6 border border-zinc-900 mt-4">
            <h3 className="text-sm sm:text-base font-semibold text-white mb-4">
              How to Setup
            </h3>

            <div className="space-y-3 sm:space-y-4 text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
              <div>
                <p className="text-white font-medium">1. Add Middleware</p>

                <p>
                  Copy the middleware above and paste it in your backend
                  (Express, Node.js).
                </p>
              </div>

              <div>
                <p className="text-white font-medium">
                  2. Exclude Public Routes
                </p>

                <p>
                  Ensure routes like /login or /signup are excluded from
                  middleware.
                </p>
              </div>

              <div>
                <p className="text-white font-medium">
                  3. Generate Token After Login
                </p>

                <p>
                  Call /apiauth/token from your backend after user
                  authentication.
                </p>
              </div>

              <div>
                <p className="text-white font-medium">
                  4. Send Token in Requests
                </p>

                <p>
                  Include Authorization: Bearer "your-token" in your API
                  requests.
                </p>
              </div>

              <div>
                <p className="text-white font-medium">5. Start your server</p>

                <p>Run your backend and test protected routes.</p>
              </div>
            </div>
          </div>

          <div className="text-[11px] sm:text-xs text-zinc-400 mt-4 leading-relaxed">
            <p className="text-white font-medium mb-2">What Happens Next?</p>

            <p>
              Every request will first go through our validation system. If it
              passes all checks (JWT, rate limits, etc.), your API will execute.
              Otherwise, it will be blocked.
            </p>
          </div>

          <p className="text-[10px] sm:text-[11px] text-yellow-500 mt-3 flex items-start gap-2 leading-relaxed">
            <span className="mt-[2px] flex-shrink-0">
              <TriangleAlert size={12} />
            </span>

            <span>
              Make sure to keep your API key secure. Do not expose it in
              frontend code.
            </span>
          </p>

          <p className="text-[10px] sm:text-[11px] text-zinc-500 mt-2 leading-relaxed">
            Tip: Use Postman or curl to test your protected endpoints.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Integration;
