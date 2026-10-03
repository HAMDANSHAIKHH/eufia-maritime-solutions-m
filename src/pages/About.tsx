import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ServiceArt } from "@/components/art/scenes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import {
  Reveal,
  SplitHeading,
  StaggerGroup,
  StaggerItem,
} from "@/components/anim/primitives";
import { SERVICES } from "@/data/services";
import { breadcrumbJsonLd, usePageSeo } from "@/lib/seo";

const PHILOSOPHY = [
  {
    title: "Precision before speed",
    text: "Fixtures and shipments go wrong in the small print. We take the time to get cargo, laycan, terms and documentation right before momentum takes over.",
  },
  {
    title: "Communication as infrastructure",
    text: "Most delays are communication failures. We keep principals, operators, terminals and agents aligned so decisions are never waiting on information.",
  },
  {
    title: "Preparation over reaction",
    text: "Whether it is a vetting review, a port state control attendance or a complex lift, outcomes are shaped long before the day of inspection or loading.",
  },
];

const EXPERTISE = [
  {
    title: "Chartering & shipbroking",
    text: "Dry bulk and tanker fixtures arranged with close attention to cargo, tonnage, terms and voyage economics.",
    art: "chartering" as const,
  },
  {
    title: "Freight & supply chain",
    text: "Ocean and air forwarding, multimodal coordination, customs brokerage and distribution planned as one flow.",
    art: "logistics" as const,
  },
  {
    title: "Consultancy & inspection",
    text: "Vessel performance, audit and independent survey work supporting SIRE, RightShip and PSC readiness.",
    art: "inspection" as const,
  },
];

