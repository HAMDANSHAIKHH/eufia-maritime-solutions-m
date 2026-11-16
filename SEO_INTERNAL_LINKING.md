# SEO Internal Linking Map

## Primary architecture

- Homepage `/` links to:
  - About `/about`
  - Services `/services`
  - Global Network `/global-network`
  - Contact `/contact`
  - Primary service pages

- Services index `/services` links to:
  - All service detail pages
  - Contact page for quote requests
  - About page for company context

- About page `/about` links to:
  - Services overview `/services`
  - Contact `/contact`
  - Relevant service pages by capability

- Contact page `/contact` links to:
  - Services overview `/services`
  - Relevant service-specific enquiry pages
  - Privacy and legal pages

## Service-level linking pattern

Each service detail page should include:

- Back to services overview
- Related service links
- A CTA to `Contact` with service query intent
- Optional educational resources context where available

Example pattern:

- `Vessel Chartering` -> dry bulk, tanker chartering, maritime consultancy
- `Dry Bulk Shipping` -> vessel chartering, project cargo, freight forwarding
- `Tanker Chartering` -> cargo inspection, maritime consultancy, vessel chartering
- `Freight Forwarding` -> global logistics, project cargo, vessel chartering
- `Project Cargo` -> freight forwarding, global logistics, dry bulk shipping
- `Maritime Consultancy` -> cargo inspection, tanker chartering, vessel chartering
- `Cargo Inspection` -> maritime consultancy, tanker chartering, dry bulk shipping
- `Global Logistics` -> freight forwarding, project cargo, vessel chartering
- `Maritime AI & Digital Solutions` -> maritime consultancy, global logistics, freight forwarding
- `Vessel Spare Parts` -> dry bulk shipping, tanker chartering, global logistics

## Recommended anchor text

Use descriptive anchor text rather than generic phrasing:

- “Vessel chartering services”
- “Dry bulk shipping solutions”
- “Project cargo and ODC logistics”
- “Maritime consultancy and audit support”
- “Cargo inspection and vetting preparation”
- “Freight forwarding and global logistics”
- “Request a quote”

## Link hygiene rules

- Keep all key pages crawlable via HTML links.
- Avoid “click here” or non-descriptive navigation.
- Keep the service and conversion path obvious across devices.
- Ensure each important service page has at least one strong secondary navigation link.
