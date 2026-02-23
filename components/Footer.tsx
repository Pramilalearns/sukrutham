import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 py-16" id="footer">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="relative block h-16 w-48 md:h-24 md:w-64 mb-2 mt-4">
                            <Image
                                src="/logo/logo.png"
                                alt="Sukrutham Farmstay"
                                fill
                                className="object-contain object-left scale-[1.35] origin-left"
                            />
                        </Link>
                        <p className="text-sm leading-relaxed">
                            An authentic experience of Kerala hospitality while absorbing the delightful beauty of God&apos;s Own Country.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-accent transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-accent transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Quick Links</h4>
                        <ul className="space-y-2 text-sm">
                            <li><Link href="/" className="hover:text-accent transition-colors">Home</Link></li>
                            <li><Link href="#rooms" className="hover:text-accent transition-colors">Rooms</Link></li>
                            <li><Link href="#activities" className="hover:text-accent transition-colors">Activities</Link></li>
                            <li><Link href="/our-story" className="hover:text-accent transition-colors">About Us</Link></li>
                            <li><Link href="/blog" className="hover:text-accent transition-colors">Blog</Link></li>
                            <li><Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Contact Us</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-accent shrink-0" />
                                <span>Sukrutham Farmstay, Thrissur, Kerala, India</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-accent shrink-0" />
                                <span>info@sukruthamfarmstay.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold text-white">Newsletter</h4>
                        <p className="text-sm">Subscribe to get special offers and updates.</p>
                        <form className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="bg-stone-800 border border-stone-700 rounded px-4 py-2 text-sm focus:outline-none focus:border-primary text-white"
                            />
                            <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded text-sm font-semibold transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-stone-800 mt-12 pt-8 text-center text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Sukrutham Farmstay. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
