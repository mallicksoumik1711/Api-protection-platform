import DashboardHeader from "../../components/DashboardHeader";
import DashboardHeaderValues from "../../utils/HelperFunctions/DashboardHeaderValues";

function Favourites() {
  return (
    <div className="bg-black px-6 py-4">
      <DashboardHeader
        tag={DashboardHeaderValues.favourites.tag}
        title={DashboardHeaderValues.favourites.title}
        description={DashboardHeaderValues.favourites.description}
        features={DashboardHeaderValues.favourites.features}
      />
    </div>
  );
}

export default Favourites;
