import TablesOfContents from "../TableOfContents";

function DocsLogsActivityReference() {
  const sections = [
    {
      id: "activity-monitoring",
      label: "Activity Monitoring",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <p className="text-base leading-8 text-zinc-400 mb-10">
            Logs Activity Reference provides examples of how request activity
            and events are displayed within Bouncer. These examples help users
            understand how to monitor traffic and review request history.
          </p>

          {/* Activity Monitoring */}
          <section id="activity-monitoring">
            <h2 className="text-xl font-semibold">Activity Monitoring</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              The logs interface provides visibility into requests processed by
              Bouncer and helps identify authentication failures, blocked
              requests, and other events.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Monitoring activity enables users to troubleshoot issues and gain
              insights into API usage patterns.
            </p>

            <img
              src="/docs-blueprint/logs-activity-reference/logs-activity.png"
              alt="Activity Monitoring"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>
        </div>

        <TablesOfContents sections={sections} />
      </div>
    </div>
  );
}

export default DocsLogsActivityReference;