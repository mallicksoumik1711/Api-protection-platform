import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../utils/HelperFunctions/ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayout";
import ProjectRouteGuard from "../utils/HelperFunctions/ProjectRouteGuard";

// Dashboard Pages
import FrontPage from "../pages/Dashboard/FrontPage";
import CreateProject from "../pages/Dashboard/CreateProject";
import ApiKeysDetails from "../pages/Dashboard/API Keys/API Keys Details/ApiKeysDetails";
import ApiKeyLogs from "../pages/Dashboard/API Keys/ApiKeyLogs";
import RateLimit from "../pages/Dashboard/RateLimit";
import ProtectedApi from "../pages/Dashboard/ProtectedApi";
import JwtSettings from "../pages/Dashboard/JwtSettings";
import ProjectDetails from "../pages/Dashboard/ProjectDetails";

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
                <ProtectedApi />
              </DashboardLayout>
            </ProtectedRoutes>
          }
        />
        <Route
          path="/jwt-settings"
          element={
            <ProtectedRoutes>
              <DashboardLayout>
                <JwtSettings />
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
      </Routes>
    </div>
  );
}

export default RoutePage;
