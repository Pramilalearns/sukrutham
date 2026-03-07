"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Quote, Leaf, Sun, Award } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OurStory() {
    return (
        <main className="min-h-screen bg-[#FDFCF8] selection:bg-primary/20 selection:text-primary-dark font-sans">
            <Navbar variant="light" />

            {/* --- Hero Section: Minimalist & Impactful --- */}
            <section className="relative pt-40 pb-20 px-6 md:px-12 lg:px-20 border-b border-stone-100 overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-100/50 via-transparent to-transparent -z-10"></div>

                <div className="container mx-auto max-w-5xl text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 text-primary text-xs font-bold tracking-widest uppercase mb-8 animate-in fade-in zoom-in duration-700">
                        <Leaf className="w-3 h-3" /> Where Goodness Lives
                    </div>

                    <h1 className="text-6xl md:text-8xl font-display font-bold text-stone-900 mb-8 leading-[0.95] tracking-tight animate-in slide-in-from-bottom-8 duration-700 delay-100">
                        The Heart of <br />
                        <span className="italic text-stone-400 font-light">Sukrutham</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto animate-in slide-in-from-bottom-4 duration-700 delay-200">
                        "Sukrutham" translates to the 'Goodness of Life'—a philosophy that guides every sunrise and sunset at our farm. A sanctuary where rural charm meets the warmth of home.
                    </p>
                </div>
            </section>

            {/* --- Trust Signal: Diamond Certificate --- */}
            <section className="relative -mt-10 z-20 px-6">
                <div className="container mx-auto max-w-4xl">
                    <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">

                        <div className="relative w-full md:w-1/3 shrink-0 group cursor-zoom-in">
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-100 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <Image
                                src="/certificate.jpg"
                                alt="Diamond Grade Certificate"
                                width={300}
                                height={400}
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="w-full h-auto rounded-lg border border-stone-100 shadow-sm relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
                            />
                            <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-stone-500 shadow-sm z-20">
                                Verified
                            </div>
                        </div>

                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-4 text-amber-500">
                                <Award className="w-6 h-6 fill-current" />
                                <span className="font-bold tracking-wide text-sm uppercase">Government Certified</span>
                            </div>
                            <h2 className="text-3xl font-display font-bold text-stone-900 mb-4">
                                Diamond Class Homestay
                            </h2>
                            <p className="text-stone-600 leading-relaxed font-light mb-6">
                                We are honored to hold the prestigious <strong>Diamond Certification</strong> from Kerala Tourism. This is the highest accolade awarded only to homestays meeting the most stringent standards of safety, hygiene, and authentic cultural hospitality.
                            </p>
                            <div className="inline-block px-4 py-2 bg-stone-50 rounded-lg text-xs font-medium text-stone-500 border border-stone-100">
                                Order No. DOT/15093/2023-ATIO1 (M)
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- The Visionary (Refined Content) --- */}
            <section className="py-32 px-6 md:px-12 lg:px-20 overflow-hidden">
                <div className="container mx-auto">
                    <div className="flex flex-col lg:flex-row gap-20">
                        {/* Smaller Sticky Image */}
                        <div className="lg:w-4/12 relative">
                            <div className="lg:sticky lg:top-32">
                                <div className="space-y-6">
                                    <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden bg-stone-200 shadow-2xl rotate-2 hover:rotate-0 transition-all duration-700">
                                        <Image
                                            src="/host-visionary-new.jpg"
                                            alt="Mr. Murali"
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                                            <h3 className="text-white text-3xl font-display font-bold">Mr. K.P. Murali</h3>
                                            <p className="text-white/80 font-light tracking-wide text-sm mt-1">Founding Visionary</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Extended Content */}
                        <div className="lg:w-7/12 pt-12 space-y-12">
                            <div>
                                <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">The Beginning</span>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-8">
                                    A Dream Realized
                                </h2>
                                <div className="prose prose-lg text-stone-600 font-light leading-loose space-y-6">
                                    <p>
                                        The story of Sukrutham began with a leap of faith. Our founder, <strong>Mr. K.P. Murali</strong>, left behind a high-paced career in a multinational corporation to return to his roots. A dream home conceptualised by the owner, who left his MNC job, to live in a place of calm and serenity - surrounded by nature's bountiful beauty - the call of Sukrutham grew stronger.
                                    </p>
                                    <p>
                                        Driven by a desire for calm and a deep love for nature’s bountiful beauty, he personally conceptualized and oversaw every detail of Sukrutham—from the foundation to the final traditional finish. He ensured with his personal presence that Sukrutham was built the way he aspired her to be.
                                    </p>
                                </div>
                            </div>

                            <div className="relative pl-8 border-l-4 border-accent/20 py-2">
                                <Quote className="absolute -top-4 -left-4 w-8 h-8 text-accent/20 fill-current" />
                                <p className="text-2xl font-display italic text-stone-800 leading-relaxed mb-4">
                                    "I wanted to create a home that 'breathes' with its surroundings, offering others the same magical feeling of peace that I found here."
                                </p>
                            </div>

                            <div className="prose prose-lg text-stone-600 font-light leading-loose">
                                <p>
                                    A storyteller, a guide, and a host who treats every guest like family, Murali’s presence is the soul of the farmstay. The place where Sukrutham was born, is a place that attracted the owner, who set about constructing the house from foundation to finish.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Architecture (Bento Grid Layout) --- */}
            <section className="relative py-32 bg-[#F9F8F6] text-stone-900 overflow-hidden border-t border-stone-100">
                <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-6xl">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <span className="text-accent font-bold tracking-widest uppercase text-xs mb-4 block">Timeless Design</span>
                        <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 text-stone-900">
                            Architecture with a Soul
                        </h2>
                        <p className="text-xl text-stone-600 font-light leading-relaxed">
                            Sukrutham is a masterpiece of traditional Kerala architecture. Built by using <span className="text-stone-800 font-medium">local materials and native architectural style</span> to build a traditional Kerala style home.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Block 1: Main Feature (Span 2) */}
                        <div className="md:col-span-2 bg-white rounded-[2.5rem] p-10 border border-stone-200 shadow-sm relative overflow-hidden group">
                            <div className="relative z-10">
                                <h3 className="text-3xl font-display font-medium text-stone-900 mb-4">Eco-Friendly Marvel</h3>
                                <p className="text-lg text-stone-600 font-light leading-relaxed max-w-xl">
                                    Its natural laterite stones and eco-friendly concepts keep it at least <strong>10 degrees cooler in summer!</strong> eliminating the need for excessive energy. This isn't just a building; it's a breathing entity.
                                </p>
                            </div>
                            <div className="absolute right-0 bottom-0 w-64 h-64 bg-stone-50 rounded-full blur-3xl -z-0 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                            <div className="absolute top-10 right-10 p-4 bg-stone-100 rounded-2xl">
                                <Leaf className="w-8 h-8 text-primary" />
                            </div>
                        </div>

                        {/* Block 2: Detail Feature */}
                        <div className="bg-stone-100 rounded-[2.5rem] p-10 border border-stone-200 shadow-sm flex flex-col justify-between hover:bg-white transition-colors duration-500 group">
                            <div>
                                <h3 className="text-2xl font-display font-medium text-stone-900 mb-4">Handcrafted Details</h3>
                                <p className="text-stone-600 font-light leading-relaxed">
                                    From the central open courtyard that invites the rain and sun, to the handcrafted furniture.
                                </p>
                            </div>
                            <div className="mt-8 self-end group-hover:scale-110 transition-transform duration-500">
                                <Sun className="w-10 h-10 text-amber-500/80" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Video Section 1: Cultural Essence --- */}
            <section className="py-24 px-6 md:px-12 bg-white">
                <div className="container mx-auto max-w-5xl">
                    <div className="aspect-video w-full relative rounded-3xl overflow-hidden shadow-2xl border-4 border-stone-100 mb-8 group">
                        <iframe
                            src="https://www.youtube.com/embed/_gbFpVIGLAs?rel=0&modestbranding=1"
                            title="Sukrutham Cultural Essence"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <p className="text-center text-xl font-display italic text-stone-600 max-w-3xl mx-auto">
                        "This video provides a glimpse into the cultural and traditional essence that Sukrutham Farmstay aims to preserve and share with its guests."
                    </p>
                </div>
            </section>

            {/* --- Living Farm (Redesigned Layout) --- */}
            <section className="py-32 px-6 md:px-12 bg-[#F4F1EA]">
                <div className="container mx-auto">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">Biodiversity</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6">A Living, Breathing Farm</h2>
                        <p className="text-lg text-stone-600 font-light leading-relaxed">
                            Set within a lush one-acre organic farm, life here moves at a gentle pace. Our gardens are a treasure trove of biodiversity, featuring:
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Orchard Card */}
                        <div className="group bg-white rounded-[2rem] p-8 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-orange-100/50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-3xl">🥭</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">The Orchard</h3>
                            <p className="text-stone-600 leading-relaxed font-light">
                                Over 20 species of fruits including Rambutan, Mangosteen, Avocado, and Star Fruit. A true feast for the senses directly from our trees.
                            </p>
                        </div>

                        {/* Fields Card */}
                        <div className="group bg-white rounded-[2rem] p-8 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-lime-100/50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-3xl">🌾</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">The Fields</h3>
                            <p className="text-stone-600 leading-relaxed font-light">
                                Verdant paddy fields that frame the property, offering a feast for the eyes and the soul. Watch the seasons change across the golden harvest.
                            </p>
                        </div>

                        {/* Sustainable Card */}
                        <div className="group bg-white rounded-[2rem] p-8 border border-stone-100 hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2">
                            <div className="w-16 h-16 bg-yellow-100/50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                <span className="text-3xl">☀️</span>
                            </div>
                            <h3 className="text-2xl font-display font-bold text-stone-900 mb-4">Sustainable Living</h3>
                            <p className="text-stone-600 leading-relaxed font-light">
                                The entire property is powered by the sun and blessed with the novelty of sweet, fresh well water. Living in harmony with nature.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Video Section 2: In & Around (Cinematic Layout) --- */}
            <section className="py-32 bg-stone-50 text-stone-900 border-t border-stone-200 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-7xl font-display font-bold text-stone-900 mb-8">
                            Experience the <br /> Unseen Kerala
                        </h2>
                        <p className="text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
                            The goal of Sukrutham Farmstay is to provide its guests with authentic and immersive experiences in a typical rural Kerala setting offering a flavour of local culture, tradition and the comfort of a Home.
                        </p>
                    </div>

                    <div className="relative w-full aspect-video rounded-[3rem] overflow-hidden shadow-2xl ring-1 ring-stone-900/5 group">
                        <iframe
                            src="https://www.youtube.com/embed/yWMPIHfWezo?rel=0&modestbranding=1"
                            title="In and Around Sukrutham"
                            className="absolute inset-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 mt-16 text-center md:text-left">
                        <p className="text-lg text-stone-600 font-light leading-relaxed border-l-2 border-stone-300 pl-6">
                            It’s Kerala like you have never seen before! With plenty of local, non-touristy and off beat attractions, incredible Keralan food, and cultural experiences.
                        </p>
                        <p className="text-lg text-stone-600 font-light leading-relaxed border-l-2 border-stone-300 pl-6">
                            It’s going to be an holiday you will always cherish. Explore life in and around Sukrutham.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer Note */}
            <div className="py-24 bg-[#FDFCF8] text-center px-6">
                <p className="text-2xl md:text-3xl font-display italic text-stone-500 max-w-4xl mx-auto leading-relaxed">
                    "Sukrutham will weave its magic around you. She will make you fall in love with yourself and the place."
                </p>
            </div>

            <Footer />
        </main>
    );
}
