import { useState } from "react";

function HttpMethods({ formData, setFormData }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mb-6">
      <label className="text-xs uppercase tracking-widest text-zinc-300 block mb-2">
        HTTP Method
      </label>

      <div className="relative">
        {/* Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-left text-zinc-100 flex items-center justify-between transition-colors"
        >
          <span>
            {formData.request.method === "ALL" ? "All Methods" : formData.request.method}
          </span>

          <svg
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
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
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }`}
        >
          {["ALL", "GET", "POST", "PUT", "PATCH", "DELETE"].map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => {
                setFormData((prev) => ({
                  ...prev,
                  request: {
                    ...prev.request,
                    method: method,
                  },
                }));
                setIsOpen(false);
              }}
              className="w-full text-left px-4 py-2 text-zinc-300 hover:bg-zinc-900 transition-colors"
            >
              {method === "ALL" ? "All Methods" : method}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HttpMethods;
