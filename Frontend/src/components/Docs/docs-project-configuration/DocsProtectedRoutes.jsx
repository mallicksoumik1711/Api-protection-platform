import TablesOfContents from "../TableOfContents";

function DocsProtectedRoutes() {
  const sections = [
    { id: "adding-routes", label: "Adding Routes" },
    { id: "http-methods", label: "HTTP Methods" },
    { id: "protect-all-nested-routes", label: "Protect All Nested Routes" },
    { id: "protection-rules", label: "Protection Rules" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16">
      {/* Main Content */}
      <div className="flex-1 min-w-0 xl:pr-6 text-zinc-300">
        {/* Adding Routes */}
        <section id="adding-routes" className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">
            Adding Routes
          </h2>

          <p className="text-zinc-400 leading-8 mb-6">
            Protected routes define which endpoints Bouncer should secure.
            Routes are organized into three levels: Base Route, Sub Route, and
            Child Route.
          </p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                Required
              </p>
              <h3 className="font-medium text-white mb-3">Base Route</h3>
              <code className="text-blue-400">/api</code>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                Optional
              </p>
              <h3 className="font-medium text-white mb-3">Sub Route</h3>
              <div className="space-y-1 text-zinc-400">
                <div>/users</div>
                <div>/orders</div>
                <div>/admin</div>
              </div>
            </div>

            <div className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5">
              <p className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                Optional
              </p>
              <h3 className="font-medium text-white mb-3">Child Route</h3>
              <div className="space-y-1 text-zinc-400">
                <div>/:id</div>
                <div>/profile</div>
                <div>/settings</div>
              </div>
            </div>
          </div>

          <p className="text-zinc-400 leading-8">
            Only the Base Route is required. Additional route levels can be used
            when more granular protection is needed.
          </p>
        </section>

        {/* HTTP Methods */}
        <section id="http-methods" className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">
            HTTP Methods
          </h2>

          <p className="text-zinc-400 leading-8 mb-6">
            Select which HTTP methods should be protected for the configured
            route.
          </p>

          <div className="flex flex-wrap gap-3 mb-6">
            {["ALL", "GET", "POST", "PUT", "PATCH", "DELETE"].map((method) => (
              <span
                key={method}
                className="px-4 py-2 rounded-full border border-zinc-800 text-sm text-zinc-300"
              >
                {method}
              </span>
            ))}
          </div>

          <p className="text-zinc-400 leading-8">
            Choosing <span className="text-white">ALL</span> automatically
            protects every HTTP method associated with the route.
          </p>
        </section>

        {/* Protect Nested Routes */}
        <section id="protect-all-nested-routes" className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">
            Protect All Nested Routes
          </h2>

          <p className="text-zinc-400 leading-8 mb-6">
            This option allows protection settings to automatically propagate to
            every nested route under the configured Base Route.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="rounded-xl border border-zinc-800 p-5">
              <div className="mb-3">
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  Disabled
                </span>
              </div>

              <div className="font-mono text-sm text-zinc-300">
                <div>/api</div>
              </div>

              <p className="text-zinc-500 text-sm mt-4">
                Only the configured route is protected.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 p-5">
              <div className="mb-3">
                <span className="text-xs text-zinc-500 uppercase tracking-wider">
                  Enabled
                </span>
              </div>

              <div className="font-mono text-sm text-zinc-300 space-y-1">
                <div>/api</div>
                <div>├── users</div>
                <div className="pl-4">└── profile</div>
                <div>└── orders</div>
                <div className="pl-4">└── :id</div>
              </div>

              <p className="text-zinc-500 text-sm mt-4">
                Every nested route inherits protection automatically.
              </p>
            </div>
          </div>

          <p className="text-zinc-400 leading-8">
            Enable this setting when the entire route hierarchy should share the
            same authentication and security rules.
          </p>
        </section>

        {/* Protection Rules */}
        <section id="protection-rules" className="mb-14">
          <h2 className="text-xl font-semibold text-white mb-4">
            Protection Rules
          </h2>

          <p className="text-zinc-400 leading-8 mb-8">
            Protection rules define how requests are authenticated before access
            is granted.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <div className="rounded-xl border border-zinc-800 p-5">
              <h3 className="font-medium text-white mb-3">API Key Only</h3>

              <p className="text-zinc-400 leading-7">
                Suitable for internal services and server-to-server
                communication.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 p-5">
              <h3 className="font-medium text-white mb-3">JWT Only</h3>

              <p className="text-zinc-400 leading-7">
                Ideal for user authentication and session-based applications.
              </p>
            </div>

            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
              <div className="text-xs uppercase tracking-wider text-emerald-400 mb-2">
                Recommended
              </div>

              <h3 className="font-medium text-white mb-3">API Key + JWT</h3>

              <p className="text-zinc-400 leading-7">
                Provides layered security and is recommended for production
                environments.
              </p>
            </div>

            <div className="rounded-xl border border-zinc-800 p-5">
              <h3 className="font-medium text-white mb-3">
                Public + Rate Limited
              </h3>

              <p className="text-zinc-400 leading-7">
                Suitable for login endpoints, signup flows, public APIs, and
                health check routes.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto rounded-xl border border-zinc-800">
            <table className="w-full text-sm">
              <thead className="border-b border-zinc-800">
                <tr>
                  <th className="text-left px-5 py-4 text-zinc-400">Mode</th>
                  <th className="text-left px-5 py-4 text-zinc-400">API Key</th>
                  <th className="text-left px-5 py-4 text-zinc-400">JWT</th>
                  <th className="text-left px-5 py-4 text-zinc-400">
                    Best For
                  </th>
                </tr>
              </thead>

              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="px-5 py-4">API Key Only</td>
                  <td className="px-5 py-4">✓</td>
                  <td className="px-5 py-4">—</td>
                  <td className="px-5 py-4">Internal APIs</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="px-5 py-4">JWT Only</td>
                  <td className="px-5 py-4">—</td>
                  <td className="px-5 py-4">✓</td>
                  <td className="px-5 py-4">User Sessions</td>
                </tr>

                <tr className="border-b border-zinc-800">
                  <td className="px-5 py-4">API Key + JWT</td>
                  <td className="px-5 py-4">✓</td>
                  <td className="px-5 py-4">✓</td>
                  <td className="px-5 py-4">Production</td>
                </tr>

                <tr>
                  <td className="px-5 py-4">Public + Rate Limited</td>
                  <td className="px-5 py-4">—</td>
                  <td className="px-5 py-4">—</td>
                  <td className="px-5 py-4">Public Endpoints</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendation */}
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5">
          <h3 className="text-emerald-400 font-medium mb-2">Recommendation</h3>

          <p className="text-zinc-400 leading-7">
            For most production environments, use both API Key and JWT
            authentication. This approach provides stronger protection by
            validating both the application and the authenticated user.
          </p>
        </div>
      </div>

      {/* Right Navigation */}
      <TablesOfContents sections={sections} />
    </div>
  );
}

export default DocsProtectedRoutes;
