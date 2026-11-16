# SEO Keyword Map

## 1. Core company and commercial intent

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| EUFIA, EUFIA Maritime Solutions, EUFIA Shipping | `/` | Primary commercial entity page. |
| Shipping company, international shipping company, maritime solutions company | `/about`, `/services` | Brand + company capability explanation. |
| Global shipping services, shipping and logistics company, global logistics services | `/services`, `/global-network` | Aggregated service and network coverage narrative. |
| International freight and shipping services, professional shipping services | `/services`, `/contact` | Commercial conversion intent. |

## 2. Vessel chartering and ship chartering

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Vessel chartering, ship chartering, vessel chartering services | `/services/vessel-chartering` | Primary service-level landing page. |
| International vessel chartering, commercial vessel chartering | `/services/vessel-chartering` | Service-specific commercial intent. |
| Dry bulk vessel chartering, tanker vessel chartering, voyage chartering, time chartering | `/services/vessel-chartering`, `/services/dry-bulk-shipping`, `/services/tanker-chartering` | Distinct but related service intent. |

## 3. Dry bulk and tanker shipping

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Dry bulk shipping, dry bulk cargo shipping, dry bulk logistics | `/services/dry-bulk-shipping` | Core commodity transport intent. |
| Bulk carrier shipping, bulk cargo transportation | `/services/dry-bulk-shipping` | Commodity and vessel matching search intent. |
| Tanker chartering, tanker vessel chartering, liquid bulk shipping | `/services/tanker-chartering` | Liquid cargo and wet tonnage intent. |

## 4. Project cargo and ODC

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Project cargo, project cargo logistics, project cargo shipping | `/services/project-cargo` | Key service page. |
| ODC cargo transportation, oversized cargo logistics, heavy lift cargo | `/services/project-cargo` | ODC heavy-lift service intent. |
| Breakbulk cargo, special cargo transportation | `/services/project-cargo`, `/services/freight-forwarding` | Related handling and forwarding context. |

## 5. Freight forwarding and global logistics

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Freight forwarding, international freight forwarding, global freight forwarding | `/services/freight-forwarding` | Core logistical service page. |
| Sea freight forwarding, air freight forwarding, multimodal freight solutions | `/services/freight-forwarding`, `/services/global-logistics` | Mode and combined logistics intent. |
| International logistics, global logistics, supply chain logistics | `/services/global-logistics` | Broader commercial and B2B coverage. |

## 6. Marine survey, inspection and compliance

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Cargo inspection, marine cargo inspection, vessel inspection | `/services/cargo-inspection` | Primary inspection service page. |
| Marine survey services, shipping inspection services, vessel condition inspection | `/services/cargo-inspection` | Survey and condition intent. |
| SIRE inspection preparation, RightShip support, PSC support | `/services/cargo-inspection`, `/services/maritime-consultancy` | Vetting and compliance-related intent. |

## 7. Maritime consultancy and advisory

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Maritime consultancy, shipping consultancy, maritime advisory services | `/services/maritime-consultancy` | Core advisory and risk content. |
| Shipping operations consultancy, chartering consultancy, maritime risk assessment | `/services/maritime-consultancy` | Operational decision support. |

## 8. Vessel spare parts

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Vessel spare parts, ship spare parts supplier, marine equipment supply | `/services/vessel-spare-parts-supply-coordination` | Primary spare-parts coordination intent. |
| Vessel spare parts procurement, marine spare parts logistics | `/services/vessel-spare-parts-supply-coordination` | Procurement and coordination context. |

## 9. Maritime AI and digital solutions

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Maritime AI solutions, AI in shipping, maritime technology solutions | `/services/maritime-ai-digital-solutions` | Custom digital capability page. |
| Maritime software, shipping management software, vessel data analysis | `/services/maritime-ai-digital-solutions` | Product and internal capability differentiation. |

## 10. Geographic search intent

| Search intent cluster | Target page | Notes |
| --- | --- | --- |
| Shipping services in UAE, shipping company in UAE, international shipping services from Dubai | `/services`, `/contact`, `/about` | Keep broad but factual. |
| Freight forwarding in Dubai, project cargo logistics in Dubai | `/services/freight-forwarding`, `/services/project-cargo` | Supported by actual service offering and regional relevance. |
| Vessel chartering in UAE, dry bulk shipping in UAE, tanker chartering in UAE | `/services/vessel-chartering`, `/services/dry-bulk-shipping`, `/services/tanker-chartering` | Service-level geographic relevance based on actual business scope. |

## 11. Internal architecture guidance

The site should keep the following hierarchy:

- `/` = primary brand and service overview
- `/about` = company story and operating model
- `/services` = service index page
- `/services/:slug` = subject-specific service landing pages
- `/global-network` = geographic and commercial context
- `/contact` = conversion page
- `/sitemap` and `/sitemap.xml` = crawlability / discovery support

No structural page should target redundant keyword variations without clear intent differentiation.
