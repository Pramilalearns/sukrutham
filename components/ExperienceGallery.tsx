"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

const galleryImages = [
    {
        src: "/gallery-1.jpg",
        alt: "Sukrutham Farm Life",
        title: "Life on the Farm",
        description: "Experience the rhythm of daily life amidst nature's abundance.",
        className: "bg-stone-100"
    },
    {
        src: "/gallery-2.jpg",
        alt: "Verdant Landscapes",
        title: "Nature's Canvas",
        description: "Wake up to breathtaking views of lush greenery and misty hills.",
        className: "bg-stone-200"
    },
    {
        src: "/gallery-3.jpg",
        alt: "Harvest Season",
        title: "The Harvest",
        description: "Participate in the joy of reaping what we sow in our organic fields.",
        className: "bg-emerald-100"
    },
    {
        src: "/gallery-4.jpg",
        alt: "Local Interactions",
        title: "Community Spirit",
        description: "Connect with the warm and welcoming local community.",
        className: "bg-orange-100"
    },
    {
        src: "/gallery-5.jpg",
        alt: "Traditional Farming",
        title: "Rooted in Tradition",
        description: "Witness age-old farming techniques preserved with care.",
        className: "bg-yellow-100"
    },
    {
        src: "/gallery-6.jpg",
        alt: "Peaceful Momements",
        title: "Serenity Now",
        description: "Find your inner peace in the quiet corners of the farmstay.",
        className: "bg-blue-100"
    },
    {
        src: "/gallery-7.jpg",
        alt: "Evening Walks",
        title: "Golden Hours",
        description: "Stroll through the fields as the sun sets, painting the sky in gold.",
        className: "bg-red-100"
    },
];

export default function ExperienceGallery() {
    return (
        <section className="py-24 bg-stone-50" id="gallery">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Left Column - Sticky Heading */}
                    <div className="lg:w-1/3 flex flex-col justify-start lg:h-[calc(100vh-100px)] lg:sticky lg:top-32">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4">
                            The Essence
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 leading-[1.1]">
                            When we say <span className="italic text-accent">Sukrutham Experience</span>, this is what we mean :)
                        </h2>
                        <p className="mt-6 text-lg text-stone-600 leading-relaxed">
                            Every corner tells a story, every meal is a memory, and every moment is crafted for your peace of mind. Scroll to unfold the experience.
                        </p>
                    </div>

                    {/* Right Column - Sticky Card Stack */}
                    <div className="lg:w-2/3 flex flex-col gap-12 pb-24">
                        {galleryImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="sticky top-24 md:top-32 flex flex-col rounded-3xl overflow-hidden shadow-xl border border-white/50 transition-all duration-500"
                                style={{
                                    // Stacking effect: each card is slightly lower and rotated
                                    // We create 'space' by having a large surrounding container, but here we use sticky to stack them
                                    // To make them stack properly, the container needs height. 
                                    // Actually, a simpler 'stack' visual for this request with sticky:
                                    // Just sticky top. 
                                    top: `${120 + (idx * 20)}px`,
                                    zIndex: idx + 1,
                                    // Random slight rotation for 'scattered' stack feel
                                    transform: `rotate(${idx % 2 === 0 ? 1 : -1}deg)`
                                }}
                            >
                                <div className={cn("relative h-[450px] md:h-[550px] w-full", img.className)}>
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
                                    />
                                    {/* Text Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                                        <h3 className="text-2xl md:text-4xl font-display font-bold text-white mb-2 transform translate-y-0 transition-transform">{img.title}</h3>
                                        <p className="text-white/90 text-lg max-w-xl">{img.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