export default function About() {
  usePageSeo({
    title: "About EUFIA | Maritime Chartering & Logistics Expertise",
    description:
      "Learn about EUFIA — a maritime and logistics service provider delivering vessel chartering, shipping, freight forwarding, consultancy and inspection services for international cargo movements.",
    path: "/about",
    jsonLd: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ]),
  });

  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative overflow-hidden bg-navy pb-20 pt-32 lg:pb-28 lg:pt-44">
        <div className="absolute inset-0 opacity-75" aria-hidden="true">
          <img
            src="/images/about.png"
            alt="EUFIA corporate office"
            className="h-full w-full object-cover object-center md:object-[center_30%]"
          />
        </div>
        <div
          className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/70 to-navy/30"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8">
          <Breadcrumbs tone="dark" items={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <Reveal delay={0.1}>
            <p className="eyebrow mt-8 text-caramel">About EUFIA</p>
          </Reveal>
          <SplitHeading
            as="h1"
            lines={[["A maritime partner built"], ["on coordination."]]}
            className="mt-6 max-w-4xl font-display text-[clamp(2.6rem,6.4vw,5.4rem)] leading-[0.98] tracking-[-0.03em] text-papaya"
            delay={0.2}
            stagger={0.07}
          />
          <Reveal delay={0.55}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-papaya/75 sm:text-lg">
              EUFIA connects businesses and cargo across international markets
              through vessel chartering, shipping, forwarding and integrated
              logistics — with the operational discipline that keeps complex
              movements on schedule.
            </p>
          </Reveal>
        </div>
      </section>

      {/* --------------------------- INTRODUCTION --------------------------- */}
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-caramel">Introduction</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["Logistics is a"], ["chain of promises."]]}
              className="mt-6 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] tracking-[-0.02em] text-navy"
              delay={0.1}
            />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <p className="text-[1.05rem] leading-relaxed text-navy/85">
                Every shipment is a series of commitments — a laycan kept, a
                terminal booked, a document filed on time, a vessel ready when the
                cargo is. EUFIA exists to hold those commitments together.
              </p>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-steel">
                We work with cargo owners, shipowners, charterers and corporate
                clients to arrange and coordinate ocean transport: sourcing
                tonnage, structuring fixtures, forwarding cargo, arranging
                inspection and consultancy support, and designing supply chains
                that hold together across modes and borders.
              </p>
              <p className="mt-5 text-[1.05rem] leading-relaxed text-steel">
                Our work is deliberately unglamorous — clear terms, accurate
                documentation, early escalation, follow-through. That is what
                makes maritime logistics reliable.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ----------------------------- PHILOSOPHY --------------------------- */}
      <section className="relative overflow-hidden bg-sand px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-3xl">
            <Reveal>
              <p className="eyebrow text-caramel">Brand philosophy</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["How we believe maritime"], ["services should be delivered."]]}
              className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.04] tracking-[-0.02em] text-navy"
              delay={0.1}
            />
          </div>

          <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-3" stagger={0.12}>
            {PHILOSOPHY.map((item, index) => (
              <StaggerItem key={item.title}>
                <article className="group relative h-full border-t-2 border-navy/80 bg-warm p-7 transition-all duration-500 hover:border-caramel lg:p-9">
                  <span className="font-display text-sm text-caramel">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 font-display text-2xl leading-snug tracking-[-0.01em] text-navy">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-[0.97rem] leading-relaxed text-steel">
                    {item.text}
                  </p>
                  <span
                    className="mt-7 block h-px w-12 bg-caramel transition-all duration-500 group-hover:w-full"
                    aria-hidden="true"
                  />
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ----------------------------- EXPERTISE ---------------------------- */}
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <Reveal>
                <p className="eyebrow text-caramel">Maritime expertise</p>
              </Reveal>
              <SplitHeading
                as="h2"
                lines={[["Across the water, the paperwork"], ["and the wider supply chain."]]}
                className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.04] tracking-[-0.02em] text-navy"
                delay={0.1}
              />
            </div>
            <Reveal delay={0.2}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-caramel hover:text-caramel-deep"
              >
                All services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {EXPERTISE.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.1}>
                <article className="group h-full overflow-hidden rounded-lg border border-navy/10 bg-warm">
                  <div className="aspect-[16/11] w-full overflow-hidden">
                    <div className="h-full w-full transition-transform duration-700 group-hover:scale-105">
                      <ServiceArt variant={item.art} title={`${item.title} illustration`} />
                    </div>
                  </div>
                  <div className="p-7">
                    <h3 className="font-display text-2xl tracking-[-0.01em] text-navy">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-[0.97rem] leading-relaxed text-steel">
                      {item.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------- CAPABILITIES ---------------------------- */}
      <section className="bg-baby px-5 py-24 text-navy sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-navy/70">Service capabilities</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["Ten services,"], ["one partner."]]}
              className="mt-6 font-display text-[clamp(2rem,4vw,3.2rem)] leading-[1.04] tracking-[-0.02em] text-navy"
              delay={0.1}
            />
            <Reveal delay={0.25}>
              <p className="mt-6 max-w-sm text-[0.98rem] leading-relaxed text-navy/85">
                Each capability stands on its own — and works better together.
                Explore the discipline that fits your movement.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <StaggerGroup stagger={0.07}>
              {SERVICES.map((service) => (
                <StaggerItem key={service.slug} y={18}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="group flex items-center gap-5 border-t border-navy/25 py-5 transition-colors hover:bg-warm/40"
                  >
                    <span className="font-display text-sm text-navy/55">
                      {service.number}
                    </span>
                    <span className="flex-1 font-display text-xl tracking-[-0.01em] transition-colors group-hover:text-caramel-deep sm:text-2xl">
                      {service.title}
                    </span>
                    <ArrowRight className="h-4 w-4 -translate-x-1 text-navy/60 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:text-caramel group-hover:opacity-100" />
                  </Link>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <div className="border-t border-navy/25" />
          </div>
        </div>
      </section>

      {/* ------------------------- IMAGE MARQUEE ---------------------------- */}
      <section className="overflow-hidden border-b border-navy/10 bg-navy py-16">
        <div className="flex w-max animate-drift gap-6">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 gap-6">
              {(["drybulk", "forwarding", "tanker", "project", "logistics"] as const).map(
                (variant, i) => (
                  <div
                    key={`${group}-${variant}`}
                    className="h-52 w-72 shrink-0 overflow-hidden rounded-lg border border-papaya/10 sm:h-60 sm:w-96"
                  >
                    <ServiceArt variant={variant} />
                    <span className="sr-only">{`Maritime illustration ${i + 1}`}</span>
                  </div>
                ),
              )}
            </div>
          ))}
        </div>
      </section>

      <CTASection
        heading={["Ready to plan your", "next movement?"]}
        intro="Share your cargo, route and timeline — EUFIA will respond with a considered chartering and logistics approach."
      />
    </>
  );
}
