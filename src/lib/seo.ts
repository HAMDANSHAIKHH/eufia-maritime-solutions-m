import { useEffect } from "react";
import { CONTACT, SITE } from "@/data/site";

/**
 * SPA SEO utilities.
 *
 * This project is a client-rendered React app, so titles, descriptions,
 * canonical links, social metadata and JSON-LD are maintained in <head>
 * as each route mounts. Static technical SEO files (sitemap.xml, robots.txt)
 * live in /public.
 */

export type JsonLd = Record<string, unknown> | Record<string, unknown>[];

export type PageSeo = {
  title: string;
  description: string;
  /** Route path, e.g. "/services/vessel-chartering". */
  path: string;
  noindex?: boolean;
  jsonLd?: JsonLd;
  image?: string;
};

export function absoluteUrl(path: string): string {
  if (typeof window === "undefined") return `${SITE.url}${path}`;
  const origin = window.location.origin;
  return path.startsWith("http") ? path : `${origin}${path}`;
}

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function upsertJsonLd(id: string, data: JsonLd | undefined) {
  const existing = document.head.querySelector(`script[data-seo-id="${id}"]`);
  if (!data) {
    existing?.remove();
    return;
  }
  let script = existing as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.seoId = id;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(data);
}

/** Applies title / meta / canonical / Open Graph / JSON-LD for the current route. */
export function usePageSeo({
  title,
  description,
  path,
  noindex = false,
  jsonLd,
  image,
}: PageSeo) {
  const serialized = jsonLd ? JSON.stringify(jsonLd) : "";

  useEffect(() => {
    const fullTitle = title.endsWith("EUFIA") || title.includes("EUFIA") ? title : `${title} | EUFIA`;
    const canonical = absoluteUrl(path);

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, nofollow" : "index, follow");

    upsertLink("canonical", canonical);

    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", canonical);
    upsertMeta("property", "og:type", "website");
    if (image) upsertMeta("property", "og:image", absoluteUrl(image));

    upsertMeta("name", "twitter:card", image ? "summary_large_image" : "summary");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);

    upsertJsonLd("page", serialized ? (JSON.parse(serialized) as JsonLd) : undefined);
  }, [title, description, path, noindex, serialized, image]);
}

/* ---------------- Structured data builders ---------------- */

export function organizationJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: CONTACT.companyName,
    url: SITE.url,
    description: SITE.description,
    slogan: SITE.positioning,
    email: CONTACT.email,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "DSO - IFZA - 88094 - 001, Building A1, Dubai Digital Park, Dubai Silicon Oasis",
      addressLocality: "Dubai",
      addressCountry: "AE",
    },
  };
}

export function websiteJsonLd(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    description: SITE.description,
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.path),
    provider: {
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
    },
  };
}

/** Merge several JSON-LD nodes into one script block. */
export function mergeJsonLd(...nodes: (JsonLd | undefined)[]): JsonLd {
  const flattened: Record<string, unknown>[] = [];
  for (const node of nodes) {
    if (!node) continue;
    if (Array.isArray(node)) {
      flattened.push(...(node as Record<string, unknown>[]));
    } else {
      flattened.push(node as Record<string, unknown>);
    }
  }
  return flattened;
}
