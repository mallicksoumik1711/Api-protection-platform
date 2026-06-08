import TablesOfContents from "../TableOfContents";

function DocsProjectTemplates() {
  const sections = [
    {
      id: "workspace-overview",
      label: "Workspace Overview",
    },
    {
      id: "project-creation",
      label: "Project Creation",
    },
    {
      id: "empty-workspace",
      label: "Empty Workspace",
    },
    {
      id: "project-configuration",
      label: "Project Configuration",
    },
    {
      id: "project-removal",
      label: "Project Removal",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <p className="text-base leading-8 text-zinc-400 mb-10">
            Project Templates provide visual examples of common project screens
            within Bouncer. These snapshots help familiarize users with the
            project lifecycle, from creating a project to managing and removing
            it.
          </p>

          {/* Workspace Overview */}
          <section id="workspace-overview">
            <h2 className="text-xl font-semibold">Workspace Overview</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              The Workspace Overview is the main screen displayed after signing
              in. It provides quick access to all available projects and serves
              as the central hub for project management.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              From here, users can navigate between projects, create new ones,
              and access project-specific configurations.
            </p>

            <img
              src="/docs-blueprint/project-templates/workspace.png"
              alt="Workspace Overview"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* Project Creation */}
          <section id="project-creation" className="mt-12">
            <h2 className="text-xl font-semibold">Project Creation</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Creating a project is the first step in configuring protection and
              monitoring within Bouncer.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              During creation, users provide basic project information that will
              be used to organize routes, authentication settings, API keys, and
              rate limiting configurations.
            </p>

            <img
              src="/docs-blueprint/project-templates/create-project.png"
              alt="Project Creation"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* Empty Workspace */}
          <section id="empty-workspace" className="mt-12">
            <h2 className="text-xl font-semibold">Empty Workspace</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              New accounts will initially see an empty workspace if no projects
              have been created.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              This screen provides guidance for creating the first project and
              acts as the starting point for setting up Bouncer.
            </p>

            <img
              src="/docs-blueprint/project-templates/empty-workspace.png"
              alt="Empty Workspace"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* Project Configuration */}
          <section id="project-configuration" className="mt-12">
            <h2 className="text-xl font-semibold">Project Configuration</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Project Configuration serves as the control center for an active
              project.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Users can manage route protection, JWT authentication, API keys,
              rate limiting policies, logs, and other project-specific settings.
            </p>

            <div className="mt-6 space-y-2 text-zinc-300">
              <div>Protected Routes</div>
              <div>JWT Configuration</div>
              <div>API Keys</div>
              <div>Rate Limiting</div>
              <div>Logs</div>
            </div>

            <img
              src="/docs-blueprint/project-templates/project-configuration.png"
              alt="Project Configuration"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* Project Removal */}
          <section id="project-removal" className="mt-12">
            <h2 className="text-xl font-semibold">Project Removal</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Projects that are no longer required can be permanently removed
              from the workspace.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Before deletion, verify that the correct project has been selected
              and that any necessary configurations have been preserved.
            </p>

            <div className="mt-6 rounded-lg border border-red-900/50 bg-red-950/20 p-4">
              <p className="text-sm text-red-400">
                Warning: Removing a project permanently deletes its associated
                configuration and cannot be undone.
              </p>
            </div>

            <img
              src="/docs-blueprint/project-templates/project-removal.png"
              alt="Project Removal"
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

export default DocsProjectTemplates;
