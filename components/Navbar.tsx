"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavbarProps {
    variant?: "transparent" | "light"; // transparent = white text initially, light = dark text initially
}

const Navbar = ({ variant = "transparent" }: NavbarProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const experienceLinks = [
        { name: "Activities", href: "/#activities" },
        { name: "Places to Explore", href: "/experience/places-to-explore" },
        { name: "Local Savor", href: "/#activities" }, // Placeholder
        { name: "Seasons & Festivals", href: "/#activities" }, // Placeholder
        { name: "Itineraries", href: "/experience/itineraries" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out font-sans",
                scrolled
                    ? "bg-stone-50/90 backdrop-blur-md shadow-sm py-[9px]" // Reduced scrolled padding
                    : "bg-transparent py-[9px]" // Reduced transparent padding
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between md:justify-start">
                {/* Logo */}
                <Link href="/" className="relative h-16 w-48 md:h-[88px] md:w-64 flex-shrink-0 z-50">
                    <Image
                        src="/logo/logo.png"
                        alt="Sukrutham Farmstay"
                        fill
                        className="object-contain object-left md:object-center scale-[1.35] origin-left md:origin-center"
                        priority
                    />
                </Link>

                {/* Desktop Nav - Centered */}
                <div className="hidden md:flex flex-1 items-center justify-center space-x-8">
                    <Link
                        href="/our-story"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-accent",
                            scrolled || variant === "light" ? "text-stone-700" : "text-stone-200"
                        )}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/rooms"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-accent",
                            scrolled || variant === "light" ? "text-stone-700" : "text-stone-200"
                        )}
                    >
                        The Rooms
                    </Link>
                    <Link
                        href="/take-a-tour"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-accent",
                            scrolled || variant === "light" ? "text-stone-700" : "text-stone-200"
                        )}
                    >
                        Take a Tour
                    </Link>

                    {/* Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className={cn(
                                "flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent focus:outline-none",
                                scrolled || variant === "light" ? "text-stone-700" : "text-stone-200"
                            )}
                        >
                            Experience <ChevronDown className="w-4 h-4" />
                        </button>

                        {dropdownOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white rounded-lg shadow-xl border border-stone-100 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                <div className="py-2">
                                    {experienceLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className="block px-4 py-2.5 text-sm text-stone-600 hover:bg-stone-50 hover:text-primary transition-colors"
                                            onClick={() => setDropdownOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/#testimonials"
                        className={cn(
                            "text-sm font-medium transition-colors hover:text-accent",
                            scrolled || variant === "light" ? "text-stone-700" : "text-stone-200"
                        )}
                    >
                        Our Customers
                    </Link>
                </div>

                {/* Right Side Actions */}
                <div className="hidden md:flex items-center space-x-6 flex-shrink-0 z-50">
                    {/* Contact Number */}
                    <a
                        href="tel:+919940668754"
                        className={cn(
                            "flex items-center gap-2 text-sm font-bold transition-colors hover:text-accent",
                            scrolled || variant === "light" ? "text-stone-700" : "text-stone-200"
                        )}
                    >
                        <Phone className="w-4 h-4" />
                        <span>+91 99406 68754</span>
                    </a>

                    <Link
                        href="/#book"
                        className={cn(
                            "px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all hover:shadow-lg active:scale-95 uppercase",
                            scrolled || variant === "light"
                                ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                                : "bg-white text-primary hover:bg-stone-100 shadow-lg"
                        )}
                    >
                        Book Now
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 ml-auto"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? (
                        <X className={scrolled || variant === "light" ? "text-stone-800" : "text-white"} />
                    ) : (
                        <Menu className={scrolled || variant === "light" ? "text-stone-800" : "text-white"} />
                    )}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-stone-50 border-t border-stone-100 shadow-xl p-6 flex flex-col space-y-4 animate-in slide-in-from-top-5 h-screen overflow-y-auto pb-20">
                    <Link
                        href="/our-story"
                        className="text-stone-600 hover:text-primary font-medium text-lg border-b border-stone-100 pb-2"
                        onClick={() => setIsOpen(false)}
                    >
                        About Us
                    </Link>
                    <Link
                        href="/rooms"
                        className="text-stone-600 hover:text-primary font-medium text-lg border-b border-stone-100 pb-2"
                        onClick={() => setIsOpen(false)}
                    >
                        The Rooms
                    </Link>
                    <Link
                        href="/take-a-tour"
                        className="text-stone-600 hover:text-primary font-medium text-lg border-b border-stone-100 pb-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Take a Tour
                    </Link>

                    <div className="space-y-2">
                        <div className="text-stone-400 text-sm font-semibold uppercase tracking-wider">Experience</div>
                        {experienceLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block pl-4 text-stone-600 hover:text-primary font-medium text-base py-1"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/#testimonials"
                        className="text-stone-600 hover:text-primary font-medium text-lg border-b border-stone-100 pb-2"
                        onClick={() => setIsOpen(false)}
                    >
                        Our Customers
                    </Link>

                    {/* Mobile Contact */}
                    <a
                        href="tel:+919940668754"
                        className="flex items-center gap-2 text-stone-800 font-bold text-lg pt-2"
                    >
                        <Phone className="w-5 h-5 text-primary" />
                        <span>+91 99406 68754</span>
                    </a>

                    <Link
                        href="/#book"
                        className="w-full text-center bg-primary text-white py-4 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-md mt-4"
                        onClick={() => setIsOpen(false)}
                    >
                        BOOK NOW
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
