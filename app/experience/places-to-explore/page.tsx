"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Navigation, Map, Info, Car, Sun, CheckCircle2, Route } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// We use an extended data structure to handle the overview vs detailed view
const allPlaces = [
    {
        id: "zoo",
        title: "Newly Inaugurated Thrissur Zoological Park (Puthoor Zoo)",
        shortDesc: "Kerala’s largest and most modern zoological park.",
        description: "Kerala’s largest and most modern zoological park spread across 300+ acres.",
        highlights: [
            "Natural forest-style habitats",
            "Walkthrough aviaries, safari zones",
            "Butterfly park, reptile house, and large enclosures",
            "Perfect for families, kids, and nature photographers"
        ],
        distance: "20 kms",
        distValue: 20,
        time: "35 mins",
        area: "Puthoor",
        image: "/places/zoo.jpg"
    },
    {
        id: "vattayi",
        title: "Vattayi Waterfalls – Hidden Monsoon Gem",
        shortDesc: "A calm, hidden monsoon gem.",
        description: "A calm and natural waterfall without the crowds near Thrissur that’s gaining popularity for its soothing ambience and lush monsoon greenery.",
        highlights: [
            "Gentle flowing waterfall",
            "Shallow stream ideal for foot dipping",
            "Surrounded by dense green cover",
            "Great spot for peaceful photos & short breaks"
        ],
        distance: "2 kms",
        distValue: 2,
        time: "5 mins",
        area: "Near Sukrutham",
        image: "/places/vattayi.jpg"
    },
    {
        id: "cheppara",
        title: "Cheppara Rock Garden (Trending Sunrise Spot)",
        shortDesc: "Trending sunrise spot with valley views.",
        description: "Monolithic rock with valley views.",
        highlights: [
            "Rising popularity on Instagram",
            "Spectacular sunrise/sunset",
            "Ideal for drone shots, short hikes, and monsoon views",
            "Family-friendly viewpoint"
        ],
        distance: "4 kms",
        distValue: 4,
        time: "15 mins",
        area: "Near Sukrutham",
        image: "/places/cheppara.jpg"
    },
    {
        id: "peechi",
        title: "Peechi Wildlife Sanctuary – Monsoon Trails",
        shortDesc: "Monsoon trails, dam views, and lake boating.",
        description: "Forest walks, dam views, lake boating.",
        highlights: [
            "Evergreen forest trails",
            "Birdwatching hotspot",
            "Serene, uncrowded boating experiences",
            "Cooling monsoon ambience"
        ],
        distance: "13 kms",
        distValue: 13,
        time: "45 mins",
        area: "Peechi",
        image: "/places/peechi.jpg"
    },
    {
        id: "kalamandalam",
        title: "Kerala Kalamandalam – Cultural Immersion Experience",
        shortDesc: "Living museum of Kerala arts.",
        description: "Living museum of Kerala arts.",
        highlights: [
            "Learn Kathakali, Mohiniyattam, Koodiyattam",
            "Watch premium cultural performance",
            "Campus tours with artists",
            "Great for culture-seeking travellers"
        ],
        distance: "14 kms",
        distValue: 14,
        time: "33 mins",
        area: "Cheruthuruthy",
        image: "/places/kalamandalam.jpg"
    },
    {
        id: "vadakkumnathan",
        title: "Vadakkumnathan Temple - UNESCO-recognized cultural site",
        shortDesc: "UNESCO-recognized cultural site.",
        description: "UNESCO-recognized temple with new heritage museum and galleries.",
        highlights: [
            "Updated temple museum & Pooram galleries",
            "Thrissur’s new heritage walkway circuits",
            "Ancient architecture"
        ],
        distance: "15 kms",
        distValue: 15,
        time: "25 mins",
        area: "Thrissur City",
        image: "/places/vadakkumnathan.jpg"
    },
    {
        id: "guruvayoor",
        title: "Guruvayoor Temple – The Divine Abode of Lord Krishna",
        shortDesc: "The Divine Abode of Lord Krishna.",
        description: "One of Kerala’s most sacred and celebrated temples, Guruvayur is often called the Dwarka of the South. It’s a spiritual haven where devotees experience devotion, culture, and tradition at their purest.",
        highlights: [
            "Ancient temple dedicated to Lord Krishna",
            "Daily rituals and vibrant cultural ceremonies",
            "Guruvayur Elephant Sanctuary nearby",
            "Famous for its traditional architecture and divine ambiance",
            "Major festivals like Guruvayur Ekadasi attract thousands of devotees"
        ],
        distance: "26 kms",
        distValue: 26,
        time: "1 hr",
        area: "Guruvayur",
        image: "/places/guruvayoor.jpg"
    },
    {
        id: "ilanjippara",
        title: "Ilanjippara + Kollengode Waterfalls (Emerging Local Gems)",
        shortDesc: "Emerging local gems and untouched waterfalls.",
        description: "Untouched waterfalls, hidden in village routes. These twin waterfalls are still undiscovered by many travelers, offering the charm of raw, untouched beauty. Just a short drive from Sukrutham, this is where you can listen to the rhythm of nature and feel truly refreshed.",
        highlights: [
            "Not crowded",
            "Perfect offbeat monsoon trekking",
            "Beautiful forest cover"
        ],
        distance: "30 kms",
        distValue: 30,
        time: "1 hr",
        area: "Village Route",
        image: "/places/ilanjippara.jpg"
    },
    {
        id: "sunset-cruise",
        title: "Sunset Boat Cruise – Tranquil Backwater Experience",
        shortDesc: "Tranquil backwater evening experience.",
        description: "Unwind with a peaceful evening boat cruise through Kerala’s scenic backwaters near Thrissur. As the sun sets over lush green landscapes, the calm waters mirror the golden sky, creating a truly magical experience.",
        highlights: [
            "Mesmerizing sunset views over serene backwaters",
            "Traditional Kerala houseboats and motorboats available",
            "Perfect for photography and relaxation",
            "Watch local life along the riverbanks and paddy fields",
            "Ideal romantic or family evening experience"
        ],
        distance: "35 kms",
        distValue: 35,
        time: "1 hr",
        area: "Backwaters",
        image: "/places/sunset-cruise.jpg"
    },
    {
        id: "conolly",
        title: "Conolly Cruises – Boating & Kayaking Club",
        shortDesc: "Boating & Kayaking Club.",
        description: "Experience adventure and tranquility together at Conolly Cruises, one of Thrissur’s most scenic boating and kayaking destinations. Located near the backwaters, it’s perfect for both thrill-seekers and peace lovers.",
        highlights: [
            "Enjoy boating, kayaking, and pedal boating on calm waters",
            "Picturesque views of lush greenery and paddy fields",
            "Ideal for sunrise or sunset rides",
            "Safe and guided experiences for beginners",
            "Great spot for family outings and nature photography"
        ],
        distance: "35 kms",
        distValue: 35,
        time: "1 hr",
        area: "Backwaters",
        image: "/places/conolly.jpg"
    },
    {
        id: "chavakkad",
        title: "Chavakkad Beach & Snehatheeram",
        shortDesc: "Family-friendly coastal sunset spots.",
        description: "Family-friendly coastal sunset spots.",
        highlights: [
            "Renovated parks",
            "Calm beach evenings",
            "Sunset photography"
        ],
        distance: "40 kms",
        distValue: 40,
        time: "1 hr",
        area: "Coast",
        image: "/places/chavakkad.jpg"
    },
    {
        id: "chimmony",
        title: "Chimmony Trekking – Wildlife & Forest Trails",
        shortDesc: "Wildlife & Forest Trails.",
        description: "A serene trekking spot inside the Chimmony Wildlife Sanctuary, ideal for nature lovers and beginners.",
        highlights: [
            "Guided forest trails",
            "Chance to spot birds, butterflies & wildlife",
            "Calm reservoir viewpoints",
            "Misty monsoon pathways",
            "Refreshing, beginner-friendly experience",
            "A perfect half-day adventure in the wild"
        ],
        distance: "48 kms",
        distValue: 48,
        time: "1.5 hrs",
        area: "Wildlife Sanctuary",
        image: "/places/chimmony.jpg"
    },
    {
        id: "village-drives",
        title: "Village Drive Routes",
        shortDesc: "Scenic rural routes and Instagram hotspots.",
        description: "Thanks to reels & drone videos, several scenic rural routes near Thrissur have become Instagram hotspots.",
        highlights: [
            "Poyya village drive",
            "Poomala slopes",
            "Enamavu lakeside",
            "Pullu paddy fields"
        ],
        distance: "51 kms",
        distValue: 51,
        time: "1.5 hrs",
        area: "Poyya",
        image: "/places/village-drives.jpg"
    },
    {
        id: "athirappilly",
        title: "Athirappilly & Vazhachal Waterfalls – At Peak Flow",
        shortDesc: "Kerala’s Niagara during monsoon.",
        description: "Kerala’s Niagara during monsoon.",
        highlights: [
            "India’s most Iconic waterfalls",
            "Monsoon rush is at its highest (June–Sept)",
            "Shooting location for major films",
            "Perfect day trip for tourists"
        ],
        distance: "67 kms",
        distValue: 67,
        time: "2 hrs",
        area: "Chalakudy",
        image: "/places/athirappilly.jpg"
    }
];

