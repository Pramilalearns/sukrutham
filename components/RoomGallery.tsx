"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
    "Room Interiors",
    "Modern Bathrooms",
    "Guest Kitchen",
    "The Sit-out (Verandah)",
    "Traditional Hall",
    "Nadumuttam",
    "Parking"
];

const galleryImages = [
    // Room Interiors
    { src: "/room-gallery/room-1.jpg", category: "Room Interiors", alt: "Elegant Room Interior" },
    { src: "/room-gallery/room-1a.jpg", category: "Room Interiors", alt: "Cozy Room Details" },
    { src: "/room-gallery/room-1b.jpg", category: "Room Interiors", alt: "Room Seating Area" },
    { src: "/room-gallery/room-2.jpg", category: "Room Interiors", alt: "Spacious Bedroom" },
    { src: "/room-gallery/room-2a.jpg", category: "Room Interiors", alt: "Bedroom Decor" },
    { src: "/room-gallery/room-2b.jpg", category: "Room Interiors", alt: "Relaxing Room Ambience" },
    { src: "/room-gallery/room-2c.jpg", category: "Room Interiors", alt: "Room View" },

    // Modern Bathrooms
    { src: "/room-gallery/bathroom-1.jpg", category: "Modern Bathrooms", alt: "Clean Modern Bathroom" },
    { src: "/room-gallery/bathroom-2.jpg", category: "Modern Bathrooms", alt: "Premium Bathroom Fixtures" },

    // Guest Kitchen
    { src: "/room-gallery/kitchen.jpg", category: "Guest Kitchen", alt: "Fully Equipped Guest Kitchen" },
    { src: "/room-gallery/kitchen-b.jpg", category: "Guest Kitchen", alt: "Kitchen Space" },
    { src: "/room-gallery/dining-area.jpg", category: "Guest Kitchen", alt: "Communal Dining Area" },

    // The Sit-out (Verandah)
    { src: "/room-gallery/sitout-1.jpg", category: "The Sit-out (Verandah)", alt: "Peaceful Verandah" },
    { src: "/room-gallery/sitout-2.jpg", category: "The Sit-out (Verandah)", alt: "Verandah Seating" },
    { src: "/room-gallery/room-sitout-b.jpg", category: "The Sit-out (Verandah)", alt: "Private Room Sit-out" },

    // Traditional Hall
    { src: "/room-gallery/drawing-room.jpg", category: "Traditional Hall", alt: "Traditional Drawing Room" },
    { src: "/room-gallery/drawing-room-b.jpg", category: "Traditional Hall", alt: "Heritage Drawing Room Details" },

    // Nadumuttam
    { src: "/room-gallery/nadumuttam-1b.jpg", category: "Nadumuttam", alt: "Classic Nadumuttam Architecture" },

    // Parking
    { src: "/room-gallery/car-park.jpg", category: "Parking", alt: "Secure Car Parking" },
    { src: "/room-gallery/car-park (1).jpg", category: "Parking", alt: "Ample Parking Space" },
];

