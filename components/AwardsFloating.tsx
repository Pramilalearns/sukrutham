"use client";

import Image from "next/image";
import { Award, ShieldCheck } from "lucide-react";

export default function AwardsFloating() {
    return (
        <section className="relative z-30 -mt-8 mb-16 px-4 md:px-8" id="recognition-floating">
            <div className="container mx-auto max-w-5xl">
                {/* Floating Pill Container */}
                <div className="bg-white/95 backdrop-blur-xl shadow-xl ring-1 ring-stone-900/5 rounded-3xl p-6 md:py-8 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden transition-all duration-500 hover:shadow-2xl">
                    
                    {/* Subtle inner glow for premium feel */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 pointer-events-none rounded-3xl"></div>

                    {/* Intro Headline */}
                    <div className="text-center md:text-left shrink-0">
                        <span className="text-primary font-bold tracking-widest uppercase text-[9px] mb-1.5 block">Recognized For</span>
                        <h3 className="text-2xl font-display font-bold text-stone-900 leading-tight">
                            Excellence in <br className="hidden md:block" />
                            <span className="text-primary italic">Hospitality</span>
                        </h3>
                    </div>

                    {/* Dividers & Content */}
                    <div className="flex flex-col md:flex-row items-center justify-end gap-8 md:gap-12 flex-1">
                        
                        {/* Kerala Govt Certification Trust Badge */}
                        <div className="flex items-center gap-5 group cursor-default">
                            <div className="w-14 h-20 md:w-16 md:h-20 relative shrink-0 transition-transform duration-500 group-hover:scale-105">
                                <Image 
                                    src="/images/misc/certificate.jpg" 
                                    alt="Kerala Tourism Diamond Class" 
                                    fill
                                    className="object-contain drop-shadow-sm mix-blend-multiply"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5 text-primary mb-1">
                                    <ShieldCheck className="w-4 h-4" />
                                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 group-hover:text-primary transition-colors">Govt. Certified</span>
                                </div>
                                <span className="text-base font-bold text-stone-900 mb-0.5">Diamond Class Homestay</span>
                                <span className="text-xs text-stone-500 font-medium tracking-wide">Kerala Dept. of Tourism</span>
                            </div>
                        </div>

                        {/* Elegant Divider (Vertical on Desktop, Horizontal on Mobile) */}
                        <div className="w-full h-px md:w-px md:h-16 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>

                        {/* Booking.com Award Trust Badge */}
                        <div className="flex items-center gap-5 group cursor-default">
                            <div className="w-16 h-16 md:w-20 md:h-20 relative shrink-0 transition-transform duration-500 group-hover:scale-105">
                                <Image 
                                    src="/booking-awards/Digital-Award_RA-2026.png" 
                                    alt="Booking.com Traveller Review Award" 
                                    fill
                                    className="object-contain drop-shadow-md"
                                />
                            </div>
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5 text-[#003B95] mb-1">
                                    <Award className="w-4 h-4" />
                                    <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-stone-500 group-hover:text-[#003B95] transition-colors">Global Standard</span>
                                </div>
                                <span className="text-base font-bold text-stone-900 mb-0.5">Traveller Review Award</span>
                                <span className="text-xs text-stone-500 font-medium tracking-wide">Winner 2026</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
