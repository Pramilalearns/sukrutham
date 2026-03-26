"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollAnimation from "@/components/ScrollAnimation";
import { ChevronDown, HelpCircle, BookOpen, Home, Users, Utensils, MapPin, Leaf, ShieldCheck } from "lucide-react";

const faqData = [
  {
    id: "booking",
    category: "Booking & Logistics",
    icon: <BookOpen className="w-6 h-6" />,
    questions: [
      {
        q: "How do I book a stay and what are the payment terms?",
        a: "Booking is easy! You can reserve your stay directly through our official website or by contacting us. Please note that Sukrutham Farmstay currently only accepts cash payments for on-site transactions and additional services. We recommend planning accordingly for your arrival."
      },
      {
        q: "What is the cancellation policy?",
        a: "We offer a flexible cancellation policy:\n- 15 days or more before check-in: Full refund/No charge.\n- 8–14 days before check-in: A penalty of one night’s stay will be charged.\n- 0–7 days before check-in: Refund is not guaranteed."
      },
      {
        q: "What are the check-in and check-out times?",
        a: "Standard check-in and check-out are flexible at 12:00 AM (midnight) to accommodate different travel schedules. If you have specific timing needs or require early/late access, please let us know when booking, and we will do our best to accommodate you based on availability."
      },
      {
        q: "Is there an airport shuttle or transport service?",
        a: "Yes. We offer airport shuttle services and car hire for an additional fee. Simply request this service after your booking is confirmed, and we will arrange a smooth transfer to our farm."
      }
    ]
  },
  {
    id: "accommodation",
    category: "Accommodation & Facilities",
    icon: <Home className="w-6 h-6" />,
    questions: [
      {
        q: "How many people can stay at Sukrutham Farmstay?",
        a: "Our 2,800 sq. ft. detached villa features 3 spacious bedrooms and can comfortably accommodate a group of 6 guests. It is perfect for families or small groups seeking a private, tranquil getaway."
      },
      {
        q: "Are the rooms air-conditioned and do they have private bathrooms?",
        a: "Yes. Every room is equipped with air conditioning and features a private bathroom with a bath or shower, bidet, hair dryer, and free toiletries. Most rooms also open up to a private balcony with views of the organic garden."
      },
      {
        q: "Is the property wheelchair accessible?",
        a: "Yes, Sukrutham is designed to be inclusive. The entire unit is located on the ground floor with a private entrance and is fully wheelchair accessible, making it ideal for elderly guests or those with limited mobility."
      },
      {
        q: "Is there a kitchen I can use during my stay?",
        a: "Absolutely. We provide a fully equipped shared kitchen including a stovetop, microwave, refrigerator, toaster, dishwasher, and even a washing machine. You are welcome to use these facilities for your convenience."
      },
      {
        q: "Do you have high-speed internet?",
        a: "Yes. We provide fast, free WiFi (67 Mbps) throughout the property. It is suitable for 4K streaming, making video calls, or working remotely while enjoying the farm life."
      }
    ]
  },
  {
    id: "family",
    category: "Family & Pets",
    icon: <Users className="w-6 h-6" />,
    questions: [
      {
        q: "Are children welcome, and do you provide extra beds?",
        a: "Children of all ages are welcome! For toddlers (ages 0–3), we provide cots upon request for ₹500 per child, per night. For safety and entertainment, we offer baby safety gates, board games, and puzzles. Please note that children 13 and above are considered adults for pricing purposes."
      },
      {
        q: "Can I bring my pets?",
        a: "Yes! We are a pet-friendly homestay and do not charge any extra fees for your furry companions. We even provide pet bowls and baskets to ensure they feel at home."
      }
    ]
  },
  {
    id: "food",
    category: "Food & Wellness",
    icon: <Utensils className="w-6 h-6" />,
    questions: [
      {
        q: "Is breakfast provided, and can I get other meals?",
        a: "Yes, a fresh, homemade farm-to-fork breakfast is included. While we don't have a public restaurant, we serve authentic Kerala meals prepared with organic ingredients from our farm, like tapioca, yams, and seasonal fruits."
      },
      {
        q: "Do you have a swimming pool, spa, or hot tub?",
        a: "While we do not have a swimming pool, we do have a hot tub/Jacuzzi for our guests. We also offer Spa and Wellness packages, including full-body, couples, and traditional Ayurvedic rejuvenation massages for an additional charge."
      }
    ]
  },
  {
    id: "activities",
    category: "Activities & Local Area",
    icon: <MapPin className="w-6 h-6" />,
    questions: [
      {
        q: "What activities can I enjoy at the farm?",
        a: "There is plenty to do! You can enjoy cycling, bird watching, pottery workshops, and jungle trekking. You can also participate in farm activities like milking cows or simply enjoy a quiet walk through the paddy fields and our butterfly garden."
      },
      {
        q: "What are the nearby attractions and trekking spots?",
        a: "Within easy reach are Vilangan Hills and Chembuchira, both offering beautiful scenic views. You can also visit the famous temples in Thrissur or take a short excursion to Kodungallur for a backwater experience."
      },
      {
        q: "What is the best time of year to visit?",
        a: "Sukrutham is beautiful year-round. However, June to September is perfect for those who love the lush, rainy Kerala landscape, while October to February offers pleasant, cool weather for sightseeing."
      }
    ]
  },
  {
    id: "sustainability",
    category: "Sustainability & Safety",
    icon: <Leaf className="w-6 h-6" />,
    questions: [
      {
        q: "How is Sukrutham Farmstay eco-friendly?",
        a: "We are committed to sustainability. Our villa is built with traditional laterite stone and mud plaster for natural cooling, and our entire property is 100% solar-powered. We also practice organic farming and water conservation."
      },
      {
        q: "Is the property safe and secure?",
        a: "Your safety is our priority. We have 24-hour security, CCTV in common areas and outside the property, fire extinguishers, and key-access entry to ensure a worry-free stay."
      }
    ]
  }
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>("booking-0");

  const toggleAccordion = (index: string) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-white selection:bg-primary/10">
      <Navbar variant="transparent" />

      {/* Hero Section - Inline padding to guarantee Navbar clearance */}
      <section 
        className="pb-24 bg-stone-900 text-white text-center"
        style={{ paddingTop: '160px' }}
      >
        <div className="container mx-auto px-6">
          <ScrollAnimation animation="fade-in">
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              FAQ: Everything You Need to Know
            </h1>
            <p className="text-stone-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
              Find answers to common questions about your stay at Sukrutham Farmstay.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          {faqData.map((category, catIdx) => (
            <div key={category.id} className="mb-16 last:mb-0">
              <ScrollAnimation delay={catIdx * 100}>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-8 border-b border-stone-100 pb-4">
                  <div className="text-primary">
                    {category.icon}
                  </div>
                  <h2 className="text-2xl font-display font-bold text-stone-900">
                    {category.category}
                  </h2>
                </div>

                {/* Question List */}
                <div className="space-y-4">
                  {category.questions.map((item, qIdx) => {
                    const index = `${catIdx}-${qIdx}`;
                    const isOpen = openIndex === index;

                    return (
                      <div 
                        key={index} 
                        className={`border rounded-xl transition-all duration-300 overflow-hidden ${
                          isOpen ? 'border-primary bg-stone-50/30' : 'border-stone-100'
                        }`}
                      >
                        <button
                          onClick={() => toggleAccordion(index)}
                          className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                        >
                          <span className={`text-lg font-medium transition-colors ${isOpen ? 'text-primary' : 'text-stone-800'}`}>
                            {item.q}
                          </span>
                          <ChevronDown className={`w-5 h-5 transition-transform duration-300 text-stone-400 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
                        </button>
                        
                        <div 
                          className={`transition-all duration-300 ease-in-out ${
                            isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                          }`}
                        >
                          <div className="px-6 pb-6 text-stone-600 leading-relaxed whitespace-pre-line border-t border-stone-50 pt-4">
                            {item.a}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollAnimation>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
