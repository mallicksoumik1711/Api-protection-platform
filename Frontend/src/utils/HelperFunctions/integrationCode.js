export const integrationCode = {
  "Node / Express": `import apiGuardian from "api-guardian";

app.use(apiGuardian({
  projectId: "your-project-id"
}));`,

  FastAPI: `from api_guardian import protect

app.add_middleware(
    protect(project_id="your-project-id")
)`,

  Django: `from api_guardian.middleware import ApiGuardianMiddleware

MIDDLEWARE = [
    "api_guardian.middleware.ApiGuardianMiddleware",
]`,

  "Spring Boot": `@Bean
public ApiGuardianMiddleware apiGuardian() {
    return new ApiGuardianMiddleware("your-project-id");
}`,

  Other: `// Install middleware
// Configure with your projectId
// Add it before your routes`,
};