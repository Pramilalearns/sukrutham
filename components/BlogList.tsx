"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

interface BlogListProps {
    initialPosts: any[];
    categories: string[];
    categoryTextData: Record<string, { title: string, desc: string }>;
}

export default function BlogList({ initialPosts, categories, categoryTextData }: BlogListProps) {
    const [activeCategory, setActiveCategory] = useState("All");
    const [visibleCount, setVisibleCount] = useState(6);
    const [posts, setPosts] = useState(initialPosts);

    useEffect(() => {
        const hash = typeof window !== 'undefined' ? window.location.hash.replace('#', '') : '';
        if (hash) {
            const decodedHash = decodeURIComponent(hash);
            if (categories.includes(decodedHash)) {
                setActiveCategory(decodedHash);
            }
        }
    }, [categories]);

    // Update posts if initialPosts changes (though unlikely with SSR unless re-rendered)
    useEffect(() => {
        setPosts(initialPosts);
    }, [initialPosts]);

    const featuredPost = posts[0];
    const gridPosts = posts.slice(1);

    const populatedCategories = ["All", ...categories.filter(cat => 
        cat !== "All" && posts.some(p => p.category === cat)
    )];

    const categoryMatches = gridPosts.filter(post => 
        activeCategory === "All" || post.category === activeCategory
    );

    const filteredPosts = categoryMatches.slice(0, visibleCount);

    const handleCategoryClick = (cat: string) => {
        setActiveCategory(cat);
        setVisibleCount(6);
        if (typeof window !== 'undefined') {
            window.history.pushState(null, '', cat === "All" ? '/blog' : `/blog#${encodeURIComponent(cat)}`);
        }
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => prev + 6);
    };

    const currentText = categoryTextData[activeCategory] || categoryTextData["All"];

    const featuredSlug = featuredPost?.slug?.current 
        ? `/blog/${featuredPost.slug.current}` 
        : "#";

    return (
        <>
            {/* Featured Post (Hero) */}
            {posts.length > 0 && (
                <section className="relative px-6 md:px-12 lg:px-20 -mt-16 mb-20">
                    <div className="container mx-auto max-w-7xl">
                        <Link href={featuredSlug} className="group block relative rounded-[2.5rem] overflow-hidden bg-white shadow-xl shadow-stone-200/50 border border-stone-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                            <div className="flex flex-col lg:flex-row h-full">
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
                                                <Image src={featuredPost.authorImage || "/images/host/host-home-new.jpg"} alt={featuredPost.author} width={40} height={40} className="object-cover" />
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
            )}

            {/* Category Navigation Bar - Calibrated to touch Navbar (79px desktop) */}
            <div className="sticky top-[79px] z-40 bg-stone-50 border-y border-stone-200/50 shadow-sm transition-all duration-300 overflow-hidden">
                <div className="container mx-auto px-6 md:px-12 lg:px-20">
                    <div className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory">
                        <div className="flex gap-2 min-w-max py-2 md:py-3">
                            {populatedCategories.map((cat, i) => (
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
                </div>
                <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FDFCF8] to-transparent pointer-events-none md:hidden"></div>
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FDFCF8] to-transparent pointer-events-none md:hidden"></div>
            </div>

            {/* Grid Section */}
            <section className="py-16 px-6 md:px-12 lg:px-20 bg-[#F9F8F6] flex-grow">
                <div className="container mx-auto max-w-7xl">
                    <div className="mb-12">
                        <h2 className="text-3xl font-display font-bold text-stone-900">{currentText.title}</h2>
                        <p className="text-stone-500 mt-2">{currentText.desc}</p>
                    </div>

                    {activeCategory === "All" ? (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 auto-rows-[220px]">
                            {filteredPosts.map((post, idx) => {
                                const p = idx % 6;
                                let span = '';
                                if (p === 0) span = 'md:col-span-2 md:row-span-2';
                                else if (p === 1) span = 'md:col-span-1 md:row-span-2';
                                else if (p === 2) span = 'md:col-span-1 md:row-span-1';
                                else if (p === 3) span = 'md:col-span-2 md:row-span-1';
                                else if (p === 4) span = 'md:col-span-2 md:row-span-1';
                                else span = 'md:col-span-1 md:row-span-1';

                                const isLarge = p === 0;
                                const isTallOrWide = p === 1 || p === 3 || p === 4;

                                return (
                                    <Link 
                                        href={post.slug?.current ? `/blog/${post.slug.current}` : "#"} 
                                        key={idx} 
                                        className={`group relative rounded-[1.5rem] overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-500 ${span}`}
                                    >
                                        <div className="absolute inset-0 w-full h-full z-0">
                                            <Image 
                                                src={post.image} 
                                                alt={post.title} 
                                                fill 
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                        </div>

                                        <div className="relative z-10 flex flex-col h-full p-5 justify-end text-white">
                                            <span className="inline-block self-start px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-sm text-[9px] font-bold uppercase tracking-wider border border-white/20 mb-2">
                                                {post.category}
                                            </span>
                                            <h3 className={`font-display font-semibold leading-tight mb-1 group-hover:text-amber-300 transition-colors line-clamp-2 ${isLarge ? 'text-2xl' : isTallOrWide ? 'text-lg' : 'text-sm'}`}>
                                                {post.title}
                                            </h3>
                                            {(isLarge || isTallOrWide) && (
                                                <p className="text-white/70 text-xs line-clamp-2 mb-2 font-light">
                                                    {post.excerpt}
                                                </p>
                                            )}
                                            <div className="flex items-center gap-2 text-[10px] text-white/50 uppercase tracking-wider">
                                                <span className="flex items-center gap-1"><Calendar className="w-2.5 h-2.5" />{post.date}</span>
                                                <span>•</span>
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                            {filteredPosts.length > 0 ? filteredPosts.map((post, idx) => (
                                <Link 
                                    href={post.slug?.current ? `/blog/${post.slug.current}` : "#"} 
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
                                className="px-5 sm:px-8 py-2.5 sm:py-3 text-[13px] sm:text-base whitespace-nowrap rounded-full border-2 border-stone-900 text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-colors duration-300"
                            >
                                Load More Stories
                            </button>
                        </div>
                    )}
                </div>
            </section>
        </>
    );
}
