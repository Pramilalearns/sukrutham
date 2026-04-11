import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2, Facebook, X, Linkedin, MessageSquare, Quote as QuoteIcon, ArrowRight, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import CouponBox from "@/components/CouponBox";
import { getPostBySlug, blogPosts, categories, BlogPost } from "@/lib/blogData";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import BlogContent from "@/components/BlogContent";

export const revalidate = 60;

const decodeHtml = (str: string) => {
    if (!str) return '';
    return str
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, ' ') 
        .replace(/\s+/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#8216;/g, '\u2018')
        .replace(/&#8217;/g, '\u2019')
        .replace(/&#8220;/g, '\u201C')
        .replace(/&#8221;/g, '\u201D')
        .replace(/&#8230;/g, '\u2026')
        .replace(/&#\d+;/g, '')
        .replace(/&[a-z]+;/gi, '')
        .trim();
};

export async function generateStaticParams() {
    const localSlugs = blogPosts.map((post) => ({ slug: post.slug }));
    let sanitySlugs: { slug: string }[] = [];
    try {
        const query = '*[_type == "post"]{ "slug": slug.current }';
        const sanityPosts = await client.fetch(query, {}, { next: { revalidate: 60 } });
        sanitySlugs = sanityPosts.map((p: any) => ({ slug: p.slug }));
    } catch (e) {
        console.error("Error fetching static params:", e);
    }
    const allSlugsMap = new Map();
    [...localSlugs, ...sanitySlugs].forEach(item => allSlugsMap.set(item.slug, item));
    return Array.from(allSlugsMap.values());
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    let post: BlogPost | undefined = undefined;

    try {
        const query = `*[_type == "post" && slug.current == $slug][0]{
            title,
            slug,
            "content": body,
            "excerpt": excerpt,
            featuredImage,
            "category": coalesce(categoryRef->title, category),
            publishedAt,
            readTime,
            author->{ 
                name, 
                "image": image.asset->url 
            },
            "tags": tags
        }`;
        
        const sanityPost = await client.fetch(query, { slug }, { next: { revalidate: 60 } });

        if (sanityPost) {
            post = {
                title: decodeHtml(sanityPost.title),
                slug: sanityPost.slug?.current || '',
                content: sanityPost.content || '',
                excerpt: decodeHtml(sanityPost.excerpt || ''),
                image: sanityPost.featuredImage ? urlFor(sanityPost.featuredImage).url() : '/gallery-1.jpg',
                date: sanityPost.publishedAt ? new Date(sanityPost.publishedAt).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}) : '',
                author: decodeHtml(sanityPost.author?.name || 'Sukrutham Team'),
                authorRole: 'Author',
                authorImage: sanityPost.author?.image || '/gallery-1.jpg',
                category: decodeHtml(sanityPost.category || 'Uncategorized'),
                readTime: sanityPost.readTime || '5 min read',
                tags: sanityPost.tags || [],
            };
        }
    } catch (e) {
        console.error("Error fetching from Sanity:", e);
    }

    if (!post) {
        post = getPostBySlug(slug);
    }

    if (!post) {
        return (
            <main className="min-h-screen bg-[#FDFCF8] flex flex-col items-center justify-center font-sans">
                <Navbar variant="light" />
                <div className="text-center mt-32 px-6">
                    <h1 className="text-4xl font-display font-bold text-stone-900 mb-4">Post Not Found</h1>
                    <p className="text-stone-600 mb-8">The story you are looking for has been moved or doesn&apos;t exist.</p>
                    <Link href="/blog" className="px-5 sm:px-8 py-2.5 sm:py-3 text-[13px] sm:text-base whitespace-nowrap bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors">
                        Back to Blog Chronicles
                    </Link>
                </div>
            </main>
        );
    }

    const rawContent = post.content || "";
    const isPortableText = Array.isArray(rawContent);

    let contentPart1: any = "";
    let contentPart2: any = "";
    if (isPortableText) {
        const midPoint = Math.floor(rawContent.length / 2);
        contentPart1 = rawContent.slice(0, midPoint);
        contentPart2 = rawContent.slice(midPoint);
    } else {
        const contentStr = rawContent as string;
        const midPoint = Math.floor(contentStr.length / 2);
        let splitIndex = contentStr.indexOf("</p>", midPoint);
        if (splitIndex === -1) splitIndex = contentStr.lastIndexOf("</p>", midPoint);
        
        if (splitIndex !== -1) {
            contentPart1 = contentStr.substring(0, splitIndex + 4);
            contentPart2 = contentStr.substring(splitIndex + 4);
        } else {
            contentPart1 = contentStr;
            contentPart2 = "";
        }
    }

    const ptComponents: any = {
        block: {
            h1: ({ children }: any) => <h1 className="text-4xl font-display font-bold text-stone-900 leading-tight mt-8 mb-4">{children}</h1>,
            h2: ({ children }: any) => <h2>{children}</h2>,
            h3: ({ children }: any) => <h3>{children}</h3>,
            h4: ({ children }: any) => <h4>{children}</h4>,
            h5: ({ children }: any) => <h5>{children}</h5>,
            h6: ({ children }: any) => <h6>{children}</h6>,
            normal: ({ children }: any) => <p>{children}</p>,
            blockquote: ({ children }: any) => <blockquote>{children}</blockquote>,
        },
        types: {
            image: ({ value }: any) => {
                if (!value?.asset?._ref) return null;
                
                const imgElement = (
                    <img
                        alt={value.alt || ''}
                        loading="lazy"
                        src={urlFor(value).width(1200).auto('format').url()}
                        className={cn(
                            "rounded-3xl w-full object-cover max-h-[600px] transition-all duration-500",
                            value.link && "hover:shadow-xl hover:scale-[1.01] hover:brightness-95 cursor-pointer"
                        )}
                    />
                );

                return (
                    <figure>
                        {value.link ? (
                            <a href={value.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-3xl no-underline border-none">
                                {imgElement}
                            </a>
                        ) : imgElement}
                        {value.caption && (
                            <figcaption className="text-center text-sm text-stone-500 mt-4 italic font-light tracking-wide">{value.caption}</figcaption>
                        )}
                    </figure>
                );
            }
        },
        marks: {
            link: ({ children, value }: any) => (
                <a
                    href={value?.href}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {children}
                </a>
            ),
            strong: ({ children }: any) => <strong>{children}</strong>,
            em: ({ children }: any) => <em className="italic text-stone-700">{children}</em>,
        },
    };

    let sidebarLatest: any[] = [];
    let categorySamples: Record<string, string> = {};

    try {
        const sidebarQuery = `*[_type == "post" && slug.current != $slug] | order(publishedAt desc) [0...5]{
            title,
            "slug": slug.current,
            featuredImage,
            publishedAt,
            "category": coalesce(categoryRef->title, category)
        }`;
        const rawSidebarPosts = await client.fetch(sidebarQuery, { slug }, { next: { revalidate: 60 } });
        
        sidebarLatest = rawSidebarPosts.map((p: any) => ({
            title: decodeHtml(p.title),
            slug: `/blog/${p.slug}`,
            image: p.featuredImage ? urlFor(p.featuredImage).url() : '/gallery-1.jpg',
            date: p.publishedAt ? new Date(p.publishedAt).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}) : ''
        })).slice(0, 3);

        // Map categories to images from the most recent post in that category
        rawSidebarPosts.forEach((p: any) => {
            if (p.category && !categorySamples[p.category] && p.featuredImage) {
                categorySamples[p.category] = urlFor(p.featuredImage).url();
            }
        });
        
        // Ensure static data categories also get images if found in recent list
        categories.forEach(cat => {
            if (!categorySamples[cat]) {
                const staticPost = blogPosts.find(p => p.category === cat);
                if (staticPost) categorySamples[cat] = staticPost.image;
            }
        });

    } catch (e) {
        console.error("Error fetching sidebar data:", e);
        // Fallback to static sidebar items
        sidebarLatest = categories
            .filter(c => c !== "All" && c !== post?.category)
            .map(cat => {
                const latestPost = blogPosts.find(p => p.category === cat);
                return {
                    category: cat,
                    title: latestPost?.title,
                    image: latestPost?.image,
                    date: latestPost?.date,
                    slug: latestPost?.slug ? `/blog/${latestPost.slug}` : ''
                };
            })
            .filter(item => item.title)
            .slice(0, 3);
    }

    return (
        <main className="min-h-screen bg-[#FDFCF8] flex flex-col font-sans">
            <Navbar variant="light" />

            {/* Perfected Original Hero Section (April 6th Session) - Light Edition */}
            <section className="relative pt-36 pb-24 px-6 overflow-hidden min-h-[550px] flex items-center">
                {/* Background Effect: Restored Visibility with 'White Wash' effect */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        className="object-cover blur-[2px] opacity-[0.9] scale-105" 
                        priority 
                    />
                    {/* White gradient for Navbar and Title Readability, Bottom for Content Blend */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-[#FDFCF8]" />
                    <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/60 to-transparent" />
                </div>
                
                <div className="container relative z-10 mx-auto px-4 max-w-5xl">
                    <div className="flex flex-col items-start gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        {/* Back Button Pill - Light Theme */}
                        <Link 
                            href="/blog" 
                            className="inline-flex items-center px-6 py-3 bg-white/80 backdrop-blur-md hover:bg-stone-100 text-stone-600 rounded-full text-sm font-bold transition-all group shadow-sm border border-stone-200/50"
                        >
                            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                            Back to Chronicles
                        </Link>

                        <div className="flex flex-wrap items-center gap-4">
                            <span className="bg-[#3a6b1f] text-white px-5 py-2 rounded-lg text-xs font-bold shadow-md">
                                {post.category.toUpperCase()}
                            </span>
                            <div className="flex items-center gap-2.5 px-5 py-2.5 bg-stone-100/60 backdrop-blur-md rounded-full text-stone-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] shadow-sm border border-white/50">
                                <Calendar className="w-4 h-4 text-[#3a6b1f]" />
                                {post.date}
                            </div>
                            <div className="flex items-center gap-2.5 px-5 py-2.5 bg-stone-100/60 backdrop-blur-md rounded-full text-stone-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] shadow-sm border border-white/50">
                                <Clock className="w-4 h-4 text-[#3a6b1f]" />
                                {post.readTime || '17 MIN READ'}
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 leading-[1.15] drop-shadow-sm">
                            {post.title}
                        </h1>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-10 border-t border-stone-200/40 w-full mt-4">
                            <div className="flex items-center">
                                <div className="h-14 w-14 rounded-full overflow-hidden mr-5 ring-4 ring-white shadow-md">
                                    <Image src={post.authorImage} alt={post.author} width={56} height={56} className="object-cover h-full w-full" />
                                </div>
                                <div className="flex flex-col text-left">
                                    <span className="font-bold text-stone-900 text-lg leading-tight">{post.author}</span>
                                    <span className="text-xs text-stone-400 font-bold uppercase tracking-[0.3em] mt-1">Author</span>
                                </div>
                            </div>
                            
                            {/* Author Info */}
                        </div>
                    </div>
                </div>
            </section>

            <article className="flex-grow pt-16 pb-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        
                        {/* Main Content Area - RESTORED TO THE LEFT */}
                        <div className="lg:w-2/3">
                            <Link 
                                href="/blog" 
                                className="inline-flex items-center text-[#3a6b1f] hover:text-[#2d5218] mb-12 group transition-colors font-medium"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Blog Chronicles
                            </Link>

                            <div className="blog-content-wrapper max-w-none selection:bg-primary/10 mb-16">
                                <BlogContent>
                                    {isPortableText ? (
                                        <PortableText value={contentPart1} components={ptComponents} />
                                    ) : (
                                        <div dangerouslySetInnerHTML={{ __html: contentPart1 }} />
                                    )}
                                </BlogContent>
                            </div>

                            <ReturnNavigationCTA variant="default" category={post.category} className="my-16 shadow-md border-stone-100" />

                            <div className="blog-content-wrapper max-w-none selection:bg-primary/10 mt-16">
                                <BlogContent>
                                    {isPortableText ? (
                                        <PortableText value={contentPart2} components={ptComponents} />
                                    ) : (
                                        <div dangerouslySetInnerHTML={{ __html: contentPart2 }} />
                                    )}
                                </BlogContent>
                            </div>

                            <ReturnNavigationCTA variant="default" category={post.category} className="mt-16 mb-8" />

                            <div className="mt-20 pt-10 border-t border-stone-100">
                                <div className="flex flex-wrap gap-4 mb-10">
                                    <div className="flex items-center text-stone-400 font-bold mr-2 text-xs uppercase tracking-wider">
                                        <Tag className="w-4 h-4 mr-2" />
                                        Tags:
                                    </div>
                                    {post.tags.map((tag: string) => (
                                        <span key={tag} className="px-5 py-2 bg-stone-50 text-stone-500 rounded-full text-xs font-bold border border-stone-100 hover:bg-stone-100 transition-colors cursor-pointer">
                                            #{tag.toUpperCase()}
                                        </span>
                                    ))}
                                </div>
                                
                                    <div className="flex items-center gap-6 p-8 bg-stone-50 rounded-[2rem] border border-stone-100">
                                        <span className="text-xs font-bold text-stone-900 uppercase tracking-widest">Share on Social:</span>
                                        <div className="flex gap-4">
                                            <button className="w-12 h-12 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:bg-primary transition-all shadow-md hover:-translate-y-1"><Facebook className="w-5 h-5 fill-current" /></button>
                                            <button className="w-12 h-12 rounded-full bg-black flex items-center justify-center text-white hover:bg-primary transition-all shadow-md hover:-translate-y-1"><X className="w-5 h-5" /></button>
                                            <button className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:bg-primary transition-all shadow-md hover:-translate-y-1"><Linkedin className="w-5 h-5 fill-current" /></button>
                                        </div>
                                    </div>
                            </div>
                        </div>

                        {/* Sidebar - RESTORED TO THE RIGHT */}
                        <aside className="lg:w-1/3 self-stretch">
                            <div className="flex flex-col h-full border-l border-stone-100/50 pl-8">
                                {/* Top 50% Sticky Region */}
                                <div className="flex-1 relative min-h-[400px]">
                                    <div className="sticky top-32 space-y-10">
                                        <CouponBox />
                                        
                                        {/* Latest Stories - Dynamic from Sanity */}
                                        <div className="bg-stone-50 p-6 rounded-[2rem] border border-stone-100/80 shadow-sm">
                                            <h3 className="font-display font-bold text-xl text-stone-900 mb-6 flex items-center gap-2">
                                                <MessageSquare className="w-5 h-5 text-primary" />
                                                Latest Stories
                                            </h3>
                                            <div className="space-y-6">
                                                {sidebarLatest.map((item: any, idx: number) => (
                                                    <Link href={item.slug} key={idx} className="flex gap-4 group">
                                                        <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative border border-stone-200 shadow-sm">
                                                            {item.image && 
                                                                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                                            }
                                                        </div>
                                                        <div className="flex flex-col justify-center">
                                                            <h5 className="font-bold text-stone-900 text-sm leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">
                                                                {item.title}
                                                            </h5>
                                                            <span className="text-xs text-stone-500">{item.date}</span>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                            <Link href="/blog" className="mt-8 flex items-center justify-center w-full py-3 bg-white border border-stone-200 rounded-full text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-all duration-300 shadow-sm">
                                                View All Chronicles
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom 50% Sticky Region - Added separation */}
                                <div className="flex-1 relative min-h-[400px] mt-24">
                                    <div className="sticky top-32 space-y-10">
                                        {/* Quote Block - Compact */}
                                        <div className="bg-stone-900 text-stone-300 p-6 rounded-[2rem] relative overflow-hidden group shadow-lg">
                                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                                            <QuoteIcon className="w-8 h-8 text-white/10 mb-4" />
                                            <p className="font-serif italic text-base text-white mb-3 relative z-10 leading-relaxed">
                                                "Nature does not hurry, yet everything is accomplished."
                                            </p>
                                            <p className="text-[9px] uppercase font-bold tracking-[0.2em] text-[#D4AF37]">Lao Tzu</p>
                                        </div>

                                        {/* Explore Topics - Dynamic Images from Sanity */}
                                        <div className="bg-stone-50 p-6 rounded-[2rem] border border-stone-100/80 shadow-inner">
                                            <div className="flex items-center justify-between mb-6">
                                                <h4 className="font-display font-bold text-stone-900 text-lg">Explore Topics</h4>
                                                <Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-stone-900 transition-colors">View All</Link>
                                            </div>
                                            <div className="grid grid-cols-2 gap-3">
                                                {categories.filter(c => c !== "All" && c !== post?.category).slice(0, 4).map((cat, idx) => {
                                                    const catImage = categorySamples[cat];
                                                    return (
                                                        <Link href={`/blog#${encodeURIComponent(cat)}`} key={idx} className="relative block h-24 rounded-2xl overflow-hidden group border border-stone-200 shadow-sm hover:shadow-md transition-all">
                                                            <div className="relative h-full w-full">
                                                                {catImage &&
                                                                    <Image src={catImage} alt={cat} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                                                                }
                                                                <div className="absolute inset-0 bg-stone-900/40 group-hover:bg-stone-900/50 transition-colors"></div>
                                                            </div>

                                                            <div className="absolute inset-0 p-3 flex items-center justify-center text-center z-10">
                                                                <span className="text-xs font-bold uppercase tracking-widest text-white leading-tight drop-shadow-md">{cat}</span>
                                                            </div>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

const ReturnNavigationCTA = ({ category, variant = "default", className = "" }: { category: string, variant?: "default" | "slim", className?: string }) => {
    const isSlim = variant === "slim";

    return (
        <div className={cn(
            "bg-[#F9F8F6] relative overflow-hidden group border transition-all",
            isSlim 
                ? "p-4 px-6 rounded-xl border-stone-200/50 flex flex-col md:flex-row items-center justify-between gap-4" 
                : "p-10 rounded-[2.5rem] border-stone-200/60 flex flex-col md:flex-row items-center justify-between gap-8",
            className
        )}>
            <div className={cn(
                "absolute top-0 right-0 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors",
                isSlim ? "w-20 h-20" : "w-40 h-40"
            )}></div>

            <div className="relative z-10 flex-1">
                {category === "Local Sightseeing" && (
                    <>
                        <h4 className={cn("font-display font-medium text-stone-900", isSlim ? "text-base mb-0.5" : "text-2xl mb-2")}>Want to see more places?</h4>
                        <p className={cn("text-stone-500", isSlim ? "text-[11px]" : "text-sm")}>Discover the full map of breathtaking nearby destinations.</p>
                    </>
                )}
                {category === "Rural Activities" && (
                    <>
                        <h4 className={cn("font-display font-medium text-stone-900", isSlim ? "text-base mb-0.5" : "text-2xl mb-2")}>Craving more local experiences?</h4>
                        <p className={cn("text-stone-500", isSlim ? "text-[11px]" : "text-sm")}>See all the authentic activities you can partake in.</p>
                    </>
                )}
                {category === "Nature’s Calendar" && (
                    <>
                        <h4 className={cn("font-display font-medium text-stone-900", isSlim ? "text-base mb-0.5" : "text-2xl mb-2")}>Curious about our seasons?</h4>
                        <p className={cn("text-stone-500", isSlim ? "text-[11px]" : "text-sm")}>Learn the best times to visit for festivals and weather.</p>
                    </>
                )}
                {category === "Food & Culture" && (
                    <>
                        <h4 className={cn("font-display font-medium text-stone-900", isSlim ? "text-base mb-0.5" : "text-2xl mb-2")}>Hungry for more?</h4>
                        <p className={cn("text-stone-500", isSlim ? "text-[11px]" : "text-sm")}>Explore our organic dining philosophy and local savors.</p>
                    </>
                )}
                {!["Local Sightseeing", "Rural Activities", "Nature’s Calendar", "Food & Culture"].includes(category) && (
                    <>
                        <h4 className={cn("font-display font-medium text-stone-900", isSlim ? "text-base mb-0.5" : "text-2xl mb-2")}>Ready to experience our farm?</h4>
                        <p className={cn("text-stone-500", isSlim ? "text-[11px]" : "text-sm")}>Discover more about our farmstay and secure your booking.</p>
                    </>
                )}
            </div>

            <div className="relative z-10 whitespace-nowrap mt-4 md:mt-0">
                {category === "Local Sightseeing" && <Link href="/#things-to-do" className={cn("group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto", isSlim ? "px-4 py-2 text-[11px]" : "px-8 py-3.5 text-sm")}>Explore Places <ArrowRight className={isSlim ? "w-3.5 h-3.5" : "w-4 h-4"} /></Link>}
                {category === "Rural Activities" && <Link href="/#things-to-do" className={cn("group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto", isSlim ? "px-4 py-2 text-[11px]" : "px-8 py-3.5 text-sm")}>View Activities <ArrowRight className={isSlim ? "w-3.5 h-3.5" : "w-4 h-4"} /></Link>}
                {category === "Nature’s Calendar" && <Link href="/take-a-tour" className={cn("group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto", isSlim ? "px-4 py-2 text-[11px]" : "px-8 py-3.5 text-sm")}>Seasons & Festivals <ArrowRight className={isSlim ? "w-3.5 h-3.5" : "w-4 h-4"} /></Link>}
                {category === "Food & Culture" && <Link href="/take-a-tour" className={cn("group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto", isSlim ? "px-4 py-2 text-[11px]" : "px-8 py-3.5 text-sm")}>Local Savor <ArrowRight className={isSlim ? "w-3.5 h-3.5" : "w-4 h-4"} /></Link>}
                {!["Local Sightseeing", "Rural Activities", "Nature’s Calendar", "Food & Culture"].includes(category) && <Link href="/#things-to-do" className={cn("group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-semibold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto", isSlim ? "px-4 py-2 text-[11px]" : "px-8 py-3.5 text-sm")}>Explore More <ArrowRight className={isSlim ? "w-3.5 h-3.5" : "w-4 h-4"} /></Link>}
            </div>
        </div>
    );
};
