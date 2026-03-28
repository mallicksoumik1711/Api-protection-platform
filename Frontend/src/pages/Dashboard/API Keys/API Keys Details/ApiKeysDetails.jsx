import { useEffect, useState } from "react";
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
  Clock,
  ArrowRight,
  PowerOff,
} from "lucide-react";
import { getApiKeys } from "../../../../api/apikey";
import useCountUp from "../../../../utils/HelperFunctions/countKeyStats";

function ApiKeysDetails() {
  const [activeTab, setActiveTab] = useState("list");
  const [apiKeyStatus, setApiKeyStatus] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);

  const activeKeys = useCountUp(apiKeyStatus?.["Active keys"], 500);
  const totalKeys = useCountUp(apiKeyStatus?.["Total keys"], 600);
  const inactiveKeys = useCountUp(apiKeyStatus?.["Inactive keys"], 500);

  const tabs = [
    { id: "list", label: "Get API Keys" },
    { id: "generate", label: "Generate API Key" },
    { id: "limits", label: "API Key Limits" },
  ];

  const showKeyStatus = async () => {
    try {
      setLoadingStatus(true);

      // for testing the loader. remove in the production
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const data = await getApiKeys();
      setApiKeyStatus(data);
    } catch (error) {
      console.error("Error fetching API keys:", error);
    } finally {
      setLoadingStatus(false);
    }
  };

  useEffect(() => {
    showKeyStatus();
  }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col px-6 py-4">
      <div className="max-w-6xl mx-auto flex-1 flex flex-col">
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
        <div className="grid lg:grid-cols-12 gap-8 mt-6 flex-1">
          {/* Left – Tabs + Content (main area) */}
          <div className="col-span-12 lg:col-span-9 flex flex-col min-h-0">
            <div className="flex bg-zinc-950 rounded-lg mb-6">
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
      }
           ${index === 0 ? "rounded-l-lg" : ""}
      `}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="">
              <div>
                {activeTab === "list" && <GetApiKeysList />}
                {activeTab === "generate" && <GenerateApiKeys />}
                {activeTab === "limits" && <ApiKeysLimits />}
              </div>
            </div>

            {/* bottom section */}
            <div className="bg-zinc-950 mt-2.5 rounded-lg p-5 border border-zinc-900 flex flex-col justify-between">
              <div>
                <h3 className="text-sm text-zinc-300 font-medium">API Usage</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Current billing cycle
                </p>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-zinc-400 mb-1">
                  <span>Requests used</span>
                  <span>8,420 / 10,000</span>
                </div>

                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-emerald-400 to-green-500 w-[84%]"></div>
                </div>
              </div>

              <div className="flex justify-between mt-4 text-xs">
                <span className="text-zinc-500 flex items-center gap-1 justify-center">
                  <div>
                    <Clock className="w-3 h-3" />
                  </div>
                  <div>Resets in 12 days</div>
                </span>
                <button className="flex items-center justify-center gap-1 text-emerald-400 hover:text-emerald-300">
                  <div>View details</div>
                  <div>
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </button>
              </div>
            </div>
          </div>

          {/* Right sidebar – aligned style like CreateProject.jsx */}
          <div className="hidden lg:block lg:col-span-3 mt-10 lg:mt-0">
            <div className="space-y-4 sticky top-6 h-fit">
              {/* Quick Stats Card */}
              <div className="bg-black border border-zinc-900 rounded-lg p-5">
                <h3 className="text-sm font-medium text-zinc-200 mb-4">
                  Key Overview
                </h3>

                <div className="grid grid-cols-2 gap-4 mb-5">
                  {/* Active Keys */}
                  <div className="bg-emerald-500/20 border border-emerald-500/30 rounded-md p-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-400">Active Keys</p>
                      <p className="text-xl font-semibold text-emerald-400 mt-0.5">
                        {apiKeyStatus
                          ? apiKeyStatus["Active keys"]
                          : activeKeys}
                      </p>
                    </div>

                    <div className="p-2 bg-emerald-500/20 rounded-md">
                      <KeyRound className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Total Keys */}
                  <div className="bg-violet-500/20 border border-violet-500/30 rounded-md p-3 flex items-center justify-between">
                    <div>
                      <p className="text-xs text-zinc-400">Total Keys</p>
                      <p className="text-xl font-semibold text-violet-400 mt-0.5">
                        {apiKeyStatus ? apiKeyStatus["Total keys"] : totalKeys}
                      </p>
                    </div>

                    <div className="p-2 bg-violet-500/20 rounded-md">
                      <Layers className="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/20 text-red-400 border border-red-500/30 rounded-md">
                  <div className="text-xs px-2 py-1 text-zinc-400">
                    Inactive Keys
                  </div>
                  <div className="flex justify-between px-2 items-center">
                    <div className="text-xl">
                      {apiKeyStatus
                        ? apiKeyStatus["Inactive keys"]
                        : inactiveKeys}
                    </div>
                    <div className="bg-red-500/20 p-2 rounded-md">
                      <PowerOff className="w-4 h-4" />
                    </div>
                  </div>
                  <p className="text-xs text-zinc-600 px-2 py-1">
                    Consider revoking unused keys for better security
                  </p>
                </div>

                {/* Rotation */}
                <div className="pt-4 border-t border-zinc-800 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-zinc-500">Data maybe outdated</p>
                    <p className="text-sm text-zinc-300 mt-0.5">
                      Refresh to update
                    </p>
                  </div>

                  <div className="p-2 bg-amber-500/20 rounded-md items-center flex cursor-pointer">
                    <button onClick={showKeyStatus}>
                      <RotateCw
                        className={`w-4 h-4 text-amber-400 cursor-pointer ${
                          loadingStatus ? "animate-spin" : ""
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Security & Best Practices */}
              <div className="bg-black border border-zinc-900 rounded-lg p-5">
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
              <div className="bg-black border border-zinc-900 rounded-lg p-4 text-xs">
                <p className="text-zinc-400 leading-relaxed">
                  <span className="text-emerald-400 font-medium">
                    Best practice:
                  </span>{" "}
                  Treat API keys like passwords rotate, monitor, revoke when not
                  needed.
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
