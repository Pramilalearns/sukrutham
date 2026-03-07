"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { useState, useEffect } from "react";

import { categories, blogPosts } from "@/lib/blogData";

const categoryTextData: Record<string, { title: string, desc: string }> = {
    "All": { title: "Latest Articles", desc: "Explore experiences, tips, and tales from the farm." },
    "Host’s Journal": { title: "Host’s Journal", desc: "Reflections on life, philosophy, and true disconnection." },
    "Farm Life": { title: "Farm Life", desc: "Updates from our organic orchards and the rhythmic seasons." },
    "Food & Culture": { title: "Food & Culture", desc: "Local cuisines, the spice's story, and local traditions." },
    "Heritage Architecture": { title: "Heritage Architecture", desc: "Insights into eco-friendly building and ancient aesthetics." },
    "Rural Activities": { title: "Rural Activities", desc: "Village walks, pottery making, and farming experiences." },
    "Local Sightseeing": { title: "Local Sightseeing", desc: "Guide to waterfalls, temples, and nearby explorations." },
    "Nature’s Calendar": { title: "Nature’s Calendar", desc: "Birdwatching lists, wildlife spots, and the monsoon magic." },
    "Guest Stories": { title: "Guest Stories", desc: "Heartfelt testimonials and experiences from our visitors." }
};

