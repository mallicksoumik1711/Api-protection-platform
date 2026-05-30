import DocsSidebar from "../components/Docs/DocsSidebar";
import DashboardHeader from "../components/DashboardHeader";
import DocsHeaderValues from "../utils/HelperFunctions/DocsHeaderValues";

function Docs() {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <DocsSidebar />

      <main className="flex-1 overflow-y-auto px-6 py-4">
        <DashboardHeader
          tag={DocsHeaderValues.docsHome.tag}
          title={DocsHeaderValues.docsHome.title}
          description={DocsHeaderValues.docsHome.description}
          features={DocsHeaderValues.docsHome.features}
        />
      </main>
    </div>
  );
}

export default Docs;