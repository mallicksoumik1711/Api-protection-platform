import DocsSidebar from "../../../components/Docs/DocsSidebar";
import DashboardHeader from "../../../components/DashboardHeader";
import DocsHeaderValues from "../../../utils/HelperFunctions/DocsHeaderValues";
import DocsFooter from "../../../components/Docs/DocsFooter";
import DocsKeyManagement from "../../../components/Docs/docs-snapshots/DocsKeyManagement";

function KeyManagementDoc() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <DocsSidebar />

      <main
        id="docs-scroll-container"
        className="h-screen overflow-y-auto md:ml-72"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <DashboardHeader
            tag={DocsHeaderValues.docsKeyManagement.tag}
            title={DocsHeaderValues.docsKeyManagement.title}
            description={DocsHeaderValues.docsKeyManagement.description}
            features={DocsHeaderValues.docsKeyManagement.features}
          />

          <DocsKeyManagement />
          <DocsFooter />
        </div>
      </main>
    </div>
  );
}

export default KeyManagementDoc;
