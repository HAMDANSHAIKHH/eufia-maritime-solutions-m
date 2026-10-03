import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router";
import { ServiceArt } from "@/components/art/scenes";
import { WorldMap } from "@/components/art/WorldMap";
import { HeroScene } from "@/components/art/HeroScene";
import { CTASection } from "@/components/CTASection";
import { ServicesScroller } from "@/components/ServicesScroller";
import { Reveal, SplitHeading, StaggerGroup, StaggerItem } from "@/components/anim/primitives";
import { SERVICES } from "@/data/services";
import { SITE } from "@/data/site";
import { mergeJsonLd, organizationJsonLd, usePageSeo, websiteJsonLd } from "@/lib/seo";

const WHY_EUFIA = [
  {
    title: "Tailored maritime solutions",
    text: "Chartering and shipping arrangements shaped around the cargo, the route and the commercial priorities of each movement — not a fixed package.",
  },
  {
    title: "Integrated logistics capabilities",
    text: "Ocean freight, forwarding, customs formalities and distribution handled as one coordinated scope instead of disconnected legs.",
  },
  {
    title: "Operational coordination",
    text: "Clear communication between principals, operators, terminals and agents — the discipline that keeps fixtures and shipments on schedule.",
  },
  {
    title: "International cargo movements",
    text: "Support for businesses moving raw materials, commodities and equipment across international markets.",
  },
  {
    title: "Consultancy & inspection expertise",
    text: "Maritime consultancy, audit and independent inspection work covering vessel performance, SIRE and RightShip readiness and PSC preparation.",
  },
];

