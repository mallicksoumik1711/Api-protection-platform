import TablesOfContents from "../TableOfContents";

function MiddlewarePlacement() {
  const sections = [
    {
      id: "middleware-placement",
      label: "Middleware Placement",
    },
    {
      id: "public-routes",
      label: "Public Routes",
    },
    {
      id: "route-flow",
      label: "Route Protection Flow",
    },
  ];

  const middlewareCode = `
// BOUNCER Middleware
const excludedRoutes = ["/auth/login", "/auth/register"];

app.use(async (req, res, next) => {
  if (excludedRoutes.includes(req.path)) {
    return next();
  }

  try {
    const response = await fetch("http://localhost:3000/validate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.API_KEY,
        Authorization: req.cookies.project_token
          ? \`Bearer \${req.cookies.project_token}\`
          : "",
      },
      body: JSON.stringify({
        projectId: process.env.PROJECT_ID,
        path: req.path,
        method: req.method,
      }),
    });

    const data = await response.json();

    if (!data.allowed) {
      return res.status(403).json({
        message: data.reason || data.message,
      });
    }

    next();
  } catch (err) {
    return res.status(500).json({
      message: "Auth service unavailable",
    });
  }
});`;

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16">
      {/* Main Content */}
      <div className="flex-1 min-w-0 xl:pr-6 text-zinc-300">
        {/* Middleware Placement */}
        <section id="middleware-placement" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">
            Middleware Placement
          </h2>

          <p className="text-zinc-400 leading-8 mb-6">
            Register the Bouncer middleware after your application's core
            middleware such as JSON parsing, cookies, and CORS, but before any
            protected routes are registered. This ensures every incoming request
            is validated before it reaches your route handlers.
          </p>
          <span className="text-zinc-400 leading-8 mb-6">
            Use the below code snippet at the entry point of your application.
          </span>

          <div className="rounded-lg border border-zinc-800 p-4 overflow-x-auto">
            <pre className="text-sm text-zinc-300 whitespace-pre">
              {middlewareCode}
            </pre>
          </div>
        </section>

        {/* Public Routes */}
        <section id="public-routes" className="mb-12">
          <h2 className="text-xl font-semibold text-white mb-4">
            Public Routes
          </h2>

          <p className="text-zinc-400 leading-8 mb-4">
            Some routes should remain accessible before a user is authenticated.
            These routes can be excluded from Bouncer validation using the{" "}
            <code>excludedRoutes</code> array.
          </p>

          <div className="rounded-lg border border-zinc-800 p-4 mb-4">
            <pre className="text-sm text-zinc-300">
              {`const excludedRoutes = [
  "/auth/login",
  "/auth/register",
];`}
            </pre>
          </div>

          <p className="text-zinc-400 leading-8">
            Common examples include login, signup, password reset, public APIs,
            and landing page endpoints.
          </p>
        </section>

        {/* Route Protection Flow */}
        <section id="route-flow">
          <h2 className="text-xl font-semibold text-white mb-4">
            Route Protection Flow
          </h2>

          <img src="/architecture/Route-request-flow.png" alt="Route Request Flow Diagram" />
        </section>
      </div>

      {/* Right Navigation */}
      <TablesOfContents sections={sections} />
    </div>
  );
}

export default MiddlewarePlacement;
