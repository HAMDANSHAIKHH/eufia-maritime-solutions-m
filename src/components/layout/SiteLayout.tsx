import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { CustomCursor } from "@/components/CustomCursor";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { trackPageview } from "@/lib/analytics";

/** Resets scroll position on route change (instant — CSS smooth scroll is for in-page anchors). */
function ScrollToTop() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    trackPageview(`${pathname}${search}`);
  }, [pathname, search]);
  return null;
}

export function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <CustomCursor />
    </div>
  );
}