export default function Landing() {
  usePageSeo({
    title: "EUFIA — Maritime Shipping, Vessel Chartering & Global Logistics",
    description:
      "Connecting global trade through intelligent maritime solutions. EUFIA provides vessel chartering, dry bulk and tanker shipping, freight forwarding, project cargo, maritime consultancy, cargo inspection, global logistics, maritime AI and digital solutions, and vessel spare parts supply.",
    path: "/",
    jsonLd: mergeJsonLd(organizationJsonLd(), websiteJsonLd()),
  });

  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const artY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const artScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden">
        <motion.div
          style={{ y: artY, scale: artScale }}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <HeroScene className="h-full w-full" />
          <div className="grain absolute inset-0" />
        </motion.div>

        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-center px-5 pb-28 pt-36 sm:px-8"
        >
          <Reveal delay={0.15} y={18}>
            <span className="flex items-center gap-4 text-caramel">
              <span className="h-px w-12 bg-caramel/70" aria-hidden="true" />
              <span className="eyebrow">Maritime · Chartering · Logistics</span>
            </span>
          </Reveal>

          <SplitHeading
            as="h1"
            lines={[["Moving Global"], ["Trade Forward."]]}
            className="mt-7 font-display text-[clamp(3rem,8.6vw,7.5rem)] leading-[0.95] tracking-[-0.03em] text-navy"
            delay={0.25}
            stagger={0.075}
          />

          <Reveal delay={0.75} y={24}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-navy/80 sm:text-lg">
              {SITE.heroCopy}
            </p>
          </Reveal>

          <Reveal delay={0.95} y={24}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-caramel px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-warm transition-all duration-300 hover:bg-caramel-deep hover:shadow-[0_20px_44px_-20px_rgba(192,127,69,0.95)]"
              >
                Explore Our Services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                to="/contact?intent=quote"
                className="group inline-flex items-center justify-center gap-3 rounded-md border border-navy/30 bg-warm/50 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-navy backdrop-blur-sm transition-all duration-300 hover:border-navy hover:bg-warm"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </motion.div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 right-6 hidden flex-col items-center gap-3 lg:flex">
          <span className="text-[0.6rem] uppercase tracking-[0.3em] text-navy/60">Scroll</span>
          <span className="relative h-16 w-px bg-navy/25" aria-hidden="true">
            <span className="animate-scroll-hint absolute inset-x-0 top-0 h-8 bg-caramel" />
          </span>
        </div>
      </section>

      {/* ------------------------------ MARQUEE ----------------------------- */}
      <div className="overflow-hidden border-y border-navy/10 bg-caramel py-3.5" aria-hidden="true">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((group) => (
            <ul key={group} className="flex shrink-0 items-center">
              {SERVICES.map((service) => (
                <li
                  key={service.slug}
                  className="flex items-center gap-8 px-8 text-xs font-semibold uppercase tracking-[0.28em] text-warm"
                >
                  {service.title}
                  <span className="h-1.5 w-1.5 rotate-45 bg-warm/60" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      {/* --------------------------- BRAND INTRO ---------------------------- */}
      <section className="relative overflow-hidden px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow text-caramel">Who we are</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["Beyond Shipping."], ["Enabling Global Commerce."]]}
              className="mt-6 font-display text-[clamp(2.2rem,4.6vw,3.8rem)] leading-[1.02] tracking-[-0.02em] text-navy"
              delay={0.1}
              stagger={0.05}
            />
            <Reveal delay={0.35}>
              <div className="mt-8 h-px w-24 bg-caramel" />
            </Reveal>
            <Reveal delay={0.45}>
              <p className="mt-8 text-[1.02rem] leading-relaxed text-navy/80">
                EUFIA is a maritime and logistics service provider working across
                the moving parts of international trade — vessel chartering, dry
                bulk and tanker shipping, freight forwarding, project cargo,
                maritime consultancy, cargo inspection, global logistics,
                maritime AI and digital solutions, and vessel spare parts supply
                coordination.
              </p>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-steel">
                We sit between cargo and vessel, between shipper and terminal,
                between plan and execution — coordinating the details that decide
                whether a movement runs smoothly or stalls.
              </p>
            </Reveal>
            <Reveal delay={0.55}>
              <Link
                to="/about"
                className="group mt-9 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-caramel hover:text-caramel-deep"
              >
                About EUFIA
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </Reveal>
          </div>

          <div className="relative lg:col-span-7">
            <motion.div
              initial={{ clipPath: "inset(0 0 100% 0)" }}
              whileInView={{ clipPath: "inset(0 0 0% 0)" }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-lg border border-navy/10"
            >
              <div className="aspect-[16/11] w-full">
                <img
                  src="/images/sip.jpg"
                  alt="Commercial cargo vessel"
                  className="h-full w-full object-cover"
                />
              </div>
            </motion.div>

            <div className="absolute -bottom-10 -left-4 hidden w-[46%] overflow-hidden rounded-lg border border-navy/10 shadow-[0_30px_60px_-30px_rgba(23,43,58,0.6)] sm:block lg:-left-16">
              <div className="aspect-[4/3] w-full">
                <img
                  src="/images/3.jpg"
                  alt="Vessel deck and cargo handling operations"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <Reveal delay={0.3} className="mt-16 hidden lg:block">
              <p className="ml-auto max-w-xs text-right font-display text-lg italic leading-snug text-steel">
                “{SITE.positioning}”
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------- SERVICES TRACK ------------------------- */}
      <ServicesScroller
        header={
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="eyebrow text-caramel">Services</p>
              <h2 className="mt-5 max-w-2xl font-display text-[clamp(2.2rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-navy">
                Ten disciplines, one coordinated scope.
              </h2>
            </div>
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-caramel hover:text-caramel-deep"
            >
              All services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        }
      />

      {/* ------------------------------ WHY EUFIA --------------------------- */}
      <section className="bg-baby px-5 py-24 text-navy sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:self-start">
            <Reveal>
              <p className="eyebrow text-navy/70">Why EUFIA</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["Built around the cargo,"], ["the vessel and the voyage."]]}
              className="mt-6 font-display text-[clamp(2rem,4vw,3.4rem)] leading-[1.04] tracking-[-0.02em] text-navy"
              delay={0.1}
              stagger={0.05}
            />
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-md text-[1rem] leading-relaxed text-navy/85">
                Maritime work is judged on execution. These are the principles
                that shape how EUFIA plans, communicates and delivers every
                movement we are trusted with.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-9 overflow-hidden rounded-lg border border-navy/15">
                <div className="aspect-[16/10] w-full">
                  <ServiceArt variant="consultancy" title="Maritime consultancy blueprint illustration" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <StaggerGroup stagger={0.1}>
              {WHY_EUFIA.map((item, index) => (
                <StaggerItem key={item.title}>
                  <div className="grid grid-cols-[auto_1fr] gap-5 border-t border-navy/25 py-7 sm:gap-8">
                    <span className="font-display text-sm text-navy/50">
                      0{index + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl leading-snug tracking-[-0.01em] sm:text-[1.7rem]">
                        {item.title}
                      </h3>
                      <p className="mt-2.5 text-[0.97rem] leading-relaxed text-navy/85">
                        {item.text}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
            <Reveal>
              <div className="border-t border-navy/25 pt-8">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-navy hover:text-caramel-deep"
                >
                  Discuss your requirements
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ------------------------- GLOBAL CONNECTIVITY ---------------------- */}
      <section className="px-5 py-24 sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p className="eyebrow text-caramel">Global connectivity</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["Trade moves on relationships,"], ["routes and reliability."]]}
              className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.04] tracking-[-0.02em] text-navy"
              delay={0.1}
              stagger={0.05}
            />
            <Reveal delay={0.3}>
              <p className="mt-6 text-[1.02rem] leading-relaxed text-steel">
                EUFIA coordinates maritime and logistics services for cargo moving
                between international markets — connecting chartering, forwarding
                and inspection into one continuous flow.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="mt-14 rounded-xl border border-navy/10 bg-warm p-4 shadow-[0_40px_80px_-60px_rgba(23,43,58,0.7)] sm:p-8">
              <WorldMap />
              <p className="mt-4 text-center text-xs leading-relaxed text-steel">
                Illustrative representation of world maritime trade corridors.
                Routes shown are decorative and do not indicate services operated
                by EUFIA.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/global-network"
                className="group inline-flex items-center gap-3 rounded-md bg-navy px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-papaya transition-all duration-300 hover:bg-navy/90"
              >
                Explore the global network
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-md border border-navy/30 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-navy transition-all duration-300 hover:border-caramel hover:text-caramel"
              >
                Contact EUFIA
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
