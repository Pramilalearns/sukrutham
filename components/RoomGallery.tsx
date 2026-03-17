"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ScrollAnimation from "@/components/ScrollAnimation";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CATEGORY_MAPPING: Record<string, string> = {
    "4.modern bathrooms": "Modern Bathrooms",
    "modern bathrooms": "Modern Bathrooms",
    "5.guest kitchen": "Guest Kitchen",
    "guest kitchen": "Guest Kitchen",
    "6.dining area": "Dining Area",
    "dining area": "Dining Area",
    "nadumuttam": "Nadumuttam",
    "traditional hall": "Traditional Halls",
    "traditional halls": "Traditional Halls",
    "parking areas": "Parking Areas",
    "parking": "Parking Areas"
};

const categories = [
    "Modern Bathrooms",
    "Guest Kitchen",
    "Dining Area",
    "Nadumuttam",
    "Traditional Halls",
    "Parking Areas"
];

const CATEGORY_DESCRIPTIONS: Record<string, string> = {
    "Modern Bathrooms": "Clean, Refreshing, and Thoughtfully Maintained",
    "Guest Kitchen": "A Simple Space for Warm, Homemade Moments",
    "Dining Area": "Where Meals Turn into Shared Memories",
    "Nadumuttam": "The Heart of the Home, Open to Sky and Light",
    "Traditional Halls": "Relax, Unwind, and Feel at Home",
    "Parking Areas": "Secure, spacious, and conveniently located parking for your vehicles."
};

interface GalleryImage {
    src: string;
    category: string;
    heading: string;
    alt: string;
}

const fallbackImages: GalleryImage[] = [
    { src: "/room-gallery/4.Modern Bathrooms/bathroom-1.jpg", category: "Modern Bathrooms", heading: "Modern Bathrooms", alt: "Modern Bathrooms" },
    { src: "/room-gallery/5.Guest Kitchen/kitchen.jpg", category: "Guest Kitchen", heading: "Guest Kitchen", alt: "Guest Kitchen" },
];

export default function RoomGallery({ initialImages }: { initialImages?: Record<string, string[]> }) {
    const [activeCategory, setActiveCategory] = useState("Modern Bathrooms");
    
    // Process initialImages into the flat galleryImages format
    const galleryImages: GalleryImage[] = initialImages ? Object.entries(initialImages).flatMap(([folder, images]) => {
        const category = CATEGORY_MAPPING[folder.toLowerCase()] || folder;
        if (!categories.includes(category)) return []; // Filter out rooms (paddy, etc.)
        
        return images.map(src => {
            return {
                src,
                category,
                // Per user request: Use tab name as heading for the images, not filename
                heading: category,
                alt: category
            };
        });
    }) : fallbackImages;

    const [activeImageId, setActiveImageId] = useState(galleryImages[0]?.src || "");
    const filmstripRef = useRef<HTMLDivElement>(null);

    const filteredImages = galleryImages.filter(img => img.category === activeCategory);

    // Update active image dynamically when category changes
    useEffect(() => {
        if (filteredImages.length > 0) {
            setActiveImageId(filteredImages[0].src);
        }
    }, [activeCategory, filteredImages.length]);

    // Auto-scroll the filmstrip so the active thumbnail is always strictly in view
    useEffect(() => {
        if (!filmstripRef.current) return;

        const activeThumb = filmstripRef.current.querySelector('[data-active="true"]') as HTMLElement;
        if (activeThumb) {
            const container = filmstripRef.current;

            // Calculate center position for both horizontal and vertical scrolling
            const scrollLeft = activeThumb.offsetLeft - (container.clientWidth / 2) + (activeThumb.clientWidth / 2);
            const scrollTop = activeThumb.offsetTop - (container.clientHeight / 2) + (activeThumb.clientHeight / 2);

            // Check if it's horizontal layout (mobile) or vertical (desktop)
            if (window.innerWidth < 1024) {
                container.scrollTo({ left: scrollLeft, behavior: "smooth" });
            } else {
                container.scrollTo({ top: scrollTop, behavior: "smooth" });
            }
        }
    }, [activeImageId]);

    const activeImage = galleryImages.find(img => img.src === activeImageId) || galleryImages[0];
    const currentIndex = filteredImages.findIndex(img => img.src === activeImageId);

    const handlePrev = () => {
        if (currentIndex > 0) setActiveImageId(filteredImages[currentIndex - 1].src);
        else if (filteredImages.length > 0) setActiveImageId(filteredImages[filteredImages.length - 1].src);
    };

    const handleNext = () => {
        if (currentIndex < filteredImages.length - 1) setActiveImageId(filteredImages[currentIndex + 1].src);
        else if (filteredImages.length > 0) setActiveImageId(filteredImages[0].src);
    };

    return (
        <section className="py-24 bg-white border-t border-[#F0EBE1] overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">

                {/* Header Section */}
                <ScrollAnimation className="text-center max-w-3xl mx-auto mb-12 relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FAF8F5] rounded-full blur-[100px] -z-10 opacity-80"></div>
                    <span className="text-[#A48869] font-bold uppercase tracking-widest text-xs block mb-3">
                        MORE SPACES
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-stone-900 mb-6 tracking-tight">
                        Comfort Extends <br className="md:hidden" />
                        <span className="text-stone-500 italic font-serif">Beyond Your Room</span>
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
                                    "px-4 md:px-6 py-2 md:py-2.5 rounded-2xl text-[13px] md:text-sm font-medium transition-all duration-500 ease-out cursor-pointer",
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
                                    priority={activeImage?.src === img.src}
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
                                    className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95 border border-white/30 cursor-pointer"
                                >
                                    <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>
                            <div className="absolute inset-y-0 right-0 w-24 flex items-center justify-end px-2 md:px-4 z-30 transition-opacity duration-300">
                                <button
                                    onClick={handleNext}
                                    className="w-10 h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full flex items-center justify-center text-white shadow-lg transition-transform hover:scale-110 active:scale-95 border border-white/30 cursor-pointer"
                                >
                                    <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                            </div>

                            {/* Text Metadata Panel */}
                            <div className="absolute bottom-6 md:bottom-12 left-6 md:left-12 z-40 max-w-2xl transform transition-all duration-1000 ease-out translate-y-0 opacity-100">
                                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-black/40 backdrop-blur-sm rounded-full border border-white/10">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                                    <span className="text-amber-200 font-bold uppercase tracking-widest text-[10px] md:text-xs">
                                        {activeImage?.category}
                                    </span>
                                </div>
                                <h3 className="text-white text-3xl md:text-4xl lg:text-5xl font-display font-medium leading-tight drop-shadow-xl tracking-tight mb-2">
                                    {activeImage?.heading}
                                </h3>
                                <p className="text-white/90 text-sm md:text-base max-w-xl font-light leading-relaxed drop-shadow-md hidden sm:block">
                                    {CATEGORY_DESCRIPTIONS[activeImage?.category] || "Experience the subtle elegance and careful design of our crafted spaces."}
                                </p>
                            </div>

                            {/* Slide Counter Float */}
                            <div className="absolute top-6 right-6 md:top-8 md:right-8 z-30 bg-black/40 backdrop-blur-md px-5 py-2 rounded-full text-white text-sm font-semibold border border-white/20 tracking-wider shadow-lg">
                                {currentIndex + 1} <span className="text-white/50 font-normal">/ {filteredImages.length}</span>
                            </div>
                        </div>

                        {/* Scrollable Filmstrip Ribbon */}
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
