import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Home, ArrowRight, Compass } from "lucide-react";
import Image from "next/image";

export default function ThankYouPage() {
    return (
        <main className="min-h-screen bg-stone-50 selection:bg-primary/20 selection:text-primary-dark flex flex-col">
            <Navbar variant="transparent" />

            {/* Background & Overlay */}
            <div className="absolute inset-0 z-0 h-[60vh] min-h-[500px]">
                <Image
                    src="/images/farm-stay/my-farm.jpg"
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
                    <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-green-100 shadow-inner">
                        <CheckCircle2 className="w-12 h-12 text-green-500 animate-in zoom-in duration-500 delay-200" />
                    </div>

                    <h1 className="text-4xl md:text-5xl font-display font-bold text-stone-900 mb-6 tracking-tight">
                        Thank You!
                    </h1>
                    
                    <p className="text-lg md:text-xl text-stone-600 font-light leading-relaxed mb-10 max-w-lg mx-auto">
                        Your submission has been successfully received. We will be in touch with you shortly. In the meantime, discover more of what Sukrutham has to offer!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white hover:bg-primary-dark rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-lg group"
                        >
                            <Home className="w-5 h-5 flex-shrink-0 group-hover:-translate-x-1 transition-transform" />
                            Back to Home
                        </Link>
                        
                        <Link
                            href="/experience/activities"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-stone-100 text-stone-800 hover:bg-stone-200 rounded-full font-bold transition-all hover:-translate-y-1 hover:shadow-lg group"
                        >
                            <Compass className="w-5 h-5 flex-shrink-0" />
                            Explore Activities
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
