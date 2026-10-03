import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";
import { SERVICES, SERVICE_COVER_IMAGES } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";

/**
 * Signature services showcase.
 *
 * Desktop: a sticky horizontal track driven by vertical scroll (GSAP-style
 * effect implemented with framer-motion's scroll values — no extra library).
 * Touch / reduced-motion: an honest snap-scrolling carousel.
 */
export function ServicesScroller({ header }: { header?: ReactNode }) {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [desktop, setDesktop] = useState(false);
  const [overflow, setOverflow] = useState(0);

  useLayoutEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px) and (min-height: 640px)");
    const update = () => setDesktop(mq.matches && !reduce);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [reduce]);

  useLayoutEffect(() => {
    if (!desktop) return;
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const extra = track.scrollWidth - window.innerWidth;
      setOverflow(Math.max(0, Math.round(extra)));
    };
    measure();
    const timer = window.setTimeout(measure, 600); // after webfonts settle
    window.addEventListener("resize", measure);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [desktop]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -overflow]);

  const sticky = desktop && overflow > 0;

  const cards = SERVICES.map((service) => (
    <div
      key={service.slug}
      className="w-[80vw] shrink-0 snap-center sm:w-[400px] lg:w-[430px]"
    >
      <ServiceCard
        service={service}
        layout="overlay"
        coverImage={SERVICE_COVER_IMAGES[service.slug]}
      />
    </div>
  ));

  if (!sticky) {
    return (
      <section
        ref={sectionRef}
        className="border-y border-navy/10 bg-sand/60 py-20 lg:py-24"
        aria-label="Services showcase"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8">{header}</div>
        <div
          ref={trackRef}
          className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8 [scrollbar-width:thin]"
        >
          {cards}
        </div>
        <p className="px-5 text-xs uppercase tracking-[0.2em] text-steel sm:px-8">
          Scroll horizontally to browse →
        </p>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-navy/10 bg-sand/60"
      style={{ height: `calc(100vh + ${overflow}px)` }}
      aria-label="Services showcase"
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
        <div className="mx-auto w-full max-w-[1400px] px-5 pb-8 pt-28 sm:px-8">
          {header}
        </div>
        <div className="overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex w-max gap-6 px-5 will-change-transform sm:px-8"
          >
            {cards}
          </motion.div>
        </div>
        <div className="mx-auto mt-8 w-full max-w-[1400px] px-5 sm:px-8">
          <div className="h-px w-full bg-navy/15">
            <motion.div
              className="h-px origin-left bg-caramel"
              style={{ scaleX: scrollYProgress }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
