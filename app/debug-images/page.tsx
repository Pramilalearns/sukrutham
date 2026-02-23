"use client";

import Image from "next/image";

const allImages = [
    // s-series
    "s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg",
    "s7.jpg", "s8.jpg", "s9.jpg", "s10.jpg", "s11.jpg", "s12.jpg",

    // new-series
    "new1.jpg", "new2.jpg", "new3.jpg", "new4.jpg", "new5.jpg",
    "new10.jpeg", "new11.jpeg", "new12.jpeg",

    // farm-stay series
    "farm-stay1.jpg", "farm-stay2.jpg", "farm-stay3.jpg", "farm-stay4.jpg",

    // n-series
    "n1.jpg", "n2.jpg", "n3.jpg", "n4.jpg",

    // tour series
    "tour-1.jpg", "tour-2.jpg", "tour-3.jpg", "tour-4.jpg", "tour-5.jpg",
    "tour-6.jpg", "tour-7.jpg", "tour-8.jpg", "tour-9.jpg", "tour-10.jpg",

    // Numbered
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg",
    "10.jpg", "11.jpg", "12.jpg",
    "20.jpg", "21.jpg", "22.jpg", "23.jpg", "24.jpg", "25.jpg", "26.jpg",

    // Named
    "pottery.png", "festival.png", "sightseeing-v2.png", "kerala-food-v2.png"
];

export default function DebugImages() {
    return (
        <div className="p-10 bg-white min-h-screen">
            <h1 className="text-3xl font-bold mb-10 text-center">Image filename Debugger</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {allImages.map((src) => (
                    <div key={src} className="border p-2 rounded flex flex-col items-center">
                        <div className="relative w-full h-40 mb-2">
                            <Image
                                src={`/${src}`}
                                alt={src}
                                fill
                                className="object-cover rounded"
                            />
                        </div>
                        <p className="text-xs font-mono bg-gray-100 p-1 rounded">{src}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
