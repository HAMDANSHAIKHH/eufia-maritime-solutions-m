import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reveal, SplitHeading, StaggerGroup, StaggerItem } from "@/components/anim/primitives";
import { SERVICES } from "@/data/services";
import { LEGAL_LINKS, PRIMARY_NAV } from "@/data/site";
import { breadcrumbJsonLd, usePageSeo } from "@/lib/seo";

export default function SitemapPage() {
  usePageSeo({
    title: "Sitemap | EUFIA",
    description:
      "A complete index of EUFIA's website — home, about, all ten maritime and logistics services, global network, contact and legal pages.",
    path: "/sitemap",
    jsonLd: breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Sitemap", path: "/sitemap" },
    ]),
  });

  const groups: { title: string; links: { label: string; href: string }[] }[] = [
    { title: "Main", links: PRIMARY_NAV.map((item) => ({ label: item.label, href: item.href })) },
    {
      title: "Services",
      links: SERVICES.map((service) => ({
        label: `${service.number} — ${service.title}`,
        href: `/services/${service.slug}`,
      })),
    },
    { title: "Legal & meta", links: LEGAL_LINKS },
  ];

  return (
    <section className="px-5 pb-24 pt-32 sm:px-8 lg:pt-44">
      <div className="mx-auto max-w-[1400px]">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Sitemap" }]} />
        <Reveal delay={0.05}>
          <p className="eyebrow mt-8 text-caramel">Index</p>
        </Reveal>
        <SplitHeading
          as="h1"
          lines={[["Every page on", "this website."]]}
          className="mt-5 font-display text-[clamp(2.4rem,5.6vw,4.6rem)] leading-[0.98] tracking-[-0.03em] text-navy"
          delay={0.15}
        />

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {groups.map((group, groupIndex) => (
            <Reveal key={group.title} delay={groupIndex * 0.08}>
              <div>
                <h2 className="border-b-2 border-navy pb-3 font-display text-2xl tracking-[-0.01em] text-navy">
                  {group.title}
                </h2>
                <StaggerGroup className="mt-4" stagger={0.05}>
                  {group.links.map((link) => (
                    <StaggerItem key={link.href} y={12}>
                      <Link
                        to={link.href}
                        className="group flex items-center justify-between gap-3 border-b border-navy/12 py-3.5 text-[0.95rem] text-navy/85 transition-colors hover:text-caramel"
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-12 text-sm text-steel">
            Looking for the machine-readable version? The{" "}
            <a href="/sitemap.xml" className="text-caramel underline underline-offset-2 hover:text-caramel-deep">
              XML sitemap
            </a>{" "}
            lists the same canonical pages for search engines.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
