import {
  ShieldCheck,
  Workflow,
  Lock,
  Gauge,
  CheckCircle2,
  ArrowRight,
  MoveRight,
} from "lucide-react";
import TablesOfContents from "../TableOfContents";

export default function IntegrationOverview() {
  const features = [
    {
      icon: <ShieldCheck size={18} />,
      title: "Protected Routes",
      description: "Secure sensitive endpoints with centralized controls.",
    },
    {
      icon: <Lock size={18} />,
      title: "JWT Authentication",
      description: "Validate users before requests reach your APIs.",
    },
    {
      icon: <Gauge size={18} />,
      title: "Rate Limiting",
      description: "Prevent abuse and excessive traffic automatically.",
    },
    {
      icon: <Workflow size={18} />,
      title: "Centralized Security",
      description:
        "Manage route protection and security settings from one dashboard.",
    },
  ];

  const requirements = [
    "Bouncer Project",
    "Project ID",
    "API Key",
    "Backend Application",
    "Authentication System (Optional)",
  ];

  const setupSteps = [
    "Configure your project inside the Bouncer dashboard.",
    "Add the middleware to your backend application.",
    "Generate JWT tokens after user authentication.",
    "Protect routes using your project configuration.",
    "Test requests and verify security rules.",
  ];

  const sections = [
    { id: "how-it-works", label: "How It Works" },
    { id: "request-flow", label: "Request Flow" },
    { id: "requirements", label: "What You'll Need" },
    { id: "integration-steps", label: "Integration Steps" },
    { id: "features", label: "Features" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16">
      <div className="flex-1 min-w-0 xl:pr-6 text-zinc-300">
        {/* How It Works */}
        <section id="how-it-works" className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            How It Works
          </h2>

          <p className="text-zinc-400 leading-8">
            When you integrate Bouncer into your application:
          </p>

          <ol className="mt-4 space-y-3 text-zinc-400 leading-8 list-decimal pl-6">
            <li>
              Your application sends incoming requests through the Bouncer
              middleware.
            </li>

            <li>
              The middleware collects request information and project
              credentials.
            </li>

            <li>
              Bouncer validates authentication, route permissions, and security
              rules.
            </li>

            <li>
              Rate limiting and access control policies are evaluated
              automatically.
            </li>

            <li>
              If validation succeeds, the request is forwarded to your backend
              API.
            </li>
          </ol>
        </section>

        {/* Request Flow */}
        <section id="request-flow" className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Request Flow
          </h2>

          <div>
            <img
              src="/architecture/Request-flow.png"
              alt="Request Flow Diagram"
              className="sm:w-full"
            />
          </div>
        </section>

        {/* Requirements */}
        <section id="requirements" className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            What You'll Need
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
            {requirements.map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2
                  size={18}
                  className="text-green-500 flex-shrink-0"
                />

                <span>{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Setup Steps */}
        <section id="integration-steps" className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Integration Steps
          </h2>

          <div className="space-y-3">
            {setupSteps.map((step, index) => (
              <div key={step} className="flex items-start gap-4">
                <div className="w-7 h-7 flex items-center justify-center text-sm text-white">
                  {index + 1}.
                </div>

                <p className="text-zinc-400">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mb-10">
          <h2 className="text-lg sm:text-xl font-semibold text-white mb-4">
            Features Enabled After Integration
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-4 border border-zinc-900 rounded-lg"
              >
                <div className="text-white mb-3">{feature.icon}</div>

                <h3 className="font-medium text-white mb-2">{feature.title}</h3>

                <p className="text-sm text-zinc-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* right */}
      <TablesOfContents sections={sections} />
    </div>
  );
}
