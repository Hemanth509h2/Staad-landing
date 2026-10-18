import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalContacts,
  LegalPage,
  type LegalSection,
} from "@/components/velorah/legal-page";

export const metadata: Metadata = {
  title: "Terms & Conditions — Staad",
  description:
    "The terms that apply when you use the Staad website and online therapy platform.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Agreeing to these terms",
    body: (
      <p>
        These terms govern your use of the Staad website and the Staad online
        therapy platform (together, &ldquo;Staad&rdquo;). By using Staad, or
        by submitting our sign-up form, you agree to these terms and to our{" "}
        <Link href="/privacy">Privacy Policy</Link>. If you do not agree,
        please do not use Staad.
      </p>
    ),
  },
  {
    id: "about-staad",
    title: "What Staad is",
    body: (
      <>
        <p>
          Staad provides software: an interactive workspace where therapists
          and their clients hold sessions and use real-time therapeutic
          modules. Therapy itself is provided by the therapist, not by Staad.
        </p>
        <p>
          Staad does not diagnose conditions, prescribe treatment or give
          medical advice, and the platform is not a substitute for in-person
          care where that is clinically needed.
        </p>
      </>
    ),
  },
  {
    id: "emergencies",
    title: "Not for emergencies",
    body: (
      <>
        <p>
          <strong>
            Staad is not a crisis or emergency service.
          </strong>{" "}
          If you or someone else is in immediate danger or thinking about
          self-harm, do not wait for a session:
        </p>
        <ul>
          <li>
            call the national emergency number <a href="tel:112">112</a>, or
            go to the nearest hospital;
          </li>
          <li>
            call Tele-MANAS, India&rsquo;s free 24×7 mental health helpline, on{" "}
            <a href="tel:14416">14416</a> or{" "}
            <a href="tel:18008914416">1-800-891-4416</a>.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "eligibility",
    title: "Who can use Staad",
    body: (
      <p>
        You must be at least 18 years old and able to enter a binding
        contract to use Staad on your own. A person under 18 may use Staad
        only with the verifiable consent of a parent or lawful guardian, who
        accepts these terms on their behalf, and with a therapist who has
        agreed to work with them.
      </p>
    ),
  },
  {
    id: "accounts",
    title: "Your account",
    body: (
      <ul>
        <li>Give accurate information and keep it up to date.</li>
        <li>
          Keep your login details confidential; you are responsible for
          activity on your account.
        </li>
        <li>
          Tell us promptly if you think someone else has accessed your
          account.
        </li>
      </ul>
    ),
  },
  {
    id: "therapists",
    title: "Additional terms for therapists",
    body: (
      <>
        <p>If you use Staad to provide therapy, you confirm that you:</p>
        <ul>
          <li>
            hold the qualifications, registration and any licences required to
            practise, and will keep them current;
          </li>
          <li>
            remain solely responsible for your clinical judgement, the care you
            provide and your choice of modules for each client;
          </li>
          <li>
            obtain your clients&rsquo; informed consent, including to the use
            of an online platform, and comply with the Mental Healthcare Act,
            2017 and the ethical rules of your profession;
          </li>
          <li>
            keep client information confidential and use it only to provide
            care.
          </li>
        </ul>
        <p>
          We may ask for proof of your credentials and may refuse or remove
          access if they cannot be verified.
        </p>
      </>
    ),
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: (
      <>
        <p>You agree not to:</p>
        <ul>
          <li>use Staad for anything unlawful, harmful or abusive;</li>
          <li>harass, threaten or impersonate anyone;</li>
          <li>
            record sessions or share another person&rsquo;s information without
            their consent;
          </li>
          <li>
            try to access accounts or data that are not yours, or interfere
            with Staad&rsquo;s security or operation;
          </li>
          <li>
            copy, scrape, reverse-engineer or resell any part of Staad.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: (
      <>
        <p>
          Staad, including its software, therapeutic modules, design, text,
          graphics and the Staad name, belongs to us or our licensors. We give
          you a limited, personal, non-transferable right to use Staad for its
          intended purpose while these terms apply.
        </p>
        <p>
          You keep ownership of the content you add to Staad. You allow us to
          store and process it only as needed to provide the service to you
          and the people you choose to share it with.
        </p>
      </>
    ),
  },
  {
    id: "fees",
    title: "Fees",
    body: (
      <p>
        Where any part of Staad is paid, the price and payment terms will be
        shown to you before you are charged. Fees for therapy sessions are a
        matter between client and therapist unless Staad tells you otherwise
        in writing.
      </p>
    ),
  },
  {
    id: "third-parties",
    title: "Third-party services",
    body: (
      <p>
        Staad relies on, and links to, services run by others — for example,
        our sign-up form is hosted by Google. Those services are governed by
        their own terms and privacy policies, and we are not responsible for
        them.
      </p>
    ),
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: (
      <p>
        We work to keep Staad available, accurate and secure, but it is
        provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo;. To the
        extent the law allows, we do not promise that Staad will be
        uninterrupted or error-free, or that any particular therapeutic
        outcome will be achieved.
      </p>
    ),
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: (
      <p>
        To the extent the law allows, Staad is not liable for indirect or
        consequential loss, or for the advice, acts or omissions of any
        therapist. Our total liability to you for any claim relating to Staad
        is limited to the amount you paid us in the 12 months before the
        claim, or ₹5,000 if you paid nothing. Nothing in these terms limits
        liability that cannot be limited under Indian law.
      </p>
    ),
  },
  {
    id: "indemnity",
    title: "Indemnity",
    body: (
      <p>
        You agree to compensate Staad for losses and reasonable costs arising
        from your breach of these terms or your misuse of Staad, including,
        for therapists, claims arising from the care you provide.
      </p>
    ),
  },
  {
    id: "termination",
    title: "Suspension and termination",
    body: (
      <p>
        You can stop using Staad and ask us to close your account at any
        time. We may suspend or close an account that breaches these terms,
        puts others at risk, or where the law requires it. Where it is safe
        to do so, we will tell you first and give you a chance to retrieve
        your information.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to these terms",
    body: (
      <p>
        We may update these terms as Staad develops. We will change the
        &ldquo;Last updated&rdquo; date above and, for significant changes,
        tell account holders before they take effect. Continuing to use
        Staad after that means you accept the updated terms.
      </p>
    ),
  },
  {
    id: "governing-law",
    title: "Governing law",
    body: (
      <p>
        These terms are governed by the laws of India. Courts in Hyderabad,
        Telangana have exclusive jurisdiction over any dispute arising from
        them, though we will always try to resolve a concern with you
        directly first.
      </p>
    ),
  },
  {
    id: "questions",
    title: "Contact",
    body: (
      <>
        <p>Questions about these terms? Reach our founders directly:</p>
        <LegalContacts />
        <p>Staad, Hyderabad, Telangana, India.</p>
      </>
    ),
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      lede="The ground rules for using Staad — what we provide, what we ask of therapists and clients, and how we handle things if something goes wrong."
      sections={SECTIONS}
    />
  );
}
