function FinalRoutePreview({ routes }) {
  const buildRoute = (route) => {
    if (!route) return "";
    const { base, sub, child } = route;
    return `/${base}${sub ? `/${sub}` : ""}${child ? `/${child}` : ""}`;
  };

  const getMethodColor = (method) => {
    switch (method) {
      case "GET":
        return "text-emerald-400";
      case "POST":
        return "text-blue-400";
      case "PUT":
        return "text-yellow-400";
      case "DELETE":
        return "text-red-400";
      case "PATCH":
        return "text-purple-400";
      default:
        return "text-zinc-400";
    }
  };

  return (
    <>
      {routes.length > 0 ? (
        <div className="bg-black border border-zinc-900 rounded-md px-4 py-3 mb-5">
          <div className="text-xs uppercase tracking-widest text-zinc-600 mb-2">
            Final Route Preview
          </div>

          <div className="text-xs font-mono text-zinc-300 space-y-1">
            {routes.map((routeItem, index) => (
              <div
                key={index}
                className="group flex items-center gap-2 overflow-hidden hover:bg-zinc-900/40 px-2 py-1 rounded transition"
              >
                {/* METHOD */}
                <span
                  className={`${getMethodColor(routeItem.request?.method)} font-medium w-14`}
                >
                  {routeItem.request?.method || "ALL"}
                </span>

                {/* ARROW */}
                <span className="text-zinc-600">→</span>

                {/* PATH */}
                <span
                  title={buildRoute(routeItem.route)}
                  className="text-zinc-300 truncate max-w-[40%]"
                >
                  {buildRoute(routeItem.route)}
                </span>

                {/* META INFO */}
                <span className="text-zinc-600 ml-3">
                  • {routeItem.protection?.rules || "None"}
                  {routeItem.security?.rateLimiting?.enabled && " • RL"}
                  {routeItem.security?.botProtection?.enabled && " • BOT"}
                </span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-black mb-5 rounded-lg border border-zinc-900">
          <div className="px-4 py-3 text-sm text-zinc-600 flex justify-center items-center">
            {/* image or icon */}
            <span>Your APIs will be visible here once you add them.</span>
          </div>
        </div>
      )}
    </>
  );
}

export default FinalRoutePreview;
