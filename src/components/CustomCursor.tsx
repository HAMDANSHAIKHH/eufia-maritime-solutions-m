import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useDesktopPointer } from "@/components/anim/hooks";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor='interactive']";

/**
 * Desktop-only cursor companion: a soft caramel ring that trails the pointer
 * and swells over interactive elements. Disabled for touch devices and for
 * visitors who prefer reduced motion. The native cursor stays visible.
 */
export function CustomCursor() {
  const reduce = useReducedMotion();
  const enabled = useDesktopPointer() && !reduce;
  const [active, setActive] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 320, damping: 28, mass: 0.45 });
  const springY = useSpring(y, { stiffness: 320, damping: 28, mass: 0.45 });

  useEffect(() => {
    if (!enabled) return;
    const onMove = (event: MouseEvent) => {
      x.set(event.clientX);
      y.set(event.clientY);
      const target = event.target as HTMLElement | null;
      setActive(Boolean(target?.closest(INTERACTIVE)));
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[130] hidden md:block" aria-hidden="true">
      <motion.div className="absolute left-0 top-0" style={{ x: springX, y: springY }}>
        <div className="relative -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="rounded-full border border-caramel/70"
            animate={{
              width: active ? 58 : 34,
              height: active ? 58 : 34,
              opacity: active ? 1 : 0.65,
              backgroundColor: active ? "rgba(192,127,69,0.12)" : "rgba(192,127,69,0)",
            }}
            transition={{ type: "spring", stiffness: 380, damping: 26 }}
          />
          <motion.div
            className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-caramel"
            animate={{ opacity: active ? 0 : 1, scale: active ? 0.4 : 1 }}
            transition={{ duration: 0.2 }}
          />
        </div>
      </motion.div>
    </div>
  );
}
