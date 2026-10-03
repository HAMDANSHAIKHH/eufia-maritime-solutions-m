import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { WorldMap } from "@/components/art/WorldMap";
import { ServiceArt } from "@/components/art/scenes";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTASection } from "@/components/CTASection";
import { Reveal, SplitHeading, StaggerGroup, StaggerItem } from "@/components/anim/primitives";
import { breadcrumbJsonLd, usePageSeo } from "@/lib/seo";

const CHAIN = [
  {
    step: "01",
    title: "Chartering sets the vessel",
    text: "Tonnage is sourced and fixture terms agreed around the cargo, the laycan and the trading pattern — the foundation every later movement depends on.",
  },
  {
    step: "02",
    title: "Forwarding moves the cargo",
    text: "Bookings, collections, documentation and carrier coordination are arranged so the cargo reaches the vessel — or the aircraft — prepared and on time.",
  },
  {
    step: "03",
    title: "Inspection protects the handover",
    text: "Independent surveys and cargo inspections document condition and quality at the points where responsibility changes hands.",
  },
  {
    step: "04",
    title: "Logistics closes the loop",
    text: "Customs brokerage, inland transport and distribution complete the movement, so cargo arrives where it is needed on agreed terms.",
  },
];

export default function GlobalNetwork() {
  usePageSeo({
    title: "Global Network | International Maritime Connectivity | EUFIA",
    description:
      "Explore EUFIA's global connectivity — how integrated maritime, chartering, forwarding and logistics services support international cargo movement across world markets.",
    path: "/global-network",
    jsonLd: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Global Network", path: "/global-network" },
    ]),
  });

  return (
    <>
      {/* ------------------------------- HERO ------------------------------- */}
      <section className="px-5 pb-12 pt-32 sm:px-8 lg:pt-44">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs
            items={[{ label: "Home", href: "/" }, { label: "Global Network" }]}
          />
          <div className="mt-8 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal delay={0.05}>
                <p className="eyebrow text-caramel">Global network</p>
              </Reveal>
              <SplitHeading
                as="h1"
                lines={[["One connected view of"], ["international trade."]]}
                className="mt-6 font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.98] tracking-[-0.03em] text-navy"
                delay={0.15}
                stagger={0.07}
              />
            </div>
            <Reveal delay={0.4} className="lg:col-span-5">
              <p className="max-w-lg text-[1.02rem] leading-relaxed text-steel lg:ml-auto">
                Maritime trade is a network of corridors, ports and hand-overs.
                EUFIA works across that network — coordinating vessels, documents
                and logistics so cargo keeps moving between international markets.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------------------- MAP ------------------------------- */}
      <section className="px-5 pb-20 sm:px-8 lg:pb-28">
        <div className="mx-auto max-w-[1400px]">
          <Reveal>
            <div className="relative overflow-hidden rounded-xl border border-navy/10 bg-warm p-4 shadow-[0_50px_90px_-70px_rgba(23,43,58,0.8)] sm:p-8">
              <div className="grain absolute inset-0" aria-hidden="true" />
              <div className="relative">
                <WorldMap />
              </div>
            </div>
          </Reveal>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
            <Reveal delay={0.1}>
              <ul className="flex flex-wrap items-center gap-x-7 gap-y-2 text-xs uppercase tracking-[0.16em] text-steel">
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-caramel" aria-hidden="true" />
                  Port regions
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-px w-8 bg-caramel/60" aria-hidden="true" />
                  Illustrative trade corridors
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-navy/50" aria-hidden="true" />
                  Landmass reference
                </li>
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="max-w-md text-xs leading-relaxed text-steel sm:text-right">
                Routes and points shown are decorative and illustrative of world
                maritime trade. They do not indicate services, offices, routes or
                port coverage operated by EUFIA.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* --------------------------- SERVICE CHAIN -------------------------- */}
      <section className="bg-navy px-5 py-24 text-papaya sm:px-8 lg:py-32">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow text-caramel">Integrated services</p>
              </Reveal>
              <SplitHeading
                as="h2"
                lines={[["How cargo keeps moving"], ["across borders."]]}
                className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] leading-[1.04] tracking-[-0.02em] text-papaya"
                delay={0.1}
              />
              <Reveal delay={0.3}>
                <p className="mt-7 max-w-md text-[1rem] leading-relaxed text-papaya/70">
                  International cargo passes through many hands. EUFIA's
                  capabilities are designed to connect into one continuous scope,
                  so responsibility is clear at every stage of the movement.
                </p>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="mt-8 overflow-hidden rounded-lg border border-papaya/15">
                  <div className="aspect-[16/10] w-full">
                    <ServiceArt variant="logistics" title="Multimodal logistics illustration" />
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <StaggerGroup stagger={0.12}>
                {CHAIN.map((item) => (
                  <StaggerItem key={item.step}>
                    <div className="relative grid grid-cols-[auto_1fr] gap-5 border-t border-papaya/20 py-7 sm:gap-8">
                      <span className="font-display text-sm text-caramel">
                        {item.step}
                      </span>
                      <div>
                        <h3 className="font-display text-xl leading-snug text-papaya sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-2.5 text-[0.96rem] leading-relaxed text-papaya/70">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerGroup>
              <div className="border-t border-papaya/20" />
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------- COORDINATION -------------------------- */}
      <section className="bg-baby px-5 py-24 text-navy sm:px-8 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="eyebrow text-navy/70">Working with EUFIA</p>
            </Reveal>
            <SplitHeading
              as="h2"
              lines={[["Local attention for"], ["international movements."]]}
              className="mt-6 font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.04] tracking-[-0.02em] text-navy"
              delay={0.1}
            />
            <Reveal delay={0.3}>
              <p className="mt-7 max-w-xl text-[1rem] leading-relaxed text-navy/85">
                Wherever your cargo is headed, the working relationship stays the
                same: one point of communication, clear documentation, and early
                visibility of anything that could affect the programme.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/services"
                  className="group inline-flex items-center justify-center gap-3 rounded-md bg-navy px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-papaya transition-colors hover:bg-navy/85"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-md border border-navy/40 px-7 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:border-caramel hover:text-caramel-deep"
                >
                  Contact EUFIA
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <StaggerGroup className="space-y-4" stagger={0.1}>
              {[
                ["One point of contact", "Charter, forwarding and logistics enquiries handled through a single line of communication."],
                ["Documentation discipline", "Shipping documents prepared, tracked and shared so downstream steps never wait."],
                ["Early escalation", "Potential disruptions are raised while there is still room to act on them."],
                ["Flexible scope", "Engage EUFIA for one movement or for a connected sequence of services."],
              ].map(([title, text]) => (
                <StaggerItem key={title} y={18}>
                  <div className="rounded-lg border border-navy/20 bg-warm/70 p-6 backdrop-blur-sm">
                    <h3 className="font-display text-lg text-navy">{title}</h3>
                    <p className="mt-2 text-[0.94rem] leading-relaxed text-navy/85">
                      {text}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      <CTASection
        heading={["Planning a movement", "across borders?"]}
        intro="Share the cargo, origin, destination and timeline — EUFIA will outline the chartering and logistics route forward."
      />
    </>
  );
}
