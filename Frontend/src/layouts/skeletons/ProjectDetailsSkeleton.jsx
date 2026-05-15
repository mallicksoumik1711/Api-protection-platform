import BaseSkeleton from "../../utils/HelperFunctions/BaseSkeleton";
import { ChevronsLeft } from "lucide-react";

export default function ProjectDetailsSkeleton() {
  return (
    <div className="bg-black min-h-screen text-white px-4 sm:px-6 py-4">
      {/* Header */}
      <div className="mb-6">
        <BaseSkeleton className="h-5 w-24 mb-3" />
        <BaseSkeleton className="h-9 w-72 mb-2" />
        <BaseSkeleton className="h-4 w-full max-w-2xl" />
      </div>

      <div className="max-w-6xl mx-auto pr-0 sm:pr-6">
        {/* Top bar */}
        <div className="flex items-center gap-2 mb-6">
          <ChevronsLeft size={18} className="text-zinc-700" />
          <BaseSkeleton className="h-4 w-40" />
        </div>

        <div className="max-w-4xl mx-auto mt-6 sm:mt-10 space-y-3">
          {/* Cards */}
          {Array.from({ length: 8 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3"
            >
              <div className="flex items-center justify-between gap-3">
                {/* Left */}
                <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                  <BaseSkeleton className="w-9 h-9 rounded-lg" />

                  <div className="min-w-0 space-y-2">
                    <BaseSkeleton className="h-4 w-24" />
                    <BaseSkeleton className="hidden sm:block h-3 w-44" />
                  </div>
                </div>

                {/* Right */}
                <div className="flex items-center gap-3">
                  <BaseSkeleton className="h-4 w-28" />
                  <BaseSkeleton className="w-4 h-4 rounded" />
                </div>
              </div>
            </div>
          ))}

          {/* Section */}
          <div className="flex items-center justify-between pt-4">
            <BaseSkeleton className="h-5 w-52" />
            <BaseSkeleton className="h-4 w-20" />
          </div>

          {/* More cards */}
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className="bg-zinc-950 border border-zinc-900 rounded-md px-3 sm:px-5 py-3"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 sm:gap-4">
                  <BaseSkeleton className="w-9 h-9 rounded-lg" />

                  <div className="space-y-2">
                    <BaseSkeleton className="h-4 w-24" />
                    <BaseSkeleton className="hidden sm:block h-3 w-44" />
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <BaseSkeleton className="h-4 w-24" />
                  <BaseSkeleton className="w-4 h-4 rounded" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}