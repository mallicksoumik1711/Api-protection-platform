function JwtTokenLocation({ formData, setFormData }) {
  return (
    <div>
      <label className="block text-xs font-medium text-zinc-300 mb-2">
        Where should the token be stored?
      </label>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        
        {/* Header */}
        <label className="flex items-start sm:items-center gap-2 cursor-pointer group">
          <input
            type="radio"
            name="tokenType"
            value="header"
            checked={formData.tokenType === "header"}
            onChange={(e) =>
              setFormData({
                ...formData,
                tokenType: e.target.value,
              })
            }
            className="w-4 h-4 accent-emerald-500 cursor-pointer mt-0.5 sm:mt-0"
          />

          <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors leading-relaxed">
            Authorization Header{" "}
            <span className="text-xs text-zinc-500">
              (Bearer)
            </span>
          </span>
        </label>

        {/* Cookie */}
        <label className="flex items-start sm:items-center gap-2 cursor-pointer group">
          <input
            type="radio"
            name="tokenType"
            value="cookie"
            checked={formData.tokenType === "cookie"}
            onChange={(e) =>
              setFormData({
                ...formData,
                tokenType: e.target.value,
              })
            }
            className="w-4 h-4 accent-emerald-500 cursor-pointer mt-0.5 sm:mt-0"
          />

          <span className="text-sm text-zinc-300 group-hover:text-zinc-200 transition-colors leading-relaxed">
            HttpOnly Cookie{" "}
            <span className="text-xs text-emerald-500/70">
              (More Secure)
            </span>
          </span>
        </label>
      </div>

      <p className="mt-1.5 text-xs text-zinc-500 leading-relaxed">
        Cookies are generally safer against XSS attacks.
      </p>
    </div>
  );
}

export default JwtTokenLocation;