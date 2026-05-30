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
};

export default DocsHeaderValues;