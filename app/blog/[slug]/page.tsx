import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, MessageSquare, Quote, ArrowRight } from "lucide-react";
import TextToSpeech from "@/components/TextToSpeech";
import CouponBox from "@/components/CouponBox";
import { getPostBySlug, blogPosts, categories, BlogPost } from "@/lib/blogData";
import { client, urlFor } from "@/lib/sanity";
import { PortableText } from "@portabletext/react";
import BlogContent from "@/components/BlogContent";

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
        const sanityPosts = await client.fetch(query);
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
            category,
            publishedAt,
            readTime,
            author->{ name, image },
            "tags": tags
        }`;
        
        const sanityPost = await client.fetch(query, { slug });

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
                authorImage: sanityPost.author?.image ? urlFor(sanityPost.author.image).url() : '/host-home-new.jpg',
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
    let plainTextForSpeech = "";

    if (isPortableText) {
        const midPoint = Math.floor(rawContent.length / 2);
        contentPart1 = rawContent.slice(0, midPoint);
        contentPart2 = rawContent.slice(midPoint);
        plainTextForSpeech = rawContent
            .map((block: any) => block.children?.map((child: any) => child.text).join('') || '')
            .join(' ');
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
        
        plainTextForSpeech = contentStr.replace(/<[^>]+>/g, ' ');
    }

    const ptComponents: any = {
        types: {
            image: ({ value }: any) => {
                if (!value?.asset?._ref) return null;
                return (
                    <figure className="my-10">
                        <img
                            alt={value.alt || ''}
                            loading="lazy"
                            src={urlFor(value).width(900).auto('format').url()}
                            className="rounded-3xl shadow-md w-full object-cover max-h-[520px]"
                        />
                        {value.caption && (
                            <figcaption className="text-center text-sm text-stone-400 mt-3 italic">{value.caption}</figcaption>
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
                    className="text-[#3a6b1f] font-semibold underline underline-offset-2 hover:text-[#2d5218] transition-colors"
                >
                    {children}
                </a>
            ),
            strong: ({ children }: any) => <strong className="font-semibold text-stone-900">{children}</strong>,
            em: ({ children }: any) => <em className="italic text-stone-700">{children}</em>,
        },
    };

    const sidebarItems = categories
        .filter(c => c !== "All" && c !== post?.category)
        .map(cat => {
            const latestPost = blogPosts.find(p => p.category === cat);
            return {
                category: cat,
                latestTitle: latestPost?.title,
                image: latestPost?.image,
                date: latestPost?.date,
                postSlug: latestPost?.slug ? `/blog/${latestPost.slug}` : ''
            };
        })
        .filter(item => item.latestTitle)
        .slice(0, 4);

    return (
        <main className="min-h-screen bg-[#FDFCF8] flex flex-col font-sans">
            <Navbar variant="light" />

            <article className="flex-grow pt-32 pb-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="flex flex-col lg:flex-row gap-16">
                        {/* Main Content Area */}
                        <div className="lg:w-2/3">
                            <Link 
                                href="/blog" 
                                className="inline-flex items-center text-[#3a6b1f] hover:text-[#2d5218] mb-8 group transition-colors font-medium"
                            >
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Back to Blog
                            </Link>

                            <header className="mb-12">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="bg-[#3a6b1f]/10 text-[#3a6b1f] px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase">
                                        {post.category}
                                    </span>
                                    <span className="text-stone-500 text-sm font-medium flex items-center">
                                        <Calendar className="w-4 h-4 mr-2 opacity-70" />
                                        {post.date}
                                    </span>
                                </div>

                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-stone-900 mb-8 leading-[1.15]">
                                    {post.title}
                                </h1>

                                <div className="flex items-center justify-between py-6 border-y border-stone-200">
                                    <div className="flex items-center">
                                        <div className="h-12 w-12 rounded-full overflow-hidden mr-4 ring-2 ring-[#3a6b1f]/20">
                                            <Image 
                                                src={post.authorImage} 
                                                alt={post.author} 
                                                width={48} 
                                                height={48} 
                                                className="object-cover h-full w-full"
                                            />
                                        </div>
                                        <div>
                                            <div className="font-bold text-stone-900">{post.author}</div>
                                            <div className="text-[#3a6b1f] text-xs uppercase font-bold">{post.authorRole}</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <TextToSpeech htmlContent={post.excerpt + " " + plainTextForSpeech} />
                                    </div>
                                </div>
                            </header>

                            <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
                                <Image 
                                    src={post.image} 
                                    alt={post.title} 
                                    width={1200} 
                                    height={630} 
                                    className="w-full aspect-video object-cover"
                                    priority
                                />
                            </div>

                            <div className="blog-content prose prose-stone prose-lg max-w-none text-stone-600 leading-relaxed md:prose-xl">
                                {isPortableText ? (
                                    <PortableText value={contentPart1} components={ptComponents} />
                                ) : (
                                    <BlogContent html={contentPart1} />
                                )}

                                <ReturnNavigationCTA category={post.category} className="my-10" />

                                {isPortableText ? (
                                    <PortableText value={contentPart2} components={ptComponents} />
                                ) : (
                                    <BlogContent html={contentPart2} />
                                )}
                            </div>

                            <ReturnNavigationCTA category={post.category} className="mt-12 mb-8" />

                            <div className="mt-16 pt-8 border-t border-stone-200">
                                <div className="flex flex-wrap gap-3">
                                    <div className="flex items-center text-stone-500 font-bold mr-2">
                                        <Tag className="w-4 h-4 mr-2" />
                                        Topics:
                                    </div>
                                    {post.tags.map((tag: string) => (
                                        <span key={tag} className="px-4 py-1.5 bg-stone-100 text-stone-600 rounded-full text-sm font-medium">
                                            #{tag}
                                        </span>
                                    ))}
                                </div>
                                
                                <div className="mt-8 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-bold text-stone-900">Share:</span>
                                        <button className="w-9 h-9 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-[#3a6b1f] hover:text-white transition-all"><Facebook className="w-4 h-4" /></button>
                                        <button className="w-9 h-9 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-[#3a6b1f] hover:text-white transition-all"><Twitter className="w-4 h-4" /></button>
                                        <button className="w-9 h-9 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 hover:bg-[#3a6b1f] hover:text-white transition-all"><Linkedin className="w-4 h-4" /></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="lg:w-1/3 space-y-12">
                            <CouponBox />
                            
                            <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100">
                                <h3 className="font-display font-bold text-xl text-stone-900 mb-6 flex items-center gap-2">
                                    <MessageSquare className="w-5 h-5 text-[#3a6b1f]" />
                                    More to Explore
                                </h3>
                                <div className="space-y-6">
                                    {sidebarItems.map((item, idx) => (
                                        <Link href={item.postSlug} key={idx} className="flex gap-4 group">
                                            <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 relative">
                                                {item.image && 
                                                    <Image src={item.image} alt={item.latestTitle!} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                                                }
                                            </div>
                                            <div className="flex flex-col justify-center">
                                                <h4 className="font-bold text-sm text-stone-900 group-hover:text-[#3a6b1f] transition-colors line-clamp-2 leading-tight mb-1">
                                                    {item.latestTitle}
                                                </h4>
                                                <span className="text-[11px] text-stone-400 uppercase tracking-wider font-bold">{item.date}</span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                <Link href="/blog" className="mt-8 flex items-center justify-center w-full py-3 bg-white border border-stone-200 rounded-full text-stone-900 font-bold hover:bg-stone-900 hover:text-white transition-all duration-300">
                                    View All Chronicles
                                </Link>
                            </div>

                            <div className="bg-stone-900 text-stone-300 p-8 rounded-[2rem] relative overflow-hidden group">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-colors"></div>
                                <Quote className="w-10 h-10 text-white/10 mb-6" />
                                <p className="font-serif italic text-lg text-white mb-4 relative z-10">
                                    "Nature does not hurry, yet everything is accomplished."
                                </p>
                                <p className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#D4AF37]">Lao Tzu</p>
                            </div>
                        </aside>
                    </div>
                </div>
            </article>

            <Footer />
        </main>
    );
}

const ReturnNavigationCTA = ({ category, className = "" }: { category: string, className?: string }) => {
    return (
        <div className={`bg-[#F9F8F6] p-6 rounded-3xl border border-stone-200/60 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group ${className}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#3a6b1f]/5 rounded-full blur-2xl group-hover:bg-[#3a6b1f]/10 transition-colors"></div>

            <div className="relative z-10 flex-1">
                {category === "Local Sightseeing" && (
                    <>
                        <h4 className="font-display font-medium text-lg text-stone-900 mb-1">Want to see more places?</h4>
                        <p className="text-stone-600 text-sm">Discover the full map of breathtaking nearby destinations.</p>
                    </>
                )}
                {category === "Rural Activities" && (
                    <>
                        <h4 className="font-display font-medium text-lg text-stone-900 mb-1">Craving more local experiences?</h4>
                        <p className="text-stone-600 text-sm">See all the authentic activities you can partake in.</p>
                    </>
                )}
                {category === "Nature’s Calendar" && (
                    <>
                        <h4 className="font-display font-medium text-lg text-stone-900 mb-1">Curious about our seasons?</h4>
                        <p className="text-stone-600 text-sm">Learn the best times to visit for festivals and weather.</p>
                    </>
                )}
                {category === "Food & Culture" && (
                    <>
                        <h4 className="font-display font-medium text-lg text-stone-900 mb-1">Hungry for more?</h4>
                        <p className="text-stone-600 text-sm">Explore our organic dining philosophy and local savors.</p>
                    </>
                )}
                {!["Local Sightseeing", "Rural Activities", "Nature’s Calendar", "Food & Culture"].includes(category) && (
                    <>
                        <h4 className="font-display font-medium text-lg text-stone-900 mb-1">Ready to experience this firsthand?</h4>
                        <p className="text-stone-600 text-sm">Discover more about our farmstay and secure your booking for a true Kerala experience.</p>
                    </>
                )}
            </div>

            <div className="relative z-10 whitespace-nowrap mt-6 md:mt-0">
                {category === "Local Sightseeing" && <Link href="/#things-to-do" className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-900 !no-underline rounded-full font-bold hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">Explore Places <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
                {category === "Rural Activities" && <Link href="/#things-to-do" className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-900 !no-underline rounded-full font-bold hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">View Activities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
                {category === "Nature’s Calendar" && <Link href="/take-a-tour" className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-900 !no-underline rounded-full font-bold hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">Seasons & Festivals <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
                {category === "Food & Culture" && <Link href="/take-a-tour" className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-900 !no-underline rounded-full font-bold hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">Local Savor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
                {!["Local Sightseeing", "Rural Activities", "Nature’s Calendar", "Food & Culture"].includes(category) && <Link href="/#things-to-do" className="group inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-900 !no-underline rounded-full font-bold hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">View All Experiences <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
            </div>
        </div>
    );
};
