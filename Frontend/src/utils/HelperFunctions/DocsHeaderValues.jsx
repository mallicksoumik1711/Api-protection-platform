import {
  BookOpen,
  Shield,
  KeyRound,
  Code2,
  Boxes,
  Globe,
  Terminal,
  Cookie,
  ScanFace,
  Brackets,
  FileText,
  Sparkles,
  PackageCheck,
  Wrench,
  LayersPlus,
  DoorClosedLocked,
  Bolt,
  CheckCheck,
  TrafficCone,
  OctagonPause,
  BookMarked,
  RotateCwSquare,
  Database,
  CircleStop,
  FlaskConical,
  ExternalLink,
  Joystick,
} from "lucide-react";

const DocsHeaderValues = {
  docsHome: {
    tag: "Documentation",
    title: "Developer Docs",
    description:
      "Explore guides, API references, integrations, authentication, SDKs, and deployment workflows to integrate BOUNCER into your applications quickly and securely.",
    features: [
      {
        icon: BookOpen,
        label: "Integration Guides",
        color: "text-sky-400",
      },
      {
        icon: Shield,
        label: "Security Best Practices",
        color: "text-emerald-400",
      },
      {
        icon: PackageCheck,
        label: "Production Ready",
        color: "text-violet-400",
      },
    ],
  },
  docsQuickStart: {
    tag: "Documentation",
    title: "Quick Start",
    description:
      "Get started quickly with BOUNCER by following our step-by-step guides, setting up your environment, and understanding the core concepts.",
    features: [
      {
        icon: OctagonPause,
        label: "Guideline Documentation",
        color: "text-amber-400",
      },
      {
        icon: BookMarked,
        label: "Recommended Practices",
        color: "text-green-400",
      },
      {
        icon: RotateCwSquare,
        label: "Implementation Ready",
        color: "text-purple-400",
      },
    ],
  },
  docsHowBouncerWorks: {
    tag: "Documentation",
    title: "How Bouncer Works",
    description:
      "Understand the internal architecture, Redis rate limiting, and frequently encountered status codes in BOUNCER.",
    features: [
      {
        icon: Database,
        label: "Internal architecture",
        color: "text-blue-400",
      },
      {
        icon: CircleStop,
        label: "Redis Rate Limiting",
        color: "text-red-400",
      },
      {
        icon: Code2,
        label: "Frequently Encountered Status Codes",
        color: "text-green-400",
      },
    ],
  },
  docsIntegrationOverview: {
    tag: "Integration Guide",
    title: "Integration Overview",
    description:
      "Learn how to connect Bouncer with your application to protect APIs, validate requests, enforce rate limits, and manage authentication without modifying your existing business logic.",
    features: [
      {
        icon: BookOpen,
        label: "Integration Guides",
        color: "text-sky-400",
      },
      {
        icon: Shield,
        label: "Security Best Practices",
        color: "text-emerald-400",
      },
      {
        icon: PackageCheck,
        label: "Production Ready",
        color: "text-violet-400",
      },
    ],
  },
  docsFrontendIntegration: {
    tag: "Integration Guide",
    title: "Frontend Integration",
    description:
      "Learn how to integrate your frontend application with a backend secured by Bouncer, control access to protected pages, handle authentication-aware requests.",
    features: [
      {
        icon: Cookie,
        label: "Cookies & Tokens",
        color: "text-emerald-400",
      },
      {
        icon: ScanFace,
        label: "Authenticated Requests",
        color: "text-violet-400",
      },
      {
        icon: Brackets,
        label: "Token Override",
        color: "text-sky-400",
      },
    ],
  },
  docsBackendIntegration: {
    tag: "Integration Guide",
    title: "Backend Integration",
    description:
      "Learn how to connect your backend application with Bouncer, generate authentication tokens, protect routes, and enforce security policies using centralized middleware.",
    features: [
      {
        icon: Wrench,
        label: "Middleware Setup",
        color: "text-slate-400",
      },
      {
        icon: LayersPlus,
        label: "Token Creation",
        color: "text-blue-400",
      },
      {
        icon: DoorClosedLocked,
        label: "Gateway Authority",
        color: "text-green-400",
      },
    ],
  },
  docsMiddlewarePlacement: {
    tag: "Integration Guide",
    title: "Middleware Placement",
    description:
      "Learn how to properly place Bouncer middleware in your backend application to ensure all incoming requests are validated before reaching your route handlers.",
    features: [
      {
        icon: Bolt,
        label: "Configuration Guidelines",
        color: "text-sky-400",
      },
      {
        icon: CheckCheck,
        label: "Enable Validation",
        color: "text-emerald-400",
      },
      {
        icon: TrafficCone,
        label: "Request Control",
        color: "text-orange-400",
      },
    ],
  },
  docsTestingIntegration: {
    tag: "Integration Guide",
    title: "Testing Integration",
    description:
      "Verify how to test your integration with Bouncer, including rate limits, API key validation, and expected responses.",
    features: [
      {
        icon: FlaskConical,
        label: "Testing Guidelines",
        color: "text-emerald-400",
      },
      {
        icon: ExternalLink,
        label: "Expected Behavior",
        color: "text-purple-400",
      },
      {
        icon: Joystick,
        label: "Request Control",
        color: "text-orange-400",
      },
    ],
  },
};

export default DocsHeaderValues;
