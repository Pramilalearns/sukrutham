import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Rooms from "@/components/Rooms";
import ThingstoDo from "@/components/ThingstoDo";
import Host from "@/components/Host";
import Testimonials from "@/components/Testimonials";
import ExperienceGallery from "@/components/ExperienceGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
import DecisionSection from "@/components/DecisionSection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import ScrollAnimation from "@/components/ScrollAnimation";

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 selection:bg-primary/20 selection:text-primary-dark">
      <Navbar />
      <Hero />

      <ScrollAnimation>
        <Amenities />
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <Rooms />
      </ScrollAnimation>

      <ScrollAnimation delay={200}>
        <ThingstoDo />
      </ScrollAnimation>

      <ScrollAnimation delay={100}>
        <Host />
      </ScrollAnimation>

      <ScrollAnimation>
        <Testimonials />
      </ScrollAnimation>

      <ScrollAnimation>
        <ExperienceGallery />
      </ScrollAnimation>

      <ScrollAnimation>
        <WhyChooseUs />
      </ScrollAnimation>

      <ScrollAnimation>
        <DecisionSection />
      </ScrollAnimation>

      <FloatingCTA />

      {/* Final CTA Section */}
      <section className="py-20 md:py-28 bg-stone-900 border-t border-white/10 relative overflow-hidden" id="book">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423985167-d86b978dd6f8?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl">

          {/* Text Content */}
          <div className="text-center md:text-left md:max-w-xl">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Experience Authenticity?
            </h2>
            <p className="text-xl text-stone-300 mb-8">
              Book your stay at Sukrutham Farmstay and immerse yourself in the true essence of Kerala.
            </p>
            <a href="/book" className="inline-block bg-primary hover:bg-primary/90 text-white text-lg font-semibold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
              Book Your Stay Now
            </a>
          </div>

          {/* Sticky Note Quote */}
          <div className="mt-8 md:mt-0 md:mr-10">
            <div
              className="w-[280px] h-[280px] flex flex-col items-center justify-center p-6 shadow-2xl relative rotate-3 hover:rotate-6 transition-transform duration-500 rounded-sm bg-white overflow-hidden"
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{ backgroundColor: "lab(84.2787% 6.27849 82.0646 / .3)" }}
              ></div>
              <div className="absolute -top-4 -left-2 text-[10rem] text-stone-800/15 font-serif leading-none select-none z-10">
                &#8220;
              </div>

              <h2 className="text-5xl md:text-6xl leading-[0.85] tracking-wide text-stone-900 text-center z-10 -rotate-2 flex flex-col items-center justify-center gap-2" style={{ fontFamily: "'SketchyBrushCustom', cursive", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}>
                <span>Harvest</span>
                <span>Happy</span>
                <span>Memories</span>
              </h2>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
