
// function JwtTokenLocation() {
//   const [formData, setFormData] = useState({
//     secretKey: "",
//     expiresInValue: "1",
//     expiresInUnit: "h",
//     tokenType: "cookie",
//     tokenName: "authToken",
//     algorithm: "HS256",
//   });
//   return (
//     <div>
//       <label className="block text-xs font-medium text-zinc-300 mb-2">
//         Where should the token be stored?
//       </label>
//       <div className="flex gap-6">
//         <label className="flex items-center gap-2 cursor-pointer group">
//           <input
//             type="radio"
//             name="tokenType"
//             value="header"
//             checked={formData.tokenType === "header"}
//             onChange={(e) =>
//               setFormData({ ...formData, tokenType: e.target.value })
//             }
//             className="w-4 h-4 accent-emerald-500 cursor-pointer"
//           />
//           <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors">
//             Authorization Header{" "}
//             <span className="text-xs text-zinc-500">(Bearer)</span>
//           </span>
//         </label>
//         <label className="flex items-center gap-2 cursor-pointer group">
//           <input
//             type="radio"
//             name="tokenType"
//             value="cookie"
//             checked={formData.tokenType === "cookie"}
//             onChange={(e) =>
//               setFormData({ ...formData, tokenType: e.target.value })
//             }
//             className="w-4 h-4 accent-emerald-500 cursor-pointer"
//           />
//           <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors">
//             HttpOnly Cookie{" "}
//             <span className="text-xs text-emerald-500/70">(More Secure)</span>
//           </span>
//         </label>
//       </div>
//       <p className="mt-1.5 text-xs text-zinc-500">
//         Cookies are generally safer against XSS attacks.
//       </p>
//     </div>
//   );
// }

function JwtTokenLocation({ formData, setFormData }) {
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-300 mb-2">
        Where should the token be stored?
      </label>

      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="radio"
            name="tokenType"
            value="header"
            checked={formData.tokenType === "header"}
            onChange={(e) =>
              setFormData({ ...formData, tokenType: e.target.value })
            }
            className="w-4 h-4 accent-emerald-500 cursor-pointer"
          />
          <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors">
            Authorization Header{" "}
            <span className="text-xs text-zinc-500">(Bearer)</span>
          </span>
        </label>

        <label className="flex items-center gap-2 cursor-pointer group">
          <input
            type="radio"
            name="tokenType"
            value="cookie"
            checked={formData.tokenType === "cookie"}
            onChange={(e) =>
              setFormData({ ...formData, tokenType: e.target.value })
            }
            className="w-4 h-4 accent-emerald-500 cursor-pointer"
          />
          <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors">
            HttpOnly Cookie{" "}
            <span className="text-xs text-emerald-500/70">(More Secure)</span>
          </span>
        </label>
      </div>

      <p className="mt-1.5 text-xs text-zinc-500">
        Cookies are generally safer against XSS attacks.
      </p>
    </div>
  );
}

export default JwtTokenLocation;
