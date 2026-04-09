import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";

function SetUpGuide() {
  return (
    <div className="bg-black min-h-screen px-6 py-4 text-white">
      <DashboardHeader
        tag={DashboardHeaderValues.setupGuide.tag}
        title={DashboardHeaderValues.setupGuide.title}
        description={DashboardHeaderValues.setupGuide.description}
        features={DashboardHeaderValues.setupGuide.features}
      />
      {/* setup details */}
      <div className="max-w-6xl mx-auto">coming soon</div>
    </div>
  );
}

export default SetUpGuide;
