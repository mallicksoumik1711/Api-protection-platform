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
};

export default DocsHeaderValues;
