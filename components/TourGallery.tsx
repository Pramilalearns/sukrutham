"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

// --- Image Data (Organized by Chapter) ---

// Chapter 1: The Heritage Home (Indoors, Architecture, Verandahs)
const stayImages = [
    { src: "/s1.jpg", alt: "Heritage Interiors", className: "h-64" },
    { src: "/s2.jpg", alt: "Cozy Corners", className: "h-80" },
    { src: "/s9.jpg", alt: "Heritage Room", className: "h-64" },
    { src: "/s4.jpg", alt: "Verandah Views", className: "h-72" },
    { src: "/s5.jpg", alt: "Rustic Bedroom", className: "h-64" },
    { src: "/tour-2.jpg", alt: "Traditional Verandah", className: "h-80" },
    { src: "/tour-7.jpg", alt: "Living Space", className: "h-64" },
    { src: "/s6.jpg", alt: "Wooden Ceilings", className: "h-64" },
    { src: "/s3.jpg", alt: "Traditional Architecture", className: "h-56" },
    { src: "/s12.jpg", alt: "Heritage Architecture", className: "h-64" },
    { src: "/s11.jpg", alt: "Intricate Details", className: "h-56" },
    { src: "/tour-9.jpg", alt: "Dining Hall", className: "h-64" },
    { src: "/tour-8.jpg", alt: "Peaceful Sit-out", className: "h-72" },
    { src: "/s7.jpg", alt: "Verandah Seating", className: "h-64" },
    { src: "/s8.jpg", alt: "Traditional Decor", className: "h-56" },
    { src: "/20.jpg", alt: "Guest Accommodation", className: "h-80" },
    { src: "/21.jpg", alt: "Interior Ambience", className: "h-64" },
];

// Chapter 2: Life on the Farm (Farming, Harvest, Animals, Culture)
const farmImages = [
    { src: "/farm-stay1.jpg", alt: "Life on the Farm", className: "h-72" },
    { src: "/farm-stay3.jpg", alt: "Farm Bounty", className: "h-64" },
    { src: "/tour-5.jpg", alt: "Organic Farming", className: "h-80" },
    { src: "/new1.jpg", alt: "Fresh from the Earth", className: "h-64" },
    { src: "/new10.jpeg", alt: "Green Horizons", className: "h-64" },
    { src: "/12.jpg", alt: "Golden Fields", className: "h-72" },
    { src: "/pottery.png", alt: "Pottery Workshop", className: "h-64" },
    { src: "/farm-stay4.jpg", alt: "Farm Animals", className: "h-64" },
    { src: "/farm-stay2.jpg", alt: "Green Pastures", className: "h-64" },
    { src: "/7.jpg", alt: "Local Culture", className: "h-56" },
    { src: "/8.jpg", alt: "Cultural Vibrance", className: "h-72" },
    { src: "/1.jpg", alt: "Farm Vibes", className: "h-64" },
    { src: "/3.jpg", alt: "Village Life", className: "h-64" },
    { src: "/tour-6.jpg", alt: "Farm Dining Experience", className: "h-64" },
];

// Chapter 3: Untouched Nature (Outdoors, Paddy, Water, Mist)
const natureImages = [
    { src: "/n1.jpg", alt: "Nature Trails", className: "h-80" },
    { src: "/n3.jpg", alt: "Paddy Fields", className: "h-64" },
    { src: "/new2.jpg", alt: "Green Canopy", className: "h-72" },
    { src: "/s10.jpg", alt: "Lush Gardens", className: "h-64" }, // Moved from Stay
    { src: "/tour-10.jpg", alt: "Garden Retreat", className: "h-64" },
    { src: "/11.jpg", alt: "Morning Clarity", className: "h-64" },
    { src: "/new4.jpg", alt: "Nature's Path", className: "h-80" },
    { src: "/new12.jpeg", alt: "Rainy Day Charm", className: "h-64" },
    { src: "/6.jpg", alt: "Serene Waters", className: "h-56" },
    { src: "/23.jpg", alt: "Coastal Vibes", className: "h-72" }, // Moved from Stay
    { src: "/n2.jpg", alt: "Blooming Flora", className: "h-64" },
    { src: "/n4.jpg", alt: "Waterbodies", className: "h-64" },
    { src: "/tour-1.jpg", alt: "Evening Ambience", className: "h-64" },
    { src: "/2.jpg", alt: "Nature Walk", className: "h-72" },
    { src: "/4.jpg", alt: "Village Road", className: "h-64" },
    { src: "/5.jpg", alt: "Paddy Field View", className: "h-80" },
    { src: "/new5.jpg", alt: "Garden Bloom", className: "h-64" },
    { src: "/new11.jpeg", alt: "Cloudy Skies", className: "h-56" },
];

