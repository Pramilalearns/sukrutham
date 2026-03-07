"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
    Utensils,
    Leaf,
    ArrowRight,
    MapPin,
    Droplets
} from "lucide-react";

const LocalSavorPage = () => {

    const naturesBounty = [
        {
            title: "Rambutan & Mangosteen",
            location: "Fruit Orchards",
            description: "Pluck and eat directly from the trees during harvest season. Nature's own candy store, grown without a single synthetic chemical.",
            image: "/savor/Rambutan & Mangosteen.webp",
            icon: Leaf
        },
        {
            title: "Jeevamrutham Secret",
            location: "Organic Farming",
            description: "We use ancient Indian microbiological elixirs to enrich our soil. Experience hyper-local transparency where you can trace every ingredient.",
            image: "/gallery-5.jpg", // Kept original as no new image was provided
            icon: Droplets
        },
        {
            title: "Kitchen Community",
            location: "Zero Waste",
            description: "Join us in the traditional kitchen. Peel shallots, grind spices on the ammi kallu, and learn ancestral recipes passed down through generations.",
            image: "/savor/Kitchen Community.webp",
            icon: Utensils
        }
    ];

    const culinaryPhilosophy = [
        {
            title: "Clay Pot Cooking",
            description: "Traditional earthen pots (chattis) allow heat and moisture to circulate gently, locking in flavors and preserving essential vital nutrients that metal vessels destroy.",
            image: "/gallery-1.jpg" // Kept original as no new image was provided
        },
        {
            title: "Stone Ground Spices",
            description: "We completely avoid electrical machines for grinding. Spices are manually crushed on heavy granite stones, ensuring their volatile oils and deep aromas are perfectly released into the food.",
            image: "/savor/Stone Ground Spices.jpg"
        }
    ];

    return (
        <main className="min-h-screen bg-stone-50 font-sans selection:bg-[#758A6D]/20 selection:text-[#3A4536]">
            {/* Standard Light Navbar for the split layout */}
            <Navbar variant="light" />

            {/* --- MINIMALIST HEADER (Matching Rooms Page) --- */}
            <div className="pt-32 pb-12 bg-[#758A6D]/5 text-center px-4">
                <ScrollAnimation>
                    <span className="text-[#758A6D] font-bold tracking-[0.15em] uppercase text-sm block mb-4">
                        Farm to Table Experience
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-[#2C302A] mb-4">
                        Local Savor
                    </h1>
                    <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                        At Sukrutham, food is not just a meal; it's a story of the land, traditions, and wellness. Experience authentic Kerala culinary arts.
                    </p>
                </ScrollAnimation>
            </div>

            {/* --- CATEGORY 1: NATURE'S BOUNTY (Matching Activities "Unique Local Experiences" Cards Layout) --- */}
            <section className="py-24 bg-stone-50" id="bounty">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 mb-6">
                            Nature's Bounty On Your Plate
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            Our offerings change daily based on what the earth provides and what the season demands. Total hyper-local transparency and organic dedication.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {naturesBounty.map((item, index) => (
                            <ScrollAnimation key={index} delay={(index % 3) * 100} className="h-full">
                                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col h-full group">
                                    {/* Image Container */}
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        {/* Floating Icon */}
                                        <div className="absolute -top-7 right-8 w-14 h-14 bg-white rounded-2xl shadow-lg border border-stone-100 flex items-center justify-center text-[#758A6D] transform group-hover:-translate-y-2 transition-transform duration-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-2xl font-display font-bold text-stone-900 mb-2 mt-2">{item.title}</h3>

                                        <div className="flex items-start gap-2 text-stone-500 text-sm mb-4">
                                            <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-[#758A6D]/70" />
                                            <span className="font-medium">{item.location}</span>
                                        </div>

                                        <p className="text-stone-600 text-[15px] leading-relaxed flex-grow">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CATEGORY 2: CULINARY PHILOSOPHY (Matching Activities "Farm Life" Sticky Layout) --- */}
            <section className="py-24 bg-white relative border-t border-stone-100" id="philosophy">
                {/* Subtle Background Accent */}
                <div className="absolute top-40 right-0 w-[500px] h-[700px] bg-[#FAF8F5] rounded-l-[100px] -z-0 pointer-events-none hidden lg:block"></div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Sticky Left Column */}
                        <div className="lg:w-4/12 lg:sticky lg:top-32 relative z-20 h-auto self-start pb-8 lg:pb-0">
                            <span className="text-[#758A6D] font-semibold tracking-wider uppercase text-sm block mb-4">
                                Our Philosophy
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 leading-tight mb-6">
                                Food as <br />
                                <span className="text-[#A48869] italic font-serif">Medicine</span>
                            </h2>
                            <p className="text-[#A48869] font-medium text-xl mb-6 leading-snug">
                                Medicine as Food.
                            </p>
                            <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
                                "At Sukrutham, we passionately believe that food is medicine, culture, and connection rolled into one. The fish curry cooked in a chatti cannot be rushed; it demands time to allow the tamarind to release its sour notes."
                            </p>
                            <div className="w-16 h-1 bg-[#EBE5DC]"></div>
                        </div>

                        {/* Right Column Grid */}
                        <div className="lg:w-8/12">
                            <div className="grid grid-cols-1 gap-8">
                                {culinaryPhilosophy.map((item, index) => (
                                    <ScrollAnimation key={index} delay={index * 100} className="h-full">
                                        <div className="bg-[#FCFAF7] rounded-3xl p-6 md:p-8 border border-[#F0EBE1] shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
                                            {/* Wide Image inside Card */}
                                            <div className="relative w-full aspect-video md:aspect-[21/9] rounded-2xl overflow-hidden mb-6">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 66vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>

                                            <h3 className="text-2xl font-display font-medium text-stone-900 mb-3">{item.title}</h3>
                                            <p className="text-stone-600 font-light leading-relaxed text-lg">
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

            {/* --- CTA Section (Matching Activities CTA Layout) --- */}
            <section className="py-24 bg-stone-900 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <ScrollAnimation>
                        <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-white">Ready for Discovery?</h2>
                        <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                            Join our communal table for a meal you'll never forget. Reserve your spot at Sukrutham Farm Stay.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/book" className="inline-flex items-center gap-2 bg-[#758A6D] hover:bg-white hover:text-stone-900 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 text-sm uppercase tracking-wider">
                                Book Your Table <ArrowRight className="w-4 h-4" />
                            </Link>
                            <Link href="/our-story" className="text-stone-300 hover:text-white font-semibold underline underline-offset-4 decoration-stone-500 hover:decoration-white transition-all">
                                Read Our Story
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <FloatingCTA />
            <Footer />
        </main>
    );
};

export default LocalSavorPage;
