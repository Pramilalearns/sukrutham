"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: "fade-up" | "fade-in" | "scale-up" | "fade-left" | "fade-right";
    delay?: number; // in ms
}

export default function ScrollAnimation({
    children,
    className,
    animation = "fade-up",
    delay = 0
}: ScrollAnimationProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-up":
                return isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10";
            case "fade-in":
                return isVisible ? "opacity-100" : "opacity-0";
            case "scale-up":
                return isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95";
            case "fade-left":
                return isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8";
            case "fade-right":
                return isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8";
            default:
                return "";
        }
    };

    return (
        <div
            ref={ref}
            className={cn(
                "transition-all duration-700 ease-out will-change-transform",
                getAnimationClass(),
                className
            )}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
