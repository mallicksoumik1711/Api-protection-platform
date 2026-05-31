import DocsSidebar from "../../components/Docs/DocsSidebar";
import DashboardHeader from "../../components/DashboardHeader";
import DocsHeaderValues from "../../utils/HelperFunctions/DocsHeaderValues";
import DocsFooter from "../../components/Docs/DocsFooter";
import Welcome from "../../components/Docs/Welcome";

function Docs() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      <DocsSidebar />

      <main className="ml-72 h-screen overflow-y-auto">
        <div className="px-6 py-4">
          <DashboardHeader
            tag={DocsHeaderValues.docsHome.tag}
            title={DocsHeaderValues.docsHome.title}
            description={DocsHeaderValues.docsHome.description}
            features={DocsHeaderValues.docsHome.features}
          />

          <Welcome />
          <DocsFooter />
        </div>
      </main>
    </div>
  );
}

export default Docs;
