import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=2070&auto=format&fit=crop')",
                }}
            >
                <div className="absolute inset-0 bg-black/40" />
            </div>

            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <ScrollAnimation animation="fade-up">
                    <span className="block text-sm md:text-base font-semibold tracking-widest uppercase mb-4 text-accent/90">
                        Farmstay in Kerala
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight drop-shadow-lg">
                        Experience Authentic <br />
                        <span className="text-accent">Farm Life in the Heart of Kerala</span>
                    </h1>
                    <p className="text-lg md:text-xl text-stone-200 mb-8 max-w-2xl mx-auto leading-relaxed">
                        Set amidst lush green paddy fields, waterfalls, and hills.
                        Sukrutham Farmstay is a world away from the hustle of typical tourist spots.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href="#book"
                            className="group bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            Book Your Stay
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link
                            href="#activities"
                            className="px-8 py-3.5 rounded-full font-semibold text-white border border-white/30 hover:bg-white/10 transition-all backdrop-blur-sm"
                        >
                            Explore Experiences
                        </Link>
                    </div>
                </ScrollAnimation>
            </div>

            {/* Scroll Indicator */}
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-current rounded-full animate-scroll-down" />
                </div>
            </div>
        </section>
    );
}