export default function TourGallery() {
    return (
        <div className="bg-stone-50">

            {/* Chapter 1: The Heritage Home (Sticky Layout - Left) */}
            <section className="relative py-24 px-6 md:px-12 lg:px-20 border-b border-stone-200">
                <div className="container mx-auto flex flex-col lg:flex-row gap-16">
                    {/* Sticky Content - Left Side */}
                    <div className="lg:w-1/3 pt-12">
                        <div className="sticky top-32">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                                Chapter I
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                                The Heritage Home
                            </h2>
                            <p className="text-lg text-stone-600 leading-relaxed mb-8">
                                Step into a home that breathes history. Built with traditional Kerala architecture, every wooden pillar and terracotta tile tells a story of the past, while offering the comfort of the present.
                            </p>
                            <div className="hidden lg:block w-12 h-1 bg-primary mb-8" />
                        </div>
                    </div>

                    {/* Scrollable Gallery - Right Side */}
                    <div className="lg:w-2/3">
                        <div className="columns-1 md:columns-2 gap-6 space-y-6">
                            {stayImages.map((img, idx) => (
                                <div key={idx} className={cn("relative rounded-2xl overflow-hidden group break-inside-avoid shadow-sm", img.className)}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 90vw, 33vw"
                                        loading="lazy"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                            {img.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 2: Farm Life (Sticky Layout - Right) */}
            <section className="relative py-24 px-6 md:px-12 lg:px-20 border-b border-stone-200 bg-white">
                <div className="container mx-auto flex flex-col lg:flex-row-reverse gap-16">
                    {/* Sticky Content - Right Side */}
                    <div className="lg:w-1/3 pt-12">
                        <div className="sticky top-32">
                            <span className="text-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
                                Chapter II
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                                Life on the Farm
                            </h2>
                            <p className="text-lg text-stone-600 leading-relaxed mb-8">
                                Walk through our organic fields, meet our farm animals, and witness the journey of food from soil to table. It's a connection to the earth that you can feel.
                            </p>
                            <div className="hidden lg:block w-12 h-1 bg-accent mb-8" />
                        </div>
                    </div>

                    {/* Scrollable Gallery - Left Side */}
                    <div className="lg:w-2/3">
                        <div className="columns-1 md:columns-2 gap-6 space-y-6">
                            {farmImages.map((img, idx) => (
                                <div key={idx} className={cn("relative rounded-2xl overflow-hidden group break-inside-avoid shadow-sm", img.className)}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 90vw, 33vw"
                                        loading="lazy"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                            {img.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Chapter 3: Nature (Sticky Layout - Left) */}
            <section className="relative py-24 px-6 md:px-12 lg:px-20 border-b border-stone-200 bg-stone-50">
                <div className="container mx-auto flex flex-col lg:flex-row gap-16">
                    {/* Sticky Content - Left Side */}
                    <div className="lg:w-1/3 pt-12">
                        <div className="sticky top-32">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                                Chapter III
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                                Untouched Nature
                            </h2>
                            <p className="text-lg text-stone-600 leading-relaxed mb-8">
                                The sound of the wind, the rustle of leaves, and the song of birds. Nature here isn't just a view; it's a feeling that stays with you.
                            </p>
                            <div className="hidden lg:block w-12 h-1 bg-primary mb-8" />
                        </div>
                    </div>

                    {/* Scrollable Gallery - Right Side */}
                    <div className="lg:w-2/3">
                        <div className="columns-1 md:columns-2 gap-6 space-y-6">
                            {natureImages.map((img, idx) => (
                                <div key={idx} className={cn("relative rounded-2xl overflow-hidden group break-inside-avoid shadow-sm", img.className)}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 90vw, 33vw"
                                        loading="lazy"
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                        <p className="text-white font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                            {img.alt}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Finale: Call to Action */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423985167-d86b978dd6f8?auto=format&fit=crop&q=80')] opacity-5 bg-cover bg-center mix-blend-multiply"></div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-900 mb-6">
                        Ready to see this with your own eyes?
                    </h2>
                    <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto font-light">
                        Every picture tells a story, but the real experience is something else entirely.
                    </p>
                    <a
                        href="#book"
                        className="bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 transform hover:-translate-y-1"
                    >
                        Book Your Experience <ArrowDown className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
