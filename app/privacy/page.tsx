import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Alphabase®",
  description:
    "Learn how Alphabase® processes personal information across our platform, services, and website.",
};

const POLICY_VERSION = "Version 1";
const EFFECTIVE_FROM = "January 28, 2026";

const GOOGLE_API_DISCLOSURE =
  "Alphabase®’s use of information received from Google APIs will adhere to Google API Services User Data Policy, including the Limited Use requirements.";

const TABLE_OF_CONTENTS = [
  {
    id: "overview",
    label: "Overview",
  },
  { id: "scope-of-this-policy", label: "Scope of This Policy" },
  {
    id: "contributor-database",
    label: "Contributor Database & Privacy Center",
  },
  { id: "information-we-process", label: "Information We Process" },
  {
    id: "usage-information",
    label: "Usage Information (Cookies & Similar Technologies)",
  },
  { id: "marketing-sales-activities", label: "Marketing & Sales Activities" },
  { id: "how-we-disclose-information", label: "How We Disclose Information" },
  { id: "advertising-opt-out", label: "Advertising & Opt-Out" },
  { id: "privacy-rights-choices", label: "Privacy Rights & Choices" },
  { id: "data-security", label: "Data Security" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "childrens-privacy", label: "Children’s Privacy" },
  { id: "european-territories", label: "European Territories (EEA/CH/UK)" },
  { id: "data-retention", label: "Data Retention" },
  { id: "international-data-transfers", label: "International Data Transfers" },
  {
    id: "google-api-disclosure",
    label: "Google API Disclosure & Limited Use",
  },
  { id: "contact", label: "Contact Information" },
] as const;

