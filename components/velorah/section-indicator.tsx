"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionItem {
  id: string;
  name: string;
}

const SECTIONS: SectionItem[] = [
  { id: "home", name: "Home" },
  { id: "platform", name: "Platform" },
  { id: "modules", name: "Modules" },
  { id: "company", name: "Company" },
  { id: "practice", name: "Practice" },
];

export function SectionIndicator() {
  const [activeId, setActiveId] = React.useState<string>("home");

  // Track scroll position to update current active section
  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = window.scrollY + window.innerHeight * 0.35;

          let currentId = "home";
          for (const section of SECTIONS) {
            const el = document.getElementById(section.id);
            if (el) {
              const top = el.offsetTop;
              const height = el.offsetHeight;
              if (scrollPos >= top && scrollPos < top + height) {
                currentId = section.id;
                break;
              }
            }
          }

          // If scrolled near bottom of page, highlight the last section
          if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 160
          ) {
            currentId = SECTIONS[SECTIONS.length - 1].id;
          }

          setActiveId(currentId);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      aria-label="Section navigation"
      className="fixed right-3 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-4 md:right-5 md:gap-5"
    >
      {/* Background track line */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-3 right-[5px] top-3 w-[1px] bg-white/10"
      />

      {SECTIONS.map((section) => {
        const isActive = section.id === activeId;

        return (
          <button
            key={section.id}
            type="button"
            onClick={() => scrollToSection(section.id)}
            aria-current={isActive ? "location" : undefined}
            aria-label={section.name}
            className="group relative flex items-center justify-end py-1 transition-all focus:outline-none"
          >
            {/* Active luxury badge without numbers */}
            {isActive ? (
              <div
                key={`active-${section.id}`}
                className="liquid-glass mr-3 flex animate-fade-rise items-center rounded-full border border-white/20 bg-black/60 px-3.5 py-1 shadow-2xl backdrop-blur-xl"
              >
                <span className="text-sm font-normal tracking-wide text-white [font-family:var(--font-velorah-serif)]">
                  {section.name}
                </span>
              </div>
            ) : (
              /* Inactive hover tooltip without numbers */
              <div className="pointer-events-none absolute right-full mr-3 translate-x-2 whitespace-nowrap rounded-full border border-white/15 bg-black/85 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 opacity-0 shadow-xl backdrop-blur-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100">
                <span className="[font-family:var(--font-velorah-serif)] text-sm tracking-wide normal-case text-white">
                  {section.name}
                </span>
              </div>
            )}

            {/* Indicator mark (active tall bar vs inactive dot) */}
            <div className="relative flex h-5 w-3 items-center justify-center">
              <span
                className={cn(
                  "rounded-full transition-all duration-300",
                  isActive
                    ? "h-5 w-[3px] bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                    : "h-1.5 w-1.5 bg-white/30 group-hover:scale-150 group-hover:bg-white/70",
                )}
              />
            </div>
          </button>
        );
      })}
    </nav>
  );
}