export default function RoomGallery() {
    const [activeCategory, setActiveCategory] = useState("Room Interiors");
    const [activeImageId, setActiveImageId] = useState(galleryImages[0].src);
    const filmstripRef = useRef<HTMLDivElement>(null);

    const filteredImages = galleryImages.filter(img => img.category === activeCategory);

    // Update active image dynamically when category changes, smoothly resetting to the first of the new category
    useEffect(() => {
        if (filteredImages.length > 0) {
            setActiveImageId(filteredImages[0].src);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activeCategory]);

    // Auto-scroll the filmstrip so the active thumbnail is always strictly in view
    useEffect(() => {
        if (!filmstripRef.current) return;

        const activeThumb = filmstripRef.current.querySelector('[data-active="true"]') as HTMLElement;
        if (activeThumb) {
            // Use native scrollIntoView for perfectly smooth, native alignment
            // block: 'nearest' ensures the main window doesn't jump, only the scrollable container
            activeThumb.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center'
            });
        }
    }, [activeImageId, filteredImages]);

    const activeImage = galleryImages.find(img => img.src === activeImageId) || galleryImages[0];
    const currentIndex = filteredImages.findIndex(img => img.src === activeImageId);

    const handlePrev = () => {
        if (currentIndex > 0) setActiveImageId(filteredImages[currentIndex - 1].src);
        else setActiveImageId(filteredImages[filteredImages.length - 1].src);
    };

    const handleNext = () => {
        if (currentIndex < filteredImages.length - 1) setActiveImageId(filteredImages[currentIndex + 1].src);
        else setActiveImageId(filteredImages[0].src);
    };

    return (
        <section className="py-24 bg-white border-t border-[#F0EBE1] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">

                {/* Header Section */}
                <ScrollAnimation className="text-center max-w-3xl mx-auto mb-12 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FAF8F5] rounded-full blur-[100px] -z-10 opacity-80"></div>
                    <span className="text-[#A48869] font-bold uppercase tracking-widest text-xs block mb-3">
                        A VISUAL TOUR
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-stone-900 mb-6 tracking-tight">
                        Every Corner <br className="md:hidden" />
                        <span className="text-stone-500 italic font-serif">Tells a Story</span>
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        A deeply immersive look at our crafted spaces and natural luxury.
                    </p>
                </ScrollAnimation>

                {/* Filter Buttons - Floating Dynamic Pill */}
                <ScrollAnimation delay={100} className="flex flex-wrap justify-center gap-2 mb-10 md:mb-16">
                    <div className="flex flex-wrap justify-center p-1.5 md:p-2 bg-[#F8F6F2] backdrop-blur-md rounded-3xl shadow-sm border border-[#EBE5DB]">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={cn(
                                    "px-4 md:px-6 py-2 md:py-2.5 rounded-2xl text-[13px] md:text-sm font-medium transition-all duration-500 ease-out",
                                    activeCategory === cat
                                        ? "bg-white text-stone-900 shadow-[0_4px_15px_-5px_rgba(0,0,0,0.1)] scale-100 border border-stone-100"
                                        : "bg-transparent text-stone-500 hover:text-stone-900 hover:bg-white/50 scale-[0.98] hover:scale-100 border border-transparent"
                                )}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </ScrollAnimation>

                {/* Advanced Cinematic Showcase (Hero + Side Filmstrip) */}
                <ScrollAnimation delay={200} className="w-full relative">
                    <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 lg:h-[550px] xl:h-[600px] items-stretch">
                        {/* Hero Focal Player */}
                        <div className="relative w-full flex-1 aspect-[4/3] sm:aspect-video lg:aspect-auto rounded-[2rem] overflow-hidden shadow-2xl bg-stone-100 group selection-none">

                            {/* Rendering all images absolute for buttery-smooth crossfades without remounts */}
                            {filteredImages.map((img) => (
                                <Image
                                    key={img.src}
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    priority={activeImage.src === img.src}
                                    className={cn(
                                        "object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]",
                                        activeImage?.src === img.src
                                            ? "opacity-100 scale-100 z-10"
                                            : "opacity-0 scale-[1.05] z-0 pointer-events-none"
                                    )}
                                    sizes="(max-width: 1024px) 100vw, 75vw"
                                />
                            ))}

                            {/* Cinematic Gradient Overlays */}
                            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 z-20 pointer-events-none transition-opacity duration-700" />
                            <div className="absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-black/20 to-transparent opacity-50 z-20 pointer-events-none" />

                            {/* Navigation Controls (Permanently Visible) */}
                            <div className="absolute inset-y-0 left-0 w-24 flex items-center justify-start px-2 md:px-4 z-30 transition-opacity duration-300">
                                <button
                                    onClick={handlePrev}
                                    className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95 border border-white/30"
                                >
                                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                            <div className="absolute inset-y-0 right-0 w-24 flex items-center justify-end px-2 md:px-4 z-30 transition-opacity duration-300">
                                <button
                                    onClick={handleNext}
                                    className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95 border border-white/30"
                                >
                                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>

                            {/* Text Metadata Panel - Removed custom animate to rely purely on standard tailwind transition */}
                            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 z-40 max-w-2xl transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
                                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                                    <span className="text-amber-200 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                        {activeImage?.category}
                                    </span>
                                </div>
                                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight drop-shadow-xl tracking-tight mb-2">
                                    {activeImage?.alt}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base max-w-xl font-light leading-relaxed drop-shadow-md hidden sm:block">
                                    Experience the subtle elegance and careful design of our {activeImage?.category.toLowerCase()}. Every space is crafted to harmonize heritage aesthetics with serene comfort.
                                </p>
                            </div>

                            {/* Slide Counter Float */}
                            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-30 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm font-semibold border border-white/20 tracking-wider shadow-lg">
                                {currentIndex + 1} <span className="text-white/50 font-normal">/ {filteredImages.length}</span>
                            </div>
                        </div>

                        {/* Scrollable Filmstrip Ribbon (Vertical on Desktop, Horizontal on Mobile) */}
                        <style dangerouslySetInnerHTML={{
                            __html: `
                            .hide-scroll::-webkit-scrollbar { display: none; }
                            .hide-scroll { -ms-overflow-style: none; scrollbar-width: none; }
                        `}} />

                        <div
                            ref={filmstripRef}
                            className="flex lg:flex-col overflow-x-auto lg:overflow-y-auto overflow-x-hidden gap-3 md:gap-4 pb-4 lg:pb-0 lg:py-2 hide-scroll snap-x lg:snap-y snap-mandatory px-2 lg:w-[140px] xl:w-[160px] flex-shrink-0 items-center lg:items-end relative"
                        >
                            {filteredImages.map((img) => {
                                const isActive = activeImage?.src === img.src;
                                return (
                                    <button
                                        key={`thumb-${img.src}`}
                                        onClick={() => setActiveImageId(img.src)}
                                        data-active={isActive}
                                        className={cn(
                                            "relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 flex-shrink-0 rounded-2xl overflow-hidden transition-all duration-500 snap-center outline-none origin-center",
                                            isActive
                                                ? "ring-[3px] ring-stone-900 ring-offset-2 scale-100 opacity-100 shadow-lg"
                                                : "opacity-50 hover:opacity-100 hover:scale[1.05] cursor-pointer"
                                        )}
                                    >
                                        {/* Mute overlay for unselected items */}
                                        <div className={cn("absolute inset-0 bg-stone-900/40 mix-blend-multiply z-10 transition-opacity", isActive ? "opacity-0" : "opacity-100")}></div>
                                        <Image
                                            src={img.src}
                                            alt={`Thumbnail for ${img.alt}`}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 1024px) 150px, 300px"
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
