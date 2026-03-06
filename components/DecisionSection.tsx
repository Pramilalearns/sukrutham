"use client";

import {
    Heart,
    BookOpen,
    Laptop,
    Users,
    Mountain,
    Building,
    Flower2,
    Trophy,
    PawPrint,
    Sprout,
    ArrowRight
} from "lucide-react";

const decisions = [
    {
        title: "A Romantic Escape",
        description: "Reconnect in a sanctuary of privacy, heritage, and starlit dinners.",
        icon: Heart,
    },
    {
        title: "The Gift of Solitude",
        description: "A quiet corner for the solo traveler to read, reflect, and recharge in nature.",
        icon: BookOpen,
    },
    {
        title: "A Workcation with a View",
        description: "High-speed productivity meeting low-speed living—where your \"office\" is a breezy verandah.",
        icon: Laptop,
    },
    {
        title: "Memorable Family Milestones",
        description: "A safe, sprawling space for children to explore and families to bond.",
        icon: Users,
    },
    {
        title: "Adventure & Exploration",
        description: "A basecamp for trekking hidden trails and discovering the offbeat secrets of Thrissur.",
        icon: Mountain,
    },
    {
        title: "A Scenic & Architectural Journey",
        description: "For the lover of Kerala’s heritage, mud-plastered walls, and lush green vistas.",
        icon: Building,
    },
    {
        title: "A Spiritual Retreat",
        description: "A peaceful haven for those embarking on a religious tour of the nearby temples and shrines.",
        icon: Flower2,
    },
    {
        title: "Team Celebrations",
        description: "The perfect \"Thank You\" for your team—a place to unwind and celebrate success away from the boardroom.",
        icon: Trophy,
    },
    {
        title: "Paws & Paths",
        description: "A pet-friendly paradise where your four-legged friends have as much room to roam as you do.",
        icon: PawPrint,
    },
    {
        title: "Farm-to-Table immersion",
        description: "For the foodies who want to see their ingredients growing in our one-acre organic orchard.",
        icon: Sprout,
    }
];

export default function DecisionSection() {
    return (
        <section className="py-20 bg-stone-50 relative overflow-hidden" id="decision">
            {/* Subtle background decoration */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent skew-x-12 -z-0"></div>

            <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
                {/* Clean, Focused Header using exact text */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <span className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 block">
                        Your Reason
                    </span>
                    <h2 className="text-3xl md:text-5xl font-display font-medium text-stone-900 leading-tight mb-4">
                        Still wondering if Sukrutham is the right choice for you?
                    </h2>
                    <p className="text-xl md:text-2xl text-primary font-medium italic font-serif">
                        What are you looking for?
                    </p>
                </div>

                {/* Highly Compact & Structured 5-Column Grid to fit one screen cleanly */}
                {/* We use an interconnected feeling 'bento grid' instead of scattered blocks */}
                <div className="bg-white rounded-[2rem] shadow-xl shadow-stone-200/50 border border-stone-100 p-2 sm:p-4 md:p-6 mb-10 overflow-hidden">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
                        {decisions.map((item, index) => {
                            const Icon = item.icon;
                            // Add a very subtle gradient color difference to make the grid pop and not feel boring
                            const isOdd = index % 2 !== 0;

                            return (
                                <div
                                    key={index}
                                    className={`group flex flex-col p-6 rounded-2xl transition-all duration-300 ease-out border ${isOdd
                                        ? "bg-[#FCFBF8] border-stone-100/50 hover:bg-stone-50"
                                        : "bg-white border-white hover:border-stone-100"
                                        } hover:shadow-lg hover:-translate-y-2`}
                                >
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-5">
                                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                    <h3 className="text-lg font-bold text-stone-900 group-hover:text-primary transition-colors leading-snug mb-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-stone-500 text-sm leading-relaxed font-light">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* The Closer: Text & Button */}
                <div className="max-w-4xl mx-auto pt-8">
                    <div className="text-center flex flex-col items-center justify-center gap-10">
                        <p className="text-2xl md:text-3xl lg:text-4xl font-display font-medium text-stone-900 leading-tight max-w-3xl">
                            If you answered <span className="text-primary font-bold italic">"Yes"</span> to even one of these, Sukrutham Farmstay isn&apos;t just an option—<span className="bg-[#facc15]/30 px-2 py-0.5 rounded-sm">it&apos;s your ideal destination.</span>
                        </p>

                        <a
                            href="/book"
                            className="group relative z-10 inline-flex items-center gap-3 bg-stone-900 hover:bg-stone-800 text-white text-lg font-semibold px-10 py-5 rounded-full transition-all shadow-xl hover:-translate-y-1"
                        >
                            <span>Book Your Experience</span>
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                <ArrowRight className="w-4 h-4 text-white" />
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}
