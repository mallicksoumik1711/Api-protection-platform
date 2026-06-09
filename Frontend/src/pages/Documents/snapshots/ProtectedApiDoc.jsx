import DocsSidebar from "../../../components/Docs/DocsSidebar";
import DashboardHeader from "../../../components/DashboardHeader";
import DocsHeaderValues from "../../../utils/HelperFunctions/DocsHeaderValues";
import DocsFooter from "../../../components/Docs/DocsFooter";
import DocsProtectedApi from "../../../components/Docs/docs-snapshots/DocsProtectedApi";

function ProtectedApiDoc() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <DocsSidebar />

      <main
        id="docs-scroll-container"
        className="h-screen overflow-y-auto md:ml-72"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <DashboardHeader
            tag={DocsHeaderValues.docsProtectedApi.tag}
            title={DocsHeaderValues.docsProtectedApi.title}
            description={DocsHeaderValues.docsProtectedApi.description}
            features={DocsHeaderValues.docsProtectedApi.features}
          />

          <DocsProtectedApi />
          <DocsFooter />
        </div>
      </main>
    </div>
  );
}

export default ProtectedApiDoc;
