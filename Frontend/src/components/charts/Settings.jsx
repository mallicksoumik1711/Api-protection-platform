// charts/Settings.jsx
export default function Settings() {
  return (
    <div className="space-y-10 px-4 py-8">
      {/* Header – normal size */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">
          Settings
        </h2>
        <p className="mt-1.5 text-slate-400">
          Manage your account, security, and dashboard preferences
        </p>
      </div>

      {/* General section */}
      <div className="
        rounded-2xl p-6 lg:p-8
        bg-gradient-to-b from-slate-900/70 to-slate-950/70
        border border-white/8 backdrop-blur-xl
        shadow-xl shadow-black/30
      ">
        <h3 className="text-lg font-semibold text-white mb-6">
          General
        </h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Dark Mode</div>
              <div className="text-sm text-slate-500">Preferred theme for the dashboard</div>
            </div>
            <div className="w-11 h-6 bg-emerald-600/80 rounded-full relative cursor-pointer">
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform translate-x-5 transition-transform" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Email Notifications</div>
              <div className="text-sm text-slate-500">Receive alerts for security events and usage thresholds</div>
            </div>
            <div className="w-11 h-6 bg-emerald-600/80 rounded-full relative cursor-pointer">
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform translate-x-5 transition-transform" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Timezone</div>
              <div className="text-sm text-slate-500">Used for log timestamps and reports</div>
            </div>
            <select className="
              bg-slate-800 border border-slate-700 text-white
              rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            ">
              <option>Asia/Kolkata (IST)</option>
              <option>UTC</option>
              <option>Europe/London</option>
              <option>America/New_York</option>
            </select>
          </div>
        </div>
      </div>

      {/* Security section */}
      <div className="
        rounded-2xl p-6 lg:p-8
        bg-gradient-to-b from-slate-900/70 to-slate-950/70
        border border-white/8 backdrop-blur-xl
        shadow-xl shadow-black/30
      ">
        <h3 className="text-lg font-semibold text-white mb-6">
          Security
        </h3>

        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Two-Factor Authentication</div>
              <div className="text-sm text-slate-500">Add an extra layer of protection</div>
            </div>
            <button className="
              px-5 py-2 rounded-lg text-sm font-medium
              bg-indigo-600 hover:bg-indigo-500 text-white
              transition-colors
            ">
              Enable 2FA
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">API Key Auto-Rotation</div>
              <div className="text-sm text-slate-500">Automatically rotate keys every 90 days</div>
            </div>
            <div className="w-11 h-6 bg-emerald-600/80 rounded-full relative cursor-pointer">
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md transform translate-x-5 transition-transform" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Session Timeout</div>
              <div className="text-sm text-slate-500">Log out after inactivity</div>
            </div>
            <select className="
              bg-slate-800 border border-slate-700 text-white
              rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50
            ">
              <option>30 minutes</option>
              <option>1 hour</option>
              <option>4 hours</option>
              <option>Never</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appearance & Preferences */}
      <div className="
        rounded-2xl p-6 lg:p-8
        bg-gradient-to-b from-slate-900/70 to-slate-950/70
        border border-white/8 backdrop-blur-xl
        shadow-xl shadow-black/30
      ">
        <h3 className="text-lg font-semibold text-white mb-6">
          Appearance & Preferences
        </h3>

        <div className="space-y-6">
          <div>
            <div className="text-white font-medium mb-3">Accent Color</div>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-indigo-400 ring-1 ring-offset-2 ring-offset-slate-950 ring-indigo-500" />
              <div className="w-8 h-8 rounded-full bg-violet-600 border-2 border-violet-400" />
              <div className="w-8 h-8 rounded-full bg-cyan-600 border-2 border-cyan-400" />
              <div className="w-8 h-8 rounded-full bg-emerald-600 border-2 border-emerald-400" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Compact Mode</div>
              <div className="text-sm text-slate-500">Reduce spacing for denser dashboard view</div>
            </div>
            <div className="w-11 h-6 bg-slate-700 rounded-full relative cursor-pointer">
              <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow-md" />
            </div>
          </div>
        </div>
      </div>

      {/* Danger zone – subtle */}
      <div className="
        rounded-2xl p-6 lg:p-8
        bg-gradient-to-b from-slate-900/70 to-slate-950/70
        border border-red-900/30 backdrop-blur-xl
        shadow-xl shadow-black/30
      ">
        <h3 className="text-lg font-semibold text-red-400 mb-6">
          Danger Zone
        </h3>

        <button className="
          px-6 py-3 rounded-xl text-sm font-medium
          bg-red-950/60 hover:bg-red-900/60 text-red-300
          border border-red-900/50 transition-colors
        ">
          Delete Account Permanently
        </button>
      </div>

      {/* Footer note */}
      <div className="text-center text-sm text-slate-600 pt-4">
        Changes are saved automatically • Last updated just now
      </div>
    </div>
  );
}