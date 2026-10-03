/**
 * EUFIA illustration system.
 *
 * Every scene is a hand-built vector composition in the brand palette — no
 * stock photography, no external image hosts, no broken assets. Scenes are
 * decorative (aria-hidden) by default because they always sit beside real copy.
 */
import type { ReactElement } from "react";
import type { ArtVariant } from "@/data/services";

export type { ArtVariant };

const C = {
  caramel: "#C07F45",
  caramelDeep: "#9D6532",
  papaya: "#FCEDDE",
  baby: "#97C6E0",
  navy: "#172B3A",
  warm: "#FFFDF9",
  sand: "#F6E7D6",
  mist: "#E9F2F9",
  steel: "#5E7486",
  sea: "#2A4A5E",
  seaDeep: "#1E3A4C",
};

function Sky({ id, from, to, height = 360 }: { id: string; from: string; to: string; height?: number }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="800" height={height} fill={`url(#${id}-sky)`} />
    </>
  );
}

function Sea({ id, y = 360, from = C.sea, to = C.seaDeep }: { id: string; y?: number; from?: string; to?: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`${id}-sea`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect y={y} width="800" height={560 - y} fill={`url(#${id}-sea)`} />
      <g stroke={C.warm} strokeOpacity="0.16" strokeWidth="3" strokeLinecap="round">
        <line x1="60" y1={y + 44} x2="220" y2={y + 44} />
        <line x1="300" y1={y + 90} x2="520" y2={y + 90} />
        <line x1="560" y1={y + 58} x2="740" y2={y + 58} />
        <line x1="140" y1={y + 134} x2="380" y2={y + 134} />
        <line x1="430" y1={y + 168} x2="700" y2={y + 168} />
      </g>
    </>
  );
}

/* ------------------------------ scenes ------------------------------ */

function CharteringScene() {
  const id = "chr";
  return (
    <>
      <Sky id={id} from={C.papaya} to={C.baby} />
      <circle cx="620" cy="168" r="86" fill={C.caramel} opacity="0.92" />
      <circle cx="620" cy="168" r="116" fill="none" stroke={C.caramel} strokeOpacity="0.4" strokeWidth="2" />
      <g fill={C.warm} opacity="0.65">
        <rect x="70" y="96" width="180" height="16" rx="8" />
        <rect x="120" y="128" width="110" height="12" rx="6" />
        <rect x="420" y="70" width="130" height="12" rx="6" />
      </g>
      <path
        d="M30 286 Q 400 150 770 232"
        fill="none"
        stroke={C.caramel}
        strokeWidth="3"
        strokeDasharray="14 12"
        className="animate-route"
        opacity="0.75"
      />
      <Sea id={id} />
      <g className="animate-bob">
        {/* hull */}
        <path d="M132 350 H560 L534 402 H170 Z" fill={C.navy} />
        <rect x="140" y="342" width="420" height="12" fill={C.navy} />
        {/* containers */}
        <g>
          <rect x="176" y="310" width="64" height="30" fill={C.caramel} />
          <rect x="248" y="310" width="64" height="30" fill={C.warm} />
          <rect x="320" y="310" width="64" height="30" fill={C.baby} />
          <rect x="392" y="310" width="64" height="30" fill={C.caramelDeep} />
          <rect x="212" y="278" width="64" height="30" fill={C.baby} />
          <rect x="284" y="278" width="64" height="30" fill={C.caramel} />
          <rect x="356" y="278" width="64" height="30" fill={C.warm} />
          <rect x="248" y="246" width="64" height="30" fill={C.caramelDeep} />
          <rect x="320" y="246" width="64" height="30" fill={C.baby} />
        </g>
        {/* superstructure */}
        <rect x="462" y="238" width="86" height="104" fill={C.navy} />
        <g fill={C.baby}>
          <rect x="474" y="252" width="62" height="8" />
          <rect x="474" y="270" width="62" height="8" />
          <rect x="474" y="288" width="62" height="8" />
        </g>
        <rect x="500" y="204" width="20" height="36" fill={C.caramel} />
        <line x1="470" y1="238" x2="470" y2="196" stroke={C.navy} strokeWidth="6" />
        <line x1="456" y1="204" x2="484" y2="204" stroke={C.navy} strokeWidth="5" />
      </g>
    </>
  );
}

