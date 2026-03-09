import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Leaf, Map, Utensils, CalendarHeart, Route } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export const metadata = {
    title: "All Experiences | Sukrutham Farmstay",
    description: "Dive deeper into authentic farmstay experiences in Kerala, from farming activities to local sights and seasonal festivals.",
};

const EXPERIENCES = [
    {
        id: "activities",
        title: "In-Farm Activities",
        subtitle: "Reconnect with Nature",
        description: "Step away from the rush of everyday life. At Sukrutham, we invite you to get your hands dirty with organic farming, take peaceful walks through lush plantations, or simply swing in a hammock watching the birds. Our hands-on activities are designed to connect you to the roots of sustainable living and the peaceful rhythms of farm life.",
        href: "/experience/activities",
        ctaText: "Discover Farm Activities",
        image: "/experience/hero-activities.png",
        icon: Leaf,
        highlights: ["Organic Farming", "Rubber & Toddy Tapping", "Village Walks", "Bird Watching"]
    },
    {
        id: "places-to-explore",
        title: "Places to Explore",
        subtitle: "Discover Hidden Thrissur",
        description: "While the farmstay is a sanctuary in itself, the surrounding areas are rich with history, wildlife, and natural wonders. From the majestic Athirappilly waterfalls and the serene Peechi dam to the historic Guruvayoor and Vadakkumnathan temples, we can guide you to some of central Kerala's most iconic and hidden gems.",
        href: "/experience/places-to-explore",
        ctaText: "See Local Sights",
        image: "/places/athirappilly.jpg",
        icon: Map,
        highlights: ["Athirappilly Waterfalls", "Vadakkumnathan Temple", "Peechi Dam", "Chavakkad Beach"]
    },
    {
        id: "local-savor",
        title: "Local Savor (Cuisine)",
        subtitle: "Taste True Kerala",
        description: "Food at Sukrutham isn't just a meal; it's an experience. We serve authentic, traditional Kerala cuisine made from fresh, locally sourced, and farm-grown ingredients. Relish the rich spices, the fresh coconut, and age-old recipes handed down through generations, all prepared with love in our farm kitchen.",
        href: "/experience/local-savor",
        ctaText: "Explore the Cuisine",
        image: "/savor/Kitchen Community.webp",
        icon: Utensils,
        highlights: ["Farm-to-Table Dining", "Traditional Kerala Sadhya", "Dine under Stars", "Locally Sourced Spices", "Cooking Demos"]
    },
    {
        id: "seasons-festivals",
        title: "Seasons & Festivals",
        subtitle: "Celebrate with Us",
        description: "Kerala's culture is deeply intertwined with its seasons and festivals. Whether it's the spectacular Thrissur Pooram, the harvest joys of Onam, or the tranquil beauty of the monsoon rains washing over the green hills, joining us during these vibrant times offers a front-row seat to the cultural heartbeat of the state.",
        href: "/experience/seasons-festivals",
        ctaText: "View the Festive Calendar",
        image: "/season and festivals/Hero.jpg",
        icon: CalendarHeart,
        highlights: ["Thrissur Pooram", "Onam Harvest Festival", "Monsoon Retreats", "Vishu Celebrations"]
    },
    {
        id: "itineraries",
        title: "Curated Itineraries",
        subtitle: "Tailored to Your Time",
        description: "Whether you have just a weekend to spare or an entire week to unwind, we have carefully crafted itineraries to help you make the absolute most of your stay. We balance relaxation on the farm with adventurous outings, ensuring you experience the best of Kerala without ever feeling rushed.",
        href: "/experience/itineraries",
        ctaText: "Plan Your Journey",
        image: "/itinerary.jpg",
        icon: Route,
        // Using fewer highlights to keep layout clean for the last item
        highlights: ["Weekend Getaways", "Week-long Immersions", "Family Outings", "Solo Retreats"]
    },
];

