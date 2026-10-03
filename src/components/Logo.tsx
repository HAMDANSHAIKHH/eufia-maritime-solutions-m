import { cn } from "@/lib/utils";

/**
 * EUFIA SHIPPING official emblem logo.
 */
export function LogoMark({ className, tone = "caramel" }: { className?: string; tone?: "caramel" | "papaya" | "navy" }) {
  const isLight = tone === "papaya";
  return (
    <img
      src={isLight ? "/favicon-light.png" : "/favicon.png"}
      alt="EUFIA SHIPPING Emblem"
      className={cn("h-9 w-9 object-contain", className)}
    />
  );
}

/**
 * EUFIA SHIPPING official transparent logo.
 */
export function Logo({
  className,
  tone = "dark",
}: {
  className?: string;
  /** dark = for light surfaces; light = for navy/dark surfaces. */
  tone?: "dark" | "light";
  markClassName?: string;
}) {
  const isLight = tone === "light";
  return (
    <span className={cn("inline-flex items-center", className)}>
      <img
        src={isLight ? "/logo-light.png" : "/logo.png"}
        alt="EUFIA SHIPPING FZCO"
        className="h-9 w-auto max-w-[220px] object-contain sm:h-11 sm:max-w-[260px]"
      />
    </span>
  );
}
