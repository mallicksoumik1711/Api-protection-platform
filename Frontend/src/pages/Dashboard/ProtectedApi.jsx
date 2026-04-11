import { useState, useEffect } from "react";
import { LockKeyhole } from "lucide-react";
import {
  createProtectedRoute,
  getProtectedRoutes,
} from "../../api/protedtedRoute";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";

import toast from "react-hot-toast";
import { useSelector } from "react-redux";

import RouteSetup from "../../components/ProtectedRouteDashboard/RouteSetup";
import HttpMethods from "../../components/ProtectedRouteDashboard/HttpMethods";
import NestedRouteToggle from "../../components/ProtectedRouteDashboard/NestedRouteToggle";
import ProtectionRules from "../../components/ProtectedRouteDashboard/ProtectionRules";
import SecurityFeatures from "../../components/ProtectedRouteDashboard/SecurityFeatures";
import RoutePriority from "../../components/ProtectedRouteDashboard/RoutePriority";
import RouteStructure from "../../components/ProtectedRouteDashboard/RouteStructure";
import ConfigureRoute from "../../components/ProtectedRouteDashboard/ConfigureRoute";
import FinalRoutePreview from "../../components/ProtectedRouteDashboard/FinalRoutePreview";

function ProtectedApi() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    route: {
      base: "",
      sub: "",
      child: "",
      protectNestedRoute: false,
    },

    request: {
      method: "ALL",
      priority: "Normal",
    },

    protection: {
      rules: "API_KEY",
    },

    security: {
      rateLimiting: { enabled: true },
      botProtection: { enabled: false },
      protectionEnabled: true,
    },

    description: "",
  });

  const [routes, setRoutes] = useState([]);

  const projectId = useSelector((state) => state.project.selectedProjectId);
  if (!projectId) {
    toast.error(
      "No project selected. Please select a project to manage protected routes.",
    );
  }

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const res = await getProtectedRoutes(projectId);
        setRoutes(res.data || []);
      } catch (error) {
        console.error("Error fetching protected routes:", error);
        toast.error("Failed to fetch protected routes.");
      }
    };

    if (projectId) {
      fetchRoutes();
    }
  }, [projectId]);

  const handleSubmit = async () => {
    try {
      const payload = {
        projectId,
        ...formData,
      };

      const response = await createProtectedRoute(payload);
      setRoutes((prev) => [response.data, ...prev]);
      console.log("Protected route created:", response);
      toast.success("Protected route created successfully!");
      setTimeout(() => {
        navigate(`/project/${projectId}/jwt-settings`);
      }, 1000);
    } catch (error) {
      console.error("Error creating protected route:", error);
      toast.error("Failed to create protected route.");
    }
  };
  return (
    <div className="bg-black px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.protectedApi.tag}
        title={DashboardHeaderValues.protectedApi.title}
        description={DashboardHeaderValues.protectedApi.description}
        features={DashboardHeaderValues.protectedApi.features}
      />

      <div className="mt-10 max-w-6xl mx-auto flex justify-between gap-10 mb-5">
        <div className="h-fit top-6 sticky w-1/2 bg-zinc-950 border border-zinc-800 rounded-lg p-7 shadow-lg">
          <h2 className="font-semibold text-white mb-1">Add Protected Route</h2>
          <p className="text-sm text-zinc-500 mb-8">
            Configure how this specific route should be protected by the
            middleware.
          </p>

          <div className="mb-8">
            {/* Route Setup */}
            <RouteSetup formData={formData} setFormData={setFormData} />

            {/* HTTP Method */}
            <HttpMethods formData={formData} setFormData={setFormData} />

            <div className="mb-5">
              <label className="text-xs uppercase tracking-widest text-white block mb-4">
                Route Description{" "}
                <span className="text-zinc-500">(optional)</span>
              </label>
              <textarea
                placeholder="Protect user profile and settings endpoints"
                className="w-full bg-black border border-zinc-900 rounded-md px-4 py-3 text-sm text-zinc-300 placeholder-zinc-600 outline-none resize-none h-24"
              />
            </div>

            {/* Nested Route Toggle */}
            <NestedRouteToggle formData={formData} setFormData={setFormData} />
          </div>

          {/* Protection Rules */}
          <ProtectionRules formData={formData} setFormData={setFormData} />

          {/* Security Features */}
          <SecurityFeatures formData={formData} setFormData={setFormData} />

          {/* Route Priority */}
          <RoutePriority formData={formData} setFormData={setFormData} />

          {/* FINAL ROUTE PREVIEW */}
          {/* <FinalRoutePreview routes={routes} /> */}

          <button
            onClick={handleSubmit}
            className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-950/50 hover:border-zinc-700 text-white font-semibold py-3.5 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
          >
            <LockKeyhole className="w-4 h-4" />
            Save Protected Route
          </button>
        </div>

        <div className="flex flex-col h-fit sticky top-6 w-1/2">
          {/* route structure static for now */}
          <RouteStructure routes={routes} />

          {/* route configuration static always */}
          <FinalRoutePreview routes={routes} />
          {/* <ConfigureRoute /> */}
          <ConfigureRoute />
        </div>
      </div>
    </div>
  );
}

export default ProtectedApi;
