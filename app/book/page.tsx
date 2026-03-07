"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimation from "@/components/ScrollAnimation";
import {
    MapPin,
    Phone,
    Mail,
    User,
    CheckCircle2,
    CalendarDays,
    Plane,
    Train,
    Car
} from "lucide-react";

const countriesList = [
    "Afghanistan", "Albania", "Algeria", "Andorra", "Angola",
    "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
    "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados",
    "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
    "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
    "Burkina Faso", "Burundi", "Côte d'Ivoire", "Cabo Verde", "Cambodia",
    "Cameroon", "Canada", "Central African Republic", "Chad", "Chile",
    "China", "Colombia", "Comoros", "Congo", "Costa Rica", "Croatia",
    "Cuba", "Cyprus", "Czechia", "Democratic Republic of the Congo",
    "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador",
    "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia",
    "Eswatini", "Ethiopia", "Fiji", "Finland", "France", "Gabon",
    "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada",
    "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Holy See",
    "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran",
    "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan",
    "Kazakhstan", "Kenya", "Kiribati", "Kuwait", "Kyrgyzstan", "Laos",
    "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein",
    "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia",
    "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania",
    "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
    "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru",
    "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger",
    "Nigeria", "North Korea", "North Macedonia", "Norway", "Oman",
    "Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea",
    "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Qatar",
    "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
    "Saint Vincent and the Grenadines", "Samoa", "San Marino",
    "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
    "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia",
    "Solomon Islands", "Somalia", "South Africa", "South Korea",
    "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden",
    "Switzerland", "Syria", "Tajikistan", "Tanzania", "Thailand",
    "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia",
    "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
    "United Arab Emirates", "United Kingdom", "United States of America",
    "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam",
    "Yemen", "Zambia", "Zimbabwe"
];

