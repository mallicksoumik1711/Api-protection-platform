import TablesOfContents from "../TableOfContents";

function DocsQuickStart() {
  const sections = [
    { id: "create-project", label: "Create a Project" },
    { id: "generate-api-keys", label: "Generate API Keys" },
    { id: "secure-api-keys", label: "Secure API Keys" },
    { id: "delete-project", label: "Delete a Project" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16">
      {/* Main Content */}
      <div className="flex-1 min-w-0 xl:pr-6 text-zinc-300">
        {/* Create Project */}
        <section id="create-project" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">
            Create a Project
          </h2>

          <p className="text-zinc-400 leading-8 mb-4">
            Projects are the foundation of Bouncer. Every project acts as a
            container for your routes, API keys, JWT settings, rate limits, and
            security configuration.
          </p>

          <p className="text-zinc-400 leading-8">
            To create a project, navigate to the dashboard, click{" "}
            <span className="text-white">Create Project</span>, enter a project
            name, and submit the form. Bouncer automatically generates a unique
            Project ID that will be used throughout the integration process.
          </p>
        </section>

        {/* Generate API Keys */}
        <section id="generate-api-keys" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">
            Generate API Keys
          </h2>

          <p className="text-zinc-400 leading-8 mb-4">
            API Keys allow your backend application to securely communicate with
            Bouncer services.
          </p>

          <p className="text-zinc-400 leading-8">
            Open your project dashboard and generate an API key. This key will
            be required when validating requests, generating project tokens, and
            interacting with protected resources.
          </p>
        </section>

        {/* Secure API Keys */}
        <section id="secure-api-keys" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">
            Secure API Keys
          </h2>

          <p className="text-zinc-400 leading-8 mb-4">
            API Keys are sensitive credentials and should never be exposed in
            frontend applications or committed to source control.
          </p>

          <p className="text-zinc-400 leading-8 mb-6">
            Store API Keys using environment variables and only access them from
            your backend server.
          </p>

          <div className="rounded-lg border border-zinc-800 p-4 overflow-x-auto">
            <pre className="text-sm text-zinc-300">
              {`BOUNCER_API_KEY=your_api_key
BOUNCER_PROJECT_ID=your_project_id`}
            </pre>
          </div>

          <ul className="list-disc pl-6 mt-6 space-y-2 text-zinc-400">
            <li>Never expose API Keys in client-side applications.</li>
            <li>Never commit API Keys to Git repositories.</li>
            <li>Use separate keys for development and production.</li>
            <li>Rotate compromised keys immediately.</li>
          </ul>
        </section>

        {/* Delete Project */}
        <section id="delete-project">
          <h2 className="text-xl font-semibold text-white mb-4">
            Delete a Project
          </h2>

          <p className="text-zinc-400 leading-8 mb-4">
            Projects can be deleted when they are no longer required. Deleting a
            project permanently removes all associated routes, security
            configurations, and related project data.
          </p>

          <div className="rounded-lg border border-red-900/50 bg-red-950/20 p-4">
            <p className="text-red-300">
              Warning: Project deletion is permanent and cannot be undone.
            </p>
          </div>
        </section>
      </div>

      {/* Right Navigation */}
      <TablesOfContents sections={sections} />
    </div>
  );
}

export default DocsQuickStart;
