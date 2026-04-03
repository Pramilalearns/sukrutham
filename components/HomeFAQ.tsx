"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const HOME_FAQS = [
  {
    q: "What makes Sukrutham Farmstay different from other homestays in Thrissur?",
    a: 'Sukrutham is more than just a place to sleep; it is a living, breathing 1-acre organic farm. Unlike standard hotels, we offer a 100% solar-powered, eco-friendly villa built with traditional laterite stone that stays naturally cool. Here, you aren\'t just a guest—you’re part of a sustainable lifestyle where you can pick fruit from the trees, interact with our farm animals, and enjoy the true "Sukrutham" (virtuous) peace of rural Kerala.',
  },
  {
    q: "Is the farmstay suitable for families with children?",
    a: "Absolutely! We are a favorite for families because we provide a safe, wide-open space for children to disconnect from screens and reconnect with nature. From exploring the butterfly garden to playing board games or walking through the nearby paddy fields, there is an educational and fun experience waiting for every age. We also provide baby safety gates and cots to ensure the little ones are safe and comfortable.",
  },
  {
    q: "How far is Sukrutham Farmstay from the center of Thrissur?",
    a: "We are located just 12 km from the heart of Thrissur city. This gives you the perfect balance: you are close enough to visit the Vadakkunnathan Temple or the Guruvayur Temple easily, yet far enough to enjoy a quiet, pollution-free atmosphere away from the city noise.",
  },
];

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-20 bg-stone-50 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Quick Answers
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-stone-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {HOME_FAQS.map((faq, index) => {
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