function DryBulkScene() {
  const id = "db";
  return (
    <>
      <Sky id={id} from={C.sand} to={C.papaya} />
      <g fill={C.steel} opacity="0.35">
        <rect x="40" y="240" width="14" height="120" />
        <rect x="70" y="266" width="14" height="94" />
        <rect x="700" y="228" width="16" height="132" />
        <rect x="742" y="256" width="16" height="104" />
        <rect x="40" y="232" width="46" height="10" />
        <rect x="700" y="220" width="58" height="10" />
      </g>
      <Sea id={id} y={372} />
      {/* vessel hull with open holds */}
      <g>
        <path d="M90 330 H710 L684 400 H120 Z" fill={C.navy} />
        <rect x="96" y="322" width="610" height="14" fill={C.navy} />
        <rect x="150" y="330" width="170" height="34" fill={C.seaDeep} />
        <path d="M160 364 q 40 -46 76 0 q 36 -46 74 0 z" fill={C.caramel} />
        <rect x="360" y="330" width="170" height="34" fill={C.seaDeep} />
        <path d="M370 364 q 40 -44 76 0 q 34 -44 74 0 z" fill={C.caramelDeep} />
        {/* deck crane */}
        <g stroke={C.caramel} strokeWidth="10" strokeLinecap="round" fill="none">
          <line x1="576" y1="326" x2="576" y2="234" />
          <line x1="576" y1="240" x2="384" y2="262" />
          <line x1="576" y1="240" x2="646" y2="292" />
        </g>
        <line x1="400" y1="262" x2="400" y2="304" stroke={C.navy} strokeWidth="4" />
        <path d="M384 304 h32 l-6 26 h-20 z" fill={C.navy} />
        <g fill={C.caramel} opacity="0.85">
          <circle cx="396" cy="342" r="4" />
          <circle cx="408" cy="352" r="3" />
          <circle cx="388" cy="356" r="3" />
        </g>
      </g>
      <rect x="596" y="246" width="70" height="78" fill={C.navy} />
      <g fill={C.baby}>
        <rect x="606" y="258" width="50" height="7" />
        <rect x="606" y="274" width="50" height="7" />
      </g>
      <rect x="626" y="222" width="16" height="26" fill={C.caramel} />
    </>
  );
}

function TankerScene() {
  const id = "tk";
  return (
    <>
      <Sky id={id} from={C.mist} to="#B9D9EC" />
      <g fill={C.warm} opacity="0.7">
        <rect x="88" y="84" width="150" height="14" rx="7" />
        <rect x="520" y="120" width="190" height="14" rx="7" />
      </g>
      <Sea id={id} y={366} from="#3C6B85" to={C.seaDeep} />
      <g className="animate-bob">
        {/* long tanker hull */}
        <path d="M60 330 H744 L716 394 H96 Z" fill={C.navy} />
        <rect x="66" y="322" width="674" height="14" fill={C.navy} />
        <rect x="66" y="352" width="674" height="6" fill={C.caramel} opacity="0.65" />
        {/* deck piping */}
        <g stroke={C.caramel} strokeWidth="7" fill="none" strokeLinecap="round">
          <line x1="120" y1="312" x2="560" y2="312" />
          <path d="M180 312 v-24 h60 v24" />
          <path d="M330 312 v-30 h70 v30" />
          <path d="M470 312 v-24 h56 v24" />
        </g>
        <g fill={C.caramelDeep}>
          <circle cx="210" cy="312" r="9" />
          <circle cx="365" cy="312" r="9" />
          <circle cx="498" cy="312" r="9" />
        </g>
        {/* manifold */}
        <rect x="278" y="286" width="46" height="18" rx="4" fill={C.warm} />
        {/* superstructure */}
        <rect x="612" y="234" width="104" height="90" fill={C.warm} />
        <g fill={C.navy}>
          <rect x="624" y="248" width="80" height="8" />
          <rect x="624" y="266" width="80" height="8" />
          <rect x="624" y="284" width="80" height="8" />
        </g>
        <rect x="646" y="196" width="30" height="40" fill={C.caramel} />
        <rect x="646" y="196" width="30" height="12" fill={C.navy} />
        <line x1="736" y1="322" x2="736" y2="262" stroke={C.navy} strokeWidth="5" />
      </g>
      <path d="M60 396 q 60 14 130 0 t 140 0 t 150 0 t 150 0 t 124 0" fill="none" stroke={C.warm} strokeOpacity="0.5" strokeWidth="5" />
    </>
  );
}

