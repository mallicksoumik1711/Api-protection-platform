import { useState } from "react";
import GetApiKeysList from "./GetApiKeysList";
import GenerateApiKeys from "./GenerateApiKeys";
import ApiKeysLimits from "./ApiKeysLimits";

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
        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          API Keys
        </p>

        <h1 className="text-3xl font-semibold text-white mb-6">
          API Key Management
        </h1>

        {/* Tabs */}
        <div className="flex border-b border-zinc-800 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm border-r border-zinc-800
              ${
                activeTab === tab.id
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-900/40"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div>{renderTab()}</div>

      </div>
    </div>
  );
}

export default ApiKeysDetails;