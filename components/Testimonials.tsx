"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "./testimonials-data";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

// Rating Summary Component
const RatingSummary = () => {
    const categories = [
        { label: "Rooms", rating: 5 },
        { label: "Experience", rating: 5 },
        { label: "Food & Dining", rating: 5 },
        { label: "Host & Family", rating: 5 },
    ];

    return (
        <div className="max-w-5xl mx-auto mb-6 animate-in slide-in-from-bottom-4 duration-700">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
                {categories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col items-center justify-center text-center">
                        <span className="text-3xl font-display font-bold text-stone-800 mb-1">{cat.rating}.0</span>
                        <div className="flex text-accent mb-1">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                        <span className="text-stone-500 text-xs font-bold uppercase tracking-wider">{cat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

// JS-Driven Infinite Scroll Row
const ScrollerRow = ({
    items,
    direction = "left", // 'left' means content moves R -> L (standard), 'right' means L -> R
}: {
    items: typeof testimonials;
    direction?: "left" | "right";
}) => {
    const scrollerRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    // We duplicate items to ensure we have enough content to loop seamlessley
    // For a smoother loop with manual controls, simple duplication might require more logic, 
    // but for "slow scroll", a double set usually suffices if width is managed.
    // To be safe, we triple it.
    const displayItems = [...items, ...items, ...items];

    useEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return;

        let animationFrameId: number;
        let position = direction === "right" ? -scroller.scrollWidth / 3 : 0; // Start offset if needed
        const speed = 1.0; // Faster speed

        const animate = () => {
            if (!isPaused && scroller) {
                if (direction === "left") {
                    // Moving Content Left: Increase scrollLeft
                    if (scroller.scrollLeft >= scroller.scrollWidth / 3) {
                        scroller.scrollLeft = 0;
                    } else {
                        scroller.scrollLeft += speed;
                    }
                } else {
                    // Moving Content Right: Decrease scrollLeft
                    if (scroller.scrollLeft <= 0) {
                        scroller.scrollLeft = scroller.scrollWidth / 3;
                    } else {
                        scroller.scrollLeft -= speed;
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        };

        // Initial Setup
        if (direction === "right") {
            scroller.scrollLeft = scroller.scrollWidth / 3;
        }

        animationFrameId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused, direction]);

    const scrollManual = (dir: "prev" | "next") => {
        if (scrollerRef.current) {
            const scrollAmount = 400;
            scrollerRef.current.scrollBy({
                left: dir === "next" ? scrollAmount : -scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <div className="relative group/row max-w-[100vw] overflow-hidden">
            {/* Side Gradients for Blur Effect - Wider and with Backdrop Blur */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-stone-50 via-stone-50/80 to-transparent z-20 pointer-events-none backdrop-blur-[2px]" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-stone-50 via-stone-50/80 to-transparent z-20 pointer-events-none backdrop-blur-[2px]" />

            {/* Manual Controls - Visible on Hover/Interaction */}
            <button
                onClick={() => scrollManual("prev")}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-stone-700 hover:bg-white hover:scale-110 transition-all opacity-0 group-hover/row:opacity-100"
                aria-label="Scroll Left"
            >
                <ChevronLeft className="w-5 h-5" />
            </button>
            <button
                onClick={() => scrollManual("next")}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-md flex items-center justify-center text-stone-700 hover:bg-white hover:scale-110 transition-all opacity-0 group-hover/row:opacity-100"
                aria-label="Scroll Right"
            >
                <ChevronRight className="w-5 h-5" />
            </button>

            <div
                ref={scrollerRef}
                className="flex gap-8 py-8 overflow-x-hidden no-scrollbar w-full px-4"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {displayItems.map((item, idx) => (
                    <div
                        key={idx}
                        className="w-[350px] md:w-[450px] relative rounded-2xl border border-stone-200 bg-white p-8 flex-shrink-0 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1 flex flex-col justify-between group h-auto"
                    >
                        <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/10 group-hover:text-primary/20 transition-colors" />

                        <div className="relative z-10">
                            <p className="text-stone-600 text-[15px] leading-relaxed italic mb-6 line-clamp-6 hover:line-clamp-none transition-all duration-300">
                                &quot;{item.text}&quot;
                            </p>
                        </div>

                        <div>
                            <div className="flex gap-0.5 mb-2">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-accent fill-current" />
                                ))}
                            </div>
                            <h4 className="font-bold text-stone-800 text-base">{item.name}</h4>
                            {item.location && <p className="text-stone-400 text-xs font-medium uppercase tracking-wide mt-1">{item.location}</p>}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default function Testimonials() {
    // Split testimonials for variety
    const midpoint = Math.ceil(testimonials.length / 2);
    const firstRow = testimonials.slice(0, midpoint);
    const secondRow = testimonials.slice(midpoint);

    return (
        <section className="py-24 bg-stone-50 relative overflow-hidden" id="testimonials">
            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <span className="text-primary font-semibold tracking-wider uppercase text-sm">Guest Love</span>
                <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6 text-stone-800">
                    Stories from Sukrutham
                </h2>
                <p className="text-stone-500 max-w-2xl mx-auto text-lg leading-relaxed mb-10">
                    Don&apos;t just take our word for it. Here is what travelers from around the world have to say about their stay.
                </p>

                <RatingSummary />
            </div>

            <div className="flex flex-col gap-6 relative">
                {/* Row 1: Left to Right (direction='right' implies movement towards right). 
                    Actually, usually 'left' means scrolling TO the left.
                    My ScrollerRow logic: 
                    direction='left' -> scrollLeft increases -> Content moves Left
                    direction='right' -> scrollLeft decreases -> Content moves Right
                */}
                <ScrollerRow items={firstRow} direction="right" />

                {/* Row 2: Right to Left */}
                <ScrollerRow items={secondRow} direction="left" />
            </div>
        </section>
    );
}
