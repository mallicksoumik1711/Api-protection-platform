import TablesOfContents from "../TableOfContents";

function DocsIntegrationInsights() {
  const sections = [
    {
      id: "middleware-code-example",
      label: "Middleware Code Example",
    },
    {
      id: "integration-setup",
      label: "Integration Setup",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <p className="text-base leading-8 text-zinc-400 mb-10">
            Integration Insights provide examples of how Bouncer is connected
            to applications. These examples highlight middleware usage and the
            steps required to establish a secure integration.
          </p>

          {/* Middleware Code Example */}
          <section id="middleware-code-example">
            <h2 className="text-xl font-semibold">
              Middleware Code Example
            </h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Middleware examples demonstrate how Bouncer is attached to an
              application's request pipeline. This enables route protection,
              authentication, and traffic control.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              The integration pattern may vary depending on the framework being
              used, but the overall setup process remains similar.
            </p>

            <img
              src="/docs-blueprint/integration-insights/middleware-code.png"
              alt="Middleware Code Example"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* Integration Setup */}
          <section id="integration-setup" className="mt-12">
            <h2 className="text-xl font-semibold">Integration Setup</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Integration setup examples provide an overview of the steps
              required to connect Bouncer to an application.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              These examples illustrate the configuration process and the
              components involved in establishing protection.
            </p>

            <img
              src="/docs-blueprint/integration-insights/integration-setup.png"
              alt="Integration Setup"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>
        </div>

        <TablesOfContents sections={sections} />
      </div>
    </div>
  );
}

export default DocsIntegrationInsights;