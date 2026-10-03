import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { ServiceArt } from "@/components/art/scenes";
import { SERVICE_IMAGE_FIT, type Service } from "@/data/services";
import { cn } from "@/lib/utils";

export type ServiceCardLayout = "overlay" | "split" | "row";

/**
 * Service card with three layouts so listing pages stay varied while sharing
 * one design system. Every card links to its dedicated service page.
 */
export function ServiceCard({
  service,
  layout = "overlay",
  align = "left",
  className,
  coverImage,
}: {
  service: Service;
  layout?: ServiceCardLayout;
  /** For `split`: which side the artwork sits on. */
  align?: "left" | "right";
  className?: string;
  coverImage?: string;
}) {
  const href = `/services/${service.slug}`;
  const artTitle = `${service.title} — maritime service illustration`;

  const renderVisual = () => {
    if (coverImage) {
      const fitClass = SERVICE_IMAGE_FIT[service.slug] || "object-cover object-center";
      return (
        <img
          src={coverImage}
          alt={service.title}
          className={cn("h-full w-full", fitClass)}
        />
      );
    }
    return <ServiceArt variant={service.art} title={artTitle} />;
  };

  if (layout === "split") {
    const artFirst = align === "left";
    return (
      <Link
        to={href}
        className={cn(
          "group grid items-center gap-7 md:grid-cols-12 md:gap-12",
          className,
        )}
      >
        <div
          className={cn(
            "relative overflow-hidden rounded-lg border border-navy/10 md:col-span-7",
            !artFirst && "md:order-2",
          )}
        >
          <div className="aspect-[16/10] w-full transition-transform duration-700 ease-out group-hover:scale-[1.04]">
            {renderVisual()}
          </div>
          <span className="absolute left-4 top-4 rounded-full bg-warm/90 px-3 py-1 font-display text-xs tracking-[0.2em] text-caramel">
            {service.number}
          </span>
        </div>
        <div className={cn("md:col-span-5", !artFirst && "md:order-1")}>
          <span className="eyebrow text-caramel">{service.focus[0]}</span>
          <h3 className="mt-4 font-display text-[clamp(1.8rem,3vw,2.6rem)] leading-[1.02] tracking-[-0.02em] text-navy transition-colors duration-300 group-hover:text-caramel">
            {service.title}
          </h3>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-steel">
            {service.description}
          </p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-caramel">
            Explore service
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </Link>
    );
  }

  if (layout === "row") {
    return (
      <Link
        to={href}
        className={cn(
          "group flex items-center gap-5 border-t border-navy/15 py-6 transition-colors duration-300 hover:bg-sand/70 sm:gap-8",
          className,
        )}
      >
        <span className="font-display text-sm text-caramel/70">{service.number}</span>
        <span className="min-w-0 flex-1">
          <span className="block font-display text-2xl leading-tight tracking-[-0.02em] text-navy transition-colors duration-300 group-hover:text-caramel sm:text-3xl">
            {service.title}
          </span>
          <span className="mt-1.5 block text-sm leading-relaxed text-steel">
            {service.tagline}
          </span>
        </span>
        <span className="hidden h-24 w-40 shrink-0 overflow-hidden rounded-md sm:block">
          <span className="block h-full w-full transition-transform duration-700 group-hover:scale-110">
            {renderVisual()}
          </span>
        </span>
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-navy/20 text-navy transition-all duration-300 group-hover:border-caramel group-hover:bg-caramel group-hover:text-warm">
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    );
  }

  /* overlay */
  return (
    <Link
      to={href}
      className={cn(
        "group relative block aspect-[4/3] overflow-hidden rounded-lg bg-navy sm:aspect-[4/3]",
        className,
      )}
    >
      <div className="absolute inset-0 transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
        {renderVisual()}
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-6">
        <span className="font-display text-sm tracking-[0.3em] text-papaya/85">
          {service.number}
        </span>
        <div>
          <h3 className="font-display text-[clamp(1.6rem,2.4vw,2.2rem)] leading-tight tracking-[-0.02em] text-papaya">
            {service.title}
          </h3>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-papaya/75">
            {service.tagline}
          </p>
          <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-caramel">
            Explore service
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
