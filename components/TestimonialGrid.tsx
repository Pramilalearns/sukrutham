"use client";

import { useState } from "react";
import { Star, Quote, Map, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
    names: string;
    location: string;
    text: string;
    rating?: number;
    region: 'India' | 'International';
}

interface TestimonialGridProps {
    testimonials: Testimonial[];
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
    const [activeTab, setActiveTab] = useState<'India' | 'International'>('India');
    const filteredTestimonials = testimonials.filter(t => t.region === activeTab);

    return (
        <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#FDFCF8]">
            <div className="container mx-auto max-w-7xl">
                <div className="flex flex-col items-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6 text-center">Memories from Around the World</h2>

                    {/* Tabs */}
                    <div className="w-full pt-2 pb-6 relative z-20">
                        <div className="flex overflow-x-auto no-scrollbar pb-4 px-4 justify-center">
                            <div 
                                className="flex flex-nowrap bg-white/50 p-1.5 rounded-2xl sm:rounded-full border border-stone-200 backdrop-blur-sm shadow-sm snap-x"
                                style={{ WebkitBackdropFilter: 'blur(4px)' }}
                            >
                                <button
                                    onClick={() => setActiveTab('India')}
                                    className={cn(
                                        "flex-shrink-0 px-4 sm:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-full text-[13px] sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer",
                                        activeTab === 'India'
                                            ? "bg-primary text-white shadow-md transform scale-105"
                                            : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
                                    )}
                                >
                                    <Map className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    <span className="hidden sm:inline">Guests from India</span>
                                    <span className="sm:hidden">India</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('International')}
                                    className={cn(
                                        "flex-shrink-0 px-4 sm:px-8 py-2.5 sm:py-3 rounded-xl sm:rounded-full text-[13px] sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 cursor-pointer",
                                        activeTab === 'International'
                                            ? "bg-primary text-white shadow-md transform scale-105"
                                            : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
                                    )}
                                >
                                    <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                    <span className="hidden sm:inline">International Guests</span>
                                    <span className="sm:hidden">International</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8 transition-opacity duration-500 animate-in fade-in">
                    {filteredTestimonials.map((testimonial, idx) => (
                        <div
                            key={`${activeTab}-${idx}`}
                            className="break-inside-avoid bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-8 mx-1 md:mx-0 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                        >
                            <div className="flex gap-1 mb-5 sm:mb-6">
                                {[...Array(testimonial.rating || 5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-stone-100 mb-3 sm:mb-4" />
                            <p className="text-stone-600 font-light leading-relaxed mb-6 sm:mb-8 text-[15px] sm:text-base relative z-10">
                                "{testimonial.text}"
                            </p>
                            <div className="pt-5 sm:pt-6 border-t border-stone-100">
                                <h4 className="font-bold text-stone-900 text-[13px] sm:text-sm">{testimonial.names}</h4>
                                <span className="text-[10px] sm:text-xs text-stone-500 font-medium tracking-wide uppercase mt-1 block">
                                    {testimonial.location}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredTestimonials.length === 0 && (
                    <div className="text-center py-20 text-stone-500">
                        No testimonials found for this region.
                    </div>
                )}
            </div>
        </section>
    );
}
