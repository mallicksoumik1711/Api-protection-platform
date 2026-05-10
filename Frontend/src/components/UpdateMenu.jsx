import { X } from "lucide-react";
import { useState } from "react";

function UpdateMenu({
  open,
  onClose,
  title,
  description,
  value,
  type = "input",
  options = [],
}) {
  const [inputValue, setInputValue] = useState(value || "");

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
      <div className="w-full max-w-lg bg-zinc-950 border border-zinc-900 rounded-lg shadow-2xl overflow-hidden">
        {/* HEADER */}
        <div className="flex items-start justify-between px-5 py-4 border-b border-zinc-900">
          <div>
            <h2 className="text-base sm:text-lg font-semibold text-white">
              {title}
            </h2>

            <p className="text-xs sm:text-sm text-zinc-500 mt-1">
              {description}
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-zinc-500 hover:text-white transition cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* BODY */}
        <div className="px-5 py-5">
          {/* INPUT */}
          {type === "input" && (
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter value..."
              className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 text-sm text-white outline-none focus:border-zinc-700 transition"
            />
          )}

          {/* TEXTAREA */}
          {type === "textarea" && (
            <textarea
              rows={5}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter description..."
              className="w-full resize-none bg-black border border-zinc-800 rounded-md px-4 py-3 text-sm text-white outline-none focus:border-zinc-700 transition"
            />
          )}

          {/* SELECT */}
          {type === "select" && (
            <select
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full bg-black border border-zinc-800 rounded-md px-4 py-3 text-sm text-white outline-none focus:border-zinc-700 transition"
            >
              {options.map((option, idx) => (
                <option key={idx} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-end gap-3 px-5 py-4 border-t border-zinc-900">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm rounded-md border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition cursor-pointer"
          >
            Cancel
          </button>

          <button className="px-4 py-2 text-sm rounded-md bg-zinc-900 hover:bg-zinc-950 border border-zinc-900 font-medium transition cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default UpdateMenu;
