import TablesOfContents from "../TableOfContents";

function Troubleshooting() {
  const issues = [
    {
      id: "unauthorized-request",
      label: "Unauthorized Request (401)",
      description:
        "Requests to protected routes are rejected with a 401 Unauthorized response.",
      causes: `• Missing JWT token
• Invalid JWT token
• Expired JWT token
• Incorrect Authorization header format`,
      fix: `Authorization: Bearer YOUR_JWT_TOKEN`,
      note: "Ensure that the token is valid, has not expired, and includes the Bearer prefix.",
    },
    {
      id: "invalid-api-key",
      label: "Invalid API Key",
      description:
        "Requests fail because Bouncer cannot validate the supplied API key.",
      causes: `• Incorrect API key
• Missing x-api-key header
• API key belongs to another project`,
      fix: `x-api-key: YOUR_API_KEY`,
      note: "Verify that the API key is copied correctly and belongs to the intended project.",
    },
    {
      id: "rate-limit-exceeded",
      label: "Rate Limit Exceeded (429)",
      description:
        "Requests are blocked because the configured request threshold has been exceeded.",
      causes: `• Too many requests within the configured time window`,
      fix: `{
  "limit": 10,
  "window": 60
}`,
      note: "Wait for the rate-limit window to reset or increase the configured threshold if necessary.",
    },
    {
      id: "protected-route-not-enforced",
      label: "Protected Route Not Enforced",
      description:
        "Protected routes are accessible even without authentication.",
      causes: `• Route not configured as protected
• Middleware registered after route handlers`,
      fix: `app.use(bouncerMiddleware);

app.use("/api", apiRoutes);`,
      note: "Register the Bouncer middleware before your application's route handlers.",
    },
    {
      id: "public-route-being-blocked",
      label: "Public Route Being Blocked",
      description:
        "Endpoints intended to remain public are unexpectedly being protected.",
      causes: `• Public routes accidentally included in protected routes configuration`,
      fix: `const excludedRoutes = [
  "/auth/login",
  "/auth/register",
];`,
      note: "Ensure public endpoints are excluded from validation.",
    },
    {
      id: "configuration-changes-not-reflected",
      label: "Configuration Changes Not Reflected",
      description:
        "Updates to JWT, API keys, or route configuration are not taking effect.",
      causes: `• Application running with stale configuration
• Environment variables not reloaded`,
      fix: `npm run dev

or

npm start`,
      note: "Restart the application after making configuration changes.",
    },
    {
      id: "bouncer-not-receiving-requests",
      label: "Bouncer Not Receiving Requests",
      description:
        "Requests are reaching the backend without passing through Bouncer.",
      causes: `• Middleware not initialized
• Requests bypassing middleware`,
      fix: `app.use(async (req, res, next) => {
  // Bouncer validation
});`,
      note: "Verify that Bouncer is registered globally and before protected routes.",
    },
    {
      id: "jwt-validation-fails",
      label: "JWT Validation Fails for Valid Tokens",
      description:
        "Valid tokens are unexpectedly rejected during authentication.",
      causes: `• Incorrect JWT secret
• Issuer mismatch
• Audience mismatch
• Signing algorithm mismatch`,
      fix: `{
  issuer: "...",
  audience: "...",
  secret: "..."
}`,
      note: "Verify that your JWT configuration matches the token issuer.",
    },
  ];

  const sections = issues.map(({ id, label }) => ({
    id,
    label,
  }));

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16">
      {/* Main Content */}
      <div className="flex-1 min-w-0 xl:pr-6 text-zinc-300">
        {issues.map((issue) => (
          <section key={issue.id} id={issue.id} className="mb-6">
            <h2 className="text-2xl font-semibold text-white">
              {issue.label}
            </h2>

            <p className="text-zinc-400 leading-8">{issue.description}</p>

            <span className="text-zinc-400 block mb-2">Possible Causes</span>

            <div className="rounded-lg border border-zinc-800 p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-zinc-300 whitespace-pre-wrap">
                {issue.causes}
              </pre>
            </div>

            <span className="text-zinc-400 block mb-2">Recommended Fix</span>

            <div className="rounded-lg border border-zinc-800 p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-zinc-300 whitespace-pre-wrap">
                {issue.fix}
              </pre>
            </div>

            <p className="text-zinc-400 leading-8">{issue.note}</p>
          </section>
        ))}

        {/* End Note */}
        <div className="mt-12 rounded-lg border border-blue-500/20 bg-blue-500/10 p-5">
          <h3 className="text-blue-400 font-medium mb-2">Note</h3>

          <p className="text-zinc-400 leading-7">
            Most integration issues can be resolved by verifying the Project ID,
            API key, JWT configuration, middleware placement, and route
            configuration. Ensure that the application is restarted after making
            configuration changes.
          </p>
        </div>
      </div>

      {/* Table of Contents */}
      <TablesOfContents sections={sections} />
    </div>
  );
}

export default Troubleshooting;
