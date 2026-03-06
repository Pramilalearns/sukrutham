"use client";

import { useState } from "react";
import {
    Trees, Utensils, ChefHat, Droplet, Accessibility,
    Wifi, Sun, Laptop, Signal,
    PawPrint, Compass, Activity, Bike, Library,
    UserCheck, MapPin, Car,
    Flower2, Sprout, Leaf
} from "lucide-react";

const amenityGroups = [
    {
        title: "Comfort & Living",
        items: [
            {
                icon: <Trees className="w-5 h-5 text-primary" />,
                title: "Verdant Views",
                description: "Traditional rooms looking out over green paddy fields."
            },
            {
                icon: <Utensils className="w-5 h-5 text-primary" />,
                title: "Authentic Kerala Food",
                description: "Fresh veg and non-veg meals made with local ingredients."
            },
            {
                icon: <ChefHat className="w-5 h-5 text-primary" />,
                title: "Guest Kitchen",
                description: "A fully equipped kitchen for those who prefer to cook."
            },
            {
                icon: <Droplet className="w-5 h-5 text-primary" />,
                title: "Fresh Well Water",
                description: "Enjoy the novelty of sweet, fresh water from our well."
            },
            {
                icon: <Accessibility className="w-5 h-5 text-primary" />,
                title: "Specially Abled Friendly",
                description: "User-friendly premises designed for all guests."
            }
        ]
    },
    {
        title: "Work & Connectivity",
        items: [
            {
                icon: <Wifi className="w-5 h-5 text-primary" />,
                title: "Fibre-Optic Wi-Fi",
                description: "High-speed internet for a smooth staycation."
            },
            {
                icon: <Sun className="w-5 h-5 text-primary" />,
                title: "Uninterrupted Power",
                description: "Solar power backup to keep you connected 24/7."
            },
            {
                icon: <Laptop className="w-5 h-5 text-primary" />,
                title: "Ideal for WFH",
                description: "A quiet, peaceful environment perfect for remote work."
            },
            {
                icon: <Signal className="w-5 h-5 text-primary" />,
                title: "Mobile Network",
                description: "Reliable Airtel coverage across the property."
            }
        ]
    },
    {
        title: "The Farm Experience",
        items: [
            {
                icon: <PawPrint className="w-5 h-5 text-primary" />,
                title: "Pet Friendly",
                description: "Large open spaces for your pets to run and play."
            },
            {
                icon: <Compass className="w-5 h-5 text-primary" />,
                title: "Off the Beaten Track",
                description: "A quiet experience away from crowded tourist spots."
            },
            {
                icon: <Activity className="w-5 h-5 text-primary" />,
                title: "Local Fun",
                description: "Pottery making, bird watching, and visits to nearby waterfalls."
            },
            {
                icon: <Bike className="w-5 h-5 text-primary" />,
                title: "Free Bicycles",
                description: "Complimentary cycles to explore the local village."
            },
            {
                icon: <Library className="w-5 h-5 text-primary" />,
                title: "Small Library",
                description: "A nice collection of books for a relaxing afternoon."
            }
        ]
    },
    {
        title: "Easy Access",
        items: [
            {
                icon: <UserCheck className="w-5 h-5 text-primary" />,
                title: "Host Knowledge",
                description: "A friendly host who knows all the best local hidden gems."
            },
            {
                icon: <MapPin className="w-5 h-5 text-primary" />,
                title: "Easy Access",
                description: "We are easy to reach by air, road, or rail."
            },
            {
                icon: <Car className="w-5 h-5 text-primary" />,
                title: "Car Parking",
                description: "Safe on-site parking for up to 3 cars."
            }
        ]
    },
    {
        title: "Wellness",
        items: [
            {
                icon: <Flower2 className="w-5 h-5 text-primary" />,
                title: "Ayurvedic Massage",
                description: "Rejuvenating traditional massage treatments on request."
            },
            {
                icon: <Sprout className="w-5 h-5 text-primary" />,
                title: "Meditation Spaces",
                description: "Quiet, dedicated spots for peaceful reflection and yoga."
            },
            {
                icon: <Leaf className="w-5 h-5 text-primary" />,
                title: "Organic Garden",
                description: "Serene garden walks surrounded by fresh, home-grown produce."
            }
        ]
    }
];

export default function Amenities() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="pt-12 pb-6 bg-white relative" id="amenities">
            <div className="absolute inset-0 bg-pattern-dots text-stone-200 mask-gradient-b"></div>
            <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto mb-10 px-6 md:px-12 lg:px-20">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Amenities</span>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-stone-800">
                        18+ Thoughtful Onsite Amenities
                    </h2>
                    <p className="text-stone-600 text-lg leading-relaxed">
                        From modern comforts to authentic farm experiences, we’ve thought of everything.
                    </p>
                </div>

                {/* Mobile: Simple Select Dropdown or just stack them? 
                    Let's use a scrolling tab list for mobile friendly UX */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {amenityGroups.map((group, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === index
                                ? "bg-primary text-white border-primary shadow-lg scale-105"
                                : "bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100 hover:border-stone-300"
                                }`}
                        >
                            {group.title}
                        </button>
                    ))}
                </div>

                {/* Content Area */}
                <div className="min-h-[300px] transition-all duration-500 ease-in-out">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 content-start">
                        {amenityGroups[activeTab].items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 p-5 rounded-xl bg-stone-50/50 border border-stone-100 hover:border-primary/20 hover:bg-white hover:shadow-sm transition-all duration-300 animate-in fade-in slide-in-from-bottom-2 duration-500 will-change-transform"
                                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
                            >
                                <div className="shrink-0 p-3 bg-primary/10 rounded-full text-primary">
                                    {item.icon}
                                </div>
                                <div className="mt-1">
                                    <h3 className="font-bold text-stone-800 text-base mb-1">{item.title}</h3>
                                    <p className="text-stone-500 text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
