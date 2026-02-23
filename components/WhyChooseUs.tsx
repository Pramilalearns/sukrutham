import { HeartHandshake, Mountain, Coffee, Leaf, Sparkles } from "lucide-react";

const reasons = [
    {
        icon: <HeartHandshake className="w-10 h-10 text-primary" />,
        title: "Authentic Hospitality",
        description: "Experience warmth and genuine care, treating every guest as family."
    },
    {
        icon: <Mountain className="w-10 h-10 text-primary" />,
        title: "Idyllic Setting",
        description: "Best views of paddy fields, coconut palms, and bird calls in a peaceful environment."
    },
    {
        icon: <Coffee className="w-10 h-10 text-primary" />,
        title: "Relax & Enjoy",
        description: "Incredible amenities and personal service for a completely hassle-free stay."
    },
    {
        icon: <Leaf className="w-10 h-10 text-primary" />,
        title: "Sustainable Tourism",
        description: "Supporting responsible tourism practices to preserve Kerala's rich heritage."
    },
    {
        icon: <Sparkles className="w-10 h-10 text-primary" />,
        title: "Memorable Experiences",
        description: "A treasure trove of culture, tradition, and nature that leaves a lasting impression."
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-stone-50" id="why-us">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Why Us</span>
                            <h2 className="text-4xl md:text-5xl font-display font-bold mt-2 mb-6 text-stone-800">
                                A Sanctuary for the Soul
                            </h2>
                            <p className="text-lg text-stone-600 leading-relaxed">
                                Sukrutham Farmstay is more than just a place to stay; it&apos;s an emotion.
                                Whether you seek solitude, adventure, or culture, we offer the perfect blend.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {reasons.map((reason, index) => (
                                <div key={index} className="flex gap-4 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm border border-stone-100 group-hover:scale-110 transition-transform">
                                        {reason.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-stone-800 mb-1">{reason.title}</h3>
                                        <p className="text-stone-600 text-sm">{reason.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative h-[600px] rounded-full overflow-hidden border-8 border-white shadow-2xl hidden lg:block">
                        {/* Abstract/Nature video or image could go here, using a calm nature image for now */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{
                                backgroundImage: "url('https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&q=80')",
                            }}
                        />
                        <div className="absolute inset-0 bg-black/10" />
                    </div>
                </div>
            </div>
        </section>
    );
}
