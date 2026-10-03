import { ArrowRight, Compass } from "lucide-react";
import { Link } from "react-router";
import { HeroScene } from "@/components/art/HeroScene";
import { Reveal, SplitHeading } from "@/components/anim/primitives";
import { SERVICES } from "@/data/services";
import { usePageSeo } from "@/lib/seo";

export default function NotFound() {
  usePageSeo({
    title: "Page Not Found",
    description: "The page you were looking for could not be found on the EUFIA website.",
    path: "/404",
    noindex: true,
  });

  return (
    <section className="relative flex min-h-[72svh] flex-col justify-center overflow-hidden">
      <div className="absolute inset-0" aria-hidden="true">
        <HeroScene className="h-full w-full" />
        <div className="grain absolute inset-0" />
        <div className="absolute inset-0 bg-papaya/60" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-32 sm:px-8">
        <Reveal>
          <span className="flex items-center gap-4 text-caramel">
            <span className="h-px w-12 bg-caramel/70" aria-hidden="true" />
            <span className="eyebrow">Error 404</span>
          </span>
        </Reveal>

        <SplitHeading
          as="h1"
          lines={[["Off the chart."]]}
          className="mt-6 font-display text-[clamp(3rem,9vw,7rem)] leading-[0.95] tracking-[-0.03em] text-navy"
          delay={0.15}
        />

        <Reveal delay={0.4}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-navy/80 sm:text-lg">
            The page you are looking for has moved or never set sail. Try one of
            the routes below instead.
          </p>
        </Reveal>

        <Reveal delay={0.55}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/"
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-caramel px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-warm transition-all duration-300 hover:bg-caramel-deep"
            >
              Back to home
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <Link
              to="/services"
              className="group inline-flex items-center justify-center gap-3 rounded-md border border-navy/30 bg-warm/60 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-navy backdrop-blur-sm transition-all duration-300 hover:border-navy hover:bg-warm"
            >
              <Compass className="h-4 w-4" />
              Browse services
            </Link>
          </div>
        </Reveal>

        <Reveal delay={0.7}>
          <div className="mt-14 max-w-3xl border-t border-navy/20 pt-6">
            <p className="eyebrow text-steel">Popular destinations</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {[
                { label: "About Us", href: "/about" },
                { label: "Global Network", href: "/global-network" },
                { label: "Contact", href: "/contact" },
                ...SERVICES.slice(0, 4).map((service) => ({
                  label: service.title,
                  href: `/services/${service.slug}`,
                })),
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="rounded-full border border-navy/25 bg-warm/70 px-5 py-2 text-sm text-navy transition-all duration-300 hover:border-caramel hover:text-caramel"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
