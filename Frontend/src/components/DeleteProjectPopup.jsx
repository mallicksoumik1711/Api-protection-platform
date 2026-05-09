import { TriangleAlert, X } from "lucide-react";

function DeleteProjectPopup({ project, onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-2xl p-6 animate-in fade-in zoom-in-95 duration-200">
        {/* HEADER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-2 rounded-md bg-red-500/10">
              <TriangleAlert className="text-red-400" size={18} />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white">
                Delete Project
              </h2>

              <p className="text-sm text-zinc-500">
                This action cannot be undone.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white hover:bg-zinc-800 transition p-2 rounded-md"
          >
            <X size={18} />
          </button>
        </div>

        {/* CONTENT */}
        <div className="mt-6">
          <div className="bg-zinc-900 border border-zinc-800 rounded-md px-4 py-2">
            <p className="text-sm text-zinc-400">
              Are you sure you want to delete
            </p>

            <div className="flex items-center justify-between mt-1">
              <p className="text-white font-medium">{project?.name}</p>
            </div>
          </div>

          <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
            Deleting this project will permanently remove all related
            configurations, analytics, logs, and security settings.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex justify-end gap-3 mt-8">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-md border border-zinc-800 text-zinc-300 hover:bg-zinc-900 transition"
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 transition"
          >
            Delete Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteProjectPopup;
