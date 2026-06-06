import TablesOfContents from "../TableOfContents";

function TestingIntegration() {
  const testCases = [
    {
      id: "missing-jwt-token",
      label: "Missing JWT Token",
      description:
        "Verify that requests to protected routes are rejected when no JWT token is supplied.",
      request: `GET /api/users

Headers:
x-api-key: YOUR_API_KEY

(No Authorization header)`,
      howTested: `1. Open Postman.
2. Select GET request.
3. Enter the protected endpoint.
4. Do not provide an Authorization header.
5. Click Send.`,
      response: `Status: 401 Unauthorized

{
  "allowed": false,
  "message": "Missing JWT token"
}`,
    },
    {
      id: "invalid-jwt-token",
      label: "Invalid JWT Token",
      description:
        "Verify that requests with an invalid JWT token are blocked.",
      request: `GET /api/users

Headers:
Authorization: Bearer invalid_token
x-api-key: YOUR_API_KEY`,
      howTested: `1. Open Postman.
2. Enter the protected endpoint.
3. Provide an invalid JWT token.
4. Click Send.`,
      response: `Status: 401 Unauthorized

{
  "allowed": false,
  "message": "Invalid JWT token"
}`,
    },
    {
      id: "expired-jwt-token",
      label: "Expired JWT Token",
      description: "Verify that expired JWT tokens are rejected.",
      request: `GET /api/users

Headers:
Authorization: Bearer expired_token
x-api-key: YOUR_API_KEY`,
      howTested: `1. Open Postman.
2. Use an expired JWT token.
3. Send the request.`,
      response: `Status: 401 Unauthorized

{
  "allowed": false,
  "message": "JWT token expired"
}`,
    },
    {
      id: "valid-jwt-token",
      label: "Valid JWT Token",
      description:
        "Verify that valid JWT tokens allow access to protected routes.",
      request: `GET /api/users

Headers:
Authorization: Bearer valid_token
x-api-key: YOUR_API_KEY`,
      howTested: `1. Open Postman.
2. Provide a valid JWT token.
3. Send the request.`,
      response: `Status: 200 OK

{
  "allowed": true
}`,
    },
    {
      id: "protected-route-access",
      label: "Protected Route Access",
      description:
        "Verify that protected routes can only be accessed with valid credentials.",
      request: `GET /api/profile

Headers:
Authorization: Bearer valid_token
x-api-key: YOUR_API_KEY`,
      howTested: `1. Open Postman.
2. Request a protected endpoint.
3. Supply valid credentials.
4. Send the request.`,
      response: `Status: 200 OK

{
  "allowed": true
}`,
    },
    {
      id: "public-route-access",
      label: "Public Route Access",
      description:
        "Verify that public routes remain accessible without authentication.",
      request: `GET /health

Headers:
None`,
      howTested: `1. Open Postman.
2. Request a public endpoint.
3. Send the request without credentials.`,
      response: `Status: 200 OK

{
  "status": "healthy"
}`,
    },
    {
      id: "requests-within-rate-limit",
      label: "Requests Within Rate Limit",
      description:
        "Verify that requests below the configured threshold are allowed.",
      request: `GET /api/users

Headers:
Authorization: Bearer valid_token
x-api-key: YOUR_API_KEY`,
      howTested: `1. Configure rate limit to 10 requests/minute.
2. Send 5 requests.
3. Verify all requests succeed.`,
      response: `Status: 200 OK

{
  "allowed": true
}`,
    },
    {
      id: "exceeding-rate-limit-threshold",
      label: "Exceeding Rate Limit Threshold",
      description:
        "Verify that requests exceeding the configured limit are blocked.",
      request: `GET /api/users

Headers:
Authorization: Bearer valid_token
x-api-key: YOUR_API_KEY`,
      howTested: `1. Configure rate limit to 10 requests/minute.
2. Send more than 10 requests.
3. Observe the response.`,
      response: `Status: 429 Too Many Requests

{
  "allowed": false,
  "message": "Rate limit exceeded"
}`,
    },
    {
      id: "rate-limit-reset-verification",
      label: "Rate Limit Reset Verification",
      description:
        "Verify that requests are allowed again after the rate-limit window resets.",
      request: `GET /api/users

Headers:
Authorization: Bearer valid_token
x-api-key: YOUR_API_KEY`,
      howTested: `1. Exceed the rate limit.
2. Wait for the configured window to reset.
3. Send another request.`,
      response: `Status: 200 OK

{
  "allowed": true
}`,
    },
    {
      id: "missing-api-key",
      label: "Missing API Key",
      description: "Verify that requests without an API key are rejected.",
      request: `GET /api/users

Headers:
Authorization: Bearer valid_token

(No x-api-key header)`,
      howTested: `1. Remove the x-api-key header.
2. Send the request.`,
      response: `Status: 401 Unauthorized

{
  "allowed": false,
  "message": "Missing API key"
}`,
    },
    {
      id: "invalid-api-key",
      label: "Invalid API Key",
      description: "Verify that invalid API keys are rejected.",
      request: `GET /api/users

Headers:
Authorization: Bearer valid_token
x-api-key: invalid_key`,
      howTested: `1. Provide an invalid API key.
2. Send the request.`,
      response: `Status: 401 Unauthorized

{
  "allowed": false,
  "message": "Invalid API key"
}`,
    },
    {
      id: "valid-api-key",
      label: "Valid API Key",
      description: "Verify that requests with a valid API key are accepted.",
      request: `GET /api/users

Headers:
Authorization: Bearer valid_token
x-api-key: YOUR_API_KEY`,
      howTested: `1. Provide a valid API key.
2. Send the request.`,
      response: `Status: 200 OK

{
  "allowed": true
}`,
    },
  ];

  const sections = testCases.map(({ id, label }) => ({
    id,
    label,
  }));

  return (
    <div className="max-w-6xl mx-auto flex flex-col xl:flex-row gap-8 xl:gap-16">
      <div className="flex-1 min-w-0 xl:pr-6 text-zinc-300">
        {testCases.map((test) => (
          <section key={test.id} id={test.id}>
            <h2 className="text-2xl font-semibold text-white">{test.label}</h2>

            <p className="text-zinc-400 leading-8">{test.description}</p>

            <span className="text-zinc-400 mb-2 block">Postman Request</span>

            <div className="rounded-lg border border-zinc-800 p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-zinc-300 whitespace-pre">
                {test.request}
              </pre>
            </div>

            <span className="text-zinc-400 mb-2 block">How We Tested</span>

            <div className="rounded-lg border border-zinc-800 p-4 overflow-x-auto mb-4">
              <pre className="text-sm text-zinc-300 whitespace-pre">
                {test.howTested}
              </pre>
            </div>

            <span className="text-zinc-400 mb-2 block">Expected Response</span>

            <div className="rounded-lg border border-zinc-800 p-4 overflow-x-auto mb-8">
              <pre className="text-sm text-zinc-300 whitespace-pre">
                {test.response}
              </pre>
            </div>
          </section>
        ))}
        <div className="mt-12 rounded-lg border border-blue-500/20 bg-blue-500/10 p-5">
              <h3 className="text-blue-400 font-medium mb-2">Note</h3>

              <p className="text-zinc-400 leading-7">
                The request and response examples above represent the expected
                behavior of Bouncer. Actual status codes and messages may vary
                depending on your JWT configuration, protected routes, API keys,
                and rate-limit settings.
              </p>
            </div>
      </div>

      <TablesOfContents sections={sections} />
    </div>
  );
}

export default TestingIntegration;
