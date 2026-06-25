import BaseSkeleton from "../../utils/HelperFunctions/BaseSkeleton";

function DocsSkeleton() {
  return (
    <div className="h-screen overflow-hidden bg-black text-white">
      {/* Sidebar */}
      <aside className="hidden md:block fixed left-0 top-0 h-full w-72 border-r border-zinc-900 p-6">
        <BaseSkeleton className="h-8 w-32 mb-8" />

        <div className="space-y-4">
          {[...Array(8)].map((_, i) => (
            <BaseSkeleton key={i} className="h-4 w-full" />
          ))}
        </div>
      </aside>

      {/* Main */}
      <main className="h-screen overflow-y-auto md:ml-72">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          {/* Header */}
          <BaseSkeleton className="h-5 w-24 mb-4" />
          <BaseSkeleton className="h-10 w-96 mb-4" />
          <BaseSkeleton className="h-4 w-full mb-2" />
          <BaseSkeleton className="h-4 w-4/5 mb-8" />

          {/* Feature badges */}
          <div className="flex gap-2 mb-10">
            <BaseSkeleton className="h-8 w-24" />
            <BaseSkeleton className="h-8 w-28" />
            <BaseSkeleton className="h-8 w-20" />
          </div>

          {/* Content + TOC */}
          <div className="flex flex-col xl:flex-row gap-8 xl:gap-16">
            {/* Main Content */}
            <div className="flex-1 space-y-12">
              {[...Array(4)].map((_, section) => (
                <div key={section}>
                  <BaseSkeleton className="h-8 w-48 mb-4" />

                  <BaseSkeleton className="h-4 w-full mb-3" />
                  <BaseSkeleton className="h-4 w-full mb-3" />
                  <BaseSkeleton className="h-4 w-5/6 mb-3" />
                  <BaseSkeleton className="h-4 w-4/6" />
                </div>
              ))}
            </div>

            {/* TOC */}
            <div className="hidden xl:block w-64 space-y-4">
              <BaseSkeleton className="h-6 w-32 mb-4" />

              {[...Array(6)].map((_, i) => (
                <BaseSkeleton key={i} className="h-4 w-full" />
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-900 mt-16 pt-8 flex justify-between">
            <BaseSkeleton className="h-10 w-32" />
            <BaseSkeleton className="h-10 w-32" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default DocsSkeleton;