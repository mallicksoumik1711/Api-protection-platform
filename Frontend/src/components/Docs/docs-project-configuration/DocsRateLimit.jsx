import TablesOfContents from "../TableOfContents";

function DocsRateLimit() {
  const sections = [
    { id: "request-limit-settings", label: "Request Limit Settings" },
    { id: "rate-limit-strategy", label: "Rate Limit Strategy" },
    { id: "recommended-limits", label: "Recommended Limits" },
    { id: "rate-limit-guidelines", label: "Guidelines" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16">
      {/* Main Content */}
      <div className="flex-1 min-w-0 xl:pr-6 text-zinc-300">
        {/* Intro */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Rate Limiting
          </h2>

          <p className="text-zinc-400 leading-8 mb-2">
            Configure rate limits to control how many requests your APIs can
            handle within a defined time period. Rate limiting helps prevent
            abuse, reduces unnecessary load, and ensures fair usage across all
            clients.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-md border border-zinc-800 bg-zinc-900/30 p-4">
              <h3 className="text-white font-medium mb-2">Abuse Protection</h3>

              <p className="text-zinc-500 text-sm">
                Prevent excessive requests from overwhelming your APIs.
              </p>
            </div>

            <div className="rounded-md border border-zinc-800 bg-zinc-900/30 p-4">
              <h3 className="text-white font-medium mb-2">Rate Limiting</h3>

              <p className="text-zinc-500 text-sm">
                Control traffic volume across all protected routes.
              </p>
            </div>

            <div className="rounded-md border border-zinc-800 bg-zinc-900/30 p-4">
              <h3 className="text-white font-medium mb-2">Bot Detection</h3>

              <p className="text-zinc-500 text-sm">
                Reduce abuse from automated clients and scripts.
              </p>
            </div>

            <div className="rounded-md border border-zinc-800 bg-zinc-900/30 p-4">
              <h3 className="text-white font-medium mb-2">Attack Prevention</h3>

              <p className="text-zinc-500 text-sm">
                Help mitigate request flooding and brute-force attempts.
              </p>
            </div>
          </div>
        </section>

        {/* Request Limit Settings */}
        <section id="request-limit-settings" className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Request Limit Settings
          </h2>
          <p className="text-zinc-400 leading-8 mb-2">
            Set the maximum number of requests allowed within a specific time
            window. This helps protect your APIs from abuse and ensures fair
            usage.
          </p>
          <div className="overflow-hidden rounded-md border border-zinc-800">
            <table className="w-full text-left">
              <tbody>
                <tr className="border-b border-zinc-800">
                  <td className="px-4 py-4 text-zinc-400">Request Limit</td>

                  <td className="px-4 py-4 text-white text-right">
                    50 Requests
                  </td>
                </tr>

                <tr>
                  <td className="px-4 py-4 text-zinc-400">Time Window</td>

                  <td className="px-4 py-4 text-white text-right">
                    60 Seconds
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Rate Limit Strategy */}
        <section id="rate-limit-strategy" className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Rate Limit Strategy
          </h2>

          <p className="text-zinc-400 leading-8 mb-2">
            Rate limit strategies determine how requests are counted and
            enforced.
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-8">
            <div className="rounded-md border border-emerald-500/20 bg-emerald-500/5 p-5">
              <div className="text-xs uppercase tracking-wider text-emerald-400 mb-2">
                Active
              </div>

              <h3 className="font-medium text-white mb-3">Fixed Window</h3>

              <p className="text-zinc-400 leading-7">
                Counts requests within a fixed time period and resets the count
                when the window expires.
              </p>
            </div>

            <div className="rounded-md border border-zinc-800 p-5 opacity-70">
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                Coming Soon
              </div>

              <h3 className="font-medium text-white mb-3">Sliding Window</h3>

              <p className="text-zinc-500 leading-7">
                More accurate and fair request tracking that prevents spikes at
                window boundaries.
              </p>
            </div>

            <div className="rounded-md border border-zinc-800 p-5 opacity-70">
              <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
                Coming Soon
              </div>

              <h3 className="font-medium text-white mb-3">Leaky Bucket</h3>

              <p className="text-zinc-500 leading-7">
                Smooths incoming traffic by processing requests at a controlled
                rate.
              </p>
            </div>
          </div>

          <div className="rounded-md border border-amber-500/20 bg-amber-500/5 p-4">
            <h3 className="text-amber-300 font-medium mb-2">
              Current Availability
            </h3>

            <p className="text-zinc-400 leading-7">
              Currently only Fixed Window rate limiting is available. Sliding
              Window and Leaky Bucket strategies will be supported in future
              releases.
            </p>
          </div>
        </section>

        {/* Recommended Limits */}
        <section id="recommended-limits" className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">
            Recommended Limits
          </h2>

          <p className="text-zinc-400 leading-8 mb-2">
            Not sure where to start? Choose one of these common configurations.
          </p>

          <div className="flex flex-wrap gap-2">
            {[
              "15 req / min",
              "30 req / min",
              "50 req / min",
              "100 req / min",
              "200 req / min",
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full border border-zinc-800 text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        {/* Guidelines */}
        <section id="rate-limit-guidelines" className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-2">Guidelines</h2>

          <p className="text-zinc-400 leading-8 mb-2">
            These settings help keep your APIs reliable, secure, and available
            even during periods of heavy traffic.
          </p>

          <ul className="space-y-4 text-zinc-400">
            <li>Prevent spam and request flooding.</li>

            <li>Protect APIs from automated bots and abuse.</li>

            <li>Ensure fair usage across all API clients.</li>

            <li>Maintain API stability during traffic spikes.</li>

            <li>Rules apply immediately after saving.</li>
          </ul>
        </section>
      </div>

      {/* Table of Contents */}
      <TablesOfContents sections={sections} />
    </div>
  );
}

export default DocsRateLimit;
