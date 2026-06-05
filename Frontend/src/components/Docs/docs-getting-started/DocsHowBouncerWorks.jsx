import TablesOfContents from "../TableOfContents";

function DocsHowBouncerWorks() {
  const sections = [
    {
      id: "internal-architecture",
      label: "Internal Architecture",
    },
    {
      id: "redis-rate-limiting",
      label: "Redis Rate Limiting",
    },
    {
      id: "status-codes",
      label: "Status Codes",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Internal Architecture */}
          <section id="internal-architecture" className="">
            <h2 className="text-xl font-semibold">Internal Architecture</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              When a request reaches Bouncer, the platform identifies the target
              route, loads the associated project configuration, validates the
              request credentials, and applies any configured rate limiting
              policies.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Requests that successfully pass all validation checks are allowed
              to continue to the protected backend service. Requests that fail
              validation are rejected immediately with the appropriate response
              code.
            </p>

            <img
              src="/architecture/Bouncer-architecture.png"
              alt="Bouncer Architecture Diagram"
              className="mt-10 "
            />
          </section>

          {/* Redis */}
          <section id="redis-rate-limiting" className="mt-16">
            <h2 className="text-xl font-semibold">Redis Rate Limiting</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Bouncer uses Redis as a high-performance in-memory datastore to
              track request counts and enforce rate limiting rules.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Every request generates a unique rate limiting key. Redis stores
              and increments counters for these keys, allowing Bouncer to
              determine whether a request falls within the configured request
              limit.
            </p>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              A typical Redis key may look like:
            </p>

            <div className="rounded-lg border border-zinc-800 p-4 mt-4 overflow-x-auto">
              <pre className="text-sm text-zinc-300">
                {`rate_limit:project_123:user_456`}
              </pre>
            </div>

            <p className="mt-6 text-base leading-8 text-zinc-400">
              Each incoming request increments the counter associated with the
              key. Once the configured threshold is exceeded, Bouncer blocks
              additional requests until the rate limit window resets.
            </p>
          </section>

          {/* Status Codes */}
          <section id="status-codes" className="mt-16">
            <h2 className="text-xl font-semibold">
              Frequently Encountered Status Codes
            </h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              During integration and day-to-day usage, developers will commonly
              encounter the following response codes.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex gap-4 rounded-lg border border-zinc-800 p-4">
                <span className="h-fit rounded-md bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-400">
                  200 OK
                </span>
                <p className="text-zinc-400">
                  The request successfully passed all validation checks and was
                  allowed to proceed.
                </p>
              </div>

              <div className="flex gap-4 rounded-lg border border-zinc-800 p-4">
                <span className="h-fit rounded-md bg-amber-500/15 px-3 py-1 text-sm font-medium text-amber-400">
                  400 Bad Request
                </span>
                <p className="text-zinc-400">
                  The request contains invalid or improperly formatted data.
                </p>
              </div>

              <div className="flex gap-4 rounded-lg border border-zinc-800 p-4">
                <span className="h-fit rounded-md bg-yellow-500/15 px-3 py-1 text-sm font-medium text-yellow-400">
                  401 Unauthorized
                </span>
                <p className="text-zinc-400">
                  Authentication failed because credentials are missing or
                  invalid.
                </p>
              </div>

              <div className="flex gap-4 rounded-lg border border-zinc-800 p-4">
                <span className="h-fit rounded-md bg-orange-500/15 px-3 py-1 text-sm font-medium text-orange-400">
                  403 Forbidden
                </span>
                <p className="text-zinc-400">
                  The request was authenticated but does not satisfy access
                  rules.
                </p>
              </div>

              <div className="flex gap-4 rounded-lg border border-zinc-800 p-4">
                <span className="h-fit rounded-md bg-sky-500/15 px-3 py-1 text-sm font-medium text-sky-400">
                  404 Not Found
                </span>
                <p className="text-zinc-400">
                  The requested route, project, or resource could not be
                  located.
                </p>
              </div>

              <div className="flex gap-4 rounded-lg border border-zinc-800 p-4">
                <span className="h-fit rounded-md bg-red-500/15 px-3 py-1 text-sm font-medium text-red-400">
                  429 Too Many Requests
                </span>
                <p className="text-zinc-400">
                  The configured rate limit has been exceeded.
                </p>
              </div>

              <div className="flex gap-4 rounded-lg border border-zinc-800 p-4">
                <span className="h-fit rounded-md bg-rose-500/15 px-3 py-1 text-sm font-medium text-rose-400">
                  500 Internal Server Error
                </span>
                <p className="text-zinc-400">
                  An unexpected server-side error occurred while processing the
                  request.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <TablesOfContents sections={sections} />
      </div>
    </div>
  );
}

export default DocsHowBouncerWorks;
