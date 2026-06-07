import TablesOfContents from "../TableOfContents";

function DocsLogs() {
  const sections = [
    {
      id: "overview",
      label: "Overview",
    },
    {
      id: "log-entry-structure",
      label: "Log Entry Structure",
    },
    {
      id: "status-codes",
      label: "Status Codes",
    },
    {
      id: "request-ids",
      label: "Request IDs",
    },
    {
      id: "cached-responses",
      label: "Cached Responses",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Overview */}
          <section id="overview">
            <h2 className="text-xl font-semibold">Overview</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Bouncer records incoming requests and displays them in the Logs
              page. Logs provide visibility into request activity, response
              statuses, and route usage across your protected APIs.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Each log entry contains metadata that helps developers understand
              how requests were processed and whether they were served normally
              or from cache.
            </p>
          </section>

          {/* Log Entry Structure */}
          <section id="log-entry-structure" className="mt-8">
            <h2 className="text-xl font-semibold">Log Entry Structure</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              A typical log entry contains several pieces of information about a
              request.
            </p>

            <div className="mt-2 rounded-md border border-zinc-800 bg-zinc-950/50 overflow-hidden">
              <div className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto">
                <div className="space-y-1 min-w-max">
                  <div>6:45:03 PM</div>
                  <div>
                    <span className="text-emerald-400">304</span>
                    <span className="text-zinc-500 mx-2">→</span>
                    GET /protected
                  </div>
                  <div className="text-zinc-500">• cached</div>
                  <div className="text-zinc-400">req_1w2rzg</div>
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-md border border-zinc-800 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="border-b border-zinc-800 bg-zinc-950/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Field</th>
                    <th className="text-left p-4 font-medium">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-zinc-800">
                    <td className="p-4">Timestamp</td>
                    <td className="p-4 text-zinc-400">
                      Time when the request was processed.
                    </td>
                  </tr>

                  <tr className="border-b border-zinc-800">
                    <td className="p-4">Status Code</td>
                    <td className="p-4 text-zinc-400">
                      HTTP response status returned for the request.
                    </td>
                  </tr>

                  <tr className="border-b border-zinc-800">
                    <td className="p-4">Method</td>
                    <td className="p-4 text-zinc-400">
                      HTTP method such as GET, POST, PUT, or DELETE.
                    </td>
                  </tr>

                  <tr className="border-b border-zinc-800">
                    <td className="p-4">Route</td>
                    <td className="p-4 text-zinc-400">
                      The endpoint that received the request.
                    </td>
                  </tr>

                  <tr className="border-b border-zinc-800">
                    <td className="p-4">Cached Indicator</td>
                    <td className="p-4 text-zinc-400">
                      Shows whether the response was served from cache.
                    </td>
                  </tr>

                  <tr>
                    <td className="p-4">Request ID</td>
                    <td className="p-4 text-zinc-400">
                      Unique identifier assigned to the request.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Status Codes */}
          <section id="status-codes" className="mt-8">
            <h2 className="text-xl font-semibold">Status Codes</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Logs display the HTTP status code returned for each request.
            </p>

            <div className="mt-4 rounded-md border border-zinc-800 bg-zinc-950/50 overflow-hidden">
              <div className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto">
                <div className="space-y-1 min-w-max">
                  <div className="flex items-center gap-2 px-2 py-1">
                    <span className="w-12 text-emerald-400">200</span>
                    <span className="text-zinc-500">→</span>
                    <span>Request completed successfully</span>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1">
                    <span className="w-12 text-cyan-400">304</span>
                    <span className="text-zinc-500">→</span>
                    <span>Resource not modified, served from cache</span>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1">
                    <span className="w-12 text-amber-400">400</span>
                    <span className="text-zinc-500">→</span>
                    <span>Bad request</span>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1">
                    <span className="w-12 text-yellow-400">401</span>
                    <span className="text-zinc-500">→</span>
                    <span>Unauthorized request</span>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1">
                    <span className="w-12 text-orange-400">403</span>
                    <span className="text-zinc-500">→</span>
                    <span>Access forbidden</span>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1">
                    <span className="w-12 text-sky-400">404</span>
                    <span className="text-zinc-500">→</span>
                    <span>Resource not found</span>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1">
                    <span className="w-12 text-red-400">429</span>
                    <span className="text-zinc-500">→</span>
                    <span>Rate limit exceeded</span>
                  </div>

                  <div className="flex items-center gap-2 px-2 py-1">
                    <span className="w-12 text-rose-400">500</span>
                    <span className="text-zinc-500">→</span>
                    <span>Internal server error</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Request IDs */}
          <section id="request-ids" className="mt-8">
            <h2 className="text-xl font-semibold">Request IDs</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Every request processed by Bouncer receives a unique Request ID.
              This identifier allows individual requests to be distinguished
              from one another within the logs.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Request IDs are generated automatically and appear at the bottom
              of each log entry.
            </p>

            <div className="rounded-lg border border-zinc-800 p-4 mt-4 overflow-x-auto">
              <pre className="text-sm text-zinc-300">{`req_tlxtha`}</pre>
            </div>
          </section>

          {/* Cached Responses */}
          <section id="cached-responses" className="mt-8">
            <h2 className="text-xl font-semibold">Cached Responses</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              When a response is served from cache, Bouncer displays a cached
              indicator within the log entry.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Cached responses reduce processing overhead and improve response
              times by reusing previously generated results when applicable.
            </p>

            <div className="rounded-lg border border-zinc-800 p-4 mt-4 overflow-x-auto">
              <pre className="text-sm text-zinc-300">
                {`304 → GET /protected
• cached`}
              </pre>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <TablesOfContents sections={sections} />
      </div>
    </div>
  );
}

export default DocsLogs;
