import TablesOfContents from "../TableOfContents";

function DocsKeyManagement() {
  const sections = [
    {
      id: "api-key-overview",
      label: "API Key Overview",
    },
    {
      id: "api-key-generation",
      label: "API Key Generation",
    },
    {
      id: "api-key-limits",
      label: "API Key Limits",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <p className="text-base leading-8 text-zinc-400 mb-10">
            Key Management Examples showcase the primary screens involved in
            creating, managing, and controlling API keys within Bouncer. These
            examples provide a visual overview of the API key lifecycle.
          </p>

          {/* API Key Overview */}
          <section id="api-key-overview">
            <h2 className="text-xl font-semibold">API Key Overview</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              The API Key Overview screen displays all API keys associated with
              the currently active project.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Users can review existing keys, identify active integrations, and
              manage key-related operations from a single location.
            </p>

            <img
              src="/docs-blueprint/key-management/get-all-keys.png"
              alt="API Key Overview"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* API Key Generation */}
          <section id="api-key-generation" className="mt-12">
            <h2 className="text-xl font-semibold">API Key Generation</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              API keys can be generated to authorize applications and services
              that require access to protected endpoints.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Each generated key belongs to the active project and can be used
              according to the project's configured security policies.
            </p>

            <img
              src="/docs-blueprint/key-management/generate-key.png"
              alt="API Key Generation"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* API Key Limits */}
          <section id="api-key-limits" className="mt-12">
            <h2 className="text-xl font-semibold">API Key Limits</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              API Key Limits provide additional control over how individual keys
              interact with protected APIs.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Usage restrictions help regulate request volumes, enforce access
              policies, and reduce the risk of abuse or excessive consumption.
            </p>

            <img
              src="/docs-blueprint/key-management/key-limit.png"
              alt="API Key Limits"
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

export default DocsKeyManagement;
