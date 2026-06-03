import {
  CheckCircle2,
  Lock,
  ShieldCheck,
  Cookie,
  Route,
  TestTube2,
  TriangleAlert,
} from "lucide-react";
import TablesOfContents from "../TableOfContents";

function FrontendIntegration() {
  const sections = [
    { id: "public-pages", label: "Public Pages" },
    { id: "protected-pages", label: "Protected Pages" },
    { id: "include-credentials", label: "Include Credentials" },
    { id: "route-validation-flow", label: "Route Validation Flow" },
    { id: "testing-protected-pages", label: "Testing Protected Pages" },
    { id: "development-notes", label: "Development Notes" },
  ];

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-12">
      {/* Main Content */}
      <div className="flex-1 min-w-0 text-zinc-300">
        {/* Public Pages */}
        <section id="public-pages" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-semibold text-white">Public Pages</h2>
          </div>

          <p className="text-zinc-400 leading-8">
            Start by identifying pages that do not require authentication. These
            pages should remain publicly accessible and should not rely on
            Bouncer validation.
          </p>

          <div className="mt-3">
            <p className="text-sm text-white mb-2">
              Common examples of public pages:
            </p>

            <ul className="space-y-2 text-sm text-zinc-400 list-disc pl-5">
              <li>Landing Page</li>
              <li>Login Page</li>
              <li>Signup / Registration Page</li>
              <li>Marketing Pages</li>
              <li>Documentation Pages</li>
            </ul>
          </div>
        </section>

        {/* Protected Pages */}
        <section id="protected-pages" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-semibold text-white">
              Protected Pages
            </h2>
          </div>

          <p className="text-zinc-400 leading-8">
            Apply Bouncer protection only to pages that require authenticated
            access. These pages should verify access before rendering protected
            content.
          </p>

          <div className="mt-3">
            <p className="text-sm text-white mb-2">Typical protected pages:</p>

            <ul className="space-y-2 text-sm text-zinc-400 list-disc pl-5">
              <li>Dashboard</li>
              <li>User Profile</li>
              <li>Account Settings</li>
              <li>Orders & Purchases</li>
              <li>Cart & Checkout</li>
              <li>Any page that requires user credentials</li>
            </ul>
          </div>
        </section>

        {/* Include Credentials */}
        <section id="include-credentials" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-white">
              Include Credentials
            </h2>
          </div>

          <p className="text-zinc-400 leading-8">
            When making requests from protected pages, ensure credentials are
            included so the authentication token can be sent with every request.
          </p>

          <pre className="mt-3 border border-zinc-900 rounded-md p-4 overflow-x-auto text-sm text-zinc-300">
            {`fetch("/dashboard", {
  method: "GET",
  credentials: "include",
});`}
          </pre>

          <p className="mt-4 text-sm text-zinc-500">
            This allows cookies or authentication tokens to be sent during
            validation requests.
          </p>
        </section>

        {/* Route Validation Flow */}
        <section id="route-validation-flow" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-semibold text-white">
              Route Validation Flow
            </h2>
          </div>

          <div className="p-3">
            <div className="space-y-4 text-zinc-400">
              <div>
                <span className="text-white font-medium">1.</span> User opens a
                protected page.
              </div>

              <div>
                <span className="text-white font-medium">2.</span> Frontend
                sends a request to the backend.
              </div>

              <div>
                <span className="text-white font-medium">3.</span> Backend
                validates the request using Bouncer.
              </div>

              <div>
                <span className="text-white font-medium">4.</span> If access is
                allowed, protected content is rendered.
              </div>

              <div>
                <span className="text-white font-medium">5.</span> If access is
                denied, redirect the user to the login page.
              </div>
            </div>
          </div>

          <div className="mt-3 border border-zinc-900 rounded-md p-4">
            <pre className="text-sm text-zinc-300 overflow-x-auto">
              {`if (!response.ok) {
  navigate("/login");
  return;
}`}
            </pre>
          </div>
        </section>

        {/* Testing */}
        <section id="testing-protected-pages" className="mb-12 scroll-mt-24">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-xl font-semibold text-white">
              Testing Protected Pages
            </h2>
          </div>

          <div className="space-y-4 text-zinc-400">
            <p>
              After integration, verify that protected pages behave correctly.
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Access protected pages after login.</li>
              <li>Refresh protected pages.</li>
              <li>Open protected URLs directly.</li>
              <li>Verify unauthorized users are redirected.</li>
              <li>Confirm public pages remain accessible.</li>
            </ul>
          </div>
        </section>

        {/* Development Notes */}
        <section id="development-notes" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-4">
            <h2 className="text-xl font-semibold text-white">
              Development Notes
            </h2>
          </div>

          <div className="space-y-4">
            <div className="border border-yellow-900/40 bg-yellow-500/5 rounded-md p-4">
              <p className="text-sm text-yellow-400">
                During local development, avoid running Bouncer and your test
                application in the same browser profile if both use the same
                token name.
              </p>
            </div>

            <ul className="list-disc pl-5 space-y-2 text-zinc-400">
              <li>Use separate browsers for Bouncer and your application.</li>

              <li>Or use an Incognito / InPrivate window for one of them.</li>

              <li>
                Alternatively, configure a different token name in your test
                application.
              </li>

              <li>
                This prevents authentication cookies from overwriting each other
                during development.
              </li>
            </ul>
          </div>
        </section>
      </div>

      {/* Right Navigation */}
      <TablesOfContents sections={sections} />
    </div>
  );
}

export default FrontendIntegration;