function ForwardingScene() {
  const id = "fw";
  const boxes = [
    [92, 300, C.caramel], [168, 300, C.baby], [244, 300, C.warm], [320, 300, C.caramelDeep],
    [130, 258, C.navy], [206, 258, C.caramel], [282, 258, C.baby],
    [168, 216, C.warm], [244, 216, C.navy],
    [452, 300, C.baby], [528, 300, C.caramel], [604, 300, C.navy], [490, 258, C.caramelDeep], [566, 258, C.warm],
  ] as const;
  return (
    <>
      <Sky id={id} from={C.papaya} to="#F6DCC2" />
      {/* gantry cranes */}
      <g stroke={C.navy} strokeWidth="12" fill="none" strokeLinecap="square">
        <path d="M110 366 V160 H420" />
        <path d="M110 200 H420" />
        <path d="M110 160 L150 366" strokeOpacity="0.55" />
        <path d="M470 366 V130 H740" />
        <path d="M470 176 H740" />
        <path d="M470 130 L506 366" strokeOpacity="0.55" />
      </g>
      <g stroke={C.caramel} strokeWidth="8" fill="none">
        <line x1="330" y1="200" x2="330" y2="248" />
        <line x1="620" y1="176" x2="620" y2="226" />
      </g>
      <rect x="308" y="248" width="44" height="26" fill={C.caramelDeep} />
      <rect x="598" y="226" width="44" height="26" fill={C.caramelDeep} />
      {/* container stacks */}
      <g>
        {boxes.map(([x, y, fill], i) => (
          <g key={i}>
            <rect x={x} y={y} width="66" height="38" fill={fill} stroke={C.navy} strokeOpacity="0.25" />
            <line x1={x + 10} y1={y + 8} x2={x + 56} y2={y + 8} stroke={C.navy} strokeOpacity="0.3" strokeWidth="3" />
            <line x1={x + 10} y1={y + 30} x2={x + 56} y2={y + 30} stroke={C.navy} strokeOpacity="0.3" strokeWidth="3" />
          </g>
        ))}
      </g>
      {/* quay + berth ship */}
      <rect y="366" width="800" height="194" fill={C.seaDeep} />
      <rect y="366" width="800" height="18" fill={C.navy} />
      <g className="animate-bob">
        <path d="M40 402 H760 L734 452 H74 Z" fill={C.navy} />
        <rect x="52" y="394" width="700" height="12" fill={C.navy} />
        <g>
          <rect x="120" y="366" width="70" height="30" fill={C.caramel} />
          <rect x="200" y="366" width="70" height="30" fill={C.warm} />
          <rect x="280" y="366" width="70" height="30" fill={C.baby} />
          <rect x="160" y="336" width="70" height="30" fill={C.baby} />
          <rect x="240" y="336" width="70" height="30" fill={C.caramelDeep} />
        </g>
        <rect x="620" y="330" width="96" height="66" fill={C.navy} />
        <g fill={C.baby}>
          <rect x="632" y="342" width="72" height="7" />
          <rect x="632" y="358" width="72" height="7" />
        </g>
      </g>
    </>
  );
}

function ProjectScene() {
  const id = "pj";
  return (
    <>
      <Sky id={id} from={C.baby} to={C.papaya} />
      <circle cx="150" cy="128" r="64" fill={C.caramel} opacity="0.85" />
      <Sea id={id} y={392} />
      {/* heavy-lift crane vessel */}
      <g>
        <path d="M80 372 H720 L694 430 H110 Z" fill={C.navy} />
        <rect x="86" y="364" width="628" height="14" fill={C.navy} />
        <rect x="120" y="336" width="180" height="30" fill={C.seaDeep} />
        {/* crane tower + boom */}
        <g stroke={C.caramel} strokeWidth="14" strokeLinecap="round" fill="none">
          <line x1="560" y1="366" x2="560" y2="150" />
          <line x1="560" y1="170" x2="266" y2="96" />
        </g>
        <g stroke={C.caramelDeep} strokeWidth="6" fill="none" opacity="0.7">
          <line x1="560" y1="240" x2="452" y2="366" />
          <line x1="560" y1="240" x2="640" y2="366" />
        </g>
        {/* suspended module */}
        <g className="animate-bob">
          <line x1="330" y1="112" x2="330" y2="196" stroke={C.navy} strokeWidth="5" />
          <line x1="392" y1="120" x2="392" y2="196" stroke={C.navy} strokeWidth="5" />
          <rect x="278" y="196" width="166" height="104" fill={C.warm} stroke={C.navy} strokeWidth="6" />
          <g stroke={C.caramel} strokeWidth="6">
            <line x1="278" y1="196" x2="444" y2="300" />
            <line x1="444" y1="196" x2="278" y2="300" />
          </g>
        </g>
        <rect x="600" y="304" width="84" height="62" fill={C.warm} />
        <rect x="620" y="286" width="18" height="20" fill={C.caramel} />
        <g fill={C.navy}>
          <rect x="612" y="316" width="60" height="7" />
          <rect x="612" y="332" width="60" height="7" />
        </g>
      </g>
      {/* deck cargo */}
      <rect x="150" y="336" width="120" height="30" fill={C.caramel} />
      <rect x="286" y="344" width="90" height="22" fill={C.baby} />
    </>
  );
}

