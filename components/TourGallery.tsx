"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { ArrowDown } from "lucide-react";

// --- Image Data (Organized by Chapter) ---

// Chapter 1: The Heritage Home (Indoors, Architecture, Verandahs)
const stayImages = [
    { src: "/Interior and Exterior/2.jpg", alt: "Heritage Verandah", className: "h-80" },
    { src: "/Interior and Exterior/3.jpg", alt: "Living Space", className: "h-64" },
    { src: "/Interior and Exterior/6.jpg", alt: "Traditional Architecture", className: "h-72" },
    { src: "/Interior and Exterior/7.jpg", alt: "Heritage Details", className: "h-64" },
    { src: "/Interior and Exterior/9.jpg", alt: "Cozy Interiors", className: "h-80" },
    { src: "/Interior and Exterior/room-bedroom.png", alt: "Heritage Bedroom", className: "h-64" },
    { src: "/Interior and Exterior/room-view-modern.png", alt: "Modern Comfort", className: "h-72" },
    { src: "/Interior and Exterior/s12.jpg", alt: "Classic Architecture", className: "h-64" },
    { src: "/Interior and Exterior/4.jpg", alt: "Farmstay Ambience", className: "h-56" },
    { src: "/Interior and Exterior/8.jpg", alt: "Rustic Charm", className: "h-64" },
    { src: "/Interior and Exterior/11.jpg", alt: "Heritage Balcony", className: "h-72" },
    { src: "/Interior and Exterior/12.jpg", alt: "Wooden Details", className: "h-64" },
    { src: "/Interior and Exterior/475262115.jpg", alt: "Authentic Stay", className: "h-80" },
];

// Chapter 2: Life on the Farm (Farming, Harvest, Animals, Culture)
const farmImages = [
    { src: "/images/farm-stay/farm-stay1.jpg", alt: "Life on the Farm", className: "h-72" },
    { src: "/images/farm-stay/farm-stay3.jpg", alt: "Farm Bounty", className: "h-64" },
    { src: "/images/tour/tour-5.jpg", alt: "Organic Farming", className: "h-80" },
    { src: "/images/gallery/new1.jpg", alt: "Fresh from the Earth", className: "h-64" },
    { src: "/images/gallery/new10.jpeg", alt: "Green Horizons", className: "h-64" },
    { src: "/images/gallery/12.jpg", alt: "Golden Fields", className: "h-72" },
    { src: "/images/misc/pottery.png", alt: "Pottery Workshop", className: "h-64" },
    { src: "/images/farm-stay/farm-stay4.jpg", alt: "Farm Animals", className: "h-64" },
    { src: "/images/farm-stay/farm-stay2.jpg", alt: "Green Pastures", className: "h-64" },
    { src: "/images/gallery/7.jpg", alt: "Local Culture", className: "h-56" },
    { src: "/images/gallery/8.jpg", alt: "Cultural Vibrance", className: "h-72" },
    { src: "/images/gallery/1.jpg", alt: "Farm Vibes", className: "h-64" },
    { src: "/images/gallery/3.jpg", alt: "Village Life", className: "h-64" },
    { src: "/images/tour/tour-6.jpg", alt: "Farm Dining Experience", className: "h-64" },
];

// Chapter 3: Untouched Nature (Outdoors, Paddy, Water, Mist)
const natureImages = [
    { src: "/images/gallery/n1.jpg", alt: "Nature Trails", className: "h-80" },
    { src: "/images/gallery/n3.jpg", alt: "Paddy Fields", className: "h-64" },
    { src: "/images/gallery/new2.jpg", alt: "Green Canopy", className: "h-72" },
    { src: "/images/gallery/s10.jpg", alt: "Lush Gardens", className: "h-64" }, // Moved from Stay
    { src: "/images/tour/tour-10.jpg", alt: "Garden Retreat", className: "h-64" },
    { src: "/images/gallery/11.jpg", alt: "Morning Clarity", className: "h-64" },
    { src: "/images/gallery/new4.jpg", alt: "Nature's Path", className: "h-80" },
    { src: "/images/gallery/new12.jpeg", alt: "Rainy Day Charm", className: "h-64" },
    { src: "/images/gallery/6.jpg", alt: "Serene Waters", className: "h-56" },
    { src: "/images/gallery/23.jpg", alt: "Coastal Vibes", className: "h-72" }, // Moved from Stay
    { src: "/images/gallery/n2.jpg", alt: "Blooming Flora", className: "h-64" },
    { src: "/images/gallery/n4.jpg", alt: "Waterbodies", className: "h-64" },
    { src: "/images/tour/tour-1.jpg", alt: "Evening Ambience", className: "h-64" },
    { src: "/images/gallery/2.jpg", alt: "Nature Walk", className: "h-72" },
    { src: "/images/gallery/4.jpg", alt: "Village Road", className: "h-64" },
    { src: "/images/gallery/5.jpg", alt: "Paddy Field View", className: "h-80" },
    { src: "/images/gallery/new5.jpg", alt: "Garden Bloom", className: "h-64" },
    { src: "/images/gallery/new11.jpeg", alt: "Cloudy Skies", className: "h-56" },
];

interface ImageItem {
    src: string;
    alt: string;
    className?: string;
}

