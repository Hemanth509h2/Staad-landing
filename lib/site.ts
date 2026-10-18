/**
 * Where every "Get Started" button sends people — the Staad sign-up form. Kept
 * here so the hero, closing CTA, navbar and page CTA bands all point at one
 * place.
 */
export const GET_STARTED_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSdsyStOt-Ep_N8lFdD08QZGJ6-oDz6xF_PDvxiN6B0Nq1puFA/viewform?usp=dialog";

/**
 * Founder contact lines. Shown in the footer and named as the contact on the
 * legal pages, so a changed number only has to be edited here.
 */
export const FOUNDERS = [
  {
    name: "Om Kumar Gupta",
    phone: "+91-8789418998",
    email: "om.cofounder@staad.in",
  },
  {
    name: "Ananya Dixit",
    phone: "+91-8889978781",
    email: "ananya.cofounder@staad.in",
  },
];

/** Date shown as "Last updated" on the privacy policy and terms pages. */
export const LEGAL_UPDATED = "18 October 2026";

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^+\d]/g, "")}`;
}
