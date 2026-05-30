import { useState, useEffect } from "react";

export default function Welcome() {
  const [activeSection, setActiveSection] = useState("bouncer-documentation");
  useEffect(() => {
    const sections = document.querySelectorAll("section[id], h1[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div>
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
            Bouncer helps organizations protect accounts, identities, and
            critical resources through intelligent access control, risk
            detection, and automated security policies.
          </p>

          <section id="get-started" className="mt-10">
            <h2 className="text-3xl font-semibold">Get Started with Bouncer</h2>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Begin by creating a project in Bouncer and generating your API
              keys. Integrate the credentials into your application and
              configure the security settings required for your environment.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Learn how to set up secret key generation, protect routes,
              configure JWT validation, apply rate limiting policies, manage API
              access, and monitor security events directly from the Bouncer
              dashboard.
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
              Bouncer provides the essential tools required to secure modern
              applications, including project management, API key generation,
              route protection, JWT validation, secret key management, and
              configurable rate limiting.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Everything is managed through a centralized dashboard, allowing
              developers to configure security policies, monitor usage, and
              manage application access without maintaining complex security
              infrastructure.
            </p>
          </section>

          <section id="identity-access" className="mt-16">
            <h2 className="text-3xl font-semibold">
              Identity & Access Management
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Generate and manage project-specific API credentials that securely
              connect your applications with Bouncer. Configure authentication
              settings and control how applications interact with protected
              resources.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Bouncer helps ensure that only authorized requests are processed
              by validating credentials, enforcing access rules, and securing
              application endpoints.
            </p>
          </section>

          <section id="threat-detection" className="mt-16">
            <h2 className="text-3xl font-semibold">
              Threat Detection & Response
            </h2>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Protect applications from abuse through configurable rate
              limiting, request validation, and automated security controls
              designed to prevent unauthorized access and excessive traffic.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Monitor API activity and security events directly from the
              dashboard to identify unusual behavior and maintain visibility
              into how your applications are being accessed.
            </p>
          </section>

          <section id="integrations" className="mt-16">
            <h2 className="text-3xl font-semibold">Integrations & APIs</h2>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Integrate Bouncer into your applications using API keys, SDKs, and
              simple configuration workflows. Add your project credentials to
              environment variables and connect your application within minutes.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Use Bouncer APIs to generate secrets, validate tokens, secure
              routes, and automate security-related operations directly from
              your application code.
            </p>
          </section>

          <section id="best-practices" className="mt-16 mb-24">
            <h2 className="text-3xl font-semibold">Best Practices</h2>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Store API keys securely, keep secret generation credentials
              private, and use environment variables to manage sensitive
              configuration across development and production environments.
            </p>

            <p className="mt-4 text-lg leading-8 text-zinc-400">
              Apply route protection consistently, configure appropriate rate
              limits, rotate credentials when necessary, and validate JWT tokens
              to maintain a strong security posture for your applications.
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
    </div>
  );
}
