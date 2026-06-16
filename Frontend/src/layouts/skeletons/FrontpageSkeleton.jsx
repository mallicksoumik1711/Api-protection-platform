// FrontpageSkeleton.jsx

function FrontpageSkeleton() {
  return (
    <div className="grid sm:grid-cols-2 gap-4 animate-pulse">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="bg-zinc-950/80 border border-zinc-900 rounded-md p-4"
        >
          {/* Header */}
          <div className="flex justify-between items-start mb-5">
            <div className="flex items-center gap-5">
              <div className="w-5 h-5 rounded bg-zinc-800" />
              <div className="h-4 w-32 bg-zinc-800 rounded" />
            </div>

            <div className="w-5 h-5 rounded bg-zinc-800" />
          </div>

          {/* URL */}
          <div className="h-3 w-48 bg-zinc-800 rounded mb-4" />

          {/* Framework & Environment */}
          <div className="flex justify-between items-center mb-5">
            <div className="flex gap-2">
              <div className="h-5 w-16 bg-zinc-800 rounded" />
              <div className="h-5 w-20 bg-zinc-800 rounded" />
            </div>

            <div className="h-5 w-20 bg-zinc-800 rounded-full" />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="h-3 w-16 bg-zinc-800 rounded" />
            <div className="h-3 w-20 bg-zinc-800 rounded" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default FrontpageSkeleton;