export default function BlogPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);

    useEffect(() => {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
            const decodedHash = decodeURIComponent(hash);
            if (categories.includes(decodedHash)) {
                setActiveCategory(decodedHash);
            }
        }
    }, []);

    // Get the featured post to display at the top
    const featuredPost = blogPosts.find(p => p.isFeatured) || blogPosts[0];
    const featuredSlug = `/blog/${featuredPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`;

    // Filter out the featured post from the grid, and filter by category
    const gridPosts = blogPosts.filter(post => !post.isFeatured);

    const categoryMatches = gridPosts.filter(post =>
        activeCategory === "All" || post.category === activeCategory
    );

    // Slice based on visibleCount
    const filteredPosts = categoryMatches.slice(0, visibleCount);

    const handleCategoryClick = (cat: string) => {
        setActiveCategory(cat);
        setVisibleCount(6); // Reset pagination on category change
        window.history.pushState(null, '', cat === "All" ? '/blog' : `/blog#${encodeURIComponent(cat)}`);
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const currentText = categoryTextData[activeCategory] || categoryTextData["All"];

    return (
        <main className="min-h-screen bg-[#FDFCF8] selection:bg-primary/20 selection:text-primary-dark font-sans flex flex-col relative">
            <Navbar variant="light" />

            {/* --- Hero Section: Lively & Dynamic --- */}
            <section className="relative pt-32 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
                {/* Decorative background blurs for a pleasant, airy feel */}
                <div className="absolute top-0 right-0 w-3/4 h-[500px] bg-gradient-to-bl from-primary/10 via-amber-100/20 text-transparent to-transparent rounded-bl-full -z-10 blur-3xl opacity-60"></div>
                <div className="absolute -left-20 top-40 w-[400px] h-[400px] bg-secondary/5 rounded-full -z-10 blur-3xl opacity-70"></div>

                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-8 max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700">
                        <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-stone-800 text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                            The Sukrutham Chronicles
                        </span>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-stone-900 mb-4 md:mb-6 leading-tight">
                            Sukrutham Stories: <br />
                            <span className="italic text-primary font-light">Tales from the Farm</span>
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-stone-600 font-light leading-relaxed">
                            A curated journal of organic farm life, heritage architecture, local flavors, and the simple joys of slow living at Sukrutham.
                        </p>
                    </div>

                    {/* Featured Post (Glassmorphism + Large Image) */}
                    <Link href={featuredSlug} className="group block relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-stone-200/50 border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-in fade-in zoom-in-95 duration-1000 delay-200">
                        <div className="flex flex-col lg:flex-row h-full">
                            {/* Image Half */}
                            <div className="lg:w-3/5 relative h-[400px] lg:h-[500px] overflow-hidden">
                                <Image
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 60vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/20 to-transparent lg:w-1/2 group-hover:opacity-80 transition-opacity"></div>
                                <div className="absolute top-6 left-6">
                                    <span className="bg-white/90 backdrop-blur-md text-stone-900 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                                        Featured
                                    </span>
                                </div>
                            </div>

                            {/* Content Half */}
                            <div className="lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center bg-white relative">
                                <div className="flex items-center gap-4 text-xs font-semibold text-stone-500 uppercase tracking-widest mb-4">
                                    <span className="flex items-center gap-1.5 text-primary"><Tag className="w-3.5 h-3.5" /> {featuredPost.category}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {featuredPost.date}</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-6 group-hover:text-primary transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-stone-600 font-light leading-relaxed mb-8 line-clamp-4">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="mt-auto flex items-center justify-between pt-6 border-t border-stone-100">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-stone-200 flex items-center justify-center overflow-hidden">
                                            <Image src="/host-home-new.jpg" alt={featuredPost.author} width={40} height={40} className="object-cover" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-stone-900">{featuredPost.author}</p>
                                            <p className="text-xs text-stone-500">{featuredPost.readTime}</p>
                                        </div>
                                    </div>
                                    <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <ArrowRight className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>

            {/* --- Sticky Category Navigation Bar --- */}
            {/* Using sticky positioning and calculating top offset to stay below the fixed navbar (navbar is usually h-20 or h-24). */}
            <div className="sticky top-20 z-40 bg-[#FDFCF8]/85 backdrop-blur-xl border-y border-stone-200/50 shadow-sm py-3 transition-all duration-300">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="flex gap-2 min-w-max overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory">
                        {categories.map((cat, i) => (
                            <button
                                key={i}
                                onClick={() => handleCategoryClick(cat)}
                                className={`snap-start px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 whitespace-nowrap 
                                    ${cat === activeCategory
                                        ? 'bg-stone-900 text-white hover:bg-stone-800 shadow-md'
                                        : 'bg-white text-stone-600 hover:bg-[#F9F8F6] hover:text-stone-900 shadow-sm border border-stone-200/80 hover:border-stone-300 focus:ring-2 ring-primary/20'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
                {/* Fade edges for scroll indication on mobile */}
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FDFCF8] to-transparent pointer-events-none md:hidden"></div>
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FDFCF8] to-transparent pointer-events-none md:hidden"></div>
            </div>

            {/* --- Grid Section: Bento Layout --- */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F9F8F6] flex-grow">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-12">
                        <h2 className="text-3xl font-display font-bold text-stone-900">{currentText.title}</h2>
                        <p className="text-stone-500 mt-2">{currentText.desc}</p>
                    </div>

                    {activeCategory === "All" ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
                            {filteredPosts.map((post, idx) => (
                                <Link
                                    href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                    key={idx}
                                    className={`group relative rounded-[2rem] overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 flex flex-col ${post.className || 'md:col-span-1 md:row-span-1'}`}
                                >
                                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Gradient overlay depending on block size */}
                                        <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent ${post.className?.includes('row-span-2') || post.className?.includes('col-span-3') ? 'opacity-80' : 'opacity-90'} group-hover:opacity-100 transition-opacity duration-500`}></div>
                                    </div>

                                    <div className="relative z-10 flex flex-col h-full p-8 justify-end pointer-events-none text-white">
                                        <div className="mb-auto pointer-events-auto">
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider border border-white/20 mb-4 shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>

                                        <div className="pointer-events-auto">
                                            <h3 className={`font-display font-medium leading-tight mb-3 group-hover:text-amber-300 transition-colors ${post.className?.includes('col-span-2') || post.className?.includes('col-span-3') ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
                                                {post.title}
                                            </h3>
                                            <p className="text-white/80 font-light text-sm line-clamp-2 md:line-clamp-3 mb-4">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 text-xs font-semibold text-white/60 tracking-wider font-sans uppercase">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                                                <span>•</span>
                                                <span className="flex items-center gap-1.5">{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {filteredPosts.length > 0 ? filteredPosts.map((post, idx) => (
                                <Link
                                    href={`/blog/${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                                    key={idx}
                                    className="group flex flex-col bg-white rounded-[2rem] border border-stone-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
                                >
                                    <div className="relative h-64 w-full overflow-hidden">
                                        <Image
                                            src={post.image}
                                            alt={post.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-white/90 backdrop-blur-md text-stone-900 text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-sm">
                                                {post.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <h3 className="text-xl md:text-2xl font-display font-bold text-stone-900 mb-3 group-hover:text-primary transition-colors leading-tight line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-stone-600 font-light text-sm leading-relaxed mb-6 line-clamp-3">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between pt-4 border-t border-stone-100">
                                            <div className="flex items-center gap-3 text-xs font-semibold text-stone-500 uppercase tracking-widest">
                                                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                            <div className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                                <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )) : (
                                <div className="md:col-span-2 lg:col-span-3 flex items-center justify-center p-16 text-stone-500 bg-white rounded-[2rem] border border-stone-200 shadow-sm">
                                    <p className="text-lg">No articles found for this category yet. Check back soon!</p>
                                </div>
                            )}
                        </div>
                    )}

                    {visibleCount < categoryMatches.length && (
                        <div className="mt-16 text-center">
                            <button
                                onClick={handleLoadMore}
                                className="px-8 py-3.5 rounded-full border-2 border-stone-900 text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-colors duration-300"
                            >
                                Load More Stories
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
}