function ConsultancyScene() {
  return (
    <>
      <rect width="800" height="560" fill={C.navy} />
      <g stroke={C.baby} strokeOpacity="0.14" strokeWidth="1.5">
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`v${i}`} x1={i * 56} y1="0" x2={i * 56} y2="560" />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 56} x2="800" y2={i * 56} />
        ))}
      </g>
      {/* blueprint ship profile */}
      <g fill="none" stroke={C.caramel} strokeWidth="4" strokeLinejoin="round">
        <path d="M96 344 H676 L644 414 H140 Q96 414 96 372 Z" />
        <path d="M96 336 H676" />
        <rect x="546" y="252" width="98" height="84" />
        <path d="M566 252 v-34 h34 v34" />
        <path d="M180 336 v-40 h140 v40" />
        <path d="M360 336 v-30 h120 v30" />
        <line x1="120" y1="374" x2="656" y2="374" strokeDasharray="10 10" strokeOpacity="0.6" />
      </g>
      <g stroke={C.baby} strokeWidth="2.5" strokeOpacity="0.8" fill="none">
        <line x1="96" y1="452" x2="676" y2="452" />
        <line x1="96" y1="440" x2="96" y2="464" />
        <line x1="676" y1="440" x2="676" y2="464" />
        <line x1="726" y1="252" x2="726" y2="414" />
        <line x1="714" y1="252" x2="738" y2="252" />
        <line x1="714" y1="414" x2="738" y2="414" />
        <circle cx="250" cy="188" r="46" />
        <line x1="250" y1="142" x2="250" y2="234" />
        <line x1="204" y1="188" x2="296" y2="188" />
        <path d="M250 188 L282 164" strokeWidth="4" stroke={C.caramel} />
      </g>
      <g fill={C.baby} opacity="0.85">
        <rect x="96" y="86" width="150" height="7" />
        <rect x="96" y="104" width="96" height="7" />
        <rect x="560" y="94" width="146" height="7" />
      </g>
      <g fill={C.caramel}>
        <circle cx="140" cy="344" r="7" />
        <circle cx="420" cy="336" r="7" />
        <circle cx="546" cy="336" r="7" />
      </g>
    </>
  );
}

function InspectionScene() {
  const id = "in";
  return (
    <>
      <Sky id={id} from={C.sand} to="#EBD3B6" height={140} />
      {/* deck + hatch covers */}
      <rect y="140" width="800" height="420" fill={C.navy} />
      <rect y="140" width="800" height="26" fill={C.steel} />
      <g fill={C.warm}>
        <rect x="60" y="176" width="240" height="70" rx="6" />
        <rect x="330" y="176" width="240" height="70" rx="6" />
      </g>
      <g stroke={C.steel} strokeWidth="5" opacity="0.7">
        <line x1="80" y1="196" x2="280" y2="196" />
        <line x1="80" y1="226" x2="280" y2="226" />
        <line x1="350" y1="196" x2="550" y2="196" />
        <line x1="350" y1="226" x2="550" y2="226" />
      </g>
      {/* hull plating */}
      <g stroke={C.sea} strokeWidth="4">
        <line x1="0" y1="300" x2="800" y2="300" />
        <line x1="0" y1="392" x2="800" y2="392" />
        <line x1="0" y1="484" x2="800" y2="484" />
      </g>
      <g fill={C.steel} opacity="0.5">
        {Array.from({ length: 26 }, (_, i) => (
          <circle key={i} cx={28 + i * 30} cy="300" r="3.5" />
        ))}
      </g>
      {/* light beam + inspector silhouette */}
      <path d="M604 246 L800 196 L800 560 L604 470 Z" fill={C.warm} opacity="0.14" />
      <g>
        <rect x="556" y="300" width="10" height="164" fill={C.caramel} />
        <g stroke={C.caramel} strokeWidth="7">
          <line x1="500" y1="330" x2="622" y2="330" />
          <line x1="500" y1="374" x2="622" y2="374" />
          <line x1="500" y1="418" x2="622" y2="418" />
        </g>
      </g>
      <g>
        <rect x="404" y="366" width="56" height="94" fill={C.warm} />
        <rect x="416" y="330" width="34" height="40" fill={C.navy} />
        <path d="M408 330 a26 14 0 0 1 52 0 z" fill={C.caramel} />
        <rect x="462" y="384" width="46" height="34" rx="3" fill={C.papaya} stroke={C.navy} strokeWidth="4" />
        <rect x="416" y="460" width="14" height="42" fill={C.navy} />
        <rect x="440" y="460" width="14" height="42" fill={C.navy} />
      </g>
      <g fill={C.caramel} opacity="0.9">
        <rect x="640" y="112" width="120" height="6" />
        <rect x="640" y="126" width="76" height="6" />
      </g>
    </>
  );
}