export default function TourGallery({ initialStayImages, initialFarmImages, initialNatureImages }: { 
    initialStayImages?: ImageItem[], 
    initialFarmImages?: ImageItem[],
    initialNatureImages?: ImageItem[]
}) {
    // Height classes to rotate through for dynamic images to maintain masonry look
    const heightClasses = ["h-64", "h-80", "h-72", "h-56"];
    
    // Use dynamic images if provided, otherwise fallback to static stayImages
    const displayStayImages = initialStayImages 
        ? initialStayImages.map((img, idx) => ({
            ...img,
            className: img.className || heightClasses[idx % heightClasses.length]
        }))
        : stayImages;

    const displayFarmImages = initialFarmImages
        ? initialFarmImages.map((img, idx) => ({
            ...img,
            className: img.className || heightClasses[idx % heightClasses.length]
        }))
        : farmImages;

    const displayNatureImages = initialNatureImages
        ? initialNatureImages.map((img, idx) => ({
            ...img,
            className: img.className || heightClasses[idx % heightClasses.length]
        }))
        : natureImages;

    return (
        <div className="bg-stone-50">
 
             {/* Chapter 1: The Heritage Home (Sticky Layout - Left) */}
             <section className="relative py-24 px-6 md:px-12 lg:px-20 border-b border-stone-200">
                 <div className="container mx-auto flex flex-col lg:flex-row gap-16">
                     {/* Sticky Content - Left Side */}
                     <div className="lg:w-1/3 pt-12">
                         <div className="sticky top-32">
                             <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                                 The Interior & Exterior
                             </span>
                             <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-2">
                                 The Soul of Sukrutham Farmstay
                             </h2>
                             <p className="text-primary font-medium italic mb-6">
                                 Where the air feels lighter, and the wood looks lived-in.
                             </p>
                             <p className="text-lg text-stone-600 leading-relaxed mb-8">
                                 We didn&apos;t just build a stay; we curated a home. Take a peek at the rooms where you&apos;ll wake up to birdsong and the cozy nooks that make &quot;doing nothing&quot; feel like an art form. It&apos;s traditional, it&apos;s premium, and it&apos;s waiting for you.
                             </p>
                             <div className="hidden lg:block w-12 h-1 bg-primary mb-8" />
                         </div>
                     </div>
 
                     {/* Scrollable Gallery - Right Side */}
                     <div className="lg:w-2/3">
                         <div className="columns-1 md:columns-2 gap-6 space-y-6">
                             {displayStayImages.map((img, idx) => (
                                 <div key={idx} className={cn("relative rounded-2xl overflow-hidden group break-inside-avoid shadow-sm", img.className)}>
                                     <Image
                                         src={img.src}
                                         alt={img.alt}
                                         fill
                                         className="object-cover transition-transform duration-700 group-hover:scale-110"
                                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                         loading={idx < 4 ? "eager" : "lazy"}
                                         priority={idx < 4}
                                         quality={60}
                                         decoding="async"
                                     />
                                     <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                Around the farm
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-2">
                                Life on the Farm
                            </h2>
                            <p className="text-accent font-medium italic mb-6">
                                Follow the birds to where the harvest begins.
                            </p>
                            <p className="text-lg text-stone-600 leading-relaxed mb-8">
                                Our backyard isn&rsquo;t a lawn&mdash;it&rsquo;s a living, breathing ecosystem. Follow the trail from the lush green paddy fields to our garden, where butterflies lead the way and peacocks occasionally drop by for a visit. These photos capture the raw, unscripted beauty of farm life. Can you smell the fresh earth yet?
                            </p>
                            <div className="hidden lg:block w-12 h-1 bg-accent mb-8" />
                        </div>
                    </div>

                    {/* Scrollable Gallery - Left Side */}
                    <div className="lg:w-2/3">
                        <div className="columns-1 md:columns-2 gap-6 space-y-6">
                            {displayFarmImages.map((img, idx) => (
                                <div key={idx} className={cn("relative rounded-2xl overflow-hidden group break-inside-avoid shadow-sm", img.className)}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading="lazy"
                                        quality={60}
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                                The Neighborhood
                            </span>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 mb-2">
                                Just Beyond the Gate
                            </h2>
                            <p className="text-primary font-medium italic mb-6">
                                The best views are just a short stroll away.
                            </p>
                            <p className="text-lg text-stone-600 leading-relaxed mb-8">
                                The magic of Sukrutham Farmstay doesn&rsquo;t stop at our gate. We&rsquo;re lucky to be surrounded by the quiet rhythm of the nearby lake and the vast, open energy of the dam. Whether you&rsquo;re looking for a peaceful sunset spot or a place to watch the water flow, these landscapes are the perfect backdrop for your offbeat Kerala adventure.
                            </p>
                            <div className="hidden lg:block w-12 h-1 bg-primary mb-8" />
                        </div>
                    </div>

                    {/* Scrollable Gallery - Right Side */}
                    <div className="lg:w-2/3">
                        <div className="columns-1 md:columns-2 gap-6 space-y-6">
                            {displayNatureImages.map((img, idx) => (
                                <div key={idx} className={cn("relative rounded-2xl overflow-hidden group break-inside-avoid shadow-sm", img.className)}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        loading="lazy"
                                        quality={60}
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
                    <p className="text-xl text-stone-600 mb-10 max-w-2xl mx-auto">
                        What you see in these pictures is just a part of it—the rest unfolds when you’re actually here.
                    </p>
                    <a
                        href="/book"
                        className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-10 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap rounded-full font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2 transform hover:-translate-y-1"
                    >
                        Book Your Experience <ArrowDown className="w-4 h-4" />
                    </a>
                </div>
            </section>
        </div>
    );
}
