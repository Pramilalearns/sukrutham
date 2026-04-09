"use client";

import Image from "next/image";
import { Award, Leaf, Heart } from "lucide-react";
import { useState, useEffect } from "react";

const HERO_IMAGES = [
    { src: "/hero-carousel/slide1.jpg", extraOverlay: "bg-stone-950/40" },
    { src: "/ariel-view/home-exterior.png", extraOverlay: "" },
    { src: "/ariel-view/ariel-view-nearby-place.png", extraOverlay: "" },
];

export default function OurStoryHero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-900 border-b-8 border-primary">
            <div className="absolute inset-0 z-0">
                {HERO_IMAGES.map((slide, index) => (
                    <div
                        key={slide.src}
                        className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
                            index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <Image
                            src={slide.src}
                            alt="Sukrutham Farmstay"
                            fill
                            className="object-cover"
                            priority={index === 0}
                        />
                        {/* Per-slide extra overlay for images that need it */}
                        {slide.extraOverlay && (
                            <div className={`absolute inset-0 ${slide.extraOverlay}`} />
                        )}
                    </div>
                ))}
                {/* Global gradient — only at bottom for text legibility */}
                <div className="absolute inset-0 bg-stone-950/20 z-10"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent z-10"></div>
            </div>

            {/* Hero Content */}
            <div className="container mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center justify-center pt-24 pb-8 flex-grow">
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
                    Our Story
                </span>

                <h1 className="text-3xl md:text-4xl lg:text-5xl lg:text-6xl lg:text-7xl font-display font-bold text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                    Experience <br className="hidden md:block" />
                    <span className="italic text-accent font-light text-4xl md:text-6xl md:text-7xl lg:text-8xl">Sukrutham</span>
                </h1>

                <p className="text-xl md:text-2xl text-stone-100 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-4 duration-700 delay-200 mb-16">
                    "Sukrutham" translates to the 'Goodness of Life'—a philosophy that guides every sunrise and sunset at our farm. A sanctuary where rural charm meets the warmth of home.
                </p>

                {/* Floating Hero Metric Badges */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-in slide-in-from-bottom-8 duration-1000 delay-300">

                    {/* Govt Certified */}
                    <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors flex flex-col items-center justify-center text-center group cursor-default" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
                        <Award className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-white font-bold text-lg mb-1">Govt. Certified</h3>
                        <p className="text-xs tracking-widest uppercase drop-shadow-sm" style={{ color: '#FBFF00' }}>Diamond Class</p>
                    </div>

                    {/* Booking.com */}
                    <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors flex flex-col items-center justify-center text-center group cursor-default" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
                        <div className="flex items-center justify-center gap-1 mb-3 text-white">
                            <span className="font-bold text-3xl leading-none">9.8</span>
                            <span className="text-stone-400 font-medium text-lg leading-none">/10</span>
                        </div>
                        <h3 className="text-[#00B2FF] font-bold text-lg mb-1">Review Awards</h3>
                        <p className="text-stone-300 text-xs tracking-widest uppercase">Booking.com 2026</p>
                    </div>

                    {/* Sustainable */}
                    <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors flex flex-col items-center justify-center text-center group cursor-default" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
                        <Leaf className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-white font-bold text-lg mb-1">Sustainable</h3>
                        <p className="text-stone-300 text-xs tracking-widest uppercase">Architecture</p>
                    </div>

                    {/* Authentic */}
                    <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors flex flex-col items-center justify-center text-center group cursor-default" style={{ WebkitBackdropFilter: 'blur(12px)' }}>
                        <Heart className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-500" />
                        <h3 className="text-white font-bold text-lg mb-1">Authentic Kerala</h3>
                        <p className="text-stone-300 text-xs tracking-widest uppercase">Hospitality</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
