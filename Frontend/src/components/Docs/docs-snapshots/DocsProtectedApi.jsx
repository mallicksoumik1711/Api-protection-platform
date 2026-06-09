import TablesOfContents from "../TableOfContents";

function DocsProtectedApi() {
  const sections = [
    {
      id: "route-structure",
      label: "Route Structure",
    },
    {
      id: "http-methods-and-protection-rules",
      label: "HTTP Methods & Protection Rules",
    },
    {
      id: "security-features-and-route-priority",
      label: "Security Features & Route Priority",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <p className="text-base leading-8 text-zinc-400 mb-10">
            Protected API Examples provide a visual overview of how routes are
            organized and secured within Bouncer. These examples demonstrate
            route definitions, protection rules, and the security settings that
            determine how incoming requests are handled.
          </p>

          {/* Route Structure */}
          <section id="route-structure">
            <h2 className="text-xl font-semibold">Route Structure</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Protected routes are organized around a consistent structure that
              allows Bouncer to identify and secure specific API endpoints.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Each route configuration contains the path and associated settings
              required to apply authentication and access control policies.
            </p>

            <img
              src="/docs-blueprint/protected-apis/route-structure.png"
              alt="Route Structure"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* HTTP Methods & Protection Rules */}
          <section id="http-methods-and-protection-rules" className="mt-12">
            <h2 className="text-xl font-semibold">
              HTTP Methods & Protection Rules
            </h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Bouncer supports protection rules based on HTTP methods such as
              GET, POST, PUT, PATCH, and DELETE.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Different methods can be configured independently, allowing fine
              grained control over how requests are authenticated and validated.
            </p>

            <img
              src="/docs-blueprint/protected-apis/http-protection-rules.png"
              alt="HTTP Methods and Protection Rules"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* Security Features & Route Priority */}
          <section id="security-features-and-route-priority" className="mt-12">
            <h2 className="text-xl font-semibold">
              Security Features & Route Priority
            </h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Route configurations may include additional security mechanisms
              such as JWT authentication, API key validation, and rate limiting.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              When multiple routes overlap, Bouncer applies route priority rules
              to determine which configuration should be evaluated for an
              incoming request.
            </p>

            <img
              src="/docs-blueprint/protected-apis/security-features-route-priority.png"
              alt="Security Features and Route Priority"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>
        </div>

        {/* Right Sidebar */}
        <TablesOfContents sections={sections} />
      </div>
    </div>
  );
}

export default DocsProtectedApi;
