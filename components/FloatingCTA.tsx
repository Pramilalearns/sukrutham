"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show earlier to ensure it doesn't feel 'missing'
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide on book page and studio to avoid circular redundancy and overlapping CMS
  if (pathname === "/book" || pathname.startsWith("/studio")) return null;

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-500 transform",
        isVisible ? "translate-y-0" : "translate-y-full"
      )}
    >
      <Link
        href="/book"
        className="flex items-center justify-center gap-2 bg-primary text-white w-full py-4 shadow-[0_-8px_10px_-2px_rgba(0,0,0,0.15)] font-bold tracking-[0.05em] hover:bg-primary/90 transition-colors text-sm sm:text-base uppercase"
      >
        <CalendarCheck className="w-5 h-5" />
        <span>Book Stay Now</span>
      </Link>
    </div>
  );
}
