import { FOUNDERS, LEGAL_UPDATED, telHref } from "@/lib/site";

import { PageHeader } from "./page-sections";
import { PageShell } from "./page-shell";

export type LegalSection = {
  id: string;
  title: string;
  body: React.ReactNode;
};

/**
 * Long-form layout for the privacy policy and terms pages: the serif page
 * header, then a sticky table of contents beside numbered prose sections.
 * Section bodies are plain JSX; the wrapper styles their paragraphs, lists and
 * links so the page files only carry the wording.
 */
export function LegalPage({
  title,
  lede,
  sections,
}: {
  title: string;
  lede: string;
  sections: LegalSection[];
}) {
  return (
    <PageShell
      header={
        <PageHeader
          eyebrow={`Legal · Last updated ${LEGAL_UPDATED}`}
          title={title}
          lede={lede}
        />
      }
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-6 pb-24 md:px-12 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
        <aside className="hidden lg:block">
          <nav aria-label="On this page" className="sticky top-8">
            <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
              On this page
            </p>
            <ol className="space-y-2.5 border-l border-border">
              {sections.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="-ml-px block border-l border-transparent pl-4 text-sm text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="max-w-3xl">
          {sections.map((section, i) => (
            <section
              key={section.id}
              id={section.id}
              className="scroll-mt-8 border-t border-border py-10 first:border-t-0 first:pt-0"
            >
              <h2 className="flex items-baseline gap-4 text-2xl tracking-[-0.5px] text-foreground [font-family:var(--font-velorah-serif)] sm:text-3xl">
                <span className="text-xs tracking-[0.3em] text-muted-foreground [font-family:var(--font-velorah-sans)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {section.title}
              </h2>
              <div className="mt-5 text-[15px] leading-relaxed text-muted-foreground [&_a]:text-foreground [&_a]:underline [&_a]:decoration-white/30 [&_a]:underline-offset-4 hover:[&_a]:decoration-white [&_h3]:mt-6 [&_h3]:text-sm [&_h3]:font-medium [&_h3]:text-foreground [&_li]:mt-2 [&_p]:mt-4 first:[&_p]:mt-0 [&_strong]:font-medium [&_strong]:text-foreground [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:marker:text-white/30">
                {section.body}
              </div>
            </section>
          ))}
        </article>
      </div>
    </PageShell>
  );
}

/** Founder email and phone lines, used as the contact block at the end of each page. */
export function LegalContacts() {
  return (
    <ul>
      {FOUNDERS.map((founder) => (
        <li key={founder.name}>
          <strong>{founder.name}</strong>, Co-founder —{" "}
          <a href={`mailto:${founder.email}`}>{founder.email}</a> ·{" "}
          <a href={telHref(founder.phone)}>{founder.phone}</a>
        </li>
      ))}
    </ul>
  );
}
