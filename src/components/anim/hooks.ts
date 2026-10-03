import { useEffect, useRef, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";

function subscribeToPointerChange(onChange: () => void) {
  const media = window.matchMedia("(pointer: fine)");
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

function getFinePointerSnapshot() {
  return window.matchMedia("(pointer: fine)").matches;
}

function getFinePointerServerSnapshot() {
  return false;
}

/** True when the device has a fine pointer (mouse/trackpad). */
export function useFinePointer(): boolean {
  return useSyncExternalStore(
    subscribeToPointerChange,
    getFinePointerSnapshot,
    getFinePointerServerSnapshot,
  );
}

/** True when the device has a fine pointer and motion is allowed. */
export function useDesktopPointer(): boolean {
  const reduce = useReducedMotion();
  const finePointer = useFinePointer();
  return finePointer && !reduce;
}

/**
 * Magnetic hover — the element leans toward the cursor for a tactile feel.
 * Only active on fine-pointer devices with motion allowed; the element keeps
 * its position in the document flow (transform only).
 */
export function useMagnetic<T extends HTMLElement>(strength = 0.18) {
  const ref = useRef<T | null>(null);
  const reduce = useReducedMotion();
  const finePointer = useFinePointer();

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce || !finePointer) return;

    let frame = 0;
    const onMove = (event: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = event.clientX - (rect.left + rect.width / 2);
      const dy = event.clientY - (rect.top + rect.height / 2);
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.transform = `translate3d(${(dx * strength).toFixed(1)}px, ${(
          dy * strength
        ).toFixed(1)}px, 0)`;
      });
    };
    const onLeave = () => {
      cancelAnimationFrame(frame);
      el.style.transform = "translate3d(0, 0, 0)";
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      cancelAnimationFrame(frame);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength, reduce, finePointer]);

  return ref;
}
