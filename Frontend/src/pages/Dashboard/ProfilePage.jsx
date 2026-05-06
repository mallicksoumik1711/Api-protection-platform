import {
  ChevronsLeft,
  CircleUserRound,
  Copy,
  CopyCheck,
  Globe,
  NotebookPen,
  SquareMousePointer,
  Stethoscope,
  Unlink2,
  User,
  Workflow,
} from "lucide-react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";

function ProfilePage() {
  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.profilePage.tag}
        title={DashboardHeaderValues.profilePage.title}
        description={DashboardHeaderValues.profilePage.description}
        features={DashboardHeaderValues.profilePage.features}
      />

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6">
        <div className="max-w-4xl mx-auto mt-6 sm:mt-10 space-y-3"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
