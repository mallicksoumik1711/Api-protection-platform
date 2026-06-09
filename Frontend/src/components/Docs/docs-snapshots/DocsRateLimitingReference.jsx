import TablesOfContents from "../TableOfContents";

function DocsRateLimitingReference() {
  const sections = [
    {
      id: "request-limits-and-time-windows",
      label: "Request Limits & Time Windows",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <p className="text-base leading-8 text-zinc-400 mb-10">
            Rate Limiting Examples provide a visual overview of how request
            thresholds are configured within Bouncer. These examples demonstrate
            how traffic can be controlled by defining request limits and the
            time windows over which those limits are enforced.
          </p>

          {/* Request Limits & Time Windows */}
          <section id="request-limits-and-time-windows">
            <h2 className="text-xl font-semibold">
              Request Limits & Time Windows
            </h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Rate limiting policies are defined using a request limit and an
              associated time window. Together, these settings determine how
              many requests are permitted within a specified duration.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Properly configured limits help maintain API stability, prevent
              abuse, and ensure fair resource usage across applications and
              clients.
            </p>

            <div className="mt-6 space-y-2 text-zinc-300">
              <div>Requests Per Window</div>
              <div>Window Duration</div>
              <div>Traffic Control</div>
              <div>Request Thresholds</div>
            </div>

            <img
              src="/docs-blueprint/rate-limiting/request-limit-window.png"
              alt="Request Limits and Time Windows"
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

export default DocsRateLimitingReference;
