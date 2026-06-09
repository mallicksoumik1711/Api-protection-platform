import TablesOfContents from "../TableOfContents";

function DocsJwtConfigurations() {
  const sections = [
    {
      id: "secret-key",
      label: "Secret Key",
    },
    {
      id: "token-storage",
      label: "Token Storage",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto flex gap-16">
        {/* Main Content */}
        <div className="flex-1 min-w-0">
          <p className="text-base leading-8 text-zinc-400 mb-10">
            JWT Configuration Examples provide an overview of the settings used
            to validate and manage JSON Web Tokens within Bouncer. These
            examples illustrate how token secrets and storage mechanisms are
            configured for secure authentication.
          </p>

          {/* Secret Key */}
          <section id="secret-key">
            <h2 className="text-xl font-semibold">Secret Key</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              The secret key is used to verify the authenticity and integrity of
              incoming JWT tokens. It ensures that only tokens issued with the
              correct signing key are accepted.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Proper management of the secret key is essential for maintaining
              secure authentication and preventing unauthorized access.
            </p>

            <img
              src="/docs-blueprint/jwt-configurations/secret-key.png"
              alt="Secret Key"
              className="mt-6 rounded-lg border border-zinc-800"
            />
          </section>

          {/* Token Storage */}
          <section id="token-storage" className="mt-12">
            <h2 className="text-xl font-semibold">Token Storage</h2>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Token Storage determines where Bouncer retrieves JWT tokens from
              when processing incoming requests.
            </p>

            <p className="mt-2 text-base leading-8 text-zinc-400">
              Tokens can be extracted from headers, cookies, or other supported
              locations depending on the authentication requirements of the
              application.
            </p>

            <div className="mt-6 space-y-2 text-zinc-300">
              <div>Authorization Header</div>
              <div>Cookies</div>
              <div>Custom Headers</div>
            </div>

            <img
              src="/docs-blueprint/jwt-configurations/token-storage.png"
              alt="Token Storage"
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

export default DocsJwtConfigurations;