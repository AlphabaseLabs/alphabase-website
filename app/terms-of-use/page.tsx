import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Container } from "@/components/container";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | Alphabase®",
  description:
    "Alphabase® Terms of Use governing access to and use of our Services.",
};

const EFFECTIVE_DATE = "January 28, 2026";

const TABLE_OF_CONTENTS = [
  { id: "acceptance-of-terms", label: "Acceptance of Terms" },
  { id: "use-of-the-services", label: "Use of the Services" },
  { id: "account-registration", label: "Account Registration" },
  { id: "payment-and-subscriptions", label: "Payment and Subscriptions" },
  { id: "intellectual-property", label: "Intellectual Property" },
  { id: "user-content", label: "User Content" },
  { id: "privacy-and-ccpa", label: "Privacy Policy and CCPA Compliance" },
  { id: "termination", label: "Termination" },
  { id: "disclaimer-of-warranties", label: "Disclaimer of Warranties" },
  { id: "limitation-of-liability", label: "Limitation of Liability" },
  { id: "miscellaneous", label: "Miscellaneous" },
  { id: "contact", label: "Contact Information" },
] as const;

export default function TermsOfUsePage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <Container className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-caption text-ink-600 dark:text-white/60">
            <span className="text-ink-600 dark:text-white/60">Legal</span>
            <span className="mx-2 text-ink-500/70 dark:text-white/30">/</span>
            <span className="text-ink-600 dark:text-white/60">Terms of Use</span>
          </p>
          <h1 className="mt-3 text-h2 md:text-h2-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
            Terms of Use
          </h1>
          <p className="mt-4 text-body text-ink-700 dark:text-white/70">
            Terms of Service
          </p>
          <p className="mt-2 text-body-sm text-ink-600 dark:text-white/60">
            Read about something
          </p>
          <p className="mt-6 text-body-sm text-ink-600 dark:text-white/60">
            Effective Date: {EFFECTIVE_DATE}
          </p>
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
            <p className="font-medium">Effective Date</p>
            <p className="mt-1 text-ink-700 dark:text-white/70">
              {EFFECTIVE_DATE}
            </p>
          </div>

          <div className="w-full max-w-3xl text-body text-ink-700 dark:text-white/70 leading-relaxed">
            <div className="space-y-5">
              <p className="text-body-lg text-ink-700 dark:text-white/70">
                Alphabase® Terms of Use
              </p>
              <p>
                Welcome to Alphabase®! These Terms of Use (“Terms”) govern your
                access to and use of our website, services, and products
                (collectively, the “Services”). By accessing or using the
                Services, you agree to comply with and be bound by these Terms.
                If you do not agree with these Terms, please do not use our
                Services.
              </p>
            </div>

            <div className="mt-12 space-y-12">
              <section
                id="acceptance-of-terms"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  1. Acceptance of Terms
                </h2>
                <p className="mt-4">
                  By accessing or using Alphabase®, you acknowledge that you
                  have read, understood, and agree to be bound by these Terms
                  and any additional guidelines, policies, or rules that may be
                  posted in connection with specific sections of the website or
                  Services.
                </p>
              </section>

              <section
                id="use-of-the-services"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  2. Use of the Services
                </h2>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Eligibility:
                    </strong>{" "}
                    You must be at least 18 years old to use our Services.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      License:
                    </strong>{" "}
                    We grant you a limited, non-exclusive, non-transferable
                    license to access and use the Services for personal or
                    internal business purposes, as per the subscription model
                    purchased.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Prohibited Conduct:
                    </strong>{" "}
                    You agree not to misuse the Services, including but not
                    limited to engaging in illegal activities, distributing
                    viruses, or infringing on intellectual property rights.
                  </li>
                </ul>
              </section>

              <section
                id="account-registration"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  3. Account Registration
                </h2>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Registration:
                    </strong>{" "}
                    You may need to create an account to use certain features
                    of the Services. You must provide accurate and complete
                    information during registration and keep your account
                    information up-to-date.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Security:
                    </strong>{" "}
                    You are responsible for maintaining the confidentiality of
                    your account and password and for any activities that occur
                    under your account. You agree to notify us immediately of
                    any unauthorized use of your account.
                  </li>
                </ul>
              </section>

              <section
                id="payment-and-subscriptions"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  4. Payment and Subscriptions
                </h2>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Fees:
                    </strong>{" "}
                    Some features of Alphabase® may require payment. By
                    selecting a paid service, you agree to pay the associated
                    fees and any applicable taxes.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Billing:
                    </strong>{" "}
                    Payments are processed through third-party payment
                    processors. You agree to provide accurate and complete
                    payment information.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Subscription Models:
                    </strong>{" "}
                    Usage limits are determined by the subscription model
                    purchased. The fair use policy applies to all users.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Cancellation:
                    </strong>{" "}
                    You may cancel your subscription at any time, but refunds
                    will not be provided for unused portions of the subscription
                    period.
                  </li>
                </ul>
              </section>

              <section
                id="intellectual-property"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  5. Intellectual Property
                </h2>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Ownership:
                    </strong>{" "}
                    All content, features, and functionality (including but not
                    limited to text, graphics, logos, and software) provided
                    by Alphabase® are the exclusive property of Alphabase® Inc.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Trademarks:
                    </strong>{" "}
                    The Alphabase® name, logo, and all related names and
                    service marks are the property of Alphabase® Inc. You may
                    not use them without our prior written permission.
                  </li>
                </ul>
              </section>

              <section
                id="user-content"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  6. User Content
                </h2>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Responsibility:
                    </strong>{" "}
                    You are responsible for any content you upload, post, or
                    share using the Services. You warrant that you own or have
                    the right to use such content.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      License:
                    </strong>{" "}
                    By submitting content, you grant us a worldwide,
                    non-exclusive, royalty-free license to use, reproduce,
                    modify, and display your content in connection with the
                    Services.
                  </li>
                </ul>
              </section>

              <section
                id="privacy-and-ccpa"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  7. Privacy Policy and CCPA Compliance
                </h2>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Privacy Policy:
                    </strong>{" "}
                    Your use of the Services is also governed by our{" "}
                    <a
                      href="/privacy"
                      className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                    >
                      Privacy Policy
                    </a>
                    . Please review the Privacy Policy carefully to understand
                    how we collect, use, and protect your information.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      CCPA Compliance:
                    </strong>{" "}
                    If you are a California resident, you have specific rights
                    regarding your personal information, as outlined in our{" "}
                    <a
                      href="/privacy-policy-ccpa"
                      className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                    >
                      Supplemental Statement for Privacy
                    </a>
                    , which complies with the California Consumer Privacy Act
                    (CCPA). This statement is also available on our website.
                  </li>
                </ul>
              </section>

              <section
                id="termination"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  8. Termination
                </h2>
                <ul className="mt-4 list-disc pl-5 space-y-2">
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Termination by You:
                    </strong>{" "}
                    You may stop using the Services at any time.
                  </li>
                  <li>
                    <strong className="font-semibold text-ink-900 dark:text-white">
                      Termination by Us:
                    </strong>{" "}
                    We reserve the right to suspend or terminate your access to
                    the Services at our discretion, without notice, for conduct
                    that we believe violates these Terms or is harmful to other
                    users or the business.
                  </li>
                </ul>
              </section>

              <section
                id="disclaimer-of-warranties"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  9. Disclaimer of Warranties
                </h2>
                <p className="mt-4">
                  Company shall use reasonable efforts consistent with
                  prevailing industry standards to maintain the Services in a
                  manner which minimizes errors and interruptions in the
                  Services and shall perform the Implementation Services in a
                  professional and workmanlike manner. Services may be
                  temporarily unavailable for scheduled maintenance or for
                  unscheduled emergency maintenance, either by Company or by
                  third-party providers, or because of other causes beyond
                  Company’s reasonable control, but Company shall use reasonable
                  efforts to provide advance notice in writing or by e-mail of
                  any scheduled service disruption.
                </p>
                <p className="mt-4">
                  HOWEVER, COMPANY DOES NOT WARRANT THAT THE SERVICES WILL BE
                  UNINTERRUPTED OR ERROR FREE; NOR DOES IT MAKE ANY WARRANTY AS
                  TO THE RESULTS THAT MAY BE OBTAINED FROM USE OF THE SERVICES.
                  EXCEPT AS EXPRESSLY SET FORTH IN THIS SECTION, THE SERVICES
                  AND IMPLEMENTATION SERVICES ARE PROVIDED “AS IS” AND COMPANY
                  DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT
                  NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY AND
                  FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT.
                </p>
              </section>

              <section
                id="limitation-of-liability"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  10. Limitation of Liability
                </h2>
                <p className="mt-4 text-body-sm text-ink-700 dark:text-white/70">
                  NOTWITHSTANDING ANYTHING TO THE CONTRARY, EXCEPT FOR BODILY
                  INJURY OF A PERSON, COMPANY AND ITS SUPPLIERS (INCLUDING BUT
                  NOT LIMITED TO ALL EQUIPMENT AND TECHNOLOGY SUPPLIERS),
                  OFFICERS, AFFILIATES, REPRESENTATIVES, CONTRACTORS AND
                  EMPLOYEES SHALL NOT BE RESPONSIBLE OR LIABLE WITH RESPECT TO
                  ANY SUBJECT MATTER OF THIS AGREEMENT OR TERMS AND CONDITIONS
                  RELATED THERETO UNDER ANY CONTRACT, NEGLIGENCE, STRICT
                  LIABILITY OR OTHER THEORY: (A) FOR ERROR OR INTERRUPTION OF
                  USE OR FOR LOSS OR INACCURACY OR CORRUPTION OF DATA OR COST OF
                  PROCUREMENT OF SUBSTITUTE GOODS, SERVICES OR TECHNOLOGY OR
                  LOSS OF BUSINESS; (B) FOR ANY INDIRECT, EXEMPLARY,
                  INCIDENTAL, SPECIAL OR CONSEQUENTIAL DAMAGES; (C) FOR ANY
                  MATTER BEYOND COMPANY’S REASONABLE CONTROL; OR (D) FOR ANY
                  AMOUNTS THAT, TOGETHER WITH AMOUNTS ASSOCIATED WITH ALL OTHER
                  CLAIMS, EXCEED THE FEES PAID BY CUSTOMER TO COMPANY FOR THE
                  SERVICES UNDER THIS AGREEMENT IN THE 12 MONTHS PRIOR TO THE
                  ACT THAT GAVE RISE TO THE LIABILITY, IN EACH CASE, WHETHER OR
                  NOT COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH
                  DAMAGES.
                </p>
              </section>

              <section
                id="miscellaneous"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  11. MISCELLANEOUS
                </h2>
                <p className="mt-4">
                  If any provision of this Agreement is found to be
                  unenforceable or invalid, that provision will be limited or
                  eliminated to the minimum extent necessary so that this
                  Agreement will otherwise remain in full force and effect and
                  enforceable. This Agreement is not assignable, transferable
                  or sublicensable by Customer except with Company’s prior
                  written consent. Company may transfer and assign any of its
                  rights and obligations under this Agreement without consent.
                  This Agreement is the complete and exclusive statement of the
                  mutual understanding of the parties and supersedes and
                  cancels all previous written and oral agreements,
                  communications and other understandings relating to the
                  subject matter of this Agreement, and that all waivers and
                  modifications must be in a writing signed by both parties,
                  except as otherwise provided herein. No agency, partnership,
                  joint venture, or employment is created as a result of this
                  Agreement and Customer does not have any authority of any kind
                  to bind Company in any respect whatsoever. In any action or
                  proceeding to enforce rights under this Agreement, the
                  prevailing party will be entitled to recover costs and
                  attorneys’ fees. All notices under this Agreement will be in
                  writing and will be deemed to have been duly given when
                  received, if personally delivered; when receipt is
                  electronically confirmed, if transmitted by facsimile or
                  e-mail; the day after it is sent, if sent for next day
                  delivery by recognized overnight delivery service; and upon
                  receipt, if sent by certified or registered mail, return
                  receipt requested. This Agreement shall be governed by the
                  laws of the State of California without regard to its
                  conflict of laws provisions. The parties shall work together
                  in good faith to issue at least one mutually agreed upon
                  press release within 90 days of the Effective Date, and
                  Customer otherwise agrees to reasonably cooperate with Company
                  to serve as a reference account upon request.
                </p>
              </section>

              <section
                id="contact"
                className="scroll-mt-32 border-t border-black/5 pt-12 dark:border-white/10"
              >
                <h2 className="text-h3 md:text-h3-lg font-semibold tracking-mercury text-ink-900 dark:text-white">
                  12. Contact Information
                </h2>
                <p className="mt-4">
                  For any inquiries, requests, comments, or concerns regarding
                  this page, please direct your correspondence to{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>
                  .
                </p>
                <p className="mt-4">
                  <span className="font-medium text-ink-900 dark:text-white">
                    Email:
                  </span>{" "}
                  <a
                    href="mailto:privacy@alphabase.co"
                    className="font-medium text-ink-900 underline underline-offset-4 decoration-ink-500/60 hover:decoration-brand-200 dark:text-white dark:decoration-white/30 dark:hover:decoration-brand-100"
                  >
                    privacy@alphabase.co
                  </a>
                </p>
                <p className="mt-4">
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
