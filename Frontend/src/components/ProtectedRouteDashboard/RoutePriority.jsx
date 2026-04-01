import { useState } from "react";

function RoutePriority({ formData, setFormData }) {
  const [isPriorityOpen, setIsPriorityOpen] = useState(false);

  return (
    <div className="mb-8">
      <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
        Route Priority
      </label>
      <div className="relative">
        {/* Button */}
        <button
          type="button"
          onClick={() => setIsPriorityOpen(!isPriorityOpen)}
          className="w-full bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-left text-zinc-100 flex items-center justify-between transition-colors"
        >
          <span>
            {formData.priority === "HIGH"
              ? "High"
              : formData.priority === "LOW"
                ? "Low"
                : "Normal"}
          </span>

          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isPriorityOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {/* Dropdown */}
        <div
          className={`absolute left-0 bottom-full mb-1 w-full bg-zinc-950 border border-zinc-800 rounded-md overflow-hidden text-sm transition-all duration-300 ${
            isPriorityOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {["HIGH", "NORMAL", "LOW"].map((priority) => (
            <button
              key={priority}
              type="button"
              onClick={() => {
                setFormData({ ...formData, priority });
                setIsPriorityOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
            >
              {priority === "HIGH"
                ? "High"
                : priority === "LOW"
                  ? "Low"
                  : "Normal"}
            </button>
          ))}
        </div>
      </div>
      <p className="text-xs text-zinc-600 mt-2">
        More specific routes should have higher priority
      </p>
    </div>
  );
}

export default RoutePriority;
