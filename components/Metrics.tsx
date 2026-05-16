"use client";

import React, { useState, useEffect } from "react";
import ScrollAnimation from "@/components/ScrollAnimation";
import { cn } from "@/lib/utils";

export default function Metrics() {
    const [activeIndex, setActiveIndex] = useState(0);

    const metricsList = [
        { num: "200+", label: "Happy Guests", highlight: false },
        { num: "∞", label: "Happy Memories", highlight: true },
        { num: "18+", label: "Amenities", highlight: false },
        { num: "15+", label: "Farm Activities", highlight: false },
        { num: "10+", label: "Nearby Local Sights", highlight: false }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % metricsList.length);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="w-full relative z-20">
            {/* 
               Mobile: Solid dark standalone section with generous padding.
               Desktop: Sleek, translucent glassmorphism bar integrated into the hero overlay.
            */}
            <div className="bg-stone-900 md:bg-black/40 md:backdrop-blur-xl md:border-t md:border-white/10 text-white py-4 md:py-[22px]">
                
                {/* --- AESTHETIC VERTICAL STACK MOBILE LAYOUT --- */}
                <div className="md:hidden w-full px-8 pb-2">
                    <div className="flex flex-col w-full divide-y divide-white/10 border-y border-white/10 backdrop-blur-sm bg-black/10 rounded-sm">
                        
                        <div className="flex flex-col items-center justify-center text-center py-5">
                            <span className="text-3xl font-display font-normal text-white/90 mb-1 drop-shadow-sm">200+</span>
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">Happy Guests</span>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center py-5">
                            <span className="text-4xl font-display font-normal text-accent mb-0 leading-none drop-shadow-sm mt-[-2px]">∞</span>
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase mt-1.5">Happy Memories</span>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center py-5">
                            <span className="text-3xl font-display font-normal text-white/90 mb-1 drop-shadow-sm">18+</span>
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">Amenities</span>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center py-5">
                            <span className="text-3xl font-display font-normal text-white/90 mb-1 drop-shadow-sm">15+</span>
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">In-Farm Activities</span>
                        </div>

                        <div className="flex flex-col items-center justify-center text-center py-5">
                            <span className="text-3xl font-display font-normal text-white/90 mb-1 drop-shadow-sm">10+</span>
                            <span className="text-[10px] font-semibold tracking-[0.2em] text-stone-400 uppercase">Nearby Local Sights</span>
                        </div>

                    </div>
                </div>
                {/* --- END MOBILE LAYOUT --- */}

                {/* --- ORIGINAL DESKTOP LAYOUT --- */}
                <div className="hidden md:flex container mx-auto justify-center items-center max-w-7xl lg:divide-x lg:divide-white/10 gap-x-8 lg:gap-x-0">
                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">200+</span>
                        <span className="text-xs font-semibold tracking-widest text-stone-300 uppercase">Happy Guests</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-3xl md:text-5xl font-display font-bold text-accent mb-0 leading-none drop-shadow-sm mt-[-4px]">∞</span>
                        <span className="text-xs font-semibold tracking-widest text-stone-300 uppercase">Happy Memories</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">18+</span>
                        <span className="text-xs font-semibold tracking-widest text-stone-300 uppercase">Amenities</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">15+</span>
                        <span className="text-xs font-semibold tracking-widest text-stone-300 uppercase">In-Farm Activities</span>
                    </div>
                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">10+</span>
                        <span className="text-xs font-semibold tracking-widest text-stone-300 uppercase">Nearby Local Sights</span>
                    </div>
                </div>
                {/* --- END DESKTOP LAYOUT --- */}
            </div>
        </section>
    );
}
