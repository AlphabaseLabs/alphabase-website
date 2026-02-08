import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CCPA Privacy Policy | Alphabase®",
  description:
    "Supplemental privacy statement for residents of California and other applicable U.S. states.",
};

const EFFECTIVE_DATE = "January 28, 2026";

const TABLE_OF_CONTENTS = [
  { id: "statement", label: "Supplemental Statement" },
  { id: "categories", label: "Categories Collected (12 Months)" },
  { id: "sources", label: "Sources of Personal Information" },
  { id: "purposes", label: "Purposes for Processing" },
  { id: "disclosures", label: "Disclosures to Others" },
  { id: "consumer-rights", label: "Consumer Rights" },
  { id: "how-to-exercise-rights", label: "How to Exercise Rights" },
  { id: "changes", label: "Changes to This Statement" },
  { id: "transparency", label: "Transparency & Metrics" },
  { id: "contact", label: "Contact" },
] as const;

export default function CcpaPrivacyPolicyPage() {
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
              CCPA Privacy Policy
            </span>
          </p>
          <h1 className="mt-3 text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
            CCPA Privacy Policy
          </h1>
          <p className="mt-3 text-body text-ink-700 dark:text-white/70">
            Supplemental Privacy Statement for residents of California and other
            applicable U.S. states.
          </p>
          <p className="mt-4 text-body-sm text-ink-600 dark:text-white/60">
            Effective {EFFECTIVE_DATE}
          </p>
          <div className="mt-8 rounded-2xl bg-white/60 ring-1 ring-black/5 px-5 py-4 text-left shadow-soft dark:bg-night-900/40 dark:ring-white/10">
            <p className="text-body-sm text-ink-700 dark:text-white/70 leading-relaxed">
              This Statement supplements the Alphabase®{" "}
              <a
                href="/privacy"
                className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
              >
                Privacy Policy
              </a>{" "}
              and provides additional disclosures required by applicable U.S.
              state privacy laws.
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
          <nav aria-label="Table of contents" className="w-full max-w-3xl">
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

      {/* Content */}
      <Container className="py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[14rem_1fr] md:gap-14">
          <div className="text-caption text-ink-600 dark:text-white/60">
            <p className="font-medium">Effective</p>
            <p className="mt-1 text-ink-700 dark:text-white/70">
              {EFFECTIVE_DATE}
            </p>
            <div className="mt-6">
              <p className="font-medium">Applies to</p>
              <p className="mt-1 text-ink-700 dark:text-white/70">
                California and other applicable U.S. states
              </p>
            </div>
          </div>

          <div className="w-full max-w-3xl text-body text-ink-700 dark:text-white/70 leading-relaxed">
            <section id="statement" className="scroll-mt-32">
              <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                1. Supplemental Statement
              </h2>
              <p className="mt-4 text-caption font-medium text-ink-600 dark:text-white/60">
                SUPPLEMENTAL PRIVACY STATEMENT FOR RESIDENTS OF CALIFORNIA AND
                OTHER APPLICABLE U.S. STATES
              </p>
              <p className="mt-4">
                Effective {EFFECTIVE_DATE}, this Supplemental Privacy Statement
                (“Statement”) is issued by Alphabase® in accordance with various
                state privacy laws, including the California Consumer Privacy
                Act (CCPA), the Colorado Privacy Act (CPA), the Connecticut
                Personal Data Privacy and Online Monitoring Act (CTDPA), the
                Utah Consumer Privacy Act (UCPA), and the Virginia Consumer Data
                Protection Act (VCDPA) (collectively, “State Privacy Laws”).
              </p>
              <p className="mt-4">
                This Statement supplements the Alphabase® Privacy Policy and
                provides additional information and disclosures required by the
                State Privacy Laws. Terms defined in the State Privacy Laws have
                the same meaning in this Statement and the Alphabase® Privacy
                Policy, and “Personal Information” shall be construed as defined
                under the relevant State Privacy Laws.
              </p>
            </section>

            <div className="mt-12 space-y-12">
              <section
                id="categories"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  2. Categories Collected (Last Twelve Months)
                </h2>
                <p className="mt-4">
                  Alphabase® may have collected various categories of personal
                  information within the last twelve months, including:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>Identifiers.</li>
                  <li>
                    Personal information categories listed in the California
                    Customer Records Statute.
                  </li>
                  <li>Internet activity.</li>
                  <li>Professional or employment-related information.</li>
                  <li>Geolocation data.</li>
                  <li>Commercial information.</li>
                  <li>Sensitive personal information.</li>
                </ul>
              </section>

              <section
                id="sources"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  3. Sources of Personal Information
                </h2>
                <p className="mt-4">
                  Sources of this information include:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>Public records.</li>
                  <li>Direct research.</li>
                  <li>Customer contributions.</li>
                  <li>Third-party vendors.</li>
                  <li>Website interactions.</li>
                  <li>Customer engagements.</li>
                  <li>Vendor acquisitions.</li>
                  <li>Business communications.</li>
                </ul>
              </section>

              <section
                id="purposes"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  4. Purposes for Processing
                </h2>
                <p className="mt-4">
                  Alphabase® collects, discloses, shares, and sells personal
                  information for purposes such as:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>Fulfilling consumer requests.</li>
                  <li>Providing services.</li>
                  <li>Fulfilling contractual obligations.</li>
                  <li>Website improvement.</li>
                  <li>Research and development.</li>
                  <li>Protecting rights and safety.</li>
                  <li>Compliance with legal obligations.</li>
                  <li>Transparency.</li>
                  <li>Business transactions.</li>
                  <li>Service enhancement.</li>
                </ul>
              </section>

              <section
                id="disclosures"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  5. Disclosures to Others
                </h2>
                <p className="mt-4">
                  Alphabase® may disclose personal information to:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>Affiliates and related entities.</li>
                  <li>Service providers and contractors.</li>
                  <li>Authorized users of Alphabase®’s products and services.</li>
                  <li>Alphabase®’s customers and licensees.</li>
                </ul>
              </section>

              <section
                id="consumer-rights"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  6. Consumer Rights
                </h2>
                <p className="mt-4">
                  Consumers have specific rights under applicable State Privacy
                  Laws, including:
                </p>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>
                    The right to opt-out of the sale or sharing of personal
                    information.
                  </li>
                  <li>
                    The right to access specific information and data
                    portability.
                  </li>
                  <li>
                    The right to request deletion of their personal information.
                  </li>
                </ul>
                <p className="mt-5">
                  Alphabase® will respond to requests within designated time
                  frames and will not engage in discriminatory practices
                  against individuals exercising their rights.
                </p>
              </section>

              <section
                id="how-to-exercise-rights"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  7. How to Exercise Rights
                </h2>
                <p className="mt-4">
                  Consumers may exercise these rights by submitting a verifiable
                  consumer request via email or the website, and may designate
                  an authorized agent to act on their behalf.
                </p>
                <p className="mt-4">
                  For privacy inquiries, contact{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>{" "}
                  or{" "}
                  <a
                    href="https://alphabase.co/contact"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    alphabase.co/contact
                  </a>
                  .
                </p>
              </section>

              <section
                id="changes"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  8. Changes to This Statement
                </h2>
                <p className="mt-4">
                  This Privacy Statement may be modified at any time, and
                  consumers are advised to review it regularly for updates.
                </p>
              </section>

              <section
                id="transparency"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  9. Transparency &amp; Metrics
                </h2>
                <p className="mt-4">
                  Alphabase® is committed to transparency and annually discloses
                  metrics regarding consumer rights requests received from
                  California residents, in compliance with the CCPA and
                  California Data Broker Law. During the previous calendar year
                  no individual requested Alphabase® to opt-out, delete, correct
                  or know their information collected.
                </p>
              </section>

              <section
                id="contact"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  10. Contact
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
