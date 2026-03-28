import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import DashboardSkeleton from "../../layouts/skeletons/DashboardSkeleton";

function ProtectedRoutes({ children }) {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      // for testing. remove in production
      await new Promise((resolve) => setTimeout(resolve, 1000));
      try {
        await axios.get("http://localhost:3000/auth/protected", {
          withCredentials: true,
        });
        setIsAuth(true);
      } catch {
        setIsAuth(false);
      }
    };

    checkAuth();
  }, []);
  if (isAuth === null) return <DashboardSkeleton />;

  if (!isAuth) {
    toast.error("You must be logged in to access this page");
    return <Navigate to="/signin" />;
  }

  return children;
}

export default ProtectedRoutes;
