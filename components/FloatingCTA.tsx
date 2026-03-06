"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CalendarCheck } from "lucide-react";
import { cn } from "@/lib/utils";

export default function FloatingCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past Hero (approx 500px)
            if (window.scrollY > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div
            className={cn(
                "fixed bottom-6 right-6 z-50 md:hidden transition-all duration-500 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
            )}
        >
            <Link
                href="/book"
                className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow-lg shadow-primary/30 font-bold tracking-wide hover:bg-primary/90 transition-colors animate-pulse-slow"
            >
                <CalendarCheck className="w-5 h-5" />
                <span>Book Stay</span>
            </Link>
        </div>
    );
}
