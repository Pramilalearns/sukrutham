"use client";

import { useState, useRef, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ChevronDown,
  BookOpen,
  Home,
  Users,
  Utensils,
  MapPin,
  Leaf,
  Phone,
  Mail,
} from "lucide-react";

const CATEGORIES = [
  {
    id: "booking",
    label: "Booking & Logistics",
    Icon: BookOpen,
    qs: [
      {
        q: "How do I book a stay and what are the payment terms?",
        a: "Booking is easy — reserve directly through our website or give us a call. Sukrutham Farmstay currently accepts cash for on-site transactions and additional services, so please plan accordingly.",
      },
      {
        q: "What is the cancellation policy?",
        a: "We offer a flexible cancellation policy:\n• 15+ days before check-in: Full refund / No charge.\n• 8–14 days before check-in: One night's stay charged as a penalty.\n• 0–7 days before check-in: Refund is not guaranteed.",
      },
      {
        q: "What are the check-in and check-out times?",
        a: "Standard check-in and check-out is flexible at 12:00 AM midnight, accommodating varied travel schedules. Need early or late access? Let us know at booking and we will do our best.",
      },
      {
        q: "Is there an airport shuttle or transport service?",
        a: "Yes — airport shuttle and car-hire services are available for an additional fee. Request this after confirming your booking, and we will handle the rest.",
      },
    ],
  },
  {
    id: "accommodation",
    label: "Accommodation & Facilities",
    Icon: Home,
    qs: [
      {
        q: "How many guests can stay at Sukrutham?",
        a: "Our 2,800 sq. ft. detached villa has 3 spacious bedrooms, comfortably accommodating up to 6 guests — perfect for families or intimate groups.",
      },
      {
        q: "Are rooms air-conditioned with private bathrooms?",
        a: "Yes. Every room has AC and an en-suite bathroom with bath/shower, bidet, hair dryer, and complimentary toiletries. Most rooms open to a private balcony overlooking the organic garden.",
      },
      {
        q: "Is the property wheelchair accessible?",
        a: "Absolutely. The entire unit is on the ground floor with a private entrance — fully wheelchair accessible and ideal for elderly guests or those with limited mobility.",
      },
      {
        q: "Is there a kitchen I can use?",
        a: "Yes. A fully equipped shared kitchen is at your disposal: stovetop, microwave, refrigerator, toaster, dishwasher, and washing machine.",
      },
      {
        q: "What is the WiFi speed?",
        a: "Fast, free WiFi at 67 Mbps — great for 4K streaming, video calls, or working remotely while breathing in the farm air.",
      },
    ],
  },
  {
    id: "family",
    label: "Family & Pets",
    Icon: Users,
    qs: [
      {
        q: "Are children welcome? Are extra beds available?",
        a: "Children of all ages are welcome! Cots for toddlers (0–3 yrs) at ₹500/night. Baby safety gates, board games, and puzzles are available. Children 13+ are priced as adults.",
      },
      {
        q: "Can I bring my pet?",
        a: "Yes! We are proudly pet-friendly with no extra charge. Pet bowls and cosy baskets are provided so your furry companions feel at home.",
      },
    ],
  },
  {
    id: "food",
    label: "Food & Wellness",
    Icon: Utensils,
    qs: [
      {
        q: "Is breakfast included? Can I get other meals?",
        a: "A fresh farm-to-fork breakfast is included daily. We also serve authentic Kerala meals made from organic produce grown right on our farm — tapioca, yams, seasonal fruits, and more.",
      },
      {
        q: "Is there a pool, spa, or hot tub?",
        a: "We have a hot tub / Jacuzzi for guests. Spa and wellness packages — full-body, couples, and traditional Ayurvedic massages — are available at an additional charge.",
      },
    ],
  },
  {
    id: "activities",
    label: "Activities & Local Area",
    Icon: MapPin,
    qs: [
      {
        q: "What activities can I enjoy at the farm?",
        a: "Cycling, bird watching, pottery workshops, jungle trekking, cow milking, paddy field walks, and visits to our butterfly garden — there is something for everyone.",
      },
      {
        q: "What are the nearby attractions?",
        a: "Vilangan Hills and Chembuchira offer stunning views. Nearby are the famous Thrissur temples and Kodungallur backwaters for a memorable short excursion.",
      },
      {
        q: "What is the best time of year to visit?",
        a: "Sukrutham is beautiful all year. June–September for the lush monsoon landscape; October–February for cool weather ideal for outdoor activities and sightseeing.",
      },
    ],
  },
  {
    id: "sustainability",
    label: "Sustainability & Safety",
    Icon: Leaf,
    qs: [
      {
        q: "How is Sukrutham eco-friendly?",
        a: "Our villa is built with traditional laterite stone and mud plaster for natural cooling. The entire property is 100% solar-powered, and we practise organic farming and water conservation throughout.",
      },
      {
        q: "Is the property safe?",
        a: "Absolutely. 24-hour security, CCTV in common and external areas, fire extinguishers, and key-access entry — so you can relax completely.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openKey, setOpenKey] = useState<string | null>("0-0");
  const [activeCat, setActiveCat] = useState("booking");
  const scrollLock = useRef(false);

  /* Scroll-spy */
  useEffect(() => {
    const onScroll = () => {
      if (scrollLock.current) return;
      const mid = window.scrollY + 260;
      for (const cat of CATEGORIES) {
        const el = document.getElementById(cat.id);
        if (!el) continue;
        if (mid >= el.offsetTop && mid < el.offsetTop + el.offsetHeight) {
          setActiveCat(cat.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const jumpTo = (id: string) => {
    scrollLock.current = true;
    setActiveCat(id);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.getBoundingClientRect().top - 130, // scrollMarginTop
        behavior: "smooth",
      });
      setTimeout(() => { scrollLock.current = false; }, 900);
    }
  };

  const toggle = (key: string) =>
    setOpenKey((p) => (p === key ? null : key));

  return (
    <main className="min-h-screen bg-stone-50">
      <Navbar variant="transparent" />

      {/* ── HERO ── */}
      <section className="relative h-[65vh] min-h-[500px] flex items-end">
        {/* Farm image */}
        <img
          src="/Home-Essence/Natures-Canvas-Wake-up-to-breathtaking-views-of-lush-greenery.jpeg"
          alt="Sukrutham Farmstay — lush paddy fields, Kerala"
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
        />
        {/* Heavy inline CSS gradient mask for guaranteed navbar and text visibility */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.55) 50%, rgba(10,10,10,0.65) 100%)"
        }} />

        {/* Hero text */}
        <div className="relative w-full z-10 pb-16 pt-32">
          {/* Constrain width to nicely align with standard body content */}
          <div className="max-w-6xl mx-auto px-6">
            <p className="text-xs font-bold tracking-[0.28em] uppercase mb-4" style={{ color: "#4ADE80" }}>
              Help Centre
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight max-w-2xl mb-5">
              Frequently Asked<br />Questions
            </h1>
            <p className="text-lg md:text-xl font-light text-stone-200 max-w-lg leading-relaxed">
              Everything you need to know before, during, and after your stay at
              Sukrutham.
            </p>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      {/* Constraining width with max-w-6xl so it doesn't stretch too wide */}
      <div className="max-w-6xl mx-auto px-6 py-20 lg:py-24">
        
        {/* Mobile horizontal pill navigation */}
        <div className="md:hidden sticky top-[79px] z-30 -mx-6 px-6 mb-10 overflow-x-auto no-scrollbar bg-stone-50 border-b border-stone-200/60 transition-all duration-300">
          <div className="flex gap-2 min-w-max py-3">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => jumpTo(id)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all whitespace-nowrap ${
                  activeCat === id
                    ? "bg-primary text-white shadow-md shadow-primary/20"
                    : "bg-white text-stone-600 border border-stone-200 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-16 items-start">
          
          <aside className="hidden lg:block w-[260px] flex-shrink-0" style={{ position: "sticky", top: 120, alignSelf: "flex-start", height: "auto" }}>
            {/* Aesthetic bordered box for categories as requested */}
            <div className="bg-white rounded-2xl border border-stone-200 p-4 shadow-sm">
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-stone-400 mb-4 px-3">
                Categories
              </p>
              
              <div className="flex flex-col gap-1">
                {CATEGORIES.map(({ id, label, Icon }) => {
                  const active = activeCat === id;
                  return (
                    <button
                      key={id}
                      onClick={() => jumpTo(id)}
                      className={`group flex items-center gap-3 w-full px-4 py-3 rounded-xl text-left text-[14px] transition-all duration-200 ${
                        active
                          ? "bg-primary text-white font-semibold shadow-md shadow-primary/20"
                          : "text-stone-600 font-medium hover:bg-stone-50 hover:text-stone-900"
                      }`}
                    >
                      <Icon
                        size={18}
                        className={`flex-shrink-0 transition-colors ${
                          active ? "text-white/90" : "text-stone-400 group-hover:text-primary"
                        }`}
                      />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          {/* ── RIGHT FAQ ACCORDION CONTENT ── */}
          <div className="flex-1 min-w-0">
            {CATEGORIES.map(({ id, label, Icon, qs }, catIdx) => (
              <section
                key={id}
                id={id}
                className="scroll-mt-[130px]"
                style={{ marginBottom: catIdx < CATEGORIES.length - 1 ? 80 : 0 }}
              >
                {/* Category Heading */}
                <div className="flex items-center gap-4 mb-8 pb-5 border-b border-stone-200">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon size={22} className="text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-stone-900 tracking-tight">
                      {label}
                    </h2>
                    <div className="w-10 h-1 bg-primary rounded-full mt-2" />
                  </div>
                </div>

                {/* Question Cards */}
                <div className="flex flex-col gap-4">
                  {qs.map((item, qIdx) => {
                    const key = `${catIdx}-${qIdx}`;
                    const open = openKey === key;
                    
                    return (
                      <div
                        key={key}
                        className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                          open
                            ? "border-[1.5px] border-primary/30 shadow-lg shadow-primary/5"
                            : "border-[1.5px] border-stone-200 shadow-sm hover:border-stone-300 hover:shadow-md"
                        }`}
                      >
                        {/* Question Button */}
                        <button
                          onClick={() => toggle(key)}
                          className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none"
                        >
                          <span
                            className={`text-base sm:text-lg font-semibold leading-snug transition-colors ${
                              open ? "text-primary" : "text-stone-800"
                            }`}
                          >
                            {item.q}
                          </span>
                          <span
                            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                              open
                                ? "bg-primary text-white rotate-180"
                                : "bg-stone-100 text-stone-500"
                            }`}
                          >
                            <ChevronDown size={18} strokeWidth={2.5} />
                          </span>
                        </button>

                        {/* Animated Answer */}
                        <div
                          className="grid relative transition-all duration-300 ease-in-out"
                          style={{
                            gridTemplateRows: open ? "1fr" : "0fr",
                            opacity: open ? 1 : 0,
                          }}
                        >
                          <div className="overflow-hidden">
                            <p className="px-6 pb-6 pt-2 text-stone-600 text-[15px] sm:text-base leading-relaxed whitespace-pre-line border-t border-stone-100 mt-2">
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTACT CTA ── */}
      <section className="pb-24 px-6 relative">
        {/* Constrained max width so it's not stretched */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200 p-10 md:p-16 text-center shadow-lg shadow-stone-200/40 relative overflow-hidden">
          
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-3xl lg:text-4xl font-extrabold text-stone-900 tracking-tight mb-4">
              Still have a question?
            </h3>
            <p className="text-stone-500 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
              Our team is happy to help. Reach out to us directly and we will get back to you promptly.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+919940668754"
                className="inline-flex items-center gap-2.5 px-5 sm:px-8 py-2.5 sm:py-3 text-[13px] sm:text-base whitespace-nowrap.5 rounded-full border border-stone-300 bg-white text-stone-800 font-semibold hover:border-primary hover:text-primary transition-colors hover:shadow-sm"
              >
                <Phone size={18} className="text-primary" />
                +91 99406 68754
              </a>
              <a
                href="mailto:sukruthamfarmstay@gmail.com"
                className="inline-flex items-center gap-2.5 px-5 sm:px-8 py-2.5 sm:py-3 text-[13px] sm:text-base whitespace-nowrap.5 rounded-full bg-primary text-white font-semibold hover:bg-primary/95 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:shadow-primary/30"
              >
                <Mail size={18} />
                Email us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
