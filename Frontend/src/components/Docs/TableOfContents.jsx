import { useEffect, useState } from "react";

function TableOfContents({ sections }) {
  const [activeSection, setActiveSection] = useState(sections?.[0]?.id);

  useEffect(() => {
    const container = document.getElementById("docs-scroll-container");

    if (!container) return;

    const handleScroll = () => {
      const marker = 200;

      let current = sections[0]?.id;

      for (const section of sections) {
        const element = document.getElementById(section.id);

        if (!element) continue;

        const rect = element.getBoundingClientRect();

        if (rect.top <= marker) {
          current = section.id;
        }
      }

      // Force last section active when reaching bottom
      const isAtBottom =
        container.scrollTop + container.clientHeight >=
        container.scrollHeight - 10;

      if (isAtBottom) {
        current = sections[sections.length - 1].id;
      }

      setActiveSection(current);
    };

    handleScroll();

    container.addEventListener("scroll", handleScroll);

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);
  return (
    <aside className="hidden xl:block w-56 shrink-0">
      <div className="sticky top-24 pl-6">
        <h3 className="text-sm font-semibold text-zinc-500 mb-4">
          On this page
        </h3>

        <nav className="space-y-3">
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              className={`block text-sm transition-colors ${
                activeSection === section.id
                  ? "text-white"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {section.label}
            </a>
          ))}
        </nav>
      </div>
    </aside>
  );
}

export default TableOfContents;
