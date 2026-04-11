import {
  Package,
  Pyramid,
  UserCheck,
  ShieldAlert,
  Link2,
  BotOff,
  Key,
  BarChart3,
  Lock,
  LockKeyhole,
  Monitor,
  ShieldCheck,
  Braces,
  FingerprintPattern,
  Wrench,
  TriangleAlert,
  ChartNoAxesCombinedIcon,
  Bug,
  Cctv,
  ListFilterPlusIcon,
  HandshakeIcon,
  Layers2,
  Star,
  Heart,
  Bookmark,
} from "lucide-react";

const DashboardHeaderValues = {
  frontpage: {
    tag: "Overview",
    title: "View Workspace",
    description:
      "This is your workspace where all your API protection projects will live. Create and manage projects to monitor traffic and keep every request logged and accessible for analysis.",
    features: [
      {
        icon: Package,
        label: "Realtime Monitoring",
        color: "text-sky-400",
      },
      {
        icon: Pyramid,
        label: "Centralized Request Logs",
        color: "text-orange-400",
      },
      {
        icon: UserCheck,
        label: "Enforce Security Rules",
        color: "text-rose-400",
      },
    ],
  },

  setupGuide: {
    tag: "Setup Guide",
    title: "Set your project up",
    description:
      "Set up your project by adding your API, configuring rules, and enabling monitoring to keep everything secure and under control.",
    features: [
      {
        icon: ListFilterPlusIcon,
        label: "Quick Integration",
        color: "text-yellow-400",
      },
      {
        icon: HandshakeIcon,
        label: "Security Rules",
        color: "text-violet-400",
      },
      {
        icon: Layers2,
        label: "Set Protocols",
        color: "text-emerald-400",
      },
    ],
  },

  createProject: {
    tag: "Project Setup",
    title: "New Workspace",
    description:
      "Create a project to start protecting and monitoring your APIs. After creating the project, integrate the middleware into your backend to enable request protection and analytics.",
    features: [
      {
        icon: ShieldAlert,
        label: "Attack Pattern Blocking",
        color: "text-violet-400",
      },
      {
        icon: Link2,
        label: "Analytics & Insights",
        color: "text-amber-400",
      },
      {
        icon: BotOff,
        label: "Bot & Crawler Detection",
        color: "text-cyan-400",
      },
    ],
  },

  apiKeys: {
    tag: "API Keys",
    title: "Manage API Keys",
    description:
      "Generate and manage your API keys to control access to your protected APIs. Monitor usage and enforce security policies for each key.",
    features: [
      {
        icon: Key,
        label: "Secure Key Generation",
        color: "text-emerald-400",
      },
      {
        icon: BarChart3,
        label: "Usage Monitoring",
        color: "text-purple-400",
      },
      {
        icon: Lock,
        label: "Least Privilege",
        color: "text-cyan-400",
      },
    ],
  },

  protectedApi: {
    tag: "Protected API",
    title: "Protected Requests",
    description:
      "Protected APIs are the routes in your backend that are secured using our middleware. Once added, these APIs will automatically apply rate limiting and block malicious traffic.",
    features: [
      {
        icon: LockKeyhole,
        label: "Secure API Routes",
        color: "text-pink-400",
      },
      {
        icon: Monitor,
        label: "Monitor Traffic",
        color: "text-blue-400",
      },
      {
        icon: ShieldCheck,
        label: "Realtime Protection",
        color: "text-emerald-400",
      },
    ],
  },

  jwtSettings: {
    tag: "JWT Settings",
    title: "JWT Authentication Settings",
    description:
      "Configure your JWT authentication settings to secure your API endpoints, protect your routes, set your secret key, choose the signing algorithm, and specify token expiration.",
    features: [
      {
        icon: Braces,
        label: "Token Security",
        color: "text-violet-400",
      },
      {
        icon: FingerprintPattern,
        label: "Authentication Controls",
        color: "text-amber-400",
      },
      {
        icon: Wrench,
        label: "Secret and Algorithm Setup",
        color: "text-cyan-400",
      },
    ],
  },

  rateLimit: {
    tag: "Rate limit",
    title: "Abuse Protection",
    description:
      "Configure rate limits to control the number of requests your APIs can handle. This helps prevent abuse and ensures fair usage across all clients.",
    features: [
      {
        icon: TriangleAlert,
        label: "Rate Limiting",
        color: "text-amber-400",
      },
      {
        icon: FingerprintPattern,
        label: "Bot Detection",
        color: "text-red-400",
      },
      {
        icon: Wrench,
        label: "Attack Prevention",
        color: "text-emerald-400",
      },
    ],
  },

  apiLogs: {
    tag: "API Logs",
    title: "Request Logs",
    description:
      "Create a project to start monitoring and securely storing your API logs. Integrate log collection in your backend to keep all requests safely recorded and easily accessible for analysis.",
    features: [
      {
        icon: ChartNoAxesCombinedIcon,
        label: "Track API usage",
        color: "text-green-400",
      },
      {
        icon: Bug,
        label: "Track Errors",
        color: "text-red-400",
      },
      {
        icon: Cctv,
        label: "Monitor Security",
        color: "text-violet-400",
      },
    ],
  },

  favourites: {
    tag: "Favourites",
    title: "Starred Projects",
    description: "Mark your most important projects to keep them easily accessible. Stay focused, and maintain better control over your workflow with a personalized collection of your favorite builds.",
    features: [
      {
        icon: Star,
        label: "Quick Access",
        color: "text-yellow-400",
      },
      {
        icon: Heart,
        label: "Personalized",
        color: "text-pink-400",
      },
      {
        icon: Bookmark,
        label: "Faster Workflow",
        color: "text-blue-400",
      },
    ],
  },

  integration: {
    tag: "Integration",
    title: "Integrate Your Project",
    description:
      "Create a project to start monitoring and securely storing your API logs. Integrate log collection in your backend to keep all requests safely recorded and easily accessible for analysis.",
    features: [
      {
        icon: ChartNoAxesCombinedIcon,
        label: "Track API usage",
        color: "text-green-400",
      },
      {
        icon: Bug,
        label: "Track Errors",
        color: "text-red-400",
      },
      {
        icon: Cctv,
        label: "Monitor Security",
        color: "text-violet-400",
      },
    ],
  },
};

export default DashboardHeaderValues;
