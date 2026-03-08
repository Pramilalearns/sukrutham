"use client";

import Image from "next/image";
import Link from "next/link";
import { Linkedin, ArrowRight } from "lucide-react";

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
                                sizes="(max-width: 1024px) 100vw, 33vw"
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
                                        Hi, I’m K P Murali —
                                    </span>
                                </p>
                                <p className="mb-6">
                                    I am popularly known by my initials, ‘KP’, and you’re welcome to call me KP.
                                </p>
                                <p className="mb-6">
                                    For over 25 years, I navigated the fast-paced corporate world of MNC banking, focusing on creating the best possible experience for customers. Yet through all those years, I felt a persistent pull back to my roots here in Thrissur.
                                </p>
                                <p className="mb-6">
                                    Eventually, I chose to leave the city lights behind to build something more peaceful and meaningful.
                                </p>
                                <p className="mb-6">
                                    That’s how Sukrutham was born.
                                </p>
                                <p className="mb-6">
                                    I wanted to create a sanctuary where people could truly unplug and reconnect with the simple, honest rhythms of farm life.
                                </p>
                                <p className="mb-8">
                                    Since opening in January 2023, I’ve been here every day, personally ensuring your stay is warm, perfect, and memorable. Whether I'm helping you discover a hidden local waterfall or we’re just sharing stories over a fresh coffee on the verandah, I’m here to welcome you home to the Kerala I love.
                                </p>

                                <div className="flex flex-col sm:flex-row items-center gap-6 mt-8 pt-6 border-t border-stone-200/60 justify-start">
                                    <Link
                                        href="/our-story"
                                        className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        Learn More About Us
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>

                                    <p className="font-medium text-stone-600 text-sm">
                                        or <a href="https://www.linkedin.com/in/kpmurali/" target="_blank" rel="noopener noreferrer" className="font-bold text-primary hover:text-primary-dark transition-colors inline-flex items-center gap-1 underline decoration-primary/30 underline-offset-4 hover:decoration-primary ml-1">
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