export default function BookPage() {
    // Form state
    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [securityAnswer, setSecurityAnswer] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [checkInDate, setCheckInDate] = useState("");
    const today = new Date().toISOString().split('T')[0];

    // Generate math puzzle on mount
    useEffect(() => {
        setNum1(Math.floor(Math.random() * 10) + 1);
        setNum2(Math.floor(Math.random() * 10) + 1);
    }, []);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simple security check
        if (parseInt(securityAnswer) !== num1 + num2) {
            alert("Security code is incorrect. Please try again.");
            return;
        }

        setIsSubmitting(true);
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch("https://formsubmit.co/ajax/sukruthamfarmstay@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    _subject: `New Booking Request from ${data.Name || 'Website'}`,
                    _template: "table",
                    ...data
                })
            });

            if (response.ok) {
                setIsSubmitted(true);
                setTimeout(() => setIsSubmitted(false), 8000); // Reset after 8s
                e.currentTarget.reset();
                setSecurityAnswer("");
                setCheckInDate("");
            } else {
                alert("Something went wrong with the submission. Please try again or contact the host directly.");
            }
        } catch (error) {
            console.error(error);
            alert("Failed to submit request. Please reach out via WhatsApp or Email.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-stone-50 selection:bg-primary/20 selection:text-primary-dark">
            <Navbar variant="transparent" />

            {/* Page Header as Hero Image */}
            <div className="relative pt-32 pb-24 text-center px-4 overflow-hidden mb-12">
                <div
                    className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/my-farm.jpg')",
                    }}
                >
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 drop-shadow-lg">
                        Book Your Experience
                    </h1>
                    <p className="text-lg md:text-xl text-stone-200 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
                        Reserve your sanctuary at Sukrutham Farmstay. Fill out the form below and our host will get back to you shortly to confirm your stay.
                    </p>
                </div>
            </div>

            <section className="py-12 md:py-20 container mx-auto px-6 md:px-12 lg:px-20 max-w-[1400px]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Booking Form (7 cols) */}
                    <div className="lg:col-span-7">
                        <ScrollAnimation>
                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-stone-100">
                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-stone-100">
                                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                                        <CalendarDays className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl md:text-3xl font-display font-bold text-stone-900">
                                            Reservation Request
                                        </h2>
                                        <p className="text-stone-500 text-sm mt-1">All fields marked with * are mandatory.</p>
                                    </div>
                                </div>

                                {isSubmitted ? (
                                    <div className="py-16 text-center flex flex-col items-center justify-center animate-in fade-in duration-500">
                                        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-stone-900 mb-3">Request Sent Successfully!</h3>
                                        <p className="text-stone-600 max-w-md mx-auto">
                                            Thank you for choosing Sukrutham Farmstay. Host Murali will contact you shortly to confirm the details of your stay.
                                        </p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                                            {/* Title */}
                                            <div className="md:col-span-1 space-y-2">
                                                <label className="text-sm font-bold text-stone-700">Title*</label>
                                                <select name="Title" required className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none">
                                                    <option value="">Select...</option>
                                                    <option value="Mr">Mr.</option>
                                                    <option value="Mrs">Mrs.</option>
                                                    <option value="Ms">Ms.</option>
                                                </select>
                                            </div>

                                            {/* Name */}
                                            <div className="md:col-span-3 space-y-2">
                                                <label className="text-sm font-bold text-stone-700">Name*</label>
                                                <input type="text" name="Name" required placeholder="Enter your full name" className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-stone-400" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Email */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-stone-700">Email Id*</label>
                                                <input type="email" name="Email" required placeholder="john@example.com" className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-stone-400" />
                                            </div>

                                            {/* Contact Number */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-stone-700">Contact Number*</label>
                                                <input type="tel" name="Phone" required placeholder="+91 9940668754" className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-stone-400" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6">
                                            {/* Adults */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-stone-700">No of Adults</label>
                                                <input type="number" name="Adults" min="1" defaultValue="1" className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                            </div>

                                            {/* Kids */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-stone-700">No of Kids</label>
                                                <input type="number" name="Kids" min="0" defaultValue="0" className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Check-in */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-stone-700">Check-in (date)*</label>
                                                <input
                                                    type="date"
                                                    name="Check-in"
                                                    required
                                                    min={today}
                                                    value={checkInDate}
                                                    onChange={(e) => setCheckInDate(e.target.value)}
                                                    className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                />
                                            </div>

                                            {/* Check-out */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-stone-700">Check-out (date)*</label>
                                                <input
                                                    type="date"
                                                    name="Check-out"
                                                    required
                                                    min={checkInDate || today}
                                                    className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Country */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-stone-700">Country / Region of Residence*</label>
                                                <input
                                                    type="text"
                                                    name="Country"
                                                    required
                                                    list="countries"
                                                    placeholder="e.g. India, United Kingdom"
                                                    className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-stone-400"
                                                />
                                                <datalist id="countries">
                                                    {countriesList.map((country) => (
                                                        <option key={country} value={country} />
                                                    ))}
                                                </datalist>
                                            </div>

                                            {/* Property/Room Selection */}
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-stone-700">Property / Room*</label>
                                                <select name="Room" required className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all appearance-none cursor-pointer">
                                                    <option value="">Select Room Option...</option>
                                                    <option value="PADDY ROOM">THE PADDY ROOM</option>
                                                    <option value="TAPIOCA ROOM">THE TAPIOCA ROOM</option>
                                                    <option value="PEPPER ROOM">THE PEPPER ROOM</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-stone-700">Message (Special Requests)</label>
                                            <textarea name="Message" rows={4} placeholder="Let us know if you have any special requirements, dietary restrictions, or arrival details..." className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-stone-400 resize-none"></textarea>
                                        </div>

                                        {/* Coupon */}
                                        <div className="space-y-2 md:w-1/2">
                                            <label className="text-sm font-bold text-stone-700">Coupon Code</label>
                                            <input type="text" name="Coupon Code" placeholder="Enter code if applicable" className="w-full bg-stone-50 border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-stone-400 uppercase" />
                                        </div>

                                        {/* T&C */}
                                        <div className="pt-2">
                                            <label className="flex items-start gap-3 cursor-pointer group">
                                                <div className="relative flex items-center mt-1">
                                                    <input type="checkbox" required className="peer sr-only" />
                                                    <div className="w-5 h-5 bg-stone-50 border-2 border-stone-300 rounded peer-checked:bg-primary peer-checked:border-primary transition-colors flex items-center justify-center">
                                                        <svg className="w-3 h-3 text-white scale-0 peer-checked:scale-100 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <span className="text-sm text-stone-600 leading-relaxed group-hover:text-stone-900 transition-colors">
                                                    I agree to the Privacy statement. By submitting this form, I agree to the Terms & Conditions.
                                                </span>
                                            </label>
                                        </div>

                                        {/* Security Puzzle */}
                                        <div className="bg-stone-50 p-6 rounded-xl border border-stone-200 space-y-3">
                                            <label className="text-sm font-bold text-stone-800 flex items-center gap-2">
                                                Security Code*
                                                <span className="text-xs font-normal text-stone-500">(To verify human)</span>
                                            </label>
                                            <div className="flex items-center gap-4">
                                                <div className="bg-white px-4 py-3 rounded-lg border border-stone-200 font-mono font-bold text-lg text-stone-700 shadow-sm shrink-0">
                                                    {num1} + {num2} = ?
                                                </div>
                                                <input
                                                    type="number"
                                                    required
                                                    placeholder="Answer"
                                                    value={securityAnswer}
                                                    onChange={(e) => setSecurityAnswer(e.target.value)}
                                                    className="w-full max-w-[150px] bg-white border border-stone-200 text-stone-700 px-4 py-3 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all placeholder:text-stone-400 font-mono text-lg"
                                                />
                                            </div>
                                        </div>

                                        {/* Submit */}
                                        <div className="pt-4">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full md:w-auto bg-primary hover:bg-primary-dark text-white text-lg font-bold px-12 py-4 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-3"
                                            >
                                                {isSubmitting ? "Sending Request..." : "Submit Request"}
                                            </button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Right Column: Contact & Info (5 cols) */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Host Contact Block */}
                        <ScrollAnimation delay={100}>
                            <div className="bg-emerald-900 text-white p-8 md:p-10 rounded-[2rem] shadow-xl relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-[50px] rounded-full group-hover:bg-amber-500/30 transition-colors duration-500"></div>

                                <div className="flex items-center gap-4 mb-6 relative z-10">
                                    <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                                        <User className="w-6 h-6 text-amber-400" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-display font-bold">Get in Touch</h3>
                                        <p className="text-stone-400 text-sm">with K P Murali, your host</p>
                                    </div>
                                </div>

                                <p className="text-stone-300 leading-relaxed mb-8 relative z-10">
                                    For further assistance, special requests, or group bookings, please don't hesitate to reach out directly.
                                </p>

                                <div className="space-y-5 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white/5 rounded-lg text-amber-400"><Phone className="w-5 h-5" /></div>
                                        <div>
                                            <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Call / WhatsApp</p>
                                            <a href="tel:+919940668754" className="text-lg font-bold hover:text-accent transition-colors">+91 99406 68754</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 bg-white/5 rounded-lg text-amber-400"><Mail className="w-5 h-5" /></div>
                                        <div>
                                            <p className="text-xs text-stone-400 uppercase tracking-wider mb-1">Email</p>
                                            <a href="mailto:sukruthamfarmstay@gmail.com" className="text-lg font-bold hover:text-accent transition-colors">sukruthamfarmstay@gmail.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Location Details Block */}
                        <ScrollAnimation delay={200}>
                            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100">
                                <h3 className="text-xl font-bold text-stone-900 flex items-center gap-3 mb-6">
                                    <MapPin className="w-5 h-5 text-primary" />
                                    Location Address
                                </h3>
                                <div className="text-stone-600 leading-relaxed bg-stone-50 p-5 rounded-xl border border-stone-100 mb-6 font-medium">
                                    <p>9/397 B, Sukrutham Farmstay,</p>
                                    <p>Kuttetan Road, Ambalapad,</p>
                                    <p>Kerala 680028, India</p>
                                </div>

                                {/* Map Embed */}
                                <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-stone-200 outline-none">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.3846610006283!2d76.2751673758362!3d10.608945489529322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7e7c8bf9a5fcd%3A0xecff67cc57484e4f!2sSukrutham%20Farmstay%20in%20Thrissur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1709550000000!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Sukrutham Farmstay Location Map"
                                    ></iframe>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Directions Block */}
                        <ScrollAnimation delay={300}>
                            <div className="bg-white p-8 rounded-[2rem] shadow-xl border border-stone-100">
                                <h3 className="text-xl font-bold text-stone-900 mb-6">Directions</h3>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-stone-50 rounded-lg text-stone-700 shrink-0 border border-stone-200 mt-1"><Plane className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">Nearest Airport</h4>
                                            <p className="text-sm text-stone-600 leading-relaxed">Cochin (COK) - 1.5 hrs / 50 kms from airport.</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-2 bg-stone-50 rounded-lg text-stone-700 shrink-0 border border-stone-200 mt-1"><Train className="w-5 h-5" /></div>
                                        <div>
                                            <h4 className="font-bold text-stone-900 mb-1">Nearest Railway Stations</h4>
                                            <ul className="text-sm text-stone-600 leading-relaxed space-y-2 mt-2 list-disc list-inside marker:text-primary">
                                                <li>Thrissur (Station code TCR) - 30 mins / 16 kms</li>
                                                <li>Wadakkanchery (Station code WKI) - 20 mins / 10 kms</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4 bg-[#F9F8F6] p-4 rounded-xl border border-stone-100 mt-4">
                                        <div className="p-2 bg-white rounded-lg text-primary shrink-0 shadow-sm border border-stone-100"><Car className="w-5 h-5" /></div>
                                        <div>
                                            <p className="text-sm text-stone-700 font-medium leading-relaxed">
                                                Cabs can be seamlessly arranged on prior request for pickup and drop services.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ScrollAnimation>

                    </div>
                </div>
            </section>

            <FloatingCTA />
            <Footer />
        </main>
    );
}
