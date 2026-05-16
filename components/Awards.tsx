"use client";

import Image from "next/image";
import { Award } from "lucide-react";

export default function Awards() {
    return (
        <section className="py-16 md:py-20 bg-white relative z-20" id="recognition">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-12 lg:mb-16">
                    <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">Excellence Recognized</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-stone-900 leading-tight mt-4 mb-4">
                        Award-winning <span className="italic text-stone-500 font-light">hospitality.</span>
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed tracking-wide mt-2">
                        Rooted in Kerala's heritage and recognized by global standards.
                    </p>
                </div>

                {/* Awards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-stretch">
                    {/* Diamond Certificate */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 group h-full">
                        <div className="relative w-2/3 sm:w-2/5 shrink-0 mx-auto sm:mx-0">
                            <Image
                                src="/images/misc/certificate.jpg"
                                alt="Diamond Grade Certificate"
                                width={300}
                                height={400}
                                style={{ width: '100%', height: 'auto' }}
                                className="rounded-lg border border-stone-100 shadow-sm relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-stone-500 shadow-sm z-20">
                                Verified
                            </div>
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 text-amber-500">
                                <Award className="w-5 h-5 fill-current" />
                                <span className="font-bold tracking-wide text-xs uppercase">Govt. Certified</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-3">
                                Diamond Class Homestay
                            </h3>
                            <p className="text-stone-600 leading-relaxed font-light text-sm mb-4">
                                Honored with the highest accolade from Kerala Tourism for meeting stringent standards of safety, hygiene, and authentic cultural hospitality.
                            </p>
                            <div className="inline-block px-3 py-1.5 bg-stone-50 rounded-lg text-[10px] font-medium text-stone-500 border border-stone-100">
                                Order No. DOT/15093/2023-ATIO1
                            </div>
                        </div>
                    </div>

                    {/* Booking.com Award */}
                    <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 p-6 md:p-8 flex flex-col sm:flex-row items-center gap-6 md:gap-8 group h-full">
                        <div className="relative w-2/3 sm:w-2/5 shrink-0 mx-auto sm:mx-0">
                            <Image
                                src="/booking-awards/Digital-Award_RA-2026.png"
                                alt="Booking.com Traveller Review Awards 2026"
                                width={300}
                                height={300}
                                style={{ width: '100%', height: 'auto' }}
                                className="object-contain drop-shadow-md transform group-hover:scale-[1.05] transition-transform duration-500"
                            />
                        </div>
                        <div className="text-center sm:text-left">
                            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 text-[#003B95]">
                                <span className="font-black text-3xl tracking-tight">9.8</span>
                                <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">/ 10</span>
                            </div>
                            <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-3">
                                Traveller Review Awards 2026
                            </h3>
                            <p className="text-stone-600 leading-relaxed font-light text-sm mb-4">
                                Recognized by Booking.com travelers for delivering exceptional hospitality and creating unforgettable, perfect experiences for our guests worldwide.
                            </p>
                            <div className="inline-block px-3 py-1.5 bg-[#003B95]/10 rounded-lg text-xs font-bold text-[#003B95]">
                                Booking.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
