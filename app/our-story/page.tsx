"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { Quote, Leaf, Sun, Award, Star, Heart, Linkedin, Youtube, Calendar, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/lib/blogData";

export default function OurStory() {
    return (
        <main className="min-h-screen bg-[#FDFCF8] selection:bg-primary/20 selection:text-primary-dark font-sans">
            <Navbar />

            {/* --- Immersive Full-Screen Hero Section --- */}
            <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-stone-900 border-b-8 border-primary">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-carousel/slide1.jpg"
                        alt="Sukrutham Farmstay"
                        fill
                        className="object-cover opacity-60 mix-blend-overlay"
                        priority
                    />
                    {/* Dark gradient at the top specifically to ensure Navbar text is visible */}
                    {/* Refined Darker Overlay for Text Visibility */}
                    <div className="absolute inset-0 bg-stone-950/40 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent z-10"></div>
                </div>

                {/* Hero Content */}
                <div className="container mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center justify-center pt-24 pb-8 flex-grow">
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Our Story
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        Experience the <br className="hidden md:block" />
                        <span className="italic text-accent font-light">Sukrutham</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-stone-100 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-4 duration-700 delay-200 mb-16">
                        "Sukrutham" translates to the 'Goodness of Life'—a philosophy that guides every sunrise and sunset at our farm. A sanctuary where rural charm meets the warmth of home.
                    </p>

                    {/* Floating Hero Metric Badges */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 animate-in slide-in-from-bottom-8 duration-1000 delay-300">

                        {/* Govt Certified */}
                        <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors flex flex-col items-center justify-center text-center group cursor-default">
                            <Award className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-white font-bold text-lg mb-1">Govt. Certified</h3>
                            <p className="text-stone-300 text-xs tracking-widest uppercase">Diamond Class</p>
                        </div>

                        {/* Booking.com */}
                        <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors flex flex-col items-center justify-center text-center group cursor-default">
                            <div className="flex items-center justify-center gap-1 mb-3 text-white">
                                <span className="font-bold text-3xl leading-none">9.8</span>
                                <span className="text-stone-400 font-medium text-lg leading-none">/10</span>
                            </div>
                            <h3 className="text-[#00B2FF] font-bold text-lg mb-1">Review Awards</h3>
                            <p className="text-stone-300 text-xs tracking-widest uppercase">Booking.com 2026</p>
                        </div>

                        {/* Sustainable */}
                        <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors flex flex-col items-center justify-center text-center group cursor-default">
                            <Leaf className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-white font-bold text-lg mb-1">Sustainable</h3>
                            <p className="text-stone-300 text-xs tracking-widest uppercase">Architecture</p>
                        </div>

                        {/* Authentic */}
                        <div className="p-6 rounded-3xl bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 transition-colors flex flex-col items-center justify-center text-center group cursor-default">
                            <Heart className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform duration-500" />
                            <h3 className="text-white font-bold text-lg mb-1">Authentic Kerala</h3>
                            <p className="text-stone-300 text-xs tracking-widest uppercase">Hospitality</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- Trust Signals & Awards --- */}
            <section className="relative z-20 px-6 py-24 bg-stone-50">
                <div className="container mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                        {/* Diamond Certificate */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 p-8 flex flex-col sm:flex-row items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
                            <div className="relative w-full sm:w-2/5 shrink-0 group cursor-zoom-in">
                                <Image
                                    src="/certificate.jpg"
                                    alt="Diamond Grade Certificate"
                                    width={300}
                                    height={400}
                                    style={{ width: '100%', height: 'auto' }}
                                    className="rounded-lg border border-stone-100 shadow-sm relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500"
                                />
                                <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider text-stone-500 shadow-sm z-20">
                                    Verified
                                </div>
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 text-amber-500">
                                    <Award className="w-5 h-5 fill-current" />
                                    <span className="font-bold tracking-wide text-xs uppercase">Govt. Certified</span>
                                </div>
                                <h2 className="text-2xl font-display font-bold text-stone-900 mb-3">
                                    Diamond Class Homestay
                                </h2>
                                <p className="text-stone-600 leading-relaxed font-light text-sm mb-4">
                                    Honored with the highest accolade from Kerala Tourism for meeting stringent standards of safety, hygiene, and authentic cultural hospitality.
                                </p>
                                <div className="inline-block px-3 py-1.5 bg-stone-50 rounded-lg text-[10px] font-medium text-stone-500 border border-stone-100">
                                    Order No. DOT/15093/2023-ATIO1
                                </div>
                            </div>
                        </div>

                        {/* Booking.com Award */}
                        <div className="bg-white rounded-2xl shadow-xl shadow-stone-200/50 border border-stone-100 p-8 flex flex-col sm:flex-row items-center gap-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
                            <div className="relative w-2/3 sm:w-2/5 shrink-0 group mx-auto sm:mx-0">
                                <Image
                                    src="/Booking.com awards/Digital-Award_RA-2026.png"
                                    alt="Booking.com Traveller Review Awards 2026"
                                    width={300}
                                    height={300}
                                    style={{ width: '100%', height: 'auto' }}
                                    className="object-contain drop-shadow-md transform group-hover:scale-[1.05] transition-transform duration-500"
                                />
                            </div>
                            <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-3 text-[#003B95]">
                                    <span className="font-black text-3xl tracking-tight">9.8</span>
                                    <span className="text-xs font-bold text-stone-400 uppercase tracking-widest mt-1">/ 10</span>
                                </div>
                                <h2 className="text-2xl font-display font-bold text-stone-900 mb-3">
                                    Traveller Review Awards 2026
                                </h2>
                                <p className="text-stone-600 leading-relaxed font-light text-sm mb-4">
                                    Recognized by Booking.com travelers for delivering exceptional hospitality and creating unforgettable, perfect experiences for our guests worldwide.
                                </p>
                                <div className="inline-block px-3 py-1.5 bg-[#003B95]/10 rounded-lg text-xs font-bold text-[#003B95]">
                                    Booking.com
                                </div>
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
                                <div className="pt-4">
                                    <a
                                        href="https://www.linkedin.com/in/kp-murali-6018318/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-3 px-6 py-3 bg-[#0a66c2]/10 text-[#0a66c2] hover:bg-[#0a66c2] hover:text-white font-medium rounded-full transition-all duration-300 w-fit group"
                                    >
                                        <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                        <span>Connect with K.P. Murali on LinkedIn</span>
                                    </a>
                                </div>
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
                    <p className="text-center text-xl font-display italic text-stone-600 max-w-3xl mx-auto mb-8">
                        "This video provides a glimpse into the cultural and traditional essence that Sukrutham Farmstay aims to preserve and share with its guests."
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4">
                        <span className="text-xl font-display font-bold text-stone-900">
                            Experience the Magic Before You Arrive
                        </span>
                        <a
                            href="https://www.youtube.com/@SukruthamFarmStay"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF0000] hover:bg-red-700 text-white font-bold rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30 group"
                        >
                            <Youtube className="w-6 h-6 group-hover:animate-pulse" />
                            <span>Subscribe to our YouTube Channel</span>
                        </a>
                    </div>
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

                    <div className="grid md:grid-cols-3 gap-8 items-start">
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

            {/* --- Recent Blogs Section --- */}
            <section className="py-24 bg-white border-t border-stone-100">
                <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div>
                            <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">From the Journal</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold text-stone-900">
                                Sukrutham Chronicles
                            </h2>
                        </div>
                        <Link
                            href="/blog"
                            className="group inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors"
                        >
                            Read All Stories
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {blogPosts.slice(0, 3).map((post, index) => (
                            <Link
                                key={index}
                                href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                className="group bg-stone-50 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl border border-stone-100 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                            >
                                <div className="relative h-60 w-full overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 33vw"
                                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-stone-800 uppercase tracking-wider">
                                        {post.category}
                                    </div>
                                </div>
                                <div className="p-8 flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 text-stone-400 text-sm mb-4">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-display font-bold text-stone-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-stone-600 font-light leading-relaxed mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all mt-auto">
                                        Read Article <ArrowRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Final CTA Section --- */}
            <section className="relative py-32 bg-stone-900 text-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-carousel/slide3.jpg"
                        alt="Sukrutham Farm"
                        fill
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-stone-900/80"></div>
                </div>
                <div className="container mx-auto px-6 relative z-10 max-w-3xl">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        EXPLORE SUKRUTHAM FARMSTAY - HARVEST HAPPY MEMORIES!
                    </h2>
                    <p className="text-xl text-stone-300 font-light mb-10">
                        Come and experience the goodness of life. Let the farm weave its magic around you, and take home memories that last a lifetime.
                    </p>
                    <Link
                        href="/book"
                        className="inline-block px-10 py-5 bg-primary text-white hover:bg-white hover:text-stone-900 rounded-full font-bold tracking-widest uppercase transition-all duration-300 shadow-xl hover:-translate-y-1 hover:shadow-2xl"
                    >
                        Plan Your Escape
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