function LogisticsScene() {
  const id = "lg";
  return (
    <>
      <Sky id={id} from={C.baby} to={C.papaya} height={420} />
      <circle cx="640" cy="140" r="96" fill="none" stroke={C.caramel} strokeWidth="3" strokeOpacity="0.7" />
      <circle cx="640" cy="140" r="64" fill={C.caramel} opacity="0.9" />
      <path
        d="M40 300 Q 300 130 760 208"
        fill="none"
        stroke={C.navy}
        strokeWidth="4"
        strokeDasharray="16 14"
        className="animate-route"
        opacity="0.65"
      />
      <rect y="420" width="800" height="140" fill={C.navy} />
      <rect y="420" width="800" height="14" fill={C.sea} />
      {/* ship */}
      <g transform="translate(470 300)" className="animate-bob">
        <path d="M0 74 H250 L228 118 H26 Z" fill={C.navy} />
        <rect x="6" y="66" width="236" height="10" fill={C.navy} />
        <rect x="40" y="40" width="52" height="28" fill={C.caramel} />
        <rect x="100" y="40" width="52" height="28" fill={C.warm} />
        <rect x="160" y="40" width="52" height="28" fill={C.baby} />
        <rect x="70" y="14" width="52" height="28" fill={C.warm} />
        <rect x="130" y="14" width="52" height="28" fill={C.caramelDeep} />
        <rect x="196" y="26" width="44" height="42" fill={C.navy} />
        <rect x="212" y="4" width="14" height="24" fill={C.caramel} />
      </g>
      {/* truck */}
      <g transform="translate(60 356)">
        <rect x="0" y="0" width="180" height="64" rx="4" fill={C.warm} stroke={C.navy} strokeWidth="5" />
        <rect x="14" y="14" width="80" height="8" fill={C.caramel} />
        <rect x="14" y="30" width="120" height="8" fill={C.baby} />
        <path d="M180 64 V18 h44 l26 30 v16 z" fill={C.caramel} />
        <rect x="196" y="24" width="26" height="18" fill={C.mist} />
        <circle cx="46" cy="70" r="16" fill={C.navy} stroke={C.warm} strokeWidth="5" />
        <circle cx="212" cy="70" r="16" fill={C.navy} stroke={C.warm} strokeWidth="5" />
      </g>
      {/* plane */}
      <g transform="translate(300 96)" fill={C.navy} opacity="0.9">
        <path d="M0 40 L120 24 L150 40 L120 50 L0 52 L34 40 Z" />
        <path d="M56 34 L86 6 L104 12 L84 38 Z" fill={C.caramelDeep} />
        <path d="M56 48 L86 72 L104 66 L84 44 Z" fill={C.caramelDeep} />
      </g>
      <g fill={C.steel} opacity="0.4">
        <rect x="300" y="380" width="60" height="40" />
        <rect x="368" y="380" width="60" height="40" />
      </g>
    </>
  );
}

