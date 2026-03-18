import React from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Metrics() {
    return (
        <section className="w-full relative z-20">
            {/* Sleek, full-width glassmorphism bar integrated into the hero */}
            <div className="bg-black/40 backdrop-blur-xl border-t border-white/10 text-white py-4 md:py-[22px] px-4">
                <div className="container mx-auto flex flex-wrap justify-center items-center max-w-7xl lg:divide-x lg:divide-white/10 gap-y-6 md:gap-y-0">

                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">100+</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">Happy Guests</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-4xl md:text-5xl font-display font-bold text-accent mb-0 leading-none drop-shadow-sm mt-[-4px]">∞</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">Happy Memories</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">18+</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">Amenities</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">15+</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">In-Farm Activities</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center flex-1 px-4">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">10+</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">Nearby Local Sights</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
