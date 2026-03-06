import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarCheck, Info } from "lucide-react";

export default function Rooms() {
    const rooms = [
        {
            title: "Traditional Style",
            description: "Large, airy rooms built with classic Kerala woodwork. Feels like a traditional homestay with modern privacy.",
            // Traditional Kerala Farm House
            image: "/room-bedroom.png",
        },
        {
            title: "Modern Essentials",
            description: "Clean, comfortable beds with attached modern bathrooms. 24/7 hot water and fast Wi-Fi included.",
            // Traditional Kerala House Exterior
            image: "/room-view-modern.png",
        },
        {
            title: "Nature at Your Window",
            description: "Large windows looking out over green paddy fields. Wake up to birdsong in a peaceful setting.",
            // Farm House in Nature
            image: "/room-view-2.png",
        },
    ];

    return (
        <section className="pt-6 pb-12 bg-white" id="rooms">
            <div className="container mx-auto px-8 md:px-20 lg:px-32 flex flex-col justify-center">
                {/* Header - Compact */}
                <div className="text-center max-w-4xl mx-auto mb-10">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Stay</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-4 mt-2 leading-tight">
                        A Relaxing Farmstay in Kerala
                    </h2>
                    <p className="text-base text-stone-600 leading-relaxed max-w-3xl mx-auto">
                        A quiet homestay in Thrissur offering a real farmhouse experience with modern comforts.
                    </p>
                </div>

                {/* Content Grid - Compact */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {rooms.map((room, index) => (
                        <div key={index} className="group cursor-pointer">
                            {/* Image Container */}
                            <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-4 shadow-md">
                                <Image
                                    src={room.image}
                                    alt={room.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>

                            {/* Content */}
                            <h3 className="text-xl font-display font-bold text-stone-800 mb-2 group-hover:text-primary transition-colors">
                                {room.title}
                            </h3>
                            <p className="text-sm text-stone-600 leading-relaxed">
                                {room.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom CTAs */}
                <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        href="/book"
                        className="px-8 py-3 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all shadow-md hover:shadow-lg flex items-center gap-2"
                    >
                        <CalendarCheck className="w-4 h-4" />
                        Book Room
                    </Link>
                    <Link
                        href="/rooms"
                        className="px-8 py-3 bg-white text-stone-800 border-2 border-primary/20 hover:border-primary rounded-full font-semibold hover:bg-stone-50 transition-all flex items-center gap-2"
                    >
                        <Info className="w-4 h-4" />
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}
