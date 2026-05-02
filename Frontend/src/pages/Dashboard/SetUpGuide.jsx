import { Landmark, Lightbulb, MoveRight, Pointer } from "lucide-react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";
import { useNavigate } from "react-router-dom";
import DevGuide from "../../components/DevGuide";

function StepCard({ step, title, description, image, route }) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(route)}
      className="relative group cursor-pointer rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/40"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-[180px] sm:h-[220px] lg:h-[240px] object-cover object-top transition duration-500 group-hover:scale-105"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
        {/* TEXT */}
        <div className="translate-y-4 group-hover:translate-y-0 transition-all duration-300">
          <p className="text-xs text-zinc-400 mb-1">Step {step}</p>

          <h3 className="text-sm sm:text-base font-medium text-white">
            {title}
          </h3>

          <p className="text-xs text-zinc-400 mt-1 line-clamp-2">
            {description}
          </p>

          <button
            onClick={(e) => {
              e.stopPropagation();
              navigate(route);
            }}
            className="mt-3 inline-flex items-center gap-1 text-xs bg-white text-black px-3 py-1.5 rounded-md hover:bg-zinc-200 transition"
          >
            Open <MoveRight size={14} />
          </button>
        </div>
      </div>

      {/* STEP BADGE */}
      <div className="absolute top-2 left-2 text-[10px] bg-black/70 px-2 py-1 rounded-md border border-zinc-700 text-zinc-300">
        {step}
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
      image: "/screens/api-keys.PNG",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {steps.map((s) => (
            <StepCard key={s.step} {...s} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6 mt-8">
        <DevGuide/>
      </div>
    </div>
  );
}
