import React from "react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Metrics() {
    return (
        <section className="w-full relative">
            {/* Sleek, full-width glassmorphism bar integrated into the hero */}
            <div className="bg-black/40 backdrop-blur-xl border-t border-white/10 text-white py-6 px-4 md:px-8">
                <div className="container mx-auto flex flex-wrap justify-between items-center gap-4 max-w-7xl divide-x divide-white/10">

                    <div className="flex flex-col items-center justify-center text-center w-1/2 sm:w-1/3 lg:flex-1 px-4">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">100+</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">Happy Guests</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center w-1/2 sm:w-1/3 lg:flex-1 px-4">
                        <span className="text-4xl md:text-5xl font-display font-bold text-accent mb-0 leading-none drop-shadow-sm mt-[-4px]">∞</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">Happy Memories</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center w-1/2 sm:w-1/3 lg:flex-1 px-4">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">18+</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">Amenities</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center w-1/2 sm:w-1/3 lg:flex-1 px-4">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">15+</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">In-Farm Activities</span>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center w-full sm:w-1/3 lg:flex-1 px-4 border-t sm:border-t-0 mt-4 sm:mt-0 pt-4 sm:pt-0">
                        <span className="text-3xl md:text-4xl font-display font-bold text-white mb-1 drop-shadow-sm">10+</span>
                        <span className="text-[10px] md:text-xs font-semibold tracking-widest text-stone-300 uppercase">Nearby Local Sights</span>
                    </div>

                </div>
            </div>
        </section>
    );
}
