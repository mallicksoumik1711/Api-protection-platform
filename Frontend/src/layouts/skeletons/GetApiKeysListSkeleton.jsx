import BaseSkeleton from "../../utils/HelperFunctions/BaseSkeleton";

export default function GetApiKeysListSkeleton() {
  return (
    <div className="bg-zinc-950/80 border border-zinc-900/80 rounded-lg flex flex-col min-h-0 p-6 shadow-2xl">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <BaseSkeleton className="h-5 w-40 mb-2" />
          <BaseSkeleton className="h-4 w-56" />
        </div>

        <BaseSkeleton className="h-9 w-9 rounded-md" />
      </div>

      {/* Table Container */}
      <div className="flex-1 min-h-0 border border-zinc-900 rounded-lg overflow-hidden bg-black">
        <div className="overflow-y-auto h-full max-h-[50vh]">
          <table className="w-full text-sm text-left">
            
            {/* Table Head */}
            <thead className="bg-zinc-950 border-b border-zinc-700">
              <tr>
                <th className="px-6 py-4"><BaseSkeleton className="h-4 w-20" /></th>
                <th className="px-6 py-4"><BaseSkeleton className="h-4 w-16" /></th>
                <th className="px-6 py-4"><BaseSkeleton className="h-4 w-20" /></th>
                <th className="px-6 py-4"><BaseSkeleton className="h-4 w-14" /></th>
                <th className="px-6 py-4"><BaseSkeleton className="h-4 w-16" /></th>
                <th className="px-6 py-4 w-24"></th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody className="divide-y divide-zinc-800">
              {[1, 2, 3, 4, 5].map((_, i) => (
                <tr key={i}>
                  
                  {/* Name */}
                  <td className="px-6 py-4">
                    <BaseSkeleton className="h-4 w-32" />
                  </td>

                  {/* Created */}
                  <td className="px-6 py-4">
                    <BaseSkeleton className="h-4 w-24" />
                  </td>

                  {/* Last Used */}
                  <td className="px-6 py-4">
                    <BaseSkeleton className="h-4 w-24" />
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <BaseSkeleton className="h-6 w-16 rounded-full" />
                  </td>

                  {/* Usage */}
                  <td className="px-6 py-4">
                    <div className="mb-2">
                      <BaseSkeleton className="h-4 w-20" />
                    </div>
                    <BaseSkeleton className="h-2 w-full rounded-full" />
                  </td>

                  {/* Revoke Button */}
                  <td className="px-6 py-4 text-right">
                    <BaseSkeleton className="h-4 w-16 ml-auto" />
                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}