import { Link } from "react-router";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { cn } from "@/lib/utils";

export type Crumb = { label: string; href?: string };

/** Breadcrumb trail — the final entry renders as the current page. */
export function Breadcrumbs({
  items,
  className,
  tone = "light",
}: {
  items: Crumb[];
  className?: string;
  /** dark = for use on navy / imagery backgrounds. */
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <Breadcrumb className={cn("text-xs", className)} aria-label="Breadcrumb">
      <BreadcrumbList
        className={cn("gap-2 text-xs", dark ? "text-papaya/60" : "text-muted-foreground")}
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <BreadcrumbItem key={`${item.label}-${index}`}>
              {item.href && !isLast ? (
                <BreadcrumbLink
                  asChild
                  className={dark ? "hover:text-papaya" : undefined}
                >
                  <Link to={item.href} className="uppercase tracking-[0.18em]">
                    {item.label}
                  </Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage
                  className={cn(
                    "uppercase tracking-[0.18em]",
                    dark && "text-papaya",
                  )}
                >
                  {item.label}
                </BreadcrumbPage>
              )}
              {!isLast && <BreadcrumbSeparator />}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
