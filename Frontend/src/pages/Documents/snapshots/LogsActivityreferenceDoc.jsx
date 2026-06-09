import DocsSidebar from "../../../components/Docs/DocsSidebar";
import DashboardHeader from "../../../components/DashboardHeader";
import DocsHeaderValues from "../../../utils/HelperFunctions/DocsHeaderValues";
import DocsFooter from "../../../components/Docs/DocsFooter";
import DocsLogsActivityReference from "../../../components/Docs/docs-snapshots/DocsLogsActivityReference";

function LogsActivityReferenceDoc() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <DocsSidebar />

      <main
        id="docs-scroll-container"
        className="h-screen overflow-y-auto md:ml-72"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <DashboardHeader
            tag={DocsHeaderValues.docsLogsActivityReference.tag}
            title={DocsHeaderValues.docsLogsActivityReference.title}
            description={DocsHeaderValues.docsLogsActivityReference.description}
            features={DocsHeaderValues.docsLogsActivityReference.features}
          />

          <DocsLogsActivityReference />
          <DocsFooter />
        </div>
      </main>
    </div>
  );
}

export default LogsActivityReferenceDoc;
