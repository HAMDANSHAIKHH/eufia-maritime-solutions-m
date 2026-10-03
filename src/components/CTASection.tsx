import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Parallax, Reveal, SplitHeading } from "@/components/anim/primitives";

/**
 * The featured full-width CTA — a deep-navy "night bridge" panel with
 * parallax swell lines and a distinctive caramel primary action.
 */
export function CTASection({
  heading = ["Let's Move Your", "Next Shipment Forward."],
  intro = "Tell us about your cargo, your route and your timeline — EUFIA will come back with a considered chartering and logistics plan.",
}: {
  heading?: string[];
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy px-5 py-24 text-papaya sm:px-8 lg:py-32">
      {/* parallax atmosphere */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Parallax distance={60} className="absolute inset-0">
          <div className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-baby/20 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-caramel/25 blur-3xl" />
        </Parallax>
        <svg
          viewBox="0 0 1440 400"
          preserveAspectRatio="none"
          className="absolute inset-x-0 bottom-0 h-64 w-full opacity-30"
        >
          <path
            d="M0 260 C 240 180, 480 180, 720 250 S 1200 330, 1440 250 L1440 400 L0 400 Z"
            fill="none"
            stroke="#97C6E0"
            strokeWidth="2"
          />
          <path
            d="M0 310 C 240 240, 480 250, 720 300 S 1200 370, 1440 310"
            fill="none"
            stroke="#C07F45"
            strokeWidth="2"
          />
        </svg>
      </div>

      <div className="relative mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow text-caramel">Get in touch</p>
          </Reveal>
          <SplitHeading
            as="h2"
            lines={[heading]}
            className="mt-6 font-display text-[clamp(2.4rem,6vw,4.5rem)] leading-[0.98] tracking-[-0.02em] text-papaya"
            delay={0.1}
          />
          <Reveal delay={0.25}>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-papaya/70">
              {intro}
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.3} className="lg:col-span-5 lg:justify-self-end">
          <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
            <Link
              to="/contact?intent=quote"
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-caramel px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-warm transition-all duration-300 hover:bg-caramel-deep hover:shadow-[0_18px_40px_-18px_rgba(192,127,69,0.9)]"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-md border border-papaya/35 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-papaya transition-all duration-300 hover:border-baby hover:text-baby"
            >
              Contact EUFIA
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
