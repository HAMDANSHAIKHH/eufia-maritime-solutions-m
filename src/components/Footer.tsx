import { Link } from "react-router";
import { CONTACT, FOOTER_SERVICES, LEGAL_LINKS, PRIMARY_NAV, SITE } from "@/data/site";
import { Logo } from "@/components/Logo";
import { ArrowUpRight } from "lucide-react";
export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy text-papaya">
      {/* swell */}
      <svg
        viewBox="0 0 1440 64"
        preserveAspectRatio="none"
        className="absolute inset-x-0 top-0 h-10 w-full opacity-70"
        aria-hidden="true"
      >
        <path
          d="M0 40 C 180 8, 360 8, 540 34 S 900 62, 1080 36 S 1360 10, 1440 30 L1440 0 L0 0 Z"
          fill="#FCEDDE"
        />
      </svg>

      <div className="mx-auto max-w-[1400px] px-5 pb-10 pt-24 sm:px-8">
        <div className="grid gap-12 border-b border-papaya/15 pb-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Link to="/" aria-label="EUFIA — home">
              <Logo tone="light" />
            </Link>
            <p className="mt-6 max-w-sm font-display text-xl leading-snug text-papaya/90">
              {SITE.positioning}
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-papaya/60">
              EUFIA is a maritime shipping, vessel chartering and global logistics
              company, supporting cargo owners, shipowners and charterers across
              international markets.
            </p>
          </div>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="eyebrow text-baby">Company</h2>
            <ul className="mt-5 space-y-3 text-sm">
              {PRIMARY_NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="group inline-flex items-center gap-1.5 text-papaya/75 transition-colors hover:text-caramel"
                  >
                    {item.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="eyebrow text-baby">Services</h2>
            <ul className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2 lg:grid-cols-1">
              {FOOTER_SERVICES.map((service) => (
                <li key={service.href}>
                  <Link
                    to={service.href}
                    className="group inline-flex items-center gap-1.5 text-papaya/75 transition-colors hover:text-caramel"
                  >
                    {service.label}
                    <ArrowUpRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-baby">Contact</h2>
            <dl className="mt-5 space-y-3.5 text-sm">
              <div>
                <dt className="sr-only">Company</dt>
                <dd className="font-semibold text-papaya">{CONTACT.companyName}</dd>
              </div>
              <div>
                <dt className="sr-only">Email</dt>
                <dd>
                  <a href={`mailto:${CONTACT.email}`} className="text-papaya/75 hover:text-caramel">
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Phone</dt>
                <dd>
                  <a href={`tel:${CONTACT.phone}`} className="text-papaya/75 hover:text-caramel">
                    {CONTACT.phoneFormatted}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="sr-only">Address</dt>
                <dd className="text-xs leading-relaxed text-papaya/70">
                  {CONTACT.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>

            <h2 className="eyebrow mt-8 text-baby">Legal</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {LEGAL_LINKS.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-papaya/75 transition-colors hover:text-caramel">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {CONTACT.socials.length > 0 && (
              <>
                <h2 className="eyebrow mt-8 text-baby">Follow</h2>
                <ul className="mt-4 flex flex-wrap gap-3 text-sm">
                  {CONTACT.socials.map((social) => (
                    <li key={social.href}>
                      <a
                        href={social.href}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="text-papaya/75 hover:text-caramel"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 text-xs text-papaya/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} EUFIA SHIPPING FZCO. All rights reserved. — Maritime shipping, vessel
            chartering &amp; global logistics.
          </p>
        </div>
      </div>
    </footer>
  );
}
