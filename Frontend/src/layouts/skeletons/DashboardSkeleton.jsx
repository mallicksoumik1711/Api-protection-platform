import BaseSkeleton from "../../utils/HelperFunctions/BaseSkeleton";

export default function DashboardSkeleton() {
  return (
    <div className="min-h-screen bg-black flex">

      {/* Sidebar */}
      <div className="hidden md:block w-64 border-r border-zinc-800 p-4 space-y-4">
        <BaseSkeleton className="h-8 w-32" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
        <BaseSkeleton className="h-6 w-full" />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 space-y-6">

        {/* Header */}
        <BaseSkeleton className="h-10 w-64" />

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <BaseSkeleton className="h-32 w-full" />
          <BaseSkeleton className="h-32 w-full" />
          <BaseSkeleton className="h-32 w-full" />
          <BaseSkeleton className="h-32 w-full" />
          <BaseSkeleton className="h-32 w-full" />
          <BaseSkeleton className="h-32 w-full" />
        </div>

        {/* Chart */}
        <BaseSkeleton className="h-72 w-full" />

      </div>
    </div>
  );
}