function AIScene() {
  const nodes = [
    [86, 120], [92, 300], [140, 430], [268, 96], [430, 70],
    [600, 96], [700, 190], [712, 360], [560, 470], [330, 492],
  ] as const;
  return (
    <>
      <rect width="800" height="560" fill={C.navy} />
      <g stroke={C.baby} strokeOpacity="0.12" strokeWidth="1.5">
        {Array.from({ length: 15 }, (_, i) => (
          <line key={`v${i}`} x1={i * 56} y1="0" x2={i * 56} y2="560" />
        ))}
        {Array.from({ length: 11 }, (_, i) => (
          <line key={`h${i}`} x1="0" y1={i * 56} x2="800" y2={i * 56} />
        ))}
      </g>
      {/* data routes around the console */}
      <g fill="none" strokeWidth="3" strokeDasharray="12 12" className="animate-route">
        <path d="M92 300 Q 180 160 268 96" stroke={C.caramel} opacity="0.85" />
        <path d="M268 96 Q 440 20 600 96" stroke={C.baby} opacity="0.7" />
        <path d="M600 96 Q 724 120 700 190" stroke={C.caramel} opacity="0.75" />
        <path d="M712 360 Q 684 474 560 470" stroke={C.baby} opacity="0.7" />
        <path d="M330 492 Q 450 522 560 470" stroke={C.caramel} opacity="0.75" />
        <path d="M140 430 Q 240 500 330 492" stroke={C.baby} opacity="0.7" />
      </g>
      {nodes.map(([x, y], i) => {
        const fill = i % 3 === 0 ? C.caramel : i % 3 === 1 ? C.baby : C.warm;
        return (
          <g key={i}>
            <circle cx={x} cy={y} r="15" fill={fill} opacity="0.2" />
            <circle cx={x} cy={y} r="6" fill={fill} />
          </g>
        );
      })}
      {/* main operations console */}
      <g className="animate-bob">
        <defs>
          <clipPath id="ai-panel">
            <rect x="176" y="150" width="440" height="272" rx="16" />
          </clipPath>
        </defs>
        <g clipPath="url(#ai-panel)">
          <rect x="176" y="150" width="440" height="272" fill={C.warm} />
          <rect x="176" y="150" width="440" height="48" fill={C.navy} />
          <circle cx="198" cy="174" r="6" fill={C.caramel} />
          <circle cx="218" cy="174" r="6" fill={C.baby} />
          <circle cx="238" cy="174" r="6" fill={C.steel} />
          <rect x="258" y="168" width="124" height="12" rx="6" fill={C.warm} opacity="0.75" />
          <rect x="536" y="168" width="62" height="12" rx="6" fill={C.caramel} />
          {/* chart grid */}
          <g stroke={C.baby} strokeOpacity="0.55" strokeWidth="1.5">
            <line x1="204" y1="244" x2="588" y2="244" />
            <line x1="204" y1="284" x2="588" y2="284" />
            <line x1="204" y1="324" x2="588" y2="324" />
            <line x1="204" y1="364" x2="588" y2="364" />
            <line x1="268" y1="224" x2="268" y2="364" />
            <line x1="364" y1="224" x2="364" y2="364" />
            <line x1="460" y1="224" x2="460" y2="364" />
            <line x1="556" y1="224" x2="556" y2="364" />
          </g>
          {/* bars + trend line */}
          <g fill={C.baby} opacity="0.9">
            <rect x="220" y="316" width="30" height="48" rx="3" />
            <rect x="292" y="288" width="30" height="76" rx="3" />
            <rect x="388" y="300" width="30" height="64" rx="3" />
            <rect x="484" y="262" width="30" height="102" rx="3" />
            <rect x="546" y="276" width="30" height="88" rx="3" />
          </g>
          <polyline
            points="214,342 284,306 356,324 428,258 500,274 572,224"
            fill="none"
            stroke={C.caramel}
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g fill={C.caramelDeep}>
            <circle cx="284" cy="306" r="6" />
            <circle cx="428" cy="258" r="6" />
            <circle cx="572" cy="224" r="6" />
          </g>
          {/* metric chips */}
          <g>
            <rect x="204" y="384" width="116" height="26" rx="13" fill={C.mist} />
            <rect x="216" y="393" width="58" height="8" rx="4" fill={C.steel} />
            <rect x="334" y="384" width="116" height="26" rx="13" fill={C.mist} />
            <rect x="346" y="393" width="72" height="8" rx="4" fill={C.caramel} />
            <rect x="464" y="384" width="116" height="26" rx="13" fill={C.mist} />
            <rect x="476" y="393" width="46" height="8" rx="4" fill={C.steel} />
          </g>
        </g>
        <rect
          x="176"
          y="150"
          width="440"
          height="272"
          rx="16"
          fill="none"
          stroke={C.baby}
          strokeOpacity="0.5"
          strokeWidth="2"
        />
      </g>
      {/* floating side panel — subtle isometric depth */}
      <g transform="translate(576 402) skewY(7)" className="animate-drift">
        <rect width="176" height="124" rx="14" fill={C.seaDeep} stroke={C.baby} strokeOpacity="0.55" strokeWidth="2" />
        <rect x="16" y="16" width="86" height="10" rx="5" fill={C.caramel} />
        <rect x="16" y="42" width="144" height="8" rx="4" fill={C.baby} opacity="0.85" />
        <rect x="16" y="62" width="112" height="8" rx="4" fill={C.baby} opacity="0.6" />
        <rect x="16" y="82" width="130" height="8" rx="4" fill={C.baby} opacity="0.45" />
        <rect x="16" y="102" width="64" height="8" rx="4" fill={C.caramel} opacity="0.8" />
      </g>
    </>
  );
}

