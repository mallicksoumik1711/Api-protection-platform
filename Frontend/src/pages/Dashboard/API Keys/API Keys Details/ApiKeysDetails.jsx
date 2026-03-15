import { useState } from "react";
import GetApiKeysList from "./GetApiKeysList";
import GenerateApiKeys from "./GenerateApiKeys";
import ApiKeysLimits from "./ApiKeysLimits";
import {
  Key,
  ShieldCheck,
  RefreshCw,
  AlertTriangle,
  BarChart3,
  Lock,
  KeyRound,
  Layers,
  RotateCw,
} from "lucide-react";

function ApiKeysDetails() {
  const [activeTab, setActiveTab] = useState("list");

  const tabs = [
    { id: "list", label: "Get API Keys" },
    { id: "generate", label: "Generate API Key" },
    { id: "limits", label: "API Key Limits" },
  ];

  const renderTab = () => {
    switch (activeTab) {
      case "list":
        return <GetApiKeysList />;
      case "generate":
        return <GenerateApiKeys />;
      case "limits":
        return <ApiKeysLimits />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen px-6 py-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-3">
          API Keys
        </p>

        <div className="flex items-center justify-between">
          <div className="mb-4">
            <h1 className="text-3xl font-semibold text-white py-2">
              API Keys Management
            </h1>
          </div>

          {/* RIGHT HEADER FEATURES */}
          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                {/* slightly wider gaps for better readability */}
                <div className="flex items-center gap-2">
                  <Key className="w-4 h-4 text-emerald-400" />
                  <span>Secure Key Generation</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-purple-400" />
                  <span>Usage Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-cyan-400" />
                  <span>Least Privilege</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content – two column layout with premium lifecycle path on right */}
        <div className="grid lg:grid-cols-12 gap-8 mt-6">
          {/* Left – Tabs + Content (main area) */}
          <div className="lg:col-span-9">
            <div className="flex border-b border-zinc-800 bg-zinc-900 rounded-lg mb-6 overflow-hidden">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-3 text-sm font-medium whitespace-nowrap transition-all duration-200
      ${index !== tabs.length - 1 ? "border-r border-zinc-800" : ""}
      ${
        activeTab === tab.id
          ? "text-white bg-zinc-800"
          : "text-zinc-400 hover:text-white hover:bg-zinc-800/60"
      }`}
                >
                  {tab.label}

                  {/* Active underline */}
                  {activeTab === tab.id && (
                    <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-400"></span>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div>{renderTab()}</div>
          </div>

          {/* Right sidebar – aligned style like CreateProject.jsx */}
          <div className="hidden lg:block lg:col-span-3 mt-10 lg:mt-0">
            <div className="space-y-6 sticky top-6">
              {/* Quick Stats Card */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                <h3 className="text-sm font-medium text-zinc-200 mb-4">
                  Key Overview
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  {/* Active Keys */}
                  <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-md p-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-400">Active Keys</p>
                      <p className="text-xl font-semibold text-emerald-400 mt-0.5">
                        4
                      </p>
                    </div>

                    <div className="p-2 bg-emerald-500/10 rounded-md">
                      <KeyRound className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Total Keys */}
                  <div className="bg-violet-500/5 border border-violet-500/20 rounded-md p-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-400">Total Keys</p>
                      <p className="text-xl font-semibold text-violet-400 mt-0.5">
                        11
                      </p>
                    </div>

                    <div className="p-2 bg-violet-500/10 rounded-md">
                      <Layers className="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                </div>

                {/* Rotation */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-500">Last rotation</p>
                    <p className="text-sm text-zinc-300 mt-0.5">Feb 28, 2026</p>
                  </div>

                  <div className="p-2 bg-amber-500/10 rounded-md">
                    <RotateCw className="w-4 h-4 text-amber-400" />
                  </div>
                </div>
              </div>

              {/* Security & Best Practices */}
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
                <h3 className="text-sm font-medium text-zinc-200 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Security Essentials
                </h3>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <Lock className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-zinc-300 font-medium">
                        Never expose keys
                      </p>
                      <p className="text-zinc-500">
                        Use env variables & secret managers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <RefreshCw className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-zinc-300 font-medium">
                        Rotate regularly
                      </p>
                      <p className="text-zinc-500">
                        Every 60–90 days recommended
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-zinc-300 font-medium">
                        Revoke immediately
                      </p>
                      <p className="text-zinc-500">
                        If key is suspected compromised
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mini lifecycle hint (compact version) */}
              <div className="bg-zinc-950/60 border border-zinc-800 rounded-lg p-4 text-xs">
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-emerald-400 font-medium">
                    Best practice:
                  </span>{" "}
                  Treat API keys like passwords — rotate, monitor, revoke when
                  not needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiKeysDetails;
