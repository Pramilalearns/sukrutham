"use client";

import Image from "next/image";
import { Quote, Linkedin } from "lucide-react";

export default function Host() {
    return (
        <section className="py-20 bg-[#F9F9F7] relative overflow-hidden" id="host">
            <div className="absolute inset-0 bg-pattern-paper opacity-50"></div>
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

                    {/* Left Column: Host Image */}
                    <div className="w-full lg:w-4/12 relative">
                        <div className="aspect-[3/4] relative rounded-2xl overflow-hidden shadow-xl rotate-1 hover:rotate-0 transition-transform duration-500">
                            <Image
                                src="/host-home-new.jpg"
                                alt="Murali - Host of Sukrutham Farmstay"
                                fill
                                className="object-cover"
                            />
                        </div>
                        {/* Decorative element */}
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full -z-10 blur-xl"></div>
                        <div className="absolute -top-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full -z-10 blur-xl"></div>
                    </div>

                    {/* Right Column: Personal Letter */}
                    <div className="w-full lg:w-7/12 relative pl-0 lg:pl-10">


                        <div className="relative z-10">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm block mb-3">
                                Meet Your Host
                            </span>
                            <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-800 mb-8">
                                The person behind Sukrutham Farmstay.
                            </h2>

                            <div className="prose prose-lg text-stone-600 leading-relaxed">
                                <p className="mb-6 relative">
                                    <span className="text-6xl text-[#8F9E8B]/40 float-left mr-2 -mt-4 font-serif leading-none">“</span>
                                    <span>
                                        Hi, I’m Murali. For over 25 years, I navigated the fast-paced corporate world of MNC banking, focusing on how to create the best possible experience for customers. But through all those years, I felt a persistent pull back to my roots here in Trichur.
                                    </span>
                                </p>
                                <p className="mb-6">
                                    I eventually decided to leave the city lights behind to build something more peaceful and real. That’s how Sukrutham was born. I wanted to create a sanctuary where people could truly unplug and enjoy the simple, honest rhythms of farm life.
                                </p>
                                <p className="mb-8">
                                    Since we opened in January 2023, I’ve been here every day to ensure your stay is perfect. Whether I'm helping you discover a hidden local waterfall or we’re just sharing stories over a fresh coffee on the verandah, I’m here to welcome you home to the Kerala I love.
                                </p>

                                <div className="flex items-center gap-2 mt-8 pt-6 border-t border-stone-200/60">
                                    <p className="font-medium text-stone-800">
                                        To hear from me more — <a href="https://www.linkedin.com/in/kpmurali/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1 underline decoration-primary/30 underline-offset-4 hover:decoration-primary">
                                            connect with me
                                            <Linkedin className="w-4 h-4" />
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
