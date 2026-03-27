"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";

const ABOUT_FAQS = [
  {
    q: "What is the \"Farm-to-Fork\" dining experience at Sukrutham?",
    a: "We believe that the best food comes straight from the earth. Most of our ingredients—including tubers like tapioca, fruits like jackfruit and papaya, and fresh organic milk—come directly from our farm. Our meals are home-cooked in the traditional Kerala style, offering you authentic flavors that are both healthy and incredibly delicious.",
  },
  {
    q: "Can the hosts assist with local travel and language barriers?",
    a: "Yes, we pride ourselves on personalized hospitality. We speak English, Hindi, Malayalam, and Tamil, ensuring clear communication and a warm welcome. We can also help you arrange car hires, airport shuttles, or suggest the best \"hidden gem\" trekking spots and backwater excursions nearby to make your trip seamless.",
  },
  {
    q: "Are pets really welcome at Sukrutham Farmstay?",
    a: "Yes! We believe a family vacation isn't complete without your furry friends. We are a pet-friendly property and do not charge any extra fees for your pets. We even provide pet bowls and baskets to make sure they feel as much at home as you do.",
  },
];

export default function AboutFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-stone-50 py-24 border-t border-stone-200">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-10 md:mb-14">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">
            Guest Inquiries
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-2 mb-4 text-stone-800">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {ABOUT_FAQS.map((faq, index) => {
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
