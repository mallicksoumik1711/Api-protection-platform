import { useState } from "react";
import { LockKeyhole, Monitor, ShieldCheck } from "lucide-react";

import RouteSetup from "../../components/ProtectedRouteDashboard/RouteSetup";
import HttpMethods from "../../components/ProtectedRouteDashboard/HttpMethods";
import NestedRouteToggle from "../../components/ProtectedRouteDashboard/NestedRouteToggle";
import ProtectionRules from "../../components/ProtectedRouteDashboard/ProtectionRules";
import SecurityFeatures from "../../components/ProtectedRouteDashboard/SecurityFeatures";
import RoutePriority from "../../components/ProtectedRouteDashboard/RoutePriority";
import RouteStructure from "../../components/ProtectedRouteDashboard/RouteStructure";
import ConfigureRoute from "../../components/ProtectedRouteDashboard/ConfigureRoute";

function ProtectedApi() {
  const [formData, setFormData] = useState({
    method: "ALL",
    priority: "Normal",
  });
  return (
    <div className="bg-black px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          Protected Apis
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white py-2">
              Protected Requests
            </h1>
          </div>

          {/* RIGHT HEADER FEATURES */}
          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                <div className="flex items-center gap-2">
                  <LockKeyhole className="w-4 h-4 text-pink-400" />
                  <span>Secure API Routes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-4 h-4 text-blue-400" />
                  <span>Monitor Traffic</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Realtime Protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8">
          Protected APIs are the routes in your backend that are secured using
          our middleware. Once added, these APIs will automatically apply rate
          limiting and block malicious traffic.
        </p>
      </div>

      <div className="mt-10 max-w-6xl mx-auto flex justify-between gap-10">
        <div className="h-fit top-6 sticky w-1/2 bg-zinc-950 border border-zinc-800 rounded-lg p-7 shadow-lg">
          <h2 className="font-semibold text-white mb-1">Add Protected Route</h2>
          <p className="text-sm text-zinc-500 mb-8">
            Configure how this specific route should be protected by the
            middleware.
          </p>

          <div className="mb-8">
            {/* Route Setup */}
            <RouteSetup />

            {/* HTTP Method */}
            <HttpMethods formData={formData} setFormData={setFormData} />

            {/* Nested Route Toggle */}
            <NestedRouteToggle />
          </div>

          {/* Protection Rules */}
          <ProtectionRules />

          {/* Security Features */}
          <SecurityFeatures />

          {/* Route Priority */}
          <RoutePriority formData={formData} setFormData={setFormData} />

          {/* FINAL ROUTE PREVIEW */}
          <div className="mb-8 bg-zinc-900 border border-zinc-800 rounded-md px-5 py-4">
            <div className="text-xs uppercase tracking-widest text-zinc-500 mb-1">
              Final Route Preview
            </div>
            <div className="font-mono text-white flex items-center gap-3">
              <span className="text-emerald-400">GET</span>
              <span>/api/users/profile</span>
            </div>
            <div className="mt-1 text-sm text-zinc-400">
              Protection: <span className="text-amber-400">API Key + JWT</span>{" "}
              • Rate Limited • Bots Blocked
            </div>
          </div>

          <button className="w-full bg-zinc-900 border border-zinc-800 hover:bg-zinc-950/50 hover:border-zinc-700 text-white font-semibold py-3.5 rounded-md text-sm flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer">
            <LockKeyhole className="w-4 h-4" />
            Save Protected Route
          </button>
        </div>

        <div className="flex flex-col h-fit sticky top-6 w-1/2">
          {/* route structure static for now */}
          <RouteStructure />

          <div className="bg-black border border-zinc-800 rounded-lg px-7 py-4 shadow-inner mb-5">
            <div className="">
              <label className="text-xs uppercase tracking-widest text-white block mb-4">
                Route Description{" "}
                <span className="text-zinc-500">(optional)</span>
              </label>
              <textarea
                placeholder="Protect user profile and settings endpoints"
                className="w-full bg-black border border-zinc-900 rounded-md px-4 py-3 text-sm text-zinc-300 placeholder-zinc-600 outline-none"
              />
            </div>
          </div>

          {/* route configuration static always */}
          <ConfigureRoute />
        </div>
      </div>
    </div>
  );
}

export default ProtectedApi;
