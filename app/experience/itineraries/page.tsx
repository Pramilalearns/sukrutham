"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Leaf, Tent, Map as MapIcon, Compass, Coffee, Utensils, Bird, Bike, Route, BookOpen, Sunrise, Sunset, Heart, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Data structures
const farmItineraries = [
    {
        id: "1-day",
        title: "1-Day Reset",
        duration: "Quick Escape",
        description: "A perfect day trip to disconnect from the hustle and breathe in the farm air.",
        highlights: ["Welcome Drink", "Organic Lunch", "Farm Tour", "Animal Interaction", "Evening Tea/Snacks", "Traditional Dinner"],
        icon: Coffee,
        color: "bg-[#F3F0E7] text-[#5C6E58]",
        border: "border-[#e0d9c8]",
    },
    {
        id: "2-day",
        title: "2-Day Rejuvenation",
        duration: "Overnight Stay",
        description: "Immerse deeper into the village life with an overnight stay and a special campfire dinner.",
        highlights: ["All Day 1 Activities", "Bird Watching", "Cooking Class", "Night 1 Campfire", "Appam/Stew Special Dinner"],
        icon: Leaf,
        color: "bg-[#ECE6D5] text-[#8C5D47]",
        border: "border-[#d1c8b0]",
        popular: true,
    },
    {
        id: "3-day",
        title: "3-Day Deep Dive",
        duration: "Full Immersion",
        description: "The complete Sukrutham experience. Reconnect with nature, local crafts, and yourself.",
        highlights: ["All Day 2 Activities", "Cycling by the Paddy Fields", "Pottery Village Visit", "Farewell Sadhya Feast"],
        icon: Tent,
        color: "bg-[#5C6E58] text-[#F3F0E7]",
        border: "border-[#4a5a47]",
    }
];

const explorerItineraries = [
    {
        id: "2-day-sightseeing",
        title: "2-Day Nature Sightseeing",
        description: "Explore the natural beauty surrounding the farm, from hidden rocky hills to cascading falls.",
        icons: [Route, Bike, Sunset],
        locations: ["Vattayi Waterfalls", "Cheppara Rock Garden", "Night 1 Farm Campfire"],
        includes: "Includes all meals (Farm Breakfast/Lunch/Dinner & Tea)",
    },
    {
        id: "3-day-culture",
        title: "3-Day Culture & Heritage",
        description: "Dive into the rich history and traditions of Thrissur, the cultural capital of Kerala.",
        icons: [BookOpen, MapIcon, Sunrise],
        locations: ["Guruvayur Temple", "Elephant Sanctuary", "Kerala Kalamandalam", "Peechi Dam", "Night 2 Farm Campfire"],
        includes: "Includes all meals and local tea breaks",
    }
];

