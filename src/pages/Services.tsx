import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ServiceArt } from "@/components/art/scenes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal, SplitHeading, StaggerGroup, StaggerItem } from "@/components/anim/primitives";
import { SERVICES, SERVICE_COVER_IMAGES } from "@/data/services";
import { breadcrumbJsonLd, usePageSeo } from "@/lib/seo";

const FIRST_HALF = SERVICES.slice(0, 4);
const SECOND_HALF = SERVICES.slice(4);

export default function Services() {
  usePageSeo({
    title: "Maritime & Logistics Services | EUFIA",
    description:
      "Explore EUFIA's ten maritime and logistics services: vessel chartering, dry bulk shipping, tanker chartering, freight forwarding, project cargo, maritime consultancy, cargo inspection, global logistics, maritime AI and digital solutions, and vessel spare parts supply.",
    path: "/services",
    jsonLd: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ]),
  });

  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="eyebrow text-caramel">Services</p>
              </Reveal>
              <SplitHeading
                as="h1"
                lines={[["Ten disciplines across"], ["the maritime chain."]]}
                className="mt-6 font-display text-[clamp(2.6rem,6vw,5rem)] leading-[0.98] tracking-[-0.03em] text-navy"
                delay={0.15}
                stagger={0.07}
              />
            </div>
            <Reveal delay={0.4} className="lg:col-span-5">
              <p className="max-w-lg text-[1.02rem] leading-relaxed text-steel lg:ml-auto">
                From the first charter enquiry to final mile distribution, each
                EUFIA service is built to stand alone — and to connect cleanly with
                the next step in your supply chain.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.5}>
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              {(
                [
                  { variant: "chartering", offset: "" },
                  { variant: "forwarding", offset: "sm:mt-10" },
                  { variant: "logistics", offset: "sm:mt-4" },
                ] as const
              ).map((item, i) => (
                <div
                  key={item.variant}
                  className={`hidden overflow-hidden rounded-lg border border-navy/10 sm:block ${item.offset}`}
                >
                  <div className="aspect-[4/3] w-full">
                    <ServiceArt
                      variant={item.variant}
                      title={`Maritime service illustration ${i + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* --------------------- EDITORIAL SPLIT ROWS ------------------------- */}
      <section className="px-5 pb-24 sm:px-8 lg:pb-32">
        <div className="mx-auto max-w-[1400px] space-y-24 lg:space-y-32">
          {FIRST_HALF.map((service, index) => (
            <Reveal key={service.slug}>
              <ServiceCard
                service={service}
                layout="split"
                align={index % 2 === 0 ? "left" : "right"}
                coverImage={SERVICE_COVER_IMAGES[service.slug]}
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* --------------------- DARK OVERLAY CARD GRID ----------------------- */}
      <section className="bg-navy px-5 py-24 text-papaya sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow text-caramel">Specialist services</p>
              </Reveal>
              <SplitHeading
                as="h2"
                lines={[["Complex cargo, complex compliance —"], ["handled with structure."]]}
                className="mt-6 max-w-3xl font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.04] tracking-[-0.02em] text-papaya"
                delay={0.1}
              />
            </div>
            <Reveal delay={0.2}>
              <Link
                to="/contact?intent=quote"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-caramel hover:text-baby"
              >
                Request a quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2" stagger={0.1}>
            {SECOND_HALF.map((service, index) => (
              <StaggerItem key={service.slug} className={index % 2 === 1 ? "sm:mt-12" : undefined}>
                <ServiceCard
                  service={service}
                  layout="overlay"
                  coverImage={SERVICE_COVER_IMAGES[service.slug]}
                />
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* -------------------------- AT A GLANCE ----------------------------- */}
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-caramel">At a glance</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["Every service, one page away."]]}
              className="mt-6 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.04] tracking-[-0.02em] text-navy"
              delay={0.1}
            />
          </div>

          <StaggerGroup className="mt-12" stagger={0.06}>
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug} y={16}>
                <Link
                  to={`/services/${service.slug}`}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 border-t border-navy/15 py-5 transition-colors hover:bg-sand/70 sm:gap-8"
                >
                  <span className="font-display text-sm text-caramel/80">{service.number}</span>
                  <span className="min-w-0">
                    <span className="block font-display text-xl tracking-[-0.01em] text-navy transition-colors group-hover:text-caramel sm:text-2xl">
                      {service.title}
                    </span>
                    <span className="mt-1 block truncate text-sm text-steel">
                      {service.tagline}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 shrink-0 -translate-x-1 text-caramel opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                </Link>
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div className="border-t border-navy/15" />
        </div>
      </section>

      <CTASection
        heading={["Not sure which service", "fits your cargo?"]}
        intro="Describe the movement and EUFIA will point you to the right chartering, forwarding or inspection approach."
      />
    </>
  );
}
