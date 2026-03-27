"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const ROOMS_FAQS = [
  {
    q: "What modern amenities are included in the traditional villa?",
    a: "While our architecture is traditional, our comfort is modern. Each of our 3 bedrooms features high-speed 67 Mbps WiFi (perfect for remote work or streaming), air conditioning, private bathrooms with hot water, and a shared fully-equipped kitchen with a microwave, refrigerator, and washing machine. You get the charm of the past with the convenience of the present.",
  },
  {
    q: "Is the entire property accessible for elderly guests or wheelchair users?",
    a: "Yes. Accessibility was a priority in our design. The entire 2,800 sq. ft. villa is located on the ground floor with no stairs, making it fully wheelchair accessible and very easy for elderly guests or those with mobility challenges to move around comfortably.",
  },
  {
    q: "What is the booking and cancellation policy?",
    a: "Booking is simple through our website! To give you peace of mind, we offer free cancellation up to 15 days before your check-in date. For payments on-site, please note that we currently only accept cash. We recommend booking in advance, especially during the peak lush greenery months of June to September or the pleasant winters of October to February.",
  },
];

export default function RoomsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-stone-50 py-24 border-t border-stone-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Stay Details
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-stone-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {ROOMS_FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? "border-[1.5px] border-primary/30 shadow-lg shadow-primary/5"
                    : "border-[1.5px] border-stone-200 shadow-sm hover:border-stone-300 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-6 px-6 sm:px-8 py-5 sm:py-6 text-left focus:outline-none"
                >
                  <span
                    className={`text-base sm:text-lg font-semibold leading-snug transition-colors ${
                      isOpen ? "text-primary" : "text-stone-800"
                    }`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? "bg-primary text-white rotate-180"
                        : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    <ChevronDown size={18} strokeWidth={2.5} />
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-stone-100 overflow-hidden">
                    <p className="px-6 sm:px-8 pb-6 sm:pb-8 pt-4 text-stone-600 text-[15px] sm:text-base leading-relaxed whitespace-pre-line bg-stone-50/30">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="pt-24 pb-12 w-full flex justify-center clear-both block">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-primary text-white text-lg font-semibold hover:bg-primary/95 transition-all shadow-md shadow-primary/20 hover:shadow-lg hover:-translate-y-0.5"
          >
            View All FAQs
            <ArrowRight size={20} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
