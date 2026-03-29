import { useState } from "react";
import { Check } from "lucide-react";
import toast from "react-hot-toast";

function JwtSecretKey() {
  const [isSecretGenerated, setIsSecretGenerated] = useState(false);
  const [secretCopied, setSecretCopied] = useState(false);
  const [formData, setFormData] = useState({
    secretKey: "",
    expiresInValue: "1",
    expiresInUnit: "h",
    tokenType: "cookie",
    tokenName: "authToken",
    algorithm: "HS256",
  });

  const handleCopy = async () => {
    if (!formData.secretKey) return;

    try {
      await navigator.clipboard.writeText(formData.secretKey);
      setSecretCopied(true);
      toast.success("Secret key copied to clipboard!");
    } catch (err) {
      toast.error("Failed to copy secret key");
      console.error("Error copying secret key:", err);
    }
  };

  const generateSecretKey = () => {
    const randomSecret = Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");

    setFormData((prev) => ({ ...prev, secretKey: randomSecret }));
    setIsSecretGenerated(true);
    setSecretCopied(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-xs font-medium text-zinc-300">
          JWT Secret Key
        </label>
        <span className="text-xs lowercase text-zinc-500/70">
          Required • Keep it secret
        </span>
      </div>
      <div className="flex gap-3">
        <input
          type="text"
          value={formData.secretKey}
          onChange={(e) =>
            setFormData({ ...formData, secretKey: e.target.value })
          }
          placeholder="e.g. superlongrandomstring12345..."
          className="flex-1 bg-zinc-950 border border-zinc-900 rounded-md px-5 py-3.5 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-all"
        />
        <button
          type="button"
          onClick={isSecretGenerated ? handleCopy : generateSecretKey}
          className="whitespace-nowrap px-6 py-3.5 bg-zinc-900 hover:bg-zinc-950 border border-zinc-800/80 text-white text-xs font-semibold rounded-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          {!isSecretGenerated ? (
            "Generate Secret"
          ) : secretCopied ? (
            <span className="flex items-center gap-2">
              Copied <Check className="w-4 h-4 text-emerald-400" />
            </span>
          ) : (
            "Copy Secret"
          )}
        </button>
      </div>
      <p className="mt-2 text-xs text-zinc-500">
        Used to sign and verify tokens. A strong random secret prevents token
        forgery.
      </p>
    </div>
  );
}

export default JwtSecretKey;
