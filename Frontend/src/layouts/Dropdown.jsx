import { useState } from "react";

function Dropdown({
  label,
  description,
  options = [],
  value,
  onChange,
  optional = false,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-zinc-900 rounded-lg p-5">
      {/* Label */}
      <h2 className="text-white font-medium mb-2">
        {label} {optional && <span className="text-zinc-500">(optional)</span>}
      </h2>

      {/* Description */}
      {description && (
        <p className="text-sm text-zinc-400 mb-4">{description}</p>
      )}

      {/* Dropdown */}
      <div>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full bg-black border border-zinc-900 rounded-md px-3 py-2 text-sm text-left text-zinc-300 flex items-center justify-between"
        >
          <span>{value || "Select option..."}</span>

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

        {/* Smooth animated dropdown */}
        <div
          className={`
            mt-1 bg-black border border-zinc-800 rounded-md overflow-hidden text-sm
            transition-all duration-300 ease-in-out
            ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0 border-0"}
          `}
        >
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => {
                onChange(option);
                setIsOpen(false);
              }}
              className="w-full px-3 py-2 text-left text-zinc-300 hover:bg-zinc-900/70 transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
