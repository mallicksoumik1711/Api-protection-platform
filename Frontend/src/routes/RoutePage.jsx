import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import ProtectedRoutes from "../utils/HelperFunctions/ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectRouteGuard from "../utils/HelperFunctions/ProjectRouteGuard";
import { RouteLoader } from "../utils/HelperFunctions/RouteLoader";

// Docs
const IntroductionDoc = lazy(
  () => import("../pages/Documents/getting-started/IntroductionDoc"),
);
const QuickStartDoc = lazy(
  () => import("../pages/Documents/getting-started/QuickStartDoc"),
);
const HowBouncerWorksDoc = lazy(
  () => import("../pages/Documents/getting-started/HowBouncerWorksDoc"),
);
const ProtectedRoutesDoc = lazy(
  () => import("../pages/Documents/project-configuration/ProtectedRoutesDoc"),
);
const JwtDoc = lazy(
  () => import("../pages/Documents/project-configuration/JwtDoc"),
);
const RateLimitDoc = lazy(
  () => import("../pages/Documents/project-configuration/RateLimitDoc"),
);
const IntegrationDoc = lazy(
  () => import("../pages/Documents/Integration/IntegrationDoc"),
);
const FrontendDoc = lazy(
  () => import("../pages/Documents/Integration/FrontendDoc"),
);
const BackendDoc = lazy(
  () => import("../pages/Documents/Integration/BackendDoc"),
);
const MiddlewareDoc = lazy(
  () => import("../pages/Documents/Integration/MiddlewareDoc"),
);
const TestingDoc = lazy(
  () => import("../pages/Documents/Integration/TestingDoc"),
);
const TroubleshootingDoc = lazy(
  () => import("../pages/Documents/Integration/TroubleshootingDoc"),
);
const LogsDoc = lazy(() => import("../pages/Documents/monitoring/LogsDoc"));
const FavouritesDoc = lazy(
  () => import("../pages/Documents/monitoring/FavouritesDoc"),
);
const AllProjectCenterDoc = lazy(
  () => import("../pages/Documents/project-management/AllProjectCenterDoc"),
);
const ProjectTemplatesDoc = lazy(
  () => import("../pages/Documents/snapshots/ProjectTemplatesDoc"),
);
const KeyManagementDoc = lazy(
  () => import("../pages/Documents/snapshots/KeyManagementDoc"),
);
const ProtectedApiDoc = lazy(
  () => import("../pages/Documents/snapshots/ProtectedApiDoc"),
);
const JwtConfigurationsDoc = lazy(
  () => import("../pages/Documents/snapshots/JwtConfigurationsDoc"),
);
const RateLimitingReferenceDoc = lazy(
  () => import("../pages/Documents/snapshots/RateLimitingReferenceDoc"),
);
const IntegrationInsightsDoc = lazy(
  () => import("../pages/Documents/snapshots/IntegrationInsightsDoc"),
);
const LogsActivityReferenceDoc = lazy(
  () => import("../pages/Documents/snapshots/LogsActivityReferenceDoc"),
);

// Dashboard Pages
import FrontPage from "../pages/Dashboard/FrontPage";
import SetUpGuide from "../pages/Dashboard/SetUpGuide";
import CreateProject from "../pages/Dashboard/CreateProject";
import ApiKeysDetails from "../pages/Dashboard/API Keys/API Keys Details/ApiKeysDetails";
import ApiKeyLogs from "../pages/Dashboard/API Keys/ApiKeyLogs";
import RateLimit from "../pages/Dashboard/RateLimit";
import ProtectedApi from "../pages/Dashboard/ProtectedApi";
import JwtSettings from "../pages/Dashboard/JwtSettings";
import ProjectDetails from "../pages/Dashboard/ProjectDetails";
import Favourites from "../pages/Dashboard/Favourites";
import Integration from "../pages/Dashboard/Integration";
import ProfilePage from "../pages/Dashboard/ProfilePage";

import { Toaster } from "react-hot-toast";

function RoutePage() {
  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: "#0f172a", // pure slate-950
            color: "#e2e8f0",
            border: "1px solid #1e293b", // slate-800 border
            borderRadius: "10px",
            boxShadow: "0 8px 20px -6px rgba(0,0,0,0.45)",
          },
        }}
      />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Docs */}
        <Route
          path="/docs/introduction"
          element={
            <RouteLoader>
              <IntroductionDoc />
            </RouteLoader>
          }
        />
        <Route
          path="/docs/quickstart"
          element={
            <RouteLoader>
              <QuickStartDoc />
            </RouteLoader>
          }
        />
        <Route
          path="/docs/architecture"
          element={
            <RouteLoader>
              <HowBouncerWorksDoc />
            </RouteLoader>
          }
        />
        <Route
          path="/docs/integration-overview"
          element={
            <RoutesLoader>
              <IntegrationDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/frontend-integration"
          element={
            <RoutesLoader>
              <FrontendDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/backend-integration"
          element={
            <RoutesLoader>
              <BackendDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/middleware-placement"
          element={
            <RoutesLoader>
              <MiddlewareDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/testing-integration"
          element={
            <RoutesLoader>
              <TestingDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/integration-troubleshooting"
          element={
            <RoutesLoader>
              <TroubleshootingDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/protected-routes"
          element={
            <RoutesLoader>
              <ProtectedRoutesDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/jwt-settings"
          element={
            <RoutesLoader>
              <JwtDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/rate-limiting"
          element={
            <RoutesLoader>
              <RateLimitDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/logs"
          element={
            <RoutesLoader>
              <LogsDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/favorites"
          element={
            <RoutesLoader>
              <FavouritesDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/projects-center"
          element={
            <RoutesLoader>
              <AllProjectCenterDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/project-templates"
          element={
            <RoutesLoader>
              <ProjectTemplatesDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/key-management"
          element={
            <RoutesLoader>
              <KeyManagementDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/access-control"
          element={
            <RoutesLoader>
              <ProtectedApiDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/jwt-configurations"
          element={
            <RoutesLoader>
              <JwtConfigurationsDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/rate-limiting-reference"
          element={
            <RoutesLoader>
              <RateLimitingReferenceDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/integration-insights"
          element={
            <RoutesLoader>
              <IntegrationInsightsDoc />
            </RoutesLoader>
          }
        />
        <Route
          path="/docs/logs-activity"
          element={
            <RoutesLoader>
              <LogsActivityReferenceDoc />
            </RoutesLoader>
          }
        />

        {/* Dashboard */}

        <Route
          path="/frontpage"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <FrontPage />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/setup-guide"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <SetUpGuide />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/create-project"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <CreateProject />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/api-keys"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ApiKeysDetails />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/project/:projectId/api-keys"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <ApiKeysDetails />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/api-logs"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ApiKeyLogs />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/rate-limit"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <RateLimit />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/project/:projectId/rate-limit"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <RateLimit />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/protected-api"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <ProtectedApi />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/project/:projectId/protected-api"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <ProtectedApi />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/jwt-settings"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <JwtSettings />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/project/:projectId/jwt-settings"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <JwtSettings />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/integration"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <Integration />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/project/:projectId/integration"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectRouteGuard>
                  <Integration />
                </ProjectRouteGuard>
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/project/:projectId"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProjectDetails />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/favourites"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <Favourites />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/profile-page"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <ProfilePage />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default RoutePage;
