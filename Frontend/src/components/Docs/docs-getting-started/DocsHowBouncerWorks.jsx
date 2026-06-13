import TablesOfContents from "../TableOfContents";
import { Dot } from "lucide-react";

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

            <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-950/50 overflow-hidden">
              <div className="p-4 text-xs font-mono text-zinc-300 overflow-x-auto">
                <div className="min-w-max">
                  <div className="group hover:bg-zinc-900/40 transition-colors rounded px-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-12 text-emerald-400 font-medium flex-shrink-0">
                      200
                    </span>
                    <span className="text-zinc-500 flex-shrink-0">→</span>
                    <span className="text-emerald-300">
                      Request validation passed successfully
                    </span>
                    <span className="flex justify-center items-center text-zinc-600 ml-2 flex-shrink-0">
                      <Dot/> OK
                    </span>
                  </div>

                  <div className="group hover:bg-zinc-900/40 transition-colors rounded px-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-12 text-amber-400 font-medium flex-shrink-0">
                      400
                    </span>
                    <span className="text-zinc-500 flex-shrink-0">→</span>
                    <span className="text-amber-300">
                      Invalid or malformed request data
                    </span>
                    <span className="flex justify-center items-center text-zinc-600 ml-2 flex-shrink-0">
                      <Dot/> Bad Request
                    </span>
                  </div>

                  <div className="group hover:bg-zinc-900/40 transition-colors rounded px-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-12 text-yellow-400 font-medium flex-shrink-0">
                      401
                    </span>
                    <span className="text-zinc-500 flex-shrink-0">→</span>
                    <span className="text-yellow-300">
                      Authentication credentials missing or invalid
                    </span>
                    <span className="flex justify-center items-center text-zinc-600 ml-2 flex-shrink-0">
                      <Dot/> Unauthorized
                    </span>
                  </div>

                  <div className="group hover:bg-zinc-900/40 transition-colors rounded px-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-12 text-orange-400 font-medium flex-shrink-0">
                      403
                    </span>
                    <span className="text-zinc-500 flex-shrink-0">→</span>
                    <span className="text-orange-300">
                      Authenticated but lacks required permissions
                    </span>
                    <span className="flex justify-center items-center text-zinc-600 ml-2 flex-shrink-0">
                      <Dot/> Forbidden
                    </span>
                  </div>

                  <div className="group hover:bg-zinc-900/40 transition-colors rounded px-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-12 text-sky-400 font-medium flex-shrink-0">
                      404
                    </span>
                    <span className="text-zinc-500 flex-shrink-0">→</span>
                    <span className="text-sky-300">
                      Requested route or resource not found
                    </span>
                    <span className="flex justify-center items-center text-zinc-600 ml-2 flex-shrink-0">
                      <Dot/> Not Found
                    </span>
                  </div>

                  <div className="group hover:bg-zinc-900/40 transition-colors rounded px-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-12 text-red-400 font-medium flex-shrink-0">
                      429
                    </span>
                    <span className="text-zinc-500 flex-shrink-0">→</span>
                    <span className="text-red-300">
                      Configured rate limit exceeded
                    </span>
                    <span className="flex justify-center items-center text-zinc-600 ml-2 flex-shrink-0">
                      <Dot/> Too Many Requests
                    </span>
                  </div>

                  <div className="group hover:bg-zinc-900/40 transition-colors rounded px-2 flex items-center gap-2 whitespace-nowrap">
                    <span className="w-12 text-rose-400 font-medium flex-shrink-0">
                      500
                    </span>
                    <span className="text-zinc-500 flex-shrink-0">→</span>
                    <span className="text-rose-300">
                      Unexpected server-side processing error
                    </span>
                    <span className="flex justify-center items-center text-zinc-600 ml-2 flex-shrink-0">
                      <Dot/> Internal Server Error
                    </span>
                  </div>
                </div>
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
