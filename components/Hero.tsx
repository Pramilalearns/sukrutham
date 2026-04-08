"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";
import Metrics from "@/components/Metrics";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
    "/hero-carousel/slide1.jpg",
    "/hero-carousel/Slide2 New.jpeg",
    "/hero-carousel/slide3.jpg",
    "/hero-carousel/slide4.jpg",
    "/hero-carousel/Slide5 New.jpeg",
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance carousel every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative h-screen-dvh flex items-center justify-center overflow-hidden bg-black">
            {/* Background Images with Cross-fade Transitions using Next/Image for LCP Preloading */}
            {HERO_IMAGES.map((src, index) => (
                <Image
                    key={src}
                    src={src}
                    alt={`Sukrutham Farmstay Hero ${index + 1}`}
                    fill
                    priority={index === 0}
                    className={`object-cover transition-opacity duration-[2000ms] ease-in-out ${
                        index === currentSlide ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                    sizes="100vw"
                />
            ))}

            {/* Universal Overlay to ensure text legibility */}
            <div className="absolute inset-0 z-[1] bg-black/60 pointer-events-none" />

            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <ScrollAnimation animation="fade-up">
                    <h1 className="block text-sm md:text-base font-semibold tracking-widest uppercase mb-4 text-accent/90">
                        Homestay in Thrissur, Kerala
                    </h1>
                    <h2 className="text-3xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight drop-shadow-lg px-2">
                        Experience Authentic <br />
                        <span className="text-accent">Farm Life in the Heart of Kerala</span>
                    </h2>
                    <p className="text-base md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed drop-shadow-md px-4">
                        Set amidst lush green paddy fields, waterfalls, and hills,
                        Sukrutham Farmstay is a world away from the hustle of typical tourist spots.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/book"
                            className="group bg-primary hover:bg-primary/90 text-white px-5 sm:px-8 py-2.5 sm:py-3 text-[13px] sm:text-base whitespace-nowrap.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Book Your Stay
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="/experience"
                            className="px-5 sm:px-8 py-2.5 sm:py-3 text-[13px] sm:text-base whitespace-nowrap.5 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Explore Experiences
                        </Link>
                    </div>
                </ScrollAnimation>
            </div>

            {/* Structured Metrics Bar at the very bottom of Hero (Desktop Only in Overlay) */}
            <div className="hidden md:block absolute bottom-0 left-0 w-full z-20">
                <Metrics />
            </div>
        </section>
    );
}