export default function ExperiencesPage() {
    return (
        <main className="min-h-screen bg-stone-50 selection:bg-primary/20 selection:text-primary-dark font-sans">
            <Navbar />

            {/* Immersive Hero */}
            <section className="relative h-[60vh] md:h-[70vh] flex flex-col items-center justify-center overflow-hidden bg-stone-900 border-b-8 border-primary">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/experience/hero-activities.png"
                        alt="Experiences at Sukrutham"
                        fill
                        className="object-cover opacity-50 mix-blend-overlay"
                        priority
                    />
                    {/* Gradient to smooth out the bottom edge and ensure text legibility */}
                    <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl mt-12 md:mt-20">
                    <ScrollAnimation animation="fade-up">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 drop-shadow-lg leading-tight">
                            The Sukrutham <span className="text-accent italic">Journey</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-stone-200 max-w-2xl mx-auto leading-relaxed drop-shadow-md mb-12">
                            It’s not just a stay; it’s an immersive passage into the heart, culture, and nature of authentic Kerala.
                        </p>

                        {/* Metrics Block - Elegant and subtle */}
                        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 pt-4">
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 drop-shadow-lg">15+</div>
                                <div className="text-stone-300 font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em]">In-Farm Activities</div>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2 drop-shadow-lg">10+</div>
                                <div className="text-stone-300 font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em]">Local Sights</div>
                            </div>
                            <div className="w-px h-12 bg-white/20 hidden md:block"></div>
                            <div className="text-center">
                                <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-2 drop-shadow-lg">100%</div>
                                <div className="text-stone-300 font-semibold text-[10px] md:text-xs uppercase tracking-[0.2em]">Authentic Kerala</div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Introductory Text */}
            <section className="pt-20 pb-20 bg-white relative">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <ScrollAnimation animation="fade-up">
                        <Leaf className="w-8 h-8 mx-auto text-primary mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-stone-800 mb-8 leading-tight">
                            More than just a room. <br className="hidden md:block" />
                            An invitation to <span className="text-primary italic">Live</span>.
                        </h2>
                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-medium mb-6">
                            Whether you seek the thrill of exploring ancient temples, the peace of walking barefoot
                            through organic farms, or the joy of savoring food cooked over a wood fire, we have
                            curated distinct paths to help you discover your own perfect rhythm.
                        </p>
                        <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light max-w-3xl mx-auto">
                            Sukrutham farmstay caters to all kinds of travel and stay needs. You can choose to just stay in the farm and be part of the slow living experience, engage with our hands-on in-farm activities, or head out for extended sightseeing across Thrissur. Establish your own pace.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* Alternating Feature Blocks */}
            <section className="bg-stone-50 pb-24 overflow-hidden">
                {EXPERIENCES.map((exp, index) => {
                    const isEven = index % 2 === 0;
                    const Icon = exp.icon;
                    return (
                        <div key={exp.id} className="container mx-auto px-6 max-w-7xl pt-24 md:pt-32">
                            <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                {/* Image Side */}
                                <div className="w-full lg:w-1/2 relative">
                                    <ScrollAnimation animation={isEven ? "fade-right" : "fade-left"}>
                                        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group">
                                            <Image
                                                src={exp.image}
                                                alt={exp.title}
                                                fill
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            {/* Decorative overlay border */}
                                            <div className="absolute inset-4 border-2 border-white/20 rounded-2xl pointer-events-none z-10 transition-colors duration-500 group-hover:border-white/40"></div>
                                        </div>

                                        {/* Decorative shape behind image */}
                                        <div className={`hidden lg:block absolute -z-10 w-full h-full rounded-3xl 
                                            ${isEven ? '-bottom-6 -right-6 bg-primary/10' : '-bottom-6 -left-6 bg-accent/20'}`}
                                        />
                                    </ScrollAnimation>
                                </div>

                                {/* Text Content Side */}
                                <div className="w-full lg:w-1/2 relative z-10 lg:px-8">
                                    <ScrollAnimation animation="fade-up" delay={100}>
                                        <div className="flex items-center gap-4 mb-4">
                                            <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center text-primary shadow-sm border border-stone-200">
                                                <Icon className="w-6 h-6" />
                                            </div>
                                            <span className="text-sm font-bold tracking-widest text-primary uppercase">
                                                {exp.subtitle}
                                            </span>
                                        </div>

                                        <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-800 mb-6 drop-shadow-sm">
                                            {exp.title}
                                        </h2>

                                        <p className="text-lg text-stone-600 mb-8 leading-relaxed font-medium">
                                            {exp.description}
                                        </p>

                                        {/* Highlights List */}
                                        <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                                            {exp.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-stone-700 font-medium">
                                                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                                                    <span>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="flex flex-col sm:flex-row gap-4 items-center">
                                            <Link
                                                href={exp.href}
                                                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-stone-800 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                            >
                                                {exp.ctaText}
                                                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                            </Link>

                                            {/* Booking CTA for this specific section */}
                                            <Link
                                                href="/book"
                                                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full font-semibold text-primary bg-primary/10 hover:bg-primary/20 transition-all text-center"
                                            >
                                                Book Your Stay
                                            </Link>
                                        </div>

                                    </ScrollAnimation>
                                </div>

                            </div>

                            {/* Visual Separator between sections, except for the last one */}
                            {index < EXPERIENCES.length - 1 && (
                                <div className="mt-24 md:mt-32 w-full max-w-3xl mx-auto h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"></div>
                            )}
                        </div>
                    );
                })}
            </section>

            {/* Grand Booking Call to Action */}
            <section className="relative py-24 md:py-32 bg-stone-900 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/my-farm.jpg"
                        alt="Farmstay View"
                        fill
                        className="object-cover opacity-20 mix-blend-luminosity"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10 text-center max-w-3xl">
                    <ScrollAnimation animation="fade-up">
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                            Ready to Craft Your <span className="text-accent italic">Story?</span>
                        </h2>
                        <p className="text-xl text-stone-300 mb-10 leading-relaxed font-medium">
                            Whether you want to climb mountains, cook traditional feasts, or just sit on the verandah with a cup of authentic filter coffee. We are waiting to welcome you to Sukrutham.
                        </p>
                        <Link
                            href="/book"
                            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-white px-10 py-4 lg:py-5 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-primary/30 hover:-translate-y-1 w-full sm:w-auto"
                        >
                            Book Your Farmstay Retreat
                        </Link>
                    </ScrollAnimation>
                </div>
            </section>

            <Footer />
        </main>
    );
}
