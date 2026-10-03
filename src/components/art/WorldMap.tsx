/**
 * EUFIA world map — a stylised dot-matrix globe projection with illustrative
 * maritime corridors.
 *
 * Continents are approximated from an ellipse mask in lat/lon space, so the map
 * is generated (not traced) and stays visually consistent with the brand.
 * Routes are decorative illustrations of world trade corridors — they are not
 * presented as routes operated, owned or serviced by EUFIA.
 */
import { useMemo } from "react";

type Tone = "onLight" | "onDark";

const W = 1200;
const H = 620;

/** lat/lon ellipse mask approximating the world's landmasses. */
const LAND: [number, number, number, number][] = [
  // [lat, lon, radiusLat, radiusLon]
  [64, -145, 9, 16], // Alaska
  [56, -106, 15, 28], // Canada
  [41, -99, 12, 24], // USA
  [24, -102, 9, 13], // Mexico
  [14, -89, 6, 10], // Central America
  [73, -41, 8, 15], // Greenland
  [6, -70, 11, 15], // Northern South America
  [-8, -55, 14, 17], // Brazil
  [-26, -62, 13, 12], // Southern South America
  [-45, -70, 7, 7], // Patagonia
  [53, 16, 9, 18], // Central Europe
  [63, 17, 7, 13], // Scandinavia
  [40, -4, 7, 9], // Iberia
  [54, -3, 5, 4], // Britain
  [36, 13, 5, 10], // Mediterranean north
  [16, 9, 15, 21], // North Africa
  [1, 21, 12, 17], // Central Africa
  [-17, 25, 13, 14], // Southern Africa
  [-30, 24, 6, 9], // South Africa
  [-20, 47, 6, 4], // Madagascar
  [56, 79, 15, 55], // Russia / Central Asia
  [39, 104, 13, 27], // China
  [24, 79, 11, 12], // India
  [37, 138, 6, 6], // Japan
  [11, 108, 11, 15], // Indochina
  [-1, 114, 6, 18], // Indonesia
  [25, 45, 9, 13], // Arabia
  [33, 54, 8, 15], // Iran / Anatolia
  [-25, 134, 12, 17], // Australia
  [-42, 172, 5, 6], // New Zealand
  [-6, 145, 5, 9], // Papua
];

function isLand(lat: number, lon: number): boolean {
  for (const [la, lo, rla, rlo] of LAND) {
    const dLat = (lat - la) / rla;
    const dLon = ((lon - lo + 540) % 360) - 180;
    const dLo = dLon / rlo;
    if (dLat * dLat + dLo * dLo <= 1) return true;
  }
  return false;
}

function project(lat: number, lon: number): [number, number] {
  const x = ((lon + 180) / 360) * W;
  const y = ((84 - lat) / 144) * H;
  return [x, y];
}

/** Illustrative corridors between major world ports — decorative only. */
const CORRIDORS: [number, number, number, number][] = [
  [52, 4, 40, -74], // North Atlantic
  [40, -74, -23, -46], // Atlantic south
  [52, 4, 25, 55], // Europe to Gulf
  [25, 55, 1, 104], // Gulf to Singapore
  [1, 104, 31, 121], // Singapore to East Asia
  [31, 121, 34, -118], // Transpacific
  [1, 104, -34, 151], // Southeast to Oceania
  [-23, -46, -34, 18], // South Atlantic
  [19, 72, 25, 55], // Indian Ocean
];

function arcPath(lat1: number, lon1: number, lat2: number, lon2: number): string {
  const [x1, y1] = project(lat1, lon1);
  const [x2, y2] = project(lat2, lon2);
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  // perpendicular offset for a gentle great-circle feel
  const bend = Math.min(len * 0.16, 120);
  const cx = mx + (-dy / len) * bend;
  const cy = my + (dx / len) * bend;
  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} Q ${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

export function WorldMap({
  tone = "onLight",
  animated = true,
  className = "",
}: {
  tone?: Tone;
  animated?: boolean;
  className?: string;
}) {
  const dots = useMemo(() => {
    const out: { x: number; y: number; r: number }[] = [];
    for (let lat = 80; lat >= -56; lat -= 4.4) {
      for (let lon = -180; lon <= 180; lon += 4.2) {
        if (isLand(lat, lon)) {
          const [x, y] = project(lat, lon);
          out.push({ x, y, r: 3.1 });
        }
      }
    }
    return out;
  }, []);

  const corridors = useMemo(
    () => CORRIDORS.map((c) => arcPath(c[0], c[1], c[2], c[3])),
    [],
  );

  const nodes = useMemo(
    () => CORRIDORS.flatMap((c) => [project(c[0], c[1]), project(c[2], c[3])]),
    [],
  );
  // de-duplicate endpoints so overlapping ports don't stack circles
  const uniqueNodes = useMemo(() => {
    const seen = new Set<string>();
    return nodes.filter(([x, y]) => {
      const key = `${Math.round(x)}-${Math.round(y)}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [nodes]);

  const dotFill = tone === "onDark" ? "#97C6E0" : "#172B3A";
  const dotOpacity = tone === "onDark" ? 0.75 : 0.55;
  const routeStroke = "#C07F45";
  const gridStroke = tone === "onDark" ? "#97C6E0" : "#172B3A";

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className={`w-full ${className}`}
      role="img"
      aria-label="Stylised world map illustrating major maritime trade corridors"
    >
      {/* graticule */}
      <g stroke={gridStroke} strokeOpacity="0.12" strokeWidth="1">
        <line x1="0" y1={H / 2} x2={W} y2={H / 2} />
        <line x1="0" y1={H * 0.25} x2={W} y2={H * 0.25} />
        <line x1="0" y1={H * 0.75} x2={W} y2={H * 0.75} />
        <line x1={W / 3} y1="0" x2={W / 3} y2={H} />
        <line x1={(W / 3) * 2} y1="0" x2={(W / 3) * 2} y2={H} />
        <line x1={W / 2} y1="0" x2={W / 2} y2={H} strokeOpacity="0.2" />
      </g>

      {/* landmass dots */}
      <g fill={dotFill} fillOpacity={dotOpacity}>
        {dots.map((d, i) => (
          <circle key={i} cx={d.x} cy={d.y} r={d.r} />
        ))}
      </g>

      {/* corridors */}
      <g fill="none" strokeLinecap="round">
        {corridors.map((d, i) => (
          <path
            key={`base-${i}`}
            d={d}
            stroke={routeStroke}
            strokeOpacity="0.3"
            strokeWidth="1.6"
          />
        ))}
        {animated &&
          corridors.map((d, i) => (
            <path
              key={`flow-${i}`}
              d={d}
              stroke={routeStroke}
              strokeWidth="2.4"
              strokeDasharray="12 20"
              className="animate-route"
              style={{ animationDelay: `${i * 0.7}s` }}
            />
          ))}
      </g>

      {/* port nodes */}
      <g>
        {uniqueNodes.map(([x, y], i) => (
          <g key={`node-${i}`}>
            <circle cx={x} cy={y} r="7.5" fill="none" stroke={routeStroke} strokeOpacity="0.55" strokeWidth="1.5" />
            <circle cx={x} cy={y} r="3.4" fill={routeStroke} />
          </g>
        ))}
      </g>
    </svg>
  );
}
