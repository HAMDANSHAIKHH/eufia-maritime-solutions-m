import { AlertTriangle } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal, SplitHeading } from "@/components/anim/primitives";
import { breadcrumbJsonLd, usePageSeo } from "@/lib/seo";

export type LegalSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Renders as a highlighted item requiring legal/company verification. */
  verificationNote?: string;
};

/**
 * Shared shell for privacy / terms documents.
 * Content is professional draft copy — items marked for verification must be
 * confirmed by the company's legal advisors before publication.
 */
export function LegalShell({
  title,
  description,
  path,
  updated,
  intro,
  sections,
  siblingHref,
  siblingLabel,
}: {
  title: string;
  description: string;
  path: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
  siblingHref: string;
  siblingLabel: string;
}) {
  usePageSeo({
    title,
    description,
    path,
    jsonLd: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: title, path },
    ]),
  });

  return (
    <>
      <section className="bg-navy px-5 pb-14 pt-32 sm:px-8 lg:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs tone="dark" items={[{ label: "Home", href: "/" }, { label: title }]} />
          <Reveal delay={0.08}>
            <p className="eyebrow mt-8 text-caramel">Legal</p>
          </Reveal>
          <SplitHeading
            as="h1"
            lines={[[title]]}
            className="mt-5 font-display text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[0.98] tracking-[-0.03em] text-papaya"
            delay={0.15}
          />
          <Reveal delay={0.4}>
            <p className="mt-5 text-sm uppercase tracking-[0.2em] text-papaya/60">
              Last updated: {updated}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-[1000px]">
          <Reveal>
            <div className="flex items-start gap-4 rounded-lg border border-caramel/50 bg-caramel/10 p-5">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-caramel" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-navy">
                  Draft — pending legal review
                </p>
                <p className="mt-2 text-sm leading-relaxed text-navy/85">
                  This document is editable draft copy. Passages marked
                  <span className="mx-1 rounded bg-caramel/20 px-1.5 py-0.5 text-xs font-semibold uppercase tracking-wider">
                    verify
                  </span>
                  contain company details — registered entity, jurisdiction,
                  addresses and contact information — that must be confirmed before
                  publication.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-10 font-display text-[clamp(1.3rem,2.2vw,1.7rem)] leading-snug tracking-[-0.01em] text-navy">
              {intro}
            </p>
          </Reveal>

          <div className="mt-12 space-y-12">
            {sections.map((section, index) => (
              <Reveal key={section.heading} delay={0.04 * index}>
                <article className="border-t border-navy/15 pt-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-display text-sm text-caramel/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-display text-2xl leading-snug tracking-[-0.01em] text-navy sm:text-[1.75rem]">
                      {section.heading}
                    </h2>
                  </div>
                  <div className="mt-4 space-y-4 pl-0 sm:pl-11">
                    {section.paragraphs?.map((paragraph) => (
                      <p key={paragraph.slice(0, 32)} className="text-[1rem] leading-relaxed text-steel">
                        {paragraph}
                      </p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-2.5">
                        {section.bullets.map((bullet) => (
                          <li
                            key={bullet.slice(0, 32)}
                            className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-steel"
                          >
                            <span
                              className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-caramel"
                              aria-hidden="true"
                            />
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.verificationNote && (
                      <p className="rounded-md border border-caramel/40 bg-caramel/10 px-4 py-3 text-sm leading-relaxed text-navy">
                        <span className="mr-2 font-semibold uppercase tracking-[0.14em] text-caramel">
                          Verify:
                        </span>
                        {section.verificationNote}
                      </p>
                    )}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-navy/15 pt-8">
              <Link
                to={siblingHref}
                className="text-sm font-semibold uppercase tracking-[0.16em] text-caramel hover:text-caramel-deep"
              >
                {siblingLabel}
              </Link>
              <Link
                to="/contact"
                className="text-sm font-semibold uppercase tracking-[0.16em] text-navy hover:text-caramel"
              >
                Contact EUFIA
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
