import { Container } from "./container";
import { H2 } from "./section";

export function LogoCloud() {
  const logos = [
    {
      name: "Dental",
      mark: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="4.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: "Physiotherapy",
      mark: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M6.5 9.5l11 6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M6.5 6.5l7 4.2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Aesthetics",
      mark: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
          <path
            d="M12 20s-7-4.4-7-10a4.2 4.2 0 0 1 7-2.8A4.2 4.2 0 0 1 19 10c0 5.6-7 10-7 10z"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: "Hair transplant",
      mark: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
          <circle cx="10" cy="12" r="6.5" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M12.5 6.5c3.3 0 5.5 2.3 5.5 5.2 0 3.3-2.8 5.8-6.4 5.8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: "Nutrition",
      mark: (
        <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6">
          <rect x="5" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
          <rect x="11" y="5" width="4" height="14" rx="1.5" fill="currentColor" />
          <rect x="17" y="5" width="2" height="14" rx="1" fill="currentColor" />
        </svg>
      ),
    },
  ];
  return (
    <section className="pt-16 pb-10 md:pt-28 md:pb-16">
      <Container>
        <H2 className="mx-auto max-w-2xl text-center text-h3-lg md:text-h2 leading-tight text-ink-900 dark:text-white">
          Designed for teams across dental, aesthetics, hair transplant, physiotherapy, and nutrition.
        </H2>
        <div className="mt-10 marquee text-ink-700 dark:text-white/70 opacity-70">
          <div className="marquee-track gap-x-12 md:gap-x-16">
            {logos.concat(logos).map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                aria-hidden={index >= logos.length}
                className="flex items-center gap-3 text-body-lg md:text-h4 font-semibold tracking-mercury whitespace-nowrap"
              >
                {logo.mark}
                <span>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
