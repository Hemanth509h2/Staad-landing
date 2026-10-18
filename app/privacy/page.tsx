import type { Metadata } from "next";
import Link from "next/link";

import {
  LegalContacts,
  LegalPage,
  type LegalSection,
} from "@/components/velorah/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy — Staad",
  description:
    "How Staad collects, uses, shares and protects personal information, including health information shared during therapy.",
};

const SECTIONS: LegalSection[] = [
  {
    id: "who-we-are",
    title: "Who we are",
    body: (
      <>
        <p>
          Staad (&ldquo;Staad&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) is an
          online therapy platform built in Hyderabad, Telangana, India. Staad
          gives therapists and their clients a shared, interactive workspace
          with real-time therapeutic modules.
        </p>
        <p>
          This policy explains what personal information we collect through
          this website, our sign-up form and the Staad platform, why we collect
          it, and the choices you have. It is written to meet the Digital
          Personal Data Protection Act, 2023 and the Information Technology
          Act, 2000 and its rules.
        </p>
      </>
    ),
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: (
      <>
        <h3>Information you give us</h3>
        <ul>
          <li>
            <strong>Sign-up and enquiries.</strong> When you fill in our
            &ldquo;Get Started&rdquo; form or call us, we receive the details
            you provide — typically your name, email address, phone number,
            whether you are a therapist, client or organisation, and anything
            you write in your message.
          </li>
          <li>
            <strong>Account details.</strong> When you use the platform, we
            hold the details needed to run your account, such as your name,
            contact details, login credentials and, for therapists,
            professional qualifications and registration details.
          </li>
          <li>
            <strong>Session information.</strong> Using Staad for therapy
            involves information about your mental and physical health —
            for example responses to therapeutic modules, session notes,
            assessments and messages between you and your therapist.
          </li>
        </ul>
        <h3>Information collected automatically</h3>
        <p>
          This website does not use advertising or analytics cookies and does
          not run third-party tracking scripts. Like any website, the servers
          that host it and the network that streams its videos receive
          standard technical information when you visit — your IP address,
          browser and device type, and the pages and files requested. This is
          used to deliver the site and keep it secure.
        </p>
      </>
    ),
  },
  {
    id: "health-information",
    title: "Health information",
    body: (
      <>
        <p>
          Health and mental-health information is sensitive, and we treat it
          that way. We only process it with your consent and only to provide
          the service you have asked for.
        </p>
        <ul>
          <li>
            It is visible to you and to the therapist you work with on Staad,
            and to Staad personnel only where strictly needed to operate,
            secure or support the platform.
          </li>
          <li>
            We never sell it, never use it for advertising, and never share it
            with employers, insurers or partner organisations without your
            explicit consent.
          </li>
          <li>
            Your therapist is responsible for the clinical decisions they make
            and for meeting their own professional record-keeping and
            confidentiality obligations.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "How we use information",
    body: (
      <ul>
        <li>To respond to sign-up requests and enquiries, and to onboard you.</li>
        <li>
          To provide the platform: running sessions, delivering therapeutic
          modules and keeping your session history available to you and your
          therapist.
        </li>
        <li>
          To verify therapists&rsquo; credentials before they can see clients.
        </li>
        <li>
          To keep Staad safe and reliable — detecting misuse, fixing faults
          and protecting accounts.
        </li>
        <li>
          To improve Staad, using aggregated or de-identified information
          wherever possible.
        </li>
        <li>To meet our legal obligations and respond to lawful requests.</li>
      </ul>
    ),
  },
  {
    id: "consent",
    title: "Consent and legal basis",
    body: (
      <p>
        We process personal information on the basis of your consent, given
        when you submit the sign-up form or create an account, and for the
        other legitimate uses the Digital Personal Data Protection Act, 2023
        permits, such as complying with law or responding to a medical
        emergency. You can withdraw consent at any time (see{" "}
        <a href="#your-rights">Your rights</a>); withdrawing does not affect
        processing that already took place, but it may mean we can no longer
        provide the service.
      </p>
    ),
  },
  {
    id: "sharing",
    title: "How we share information",
    body: (
      <>
        <p>We do not sell personal information. We share it only:</p>
        <ul>
          <li>
            <strong>With your therapist</strong>, when you choose to work with
            one on Staad.
          </li>
          <li>
            <strong>With service providers</strong> who process it on our
            behalf under contract — including our website and application
            hosting provider (Vercel), Google (which hosts our sign-up form),
            and the content delivery network that streams our videos.
          </li>
          <li>
            <strong>When required by law</strong>, such as a valid court order,
            or where disclosure is necessary to protect someone&rsquo;s life or
            safety.
          </li>
          <li>
            <strong>In a business transfer</strong>, if Staad is merged or
            acquired, in which case this policy will continue to apply to your
            information.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "storage-and-transfers",
    title: "Storage and transfers",
    body: (
      <p>
        Some of our service providers store or process information on servers
        outside India. Where that happens, we transfer it only to countries
        not restricted by the Government of India and with safeguards that
        keep it protected to the standard described in this policy.
      </p>
    ),
  },
  {
    id: "retention",
    title: "How long we keep information",
    body: (
      <p>
        We keep personal information only as long as needed for the purpose
        it was collected for. Sign-up details are kept while we are in
        contact with you about joining Staad. Account and session information
        is kept while your account is active and then deleted or anonymised,
        unless we, or your therapist, are required by law or professional
        rules to keep certain records for longer.
      </p>
    ),
  },
  {
    id: "security",
    title: "Security",
    body: (
      <p>
        We use reasonable security practices to protect personal information,
        including encryption in transit, access controls that limit who can
        see what, and regular review of our systems. No service can guarantee
        perfect security; if a personal data breach affects you, we will
        notify you and the Data Protection Board of India as the law requires.
      </p>
    ),
  },
  {
    id: "your-rights",
    title: "Your rights",
    body: (
      <>
        <p>You can ask us to:</p>
        <ul>
          <li>tell you what personal information we hold about you and how it is used;</li>
          <li>correct, complete or update inaccurate information;</li>
          <li>erase your information, unless we must keep it by law;</li>
          <li>withdraw your consent;</li>
          <li>
            nominate someone to exercise these rights on your behalf if you
            die or become unable to do so.
          </li>
        </ul>
        <p>
          Contact us using the details in{" "}
          <a href="#grievances">Contact and grievances</a>. We will respond
          within a reasonable time and in any case within the period the law
          sets.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    body: (
      <p>
        Staad is intended for adults. A person under 18 may only use Staad
        with the verifiable consent of a parent or lawful guardian, and
        through a therapist who has agreed to work with them. We do not
        track children&rsquo;s behaviour or use their information for
        targeted advertising.
      </p>
    ),
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: (
      <p>
        We may update this policy as Staad changes. We will change the
        &ldquo;Last updated&rdquo; date above and, for significant changes,
        tell account holders before the changes take effect. Please also read
        our <Link href="/terms">Terms &amp; Conditions</Link>.
      </p>
    ),
  },
  {
    id: "grievances",
    title: "Contact and grievances",
    body: (
      <>
        <p>
          For questions about this policy, to exercise your rights, or to
          raise a grievance about how we handle your information, contact our
          founders, who act as Staad&rsquo;s grievance officers:
        </p>
        <LegalContacts />
        <p>
          Staad, Hyderabad, Telangana, India. If you are not satisfied with
          our response, you may complain to the Data Protection Board of
          India.
        </p>
      </>
    ),
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lede="Therapy depends on trust. This is how Staad handles your personal information — what we collect, why, and the control you keep over it."
      sections={SECTIONS}
    />
  );
}
