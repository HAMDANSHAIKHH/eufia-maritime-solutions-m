import { ArrowRight } from "lucide-react";
import { Link, Navigate, useParams } from "react-router";
import { ServiceArt } from "@/components/art/scenes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { Parallax, Reveal, SplitHeading, StaggerGroup, StaggerItem } from "@/components/anim/primitives";
import { SERVICES, getService } from "@/data/services";
import {
  breadcrumbJsonLd,
  mergeJsonLd,
  serviceJsonLd,
  usePageSeo,
} from "@/lib/seo";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = getService(slug);

  usePageSeo(
    service
      ? {
          title: service.seoTitle,
          description: service.seoDescription,
          path: `/services/${service.slug}`,
          jsonLd: mergeJsonLd(
            breadcrumbJsonLd([
              { name: "Home", path: "/" },
              { name: "Services", path: "/services" },
              { name: service.title, path: `/services/${service.slug}` },
            ]),
            serviceJsonLd({
              name: service.title,
              description: service.description,
              path: `/services/${service.slug}`,
            }),
          ),
        }
      : { title: "Service not found", description: "", path: "/services", noindex: true },
  );

  if (!service) return <Navigate to="/service-not-found" replace />;

  const index = SERVICES.findIndex((s) => s.slug === service.slug);
  const immersive = index % 2 === 0;
  const related = service.related
    .map((slugKey) => SERVICES.find((s) => s.slug === slugKey))
    .filter(Boolean) as typeof SERVICES;

  const crumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: service.title },
  ];

  const titleLines: string[][] = service.title.includes(" & ")
    ? [
        [service.title.split(" & ")[0]],
        [`& ${service.title.split(" & ")[1]}`],
      ]
    : [[service.title]];

  return (
    <>
      {/* -------------------------------- HERO ------------------------------- */}
      {immersive ? (
        <section className="relative flex min-h-[78svh] flex-col justify-end overflow-hidden bg-navy pb-16 pt-32 lg:pb-24 lg:pt-44">
          <div className="absolute inset-0" aria-hidden="true">
            <ServiceArt variant={service.art} />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t from-navy via-navy/75 to-navy/25"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-6 top-24 select-none font-display text-[clamp(6rem,18vw,15rem)] leading-none text-papaya/10 lg:top-28"
            aria-hidden="true"
          >
            {service.number}
          </div>

          <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8">
            <Breadcrumbs tone="dark" items={crumbs} />
            <Reveal delay={0.08}>
              <p className="eyebrow mt-8 text-caramel">Service {service.number}</p>
            </Reveal>
            <SplitHeading
              as="h1"
              lines={titleLines}
              className="mt-5 max-w-4xl font-display text-[clamp(2.6rem,6.5vw,5.6rem)] leading-[0.97] tracking-[-0.03em] text-papaya"
              delay={0.18}
              stagger={0.07}
            />
            <Reveal delay={0.5}>
              <p className="mt-7 max-w-2xl text-base leading-relaxed text-papaya/80 sm:text-lg">
                {service.description}
              </p>
            </Reveal>
          </div>
        </section>
      ) : (
        <section className="grid min-h-[78svh] grid-cols-1 bg-navy lg:grid-cols-2">
          <div className="flex flex-col justify-center px-5 pb-16 pt-32 sm:px-8 lg:pb-24 lg:pl-[max(2rem,calc((100vw_-_1400px)/2_+_2rem))] lg:pr-16 lg:pt-44">
            <Breadcrumbs tone="dark" items={crumbs} />
            <Reveal delay={0.08}>
              <p className="eyebrow mt-8 text-caramel">Service {service.number}</p>
            </Reveal>
            <SplitHeading
              as="h1"
              lines={titleLines}
              className="mt-5 font-display text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.98] tracking-[-0.03em] text-papaya"
              delay={0.18}
              stagger={0.07}
            />
            <Reveal delay={0.5}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-papaya/80 sm:text-lg">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={0.62}>
              <div className="mt-9 h-px w-24 bg-caramel" />
            </Reveal>
          </div>
          <div className="relative min-h-[42svh] overflow-hidden lg:min-h-full">
            <div className="absolute inset-0">
              <ServiceArt variant={service.art} title={`${service.title} illustration`} />
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------ OVERVIEW ---------------------------- */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <div className="rounded-lg border border-navy/15 bg-warm p-7">
              <p className="eyebrow text-caramel">At a glance</p>
              <ul className="mt-6 space-y-3.5">
                {service.focus.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[0.95rem] text-navy/85">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-caramel"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to={`/contact?service=${service.slug}`}
                className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md bg-caramel px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.16em] text-warm transition-all duration-300 hover:bg-caramel-deep"
              >
                Request information
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </aside>

          <div className="lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="eyebrow text-caramel">Overview</p>
            </Reveal>
            {service.overview.map((paragraph, i) => (
              <Reveal key={i} delay={0.08 * i}>
                <p
                  className={
                    i === 0
                      ? "mt-7 font-display text-[clamp(1.35rem,2.2vw,1.8rem)] leading-snug tracking-[-0.01em] text-navy"
                      : "mt-6 text-[1.02rem] leading-relaxed text-steel"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-wrap gap-2.5">
                {service.focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-navy/20 bg-sand px-4 py-1.5 text-xs uppercase tracking-[0.14em] text-navy/75"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------- PARALLAX BAND --------------------------- */}
      <section className="relative h-[46svh] overflow-hidden border-y border-navy/10 lg:h-[62svh]">
        <Parallax distance={70} className="absolute inset-0">
          <div className="h-[130%] w-full">
            <ServiceArt variant={service.art} />
          </div>
        </Parallax>
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"
          aria-hidden="true"
        />
        <p className="absolute bottom-6 left-6 max-w-md font-display text-lg italic text-papaya drop-shadow">
          {service.tagline}
        </p>
      </section>

      {/* ----------------------------- HIGHLIGHTS --------------------------- */}
      <section className="bg-sand px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow text-caramel">Service highlights</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["What this service covers."]]}
              className="mt-6 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.04] tracking-[-0.02em] text-navy"
              delay={0.1}
            />
          </div>

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2" stagger={0.1}>
            {service.highlights.map((highlight, i) => (
              <StaggerItem key={highlight.title}>
                <article className="group h-full border-t-2 border-navy/80 bg-warm p-7 transition-colors duration-500 hover:border-caramel lg:p-9">
                  <span className="font-display text-sm text-caramel">
                    0{i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-xl leading-snug text-navy sm:text-2xl">
                    {highlight.title}
                  </h3>
                  <p className="mt-3.5 text-[0.97rem] leading-relaxed text-steel">
                    {highlight.text}
                  </p>
                </article>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* --------------------------- RELATED LINKS -------------------------- */}
      <section className="px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Reveal>
                <p className="eyebrow text-caramel">Keep exploring</p>
              </Reveal>
              <SplitHeading
                as="h2"
                lines={[["Related services."]]}
                className="mt-6 font-display text-[clamp(1.8rem,3.6vw,2.8rem)] leading-[1.05] tracking-[-0.02em] text-navy"
                delay={0.1}
              />
            </div>
            <Reveal delay={0.15}>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-caramel hover:text-caramel-deep"
              >
                All services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {related.map((relatedService, i) => (
              <Reveal key={relatedService.slug} delay={i * 0.08}>
                <ServiceCard service={relatedService} layout="overlay" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        heading={["Request further", `${service.title.toLowerCase()} information.`]}
        intro="Tell us what you need to move, and EUFIA will come back with the relevant chartering, logistics or inspection detail."
      />
    </>
  );
}
