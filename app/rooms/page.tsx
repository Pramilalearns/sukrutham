"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimation from "@/components/ScrollAnimation";
import Image from "next/image";
import Link from "next/link";
import RoomGallery from "@/components/RoomGallery";
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
    const [activeAltIndex, setActiveAltIndex] = useState<number | null>(0);
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
                { icon: Utensils, text: "Fully equipped kitchen available for guest use" },
                { icon: Star, text: "Dine under the stars" }
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
                { icon: User, text: "Friendly host (K P Murali) with extensive local knowledge" },
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
                                        href="/book"
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



            {/* Alternate Layout: High-End Editorial Split Layout (Option 2) */}
            <section className="py-24 bg-white relative border-t border-[#F0EBE1] overflow-hidden">
                {/* Subtle Background Accent */}
                <div className="absolute top-40 right-0 w-[500px] h-[700px] bg-[#FAF8F5] rounded-l-[100px] -z-0 pointer-events-none hidden lg:block"></div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

                        {/* Sticky Left Column */}
                        <div className="lg:w-5/12">
                            <div className="sticky top-32">
                                <span className="text-primary font-semibold tracking-wider uppercase text-sm block mb-4">
                                    The Sukrutham Package
                                </span>
                                <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 leading-tight mb-6">
                                    What's Included with <span className="text-stone-500 italic font-serif">Your Stay?</span>
                                </h2>
                                <p className="text-[#A48869] font-medium text-xl mb-6 leading-snug">
                                    Your booking isn't just a room; it’s a beautifully curated experience.
                                </p>
                                <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
                                    We thoughtfully design a holistic Kerala farm experience. Every booking envelopes you in these premium inclusions, ensuring a seamless and authentic retreat into nature.
                                </p>
                                {/* Decorative line */}
                                <div className="w-16 h-1 bg-[#EBE5DC]"></div>
                            </div>
                        </div>

                        {/* Scrolling Right Column (Categories) */}
                        <div className="lg:w-7/12">
                            {/* Accordion / Interactive List */}
                            <div className="flex flex-col gap-4 md:gap-5 cursor-pointer">
                                {[inclusions[2], inclusions[0], inclusions[1], inclusions[3]].map((inclusion, idx) => (
                                    <ScrollAnimation key={idx} delay={idx * 100} className="relative group/section bg-white rounded-2xl border border-[#F0EBE1] shadow-sm hover:shadow-md transition-shadow overflow-hidden">
                                        {/* Accordion Header */}
                                        <div
                                            className="flex items-center justify-between p-5 md:p-6"
                                            onClick={() => setActiveAltIndex(activeAltIndex === idx ? null : idx)}
                                        >
                                            <div className="flex items-center gap-5">
                                                <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full border flex-shrink-0 flex items-center justify-center transition-colors duration-500 ${activeAltIndex === idx ? 'bg-[#A48869] text-white border-[#A48869]' : 'bg-[#FCFAF7] text-[#A48869] border-[#F0EBE1]'}`}>
                                                    {inclusion.category === "Adventure & Exploration" && <MapPin className="w-5 h-5 md:w-6 md:h-6" />}
                                                    {inclusion.category === "Culinary Delights" && <ChefHat className="w-5 h-5 md:w-6 md:h-6" />}
                                                    {inclusion.category === "Connectivity & Comfort" && <Wifi className="w-5 h-5 md:w-6 md:h-6" />}
                                                    {inclusion.category === "Warm Hospitality & Ease" && <HeartHandshake className="w-5 h-5 md:w-6 md:h-6" />}
                                                </div>
                                                <h3 className="text-xl md:text-2xl font-display font-medium text-stone-900">
                                                    {inclusion.category}
                                                </h3>
                                            </div>
                                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#F0EBE1]/50 flex items-center justify-center text-[#A48869] transition-transform duration-500 ${activeAltIndex === idx ? 'rotate-180' : ''}`}>
                                                <ChevronDown className="w-4 h-4 md:w-5 md:h-5 opacity-50" />
                                            </div>
                                        </div>

                                        {/* Accordion Content */}
                                        <div className={`transition-all duration-500 ease-in-out overflow-hidden ${activeAltIndex === idx ? 'max-h-[500px] opacity-100 pb-5 md:pb-6' : 'max-h-0 opacity-0 pb-0'}`}>
                                            <div className="px-5 md:px-6 pt-1 md:pl-[5.5rem]">
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6">
                                                    {inclusion.items.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-4 group">
                                                            <div className="text-[#BC8A5F] shrink-0 mt-1 transition-transform duration-300 group-hover:scale-110">
                                                                <item.icon className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                                                            </div>
                                                            <span className="text-stone-600 text-sm md:text-base leading-relaxed group-hover:text-stone-900 transition-colors">
                                                                {item.text}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <RoomGallery />

            {/* Section 7: Important House Rules (Moved up) */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
                    <div className="mb-12 text-center">
                        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-2 block">Policies</span>
                        <h2 className="text-3xl md:text-5xl font-display font-medium text-stone-900 leading-tight">Important House Rules</h2>
                        <p className="text-stone-500 mt-4 text-lg">Please take a moment to review our stay policies.</p>

                        {/* Standalone Rate Description */}
                        <p className="mt-8 text-stone-700 text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-medium">
                            Rate is inclusive of all meals during the stay and basic WiFi on 4 devices.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                        {/* Dining & Cuisine */}
                        <ScrollAnimation className="md:col-span-12 lg:col-span-7 bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col justify-center">
                            <h3 className="text-2xl font-display font-medium text-stone-900 mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-[#A48869]">
                                    <Clock className="w-5 h-5" />
                                </div>
                                Dining & Cuisine
                            </h3>
                            <p className="text-stone-600 mb-6 text-sm md:text-base leading-relaxed">
                                Sukrutham cuisine will be traditional Kerala cuisine only, and anything otherwise will require prior intimation.
                            </p>
                            <div className="bg-white border border-stone-100 rounded-2xl p-5 shadow-sm">
                                <h4 className="font-bold text-stone-800 text-xs uppercase tracking-widest mb-4">Meal Timings (hrs)</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    <div className="bg-stone-50 p-4 rounded-xl text-center">
                                        <div className="text-stone-400 text-xs mb-1 uppercase font-bold tracking-wider">Breakfast</div>
                                        <div className="text-stone-900 font-medium">08:00 - 10:30</div>
                                    </div>
                                    <div className="bg-stone-50 p-4 rounded-xl text-center">
                                        <div className="text-stone-400 text-xs mb-1 uppercase font-bold tracking-wider">Lunch</div>
                                        <div className="text-stone-900 font-medium">12:30 - 14:30</div>
                                    </div>
                                    <div className="bg-stone-50 p-4 rounded-xl text-center">
                                        <div className="text-stone-400 text-xs mb-1 uppercase font-bold tracking-wider">Dinner</div>
                                        <div className="text-stone-900 font-medium">20:00 - 23:00</div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Additional Info (Tall Card) */}
                        <ScrollAnimation delay={100} className="md:col-span-12 lg:col-span-5 bg-[#FAF8F5] p-8 rounded-[2rem] shadow-sm border border-[#F0EBE1]">
                            <h3 className="text-2xl font-display font-medium text-stone-900 mb-4 flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#758A6D] shadow-sm">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                Tours & Activities
                            </h3>
                            <p className="text-stone-600 text-base leading-relaxed mb-6">
                                Tours outside the package can be planned with prior intimation and additional transportation charges will apply.
                            </p>
                        </ScrollAnimation>

                        {/* Cancellation Policy (Full Row) */}
                        <ScrollAnimation delay={200} className="md:col-span-12 bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col md:flex-row gap-8 lg:items-center">
                            <div className="md:w-1/3">
                                <h3 className="text-2xl font-display font-medium text-stone-900 mb-3 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shadow-sm">
                                        <Ban className="w-5 h-5" />
                                    </div>
                                    Cancellation Policy
                                </h3>
                                <p className="text-stone-500 text-sm leading-relaxed">
                                    Cancellation will receive a full refund except when cancelled 1 week prior, in which 50% of the amount paid will be retained.
                                </p>
                            </div>
                            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="bg-emerald-50/50 border border-emerald-100 p-5 rounded-2xl relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="text-emerald-800 font-bold mb-1">15+ Days</div>
                                    <div className="text-emerald-600 text-xs font-medium uppercase tracking-wider">Prior to arrival</div>
                                    <div className="mt-4 text-emerald-900 text-sm font-semibold">Cancel without penalty</div>
                                </div>
                                <div className="bg-amber-50/50 border border-amber-100 p-5 rounded-2xl relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="text-amber-800 font-bold mb-1">8 - 14 Days</div>
                                    <div className="text-amber-600 text-xs font-medium uppercase tracking-wider">Prior to arrival</div>
                                    <div className="mt-4 text-amber-900 text-sm font-semibold">1-night penalty</div>
                                </div>
                                <div className="bg-red-50/50 border border-red-100 p-5 rounded-2xl relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="text-red-800 font-bold mb-1">0 - 7 Days</div>
                                    <div className="text-red-600 text-xs font-medium uppercase tracking-wider">Prior to arrival</div>
                                    <div className="mt-4 text-red-900 text-sm font-semibold">No refund</div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </section>

            {/* "Why You Will Love Your Stay at Sukrutham" - Comprehensive section */}
            <section className="py-24 bg-stone-50 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
                    <div className="text-center mb-16 max-w-4xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-display font-medium text-stone-900 mb-6">Why You Will Love Your Stay at Sukrutham</h2>
                        <p className="text-stone-600 text-lg md:text-xl leading-relaxed">
                            Whether you come seeking quiet reflection, a meaningful connection with nature, or simply a peaceful escape from everyday life, Sukrutham Farmstay offers an experience that feels warm, authentic, and deeply refreshing. Here, the charm of rural Kerala blends beautifully with thoughtful comforts to create a stay that is both relaxing and memorable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Rooms & Amenities */}
                        <ScrollAnimation className="relative bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col justify-center">
                            {/* Floating Decorative Corner Image */}
                            <div className="absolute -top-6 -right-6 lg:-right-8 w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-white shadow-lg overflow-hidden z-20 rotate-6 hidden sm:block">
                                <Image src="/room-view-2.png" alt="Rooms" fill className="object-cover" />
                            </div>

                            <div className="mb-10 pt-4 md:pt-0 pr-0 sm:pr-20">
                                <h3 className="text-2xl font-display font-medium text-stone-900 mb-4 text-emerald-900">Comfortable Rooms with Rustic Charm</h3>
                                <p className="text-stone-600 text-base leading-relaxed">
                                    Our spacious rooms combine traditional farmhouse aesthetics with modern comfort. Natural materials like stone, wood, and clay echo the surrounding landscape, creating spaces that feel calm and grounded. Large windows and private terraces frame breathtaking views of the hills, streams, and cascading waterfalls around the property.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-2xl font-display font-medium text-stone-900 mb-4 text-emerald-900">Thoughtful Modern Amenities</h3>
                                <p className="text-stone-600 text-base leading-relaxed">
                                    While the setting is rooted in nature, your comfort remains our priority. Guests enjoy high-speed Wi-Fi, individually controlled air-conditioning, and well-appointed private bathrooms with modern hot and cold water facilities and complimentary toiletries.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Evening Magic & Dining */}
                        <ScrollAnimation delay={100} className="relative bg-[#F4EDE4] p-8 md:p-12 rounded-[2rem] shadow-sm border border-[#EAE0D3] flex flex-col justify-center overflow-hidden">
                            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay">
                                <Image src="/kerala-hills.jpg" alt="Texture" fill className="object-cover grayscale" />
                            </div>
                            
                            {/* Floating Decorative Corner Image */}
                            <div className="absolute -bottom-6 -right-6 lg:-right-8 w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-[#F4EDE4] shadow-lg overflow-hidden z-20 -rotate-6 hidden sm:block">
                                <Image src="/kerala-food-v2.png" alt="Dining" fill className="object-cover" />
                            </div>

                            <div className="relative z-10 mb-10 pr-0 sm:pr-20">
                                <h3 className="text-2xl font-display font-medium text-amber-900 mb-4">Evenings Filled with Natural Magic</h3>
                                <p className="text-stone-700 text-base leading-relaxed">
                                    As the sun sets, Sukrutham transforms into a magical retreat. The golden hour paints the sky with warm colors, while cool breezes carry the fresh scent of greenery. Evenings come alive with the gentle soundscape of birds, rustling leaves, and distant waterfalls, creating a peaceful atmosphere. Thoughtfully placed lighting and lantern-lit outdoor lounges make the space perfect for quiet conversations and reflection.
                                </p>
                            </div>

                            <div className="relative z-10 pb-4 md:pb-0 pr-0 sm:pr-20">
                                <h3 className="text-2xl font-display font-medium text-amber-900 mb-4">Authentic Kerala Dining</h3>
                                <p className="text-stone-700 text-base leading-relaxed">
                                    A stay here is incomplete without experiencing the flavors of Kerala. Our kitchen prepares fresh, home-style meals using local ingredients, including favorites like soft appam, steaming puttu, and crispy banana chips. Guests may enjoy their meals in the comfort of their room or dine outdoors surrounded by nature.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Village Experiences */}
                        <ScrollAnimation delay={200} className="lg:col-span-1 bg-[#FAF8F5] p-8 md:p-10 rounded-[2rem] shadow-sm border border-[#F0EBE1] flex flex-col justify-center">
                            <div className="w-12 h-12 bg-amber-100/50 rounded-full flex items-center justify-center text-amber-600 mb-6">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-display font-medium text-stone-900 mb-4">Experiences That Connect You with the Village</h3>
                            <p className="text-stone-600 text-base leading-relaxed">
                                Sukrutham offers opportunities to slow down and immerse yourself in local life. Guests can take peaceful village walks, try fishing with locals, or visit nearby cultural landmarks such as Kerala Kalamandalam, renowned for classical dance and music traditions.
                            </p>
                        </ScrollAnimation>

                        {/* WFH & Recharge */}
                        <ScrollAnimation delay={300} className="lg:col-span-2 relative bg-[#EAECE4] p-8 md:p-10 rounded-[2rem] shadow-sm border border-[#DCE2D4] overflow-hidden flex flex-col md:flex-row gap-8 items-center">
                            <div className="absolute top-0 right-0 p-12 opacity-[0.03] pointer-events-none">
                                <Sun className="w-64 h-64 text-emerald-900" />
                            </div>

                             {/* Floating Decorative Corner Image */}
                             <div className="absolute -top-6 -left-6 lg:-left-6 w-24 h-24 md:w-32 md:h-32 rounded-2xl border-4 border-[#EAECE4] shadow-lg overflow-hidden z-20 rotate-3 hidden md:block">
                                <Image src="/room-view-modern.png" alt="Work" fill className="object-cover" />
                            </div>

                            <div className="relative z-10 w-full md:pl-24 lg:pl-32">
                                <h3 className="text-2xl md:text-3xl font-display font-medium text-stone-900 mb-4">A Perfect Place to Work and Recharge</h3>
                                <p className="text-stone-700 text-base leading-relaxed mb-4">
                                    If you need to work while travelling, Sukrutham provides the best of both worlds. Reliable high-speed internet ensures productivity, while the natural surroundings offer refreshing breaks.
                                </p>
                                <p className="text-stone-700 text-base leading-relaxed">
                                    Step outside for a walk through gardens and green pathways, listen to the birds, and return to work feeling renewed.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                         {/* Sustainability */}
                         <ScrollAnimation delay={400} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col sm:flex-row items-start gap-6">
                            <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600 shrink-0">
                                <Sun className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-medium text-stone-900 mb-3 text-emerald-900">Sustainability at the Heart of the Stay</h3>
                                <p className="text-stone-600 text-base leading-relaxed">
                                    Sukrutham is designed with care for the environment. Solar panels, rainwater harvesting, and eco-friendly design elements help preserve the beauty of the land while supporting sustainable living.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Hospitality */}
                        <ScrollAnimation delay={500} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-stone-100 flex flex-col sm:flex-row items-start gap-6">
                             <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 shrink-0">
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-display font-medium text-stone-900 mb-3 text-amber-900">Personalized Hospitality</h3>
                                <p className="text-stone-600 text-base leading-relaxed">
                                    From arranging farm tours and local experiences to assisting with transportation, our team ensures every guest feels welcomed and cared for throughout their stay.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                </div>
            </section>
            {/* Final CTA Section */}
            <section className="py-24 bg-[#F5F2ED] text-stone-900 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-multiply">
                    <Image src="/kerala-pathway.png" alt="Pattern" fill className="object-cover" />
                </div>
                {/* Floating Decorative Image Left */}
                <div className="absolute top-10 left-0 lg:left-10 w-48 h-48 md:w-64 md:h-64 opacity-30 sm:opacity-80 pointer-events-none -translate-x-12 translate-y-12 rounded-full overflow-hidden border-8 border-[#F5F2ED] shadow-xl rotate-12">
                    <Image src="/host-home-new.jpg" alt="Decor" fill className="object-cover" />
                </div>
                {/* Floating Decorative Image Right */}
                <div className="absolute bottom-10 right-0 lg:right-10 w-32 h-32 md:w-48 md:h-48 opacity-30 sm:opacity-80 pointer-events-none translate-x-8 translate-y-8 rounded-2xl overflow-hidden border-8 border-[#F5F2ED] shadow-xl -rotate-12">
                    <Image src="/kerala-food-v2.png" alt="Decor" fill className="object-cover" />
                </div>

                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <ScrollAnimation>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6 text-stone-900">Experience Kerala&apos;s Rural Beauty</h2>
                        <p className="text-lg md:text-xl text-stone-700 leading-relaxed mb-10 max-w-3xl mx-auto font-medium">
                            Call us now to reserve your room or learn more about the package, facilities, and seasonal events. Looking forward to greeting you at Sukrutham Farm Stay, the house that&apos;s a place where each moment becomes a party with heritage richness and beauty that&apos;ll always prevail in Kerala.
                        </p>
                        <p className="text-stone-500 italic mb-10 text-lg">
                            Book Your Stay now and take that refreshing trip to your mind, body, and soul amidst all this peaceful splendor of Kerala&apos;s rural beauty.
                        </p>

                        <a
                            href="https://wa.me/919447368623"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-[#758A6D] hover:bg-[#5A6B53] text-white font-bold px-8 py-4 rounded-full transition-all hover:scale-105 shadow-xl shadow-[#758A6D]/20"
                        >
                            Book Your Stay
                        </a>
                    </ScrollAnimation>
                </div>
            </section>

            <FloatingCTA />
            <Footer />
        </main>
    );
}
