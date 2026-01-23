import DashboardOverview from "../../utils/graphs/DashboardOverview";

function RateLimit() {
  return (
      <div>
        {/* OPTIONAL: Keep your existing chart below */}
        <div className="mt-8 rounded-xl p-5 bg-white/[0.015] border border-white/5 backdrop-blur-xl">
          <p className="text-sm text-white/50 mb-4">
            Conversion Rate (Last Year)
          </p>
          <DashboardOverview />
        </div>
      </div>
    );
}

export default RateLimit;   