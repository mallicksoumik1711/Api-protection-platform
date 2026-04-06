import {
  Search,
  Grid,
  List,
  Plus,
  MoreHorizontal,
  ChartNoAxesCombinedIcon,
  Bug,
  Cctv,
  Package,
  Pyramid,
  UserCheck,
  HeartMinus,
  Copy,
  Cog,
  Link2,
  ChartSpline,
  Trash2,
  Ghost,
  Package2,
  Box,
  ChevronsUpDown,
} from "lucide-react";

function SetUpGuide() {
  return (
    <div className="bg-black min-h-screen px-6 py-4 text-white">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs py-2 uppercase tracking-widest text-zinc-500 mb-4">
          Setup guide
        </p>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-white py-2">
              Set your project up
            </h1>
          </div>

          <div className="hidden lg:block overflow-hidden">
            <div className="flex whitespace-nowrap text-sm text-zinc-400">
              <div className="flex gap-6 mr-6">
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-sky-400" />
                  <span>Realtime Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Pyramid className="w-4 h-4 text-orange-400" />
                  <span>Centralized Request Logs</span>
                </div>
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-rose-400" />
                  <span>Enforce Security Rules</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p className="text-zinc-400 max-w-2xl mb-8">
          This is your workspace where all your API protection projects will
          live. Create and manage projects to monitor traffic and keep every
          request logged and accessible for analysis.
        </p>
      </div>
      {/* setup details */}
      <div className="max-w-6xl mx-auto">coming soon</div>
    </div>
  );
}

export default SetUpGuide;
