
// function JwtToggle() {
//   const [isEnabled, setIsEnabled] = useState(true);

//   return (
//     <div className="flex items-center justify-between mb-3 mr-6">
//       <h3 className="text-sm font-medium text-zinc-200">Enable JWT Security</h3>

//       <label className="relative inline-flex items-center cursor-pointer group">
//         <input
//           type="checkbox"
//           className="sr-only peer"
//           checked={isEnabled}
//           onChange={() => setIsEnabled(!isEnabled)}
//         />

//         {/* Track */}
//         <div className="w-12 h-6 bg-zinc-800/80 border border-zinc-700 rounded-full peer transition-all duration-300 peer-checked:bg-emerald-600 "></div>

//         {/* Thumb */}
//         <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-zinc-600 rounded-full shadow-lg transition-all duration-300 peer-checked:translate-x-6 peer-checked:bg-white peer-checked:shadow-emerald-500/30 flex items-center justify-center">
//           <div className="w-2 h-2 bg-emerald-500 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
//         </div>

//         {/* Labels */}
//         <div className="flex items-center gap-2.5 ml-4 text-xs font-medium">
//           <span
//             className={`transition-colors duration-200 ${isEnabled ? "text-emerald-400" : "text-zinc-500"}`}
//           >
//             Enable
//           </span>
//           <span
//             className={`transition-colors duration-200 ${!isEnabled ? "text-zinc-400" : "text-zinc-500"}`}
//           >
//             Disable
//           </span>
//         </div>
//       </label>
//     </div>
//   );
// }

function JwtToggle({ isEnabled, setIsEnabled }) {
  return (
    <div className="flex items-center justify-between mb-3 mr-6">
      <h3 className="text-sm font-medium text-zinc-200">Enable JWT Security</h3>

      <label className="relative inline-flex items-center cursor-pointer group">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={isEnabled}
          onChange={() => setIsEnabled(!isEnabled)}
        />

        <div className="w-12 h-6 bg-zinc-800/80 border border-zinc-700 rounded-full peer transition-all duration-300 peer-checked:bg-emerald-600"></div>

        <div className="absolute left-0.5 top-0.5 w-5 h-5 bg-zinc-600 rounded-full shadow-lg transition-all duration-300 peer-checked:translate-x-6 peer-checked:bg-white peer-checked:shadow-emerald-500/30 flex items-center justify-center">
          <div className="w-2 h-2 bg-emerald-500 rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
        </div>

        <div className="flex items-center gap-2.5 ml-4 text-xs font-medium">
          <span
            className={`transition-colors duration-200 ${isEnabled ? "text-emerald-400" : "text-zinc-500"}`}
          >
            Enable
          </span>
          <span
            className={`transition-colors duration-200 ${!isEnabled ? "text-zinc-400" : "text-zinc-500"}`}
          >
            Disable
          </span>
        </div>
      </label>
    </div>
  );
}

export default JwtToggle;
