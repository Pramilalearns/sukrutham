"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";
import Link from "next/link";
import {
    Wifi, Wind, Snowflake, Coffee, Utensils,
    MapPin, User, Home, Dog, Droplets, Car, Plane, Leaf,
    Bike, Book, Clock, Ban, CheckCircle, BedDouble,
    MonitorCheck, Bath, Shirt, Table2, ChefHat, Sun, CloudRain,
    Music, Star, HeartHandshake, HelpCircle, ChevronDown, ChevronUp
} from "lucide-react";
import { useState } from "react";

// FAQ Item Component
const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b border-stone-200 py-4 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left font-medium text-stone-800 hover:text-primary transition-colors focus:outline-none"
            >
                <span>{question}</span>
                {isOpen ? <ChevronUp className="w-5 h-5 text-primary" /> : <ChevronDown className="w-5 h-5 text-stone-400" />}
            </button>
            <div className={`mt-2 text-stone-600 text-sm leading-relaxed overflow-hidden transition-all duration-300 ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                {answer}
            </div>
        </div>
    );
};

export default function RoomsPage() {
    const rooms = [
        {
            title: "The Paddy Room",
            size: "180 sq.ft.",
            image: "/room-view-2.png", // Using view image for Paddy room
            features: ["AC Room", "Private Verandah"],
            description: "Our most spacious room (180 sq.ft.), designed with a blend of traditional Kerala aesthetics and modern luxury. Features a private sit-out verandah with panoramic views of the lush paddy fields.",
            priceTwin: "₹6,500",
            priceSingle: "₹3,500",
            amenities: [
                { icon: Droplets, label: "Running Hot Water" },
                { icon: Wifi, label: "Fibre Optic Broadband" },
                { icon: Shirt, label: "Dressing Area & Table" },
                { icon: Table2, label: "Working Desk" },
                { icon: BedDouble, label: "King Size Twin Bed" },
                { icon: Shirt, label: "Double Wardrobe" },
                { icon: Bath, label: "Attached Bath" },
            ]
        },
        {
            title: "The Tapioca Room",
            size: "120 sq.ft.",
            image: "/room-view-modern.png",
            features: ["AC Room", "Paddy View"],
            description: "A tastefully appointed 120 sq.ft. room, offering uninterrupted views of the greenery surrounding the property. Perfect for comfort and connection.",
            priceTwin: "₹5,500",
            priceSingle: "₹3,000",
            amenities: [
                { icon: Droplets, label: "Running Hot Water" },
                { icon: Wifi, label: "Fibre Optic Broadband" },
                { icon: BedDouble, label: "King Size Twin Bed" },
                { icon: Shirt, label: "Single Wardrobe" },
                { icon: Table2, label: "Working Desk" },
                { icon: Bath, label: "Attached Bath" },
            ]
        },
        {
            title: "The Pepper Room",
            size: "120 sq.ft.",
            image: "/room-bedroom.png", // Using bedroom image for Pepper room
            features: ["Non-AC Room", "Natural Ventilation"],
            description: "A 120 sq.ft. room designed for the nature lover. Experience natural ventilation and the authentic, breezy rhythm of farm life.",
            priceTwin: "₹4,500",
            priceSingle: "₹2,500",
            amenities: [
                { icon: Droplets, label: "Running Hot Water" },
                { icon: Wifi, label: "Fibre Optic Broadband" },
                { icon: BedDouble, label: "King Size Twin Bed" },
                { icon: Shirt, label: "Single Wardrobe" },
                { icon: Table2, label: "Working Desk" },
                { icon: Bath, label: "Attached Bath" },
            ]
        }
    ];

    const inclusions = [
        {
            category: "Culinary Delights",
            items: [
                { icon: ChefHat, text: "Delectable Kerala cuisine (Veg/Non-Veg) for Breakfast, Lunch & Dinner" },
                { icon: Utensils, text: "Fully equipped kitchen available for guest use" }
            ]
        },
        {
            category: "Connectivity & Comfort",
            items: [
                { icon: Wifi, text: "High-speed fibre-optic broadband (4 devices) with solar backup" },
                { icon: MonitorCheck, text: "Good mobile network coverage (Airtel)" },
                { icon: BedDouble, text: "Immaculately furnished rooms with hot water & comfy beds" }
            ]
        },
        {
            category: "Adventure & Exploration",
            items: [
                { icon: Bike, text: "Complimentary bicycles for exploring" },
                { icon: Leaf, text: "Abundant local attractions: pottery, bird watching, waterfalls" },
                { icon: MapPin, text: "Off the beaten track, away from 'touristic' crowds" },
                { icon: Book, text: "Small library with an assortment of books" }
            ]
        },
        {
            category: "Warm Hospitality & Ease",
            items: [
                { icon: User, text: "Friendly host (Murali) with extensive local knowledge" },
                { icon: Home, text: "Ideal for families, staycations, & WFH" },
                { icon: Dog, text: "Pet-friendly with open spaces" },
                { icon: Droplets, text: "Fresh, sweet well water" },
                { icon: Car, text: "Parking for up to 3 cars" },
                { icon: CheckCircle, text: "Wheelchair friendly premises" },
                { icon: Plane, text: "Easy access by air, road, and rail" },
                { icon: Leaf, text: "Serene ambience in nature" }
            ]
        }
    ];

    const faqs = [
        { question: "Does Sukrutham have traditional Kerala life experiences?", answer: "Yes! Enjoy everything from farm tours to local activities like fishing." },
        { question: "Are the rooms suitable for Families?", answer: "Yes, our spacious rooms with king-size beds and modern amenities are ideal for a family stay." },
        { question: "Is it child friendly?", answer: "Yes! An ideal environment for children to interact with nature and indulge in spice garden walks." },
        { question: "How can I book Ayurvedic treatments?", answer: "Book our exclusive 2-night, 3-day package with Ayurvedic treatments through our website or by contacting us directly." }
    ];

    return (
        <main className="min-h-screen bg-stone-50">
            <Navbar variant="light" />

            {/* Page Header */}
            <div className="pt-32 pb-12 bg-primary/5 text-center px-4">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-4">
                    Our Guest Rooms
                </h1>
                <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                    Find Your Perfect Space amidst the serenity of Sukrutham.
                </p>
            </div>

            {/* Section 1: Guest Rooms */}
            <section className="py-16 container mx-auto px-6 md:px-12 lg:px-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {rooms.map((room, index) => (
                        <ScrollAnimation key={index} delay={index * 100} className="h-full">
                            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col h-full group">
                                {/* Room Image */}
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={room.image}
                                        alt={room.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 flex flex-col gap-2">
                                        {room.features.includes("AC Room") ? (
                                            <span className="bg-emerald-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                AC
                                            </span>
                                        ) : (
                                            <span className="bg-amber-600/90 backdrop-blur-sm text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                Non-AC
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h2 className="text-2xl font-display font-bold text-stone-900">{room.title}</h2>
                                        <span className="text-sm text-stone-500 font-medium">{room.size}</span>
                                    </div>

                                    <p className="text-stone-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {room.description}
                                    </p>

                                    {/* Amenities Icons - Updated to avoid clipping */}
                                    <div className="mb-6">
                                        <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-3">Room Amenities</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {room.amenities.map((amenity, i) => (
                                                <div key={i} className="flex items-center gap-2 px-3 py-2 bg-stone-50 border border-stone-100 rounded-lg text-stone-600 hover:bg-primary/5 hover:text-primary hover:border-primary/20 transition-all duration-300">
                                                    <amenity.icon className="w-4 h-4 shrink-0" />
                                                    <span className="text-xs font-medium whitespace-nowrap">{amenity.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Pricing */}
                                    <div className="bg-stone-50 p-4 rounded-xl mb-6">
                                        <div className="flex justify-between items-center mb-1">
                                            <span className="text-stone-500 text-sm">Twin Sharing</span>
                                            <span className="text-primary font-bold text-lg">{room.priceTwin}</span>
                                        </div>
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-stone-500">Single Occupancy</span>
                                            <span className="text-stone-800 font-semibold">{room.priceSingle}</span>
                                        </div>
                                        <div className="mt-2 pt-2 border-t border-stone-200 text-center">
                                            <span className="text-[10px] text-stone-400 font-medium uppercase tracking-wide">
                                                * Per night, Including 3 Meals
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        href="/#book"
                                        className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-lg font-bold text-center transition-all hover:shadow-lg active:scale-95"
                                    >
                                        Book This Room
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </section>

            {/* Section 2: Inclusions */}
            <section className="py-16 relative overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/kerala-pathway.png"
                        alt="Kerala Pathway"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-primary/85" />
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                    <div className="text-center mb-8">
                        <span className="text-white/80 text-xs font-bold uppercase tracking-widest">The Sukrutham Package</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold mt-2 mb-2 text-white">Included with Your Stay</h2>
                        <p className="text-white/80 max-w-2xl mx-auto text-lg">
                            We don&apos;t just provide a room; we provide a complete Kerala farm experience. Every booking includes:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-8 gap-y-6">
                        {inclusions.map((group, idx) => (
                            <ScrollAnimation key={idx} delay={idx * 100} animation="fade-up">
                                <div className="bg-white/10 p-6 rounded-xl border border-white/20 hover:border-white/40 transition-colors backdrop-blur-sm h-full">
                                    <h3 className="text-xl font-display font-bold text-amber-300 mb-6 pb-4 border-b border-white/10">
                                        {group.category}
                                    </h3>
                                    <ul className="space-y-4">
                                        {group.items.map((item, i) => (
                                            <li key={i} className="flex items-start gap-4">
                                                <div className="p-2 bg-amber-300/20 rounded-lg shrink-0 text-amber-300 mt-0.5">
                                                    <item.icon className="w-5 h-5" />
                                                </div>
                                                <span className="text-white/90 text-sm leading-relaxed font-medium">
                                                    {item.text}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Room Design & Nature Integration - Immersive Hero */}
            <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/room-view-2.png"
                        alt="Framing the Landscape"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-stone-900/40" />
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <ScrollAnimation className="max-w-2xl bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 text-white shadow-xl">
                        <span className="text-amber-300 text-xs font-bold uppercase tracking-widest mb-1 block">Nature Integration</span>
                        <h2 className="text-2xl md:text-4xl font-display font-bold mb-4 leading-tight">Rooms Designed to Frame the Landscape</h2>
                        <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6">
                            Innovation at Sukrutham is about merging with nature. Stone, wood, and clay come together to create a space that is both modern and timeless.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-base mb-1">The View</h4>
                                <p className="text-xs text-white/80">Panoramic views of lush greenery and cascading waterfalls through wide open windows.</p>
                            </div>
                            <div className="bg-white/5 p-3 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                                <h4 className="font-bold text-base mb-1">Sustainability</h4>
                                <p className="text-xs text-white/80">Solar panels, rainwater harvesting, and green roofs for an eco-conscious stay.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Section 4: Modern Comforts & WFH - Bento Grid */}
            <section className="py-16 bg-stone-50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-10">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs">Work & Relax</span>
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900 mt-1">Modern Comforts & WFH Ready</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
                        {/* Large Card: Work from Farm */}
                        <ScrollAnimation className="md:col-span-2 row-span-2 relative group overflow-hidden rounded-2xl shadow-sm">
                            <Image
                                src="/room-view-modern.png"
                                alt="Work from Farm"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 flex flex-col justify-end">
                                <h3 className="text-xl font-bold text-white mb-1">Work from Farm</h3>
                                <p className="text-sm text-white/80">Seamlessly transition between city productivity and rural peace. Your perfect remote office awaits.</p>
                            </div>
                        </ScrollAnimation>

                        {/* Medium Card: Connectivity */}
                        <ScrollAnimation delay={100} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-center hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-3">
                                <Wifi className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-stone-900 mb-1">High-Speed WiFi</h3>
                            <p className="text-stone-600 text-xs">Fibre optic connectivity throughout the property covering all rooms and common areas.</p>
                        </ScrollAnimation>

                        {/* Medium Card: Climate */}
                        <ScrollAnimation delay={200} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col justify-center hover:shadow-md transition-shadow">
                            <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 mb-3">
                                <Snowflake className="w-5 h-5" />
                            </div>
                            <h3 className="text-lg font-bold text-stone-900 mb-1">Climate Control</h3>
                            <p className="text-stone-600 text-xs">Individually controlled ACs and natural ventilation options for your perfect comfort level.</p>
                        </ScrollAnimation>

                        {/* Wide Card: Power */}
                        <ScrollAnimation delay={300} className="md:col-span-1 bg-stone-900 p-6 rounded-2xl shadow-sm flex flex-col justify-center text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <Sun className="w-24 h-24" />
                            </div>
                            <h3 className="text-lg font-bold mb-1 z-10">Uninterrupted Power</h3>
                            <p className="text-stone-400 text-xs z-10">24/7 Solar Backup ensures your day never stops.</p>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* Section 5: Evening Experience - Atmospheric Dark Mode */}
            <section className="py-20 bg-stone-950 text-white relative overflow-hidden flex items-center text-center">
                <div className="absolute inset-0 opacity-60">
                    <Image
                        src="/kerala-hills.jpg" // Placeholder for evening shot
                        alt="Evening Atmosphere"
                        fill
                        className="object-cover blur-sm scale-110"
                    />
                    <div className="absolute inset-0 bg-stone-950/80" />
                </div>

                <div className="container mx-auto px-6 relative z-10 max-w-4xl">
                    <ScrollAnimation>
                        <div className="inline-block p-2 rounded-full bg-amber-500/10 mb-4 backdrop-blur-md border border-amber-500/20">
                            <Star className="w-5 h-5 text-amber-400" />
                        </div>
                        <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 leading-tight">
                            Twilight & <span className="text-amber-400">Evening Secrets</span>
                        </h2>
                        <p className="text-lg text-stone-300 leading-relaxed mb-8">
                            "Twilight is a magical time when nature paints the sky. As the sun sets, whispers of the earthy fragrance of young greenery invigorate your mind."
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                            <div className="bg-white/5 p-6 rounded-xl  hover:bg-white/10 transition-all border border-white/5 hover:border-amber-500/30 group">
                                <Music className="w-6 h-6 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold mb-1">Sound Symphony</h4>
                                <p className="text-stone-400 text-xs">A natural orchestra of chirping birds, rustling leaves, and the distant roar of waterfalls.</p>
                            </div>
                            <div className="bg-white/5 p-6 rounded-xl  hover:bg-white/10 transition-all border border-white/5 hover:border-amber-500/30 group">
                                <Sun className="w-6 h-6 text-amber-400 mb-3 group-hover:scale-110 transition-transform" />
                                <h4 className="text-lg font-bold mb-1">Mood Lighting</h4>
                                <p className="text-stone-400 text-xs">Artful illumination along pathways and lantern-lit outdoor lounges for intimate conversations.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Section 6: Dining & Hospitality - Split with Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                        <ScrollAnimation className="relative h-[450px] rounded-[2rem] overflow-hidden shadow-xl">
                            <Image
                                src="/kerala-food-v2.png"
                                alt="Kerala Cuisine"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <span className="bg-white text-stone-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Authentic</span>
                                <h3 className="text-white text-2xl font-bold mt-3">From Farm to Table</h3>
                            </div>
                        </ScrollAnimation>

                        <div className="space-y-8">
                            <ScrollAnimation delay={100}>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-4">Authentic Kerala Cuisine</h2>
                                <p className="text-stone-600 text-base leading-relaxed mb-6">
                                    Savor the flavors of Kerala with meals prepared by skilled chefs using locally sourced ingredients. It's not just food; it's a cultural immersion.
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
                                        <div className="bg-orange-100 p-2 rounded-full text-orange-600 mt-1"><ChefHat className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold text-stone-800 text-base">Traditional Menu</h4>
                                            <p className="text-stone-600 text-xs mt-1">Soft appam, steaming puttu, and crispy banana chips tailored to your taste.</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4 p-3 rounded-xl hover:bg-stone-50 transition-colors">
                                        <div className="bg-primary/10 p-2 rounded-full text-primary mt-1"><HeartHandshake className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold text-stone-800 text-base">Personalized Service</h4>
                                            <p className="text-stone-600 text-xs mt-1">Host Murali is available 24/7 to arrange farm tours, fishing trips, and cultural visits.</p>
                                        </div>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 7: Logistics & FAQ - Clean Modern Cards */}
            <section className="py-16 bg-stone-50 border-t border-stone-200">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900">Good to Know</h2>
                        <p className="text-stone-500 mt-1 text-base">Transparent policies for a worry-free stay.</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto">

                        {/* Logistics Card (4 cols) */}
                        <ScrollAnimation className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-100 h-full">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-3"><Clock className="w-5 h-5 text-primary" /> Logistics</h3>
                            <div className="space-y-4">
                                <div className="p-3 bg-stone-50 rounded-xl">
                                    <h4 className="font-bold text-stone-800 text-xs mb-2 uppercase tracking-wide">Meal Timings</h4>
                                    <div className="space-y-1 text-xs">
                                        <div className="flex justify-between"><span className="text-stone-500">Breakfast</span> <span className="font-bold text-stone-900">08:00 – 10:30</span></div>
                                        <div className="flex justify-between"><span className="text-stone-500">Lunch</span> <span className="font-bold text-stone-900">12:30 – 14:30</span></div>
                                        <div className="flex justify-between"><span className="text-stone-500">Dinner</span> <span className="font-bold text-stone-900">20:00 – 23:00</span></div>
                                    </div>
                                </div>
                                <div className="space-y-1 text-xs text-stone-600">
                                    <p>📶 <strong className="text-stone-900">Wi-Fi:</strong> Included (4 devices).</p>
                                    <p>🍛 <strong className="text-stone-900">Cuisine:</strong> Traditional Kerala only.</p>
                                    <p>🚕 <strong className="text-stone-900">Tours:</strong> On request.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Cancellation Card (4 cols) */}
                        <ScrollAnimation delay={100} className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-100 h-full">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-3"><Ban className="w-5 h-5 text-red-500" /> Cancellation</h3>
                            <div className="space-y-3">
                                <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-xl border border-emerald-100">
                                    <span className="text-xs font-bold text-emerald-800">15+ Days Prior</span>
                                    <span className="text-[10px] font-bold bg-white text-emerald-600 px-2 py-1 rounded shadow-sm">100% Refund</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-xl border border-amber-100">
                                    <span className="text-xs font-bold text-amber-800">8 – 14 Days</span>
                                    <span className="text-[10px] font-bold bg-white text-amber-600 px-2 py-1 rounded shadow-sm">1 Night Penalty</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-xl border border-orange-100">
                                    <span className="text-xs font-bold text-orange-800">7 Days</span>
                                    <span className="text-[10px] font-bold bg-white text-orange-600 px-2 py-1 rounded shadow-sm">50% Retention</span>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
                                    <span className="text-xs font-bold text-red-800">0 – 7 Days</span>
                                    <span className="text-[10px] font-bold bg-white text-red-600 px-2 py-1 rounded shadow-sm">No Refund</span>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* FAQ Card (4 cols) */}
                        <ScrollAnimation delay={200} className="lg:col-span-4 bg-white p-6 rounded-2xl shadow-sm border border-stone-100 h-full">
                            <h3 className="font-bold text-lg mb-4 flex items-center gap-3"><HelpCircle className="w-5 h-5 text-indigo-500" /> Common Questions</h3>
                            <div className="space-y-1">
                                {faqs.map((faq, i) => (
                                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>

            <FloatingCTA />
            <Footer />
        </main>
    );
}
