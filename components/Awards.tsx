"use client";

import Image from "next/image";

export default function Awards() {
    return (
        <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-white relative z-20" id="recognition">
            <div className="container mx-auto px-6 max-w-6xl">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-10">
                    
                    {/* Left Typography Block */}
                    <div className="text-center lg:text-left lg:w-5/12">
                        <div className="mb-4">
                            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Excellence Recognized</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-stone-900 leading-tight mb-4">
                            Award-winning <br className="hidden lg:block" />
                            <span className="italic text-stone-500 font-light">hospitality.</span>
                        </h2>
                        <p className="text-stone-500 text-sm md:text-base leading-relaxed tracking-wide max-w-md mx-auto lg:mx-0">
                            Rooted in Kerala's heritage and recognized by global standards.
                        </p>
                    </div>
                    
                    {/* Right Unboxed Logos */}
                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-end gap-12 md:gap-14 lg:w-7/12">
                        {/* Certificate */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative w-16 h-24 shrink-0 transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                                <Image 
                                    src="/certificate.jpg" 
                                    alt="Kerala Tourism Diamond Class" 
                                    fill
                                    className="object-contain mix-blend-multiply drop-shadow-[0_4px_10px_rgba(0,0,0,0.05)]" 
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-base md:text-lg font-bold text-stone-900 mb-1">Diamond Class</span>
                                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-stone-400 font-bold">Kerala Govt. Homestay</span>
                            </div>
                        </div>

                        {/* Thin divider */}
                        <div className="hidden sm:block w-px h-24 bg-stone-200"></div>

                        {/* Booking.com */}
                        <div className="flex items-center gap-5 group">
                            <div className="relative w-20 h-20 shrink-0 transition-transform duration-700 ease-out group-hover:-translate-y-1.5">
                                <Image 
                                    src="/booking-awards/Digital-Award_RA-2026.png" 
                                    alt="Booking.com Traveller Review Award" 
                                    fill
                                    className="object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.06)]" 
                                />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-base md:text-lg font-bold text-stone-900 mb-1">Traveller Review</span>
                                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-stone-400 font-bold">Award Winner 2026</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
