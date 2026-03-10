import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import FrontPage from "../pages/FrontPage";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../utils/HelperFunctions/ProtectedRoutes";
import DashboardLayout from "../layouts/DashboardLayout";

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
      </Routes>
    </div>
  );
}

export default RoutePage;