function Gear({
  cx,
  cy,
  r,
  teeth = 12,
  fill,
  hole = C.navy,
}: {
  cx: number;
  cy: number;
  r: number;
  teeth?: number;
  fill: string;
  hole?: string;
}) {
  return (
    <g>
      <circle cx={cx} cy={cy} r={r} fill={fill} />
      {Array.from({ length: teeth }, (_, i) => (
        <rect
          key={i}
          x={cx - r * 0.16}
          y={cy - r - r * 0.18}
          width={r * 0.32}
          height={r * 0.22}
          fill={fill}
          transform={`rotate(${(360 / teeth) * i} ${cx} ${cy})`}
        />
      ))}
      <circle cx={cx} cy={cy} r={r * 0.44} fill={hole} />
      <circle cx={cx} cy={cy} r={r * 0.16} fill={fill} />
    </g>
  );
}

function SparesScene() {
  const id = "sp";
  return (
    <>
      <Sky id={id} from={C.sand} to={C.papaya} height={180} />
      <g fill={C.warm} opacity="0.7">
        <rect x="64" y="64" width="150" height="14" rx="7" />
        <rect x="122" y="96" width="86" height="11" rx="5" />
        <rect x="520" y="88" width="176" height="13" rx="6" />
      </g>
      {/* engine-room shell */}
      <rect y="180" width="800" height="300" fill={C.navy} />
      <g stroke={C.sea} strokeWidth="4">
        <line x1="0" y1="252" x2="800" y2="252" />
        <line x1="0" y1="356" x2="800" y2="356" />
        <line x1="0" y1="460" x2="800" y2="460" />
      </g>
      <g fill={C.steel} opacity="0.45">
        {Array.from({ length: 26 }, (_, i) => (
          <circle key={i} cx={28 + i * 30} cy="252" r="3.5" />
        ))}
      </g>
      {/* deck piping */}
      <g stroke={C.caramel} strokeWidth="11" fill="none" strokeLinecap="round">
        <line x1="44" y1="216" x2="756" y2="216" />
        <line x1="132" y1="216" x2="132" y2="244" />
        <line x1="668" y1="216" x2="668" y2="238" />
      </g>
      <g fill={C.caramelDeep}>
        <circle cx="132" cy="216" r="13" />
        <circle cx="668" cy="216" r="13" />
      </g>
      <g stroke={C.warm} strokeWidth="4">
        <line x1="118" y1="216" x2="146" y2="216" />
        <line x1="654" y1="216" x2="682" y2="216" />
      </g>
      {/* engine block with cylinder bores */}
      <g>
        <rect x="76" y="436" width="234" height="44" fill={C.seaDeep} />
        <rect x="64" y="288" width="258" height="150" rx="10" fill={C.seaDeep} stroke={C.steel} strokeWidth="3" />
        <g>
          {[110, 168, 226, 284].map((cx) => (
            <g key={cx}>
              <circle cx={cx} cy="336" r="30" fill={C.navy} stroke={C.caramel} strokeWidth="5" />
              <rect x={cx - 7} y="366" width="14" height="58" fill={C.steel} />
              <circle cx={cx} cy="424" r="12" fill={C.caramelDeep} />
            </g>
          ))}
        </g>
        <rect x="76" y="300" width="234" height="8" fill={C.caramel} opacity="0.5" />
      </g>
      {/* parts rack */}
      <g>
        <rect x="440" y="300" width="14" height="180" fill={C.steel} />
        <rect x="740" y="300" width="14" height="180" fill={C.steel} />
        <rect x="440" y="298" width="314" height="14" fill={C.warm} />
        <rect x="440" y="394" width="314" height="14" fill={C.warm} />
        {/* top shelf: gear, filters */}
        <Gear cx={498} cy={252} r={38} fill={C.caramel} hole={C.navy} />
        <g>
          <rect x="568" y="244" width="36" height="54" rx="4" fill={C.baby} />
          <rect x="575" y="252" width="22" height="6" fill={C.navy} opacity="0.5" />
          <rect x="575" y="264" width="22" height="6" fill={C.navy} opacity="0.5" />
          <rect x="620" y="236" width="42" height="62" rx="4" fill={C.warm} stroke={C.navy} strokeWidth="3" />
          <line x1="630" y1="248" x2="652" y2="248" stroke={C.caramel} strokeWidth="5" />
          <line x1="630" y1="262" x2="652" y2="262" stroke={C.caramel} strokeWidth="5" />
          <rect x="676" y="256" width="52" height="42" rx="4" fill={C.caramelDeep} />
          <circle cx="702" cy="277" r="11" fill={C.navy} />
        </g>
        {/* lower shelf: piston + valve */}
        <g>
          <rect x="468" y="330" width="56" height="64" rx="6" fill={C.warm} stroke={C.navy} strokeWidth="3" />
          <rect x="486" y="316" width="20" height="18" fill={C.steel} />
          <line x1="478" y1="348" x2="514" y2="348" stroke={C.caramel} strokeWidth="5" />
          <line x1="478" y1="366" x2="514" y2="366" stroke={C.caramel} strokeWidth="5" />
          <rect x="556" y="356" width="46" height="38" rx="4" fill={C.baby} />
          <rect x="570" y="330" width="18" height="28" fill={C.steel} />
          <circle cx="579" cy="324" r="16" fill="none" stroke={C.caramel} strokeWidth="6" />
          <rect x="636" y="344" width="88" height="50" rx="4" fill={C.seaDeep} stroke={C.baby} strokeWidth="3" />
          <g fill={C.baby} opacity="0.8">
            <rect x="648" y="356" width="52" height="7" rx="3" />
            <rect x="648" y="372" width="64" height="7" rx="3" />
          </g>
        </g>
      </g>
      {/* parts crates on the floor */}
      <g>
        <rect x="468" y="412" width="82" height="68" fill={C.baby} stroke={C.navy} strokeOpacity="0.3" strokeWidth="2" />
        <line x1="482" y1="426" x2="536" y2="426" stroke={C.navy} strokeOpacity="0.35" strokeWidth="3" />
        <line x1="482" y1="464" x2="536" y2="464" stroke={C.navy} strokeOpacity="0.35" strokeWidth="3" />
        <rect x="564" y="428" width="70" height="52" fill={C.caramel} stroke={C.navy} strokeOpacity="0.3" strokeWidth="2" />
        <line x1="576" y1="442" x2="622" y2="442" stroke={C.navy} strokeOpacity="0.35" strokeWidth="3" />
        <rect x="650" y="416" width="76" height="64" fill={C.warm} stroke={C.navy} strokeOpacity="0.3" strokeWidth="2" />
        <line x1="664" y1="432" x2="712" y2="432" stroke={C.navy} strokeOpacity="0.35" strokeWidth="3" />
        <line x1="664" y1="462" x2="712" y2="462" stroke={C.navy} strokeOpacity="0.35" strokeWidth="3" />
      </g>
      {/* deck floor + supply route */}
      <rect y="480" width="800" height="80" fill={C.seaDeep} />
      <rect y="480" width="800" height="10" fill={C.caramel} opacity="0.7" />
      <path
        d="M48 524 H744"
        fill="none"
        stroke={C.caramel}
        strokeWidth="4"
        strokeDasharray="18 14"
        strokeLinecap="round"
        className="animate-route"
        opacity="0.85"
      />
      <path d="M740 510 l26 14 l-26 14 z" fill={C.warm} />
    </>
  );
}

const SCENES: Record<ArtVariant, () => ReactElement> = {
  chartering: CharteringScene,
  drybulk: DryBulkScene,
  tanker: TankerScene,
  forwarding: ForwardingScene,
  project: ProjectScene,
  consultancy: ConsultancyScene,
  inspection: InspectionScene,
  logistics: LogisticsScene,
  ai: AIScene,
  spares: SparesScene,
};

export function ServiceArt({
  variant,
  className = "",
  title,
}: {
  variant: ArtVariant;
  className?: string;
  /** When provided the artwork becomes an accessible image. */
  title?: string;
}) {
  const Scene = SCENES[variant] ?? CharteringScene;
  return (
    <svg
      viewBox="0 0 800 560"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <Scene />
    </svg>
  );
}
