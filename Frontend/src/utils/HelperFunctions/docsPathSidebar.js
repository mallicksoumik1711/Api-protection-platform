export const getInitialSection = (pathname) => {
  // Getting Started
  if (
    ["/docs/introduction", "/docs/quickstart", "/docs/architecture"].includes(
      pathname,
    )
  ) {
    return "getting-started";
  }

  // Configuration
  if (
    [
      "/docs/protected-routes",
      "/docs/jwt-settings",
      "/docs/rate-limiting",
      "/docs/environment-setup",
    ].includes(pathname)
  ) {
    return "configuration";
  }

  // Integration
  if (
    [
      "/docs/integration-overview",
      "/docs/frontend-integration",
      "/docs/backend-integration",
      "/docs/middleware-placement",
      "/docs/testing-integration",
      "/docs/integration-troubleshooting",
    ].includes(pathname)
  ) {
    return "integration";
  }

  // Monitoring
  if (["/docs/logs", "/docs/favorites"].includes(pathname)) {
    return "monitoring";
  }

  // Projects
  if (["/docs/projects-center", "/docs/project-settings"].includes(pathname)) {
    return "projects";
  }

  // Guides
  if (["/docs/setup-guide", "/docs/best-practices"].includes(pathname)) {
    return "guides";
  }

  return "";
};
