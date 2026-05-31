import { useState, useEffect } from "react";
import {
  ShieldCheck,
  Workflow,
  Lock,
  Gauge,
  CheckCircle2,
  ArrowRight,
  MoveRight,
} from "lucide-react";

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

  const [activeSection, setActiveSection] = useState("what-is-bouncer");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 1,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex gap-16">
      <div className="flex-1 pr-6 text-zinc-300">
        {/* How It Works */}
        <section id="how-it-works" className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">
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
          <h2 className="text-xl font-semibold text-white mb-4">
            Request Flow
          </h2>

          <pre className="bg-black border border-zinc-900 rounded-lg p-5 overflow-x-auto text-sm text-zinc-300">
            {`Client
   ↓
Bouncer Middleware
   ↓
Validation API
   ↓
JWT Verification
   ↓
Route Protection
   ↓
Rate Limit Check
   ↓
Backend API`}
          </pre>
        </section>

        {/* Requirements */}
        <section id="requirements" className="mb-10">
          <h2 className="text-xl font-semibold text-white mb-4">
            What You'll Need
          </h2>

          <div className="grid md:grid-cols-3 gap-x-6 gap-y-3">
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
          <h2 className="text-xl font-semibold text-white mb-4">
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
          <h2 className="text-xl font-semibold text-white mb-4">
            Features Enabled After Integration
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
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

        {/* Next Step */}
        <section id="next-steps" className="">
          <h2 className="text-xl font-semibold text-white mb-3">Next Steps</h2>

          <p className="text-zinc-400 leading-relaxed">
            Continue with Frontend Integration if you're setting up a client
            application, or move directly to Backend Integration to start
            protecting your APIs.
          </p>

          <div className="mt-4 flex items-center gap-2 text-white">
            <span>Continue to Frontend Integration</span>
            <MoveRight size={16} />
          </div>
        </section>
      </div>

      {/* right */}
      <aside className="hidden xl:block w-56 shrink-0">
        <div className="sticky top-24 pl-6">
          <h3 className="text-sm font-semibold text-zinc-500 mb-4">
            On this page
          </h3>

          <nav className="space-y-3">
            <a
              href="#how-it-works"
              onClick={() => setActiveSection("how-it-works")}
              className={`block text-sm transition-colors ${
                activeSection === "how-it-works"
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              How It Works
            </a>

            <a
              href="#request-flow"
              onClick={() => setActiveSection("request-flow")}
              className={`block text-sm transition-colors ${
                activeSection === "request-flow"
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Request Flow
            </a>

            <a
              href="#requirements"
              onClick={() => setActiveSection("requirements")}
              className={`block text-sm transition-colors ${
                activeSection === "requirements"
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Requirements
            </a>

            <a
              href="#integration-steps"
              onClick={() => setActiveSection("integration-steps")}
              className={`block text-sm transition-colors ${
                activeSection === "integration-steps"
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Integration Steps
            </a>

            <a
              href="#features"
              onClick={() => setActiveSection("features")}
              className={`block text-sm transition-colors ${
                activeSection === "features"
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Features
            </a>

            <a
              href="#next-steps"
              onClick={() => setActiveSection("next-steps")}
              className={`block text-sm transition-colors ${
                activeSection === "next-steps"
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Next Steps
            </a>
          </nav>
        </div>
      </aside>
    </div>
  );
}
