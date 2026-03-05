import LandingPage from "../pages/LandingPage";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import FrontPage from "../pages/FrontPage";
import { Routes, Route } from "react-router-dom";
import ProtectedRoutes from "../utils/HelperFunctions/ProtectedRoutes";

function RoutePage() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/frontpage"
          element={
            <ProtectedRoutes>
              <FrontPage />
            </ProtectedRoutes>
          }
        />
      </Routes>
    </div>
  );
}

export default RoutePage;
