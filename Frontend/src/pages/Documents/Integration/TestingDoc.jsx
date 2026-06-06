import DocsSidebar from "../../../components/Docs/DocsSidebar";
import DashboardHeader from "../../../components/DashboardHeader";
import DocsHeaderValues from "../../../utils/HelperFunctions/DocsHeaderValues";
import DocsFooter from "../../../components/Docs/DocsFooter";
import TestingIntegration from "../../../components/Docs/docs-integration/TestingIntegration";

function TestingDoc() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <DocsSidebar />

      <main
        id="docs-scroll-container"
        className="h-screen overflow-y-auto md:ml-72"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <DashboardHeader
            tag={DocsHeaderValues.docsMiddlewarePlacement.tag}
            title={DocsHeaderValues.docsMiddlewarePlacement.title}
            description={DocsHeaderValues.docsMiddlewarePlacement.description}
            features={DocsHeaderValues.docsMiddlewarePlacement.features}
          />

          <TestingIntegration />
          <DocsFooter />
        </div>
      </main>
    </div>
  );
}

export default TestingDoc;
