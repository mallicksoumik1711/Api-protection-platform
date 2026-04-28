import BaseSkeleton from "../../utils/HelperFunctions/BaseSkeleton";

export default function ApiKeysLimitsSkeleton() {
  return (
    <div className="flex flex-col bg-zinc-950 border border-zinc-900 rounded-l p-4 sm:p-6">
      
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <BaseSkeleton className="h-5 w-5 rounded-full" />
        <BaseSkeleton className="h-5 w-28 sm:w-40" />
      </div>

      {/* Description */}
      <BaseSkeleton className="h-4 w-full sm:w-80 mb-6" />

      {/* Cards */}
      <div className="space-y-4 pr-2 max-h-[50vh] sm:max-h-[40vh] overflow-y-auto">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="border border-zinc-900 rounded-md p-3 sm:p-4 bg-black"
          >
            {/* Top Row */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
              <BaseSkeleton className="h-4 w-24 sm:w-32" />
              <BaseSkeleton className="h-5 w-16 rounded-full" />
            </div>

            {/* Usage Text */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-1 mb-2">
              <BaseSkeleton className="h-3 w-20 sm:w-28" />
              <BaseSkeleton className="h-3 w-12 sm:w-16" />
            </div>

            {/* Progress Bar */}
            <BaseSkeleton className="h-2 w-full rounded-full" />

            {/* Expiry */}
            <BaseSkeleton className="h-3 w-28 sm:w-40 mt-3" />
          </div>
        ))}
      </div>

    </div>
  );
}