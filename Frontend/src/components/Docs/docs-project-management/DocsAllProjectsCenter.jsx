import TablesOfContents from "../TableOfContents";

function DocsAllProjectsCenter() {
  const sections = [
    {
      id: "switching-between-projects",
      label: "Switching Between Projects",
    },
    {
      id: "active-project",
      label: "Active Project",
    },
    {
      id: "project-settings",
      label: "Project Settings",
    },
    {
      id: "deleting-a-project",
      label: "Deleting a Project",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Switching Between Projects */}
          <section id="switching-between-projects">
            <h2 className="text-xl font-semibold">
              Switching Between Projects
            </h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Bouncer supports multiple projects within a single account. If you
              have created more than one project, you can switch between them at
              any time directly from the dashboard.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              To work on a previously created project, simply click the desired
              project card. Bouncer will automatically select that project and
              open its Project Settings page.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Once selected, all project-related operations will be performed
              within the chosen project until another project is selected.
            </p>

            <div className="rounded-lg border border-zinc-800 p-4 mt-6 overflow-x-auto">
              <pre className="text-sm text-zinc-300">
                {`Dashboard
   ↓
Select Project
   ↓
Project Becomes Active
   ↓
Project Settings Opens`}
              </pre>
            </div>
          </section>

          {/* Active Project */}
          <section id="active-project" className="mt-16">
            <h2 className="text-xl font-semibold">Active Project</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Bouncer operates on one active project at a time. The currently
              selected project determines which configuration and resources are
              displayed throughout the dashboard.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Routes, JWT settings, API keys, rate limiting configurations, and
              logs are all associated with the active project.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              When you switch projects, the dashboard automatically updates to
              display the configuration and data belonging to the newly selected
              project.
            </p>
          </section>

          {/* Project Settings */}
          <section id="project-settings" className="mt-16">
            <h2 className="text-xl font-semibold">Project Settings</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              The Project Settings page serves as the central location for
              managing a project's configuration.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              From this page, you can access and manage features such as route
              protection, JWT authentication, API keys, rate limiting rules, and
              other project-specific settings.
            </p>

            <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/50 overflow-hidden">
              <div className="p-4 text-sm text-zinc-300">
                <div className="space-y-2">
                  <div>• Protected Routes</div>
                  <div>• JWT Configuration</div>
                  <div>• API Keys</div>
                  <div>• Rate Limiting</div>
                  <div>• Logs</div>
                </div>
              </div>
            </div>
          </section>

          {/* Deleting a Project */}
          <section id="deleting-a-project" className="mt-16">
            <h2 className="text-xl font-semibold">Deleting a Project</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Projects can be permanently removed when they are no longer
              needed.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Deleting a project removes the project and its associated
              configuration from Bouncer. This action cannot be undone.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Before confirming deletion, ensure that you have selected the
              correct project and that any required configuration has been
              backed up or migrated elsewhere.
            </p>

            <div className="mt-6 rounded-lg border border-amber-900/50 bg-amber-950/20 p-4">
              <p className="text-sm text-amber-300">
                Warning: Project deletion is permanent and cannot be reversed.
              </p>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <TablesOfContents sections={sections} />
      </div>
    </div>
  );
}

export default DocsAllProjectsCenter;