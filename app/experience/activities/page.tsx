"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
    MapPin,
    ArrowRight,
    Leaf,
    Clock,
    Trees,
    Star,
    Bird,
    Bike,
    Users,
    Droplets,
    Sun,
    HeartHandshake
} from "lucide-react";

export default function ActivitiesPage() {
    // Data structures for the three categories based directly on the provided text
    // Data structures for the three categories with polished, brand-aligned copywriting
    const localExperiences = [
        {
            title: "Jungle Walk",
            location: "5 mins from Sukrutham",
            description: "Wander through pristine, protected forests. Breathe in the crisp, oxygen-rich air and let the ancient canopy naturally restore your mind and body.",
            image: "/activities-page/hd_jungle_walk.png",
            icon: Trees
        },
        {
            title: "Rural Walk",
            location: "Surrounding Sukrutham",
            description: "Immerse yourself in the rhythmic heartbeat of a traditional Kerala village. Gain an authentic, deeply personal glimpse into local heritage and daily livelihoods.",
            image: "/activities-page/hd_rural_walk.png",
            icon: Users
        },
        {
            title: "Traditional Fishing",
            location: "Surrounding Waterways",
            season: "June - November",
            description: "Channel your inner angler alongside local experts. Cast your line into serene waters and experience the thrill of catching native Kerala species.",
            image: "/activities-page/hd_fishing_kerala.png",
            icon: Droplets
        },
        {
            title: "Paddy Field Slush Walk",
            location: "Adjacent to Sukrutham",
            description: "Embrace the joy of the earth. Wade through the soft, slushy terrain of our paddy fields—a remarkably grounding and uniquely Keralan experience.",
            image: "/activities-page/hd_paddy_field.png",
            icon: Leaf
        },
        {
            title: "Village Cycling",
            location: "Trails up to 15 kms",
            description: "Pedal through living postcards. Navigate quiet village lanes shaded by ancient trees, flanked by vast, emerald expanses of flourishing paddy fields.",
            image: "/activities-page/hd_cycling_village.png",
            icon: Bike
        },
        {
            title: "Migratory Bird Watching",
            location: "Sukrutham Grounds",
            season: "September - December",
            description: "Witness nature’s spectacular migration. Spot majestic annual visitors including Flamingos, Pelicans, Gulls, and the graceful Spot-Billed Ducks.",
            image: "/activities-page/hd_bird_watching.png",
            icon: Bird
        },
        {
            title: "Pottery Village Visit",
            location: "45 mins / 25 kms",
            description: "Connect deeply to the earth. Witness master artisans shape raw clay into elegant forms, celebrating a versatile craft passed down through generations.",
            image: "/activities-page/hd_village_pottery.png",
            icon: HeartHandshake
        },
        {
            title: "Hammock Sunsets",
            location: "Sukrutham Grounds",
            description: "Surrender to golden hour. Let time slow down as you sway gently in a cozy hammock, watching the sun dip serenely below the Kerala horizon.",
            image: "/activities-page/hd_hammock.png",
            icon: Sun
        },
        {
            title: "Dine Under the Stars",
            location: "Blue Lagoon (1.30 hrs / 53 kms)",
            description: "Escape city lights. Savor an unforgettable culinary journey on a floating restaurant, illuminated by a breathtaking, unpolluted celestial canopy.",
            image: "/activities-page/hd_dine_stars.png",
            icon: Star
        }
    ];

    const innerFarmer = [
        {
            title: "Explore Organic Farms",
            location: "Sukrutham Grounds",
            description: "Delve into the art of sustainable agriculture. Discover the dedication required to cultivate organic produce in absolute harmony with Mother Nature.",
            image: "/activities-page/hd_organic_farm.png"
        },
        {
            title: "Master Cow Milking",
            location: "Sukrutham Grounds",
            description: "Guided by our expert farmers, learn the gentle, rhythmic, and time-honored practice of milking our healthy, well-cared-for cows.",
            image: "/activities-page/hd_cow_milking_farm.png"
        },
        {
            title: "Herd the Goats",
            location: "Sukrutham Grounds",
            description: "Take on a playful challenge. Join us in guiding our spirited goats to pasture—a surprisingly delightful test of patience and rural teamwork.",
            image: "/activities-page/hd_goats_grazing.png"
        },
        {
            title: "Palm Toddy Tapping",
            location: "Sukrutham Grounds",
            description: "Watch skilled artisans scale towering palms to extract fresh, naturally sweet toddy, a traditional beverage celebrated for its unique health benefits.",
            image: "/activities-page/hd_palm_toddy.png"
        },
        {
            title: "Rubber Tapping",
            location: "Sukrutham Grounds",
            season: "Feb - April",
            description: "Kerala is India's rubber heartland. Stand inches away as master tappers expertly coax pristine white latex from the bark of century-old trees.",
            image: "/activities-page/hd_rubber_tapping.png"
        },
        {
            title: "Harvest the Bounty",
            location: "Sukrutham Grounds",
            season: "January - May",
            description: "Experience the ultimate farm-to-table journey. Participate in the seamless, time-sensitive process of harvesting and processing fresh crops.",
            image: "/activities-page/hd_butterfly_garden.png"
        }
    ];

    const rejuvenate = [
        {
            title: "Kerala Ayurvedic Massage",
            description: "Surrender to ancient healing. Experience authentic Ayurvedic therapies designed to melt away muscle tension, boost circulation, and profoundly soothe your mind.",
            icon: HeartHandshake
        },
        {
            title: "Expert Consultations",
            description: "Meet with our certified Ayurvedic practitioners for personalized healing. Access tailored wellness plans, holistic detox programs, and deep restorative care.",
            icon: Leaf
        }
    ];

    return (
        <main className="min-h-screen bg-stone-50 font-sans selection:bg-primary/20 selection:text-primary-dark">
            <Navbar variant="transparent" />

            {/* --- IMMERSIVE HERO SECTION --- */}
            <section className="relative min-h-[100vh] flex items-center pt-28 pb-16 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/activities-page/hd_activities_hero.png"
                        alt="Activities Hero"
                        fill
                        sizes="100vw"
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-stone-900/60"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center">
                    <ScrollAnimation>
                        <span className="inline-block py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.1em] mb-6 shadow-sm">
                            Curated Experiences
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium text-white mb-6 leading-tight drop-shadow-xl">
                            Discover the Magic of <br className="hidden md:block" />
                            <span className="italic text-stone-200 font-light">Kerala</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-100 font-medium leading-relaxed max-w-2xl mx-auto drop-shadow-md">
                            Step out of the ordinary. Immerse yourself in authentic village life, learn ancient farming practices, and rejuvenate your soul at Sukrutham Farmstay.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* --- CATEGORY 1: UNIQUE LOCAL EXPERIENCES (Matching "Rooms" Cards Layout) --- */}
            <section className="py-24 bg-stone-50" id="local-experiences">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 mb-6">
                            Unique Local Experiences
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed">
                            Here's what you can expect when you visit. Discover the magic of Kerala through genuine activities that connect you with nature and local culture.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {localExperiences.map((activity, index) => (
                            <ScrollAnimation key={index} delay={(index % 3) * 100} className="h-full">
                                <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100 flex flex-col h-full group">
                                    {/* Image Container */}
                                    <div className="aspect-[4/3] relative overflow-hidden">
                                        <Image
                                            src={activity.image}
                                            alt={activity.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {activity.season && (
                                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-stone-800 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-sm uppercase tracking-wider flex items-center gap-1">
                                                <Clock className="w-3 h-3 text-primary" /> {activity.season}
                                            </div>
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        {/* Floating Icon */}
                                        <div className="absolute -top-7 right-8 w-14 h-14 bg-white rounded-2xl shadow-lg border border-stone-100 flex items-center justify-center text-primary transform group-hover:-translate-y-2 transition-transform duration-300">
                                            <activity.icon className="w-6 h-6" />
                                        </div>

                                        <h3 className="text-2xl font-display font-bold text-stone-900 mb-2 mt-2">{activity.title}</h3>

                                        <div className="flex items-start gap-2 text-stone-500 text-sm mb-4">
                                            <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary/70" />
                                            <span className="font-medium">{activity.location}</span>
                                        </div>

                                        <p className="text-stone-600 text-[15px] leading-relaxed flex-grow">
                                            {activity.description}
                                        </p>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CATEGORY 2: BRING OUT YOUR INNER FARMER (Matching "Our Story" Split Layout) --- */}
            <section className="py-24 bg-white relative border-t border-stone-100" id="farming">
                {/* Subtle Background Accent */}
                <div className="absolute top-40 right-0 w-[500px] h-[700px] bg-[#FAF8F5] rounded-l-[100px] -z-0 pointer-events-none hidden lg:block"></div>

                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
                    <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

                        {/* Sticky Left Column */}
                        <div className="lg:w-4/12 lg:sticky lg:top-32 relative z-20 h-auto self-start pb-8 lg:pb-0">
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm block mb-4">
                                Farm Life
                            </span>
                            <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 leading-tight mb-6">
                                Bring Out Your <br />
                                <span className="text-stone-500 italic font-serif">Inner Farmer</span>
                            </h2>
                            <p className="text-[#A48869] font-medium text-xl mb-6 leading-snug">
                                Experience authentic farm life in Kerala.
                            </p>
                            <p className="text-stone-600 text-lg font-light leading-relaxed mb-8">
                                From understanding the delicate nuances of organic practices to witnessing the traditional methods of crop harvesting. Get your hands dirty and reconnect with the simple joys of nature.
                            </p>
                            <div className="w-16 h-1 bg-[#EBE5DC]"></div>
                        </div>

                        {/* Right Column Grid */}
                        <div className="lg:w-8/12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {innerFarmer.map((item, index) => (
                                    <ScrollAnimation key={index} delay={index * 100} className="h-full">
                                        <div className="bg-[#FCFAF7] rounded-3xl p-6 md:p-8 border border-[#F0EBE1] shadow-sm hover:shadow-md hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group">
                                            {/* Circular Image inside Card */}
                                            <div className="relative w-full aspect-square md:aspect-video rounded-2xl overflow-hidden mb-6">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, 50vw"
                                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                                />
                                                {item.season && (
                                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-stone-800 text-[9px] font-bold px-2 py-1 rounded-sm shadow-sm uppercase tracking-wider">
                                                        {item.season}
                                                    </div>
                                                )}
                                            </div>

                                            <h4 className="text-xl font-display font-medium text-stone-900 mb-3">{item.title}</h4>
                                            <p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                                                {item.description}
                                            </p>
                                            <div className="flex items-center gap-2 text-[#A48869] text-xs font-semibold uppercase tracking-wider">
                                                <MapPin className="w-3 h-3" /> {item.location}
                                            </div>
                                        </div>
                                    </ScrollAnimation>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CATEGORY 3: REJUVENATE YOURSELF (Clean, Modular Box Design) --- */}
            <section className="py-24 bg-[#F4F1EA]" id="rejuvenate">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-5xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm block mb-4">Wellness</span>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-stone-900 mb-6">
                            Rejuvenate Yourself
                        </h2>
                        <p className="text-stone-600 text-lg leading-relaxed max-w-2xl mx-auto">
                            Experience traditional Kerala wellness. Heal your body and mind through ancient, scientifically proven natural remedies.
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
                        {/* Static image of Ayurvedic Treatment */}
                        <ScrollAnimation className="w-full md:w-1/2">
                            <div className="relative aspect-square md:aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl border-4 border-white group">
                                <Image
                                    src="/activities-page/hd_ayurvedic_massage.png"
                                    alt="Ayurvedic Treatment"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </ScrollAnimation>

                        <div className="w-full md:w-1/2 flex flex-col gap-6">
                            {rejuvenate.map((item, index) => (
                                <ScrollAnimation key={index} delay={index * 100} className="w-full">
                                    <div className="bg-white p-8 rounded-[2rem] shadow-sm border border-stone-100 hover:shadow-md hover:border-primary/20 transition-all group">
                                        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-2xl font-display font-medium text-stone-900 mb-3">{item.title}</h3>
                                        <p className="text-stone-600 leading-relaxed font-light">
                                            {item.description}
                                        </p>
                                    </div>
                                </ScrollAnimation>
                            ))}

                            <ScrollAnimation delay={200} className="w-full mt-4">
                                <Link
                                    href="/book"
                                    className="block w-full text-center py-5 bg-[#758A6D] hover:bg-[#5A6B53] text-white font-bold rounded-full transition-all hover:scale-105 shadow-md"
                                >
                                    Book a Wellness Session
                                </Link>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- CTA Section (Matching Rooms Page Pattern) --- */}
            <section className="py-24 bg-stone-900 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 max-w-4xl relative z-10">
                    <ScrollAnimation>
                        <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 text-white">Ready for Discovery?</h2>
                        <p className="text-lg md:text-xl text-stone-300 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
                            Call us now to reserve your room or learn more about our curated activities and experiences. We look forward to greeting you at Sukrutham Farm Stay.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <a
                                href="https://wa.me/919940668754"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-[#758A6D] hover:bg-white hover:text-stone-900 text-white font-bold px-10 py-4 rounded-full transition-all hover:scale-105 text-sm uppercase tracking-wider"
                            >
                                Contact Us <ArrowRight className="w-4 h-4" />
                            </a>
                            <Link href="/rooms" className="text-stone-300 hover:text-white font-semibold underline underline-offset-4 decoration-stone-500 hover:decoration-white transition-all">
                                View Rooms First
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            <FloatingCTA />
            <Footer />
        </main>
    );
}