export default function ItinerariesPage() {
    const [activeFarmTab, setActiveFarmTab] = useState("2-day");

    return (
        <main className="min-h-screen bg-[#F8F7F4] font-sans selection:bg-primary/20 selection:text-primary">
            <Navbar variant="transparent" />

            {/* HERO SECTION */}
            <section className="relative min-h-[85vh] flex items-center justify-center pt-24 overflow-hidden">
                <div className="absolute inset-0 z-0 bg-stone-900">
                    {/* Background Texture/Image overlay */}
                    <Image
                        src="/images/itineraries/hero-bg.jpg"
                        alt="Lush green tea estate mountains in Kerala"
                        fill
                        className="object-cover opacity-60 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-[#F8F7F4]"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl mt-12 md:mt-24 pb-24">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm font-semibold tracking-widest uppercase mb-6 drop-shadow-sm">
                        Curated Experiences
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        Your Journey, <span className="italic text-accent">Your Pace.</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-200 font-light leading-relaxed mb-10 max-w-2xl mx-auto drop-shadow-md">
                        Whether you wish to dive into farm life or explore the heritage of Thrissur, we’ve mapped out the perfect stay.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold tracking-wide hover:bg-primary/90 transition-all hover:-translate-y-1 shadow-xl shadow-primary/20">
                            Request a Custom Itinerary
                        </Link>
                    </div>
                </div>
            </section>

            {/* SECTION A: THE FARM SOUL */}
            <section className="py-24 bg-[#F8F7F4] relative z-20 -mt-12">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">The Farm Soul</h2>
                        <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
                            Immersive in-farm itineraries designed to reconnect you with the earth, the animals, and traditional Kerala living.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {farmItineraries.map((itinerary) => (
                            <div
                                key={itinerary.id}
                                className={`rounded-3xl p-8 border ${itinerary.border} ${itinerary.color} flex flex-col relative transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
                            >
                                {itinerary.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8C5D47] text-white text-xs font-bold uppercase tracking-widest py-1 px-4 rounded-full shadow-md">
                                        Most Loved
                                    </div>
                                )}
                                <div className="mb-6 flex justify-between items-start">
                                    <itinerary.icon className="w-10 h-10 opacity-80" strokeWidth={1.5} />
                                    <span className="text-sm font-bold uppercase tracking-widest opacity-60 bg-black/5 px-3 py-1 rounded-full">{itinerary.duration}</span>
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-3">{itinerary.title}</h3>
                                <p className="opacity-80 pb-6 mb-6 border-b border-current/20 font-light flex-grow">{itinerary.description}</p>

                                <ul className="space-y-3 mb-10 font-medium opacity-90">
                                    {itinerary.highlights.map((item, idx) => (
                                        <li key={idx} className="flex gap-3 items-start">
                                            <div className="w-1.5 h-1.5 rounded-full bg-current mt-2 opacity-50 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="mt-auto grid grid-cols-2 gap-3">
                                    <Link href="tel:+919940668754" className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-white/20 hover:bg-white/30 transition-colors font-bold text-sm backdrop-blur-sm">
                                        <Phone className="w-4 h-4" /> Call Host
                                    </Link>
                                    <Link href="/book" className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-black/10 hover:bg-black/20 transition-colors font-bold text-sm backdrop-blur-sm">
                                        <Mail className="w-4 h-4" /> Request Call
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION C: THE NO-PLAN PLAN (Maverick Card) */}
            <section className="py-12 bg-white relative">
                <div className="container mx-auto px-6 max-w-5xl">
                    <div className="bg-[#F8F7F4] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden flex flex-col md:flex-row items-center gap-12 shadow-xl border border-stone-200/50">
                        {/* Decorative Graphic */}
                        <div className="absolute right-0 bottom-0 opacity-[0.03] translate-x-1/4 translate-y-1/4 pointer-events-none">
                            <Compass className="w-[400px] h-[400px] text-stone-900" strokeWidth={0.5} />
                        </div>

                        <div className="md:w-1/2 relative z-10">
                            <span className="inline-flex items-center gap-2 text-primary font-bold tracking-widest uppercase text-sm mb-4">
                                <Heart className="w-4 h-4" /> Go With The Flow
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6 leading-tight">
                                The "Un-Planned" Stay.
                            </h2>
                            <p className="text-stone-600 text-lg font-medium italic mb-6">
                                Because one size never fits all.
                            </p>
                            <Link href="/book" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold tracking-wide hover:bg-primary/90 transition-all hover:scale-105 shadow-xl shadow-primary/20">
                                Talk to the Host about your Vibe
                            </Link>
                        </div>
                        <div className="md:w-1/2 relative z-10">
                            <div className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-white text-stone-600 font-light leading-relaxed shadow-sm">
                                We realize that for some, the best plan is no plan at all. Every guest arrives at Sukrutham on a unique journey—some to seek adventure, others to seek silence. We respect and celebrate that. Whether you want to spend your entire stay in a hammock or decide your activities only when the sun comes up, Sukrutham Farmstay adapts to your rhythm. No schedules, no pressure—just you and the land.
                                <br /><br />
                                <strong className="font-bold text-primary">Explore your way. Unwind your way.</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION B: THE EXPLORER'S COMPASS */}
            <section className="py-24 bg-[#F8F7F4] relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-stone-300 to-transparent"></div>
                <div className="absolute -left-64 -top-64 w-[800px] h-[800px] bg-stone-200/50 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="container mx-auto px-6 max-w-5xl relative z-10">
                    <div className="text-center mb-16">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-sm flex items-center justify-center gap-2">
                            <Compass className="w-5 h-5" /> Sightseeing Itineraries
                        </span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">The Explorer’s Compass</h2>
                        <p className="text-lg text-stone-600 font-light max-w-2xl mx-auto">
                            Step out of the farm to witness the vibrant culture, roaring waterfalls, and sacred heritage of Thrissur.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {explorerItineraries.map((itinerary) => (
                            <div key={itinerary.id} className="bg-white rounded-3xl p-8 border border-stone-200 flex flex-col shadow-lg shadow-stone-900/5 transition-transform duration-300 hover:-translate-y-1">
                                <div className="flex gap-3 mb-6">
                                    {itinerary.icons.map((Icon, idx) => (
                                        <div key={idx} className="w-12 h-12 rounded-full bg-stone-100 text-primary flex items-center justify-center">
                                            <Icon className="w-5 h-5" strokeWidth={2} />
                                        </div>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-display font-bold text-stone-900 mb-3">{itinerary.title}</h3>
                                <p className="text-stone-600 font-light mb-6 flex-grow">{itinerary.description}</p>

                                <div className="bg-stone-50 rounded-2xl p-6 mb-8 border border-stone-100">
                                    <h4 className="font-bold text-primary text-sm uppercase tracking-widest mb-4">Locations Covered</h4>
                                    <ul className="space-y-3 font-medium text-stone-800">
                                        {itinerary.locations.map((loc, idx) => (
                                            <li key={idx} className="flex gap-3 items-center">
                                                <MapIcon className="w-4 h-4 text-primary/60" /> <span>{loc}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-stone-600 font-medium mb-8 bg-stone-50 py-3 px-4 rounded-xl">
                                    <Utensils className="w-4 h-4 text-stone-400" /> {itinerary.includes}
                                </div>

                                <div className="mt-auto grid grid-cols-2 gap-3">
                                    <Link href="tel:+919940668754" className="inline-flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-stone-200 text-stone-700 hover:bg-stone-100 hover:text-stone-900 transition-colors font-bold text-sm">
                                        <Phone className="w-4 h-4" /> Call Host
                                    </Link>
                                    <Link href="/book" className="inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white hover:bg-primary/90 transition-colors font-bold text-sm">
                                        <Mail className="w-4 h-4" /> Request Call
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