export default function PrivacyPolicyPage() {
  return (
    <main>
      <Navbar />
      {/* Hero */}
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-caption text-ink-600 dark:text-white/60">
            <span className="text-ink-600 dark:text-white/60">Legal</span>
            <span className="mx-2 text-ink-500/70 dark:text-white/30">/</span>
            <span className="text-ink-600 dark:text-white/60">
              Privacy Policy
            </span>
          </p>
          <h1 className="mt-3 text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-body-sm text-ink-600 dark:text-white/60">
            {POLICY_VERSION} • Effective from {EFFECTIVE_FROM}
          </p>
          <div className="mt-8 rounded-2xl bg-white/60 ring-1 ring-black/5 px-5 py-4 text-left shadow-soft dark:bg-night-900/40 dark:ring-white/10">
            <p className="text-body-sm text-ink-700 dark:text-white/70 leading-relaxed">
              <span className="font-semibold text-ink-900 dark:text-white">
                Google API Disclosure:
              </span>{" "}
              {GOOGLE_API_DISCLOSURE}
            </p>
          </div>
        </div>
      </Container>

      <div className="border-t border-black/5 dark:border-white/10" />

      {/* Table of contents */}
      <Container className="py-10 md:py-12">
        <div className="grid gap-6 md:grid-cols-[14rem_1fr] md:gap-14">
          <p className="text-caption font-medium text-ink-600 dark:text-white/60">
            Table of Contents
          </p>
          <nav
            aria-label="Table of contents"
            className="w-full max-w-3xl"
          >
            <ol className="grid gap-2 text-body text-ink-700 dark:text-white/70">
              {TABLE_OF_CONTENTS.map((item, index) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="group inline-flex items-start gap-3 rounded-xl py-1 transition-colors hover:text-ink-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200 focus-visible:ring-offset-4 focus-visible:ring-offset-paper dark:hover:text-white dark:focus-visible:ring-brand-100 dark:focus-visible:ring-offset-night-950"
                  >
                    <span className="mt-[2px] w-7 shrink-0 text-ink-600 dark:text-white/50">
                      {index + 1}.
                    </span>
                    <span className="underline underline-offset-4 decoration-transparent group-hover:decoration-brand-200 dark:group-hover:decoration-brand-100">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Container>

      <div className="border-t border-black/5 dark:border-white/10" />

      {/* Policy content */}
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[14rem_1fr] md:gap-14">
          <div className="text-caption text-ink-600 dark:text-white/60">
            <p className="font-medium">Version</p>
            <p className="mt-1 text-ink-700 dark:text-white/70">
              {POLICY_VERSION}
            </p>
            <div className="mt-6">
              <p className="font-medium">Effective from</p>
              <p className="mt-1 text-ink-700 dark:text-white/70">
                {EFFECTIVE_FROM}
              </p>
            </div>
          </div>

          <div className="w-full max-w-3xl text-body text-ink-700 dark:text-white/70 leading-relaxed">
            <div className="space-y-12">
              <section id="overview" className="scroll-mt-32">
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  1. Overview
                </h2>
                <p className="mt-4">
                  Alphabase®, operating as Alphabase.co (“Alphabase®,” “we,” or
                  “us”), offers a comprehensive sales enablement platform
                  (“Platform”) to its customers (“Customers,” “Users,” or
                  “you”).
                </p>
                <p className="mt-4">
                  Our Platform provides data enrichment services to enhance and
                  augment existing data with accurate information and advanced
                  generative AI capabilities to generate precise and relevant
                  sales content.
                </p>
                <p className="mt-4">
                  By utilizing our Platform and Services, Users agree to the
                  terms and conditions outlined in this Privacy Policy.
                </p>
                <p className="mt-4">
                  By accessing our Services, visiting our Website, or
                  participating in Alphabase® marketing activities, you
                  acknowledge and agree to the collection, use, disclosure, and
                  handling of your information as described in this Privacy
                  Policy and our{" "}
                  <a
                    href="/terms"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    Terms of Service
                  </a>
                  .
                </p>
              </section>

              <section
                id="scope-of-this-policy"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  2. Scope of This Policy
                </h2>
                <p className="mt-4">
                  This Privacy Policy outlines how we process personal
                  information, including business contact details and other
                  types of personal data. We handle this data through our
                  Services, whether it is submitted, collected, stored, used,
                  disclosed, inferred, acquired, or otherwise processed in
                  connection with developing, improving, or providing our
                  Services.
                </p>
                <p className="mt-4">
                  The policy also covers data handling practices for visitors to
                  our Website, Alphabase®’s marketing activities, and Customers’
                  use and access to our Services, including how we collect,
                  store, use, disclose, and process personal information during
                  these activities. This includes personal information in
                  Alphabase®’s contributor database (“Database”).
                </p>
              </section>

              <section
                id="contributor-database"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  3. Contributor Database &amp; Privacy Center
                </h2>
                <p className="mt-4">
                  Alphabase® is committed to informing data subjects about their
                  rights regarding our contributor database. This includes our
                  identity and contact information, the opt-out procedure from
                  the Database, and the potential consequences of remaining in
                  it.
                </p>
                <p className="mt-4">
                  Users can opt out of the Database via our Privacy Center,
                  which also facilitates access requests to learn more about
                  collected data. If the Privacy Center is not accessible, data
                  subjects can email us at{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>{" "}
                  for assistance with privacy rights or additional questions.
                </p>
                <p className="mt-4">
                  By choosing to remain in our Database, you consent to being
                  contacted by our Customers for business-to-business sales and
                  marketing activities. While these communications may relate
                  to your professional or employment role, we cannot ensure
                  their relevance or interest to you.
                </p>
              </section>

              <section
                id="information-we-process"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  4. Information We Process
                </h2>
                <p className="mt-4">
                  Residents of California and other states with specific
                  consumer data rights are notified of their rights under the
                  California Consumer Privacy Act of 2018 (“CCPA”) and similar
                  laws. Please{" "}
                  <a
                    href="#state-privacy-rights"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    click here
                  </a>{" "}
                  for more information regarding these rights.
                </p>
                <p className="mt-4">
                  We inform users about the types of information we use to
                  provide our Services, which include data from Customers,
                  third-party sources, and information publicly available on the
                  internet. This includes:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>Personal and business contact information.</li>
                  <li>Payment data.</li>
                  <li>Identity validation information.</li>
                  <li>Account information necessary to access the Services.</li>
                </ul>
              </section>

              <section
                id="usage-information"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  5. Usage Information (Cookies &amp; Similar Technologies)
                </h2>
                <p className="mt-4">
                  Alphabase® utilizes automated means to collect various types
                  of information from visitors to our Website and Users of our
                  Service, referred to as “Usage Information.” This includes
                  cookies (HTTP, HTML5, Flash, and other types of local
                  storage), web server logs, web beacons, pixels, JavaScript,
                  and mobile device data collection functionality.
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>
                    Cookies (HTTP, HTML5, Flash, and other types of local
                    storage).
                  </li>
                  <li>Web server logs.</li>
                  <li>Web beacons and pixels.</li>
                  <li>JavaScript.</li>
                  <li>Mobile device data collection functionality.</li>
                </ul>
                <p className="mt-5">
                  Cookies and similar technologies log information about user
                  interactions with our Website or Service, including page
                  visits, functionality use, and keystroke activities. Users
                  may opt-out of this data collection by contacting us at{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>
                  .
                </p>
              </section>

              <section
                id="marketing-sales-activities"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  6. Marketing &amp; Sales Activities
                </h2>
                <p className="mt-4">
                  We collect personal information through various marketing and
                  sales activities, such as form submissions on our Website,
                  event registrations, email subscriptions, information
                  downloads, survey completions, and both in-person and virtual
                  meetings. This information may include:
                </p>
                <ul className="mt-3 list-disc pl-5 space-y-2">
                  <li>First and last name.</li>
                  <li>Company name.</li>
                  <li>Job title.</li>
                  <li>Work email address.</li>
                  <li>Country and/or state.</li>
                  <li>Phone number.</li>
                  <li>The content of your requests or inquiries.</li>
                </ul>
                <p className="mt-5">
                  We use this information for business, marketing, and training
                  purposes.
                </p>
              </section>

              <section
                id="how-we-disclose-information"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  7. How We Disclose Information
                </h2>
                <p className="mt-4">
                  Alphabase® may disclose Service Information to service
                  providers and partners performing services on our behalf,
                  such as advertising and data platforms, technical
                  infrastructure and support providers, hosting providers,
                  billing and payment processors, and data enhancement
                  platforms.
                </p>
                <p className="mt-4">
                  We may also share information with our Customers as part of
                  our Services, including our contributory database. Usage
                  Information may be disclosed to companies performing services
                  for us, including advertising and data companies, technical
                  infrastructure and support providers, hosting providers, and
                  email service providers.
                </p>
              </section>

              <section
                id="advertising-opt-out"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  8. Advertising &amp; Opt-Out
                </h2>
                <p className="mt-4">
                  Advertising technology providers may use automated
                  technologies to collect information about your online
                  activities over time, which, combined with other data, may be
                  used to deliver targeted advertisements.
                </p>
                <p className="mt-5">
                  You may opt out of receiving tailored advertising by visiting
                  the Network Advertising Initiative’s Consumer Opt-Out page or
                  the Digital Advertising Alliance’s Consumer Opt-Out page.
                  Note that these opt-outs apply only to the browser in which
                  they are set and do not block or delete cookies.
                </p>
              </section>

              <section
                id="privacy-rights-choices"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  9. Privacy Rights &amp; Choices
                </h2>
                <p className="mt-4">
                  Alphabase® provides self-service options for Customers to
                  update their account information and indicate Service
                  preferences.
                </p>
                <p className="mt-4">
                  If you wish to exclude your personal information from our
                  Services and contributor database, submit a request via email
                  to{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>
                  . We will retain your information solely to suppress it from
                  our database. This opt-out request does not remove your data
                  from the databases of third parties who may have already
                  obtained your information.
                </p>
                <p className="mt-4">
                  You may request a report detailing the personal information
                  Alphabase® has collected about you by emailing{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>
                  .
                </p>

                <h3
                  id="state-privacy-rights"
                  className="scroll-mt-32 mt-8 text-body font-semibold text-ink-900 dark:text-white"
                >
                  California and other state privacy rights
                </h3>
                <p className="mt-3">
                  Residents of California and other states with specific
                  consumer data rights are notified of their rights under the
                  California Consumer Privacy Act of 2018 (“CCPA”) and similar
                  laws. For assistance with privacy rights, you may use our
                  Privacy Center (when available) or email us at{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>
                  .
                </p>
              </section>

              <section
                id="data-security"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  10. Data Security
                </h2>
                <p className="mt-4">
                  Alphabase® acknowledges the importance of safeguarding
                  information but cannot guarantee complete security. By
                  providing information to us, you acknowledge that you do so
                  at your own risk.
                </p>
                <p className="mt-4">
                  To minimize risks, use a strong, unique password, maintain
                  confidentiality, update your password periodically, use
                  up-to-date devices, and notify us of any suspected
                  unauthorized activity. We disclaim liability for security
                  breaches except as required by law.
                </p>
              </section>

              <section
                id="third-party-links"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  11. Third-Party Links
                </h2>
                <p className="mt-4">
                  Our Service and Website may contain links to third-party
                  websites, applications, and services. We do not endorse or
                  assume liability for the privacy policies, terms, or data
                  handling practices of third parties. Information provided to
                  or collected by third parties is not governed by our Privacy
                  Policy. Review the privacy policies and terms of these third
                  parties to understand how they will handle your data.
                </p>
              </section>

              <section
                id="childrens-privacy"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  12. Children’s Privacy
                </h2>
                <p className="mt-4">
                  The Service is not intended for use by minors under the age
                  of 16. Alphabase® does not knowingly collect, use, or disclose
                  personal information from individuals under 16 years old.
                </p>
              </section>

              <section
                id="european-territories"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  13. European Territories (EEA/CH/UK)
                </h2>
                <p className="mt-4">
                  If you access our Service or Website from within the European
                  Economic Area, Switzerland, or the United Kingdom
                  (collectively, the “European Territories”), our legal basis
                  for processing your personal data includes your explicit
                  consent, legitimate interest, compliance with legal
                  obligations, or fulfillment of a contract.
                </p>
                <p className="mt-4">
                  European residents have the right to access, rectify, update,
                  delete, object to processing, restrict processing, withdraw
                  consent, and lodge complaints with supervisory authorities.
                </p>
              </section>

              <section
                id="data-retention"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  14. Data Retention
                </h2>
                <p className="mt-4">
                  Alphabase® processes non-sensitive personal data in connection
                  with the Service, retaining it as long as it remains useful
                  for our products. We delete personal data when it is no
                  longer used or upon a data subject’s request unless we have a
                  valid legal reason to retain it. Suppression files are used
                  to ensure exclusion from use if data is obtained again.
                </p>
              </section>

              <section
                id="international-data-transfers"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  15. International Data Transfers
                </h2>
                <p className="mt-4">
                  Our Service and Website are hosted in the United States. By
                  accessing the Service or Website from regions with different
                  data protection laws, you consent to the transfer and
                  processing of your personal information in the United States.
                </p>
                <p className="mt-4">
                  Ensure necessary consents are obtained before providing
                  personal information to us.
                </p>
              </section>

              <section
                id="google-api-disclosure"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  16. Google API Disclosure &amp; Limited Use
                </h2>
                <p className="mt-4">
                  Alphabase®’s use of information received from Google APIs
                  complies with Google’s Limited Use Requirements. We adhere to
                  these terms, including restrictions on the use, disclosure,
                  and retention of user data.
                </p>
                <p className="mt-4">
                  Alphabase® shares user data with third-party AI platforms to
                  generate content for their own use. Specifically, we share
                  user input, conversation history, and publicly available
                  information (such as LinkedIn profile data) with AI platforms
                  like OpenAI and others. This enables features like email
                  personalization, sales campaign generation, recommendations,
                  and drafting other types of sales content based on user
                  input.
                </p>
                <p className="mt-4">
                  We share this data through secure API integration using HTTPS
                  and ensure that these third-party platforms adhere to
                  industry-standard data protection practices. By using our
                  application, you consent to this data sharing.
                </p>
              </section>

              <section
                id="contact"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  17. Contact Information
                </h2>
                <p className="mt-4">
                  For any inquiries, requests, comments, or concerns regarding
                  our Privacy Policy or data processing practices, please
                  direct your correspondence to{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>
                  .
                </p>
                <p className="mt-5">
                  <span className="font-medium text-ink-900 dark:text-white">
                    Mailing Address:
                  </span>
                  <br />
                  Alphabase® Inc
                  <br />
                  2010 El Camino Real #2297, Santa Clara, CA 95050
                </p>
              </section>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </main>
  );
}
