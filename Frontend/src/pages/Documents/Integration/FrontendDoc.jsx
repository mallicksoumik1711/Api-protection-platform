import DocsSidebar from "../../../components/Docs/DocsSidebar";
import DashboardHeader from "../../../components/DashboardHeader";
import DocsHeaderValues from "../../../utils/HelperFunctions/DocsHeaderValues";
import DocsFooter from "../../../components/Docs/DocsFooter";
import FrontendIntegration from "../../../components/Docs/docs-integration/FrontendIntegration";

function IntegrationDoc() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <DocsSidebar />

      <main className="h-screen overflow-y-auto md:ml-72">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <DashboardHeader
            tag={DocsHeaderValues.docsIntegrationOverview.tag}
            title={DocsHeaderValues.docsIntegrationOverview.title}
            description={DocsHeaderValues.docsIntegrationOverview.description}
            features={DocsHeaderValues.docsIntegrationOverview.features}
          />

          <FrontendIntegration />
          <DocsFooter />
        </div>
      </main>
    </div>
  );
}

export default IntegrationDoc;
