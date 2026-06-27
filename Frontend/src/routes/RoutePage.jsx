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
// import IntroductionDoc from "../pages/Documents/getting-started/IntroductionDoc";
const IntroductionDoc = lazy(
  () => import("../pages/Documents/getting-started/IntroductionDoc"),
);
// import QuickStartDoc from "../pages/Documents/getting-started/QuickStartDoc";
const QuickStartDoc = lazy(
  () => import("../pages/Documents/getting-started/QuickStartDoc"),
);
// import HowBouncerWorksDoc from "../pages/Documents/getting-started/HowBouncerWorksDoc";
const HowBouncerWorksDoc = lazy(
  () => import("../pages/Documents/getting-started/HowBouncerWorksDoc"),
);
// import ProtectedRoutesDoc from "../pages/Documents/project-configuration/ProtectedRoutesDoc";
const ProtectedRoutesDoc = lazy(
  () => import("../pages/Documents/project-configuration/ProtectedRoutesDoc"),
);
// import JwtDoc from "../pages/Documents/project-configuration/JwtDoc";
const JwtDoc = lazy(
  () => import("../pages/Documents/project-configuration/JwtDoc"),
);
// import RateLimitDoc from "../pages/Documents/project-configuration/RateLimitDoc";
const RateLimitDoc = lazy(
  () => import("../pages/Documents/project-configuration/RateLimitDoc"),
);
// import IntegrationDoc from "../pages/Documents/Integration/IntegrationDoc";
const IntegrationDoc = lazy(
  () => import("../pages/Documents/Integration/IntegrationDoc"),
);
// import FrontendDoc from "../pages/Documents/Integration/FrontendDoc";
const FrontendDoc = lazy(
  () => import("../pages/Documents/Integration/FrontendDoc"),
);
// import BackendDoc from "../pages/Documents/Integration/BackendDoc";
const BackendDoc = lazy(
  () => import("../pages/Documents/Integration/BackendDoc"),
);
// import MiddlewareDoc from "../pages/Documents/Integration/MiddlewareDoc";
const MiddlewareDoc = lazy(
  () => import("../pages/Documents/Integration/MiddlewareDoc"),
);
// import TestingDoc from "../pages/Documents/Integration/TestingDoc";
const TestingDoc = lazy(
  () => import("../pages/Documents/Integration/TestingDoc"),
);
// import TroubleshootingDoc from "../pages/Documents/Integration/TroubleshootingDoc";
const TroubleshootingDoc = lazy(
  () => import("../pages/Documents/Integration/TroubleshootingDoc"),
);
// import LogsDoc from "../pages/Documents/monitoring/LogsDoc";
const LogsDoc = lazy(
  () => import("../pages/Documents/monitoring/LogsDoc"),
);
// import FavouritesDoc from "../pages/Documents/monitoring/FavouritesDoc";
const FavouritesDoc = lazy(
  () => import("../pages/Documents/monitoring/FavouritesDoc"),
);
// import AllProjectCenterDoc from "../pages/Documents/project-management/AllProjectCenterDoc";
const AllProjectCenterDoc = lazy(
  () => import("../pages/Documents/project-management/AllProjectCenterDoc"),
);
// import ProjectTemplatesDoc from "../pages/Documents/snapshots/ProjectTemplatesDoc";
const ProjectTemplatesDoc = lazy(
  () => import("../pages/Documents/snapshots/ProjectTemplatesDoc"),
);
// import KeyManagementDoc from "../pages/Documents/snapshots/KeyManagementDoc";
const KeyManagementDoc = lazy(
  () => import("../pages/Documents/snapshots/KeyManagementDoc"),
);
// import ProtectedApiDoc from "../pages/Documents/snapshots/ProtectedApiDoc";
const ProtectedApiDoc = lazy(
  () => import("../pages/Documents/snapshots/ProtectedApiDoc"),
);
// import JwtConfigurationsDoc from "../pages/Documents/snapshots/JwtConfigurationsDoc";
const JwtConfigurationsDoc = lazy(
  () => import("../pages/Documents/snapshots/JwtConfigurationsDoc"),
);
// import RateLimitingReferenceDoc from "../pages/Documents/snapshots/RateLimitingReferenceDoc";
const RateLimitingReferenceDoc = lazy(
  () => import("../pages/Documents/snapshots/RateLimitingReferenceDoc"),
);
import IntegrationInsightsDoc from "../pages/Documents/snapshots/IntegrationInsightsDoc";
import LogsActivityReferenceDoc from "../pages/Documents/snapshots/LogsActivityreferenceDoc";

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
        <Route path="/docs/integration-overview" element={<IntegrationDoc />} />
        <Route path="/docs/frontend-integration" element={<FrontendDoc />} />
        <Route path="/docs/backend-integration" element={<BackendDoc />} />
        <Route path="/docs/middleware-placement" element={<MiddlewareDoc />} />
        <Route path="/docs/testing-integration" element={<TestingDoc />} />
        <Route
          path="/docs/integration-troubleshooting"
          element={<TroubleshootingDoc />}
        />
        <Route path="/docs/protected-routes" element={<ProtectedRoutesDoc />} />
        <Route path="/docs/jwt-settings" element={<JwtDoc />} />
        <Route path="/docs/rate-limiting" element={<RateLimitDoc />} />
        <Route path="/docs/logs" element={<LogsDoc />} />
        <Route path="/docs/favorites" element={<FavouritesDoc />} />
        <Route path="/docs/projects-center" element={<AllProjectCenterDoc />} />
        <Route
          path="/docs/project-templates"
          element={<ProjectTemplatesDoc />}
        />
        <Route path="/docs/key-management" element={<KeyManagementDoc />} />
        <Route path="/docs/access-control" element={<ProtectedApiDoc />} />
        <Route
          path="/docs/jwt-configurations"
          element={<JwtConfigurationsDoc />}
        />
        <Route
          path="/docs/rate-limiting-reference"
          element={<RateLimitingReferenceDoc />}
        />
        <Route
          path="/docs/integration-insights"
          element={<IntegrationInsightsDoc />}
        />
        <Route
          path="/docs/logs-activity"
          element={<LogsActivityReferenceDoc />}
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
