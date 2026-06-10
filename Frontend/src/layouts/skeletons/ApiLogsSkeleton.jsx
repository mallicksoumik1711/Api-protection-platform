import BaseSkeleton from "../../utils/HelperFunctions/BaseSkeleton";

function ApiLogsSkeleton() {
  return (
    <div className="bg-black px-4 sm:px-6 py-4">
      {/* Dashboard Header */}
      <div className="max-w-6xl mx-auto">
        {/* Tag */}
        <BaseSkeleton className="h-5 w-24 mb-4" />

        {/* Title */}
        <BaseSkeleton className="h-10 w-72 mb-3" />

        {/* Description */}
        <BaseSkeleton className="h-4 w-full max-w-3xl mb-2" />
        <BaseSkeleton className="h-4 w-5/6 max-w-2xl mb-6" />

        {/* Features */}
        <div className="flex flex-wrap gap-2">
          <BaseSkeleton className="h-8 w-28 rounded-full" />
          <BaseSkeleton className="h-8 w-32 rounded-full" />
          <BaseSkeleton className="h-8 w-24 rounded-full" />
        </div>
      </div>

      {/* Logs Section */}
      <div className="mt-6 max-w-6xl mx-auto">
        {/* Top Bar */}
        <div className="flex items-center justify-between mb-3 mr-6">
          <BaseSkeleton className="h-4 w-40" />

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mr-0 sm:mr-6">
            <BaseSkeleton className="h-6 w-24 rounded-full" />
            <BaseSkeleton className="hidden sm:block h-3 w-28" />
          </div>
        </div>

        {/* Terminal Container */}
        <div
          className="h-96
            bg-gradient-to-b from-black/80 to-zinc-950/90
            border border-zinc-800/70 rounded-lg
            shadow-inner shadow-black/40
            overflow-hidden mr-0 sm:mr-6
          "
        >
          {/* Terminal Header */}
          <div className="bg-zinc-900/70 px-4 py-1.5 border-b border-zinc-800 flex items-center justify-between">
            <BaseSkeleton className="h-3 w-44" />
            <BaseSkeleton className="h-3 w-36" />
          </div>

          {/* Log Rows */}
          <div className="p-4 pb-6 text-xs font-mono max-h-[55vh] overflow-auto">
            {[...Array(17)].map((_, index) => (
              <div
                key={index}
                className="
                  -mx-1 px-2 py-1 rounded
                  flex items-center gap-x-2
                  whitespace-nowrap
                "
              >
                {/* Time */}
                <div className="inline-block w-16 sm:w-20 flex-shrink-0">
                  <BaseSkeleton className="h-3 w-14" />
                </div>

                {/* Status */}
                <BaseSkeleton className="h-3 w-8" />

                {/* Arrow */}
                <div className="mx-2">
                  <BaseSkeleton className="h-3 w-3" />
                </div>

                {/* Method + Path */}
                <BaseSkeleton className="h-3 w-44 sm:w-72" />

                {/* Result */}
                <div className="ml-3">
                  <BaseSkeleton className="h-3 w-24" />
                </div>

                {/* Request ID */}
                <div className="ml-2 sm:ml-4 hidden sm:block">
                  <BaseSkeleton className="h-2.5 w-36" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-2 flex justify-center">
          <BaseSkeleton className="h-3 w-80" />
        </div>
      </div>
    </div>
  );
}

export default ApiLogsSkeleton;
