import { Instagram, Github, Twitter } from "lucide-react";
import { FaSquareGithub, FaSquareXTwitter, FaLinkedin } from "react-icons/fa6";

function FooterSection({ title, links }) {
  return (
    <div>
      <h3 className="text-zinc-400 text-sm mb-4">{title}</h3>

      <ul className="space-y-3 text-zinc-300">
        {links.map((link) => (
          <li key={link.name}>
            <a href={link.href} className="hover:text-white transition">
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const DocsFooter = () => {
  return (
    <footer className="mt-10">
      <div className="mx-auto py-10">
        {/* Mobile + Desktop Wrapper */}
        <div className="flex flex-col lg:flex-row gap-22">
          {/* Left Side */}
          <div className="w-full lg:w-72 lg:pr-12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <h2
                className="text-7xl font-bold text-transparent tracking-tight"
                style={{
                  WebkitTextStroke: "1px rgb(113 113 122)", // zinc-500
                }}
              >
                BOUNCER
              </h2>

              <p className="mt-2 text-xs text-zinc-500">
                API authentication and route protection made simple.
              </p>

              <div className="flex items-center gap-5 mt-6 text-zinc-400">
                <a
                  href="https://github.com/mallicksoumik1711/Api-protection-platform"
                  target="_blank"
                >
                  <FaSquareGithub
                    size={25}
                    className="hover:text-white transition"
                  />
                </a>

                <a href="#">
                  <FaSquareXTwitter
                    size={25}
                    className="hover:text-white transition"
                  />
                </a>

                <a href="#">
                  <FaLinkedin
                    size={25}
                    className="hover:text-white transition"
                  />
                </a>
              </div>

              <p className="mt-6 text-sm text-zinc-600">
                © 2026 Bouncer
                <br />
                All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-5 gap-y-12">
              <FooterSection
                title="Getting Started"
                links={[
                  { name: "Introduction", href: "#" },
                  { name: "Quick Start", href: "#" },
                  { name: "How Bouncer Works", href: "#" },
                  { name: "Project Templates", href: "#" },
                  { name: "Key Management", href: "#" },
                ]}
              />

              <FooterSection
                title="Project Config"
                links={[
                  { name: "Protected Routes", href: "#" },
                  { name: "JWT Settings", href: "#" },
                  { name: "Rate Limiting", href: "#" },
                  { name: "Protected APIs", href: "#" },
                  { name: "JWT Configs", href: "#" },
                  { name: "Limit Reference", href: "#" },
                ]}
              />

              <FooterSection
                title="Integration"
                links={[
                  { name: "Overview", href: "#" },
                  { name: "Frontend", href: "#" },
                  { name: "Backend", href: "#" },
                  { name: "API Reference", href: "#" },
                  { name: "Testing Guide", href: "#" },
                  { name: "Insights", href: "#" },
                  { name: "Troubleshooting", href: "#" },
                ]}
              />

              <FooterSection
                title="Monitoring"
                links={[
                  { name: "Logs", href: "#" },
                  { name: "Favourites", href: "#" },
                  { name: "Activity Reference", href: "#" },
                ]}
              />

              <FooterSection
                title="Project Management"
                links={[
                  {
                    name: "Centralized Dashboard",
                    href: "#",
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default DocsFooter;
