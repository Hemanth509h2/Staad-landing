import Link from "next/link";

import { FOUNDERS, telHref } from "@/lib/site";

import { Wordmark } from "./primitives";

const FOOTER_LINKS = [
  { label: "Platform", href: "/#platform" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "Modules", href: "/#modules" },
  { label: "Conditions", href: "/#conditions" },
  { label: "Company", href: "/#company" },
  { label: "Collaborations", href: "/#collaborations" },
];

// Om is still a legal-page contact in FOUNDERS but is not listed in the footer.
const FOOTER_FOUNDERS = FOUNDERS.filter((founder) => founder.name !== "Om Kumar Gupta");

function ColumnLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs uppercase tracking-[0.3em] text-muted-foreground">
      {children}
    </p>
  );
}

export function Footer() {
  return (
    <footer
      id="contact"
      className="mx-auto max-w-7xl scroll-mt-24 border-t border-border bg-[hsl(0,0%,0%)] px-6 py-16 md:px-12"
    >
      <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-3">
        <div>
          <h2 className="text-2xl leading-tight text-foreground [font-family:var(--font-velorah-serif)] sm:text-3xl">
            Therapy that
            <br />
            moves with you.
          </h2>
          <p className="mt-5 text-sm text-muted-foreground">Hyderabad, India.</p>
        </div>

        <nav aria-label="Footer">
          <ColumnLabel>Navigate</ColumnLabel>
          <ul className="flex flex-col items-start gap-3">
            {FOOTER_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <ColumnLabel>Founder</ColumnLabel>
          <ul className="space-y-2">
            {FOOTER_FOUNDERS.map((founder) => (
              <li
                key={founder.name}
                className="-mx-3 flex flex-col rounded-xl px-3 py-2 transition-colors hover:bg-white/5"
              >
                <span className="text-sm text-foreground">{founder.name}</span>
                <a
                  href={telHref(founder.phone)}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {founder.phone}
                </a>
                <a
                  href={`mailto:${founder.email}`}
                  className="text-xs text-muted-foreground transition-colors hover:text-foreground"
                >
                  {founder.email}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row">
        <Link href="/" aria-label="Staad home">
          <Wordmark className="text-xl" />
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy Policy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
