import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag, Share2, Facebook, Twitter, Linkedin, MessageSquare, Quote, ArrowRight } from "lucide-react";
import TextToSpeech from "@/components/TextToSpeech";
import CouponBox from "@/components/CouponBox";
import { getPostBySlug, blogPosts, categories } from "@/lib/blogData";

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPostBySlug(slug);

    if (!post) {
        return (
            <main className="min-h-screen bg-[#FDFCF8] flex flex-col items-center justify-center font-sans">
                <Navbar variant="light" />
                <div className="text-center mt-32 px-6">
                    <h1 className="text-4xl font-display font-bold text-stone-900 mb-4">Post Not Found</h1>
                    <p className="text-stone-600 mb-8">The story you are looking for has been moved or doesn&apos;t exist.</p>
                    <Link href="/blog" className="px-8 py-3 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors">
                        Back to Chronicles
                    </Link>
                </div>
            </main>
        );
    }

    const content = post.content || "";
    const midPoint = Math.floor(content.length / 2);
    let splitIndex = content.indexOf("</p>", midPoint);
    if (splitIndex === -1) splitIndex = content.lastIndexOf("</p>", midPoint);
    if (splitIndex !== -1) splitIndex += 4;
    else splitIndex = midPoint; // Fallback

    const contentPart1 = content.substring(0, splitIndex);
    const contentPart2 = content.substring(splitIndex);

    // Sidebar: Latest post from each category (excluding current post's category and "All")
    const sidebarItems = categories
        .filter(c => c !== "All" && c !== post.category)
        .map(cat => {
            const latestPost = blogPosts.find(p => p.category === cat);
            return {
                category: cat,
                latestTitle: latestPost?.title,
                image: latestPost?.image,
                date: latestPost?.date,
                categorySlug: `/blog#${encodeURIComponent(cat)}`,
                postSlug: latestPost ? `/blog/${latestPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}` : ''
            };
        })
        .filter(item => item.latestTitle) // must have a valid post
        .slice(0, 4); // show up to 4 to avoid too much clutter

    // Quick copy to clipboard for the coupon (moved to CouponBox component)

    return (
        <main className="min-h-screen bg-[#FDFCF8] selection:bg-primary/20 selection:text-primary-dark font-sans flex flex-col">
            <Navbar variant="transparent" />

            {/* --- Hero Image Header --- */}
            <section className="relative pt-24 md:pt-32 pb-16">
                <div className="absolute inset-0 z-0">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Darkened top gradient to match transparent white-text Navbar */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#FDFCF8] via-[#FDFCF8]/90 to-black/70 backdrop-blur-[2px]"></div>
                </div>

                <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-20 max-w-6xl mt-12">
                    <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-stone-600 hover:text-stone-900 mb-8 transition-colors bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-stone-200/50">
                        <ArrowLeft className="w-4 h-4" /> Back to Chronicles
                    </Link>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-600 uppercase tracking-widest mb-6">
                        <span className="bg-primary text-white px-3 py-1.5 rounded-full">{post.category}</span>
                        <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-display font-medium text-stone-900 mb-8 leading-[1.1] max-w-4xl drop-shadow-sm">
                        {post.title}
                    </h1>

                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full max-w-4xl">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                                <Image src={post.authorImage} alt={post.author} width={56} height={56} className="object-cover h-full w-full" />
                            </div>
                            <div>
                                <p className="font-bold text-stone-900 text-lg">{post.author}</p>
                                <p className="text-sm text-stone-600">{post.authorRole}</p>
                            </div>
                        </div>

                        <TextToSpeech htmlContent={post.excerpt + " " + post.content} />
                    </div>
                </div>
            </section>

            {/* --- Main Content & Sidebar --- */}
            <section className="py-12 px-6 md:px-12 lg:px-20">
                <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row gap-16">

                    {/* Left Column: Blog Content */}
                    <div className="lg:w-2/3">
                        {/* The actual HTML content rendered via dangerouslySetInnerHTML to simulate rich text from a CMS */}
                        <article className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
                            <div
                                className="[&>h3]:text-3xl [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-stone-900 [&>h3]:mt-12 [&>h3]:mb-6
                                    [&>p]:text-stone-600 [&>p]:font-light [&>p]:leading-relaxed [&>p]:mb-8 [&>p]:text-lg
                                    [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:bg-primary/5 [&>blockquote]:py-4 [&>blockquote]:px-8 [&>blockquote]:rounded-r-2xl [&>blockquote]:font-serif [&>blockquote]:text-stone-700 [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:my-10
                                    [&>img]:rounded-3xl [&>img]:shadow-md [&>img]:my-10 [&>img]:w-full [&>img]:object-cover [&>img]:max-h-[500px]"
                                dangerouslySetInnerHTML={{ __html: contentPart1 }}
                            />

                            {contentPart2 && (
                                <ReturnNavigationCTA category={post.category} className="my-10" />
                            )}

                            <div
                                className="[&>h3]:text-3xl [&>h3]:font-display [&>h3]:font-bold [&>h3]:text-stone-900 [&>h3]:mt-12 [&>h3]:mb-6
                                    [&>p]:text-stone-600 [&>p]:font-light [&>p]:leading-relaxed [&>p]:mb-8 [&>p]:text-lg
                                    [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:bg-primary/5 [&>blockquote]:py-4 [&>blockquote]:px-8 [&>blockquote]:rounded-r-2xl [&>blockquote]:font-serif [&>blockquote]:text-stone-700 [&>blockquote]:text-xl [&>blockquote]:italic [&>blockquote]:my-10
                                    [&>img]:rounded-3xl [&>img]:shadow-md [&>img]:my-10 [&>img]:w-full [&>img]:object-cover [&>img]:max-h-[500px]"
                                dangerouslySetInnerHTML={{ __html: contentPart2 }}
                            />
                        </article>

                        {/* End of article return CTA block */}
                        <ReturnNavigationCTA category={post.category} className="mt-12 mb-8" />

                        {/* Tags */}
                        <div className="mt-12 pt-8 border-t border-stone-200 flex flex-wrap items-center gap-2">
                            <Tag className="w-5 h-5 text-stone-400 mr-2" />
                            {post.tags.map(tag => (
                                <span key={tag} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-full text-sm hover:bg-stone-200 cursor-pointer transition-colors">
                                    #{tag}
                                </span>
                            ))}
                        </div>

                        {/* Share Links */}
                        <div className="mt-8 flex items-center gap-4">
                            <span className="font-medium text-stone-900">Share this story:</span>
                            <button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-primary hover:text-white transition-all"><Facebook className="w-4 h-4" /></button>
                            <button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-primary hover:text-white transition-all"><Twitter className="w-4 h-4" /></button>
                            <button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-primary hover:text-white transition-all"><Linkedin className="w-4 h-4" /></button>
                            <button className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-primary hover:text-white transition-all"><Share2 className="w-4 h-4" /></button>
                        </div>

                        {/* Comments Section */}
                        <div className="mt-16 pt-12 border-t border-stone-200">
                            <div className="flex items-center gap-3 mb-8">
                                <MessageSquare className="w-6 h-6 text-stone-900" />
                                <h3 className="text-2xl font-display font-medium text-stone-900">Join the Conversation</h3>
                            </div>

                            <form className="space-y-6 bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                    <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20" />
                                </div>
                                <textarea placeholder="Share your thoughts..." rows={5} className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"></textarea>
                                <button type="button" className="px-8 py-3 bg-stone-900 text-white rounded-full font-bold hover:bg-stone-800 transition-colors">
                                    Post Comment
                                </button>
                            </form>
                        </div>

                        {/* (Return Navigation removed from here, now placed directly after article content) */}
                    </div>

                    {/* Right Column: Lively Sidebar */}
                    <aside className="lg:w-1/3 space-y-10 sticky top-32 h-fit">

                        {/* 1. Coupon Code Block */}
                        <CouponBox />

                        {/* 2. Slow Living Quote */}
                        <div className="bg-stone-900 text-stone-300 p-8 rounded-[2rem] shadow-xl relative mt-8">
                            <Quote className="w-10 h-10 text-stone-700 absolute top-6 right-6 opacity-30 rotate-180" />
                            <p className="font-serif italic text-lg leading-relaxed text-white relative z-10 mb-4">
                                &quot;Nature does not hurry, yet everything is accomplished.&quot;
                            </p>
                            <p className="text-xs tracking-widest uppercase font-semibold text-stone-500">— Lao Tzu</p>
                        </div>

                        {/* 3. Promotional Banner */}
                        <div className="relative h-[300px] rounded-[2rem] overflow-hidden group">
                            <Image src="/gallery-1.jpg" alt="Book your stay" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                            <div className="absolute inset-0 p-8 flex flex-col items-center justify-center text-center text-white">
                                <h4 className="font-display text-2xl mb-4">Experience the <br /> authentic Kerala.</h4>
                                <Link href="#" className="px-6 py-2.5 bg-white text-stone-900 rounded-full font-bold text-sm hover:bg-primary hover:text-white transition-all">
                                    Book Your Stay
                                </Link>
                            </div>
                        </div>

                        {/* 4. More Stories */}
                        <div className="bg-white p-8 rounded-[2rem] border border-stone-100 shadow-sm mt-8">
                            <h4 className="font-display font-bold text-stone-900 text-xl mb-6">More Stories</h4>
                            <div className="space-y-6">
                                {sidebarItems.map((item, idx) => (
                                    <Link href={item.postSlug} key={idx} className="flex gap-4 group">
                                        <div className="w-20 h-20 relative rounded-xl overflow-hidden flex-shrink-0">
                                            {item.image &&
                                                <Image src={item.image} alt={item.latestTitle!} fill className="object-cover transition-transform group-hover:scale-110" />
                                            }
                                        </div>
                                        <div className="flex flex-col justify-center">
                                            <h5 className="font-bold text-stone-900 text-sm leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-2">{item.latestTitle}</h5>
                                            <span className="text-xs text-stone-500">{item.date}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* 5. Explore Topics */}
                        <div className="bg-stone-50 p-6 rounded-[2rem] border border-stone-100/80 shadow-inner mt-8">
                            <div className="flex items-center justify-between mb-6">
                                <h4 className="font-display font-bold text-stone-900 text-lg">Explore Topics</h4>
                                <Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-[#D4AF37] hover:text-stone-900 transition-colors">View All</Link>
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                {categories.filter(c => c !== "All" && c !== post.category).slice(0, 4).map((cat, idx) => {
                                    const catPost = blogPosts.find(p => p.category === cat);
                                    if (!catPost) return null;
                                    return (
                                        <Link href={`/blog#${encodeURIComponent(cat)}`} key={idx} className="relative block h-24 rounded-2xl overflow-hidden group border border-stone-200 shadow-sm hover:shadow-md transition-all">
                                            <div className="relative h-full w-full">
                                                {catPost.image &&
                                                    <Image src={catPost.image} alt={cat} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
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

                    </aside>
                </div>
            </section>

            <Footer />
        </main>
    );
}

const ReturnNavigationCTA = ({ category, className = "" }: { category: string, className?: string }) => {
    return (
        <div className={`bg-[#F9F8F6] p-8 rounded-3xl border border-stone-200/60 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group ${className}`}>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors"></div>

            <div className="relative z-10 flex-1">
                {category === "Local Sightseeing" && (
                    <>
                        <h4 className="font-display font-medium text-xl text-stone-900 mb-2">Want to see more places?</h4>
                        <p className="text-stone-600 text-sm">Discover the full map of breathtaking nearby destinations.</p>
                    </>
                )}
                {category === "Rural Activities" && (
                    <>
                        <h4 className="font-display font-medium text-xl text-stone-900 mb-2">Craving more local experiences?</h4>
                        <p className="text-stone-600 text-sm">See all the authentic activities you can partake in.</p>
                    </>
                )}
                {category === "Nature’s Calendar" && (
                    <>
                        <h4 className="font-display font-medium text-xl text-stone-900 mb-2">Curious about our seasons?</h4>
                        <p className="text-stone-600 text-sm">Learn the best times to visit for festivals and weather.</p>
                    </>
                )}
                {category === "Food & Culture" && (
                    <>
                        <h4 className="font-display font-medium text-xl text-stone-900 mb-2">Hungry for more?</h4>
                        <p className="text-stone-600 text-sm">Explore our organic dining philosophy and local savors.</p>
                    </>
                )}
                {!["Local Sightseeing", "Rural Activities", "Nature’s Calendar", "Food & Culture"].includes(category) && (
                    <>
                        <h4 className="font-display font-medium text-xl text-stone-900 mb-2">Ready to experience this firsthand?</h4>
                        <p className="text-stone-600 text-sm">Discover more about our farmstay and secure your booking.</p>
                    </>
                )}
            </div>

            <div className="relative z-10 whitespace-nowrap mt-6 md:mt-0">
                {category === "Local Sightseeing" && <Link href="/#things-to-do" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">Explore Places <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
                {category === "Rural Activities" && <Link href="/#things-to-do" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">View Activities <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
                {category === "Nature’s Calendar" && <Link href="/take-a-tour" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">Seasons & Festivals <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
                {category === "Food & Culture" && <Link href="/take-a-tour" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">Local Savor <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
                {!["Local Sightseeing", "Rural Activities", "Nature’s Calendar", "Food & Culture"].includes(category) && <Link href="/#things-to-do" className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-white to-[#F4E3BA] text-stone-700 rounded-full font-medium hover:bg-gradient-to-r hover:from-white hover:to-[#EBD49A] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 w-full md:w-auto">View All Experiences <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></Link>}
            </div>
        </div>
    );
};
