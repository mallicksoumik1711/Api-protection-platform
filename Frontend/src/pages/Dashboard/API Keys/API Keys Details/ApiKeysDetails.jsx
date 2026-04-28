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
import { getApiKeys, getUsageStats } from "../../../../api/apikey";
import useCountUp from "../../../../utils/HelperFunctions/countKeyStats";
import DashboardHeader from "../../../../components/DashboardHeader";
import DashboardHeaderValues from "../../../../utils/HelperFunctions/DashboardHeaderValues";

function ApiKeysDetails() {
  const [activeTab, setActiveTab] = useState("generate");
  const [apiKeyStatus, setApiKeyStatus] = useState(null);
  const [loadingStatus, setLoadingStatus] = useState(true);
  const [usageStats, setUsageStats] = useState(null);
  const [loadingUsage, setLoadingUsage] = useState(true);

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

  const fetchUsage = async () => {
    try {
      setLoadingUsage(true);
      const data = await getUsageStats();
      setUsageStats(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingUsage(false);
    }
  };

  useEffect(() => {
    fetchUsage();
    showKeyStatus();
  }, []);

  const percentage = usageStats?.limit
    ? Math.min(100, Math.round((usageStats.used / usageStats.limit) * 100))
    : 0;

  // useEffect(() => {
  //   showKeyStatus();
  // }, []);

  return (
    <div className="bg-black min-h-screen flex flex-col px-4 sm:px-6 py-4">
      <div>
        <DashboardHeader
          tag={DashboardHeaderValues.apiKeys.tag}
          title={DashboardHeaderValues.apiKeys.title}
          description={DashboardHeaderValues.apiKeys.description}
          features={DashboardHeaderValues.apiKeys.features}
        />
      </div>

      <div className="max-w-6xl mx-auto flex-1 flex flex-col px-0 sm:pr-6">
        {/* Main content – two column layout with premium lifecycle path on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mt-6 flex-1 mr-0 sm:mr-6">
          {/* Left – Tabs + Content (main area) */}
          <div className="col-span-12 lg:col-span-9 flex flex-col h-fit lg:sticky lg:top-6">
            <div className="flex overflow-x-auto bg-zinc-950 rounded-lg mb-6">
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
            <div className="overflow-y-auto pb-2 custom-scroll scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-900">
              <div>
                {activeTab === "list" && <GetApiKeysList />}
                {activeTab === "generate" && <GenerateApiKeys />}
                {activeTab === "limits" && <ApiKeysLimits />}
              </div>
            </div>

            {/* bottom section */}
            <div className="bg-zinc-950 mt-2.5 rounded-lg p-4 sm:p-5 border border-zinc-900 flex flex-col justify-between">
              <div>
                <h3 className="text-sm text-zinc-300 font-medium">API Usage</h3>
                <p className="text-xs text-zinc-500 mt-1">
                  Current billing cycle
                </p>
              </div>

              <div className="mt-4">
                <div className="flex justify-between text-xs text-zinc-400 mb-1">
                  <span>Requests used</span>
                  <span>
                    {loadingUsage
                      ? "Loading..."
                      : `${usageStats?.used || 0} / ${usageStats?.limit || 100}`}
                  </span>
                </div>

                <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-400 to-green-500 transition-all duration-500"
                    style={{
                      width: loadingUsage ? "0%" : `${percentage}%`,
                    }}
                  ></div>
                </div>
              </div>

              <div className="flex justify-between mt-4 text-xs">
                <span className="text-zinc-500 flex items-center gap-1 justify-center">
                  <div>
                    <Clock className="w-3 h-3" />
                  </div>
                  <div>Resets in 1 day</div>
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
          <div className="hidden lg:block lg:col-span-3 mt-10 lg:mt-0 h-fit lg:sticky lg:top-6">
            <div className="space-y-4 lg:sticky lg:top-6 h-fit">
              {/* Quick Stats Card */}
              <div className="bg-black border border-zinc-900 rounded-lg p-5">
                <h3 className="text-sm font-medium text-zinc-200 mb-4">
                  Key Overview
                </h3>

                <div className="grid grid-cols-2 gap-2 mb-2">
                  {/* Active Keys */}
                  <div className="bg-gradient-to-br from-emerald-500/10 to-transparent border border-emerald-500/30 rounded-md p-3 flex items-center justify-between transition-all duration-300 hover:border-emerald-400/40">
                    <div>
                      <p className="text-xs text-zinc-400">Active Keys</p>
                      <p className="text-xl font-semibold text-emerald-400 mt-0.5">
                        {apiKeyStatus
                          ? apiKeyStatus["Active keys"]
                          : activeKeys}
                      </p>
                    </div>

                    <div className="p-2 bg-emerald-500/10 rounded-md">
                      <KeyRound className="w-4 h-4 text-emerald-400" />
                    </div>
                  </div>

                  {/* Total Keys */}
                  <div className="bg-gradient-to-br from-violet-500/10 to-transparent border border-violet-500/30 rounded-md p-3 flex items-center justify-between transition-all duration-300 hover:border-violet-400/40">
                    <div>
                      <p className="text-xs text-zinc-400">Total Keys</p>
                      <p className="text-xl font-semibold text-violet-400 mt-0.5">
                        {apiKeyStatus ? apiKeyStatus["Total keys"] : totalKeys}
                      </p>
                    </div>

                    <div className="p-2 bg-violet-500/10 rounded-md">
                      <Layers className="w-4 h-4 text-violet-400" />
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-red-500/10 to-transparent text-red-400 border border-red-500/30 rounded-md transition-all duration-300 hover:border-red-400/40">
                  <div className="text-xs px-2 py-1 text-zinc-400">
                    Inactive Keys
                  </div>

                  <div className="flex justify-between px-2 items-center">
                    <div className="text-xl">
                      {apiKeyStatus
                        ? apiKeyStatus["Inactive keys"]
                        : inactiveKeys}
                    </div>

                    <div className="bg-red-500/10 p-2 rounded-md">
                      <PowerOff className="w-4 h-4" />
                    </div>
                  </div>

                  <p className="text-xs text-zinc-600 px-2 py-1">
                    Consider revoking unused keys for better security
                  </p>
                </div>

                {/* Rotation */}
                <div className="mt-3 flex items-center justify-between">
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
                        Every 60-90 days recommended
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
