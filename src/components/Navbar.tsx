import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router";
import { SERVICES } from "@/data/services";
import { PRIMARY_NAV } from "@/data/site";
import { EASE } from "@/components/anim/primitives";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

const QUOTE_PATH = "/contact";

/** Routes that open with a navy hero — the bar renders in light tones there. */
const DARK_HERO_PATHS = ["/about", "/privacy-policy", "/terms-and-conditions"];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/services") return pathname.startsWith("/services");
  return pathname === href;
}

export function Navbar() {
  const { pathname } = useLocation();
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const menuCloseTimer = useRef<number | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  /* scrolled state */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* close menus when the route changes (deferred a frame to satisfy render purity) */
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setMegaOpen(false);
      setMobileOpen(false);
      setMobileServicesOpen(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname]);

  /* mobile: lock scroll + escape + focus */
  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => firstMobileLinkRef.current?.focus(), 60);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.clearTimeout(timer);
      window.removeEventListener("keydown", onKey);
      previous?.focus?.();
    };
  }, [mobileOpen]);

  /* desktop: escape closes mega menu */
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMegaOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    return () => {
      if (menuCloseTimer.current) window.clearTimeout(menuCloseTimer.current);
    };
  }, []);

  const openMega = () => {
    if (menuCloseTimer.current) window.clearTimeout(menuCloseTimer.current);
    setMegaOpen(true);
  };
  const scheduleMegaClose = () => {
    if (menuCloseTimer.current) window.clearTimeout(menuCloseTimer.current);
    menuCloseTimer.current = window.setTimeout(() => setMegaOpen(false), 140);
  };

  const solid = scrolled || megaOpen || mobileOpen;
  const darkHero =
    DARK_HERO_PATHS.includes(pathname) || pathname.startsWith("/services/");
  const overDark = darkHero && !solid;

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-md focus:bg-navy focus:px-4 focus:py-2 focus:text-sm focus:text-papaya"
      >
        Skip to content
      </a>

      <header
        className={cn(
          "fixed inset-x-0 top-0 z-[70] transition-all duration-500",
          solid ? "glass border-b border-navy/10 shadow-[0_10px_40px_-24px_rgba(23,43,58,0.4)]" : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:h-[84px]">
          <Link to="/" aria-label="EUFIA — home" className="shrink-0">
            <Logo tone={overDark ? "light" : "dark"} />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {PRIMARY_NAV.map((item) => {
              const active = isActive(pathname, item.href);
              const isServices = item.label === "Services";
              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={isServices ? openMega : undefined}
                  onMouseLeave={isServices ? scheduleMegaClose : undefined}
                >
                  {isServices ? (
                    <button
                      type="button"
                      aria-expanded={megaOpen}
                      aria-haspopup="true"
                      aria-controls="services-mega"
                      onClick={() => setMegaOpen((v) => !v)}
                      onFocus={openMega}
                      onBlur={() => {
                        window.setTimeout(() => {
                          const active = document.activeElement as HTMLElement | null;
                          if (!active) return;
                          const panel = document.getElementById("services-mega");
                          if (panel?.contains(active)) return;
                          if (active.getAttribute("aria-controls") === "services-mega") return;
                          setMegaOpen(false);
                        }, 30);
                      }}
                      className={cn(
                        "relative flex items-center gap-1.5 px-4 py-2 text-[0.9rem] font-medium transition-colors",
                        active || megaOpen
                          ? "text-caramel"
                          : overDark
                            ? "text-papaya/80 hover:text-papaya"
                            : "text-navy/75 hover:text-navy",
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn("h-3.5 w-3.5 transition-transform duration-300", megaOpen && "rotate-180")}
                      />
                      <span
                        className={cn(
                          "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-caramel transition-transform duration-300",
                          active || megaOpen ? "scale-x-100" : "scale-x-0",
                        )}
                      />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "group relative block px-4 py-2 text-[0.9rem] font-medium transition-colors",
                        active
                          ? overDark
                            ? "text-baby"
                            : "text-caramel"
                          : overDark
                            ? "text-papaya/80 hover:text-papaya"
                            : "text-navy/75 hover:text-navy",
                      )}
                    >
                      {item.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-caramel transition-transform duration-300",
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                        )}
                      />
                    </Link>
                  )}
                </div>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to={QUOTE_PATH}
              className="group hidden items-center gap-2 rounded-md bg-caramel px-5 py-2.5 text-[0.85rem] font-semibold tracking-wide text-warm uppercase transition-all duration-300 hover:bg-caramel-deep sm:inline-flex"
            >
              Request a Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              ref={hamburgerRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md lg:hidden"
              style={{ color: overDark ? "#FCEDDE" : "#172B3A" }}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Desktop mega menu */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              id="services-mega"
              key="mega"
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
              onMouseEnter={openMega}
              onMouseLeave={scheduleMegaClose}
              className="absolute inset-x-0 top-full hidden border-t border-navy/10 bg-warm/95 backdrop-blur-xl lg:block"
            >
              <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-8 py-10">
                <div className="col-span-3 border-r border-navy/10 pr-8">
                  <p className="eyebrow text-caramel">Services</p>
                  <p className="mt-4 font-display text-2xl leading-tight text-navy">
                    Ten disciplines, one coordinated scope.
                  </p>
                  <Link
                    to="/services"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-caramel hover:text-caramel-deep"
                  >
                    View all services
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <ul className="col-span-9 grid grid-cols-2 gap-x-8 gap-y-1">
                  {SERVICES.map((service, index) => (
                    <motion.li
                      key={service.slug}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.04 + index * 0.035, duration: 0.4, ease: EASE }}
                    >
                      <Link
                        to={`/services/${service.slug}`}
                        className="group flex items-baseline gap-4 rounded-md px-3 py-3 transition-colors hover:bg-sand"
                      >
                        <span className="font-display text-xs text-caramel/70">{service.number}</span>
                        <span className="flex-1">
                          <span className="block text-[0.95rem] font-medium text-navy group-hover:text-caramel">
                            {service.navLabel}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-steel">
                            {service.tagline}
                          </span>
                        </span>
                        <ArrowRight className="h-4 w-4 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            key="mobile"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="fixed inset-0 z-[80] flex flex-col bg-navy text-papaya lg:hidden"
          >
            <div className="flex h-[72px] shrink-0 items-center justify-between px-5 sm:px-8">
              <Logo tone="light" />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="inline-flex h-11 w-11 items-center justify-center rounded-md text-papaya"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <nav
              aria-label="Mobile"
              className="flex-1 overflow-y-auto px-5 pb-8 sm:px-8"
              onKeyDown={(event) => {
                if (event.key === "Escape") setMobileOpen(false);
              }}
            >
              <ul className="mt-6 space-y-1">
                {PRIMARY_NAV.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={reduce ? false : { opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + index * 0.06, duration: 0.5, ease: EASE }}
                  >
                    <Link
                      ref={index === 0 ? firstMobileLinkRef : undefined}
                      to={item.href}
                      aria-current={isActive(pathname, item.href) ? "page" : undefined}
                      className={cn(
                        "flex items-center justify-between border-b border-papaya/10 py-4 font-display text-3xl tracking-tight transition-colors",
                        isActive(pathname, item.href) ? "text-caramel" : "text-papaya hover:text-baby",
                      )}
                    >
                      {item.label}
                      <ArrowRight className="h-5 w-5 opacity-50" />
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, ease: EASE }}
                className="mt-8"
              >
                <button
                  type="button"
                  aria-expanded={mobileServicesOpen}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between text-left text-sm font-semibold uppercase tracking-[0.2em] text-baby"
                >
                  All services
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", mobileServicesOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {mobileServicesOpen && (
                    <motion.ul
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      {SERVICES.map((service) => (
                        <li key={service.slug}>
                          <Link
                            to={`/services/${service.slug}`}
                            className="flex items-center gap-3 border-b border-papaya/5 py-3 text-[0.95rem] text-papaya/85 hover:text-caramel"
                          >
                            <span className="font-display text-xs text-caramel/80">{service.number}</span>
                            {service.navLabel}
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                initial={reduce ? false : { opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.48, duration: 0.5, ease: EASE }}
                className="mt-10"
              >
                <Link
                  to={QUOTE_PATH}
                  className="flex w-full items-center justify-center gap-2 rounded-md bg-caramel px-6 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-warm"
                >
                  Request a Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-6 font-display text-sm italic leading-relaxed text-papaya/60">
                  Connecting Global Trade Through Intelligent Maritime Solutions.
                </p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
