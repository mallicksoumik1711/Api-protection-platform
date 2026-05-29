import {
  BookOpen,
  Shield,
  KeyRound,
  Code2,
  Boxes,
  Globe,
  Terminal,
  FileText,
  Sparkles,
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
        icon: Sparkles,
        label: "Production Ready",
        color: "text-violet-400",
      },
    ],
  },

  quickstart: {
    tag: "Quickstart",
    title: "Get Started Quickly",
    description:
      "Set up your first protected API in minutes using our middleware, SDKs, and deployment-ready configurations.",
    features: [
      {
        icon: Terminal,
        label: "CLI Setup",
        color: "text-amber-400",
      },
      {
        icon: Code2,
        label: "Code Examples",
        color: "text-cyan-400",
      },
      {
        icon: Globe,
        label: "Deployment Ready",
        color: "text-pink-400",
      },
    ],
  },

  authentication: {
    tag: "Authentication",
    title: "Authentication & Security",
    description:
      "Protect your APIs using API keys, JWT authentication, secure tokens, and advanced access control mechanisms.",
    features: [
      {
        icon: KeyRound,
        label: "API Key Security",
        color: "text-yellow-400",
      },
      {
        icon: Shield,
        label: "JWT Protection",
        color: "text-green-400",
      },
      {
        icon: Globe,
        label: "Access Control",
        color: "text-violet-400",
      },
    ],
  },

  sdk: {
    tag: "SDKs",
    title: "SDKs & Libraries",
    description:
      "Use official SDKs and libraries for React, Node.js, and Python to integrate BOUNCER faster into your applications.",
    features: [
      {
        icon: Boxes,
        label: "React SDK",
        color: "text-cyan-400",
      },
      {
        icon: Code2,
        label: "Node SDK",
        color: "text-green-400",
      },
      {
        icon: Terminal,
        label: "Python SDK",
        color: "text-yellow-400",
      },
    ],
  },

  apiReference: {
    tag: "API Reference",
    title: "REST API Reference",
    description:
      "Detailed documentation for every endpoint, request structure, authentication requirement, and response format.",
    features: [
      {
        icon: FileText,
        label: "Endpoint Docs",
        color: "text-sky-400",
      },
      {
        icon: Code2,
        label: "Request Examples",
        color: "text-pink-400",
      },
      {
        icon: Shield,
        label: "Secure APIs",
        color: "text-emerald-400",
      },
    ],
  },
};

export default DocsHeaderValues;