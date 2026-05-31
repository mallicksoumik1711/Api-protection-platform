import DocsSidebar from "../../../components/Docs/DocsSidebar";
import DashboardHeader from "../../../components/DashboardHeader";
import DocsHeaderValues from "../../../utils/HelperFunctions/DocsHeaderValues";
import DocsFooter from "../../../components/Docs/DocsFooter";
import IntegrationOverview from "../../../components/Docs/docs-integration/IntegrationOverview";

function IntegrationDoc() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <DocsSidebar />

      <main className="ml-72 h-screen overflow-y-auto">
        <div className="px-6 py-4">
          <DashboardHeader
            tag={DocsHeaderValues.docsIntegrationOverview.tag}
            title={DocsHeaderValues.docsIntegrationOverview.title}
            description={DocsHeaderValues.docsIntegrationOverview.description}
            features={DocsHeaderValues.docsIntegrationOverview.features}
          />

          <IntegrationOverview />
          <DocsFooter />
        </div>
      </main>
    </div>
  );
}

export default IntegrationDoc;
