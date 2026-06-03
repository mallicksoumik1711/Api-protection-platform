import { useState, useEffect } from "react";
import {
  CheckCircle2,
  ShieldCheck,
  KeyRound,
  Server,
  Lock,
  Code2,
} from "lucide-react";

function BackendIntegration() {
  const [activeSection, setActiveSection] = useState("requirements");

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
        threshold: 0.4,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16">
      {/* Main Content */}
      <div className="flex-1 min-w-0 xl:pr-6 text-zinc-300">
        {/* Generate Project Token */}
        <section id="generate-project-token" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-white">
              Generate Project Token
            </h2>
          </div>

          <p className="text-zinc-400 leading-8 mb-4">
            After a user successfully logs in or registers, generate a Bouncer
            project token. This token will be used for route validation and
            access control across your protected endpoints.
          </p>

          <p className="text-zinc-400 leading-8 mb-6">
            You can create a utility function such as{" "}
            <code className="text-white">generateProjectToken()</code> and call
            it after authentication succeeds.
          </p>

          <div className="rounded-lg border border-zinc-800 p-4 overflow-x-auto">
            <pre className="text-sm text-zinc-300">
              {`const generateProjectToken = async (userId) => {
  const response = await fetch(
    "http://localhost:3000/apiauth/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
      },
      body: JSON.stringify({
        projectId: process.env.PROJECT_ID,
        userId,
      }),
    }
  );

  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message);
  }

  return data.token;
};`}
            </pre>
          </div>
        </section>

        {/* Store Credentials Securely */}
        <section id="secure-credentials" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-white">
              Store Credentials Securely
            </h2>
          </div>

          <p className="text-zinc-400 leading-8">
            The API Key should never be exposed publicly or committed to source
            control. Always store it in environment variables and access it from
            your backend.
          </p>

          <p className="text-zinc-400 leading-8 mt-4">
            The Project ID can be public if necessary, but using environment
            variables for both values is recommended for consistency and easier
            configuration management.
          </p>

          <div className="mt-6 rounded-lg border border-zinc-800 p-4">
            <pre className="text-sm text-zinc-300">
              {`API_KEY=your_bouncer_api_key
PROJECT_ID=your_project_id`}
            </pre>
          </div>
        </section>

        {/* Add Middleware */}
        <section id="middleware-setup" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-white">
              Add Bouncer Middleware
            </h2>
          </div>

          <p className="text-zinc-400 leading-8 mb-4">
            Add the Bouncer validation middleware to your application before
            protected routes are registered.
          </p>

          <p className="text-zinc-400 leading-8">The middleware validates:</p>

          <ul className="list-disc pl-6 mt-2 space-y-2 text-zinc-400">
            <li>JWT authentication tokens</li>
            <li>Protected route access</li>
            <li>Allowed HTTP methods</li>
            <li>Rate limiting policies</li>
            <li>Project security rules</li>
          </ul>
        </section>

        {/* Public Routes */}
        <section id="public-routes" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-white">
              Exclude Public Routes
            </h2>
          </div>

          <p className="text-zinc-400 leading-8">
            Authentication routes such as login and registration should be
            excluded from Bouncer validation. These endpoints must remain
            accessible before a user receives a project token.
          </p>

          <div className="mt-6 rounded-lg border border-zinc-800 p-4">
            <pre className="text-sm text-zinc-300">
              {`const excludedRoutes = [
  "/auth/login",
  "/auth/register",
];`}
            </pre>
          </div>
        </section>

        {/* Protected Routes */}
        <section id="backend-routes" className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-white">
              Create Matching Backend Routes
            </h2>
          </div>

          <p className="text-zinc-400 leading-8">
            Protected pages in your frontend should have corresponding routes in
            your backend application. Bouncer validates requests at the backend
            layer, so any page that requires protection should be backed by an
            API endpoint or route that passes through the Bouncer middleware.
          </p>

          <p className="text-zinc-400 leading-8 mt-4">
            For example, if your frontend contains routes such as{" "}
            <code className="text-white">/dashboard</code>,{" "}
            <code className="text-white">/all-products</code>, or{" "}
            <code className="text-white">/cart</code>, create the corresponding
            backend routes that serve data for those pages.
          </p>
        </section>

        {/* Testing */}
        <section id="testing" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-2">
            Testing Integration
          </h2>

          <ol className="list-decimal pl-6 space-y-1 text-zinc-400 leading-8">
            <li>Create or log in to a user account.</li>
            <li>Generate a project token successfully.</li>
            <li>Access a protected route.</li>
            <li>Verify that valid requests are allowed.</li>
            <li>Verify that invalid requests are blocked.</li>
            <li>Confirm rate limits are enforced correctly.</li>
          </ol>
        </section>

        {/* Notes */}
        <section id="development-notes">
          <h2 className="text-xl font-semibold text-white mb-4">
            Development Notes
          </h2>

          <ul className="space-y-1 text-zinc-400 leading-8">
            <li>
              Keep your API Key private and never expose it to frontend
              applications.
            </li>
            <li>Use environment variables for both API Key and Project ID.</li>
            <li>
              Generate a project token immediately after successful
              authentication.
            </li>
            <li>Exclude only routes that should remain publicly accessible.</li>
            <li>Register the Bouncer middleware before protected routes.</li>
          </ul>
        </section>
      </div>

      {/* Right Navigation */}
      <aside className="hidden xl:block w-56 shrink-0">
        <div className="sticky top-24 pl-6">
          <h3 className="text-sm font-semibold text-zinc-500 mb-4">
            On this page
          </h3>

          <nav className="space-y-3">
            {[
              ["generate-project-token", "Generate Project Token"],
              ["secure-credentials", "Store Credentials Securely"],
              ["middleware-setup", "Add Bouncer Middleware"],
              ["public-routes", "Exclude Public Routes"],
              ["backend-routes", "Create Matching Backend Routes"],
              ["testing", "Testing Integration"],
              ["development-notes", "Development Notes"],
            ].map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setActiveSection(id)}
                className={`block text-sm transition-colors ${
                  activeSection === id
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}

export default BackendIntegration;
