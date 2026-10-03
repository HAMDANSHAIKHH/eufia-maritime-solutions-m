/**
 * EUFIA — central service data source.
 *
 * The supplied service descriptions are the source of truth. Expanded copy is
 * written to be professionally accurate without inventing fleet specifications,
 * certifications, guarantees, office locations or statistical claims.
 */

export type ServiceHighlight = {
  title: string;
  text: string;
};

/** Illustration keys — kept here so cards, menus and pages share one source. */
export type ArtVariant =
  | "chartering"
  | "drybulk"
  | "tanker"
  | "forwarding"
  | "project"
  | "consultancy"
  | "inspection"
  | "logistics"
  | "ai"
  | "spares";


export type Service = {
  slug: string;
  number: string;
  title: string;
  /** Short label for menus and footers. */
  navLabel: string;
  /** One-line hook used on cards. */
  tagline: string;
  /** Supplied description — source of truth. */
  description: string;
  /** Expanded, factually responsible overview paragraphs. */
  overview: string[];
  highlights: ServiceHighlight[];
  /** Key terms / cargo categories relevant to the service. */
  focus: string[];
  /** Art variant key used by the illustration system. */
  art: ArtVariant;
  seoTitle: string;
  seoDescription: string;
  related: string[];
};

export const SERVICES: Service[] = [
  {
    slug: "vessel-chartering",
    number: "01",
    title: "Vessel Chartering",
    navLabel: "Vessel Chartering",
    tagline: "Tailored chartering and shipbroking for dependable cargo movements.",
    description:
      "We provide tailored vessel chartering and shipbroking solutions to support efficient, dependable, and economical dry bulk and tanker cargo movements worldwide.",
    overview: [
      "Vessel chartering sits at the core of EUFIA's maritime activity. We work between cargo interests and vessel owners to structure charters that fit the cargo, the trading pattern and the commercial priorities of each individual fixture.",
      "Every enquiry starts with the fundamentals: cargo type and volume, laycan, loading and discharging areas, and the commercial terms that govern the voyage. From there we identify suitable tonnage, negotiate fixture terms and coordinate the documentation that carries a fixture from recap to execution.",
      "Our approach is deliberately hands-on. Chartering is a coordination discipline, and outcomes depend on clear communication between principals, operators, brokers and terminals throughout the life of the charter.",
    ],
    highlights: [
      {
        title: "Dry bulk and tanker cargo",
        text: "Chartering solutions covering dry bulk commodities and tanker cargoes, matched to the right tonnage for the voyage.",
      },
      {
        title: "Shipbroking expertise",
        text: "Market-aware negotiation of charter parties, freight rates and voyage terms on behalf of our clients.",
      },
      {
        title: "Fixture coordination",
        text: "Structured follow-through from initial enquiry and option period through recap, execution and post-fixture queries.",
      },
      {
        title: "Economical cargo movements",
        text: "Attention to laycan, port sequencing and voyage economics to support efficient and dependable transport.",
      },
    ],
    focus: ["Vessel sourcing", "Charter party negotiation", "Voyage planning", "Post-fixture coordination"],
    art: "chartering",
    seoTitle: "Vessel Chartering & Shipbroking Services | EUFIA",
    seoDescription:
      "EUFIA provides tailored vessel chartering and shipbroking for dry bulk and tanker cargo movements, supporting efficient, dependable and economical fixtures worldwide.",
    related: ["dry-bulk-shipping", "tanker-chartering", "maritime-consultancy"],
  },
  {
    slug: "dry-bulk-shipping",
    number: "02",
    title: "Dry Bulk Shipping",
    navLabel: "Dry Bulk Shipping",
    tagline: "Ocean transport of raw materials, commodities and heavy bulk cargo.",
    description:
      "Comprehensive dry bulk chartering services, managing the global ocean transport of dry raw materials, commodities, and heavy bulk cargo.",
    overview: [
      "Dry bulk shipping moves the raw materials that industry depends on — ores, grains, fertilisers, coals, steels and a wide range of secondary commodities. EUFIA arranges the ocean transport that connects producers, traders and end users across international markets.",
      "We handle the commercial and operational coordination of bulk fixtures: matching cargo to suitable gear or gearless tonnage, aligning laycan with terminal readiness, and keeping communication clear between shippers, receivers, agents and owners throughout the voyage.",
      "From single voyage shipments to repeat programme cargoes, our focus is the same — predictable fixtures, well-managed documentation and cargo that moves on schedule.",
    ],
    highlights: [
      {
        title: "Full dry bulk coverage",
        text: "Chartering across major and minor bulk commodities, from raw materials to finished industrial products.",
      },
      {
        title: "Tonnage matching",
        text: "Suitable vessel selection based on cargo characteristics, port restrictions, stowage and discharge requirements.",
      },
      {
        title: "Voyage coordination",
        text: "Ongoing liaison with terminals, agents and counterparties to keep loading and discharging programmes on track.",
      },
      {
        title: "Programme and spot cargoes",
        text: "Support for both one-off shipments and repeating cargo programmes on terms that suit the client.",
      },
    ],
    focus: ["Ores and coals", "Grains and fertilisers", "Steels and project materials", "Minor bulk commodities"],
    art: "drybulk",
    seoTitle: "Dry Bulk Shipping & Chartering Services | EUFIA",
    seoDescription:
      "Comprehensive dry bulk chartering from EUFIA, managing the global ocean transport of dry raw materials, commodities and heavy bulk cargo.",
    related: ["vessel-chartering", "project-cargo", "freight-forwarding"],
  },
  {
    slug: "tanker-chartering",
    number: "03",
    title: "Tanker Chartering",
    navLabel: "Tanker Chartering",
    tagline: "Secure marine transport for crude, chemical and edible oil cargoes.",
    description:
      "Liquid tanker chartering and post-fixture management. Secure marine transport for crude oil, chemical cargo, and edible oils.",
    overview: [
      "Tanker chartering demands precision. Liquid cargoes — crude oil, chemicals and edible oils — each carry their own commercial, technical and regulatory considerations, and the margin for loose coordination is small.",
      "EUFIA arranges liquid tanker fixtures with close attention to cargo compatibility, terminal compatibility, specification requirements and laycan discipline, then carries the fixture through post-fixture management so that voyage obligations are tracked and communicated.",
      "Our post-fixture work covers the operational correspondence that keeps a liquid voyage on terms: fixtures recap, statements of facts, laytime and demurrage handling, and steady communication between all parties until the voyage closes.",
    ],
    highlights: [
      {
        title: "Crude oil and refined products",
        text: "Chartering arrangements for crude and product cargoes matched to appropriate wet tonnage.",
      },
      {
        title: "Chemical and edible oils",
        text: "Coordination for chemical and edible oil shipments where cargo specification and compatibility matter.",
      },
      {
        title: "Post-fixture management",
        text: "Active handling of voyage correspondence, statements of facts, laytime and demurrage matters.",
      },
      {
        title: "Secure, structured process",
        text: "Disciplined documentation and communication from fixture conclusion through final voyage close-out.",
      },
    ],
    focus: ["Crude oil", "Chemical cargo", "Edible oils", "Post-fixture management"],
    art: "tanker",
    seoTitle: "Tanker Chartering & Post-Fixture Management | EUFIA",
    seoDescription:
      "Liquid tanker chartering and post-fixture management from EUFIA — secure marine transport for crude oil, chemical cargo and edible oils.",
    related: ["vessel-chartering", "cargo-inspection", "maritime-consultancy"],
  },
  {
    slug: "freight-forwarding",
    number: "04",
    title: "Freight Forwarding",
    navLabel: "Freight Forwarding",
    tagline: "End-to-end coordination across ocean and air freight.",
    description:
      "We manage end-to-end freight forwarding operations, ensuring smooth coordination and efficient ocean and air freight shipping across global supply chains.",
    overview: [
      "Freight forwarding is orchestration. EUFIA coordinates the many hand-offs that a shipment passes through — booking, collection, documentation, carrier handling, customs formalities and final delivery — so that the cargo keeps moving without loose ends.",
      "We arrange both ocean and air freight, selecting the mode that fits the cargo, the timeline and the budget, and we keep the parties involved informed at each stage of the shipment.",
      "For clients managing regular flows, we structure the forwarding process so that documentation, schedules and communication remain consistent from one shipment to the next.",
    ],
    highlights: [
      {
        title: "Ocean and air freight",
        text: "Mode selection and carrier arrangement for full containers, breakbulk, and time-critical air shipments.",
      },
      {
        title: "End-to-end operations",
        text: "Coordinated handling of booking, collection, transit and delivery milestones across the supply chain.",
      },
      {
        title: "Documentation control",
        text: "Careful preparation and tracking of shipping documentation to keep customs and carrier processes smooth.",
      },
      {
        title: "Shipment visibility",
        text: "Clear status communication so that cargo owners always know where their shipment stands.",
      },
    ],
    focus: ["Ocean freight", "Air freight", "Documentation", "Multimodal coordination"],
    art: "forwarding",
    seoTitle: "Freight Forwarding — Ocean & Air Freight | EUFIA",
    seoDescription:
      "EUFIA manages end-to-end freight forwarding operations, ensuring smooth coordination and efficient ocean and air freight shipping across global supply chains.",
    related: ["global-logistics", "project-cargo", "dry-bulk-shipping"],
  },
  {
    slug: "project-cargo",
    number: "05",
    title: "Project Cargo & ODC",
    navLabel: "Project Cargo & ODC",
    tagline: "Heavy-lift, oversized and high-value equipment, moved with control.",
    description:
      "We handle complex project cargo and Over Dimensional Cargo (ODC), ensuring safe, compliant ocean freight transportation of oversized, heavy-lift, and high-value equipment.",
    overview: [
      "Project cargo covers the loads that do not fit neatly into a standard container: industrial modules, machinery, transformers, plant components and other over dimensional cargo that requires deliberate engineering and careful handling.",
      "EUFIA plans these movements around the cargo itself — dimensions, weight distribution, lifting points, routing, and the capabilities of the loading and discharge ports — then arranges the transport that carries them safely to destination.",
      "Compliance and safety sit alongside the commercial work. High-value and heavy-lift shipments are managed with documentation, method coordination and communication tailored to the sensitivity of each project.",
    ],
    highlights: [
      {
        title: "Over Dimensional Cargo",
        text: "Planning and transport arrangements for cargo that exceeds standard dimensions or weight thresholds.",
      },
      {
        title: "Heavy-lift handling",
        text: "Coordination of lifting, stowage and securing considerations with suitable tonnage and terminal facilities.",
      },
      {
        title: "High-value equipment",
        text: "Careful documentation and chain-of-communication discipline for sensitive, high-value shipments.",
      },
      {
        title: "Complex logistics planning",
        text: "Route, port and schedule planning built around the specific demands of each project movement.",
      },
    ],
    focus: ["Heavy-lift", "Oversized modules", "Industrial plant", "High-value equipment"],
    art: "project",
    seoTitle: "Project Cargo & Over Dimensional Cargo (ODC) | EUFIA",
    seoDescription:
      "EUFIA handles complex project cargo and Over Dimensional Cargo, ensuring safe, compliant ocean freight transportation of oversized, heavy-lift and high-value equipment.",
    related: ["freight-forwarding", "dry-bulk-shipping", "global-logistics"],
  },
  {
    slug: "maritime-consultancy",
    number: "06",
    title: "Maritime Consultancy",
    navLabel: "Maritime Consultancy",
    tagline: "Optimise vessel performance and maintain regulatory compliance.",
    description:
      "Our maritime consultancy and audit services help ship operators optimize vessel performance, maintain regulatory compliance (SIRE/RightShip), and mitigate operational risks.",
    overview: [
      "Ship operators work inside a demanding framework of vetting expectations, class requirements and internal standards. EUFIA's consultancy and audit services are built to help operators stay ahead of that framework.",
      "We review operational practice against the requirements that matter to the vessel's trading profile — including SIRE and RightShip expectations — identify gaps while they are still manageable, and help operators turn findings into practical corrective action.",
      "The aim is straightforward: better vessel performance, fewer surprises during vetting and inspection, and operational risk that is identified early rather than discovered late.",
    ],
    highlights: [
      {
        title: "Vessel performance review",
        text: "Structured assessment of operational practice to identify where performance and efficiency can be improved.",
      },
      {
        title: "SIRE and RightShip readiness",
        text: "Support in maintaining compliance with key vetting regimes and preparing documentation for review.",
      },
      {
        title: "Audit and gap analysis",
        text: "Independent examination of procedures, records and onboard practice against applicable requirements.",
      },
      {
        title: "Operational risk mitigation",
        text: "Practical recommendations that translate findings into corrective action and improved day-to-day practice.",
      },
    ],
    focus: ["Vessel performance", "SIRE compliance", "RightShip readiness", "Operational audits"],
    art: "consultancy",
    seoTitle: "Maritime Consultancy & Audit Services | EUFIA",
    seoDescription:
      "Maritime consultancy and audit services from EUFIA — helping ship operators optimise vessel performance, maintain SIRE/RightShip compliance and mitigate operational risk.",
    related: ["cargo-inspection", "vessel-chartering", "tanker-chartering"],
  },
  {
    slug: "cargo-inspection",
    number: "07",
    title: "Cargo Inspection",
    navLabel: "Cargo Inspection",
    tagline: "Independent surveys and inspections for compliance-ready operations.",
    description:
      "Comprehensive independent vessel condition surveys, cargo inspections, and preparation services for RightShip, SIRE, and PSC compliance.",
    overview: [
      "Independent inspection protects cargo, vessel and reputation alike. EUFIA provides vessel condition surveys, cargo inspections and preparation support carried out with an impartial, documented approach.",
      "Condition surveys record the state of the vessel and its equipment ahead of critical stages, while cargo inspections verify quantity, quality and handling conditions at the points where they matter.",
      "For operators preparing for vetting or port state control, our preparation services help surface findings early, so that corrective work happens on the operator's schedule rather than during the inspection itself.",
    ],
    highlights: [
      {
        title: "Vessel condition surveys",
        text: "Independent assessment of vessel condition and equipment with clear, documented findings.",
      },
      {
        title: "Cargo inspection",
        text: "Verification of cargo condition, quantity and handling at loading and discharge where required.",
      },
      {
        title: "RightShip & SIRE preparation",
        text: "Pre-inspection readiness support that helps operators address findings ahead of vetting reviews.",
      },
      {
        title: "PSC compliance support",
        text: "Preparation assistance aimed at supporting clean, well-documented port state control attendance.",
      },
    ],
    focus: ["Condition surveys", "Cargo inspection", "Vetting preparation", "PSC readiness"],
    art: "inspection",
    seoTitle: "Cargo Inspection & Vessel Condition Surveys | EUFIA",
    seoDescription:
      "Comprehensive independent vessel condition surveys, cargo inspections and preparation services from EUFIA for RightShip, SIRE and PSC compliance.",
    related: ["maritime-consultancy", "tanker-chartering", "dry-bulk-shipping"],
  },
  {
    slug: "global-logistics",
    number: "08",
    title: "Global Logistics",
    navLabel: "Global Logistics",
    tagline: "End-to-end B2B supply chain, integrated across modes and borders.",
    description:
      "Customized end-to-end B2B supply chain solutions, integrating multimodal transport, customs brokerage, and cargo distribution logistics.",
    overview: [
      "Global logistics is where individual shipments become a supply chain. EUFIA designs end-to-end B2B arrangements that connect ocean and inland transport, customs formalities and distribution into one coordinated flow.",
      "Every solution is built around the client's actual movement — cargo profile, volumes, destinations and service expectations — rather than a fixed package, because supply chains rarely repeat themselves exactly.",
      "By keeping multimodal transport, customs brokerage and distribution under one coordinated scope, we reduce the hand-off friction that so often causes delay between legs of a journey.",
    ],
    highlights: [
      {
        title: "Multimodal transport",
        text: "Ocean, road, rail and air legs coordinated as a single movement with one point of communication.",
      },
      {
        title: "Customs brokerage",
        text: "Support with customs formalities and documentation to keep cross-border flows moving cleanly.",
      },
      {
        title: "Cargo distribution",
        text: "Planning of onward distribution so that cargo reaches its destination on agreed terms.",
      },
      {
        title: "Tailored B2B solutions",
        text: "Supply chain design shaped around each client's cargo, routes and service expectations.",
      },
    ],
    focus: ["Multimodal transport", "Customs brokerage", "Distribution logistics", "Supply chain design"],
    art: "logistics",
    seoTitle: "Global Logistics & B2B Supply Chain Solutions | EUFIA",
    seoDescription:
      "Customised end-to-end B2B supply chain solutions from EUFIA, integrating multimodal transport, customs brokerage and cargo distribution logistics.",
    related: ["freight-forwarding", "project-cargo", "vessel-chartering"],
  },
  {
    slug: "maritime-ai-digital-solutions",
    number: "09",
    title: "Maritime AI & Digital Solutions",
    navLabel: "Maritime AI & Digital Solutions",
    tagline: "Custom AI software and automation, built for shipping.",
    description:
      "We develop custom AI-powered software, intelligent automation and digital solutions tailored to the maritime and shipping industry. Our solutions help shipping companies streamline operations, automate workflows, enhance operational efficiency and make data-driven decisions.",
    overview: [
      "Shipping generates data at every stage — fixture terms, voyage records, port calls, invoices, cargo documentation and the day-to-day correspondence that keeps operations moving. EUFIA builds the software that turns that data into practical, working tools tailored to how each company actually operates.",
      "Our work covers custom AI software development, maritime data analysis and reporting, intelligent workflow automation and bespoke shipping management systems. Each solution is designed around a specific process, so repetitive manual effort is reduced, information stays consistent and teams have the visibility they need to make data-driven decisions.",
      "Digital transformation does not have to mean replacing everything at once. We identify the workflows where automation and better tooling add the most value, then build and integrate step by step so new software fits alongside existing systems, teams and responsibilities.",
    ],
    highlights: [
      {
        title: "Custom AI software",
        text: "AI-powered software developed specifically for shipping companies and their operational processes.",
      },
      {
        title: "Maritime data analysis",
        text: "AI-powered analysis and reporting of maritime data, structured to support data-driven decisions.",
      },
      {
        title: "Workflow automation",
        text: "Intelligent automation of repetitive workflows so operational teams spend less time on manual steps.",
      },
      {
        title: "Shipping management software",
        text: "Bespoke shipping management software, AI agents and digital transformation support.",
      },
    ],
    focus: ["Custom AI software", "Data analysis & reporting", "Workflow automation", "Digital transformation"],
    art: "ai",
    seoTitle: "Maritime AI & Digital Solutions | EUFIA",
    seoDescription:
      "Custom AI software, maritime data analysis, workflow automation and shipping management software from EUFIA — digital solutions built for the shipping industry.",
    related: ["maritime-consultancy", "global-logistics", "freight-forwarding"],
  },
  {
    slug: "vessel-spare-parts-supply-coordination",
    number: "10",
    title: "Vessel Spare Parts Supply & Coordination",
    navLabel: "Vessel Spare Parts Supply & Coordination",
    tagline: "Marine spare parts sourcing, procurement and supply.",
    description:
      "We facilitate vessel spare parts sourcing, procurement and supply coordination, helping shipowners and operators obtain essential marine equipment and spare parts. Our services focus on efficient procurement, supplier coordination and logistics to support vessel maintenance and operational requirements.",
    overview: [
      "Vessel operations depend on the right parts arriving at the right time. EUFIA facilitates the sourcing, procurement and supply coordination that keeps essential marine equipment and spare parts moving from supplier to ship.",
      "Every request starts with the part itself — specification, quantities, and the vessel's port and schedule. From there we identify suitable suppliers, coordinate procurement, and arrange shipping and delivery so that maintenance and operational requirements are supported without avoidable delay.",
      "Spare parts requests are frequently time-sensitive, so our focus stays on clear communication and dependable coordination between shipowners, operators, suppliers and logistics providers throughout the order — from first enquiry through to delivery.",
    ],
    highlights: [
      {
        title: "Marine spare parts sourcing",
        text: "Sourcing of essential marine equipment and spare parts matched to the vessel's requirements.",
      },
      {
        title: "Procurement coordination",
        text: "Structured coordination of equipment procurement between shipowners, operators and suppliers.",
      },
      {
        title: "Supplier identification",
        text: "Identification of suitable suppliers and management of communication across the order.",
      },
      {
        title: "Supply and delivery",
        text: "Shipping and delivery coordination aligned with vessel maintenance and operational schedules.",
      },
    ],
    focus: ["Spare parts sourcing", "Procurement coordination", "Supplier coordination", "Delivery & logistics"],
    art: "spares",
    seoTitle: "Vessel Spare Parts Supply & Coordination | EUFIA",
    seoDescription:
      "Marine spare parts sourcing, vessel equipment procurement and supply coordination from EUFIA — supplier identification, shipping and delivery support for vessel maintenance.",
    related: ["dry-bulk-shipping", "tanker-chartering", "global-logistics"],
  },
];

