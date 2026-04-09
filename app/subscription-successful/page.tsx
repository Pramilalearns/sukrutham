import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { MailCheck, Home, ArrowRight, BookOpen } from "lucide-react";
import Image from "next/image";

export default function SubscriptionSuccessfulPage() {
    return (
        <main className="min-h-screen bg-stone-50 selection:bg-primary/20 selection:text-primary-dark flex flex-col">
            <Navbar variant="transparent" />

            {/* Background & Overlay */}
            <div className="absolute inset-0 z-0 h-[60vh] min-h-[500px]">
                <Image
                    src="/my-farm.jpg"
                    alt="Sukrutham Farmstay"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 bg-gradient-to-b from-primary/70 to-stone-50" />
            </div>

            {/* Content */}
            <section className="relative z-10 flex-grow flex items-center justify-center pt-32 pb-24 px-6">
                <div className="bg-white p-10 md:p-16 rounded-[2.5rem] shadow-2xl border border-stone-100 max-w-2xl w-full text-center animate-in fade-in slide-in-from-bottom-8 duration-700">
                    
                    {/* Success Icon */}
                    <div className="w-24 h-24 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-emerald-100 shadow-inner">
                        <MailCheck className="w-12 h-12 text-emerald-500 animate-in zoom-in duration-500 delay-200" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6 tracking-tight">
                        You're on the list!
                    </h1>
                    
                    <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-10 max-w-lg mx-auto">
                        Thank you for subscribing to the Sukrutham newsletter. We can't wait to share our latest stories, updates, and exclusive farmstay offers with you.
                    </p>

                    <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 mb-10">
                        <h3 className="text-stone-900 font-medium mb-2">Can't wait for our first email?</h3>
                        <p className="text-stone-500 text-sm">
                            Dive into our curated stories about nature, village life, and travel right now.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/blog"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary-dark rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-lg group"
                        >
                            <BookOpen className="w-5 h-5 flex-shrink-0" />
                            Read Our Blog
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                        
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-100 text-stone-800 hover:bg-stone-200 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-lg group"
                        >
                            <Home className="w-5 h-5 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
