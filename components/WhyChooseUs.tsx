"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { HeartHandshake, Mountain, Coffee, Leaf, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const reasons = [
    {
        id: "authentic",
        icon: HeartHandshake,
        title: "Authentic Hospitality",
        description: "Experience warmth and genuine care. We treat every guest as family, ensuring you feel entirely at home from the moment you arrive.",
        image: "/why-us/image-1.jpg"
    },
    {
        id: "idyllic",
        icon: Mountain,
        title: "Idyllic Setting",
        description: "Wake up to breathtaking views of lush paddy fields, towering coconut palms, and the serene calls of native birds in our peaceful sanctuary.",
        image: "/why-us/image-2.jpg"
    },
    {
        id: "relax",
        icon: Coffee,
        title: "Relax & Enjoy",
        description: "Unwind effortlessly with incredible onsite amenities and highly personalized service designed to provide a completely hassle-free stay.",
        image: "/why-us/image-3.jpg"
    },
    {
        id: "sustainable",
        icon: Leaf,
        title: "Sustainable Tourism",
        description: "We are deeply committed to responsible tourism. By staying with us, you actively support practices that preserve Kerala's rich heritage.",
        image: "/why-us/image-4.jpg"
    },
    {
        id: "memorable",
        icon: Sparkles,
        title: "Memorable Experiences",
        description: "Discover a treasure trove of culture, tradition, and vivid natural beauty that will leave a powerful, lasting impression on your soul.",
        image: "/why-us/image-5.jpg"
    }
];

export default function WhyChooseUs() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    // Basic mobile detection to switch interaction modes if needed
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section className="py-20 md:py-24 bg-white relative" id="why-us">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Header */}
                <div className="max-w-3xl mb-10 lg:mb-12">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                        Why Choose Us
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 leading-tight tracking-tight">
                        A Sanctuary for the Soul.
                    </h2>
                    <p className="mt-6 text-lg md:text-xl text-stone-500 leading-relaxed font-light max-w-2xl">
                        Sukrutham Farmstay is more than just a place to stay; it&apos;s an emotion. Whether you seek solitude, adventure, or culture, we offer the perfect blend.
                    </p>
                </div>

                {/* Modern Interactive Layout - Desktop vs Mobile handled via flex/grid */}
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 relative">

                    {/* Left Column: Interactive List */}
                    <div className="w-full lg:w-5/12 flex flex-col justify-center relative z-20">
                        <div className="space-y-2 md:space-y-4">
                            {reasons.map((reason, index) => {
                                const Icon = reason.icon;
                                const isActive = activeIndex === index;

                                return (
                                    <div
                                        key={reason.id}
                                        className="group cursor-pointer outline-none"
                                        onMouseEnter={() => !isMobile && setActiveIndex(index)}
                                        onClick={() => setActiveIndex(index)}
                                        // For accessibility
                                        tabIndex={0}
                                        role="button"
                                        aria-pressed={isActive}
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter' || e.key === ' ') {
                                                e.preventDefault();
                                                setActiveIndex(index);
                                            }
                                        }}
                                    >
                                        <div className={cn(
                                            "p-5 md:p-6 rounded-2xl transition-all duration-300 ease-out border relative overflow-hidden",
                                            isActive
                                                ? "bg-stone-50 border-stone-200/60 shadow-sm"
                                                : "bg-transparent border-transparent hover:bg-stone-50/40"
                                        )}>
                                            {/* Active indicator line */}
                                            <div className={cn(
                                                "absolute left-0 top-0 bottom-0 w-1 bg-primary transition-transform duration-300 origin-top",
                                                isActive ? "scale-y-100" : "scale-y-0"
                                            )} />

                                            <div className="flex items-start gap-4">
                                                <div className={cn(
                                                    "shrink-0 mt-1 transition-colors duration-500",
                                                    isActive ? "text-primary" : "text-stone-300 group-hover:text-stone-400"
                                                )}>
                                                    <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <h3 className={cn(
                                                        "text-xl font-bold mb-2 transition-colors duration-500",
                                                        isActive ? "text-stone-900" : "text-stone-400 group-hover:text-stone-600"
                                                    )}>
                                                        {reason.title}
                                                    </h3>
                                                    {/* Description accordion */}
                                                    <div className={cn(
                                                        "grid transition-all duration-500 ease-in-out",
                                                        isActive ? "grid-rows-[1fr] opacity-100 mt-2" : "grid-rows-[0fr] opacity-0"
                                                    )}>
                                                        <div className="overflow-hidden">
                                                            <p className="text-base text-stone-600 leading-relaxed">
                                                                {reason.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Mobile-only inline image that appears when active */}
                                            <div className={cn(
                                                "lg:hidden overflow-hidden transition-all duration-700 ease-in-out rounded-2xl",
                                                isActive ? "max-h-[300px] mt-6 opacity-100" : "max-h-0 opacity-0"
                                            )}>
                                                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-stone-100">
                                                    <Image
                                                        src={reason.image}
                                                        alt={reason.title}
                                                        fill
                                                        sizes="(max-width: 1024px) 100vw, 0vw"
                                                        unoptimized
                                                        className="object-cover"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Call to Action */}
                        <div className="mt-10 md:mt-12">
                            <a
                                href="/book"
                                className="inline-flex items-center justify-center bg-stone-900 hover:bg-stone-800 text-white text-base md:text-lg font-semibold px-8 py-3.5 md:px-10 md:py-4 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
                            >
                                Book Your Stay
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Sticky Image Canvas (Desktop Only) */}
                    <div className="hidden lg:block w-full lg:w-7/12 relative min-h-[600px]">
                        {/* Modern Frame Design: Asymmetrical rounded corners, slight rotation, off-center drop drop-shadow */}
                        <div className="sticky top-32 w-full aspect-[4/3] max-h-[650px] relative">
                            {/* Decorative backing frame */}
                            <div className="absolute inset-0 border border-stone-200 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl translate-x-4 translate-y-4"></div>

                            {/* Main image container */}
                            <div className="absolute inset-0 rounded-tr-[4rem] rounded-bl-[4rem] rounded-tl-xl rounded-br-xl overflow-hidden shadow-2xl bg-stone-100 border border-white z-10">
                                {reasons.map((reason, index) => (
                                    <div
                                        key={`img-${reason.id}`}
                                        className={cn(
                                            "absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out",
                                            activeIndex === index
                                                ? "opacity-100 scale-100 z-10"
                                                : "opacity-0 scale-[1.03] z-0 pointer-events-none"
                                        )}
                                    >
                                        <Image
                                            src={reason.image}
                                            alt={reason.title}
                                            fill
                                            unoptimized
                                            priority={index === 0}
                                            className="object-cover"
                                            sizes="(max-width: 1280px) 60vw, 50vw"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/10 to-transparent mix-blend-multiply transition-opacity duration-1000"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