export const SERVICES_BY_SLUG: Record<string, Service> = Object.fromEntries(
  SERVICES.map((service) => [service.slug, service]),
);

export function getService(slug?: string): Service | undefined {
  if (!slug) return undefined;
  return SERVICES_BY_SLUG[slug];
}

export const SERVICE_COVER_IMAGES: Record<string, string> = {
  "vessel-chartering": "/images/services/shi6.jpg",
  "dry-bulk-shipping": "/images/services/ship2.jpg",
  "tanker-chartering": "/images/services/tanker-chartering.jpg",
  "freight-forwarding": "/images/services/freight-forwarding.png",
  "project-cargo": "/images/services/project-cargo.jpg",
  "maritime-consultancy": "/images/services/audits.jpg",
  "cargo-inspection": "/images/services/cargo-inspection.jpg",
  "global-logistics": "/images/services/cargo1.jpg",
  "maritime-ai-digital-solutions": "/images/services/software.png",
  "vessel-spare-parts-supply-coordination": "/images/services/vessel-spare-parts.jpg",
};

export const SERVICE_IMAGE_FIT: Record<string, string> = {
  "vessel-chartering": "object-cover object-center",
  "dry-bulk-shipping": "object-cover object-center",
  "tanker-chartering": "object-cover object-center",
  "freight-forwarding": "object-cover object-center",
  "project-cargo": "object-cover object-center",
  "maritime-consultancy": "object-cover object-center",
  "cargo-inspection": "object-cover object-center",
  "global-logistics": "object-cover object-center",
  "maritime-ai-digital-solutions": "object-contain p-3 sm:object-cover sm:p-0 object-center",
  "vessel-spare-parts-supply-coordination": "object-cover object-center",
};

