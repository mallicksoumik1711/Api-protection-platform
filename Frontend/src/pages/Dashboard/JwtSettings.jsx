import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";

import JwtToggle from "../../components/JwtDashboard/JwtToggle";
import JwtSecretKey from "../../components/JwtDashboard/JwtSecretKey";
import JwtExpiry from "../../components/JwtDashboard/JwtExpiry";
import JwtTokenLocation from "../../components/JwtDashboard/JwtTokenLocation";
import JwtAdvancedSettings from "../../components/JwtDashboard/JwtAdvancedSettings";

import { jwtSettings } from "../../api/jwtSettings";

function JwtSettings() {
  const navigate = useNavigate();
  const [isEnabled, setIsEnabled] = useState(true);

  const [formData, setFormData] = useState({
    secretKey: "",
    expiresInValue: "1",
    expiresInUnit: "h",
    tokenType: "cookie",
    tokenName: "authToken",
    algorithm: "HS256", //if no need remove from here
  });

  const projectId = useSelector((state) => state.project.selectedProjectId);

  useEffect(() => {
    if (!projectId) {
      (async () => setIsEnabled(false))();
      toast.error(
        "No project selected. Please select a project to manage JWT settings.",
      );
    }
  }, [projectId]);

  const handleSaveJwtSettings = async () => {
    try {
      const payload = {
        projectId,
        enabled: isEnabled,
        secretKey: formData.secretKey,
        expiresIn: `${formData.expiresInValue}${formData.expiresInUnit}`,
        tokenType: formData.tokenType,
        tokenName: formData.tokenName,
        algorithm: formData.algorithm,
      };

      const response = await jwtSettings(payload);
      toast.success("JWT settings saved successfully!");
      setTimeout(() => {
        navigate(`/project/${projectId}/rate-limit`);
      }, 1000);
      console.log("Saving JWT response:", response);
      console.log("Saving JWT payload:", payload);
    } catch (error) {
      toast.error("Failed to save JWT settings.");
      console.error("Failed to save JWT settings", error);
    }
  };

  return (
    <div className="bg-black px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.jwtSettings.tag}
        title={DashboardHeaderValues.jwtSettings.title}
        description={DashboardHeaderValues.jwtSettings.description}
        features={DashboardHeaderValues.jwtSettings.features}
      />

      <div className="mt-6 max-w-6xl mx-auto">
        {/* Jwt toggle */}
        <JwtToggle isEnabled={isEnabled} setIsEnabled={setIsEnabled} />

        <div
          className={`mt-6 bg-zinc-950/90 border border-zinc-900/80 rounded-lg p-7 space-y-7 shadow-inner mr-6 mb-6 transition-all ${
            !isEnabled ? "opacity-50 pointer-events-none" : "opacity-100"
          }`}
        >
          {/* Secret Key */}
          <JwtSecretKey formData={formData} setFormData={setFormData} />

          {/* expiry */}
          <JwtExpiry formData={formData} setFormData={setFormData} />

          {/* Token Location */}
          <JwtTokenLocation formData={formData} setFormData={setFormData} />

          {/* Cookie Name */}
          {formData.tokenType === "cookie" && (
            <div>
              <label className="block text-xs font-medium text-zinc-300 mb-2">
                Cookie Name
              </label>
              <input
                type="text"
                value={formData.tokenName}
                onChange={(e) =>
                  setFormData({ ...formData, tokenName: e.target.value })
                }
                placeholder="authToken"
                className="w-full bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none"
              />
              <p className="mt-2 text-xs text-zinc-500">
                Recommended: authToken or jwt_token
              </p>
            </div>
          )}

          {/* Advanced Settings */}
          <JwtAdvancedSettings />

          {/* save */}
          <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
            <p className="text-xs text-zinc-500">
              These settings will be used to generate and verify JWT tokens for
              this project.
            </p>

            <button
              type="button"
              onClick={handleSaveJwtSettings}
              className="px-7 py-3 bg-zinc-900 hover:bg-zinc-950/80 border border-zinc-800 text-white text-sm font-semibold rounded-md transition-all cursor-pointer"
            >
              Save Configuration
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JwtSettings;
