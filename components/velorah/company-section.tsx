"use client";

import Image from "next/image";

import { PageBackdrop } from "@/components/velorah/page-backdrop";
import { PageHeader, Section } from "@/components/velorah/page-sections";
import { cn } from "@/lib/utils";

const COMPANY_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const FOUNDERS = [
  {
    name: "Ananya Dixit",
    role: "Co-founder",
    body: "Electronics & Communication Engineering student researching technology's role in accessible mental health, and shapes Staad's clinical direction.",
  },
];

type Collaborator = {
  name: string;
  role?: string;
  body: string;
  logo?: string;
  /** Shows a large photo frame instead of the small logo tile. */
  portrait?: boolean;
  photo?: string;
};

type CollaboratorGroup = {
  heading: string;
  members: Collaborator[];
};

const GROUP_COLUMNS: Record<number, string> = {
  1: "",
  2: "sm:grid-cols-2",
};

const COLLABORATOR_GROUPS: CollaboratorGroup[] = [
  {
    heading: "Incubators",
    members: [
      {
        name: "HIIC",
        role: "HITAM Innovation & Incubation Center",
        body: "Staad's incubator — the programme supporting the platform's early build and its route to practitioners.",
        logo: "/partners/hiic.jpg",
      },
      {
        name: "HITAM",
        role: "Hyderabad Institute of Technology and Management",
        body: "The institution Staad grew out of, and its base in Hyderabad.",
        logo: "/partners/hitam.jpg",
      },
    ],
  },
  {
    heading: "Partner organisation",
    members: [
      {
        name: "Skillworld Foundation",
        body: "Working with Staad to bring structured, interactive therapy sessions to the people they support.",
      },
    ],
  },
  {
    heading: "Clinical advisor",
    members: [
      {
        name: "Dr. Sangita Sharad",
        body: "Guides the clinical design of Staad's therapeutic modules and how they are used in session.",
      },
    ],
  },
  {
    heading: "On-board therapist",
    members: [
      // Placeholder: replace with the therapist's name and a line on their work.
      {
        name: "Therapist Name",
        role: "Therapist",
        body: "Worked alongside the team to build Staad, bringing hands-on therapy practice to how sessions run.",
        portrait: true,
        // photo: "/team/therapist.jpg",
      },
    ],
  },
];

function Monogram({ name }: { name: string }) {
  const initials = name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("");

  return (
    <div
      aria-hidden="true"
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border text-lg text-muted-foreground [font-family:var(--font-velorah-serif)]"
    >
      {initials}
    </div>
  );
}

function PortraitFrame({ name, photo }: { name: string; photo?: string }) {
  if (photo) {
    return (
      <div className="relative aspect-[4/5] w-full shrink-0 overflow-hidden rounded-xl sm:w-56">
        <Image
          src={photo}
          alt={name}
          fill
          sizes="(min-width: 640px) 224px, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[4/5] w-full shrink-0 flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/20 text-muted-foreground sm:w-56">
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        className="h-12 w-12"
      >
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      </svg>
      <span className="text-[10px] uppercase tracking-[0.2em]">Photo</span>
    </div>
  );
}

export function CompanySection() {
  return (
    <section id="company" className="relative scroll-mt-12">
      <PageBackdrop videoSrc={COMPANY_VIDEO}>
        <PageHeader
          align="center"
          className="pb-32 pt-24 md:pb-48 md:pt-32"
          eyebrow="Company"
          title={
            <>
              The people
              <br />
              behind Staad.
            </>
          }
          lede="Staad is built in Hyderabad, India, alongside the institutions and clinicians who use it."
        />
      </PageBackdrop>

      <Section eyebrow="Founder" title="Who's building Staad.">
        <div className="grid max-w-xl gap-4">
          {FOUNDERS.map((founder) => (
            <article
              key={founder.name}
              className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-white/25"
            >
              <div>
                <h3 className="text-xl tracking-[-0.5px] text-foreground [font-family:var(--font-velorah-serif)] sm:text-2xl">
                  {founder.name}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  {founder.role}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {founder.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        id="collaborations"
        eyebrow="Collaborations"
        title="Built with people who know the work."
      >
        <div className="space-y-8">
          {COLLABORATOR_GROUPS.map((group) => (
            <div key={group.heading}>
              <h3 className="mb-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                {group.heading}
              </h3>

              <div
                className={cn(
                  "grid gap-3",
                  GROUP_COLUMNS[group.members.length],
                )}
              >
                {group.members.map((collaborator) =>
                  collaborator.portrait ? (
                    <article
                      key={collaborator.name}
                      className="flex h-full flex-col gap-6 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-white/25 sm:flex-row sm:items-center"
                    >
                      <PortraitFrame
                        name={collaborator.name}
                        photo={collaborator.photo}
                      />

                      <div className="min-w-0">
                        <h4 className="text-xl tracking-[-0.5px] text-foreground [font-family:var(--font-velorah-serif)] sm:text-2xl">
                          {collaborator.name}
                        </h4>
                        {collaborator.role ? (
                          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            {collaborator.role}
                          </p>
                        ) : null}
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                          {collaborator.body}
                        </p>
                      </div>
                    </article>
                  ) : (
                    <article
                      key={collaborator.name}
                      className="flex h-full items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-colors hover:border-white/25"
                    >
                      {collaborator.logo ? (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white p-2">
                          <Image
                            src={collaborator.logo}
                            alt={`${collaborator.name} logo`}
                            width={200}
                            height={200}
                            sizes="56px"
                            className="h-full w-full object-contain"
                          />
                        </div>
                      ) : (
                        <Monogram name={collaborator.name} />
                      )}

                      <div className="min-w-0">
                        <h4 className="text-base tracking-[-0.3px] text-foreground [font-family:var(--font-velorah-serif)]">
                          {collaborator.name}
                        </h4>
                        {collaborator.role ? (
                          <p className="mt-0.5 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                            {collaborator.role}
                          </p>
                        ) : null}
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {collaborator.body}
                        </p>
                      </div>
                    </article>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </section>
  );
}