const timelineData = [
    { label: "Within 5 KM", limit: 5 },
    { label: "Within 15 KM", limit: 15 },
    { label: "Within 30 KM", limit: 30 },
    { label: "Within 50 KM", limit: 50 },
    { label: "Within 70 KM", limit: 70 },
];

export default function PlacesToExplorePage() {
    const [hoveredRadius, setHoveredRadius] = useState<number | null>(null);
    const [popoverDirection, setPopoverDirection] = useState<'top' | 'bottom'>('bottom');
    const heroRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const rect = heroRef.current.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            heroRef.current.style.setProperty('--mouse-x', `${x}px`);
            heroRef.current.style.setProperty('--mouse-y', `${y}px`);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    // Filter places based on radius
    const getPlacesForRadius = (limit: number) => {
        const currentIndex = timelineData.findIndex(t => t.limit === limit);
        const prevLimit = currentIndex > 0 ? timelineData[currentIndex - 1].limit : 0;
        return allPlaces.filter(p => p.distValue > prevLimit && p.distValue <= limit);
    };

    const activePlacesCount = hoveredRadius !== null ? getPlacesForRadius(hoveredRadius).length : 0;
    const spacerHeight = hoveredRadius === null ? 0 : (activePlacesCount === 0 ? 120 : 100 + activePlacesCount * 65);


    return (
        <main className="min-h-screen bg-[#FDFCF8] font-sans selection:bg-primary/20">
            <Navbar variant="light" />

            {/* Hero Section */}
            <section
                ref={heroRef}
                className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden group"
            >
                {/* Interactive Mouse Hover Glow */}
                <div
                    className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none"
                    style={{
                        background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(210, 250, 230, 0.45), transparent 60%)`
                    }}
                />

                {/* Animated Ambient Orbs */}
                <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] bg-emerald-100/50 rounded-full blur-[80px] animate-pulse pointer-events-none mix-blend-multiply flex-shrink-0" />
                <div className="absolute -bottom-[20%] left-[5%] w-[400px] h-[400px] bg-amber-50/60 rounded-full blur-[100px] animate-pulse pointer-events-none mix-blend-multiply flex-shrink-0" style={{ animationDelay: '1.5s', animationDuration: '4s' }} />
                <div className="absolute top-[40%] left-[30%] w-[250px] h-[250px] bg-blue-50/40 rounded-full blur-[90px] animate-pulse pointer-events-none mix-blend-multiply flex-shrink-0" style={{ animationDelay: '3s', animationDuration: '6s' }} />

                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                        {/* Text Content */}
                        <div className="lg:w-[40%] text-center lg:text-left shrink-0">
                            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-sm flex items-center justify-center lg:justify-start gap-2">
                                <Navigation className="w-5 h-5" /> Discover Thrissur
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-stone-900 mb-6 leading-[1.1] tracking-tight">
                                Places to <span className="italic text-accent">Explore</span>
                            </h1>
                            <p className="text-lg md:text-xl text-stone-600 leading-relaxed font-light mb-0 max-w-xl mx-auto lg:mx-0">
                                While staying at Sukrutham is a wholesome experience in itself, here are some spectacular options to explore near the farmstay.
                            </p>
                            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/#booking" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-bold tracking-wide hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/20">
                                    Plan Your Local Exploration
                                </Link>
                            </div>
                        </div>
                        {/* Hero Map Image */}
                        <div className="lg:w-[60%] w-full animate-in slide-in-from-right-8 duration-700 fade-in zoom-in-95 flex justify-center lg:justify-end lg:-mr-8 xl:-mr-16">
                            <Image
                                src="/location-hub-map.png"
                                alt="Sukrutham Farmstay Location Map"
                                width={1400}
                                height={1050}
                                priority
                                className="w-full max-w-4xl h-auto rounded-3xl border-[8px] border-white shadow-2xl shadow-stone-900/10 object-cover -rotate-2 hover:rotate-0 transition-all duration-700"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Interactive Timeline Map */}
            <section className="py-12 bg-transparent relative z-20">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-6xl">
                    <h2 className="text-center font-display text-2xl mb-12 text-stone-800">Explore by Distance from <span className="font-semibold text-primary">Sukrutham Farmstay</span></h2>

                    {/* The Timeline Line */}
                    <div
                        className="relative max-w-4xl mx-auto w-full flex items-center justify-between pb-12 pt-8"
                        onMouseLeave={() => setHoveredRadius(null)}
                    >
                        {/* Connecting Line */}
                        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-stone-200 rounded-full z-0"></div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-primary rounded-full z-0 transition-all duration-500"
                            style={{
                                width: hoveredRadius === null ? '0%' :
                                    `${(timelineData.findIndex(t => t.limit === hoveredRadius) / (timelineData.length - 1)) * 100}%`
                            }}>
                        </div>

                        {/* Timeline Nodes */}
                        {timelineData.map((node) => {
                            const active = hoveredRadius !== null && node.limit <= hoveredRadius;
                            const isHovered = hoveredRadius === node.limit;
                            const placesInNode = getPlacesForRadius(node.limit);

                            return (
                                <div
                                    key={node.limit}
                                    className="relative z-10 flex flex-col items-center group cursor-pointer"
                                    onMouseEnter={(e) => {
                                        setHoveredRadius(node.limit);
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        setPopoverDirection(rect.top > window.innerHeight / 2 ? 'top' : 'bottom');
                                    }}
                                    onClick={(e) => {
                                        setHoveredRadius(node.limit);
                                        const rect = e.currentTarget.getBoundingClientRect();
                                        setPopoverDirection(rect.top > window.innerHeight / 2 ? 'top' : 'bottom');
                                    }}
                                >
                                    {/* The Node Dot */}
                                    <div className={`w-6 h-6 md:w-8 md:h-8 rounded-full border-4 shadow-md transition-all duration-300 ${active ? 'bg-primary border-white scale-125' : 'bg-white border-stone-300 group-hover:border-primary'}`}></div>

                                    {/* The Label */}
                                    <span className={`absolute top-10 whitespace-nowrap text-sm md:text-base font-semibold transition-colors ${active ? 'text-primary' : 'text-stone-500'}`}>
                                        {node.label}
                                    </span>

                                    {/* Hover Popover List of Places */}
                                    {isHovered && placesInNode.length > 0 && (
                                        <div className={`absolute ${popoverDirection === 'bottom' ? 'top-14' : 'bottom-14'} bg-white rounded-2xl shadow-2xl p-4 w-64 md:w-80 border border-stone-100 animate-in fade-in zoom-in-95 duration-200 pointer-events-none z-50`}>
                                            <div className="text-xs font-bold uppercase tracking-wider text-primary mb-3 pb-2 border-b border-stone-100">
                                                In this radius
                                            </div>
                                            <div className="space-y-3">
                                                {placesInNode.map(p => (
                                                    <div key={p.id} className="flex flex-col">
                                                        <span className="font-semibold text-stone-800 text-sm leading-tight">{p.title}</span>
                                                        <div className="flex items-center gap-2 mt-1">
                                                            <span className="text-xs text-stone-500 flex items-center gap-1"><MapPin className="w-3 h-3 text-accent" /> {p.distance}</span>
                                                            <span className="text-xs text-stone-500 flex items-center gap-1"><Clock className="w-3 h-3" /> {p.time}</span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Decorative triangle arrow pointing towards the line */}
                                            {popoverDirection === 'bottom' ? (
                                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-stone-100"></div>
                                            ) : (
                                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-stone-100"></div>
                                            )}
                                        </div>
                                    )}

                                    {/* Hover Popover if Empty */}
                                    {isHovered && placesInNode.length === 0 && (
                                        <div className={`absolute ${popoverDirection === 'bottom' ? 'top-14' : 'bottom-14'} bg-white rounded-xl shadow-2xl p-4 w-48 border border-stone-100 animate-in fade-in zoom-in-95 duration-200 pointer-events-none z-50`}>
                                            <div className="text-xs text-center text-stone-500 italic">No major spots in this exact interval.</div>
                                            {/* Decorative triangle arrow pointing towards the line */}
                                            {popoverDirection === 'bottom' ? (
                                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-l border-t border-stone-100"></div>
                                            ) : (
                                                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-r border-b border-stone-100"></div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Dynamic Spacer to push the next section down when a tooltip opens */}
                    <div
                        className="w-full transition-all duration-500 ease-in-out"
                        style={{ height: `${spacerHeight}px` }}
                        aria-hidden="true"
                    />
                </div>
            </section>

            {/* Main Content Area (Bento Grid) */}
            <section id="directory" className="py-16 md:py-24" onMouseLeave={() => setHoveredRadius(null)}>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="mb-12 text-center">
                        <h2 className="text-3xl font-display font-bold text-stone-900 mb-3">Detailed Directory</h2>
                        <p className="text-stone-500 max-w-2xl mx-auto">Click on the timeline above to filter, or browse all our spectacular day-trip destinations below.</p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {allPlaces.map((place) => (
                            <div
                                id={place.id}
                                key={place.id}
                                className={`scroll-mt-32 flex flex-col bg-white rounded-3xl overflow-hidden border border-stone-200/60 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:border-stone-300 ${hoveredRadius && place.distValue > hoveredRadius ? 'opacity-30 grayscale' : 'opacity-100'}`}
                            >
                                {/* Top Thumbnail */}
                                <div className="w-full aspect-[4/3] relative overflow-hidden bg-stone-100">
                                    <Image
                                        src={place.image}
                                        alt={place.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                    />
                                    {/* Overlay Badge */}
                                    <div className="absolute top-4 left-4 flex gap-2">
                                        <span className="bg-white/90 backdrop-blur-sm text-stone-800 text-[10px] font-bold px-2.5 py-1.5 rounded-full uppercase tracking-widest shadow-sm">
                                            {place.area}
                                        </span>
                                    </div>
                                </div>

                                {/* Bottom Info Packing */}
                                <div className="p-6 md:p-8 flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 mb-4 text-xs font-semibold text-stone-600">
                                        <span className="flex items-center gap-1.5 bg-stone-100 px-2.5 py-1 rounded-md">
                                            <MapPin className="w-3.5 h-3.5 text-accent" /> {place.distance}
                                        </span>
                                        <span className="flex items-center gap-1.5 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-md">
                                            <Clock className="w-3.5 h-3.5" /> {place.time}
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-display font-bold text-stone-900 mb-3 leading-tight line-clamp-2">
                                        {place.title}
                                    </h3>

                                    <p className="text-stone-600 text-sm leading-relaxed font-light mb-6 flex-grow line-clamp-3">
                                        {place.description}
                                    </p>

                                    {/* Details Accordion using Details/Summary for native expanding without state */}
                                    <details className="mt-auto group border-t border-stone-100 pt-4 cursor-pointer">
                                        <summary className="list-none flex items-center justify-between text-sm font-semibold text-primary select-none w-full">
                                            <span>View Highlights</span>
                                            <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center transition-transform duration-300 group-open:rotate-180">
                                                <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </summary>
                                        <ul className="space-y-2 mt-4 animate-in slide-in-from-top-2 fade-in duration-300">
                                            {place.highlights.map((highlight, idx) => (
                                                <li key={idx} className="flex gap-2 items-start text-xs text-stone-600">
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                                                    <span className="leading-relaxed">{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </details>
                                </div>
                            </div>
                        ))}

                        {/* Local Sightseeing Blog Link Card to fill the empty grid space (15th item) */}
                        <div className="flex flex-col bg-stone-900 rounded-3xl overflow-hidden border border-stone-800 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl group relative items-center justify-center p-8 text-center min-h-[400px]">
                            <div className="absolute inset-0 z-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay transition-transform duration-1000 group-hover:scale-110"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/80 to-stone-900/60 z-10"></div>

                            <div className="relative z-20 flex flex-col items-center justify-center h-full">
                                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <MapPin className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight">Read Our Travel Stories</h3>
                                <p className="text-stone-300 text-[15px] leading-relaxed font-light mb-8 max-w-[250px]">
                                    Dig deeper into local sightseeing with our curated guides and hidden secrets.
                                </p>
                                <Link href="/blog?category=local-sightseeing" className="text-sm font-bold text-primary tracking-widest uppercase flex items-center gap-2 hover:text-white transition-colors">
                                    Explore The Blog <Navigation className="w-4 h-4 rotate-90" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Travel Tips Banner */}
                    <div className="mt-16 bg-white rounded-3xl border border-amber-100 shadow-xl p-8 lg:p-12 overflow-hidden relative z-10">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
                        <h3 className="font-display font-bold text-2xl md:text-3xl text-stone-900 mb-8 flex items-center gap-3">
                            <Sun className="w-6 h-6 md:w-8 md:h-8 text-amber-500" /> Insider Travel Tips
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                            <div className="flex gap-4 lg:gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-1">
                                    <Clock className="w-5 h-5 text-blue-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-xl mb-2 tracking-tight">Start Early</h4>
                                    <p className="text-stone-600 text-[15px] leading-relaxed font-light">Begin your day trips by 8 AM. This helps you avoid the mid-day heat and lets you experience the attractions with the best natural light and fewer crowds.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 lg:gap-6 items-start">
                                <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 mt-1">
                                    <Car className="w-5 h-5 text-emerald-600" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-xl mb-2 tracking-tight">Local Transport</h4>
                                    <p className="text-stone-600 text-[15px] leading-relaxed font-light">While public buses are easily available, hiring a local taxi for the day provides maximum flexibility, allowing you to seamlessly connect multiple sightseeing spots.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 md:py-24 bg-[#F8F7F4] border-t border-stone-200/50">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
                    <div className="text-center mb-12">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 drop-shadow-sm flex items-center justify-center gap-2">
                            <Info className="w-4 h-4" /> Good to Know
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {[
                            { q: "Are these locations accessible via public transport?", a: "Most of the prominent locations like Thrissur City and Guruvayur are easily accessible by public buses. However, for nature spots like Athirappilly or Chimmini, we highly recommend hiring a private taxi or driving your own vehicle for convenience and flexibility." },
                            { q: "Can we cover multiple locations in one day?", a: "Yes, definitely. Locations are often clustered by route. For example, a trip to Athirappilly can be combined with Thumboormuzhi and Vazhachal. We can help you carefully plan logical routes to maximize your day out." },
                            { q: "Do we need to book tickets in advance?", a: "For some popular spots like the new Thrissur Zoological Park or Guruvayur Temple (for special darshans), advance online booking is highly recommended to avoid long queues. Most waterfalls and beaches do not require prior booking." },
                            { q: "What is the best time to visit these places?", a: "The post-monsoon and winter months (September to February) offer the best weather across all locations. Waterfalls are spectacular during and right after the monsoons (July-October), while beaches are best enjoyed in the winter." },
                            { q: "Can the farmstay arrange transportation?", a: "Absolutely. We have trusted local taxi partners who know these routes intimately. Let us know a day in advance, and we will arrange a comfortable vehicle and a reliable driver for your sightseeing." }
                        ].map((faq, idx) => (
                            <details key={idx} className="group bg-white border border-stone-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                <summary className="list-none flex items-center justify-between font-semibold text-stone-900 p-6 cursor-pointer select-none">
                                    <span className="text-lg pr-4">{faq.q}</span>
                                    <div className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center transition-transform duration-300 group-open:rotate-180 shrink-0">
                                        <svg className="w-5 h-5 text-stone-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                    </div>
                                </summary>
                                <div className="px-6 pb-6 text-stone-600 font-light leading-relaxed animate-in slide-in-from-top-2 fade-in duration-300 border-t border-stone-100 pt-4 mt-2">
                                    {faq.a}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Array (Visible on all sizes) */}
            <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

                {/* Decorative Left-to-Right Scenic Road Path overlay */}
                <div className="absolute inset-x-0 bottom-0 h-48 md:h-64 opacity-5 pointer-events-none overflow-hidden text-stone-200">
                    <svg viewBox="0 0 1200 300" preserveAspectRatio="xMidYMax slice" className="w-full h-full" fill="none" stroke="currentColor">
                        {/* Winding Road crossing from left to right */}
                        <path d="M -100 150 C 200 120, 400 220, 600 170 C 800 120, 1000 200, 1300 150" strokeWidth="6" />
                        <path d="M -100 150 C 200 120, 400 220, 600 170 C 800 120, 1000 200, 1300 150" strokeWidth="2" strokeDasharray="15 15" opacity="0.6" stroke="black" />

                        {/* Upper outline bounding the road */}
                        <path d="M -100 130 C 200 100, 400 200, 600 150 C 800 100, 1000 180, 1300 130" strokeWidth="2" opacity="0.4" />

                        {/* Lower outline bounding the road */}
                        <path d="M -100 170 C 200 140, 400 240, 600 190 C 800 140, 1000 220, 1300 170" strokeWidth="2" opacity="0.4" />

                        {/* Distant rolling hills */}
                        <path d="M -50 250 Q 300 180 600 280 T 1300 220" strokeWidth="1" opacity="0.2" />

                        {/* Lone Tree beside the road on a gentle bend */}
                        <g transform="translate(850, 40) scale(1.5)" strokeWidth="1.5" strokeLinejoin="round" opacity="0.9">
                            <path d="M 20 60 L 20 80" strokeWidth="3" />
                            <path d="M 0 60 L 20 25 L 40 60 Z" fill="currentColor" fillOpacity="0.2" />
                            <path d="M 5 45 L 20 10 L 35 45 Z" fill="currentColor" fillOpacity="0.4" />
                        </g>
                    </svg>
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-8">Need help planning your itinerary?</h2>
                    <p className="text-stone-300 text-lg mb-10 leading-relaxed font-light">
                        Let us know your interests! We can arrange reliable taxis and help you plan the perfect route to explore these beautiful destinations without feeling rushed.
                    </p>
                    <Link
                        href="/#booking"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-stone-900 rounded-full font-bold tracking-wide hover:bg-white/90 transition-all hover:scale-105 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                    >
                        Contact Host for Arrangements
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
