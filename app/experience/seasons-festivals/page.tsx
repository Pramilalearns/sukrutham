"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
    Calendar,
    MapPin,
    Search,
    Landmark,
    Church
} from "lucide-react";

export default function SeasonsFestivalsPage() {
    // Data structures for the specific content provided by the user
    const cultureHighlights = [
        {
            title: "Ancient Shiva Temple",
            location: "Vicinity of Sukrutham",
            description: "Visit a venerated 1500-year-old Shiva temple, recognized as a UNESCO World Heritage site, showcasing breathtaking ancient architecture and deep spiritual resonance.",
            image: "/season and festivals/shiva-temple-thrissur-kerala.jpg",
            icon: Landmark
        },
        {
            title: "Guruvayoor Temple",
            location: "Vicinity of Sukrutham",
            description: "Experience the profound spirituality of the world-renowned Guruvayoor temple, a central pillar of Kerala's religious landscape and culture.",
            image: "/season and festivals/guruvayur temple.jpg",
            icon: Search
        },
        {
            title: "Oldest Mosque in India",
            location: "Historic District",
            description: "Plan a visit to the oldest mosque in India, a remarkable symbol of Kerala's rich, diverse, and deeply rooted multicultural history.",
            image: "/season and festivals/mosque.jpg",
            icon: MapPin
        },
        {
            title: "Historic St. Thomas Church",
            location: "Kerala Coast",
            description: "Step back in time at the historic church marking the exact location where St. Thomas, a direct disciple of Jesus Christ, landed in India in AD 32.",
            image: "/season and festivals/Historic St. Thomas Church.jpg",
            icon: Church
        }
    ];

    const festivals = [
        {
            title: "Traditional Temple Festivals",
            season: "January - May",
            description: "Watch famous temple festivals come alive. Witness the captivating energy of traditional Kerala folk dances performed in their authentic spectacular setting.",
            image: "/festival.png", // Keeping the original since no new generic festival image was provided in the folder
        },
        {
            title: "Thrissur Pooram",
            season: "April - May",
            description: "Experience the world-famous Thrissur Pooram, an unparalleled cultural spectacle of majestic caparisoned elephants, rhythmic percussion ensembles, and vibrant colors.",
            image: "/season and festivals/Pooram.webp",
        }
    ];

    return (
        <main className="min-h-screen bg-[#FAFAFA] font-sans selection:bg-[#758A6D]/20 selection:text-[#3A4536]">
            {/* Standard Transparent Navbar to match Activities page */}
            <Navbar variant="transparent" />

            {/* --- IMMERSIVE HERO SECTION (Matching Activities Page) --- */}
            <section className="relative min-h-[100vh] flex items-center pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/season and festivals/Hero.jpg"
                        alt="Kerala Mural Culture Art"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-stone-900/60"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
                    <ScrollAnimation>
                        <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] mb-6 shadow-sm">
                            Art & Culture Aficionados
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 leading-tight drop-shadow-xl">
                            Seasons & <br className="hidden md:block" />
                            <span className="italic text-stone-200 font-light">Festivals</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                            Dive deep into the rich tapestry of Kerala's heritage. Explore venerated places of worship and witness world-famous cultural spectacles that define the spirit of this ancient land.
                        </p>
                        <div className="mt-8 flex justify-center">
                            <Link href="#culture" className="inline-flex items-center justify-center gap-3 border border-white/50 text-white hover:bg-white hover:text-stone-900 px-8 py-3 rounded-full font-bold transition-all hover:-translate-y-1 shadow-md shadow-black/10">
                                Explore Sacred Sites
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* --- CATEGORY 1: HERITAGE & CULTURE (Grid Layout) --- */}
            <section className="py-24 bg-[#FAFAFA]" id="culture">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-[#758A6D] font-bold tracking-[0.15em] uppercase text-sm block mb-4">
                            Sacred Sites
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-[#2C302A] mb-6">
                            Art and Culture Aficionados
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            Sukrutham is in the vicinity of several venerated places of worship that define the spiritual and historical landscape of India.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {cultureHighlights.map((item, index) => (
                            <ScrollAnimation key={index} delay={(index % 2) * 100} className="h-full">
                                <div className="bg-white rounded-[2rem] overflow-hidden shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300 border border-stone-100 flex flex-col sm:flex-row h-full group">
                                    {/* Image Container */}
                                    <div className="sm:w-2/5 aspect-square sm:aspect-auto relative overflow-hidden shrink-0">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow justify-center relative">
                                        {/* Floating Icon */}
                                        <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center text-[#758A6D]">
                                            <item.icon className="w-4 h-4" />
                                        </div>

                                        <h3 className="text-2xl font-display font-bold text-[#2C302A] mb-2 leading-snug pr-8">{item.title}</h3>

                                        <div className="flex items-center gap-2 text-stone-500 text-xs font-bold tracking-wider uppercase mb-4">
                                            <MapPin className="w-3 h-3 text-[#758A6D]" />
                                            <span>{item.location}</span>
                                        </div>

                                        <p className="text-stone-600 text-[15px] leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CATEGORY 2: FESTIVALS (Split Layout like "Farm Life") --- */}
            <section className="py-24 bg-white relative border-t border-stone-100 overflow-hidden" id="festivals">
                {/* Subtle Background Accent */}
                <div className="absolute top-40 right-0 w-[500px] h-[700px] bg-[#FAF8F5] rounded-l-[100px] -z-0 pointer-events-none hidden lg:block text-[#FAF8F5]"></div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Sticky Left Column */}
                        <div className="lg:w-4/12 lg:sticky lg:top-32 relative z-20 h-auto self-start pb-8 lg:pb-0">
                            <span className="text-[#758A6D] font-bold tracking-[0.15em] uppercase text-sm block mb-4">
                                Rhythms of Kerala
                            </span>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#2C302A] leading-tight mb-6">
                                Captivating <br />
                                <span className="text-[#A48869] italic font-serif">Spectacles</span>
                            </h2>
                            <p className="text-[#A48869] font-medium text-xl mb-6 leading-snug">
                                Witness the grand celebrations of the region.
                            </p>
                            <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
                                Kerala comes alive with the sound of percussion, the vibrant colors of traditional folk dances, and the unmistakable energy of its seasonal festivals.
                            </p>
                            <div className="w-16 h-1 bg-[#A48869]/30 rounded-full"></div>
                        </div>

                        {/* Right Column Grid */}
                        <div className="lg:w-8/12">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                {festivals.map((item, index) => (
                                    <ScrollAnimation key={index} delay={index * 100} className="h-full">
                                        <div className="bg-white rounded-[2rem] p-6 md:p-8 border border-stone-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.05)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
                                            {/* Image inside Card */}
                                            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-stone-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1">
                                                    <Calendar className="w-3 h-3 text-[#A48869]" /> {item.season}
                                                </div>
                                            </div>

                                            <h4 className="text-xl font-display font-bold text-[#2C302A] mb-3 leading-snug">{item.title}</h4>

                                            <p className="text-stone-600 text-[15px] font-light leading-relaxed flex-grow">
                                                {item.description}
                                            </p>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
            <FloatingCTA />
        </main>
    );
}
