import { client, urlFor } from "@/lib/sanity";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogList from "@/components/BlogList";
import { categories } from "@/lib/blogData";

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

const decodeHtml = (str: string) => {
    if (!str) return '';
    return str
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/<script[\s\S]*?<\/script>/gi, '')
        .replace(/<style[\s\S]*?<\/style>/gi, '')
        .replace(/<[^>]+>/g, '')
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

export default async function BlogPage() {
    let posts: any[] = [];
    
    try {
        const data = await client.fetch(`
            *[_type == "post"] | order(publishedAt desc){
                title,
                slug,
                excerpt,
                featuredImage,
                category,
                publishedAt,
                readTime,
                author->{
                    name,
                    image
                }
            }
        `);

        posts = data.map((post: any) => ({
            title: decodeHtml(post.title),
            slug: post.slug,
            excerpt: decodeHtml(post.excerpt),
            image: post.featuredImage ? urlFor(post.featuredImage).url() : '/gallery-1.jpg',
            date: post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', {month: 'long', day: 'numeric', year: 'numeric'}) : '',
            author: decodeHtml(post.author?.name || 'Sukrutham Team'),
            authorRole: 'Author',
            authorImage: post.author?.image ? urlFor(post.author.image).url() : '/host-home-new.jpg',
            category: decodeHtml(post.category || 'Uncategorized'),
            readTime: post.readTime || '5 min read'
        }));
    } catch (error) {
        console.error("Error fetching posts on server:", error);
    }

    return (
        <main className="min-h-screen bg-[#FDFCF8] selection:bg-primary/20 selection:text-primary-dark font-sans flex flex-col relative">
            <Navbar variant="light" />

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-3/4 h-[500px] bg-gradient-to-bl from-primary/10 via-amber-100/20 text-transparent to-transparent rounded-bl-full -z-10 blur-3xl opacity-60"></div>
                <div className="absolute -left-20 top-40 w-[400px] h-[400px] bg-secondary/5 rounded-full -z-10 blur-3xl opacity-70"></div>

                <div className="container mx-auto max-w-7xl text-center mb-8 animate-in fade-in slide-in-from-bottom-8 duration-700">
                    <span className="inline-block py-1 px-3 rounded-full bg-[#3a6b1f]/10 text-stone-800 text-xs font-bold tracking-widest uppercase mb-4 md:mb-6">
                        The Sukrutham Chronicles
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-stone-900 mb-4 md:mb-6 leading-tight">
                        Sukrutham Stories: <br />
                        <span className="italic text-[#3a6b1f] font-light">Tales from the Farm</span>
                    </h1>
                    <p className="text-base md:text-lg lg:text-xl text-stone-600 font-light leading-relaxed max-w-3xl mx-auto">
                        A curated journal of organic farm life, heritage architecture, local flavors, and the simple joys of slow living at Sukrutham.
                    </p>
                </div>
            </section>

            {/* --- Blog List (Client Side Interactive) --- */}
            <BlogList 
                initialPosts={posts} 
                categories={categories} 
                categoryTextData={categoryTextData} 
            />

            <Footer />
        </main>
    );
}
