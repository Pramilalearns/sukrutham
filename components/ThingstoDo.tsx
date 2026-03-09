import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Bento Grid Layout Configuration
const experiences = [
    {
        title: "Farm Activities",
        description: "Try pottery making, join us in the organic garden, or walk our forest trails. Simple, hands-on fun for everyone.",
        image: "/pottery.png",
        link: "/experience/activities",
        // Tall vertical block (Col 1, Row 1-2)
        className: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Local Sightseeing",
        description: "We are close to the best places to visit in Thrissur, including waterfalls, dams, and historic temples.",
        image: "/sightseeing-v2.png",
        link: "/experience/places-to-explore",
        // Wide horizontal block (Col 2-3, Row 1)
        className: "md:col-span-2 md:row-span-1",
    },
    {
        title: "Local Savor (Food)",
        description: "Enjoy home-cooked Kerala meals made with fresh ingredients from our own farm. Real farm-to-table dining.",
        image: "/kerala-food-v2.png",
        link: "/experience/local-savor",
        // Tall vertical block (Col 4, Row 1-2)
        className: "md:col-span-1 md:row-span-2",
    },
    {
        title: "Seasons & Festivals",
        description: "Experience the famous Thrissur Pooram festivals or the beauty of the Kerala monsoon right from the farm.",
        image: "/festival.png",
        link: "/experience/seasons-festivals",
        // Standard block (Col 2, Row 2)
        className: "md:col-span-1 md:row-span-1",
    },
    {
        title: "Ready-Made Itineraries",
        description: "We’ve designed 1, 2, and 3-day plans for you. We do the planning; you do the relaxing.",
        image: "/itinerary.jpg",
        link: "/experience/itineraries",
        // Standard block (Col 3, Row 2)
        className: "md:col-span-1 md:row-span-1",
    }
];

export default function Experience() {
    return (
        <section className="py-12 bg-stone-50" id="experience">
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Experiences</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-4 text-stone-800 leading-tight">
                        Beyond the Farm: <br /> Things to Do and See
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Some truly unique ways to enjoy Kerala, God&apos;s Own Country. From adrenaline rushes to deep relaxation.
                        We help you plan your days so you can just focus on enjoying your trip.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-4">
                    {experiences.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            className={`relative rounded-3xl overflow-hidden group cursor-pointer shadow-sm ${item.className}`}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                quality={95}
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            {/* Gradient Overlay - Darker at bottom for text readability */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

                            <div className="absolute bottom-0 left-0 p-8 w-full flex flex-col justify-end h-full">
                                <div className="mt-auto">
                                    <h3 className="text-2xl font-display font-bold text-white mb-2 leading-tight">{item.title}</h3>
                                    <p className="text-white/90 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {item.description}
                                    </p>

                                    {/* View Details: Yellow Text by default, Glass Button on Hover */}
                                    <div className="relative">
                                        {/* Default State: Yellow Text */}
                                        <span className="inline-flex items-center gap-2 text-sm font-bold text-accent group-hover:opacity-0 transition-opacity duration-300 absolute left-0 bottom-0">
                                            View Details <ArrowRight className="w-4 h-4" />
                                        </span>

                                        {/* Hover State: Glass Button */}
                                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                                            <span className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-sm font-semibold hover:bg-white/30 transition-colors">
                                                View Details <ArrowRight className="w-4 h-4" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <Link
                        href="/experience"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                    >
                        Explore All Experiences
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
