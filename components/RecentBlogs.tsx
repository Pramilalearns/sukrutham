import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { client, urlFor } from "@/lib/sanity";

const decodeHtml = (str: string) => {
    if (!str) return '';
    return str
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&amp;/g, '&')
        .replace(/&quot;/g, '"')
        .replace(/&#8216;/g, '\u2018')
        .replace(/&#8217;/g, '\u2019')
        .replace(/&#8220;/g, '\u201C')
        .replace(/&#8221;/g, '\u201D')
        .replace(/&#8230;/g, '\u2026')
        .replace(/&#\d+;/g, '')
        .replace(/&[a-z]+;/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<\/?[^>]+(>|$)/g, '')
        .replace(/\[\/?[\w_-]+[^\]]*\]/g, '')
        .replace(/\s+/g, ' ')
        .trim();
};

export default async function RecentBlogs() {
    let recentPosts: any[] = [];
    
    try {
        const data = await client.fetch(`
            *[_type == "post"] | order(publishedAt desc)[0...3] {
                title,
                slug,
                excerpt,
                featuredImage,
                "category": coalesce(categoryRef->title, category),
                publishedAt
            }
        `, {}, { next: { revalidate: 60 } });

        recentPosts = data.map((post: any) => ({
            title: decodeHtml(post.title),
            slug: post.slug?.current || '',
            excerpt: decodeHtml(post.excerpt),
            image: post.featuredImage ? urlFor(post.featuredImage).url() : '/images/gallery/gallery-1.jpg',
            date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}) : '',
            category: decodeHtml(post.category || 'Uncategorized'),
        }));
    } catch (error) {
        console.error("Error fetching recent posts:", error);
    }

    if (recentPosts.length === 0) return null;

    return (
        <section className="py-16 md:py-24 bg-white border-t border-stone-100">
            <div className="container mx-auto px-6 md:px-12 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-3 block">From the Journal</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900">
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
                    {recentPosts.map((post, index) => (
                        <Link
                            key={index}
                            href={`/blog/${post.slug}`}
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
    );
}
