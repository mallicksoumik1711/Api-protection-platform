import { useState } from "react";

export default function Welcome() {
  const [activeSection, setActiveSection] = useState("bouncer-documentation");

  return (
    <div className="max-w-6xl mx-auto flex gap-16">
      {/* Main Content */}
      <div className="flex-1">
        <h1
          id="bouncer-documentation"
          className="text-4xl font-semibold tracking-tight"
        >
          Bouncer Documentation
        </h1>

        <p className="mt-2 text-sm text-zinc-400">Last updated August 2026</p>

        <p className="text-lg mt-6 leading-9 text-zinc-400">
          Bouncer helps organizations protect accounts, identities, and critical
          resources through intelligent access control, risk detection, and
          automated security policies.
        </p>

        <section id="get-started" className="mt-10">
          <h2 className="text-3xl font-semibold">Get Started with Bouncer</h2>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Install Bouncer and configure your first security policy. Connect
            your identity provider, onboard users, and start protecting
            applications within minutes.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Learn about authentication, access management, threat detection,
            audit logging, integrations, and APIs.
          </p>

          <p className="mt-8 text-lg leading-8 text-zinc-400">
            See the{" "}
            <button className="underline underline-offset-4 hover:text-blue-600">
              Quick Start Guide
            </button>{" "}
            for more information.
          </p>
        </section>

        <section id="core-capabilities" className="mt-16">
          <h2 className="text-3xl font-semibold">Core Capabilities</h2>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Bouncer provides centralized security controls for managing
            identities, enforcing access policies, monitoring user activity, and
            maintaining compliance across your organization.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            From authentication and authorization to auditing and reporting,
            Bouncer delivers the tools required to secure modern applications
            and infrastructure.
          </p>
        </section>

        <section id="identity-access" className="mt-16">
          <h2 className="text-3xl font-semibold">
            Identity & Access Management
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Configure authentication providers, role-based access control, user
            provisioning, and permissions to ensure users only have access to
            the resources they require.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Implement least-privilege principles and streamline user access
            management through centralized policy enforcement.
          </p>
        </section>

        <section id="threat-detection" className="mt-16">
          <h2 className="text-3xl font-semibold">
            Threat Detection & Response
          </h2>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Monitor login activity, detect suspicious behavior, identify
            anomalous access patterns, and respond to potential threats in real
            time.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Security teams can investigate incidents faster using audit trails,
            event logs, and automated response workflows.
          </p>
        </section>

        <section id="integrations" className="mt-16">
          <h2 className="text-3xl font-semibold">Integrations & APIs</h2>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Integrate Bouncer with identity providers, cloud platforms,
            monitoring systems, ticketing tools, and custom internal
            applications.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Use APIs and webhooks to automate workflows and extend Bouncer to
            fit your organization's security requirements.
          </p>
        </section>

        <section id="best-practices" className="mt-16 mb-24">
          <h2 className="text-3xl font-semibold">Best Practices</h2>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Follow recommended deployment patterns, security baselines, and
            governance controls to maximize protection and operational
            efficiency.
          </p>

          <p className="mt-4 text-lg leading-8 text-zinc-400">
            Explore guidance for authentication hardening, access reviews,
            incident response planning, and compliance readiness.
          </p>
        </section>
      </div>

      {/* Right Sidebar */}
      <div className="max-w-6xl mx-auto flex gap-16">
        <aside className="hidden xl:block w-56 shrink-0">
          <div className="sticky top-24 pl-6">
            <h3 className="text-sm font-semibold text-zinc-500 mb-4">
              On this page
            </h3>

            <nav className="space-y-3">
              <a
                href="#bouncer-documentation"
                onClick={() => setActiveSection("bouncer-documentation")}
                className={`block text-sm transition-colors ${
                  activeSection === "bouncer-documentation"
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Introduction
              </a>

              <a
                href="#get-started"
                onClick={() => setActiveSection("get-started")}
                className={`block text-sm transition-colors ${
                  activeSection === "get-started"
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Get started
              </a>

              <a
                href="#core-capabilities"
                onClick={() => setActiveSection("core-capabilities")}
                className={`block text-sm transition-colors ${
                  activeSection === "core-capabilities"
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Core Capabilities
              </a>

              <a
                href="#identity-access"
                onClick={() => setActiveSection("identity-access")}
                className={`block text-sm transition-colors ${
                  activeSection === "identity-access"
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Identity & Access
              </a>

              <a
                href="#threat-detection"
                onClick={() => setActiveSection("threat-detection")}
                className={`block text-sm transition-colors ${
                  activeSection === "threat-detection"
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Threat Detection
              </a>

              <a
                href="#integrations"
                onClick={() => setActiveSection("integrations")}
                className={`block text-sm transition-colors ${
                  activeSection === "integrations"
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Integrations & APIs
              </a>

              <a
                href="#best-practices"
                onClick={() => setActiveSection("best-practices")}
                className={`block text-sm transition-colors ${
                  activeSection === "best-practices"
                    ? "text-white"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                Best Practices
              </a>
            </nav>
          </div>
        </aside>
      </div>
    </div>
  );
}
