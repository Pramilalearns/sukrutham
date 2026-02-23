import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Amenities from "@/components/Amenities";
import Rooms from "@/components/Rooms";
import ThingstoDo from "@/components/ThingstoDo";
import Host from "@/components/Host";
import Testimonials from "@/components/Testimonials";
import ExperienceGallery from "@/components/ExperienceGallery";
import WhyChooseUs from "@/components/WhyChooseUs";
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

      <FloatingCTA />

      {/* Final CTA Section */}
      <section className="py-24 bg-stone-900 border-t border-white/10 text-center relative overflow-hidden" id="book">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423985167-d86b978dd6f8?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Ready to Experience Authenticity?
          </h2>
          <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Book your stay at Sukrutham Farmstay and immerse yourself in the true essence of Kerala.
          </p>
          <button className="bg-primary hover:bg-primary/90 text-white text-lg font-semibold px-10 py-4 rounded-full transition-all shadow-lg hover:shadow-primary/50 hover:-translate-y-1">
            Book Your Stay Now
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}
