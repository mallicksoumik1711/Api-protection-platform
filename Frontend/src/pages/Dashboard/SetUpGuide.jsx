import { Landmark, Lightbulb, MoveRight, Pointer } from "lucide-react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import { useNavigate } from "react-router-dom";

function StepCard({ step, title, description, image, route }) {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 items-center bg-zinc-950 border border-zinc-900 rounded-lg px-4 sm:px-6 lg:px-8 py-4 transition-all duration-300">
      <div className="lg:col-span-5 space-y-3 sm:space-y-6">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="w-6 h-6 sm:w-10 sm:h-10 rounded-md bg-zinc-900/40 border border-zinc-800 flex items-center justify-center text-zinc-300 font-semibold text-xs sm:text-lg flex-shrink-0">
            {step}
          </div>
          <h3 className="text-sm sm:text-2xl font-semibold text-white tracking-tight">
            {title}
          </h3>
        </div>

        <p className="text-zinc-400 leading-relaxed text-sm sm:text-[15px]">
          {description}
        </p>

        <div className="pt-4 border-t border-zinc-800">
          <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
            Why this step matters
          </div>
          <p className="text-sm text-zinc-300">
            {step === 1 &&
              "Establishes the foundation for your entire API security setup."}
            {step === 2 &&
              "Without a proper API key, all requests will be rejected."}
            {step === 3 &&
              "Prevents unauthorized access to sensitive endpoints."}
            {step === 4 &&
              "Enables secure stateless authentication for your users."}
            {step === 5 &&
              "Protects your backend from abuse and DDoS-like attacks."}
            {step === 6 &&
              "Connects everything together so your API becomes live and secure."}
          </p>
        </div>

        <button
          onClick={() => navigate(route)}
          className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-zinc-900 hover:bg-zinc-950/80 border border-zinc-800 px-6 py-3 rounded-md text-sm text-white transition-all duration-200"
        >
          Go to Step {step} <MoveRight size={18} />
        </button>
      </div>

      <div className="lg:col-span-7">
        <div className="relative group h-[220px] sm:h-[300px] lg:h-[380px] overflow-hidden rounded-md border border-zinc-800 bg-zinc-950 shadow-inner">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-all" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigate(route);
              }}
              className="bg-black/90 border border-zinc-900 hover:bg-zinc-900 hover:border-zinc-700 cursor-pointer px-8 py-3 rounded-md text-white text-sm flex items-center gap-2 transition-all active:scale-95"
            >
              Open Step <MoveRight size={18} />
            </button>
          </div>

          <div className="absolute top-2 right-2 sm:right-4 text-[10px] font-mono bg-black/70 px-3 py-1 rounded-full border border-emerald-700 text-emerald-400 bg-emerald-500/20">
            PREVIEW
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SetUpGuide() {
  const steps = [
    {
      step: 1,
      title: "Create Project",
      description: "Set up your project, backend URL and environment.",
      image: "/screens/create-project.PNG",
      route: "/create-project",
    },
    {
      step: 2,
      title: "Generate API Key",
      description: "Create a secure API key to authenticate requests.",
      image: "/screens/api-key.PNG",
      route: "/api-keys",
    },
    {
      step: 3,
      title: "Protect Routes",
      description: "Define which APIs should be secured.",
      image: "/screens/protected-api.PNG",
      route: "/protected-api",
    },
    {
      step: 4,
      title: "JWT Configuration",
      description: "Enable and configure token-based authentication.",
      image: "/screens/jwt-configuration.PNG",
      route: "/jwt-settings",
    },
    {
      step: 5,
      title: "Rate Limiting",
      description: "Control API traffic and prevent abuse.",
      image: "/screens/rate-limiting.PNG",
      route: "/rate-limit",
    },
    {
      step: 6,
      title: "Integration",
      description: "Add middleware to your backend and go live.",
      image: "/screens/integration.PNG",
      route: "/integration",
    },
  ];

  return (
    <div className="bg-black min-h-screen px-4 sm:px-6 py-4 text-white">
      <DashboardHeader
        tag={DashboardHeaderValues.setupGuide.tag}
        title={DashboardHeaderValues.setupGuide.title}
        description={DashboardHeaderValues.setupGuide.description}
        features={DashboardHeaderValues.setupGuide.features}
      />

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6">
        <div className="space-y-10">
          {steps.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6 mt-8">
        <div className="space-y-8">
          {/* SECTION 1 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 space-y-4">
            <h2 className="text-sm sm:text-lg sm:text-xl font-semibold text-white">
              1. Where to put the MAIN middleware
            </h2>

            <p className="text-zinc-400 text-sm">
              File:{" "}
              <span className="text-white font-medium">app.js / server.js</span>
            </p>

            <p className="text-sm text-red-400 font-medium">
              Middleware must be placed BEFORE your routes
            </p>

            <pre className="bg-black border border-zinc-800 p-4 rounded-md text-xs sm:text-sm text-zinc-300 overflow-x-auto">
              {`app.use(cors());
app.use(express.json());

//  BOUNCER MIDDLEWARE
app.use(async (req, res, next) => {
  // validation logic
});

//  AFTER middleware
app.use("/api/users", userRoute);`}
            </pre>

            <p className="text-xs text-zinc-500">
              If placed after routes → middleware won’t run → security bypass
            </p>
          </div>

          {/* SECTION 2 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 space-y-4">
            <h2 className="text-sm sm:text-lg sm:text-xl font-semibold text-white">
              2. Where to generate token
            </h2>

            <p className="text-zinc-400 text-sm">
              File: Controller (login/signup/create)
            </p>

            <p className="text-sm text-red-400 font-medium">
              Generate token ONLY after user creation/login
            </p>

            <pre className="bg-black border border-zinc-800 p-4 rounded-md text-xs sm:text-sm text-zinc-300 overflow-x-auto">
              {`const createUsers = async (req, res) => {
  const newUser = {
    id: Date.now(),
    ...
  };

  const token = await generateToken(newUser.id);

  res.json({
    user: newUser,
    token,
  });
};`}
            </pre>

            <p className="text-xs text-zinc-500">
              Token represents identity → must be created after user exists
            </p>
          </div>

          {/* SECTION 3 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 space-y-4">
            <h2 className="text-sm sm:text-lg sm:text-xl font-semibold text-white">
              3. Token generation logic
            </h2>

            <p className="text-zinc-400 text-sm">
              File:{" "}
              <span className="text-white font-medium">
                /utils/generateToken.js
              </span>
            </p>

            <p className="text-sm text-red-400 font-medium">
              Keep this separate from controller
            </p>

            <pre className="bg-black border border-zinc-800 p-4 rounded-md text-xs sm:text-sm text-zinc-300 overflow-x-auto">
              {`const generateToken = async (userId) => {
  const response = await fetch("http://localhost:3000/apiauth/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": "YOUR_API_KEY",
    },
    body: JSON.stringify({
      projectId: "YOUR_PROJECT_ID",
      userId,
    }),
  });

  const data = await response.json();
  return data.token;
};

module.exports = generateToken;`}
            </pre>

            <ul className="text-xs text-zinc-500 space-y-1">
              <li>• Reusable for login/signup</li>
              <li>• Cleaner controllers</li>
              <li>• Easy to replace auth service</li>
            </ul>
          </div>

          {/* SECTION 4 */}
          <div className="bg-zinc-950 border border-zinc-900 rounded-lg p-6 space-y-4">
            <h2 className="text-sm sm:text-lg sm:text-xl font-semibold text-white">
              4. Using Bearer Token
            </h2>

            <p className="text-zinc-400 text-sm">File: Frontend (React)</p>

            <p className="text-sm text-red-400 font-medium">
              Send token in every protected request
            </p>

            <div className="space-y-2">
              <p className="text-sm text-zinc-300">Store token</p>
              <pre className="bg-black border border-zinc-800 p-3 rounded-md text-xs text-zinc-300 overflow-x-auto">
                {`localStorage.setItem("token", data.token);`}
              </pre>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-zinc-300">Use token</p>
              <pre className="bg-black border border-zinc-800 p-3 rounded-md text-xs text-zinc-300 overflow-x-auto">
                {`fetch("/api/users/show", {
  headers: {
    Authorization: \`Bearer \${localStorage.getItem("token")}\`,
  },
});`}
              </pre>
            </div>

            <ul className="text-xs text-zinc-500 space-y-1">
              <li>• Must include "Bearer"</li>
              <li>• Must match backend token</li>
              <li>• Must not be empty</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
