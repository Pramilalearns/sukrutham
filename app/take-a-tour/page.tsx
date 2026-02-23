import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TourGallery from "@/components/TourGallery";


export const metadata = {
    title: "Take a Tour of Sukrutham Farmstay | Organic Farmstay in Kerala",
    description: "Watch our tour video and explore the photo gallery of Sukrutham Farmstay. Experience the authentic Kerala heritage and organic farming life.",
};

export default function TakeATour() {
    return (
        <main className="min-h-screen bg-stone-50 selection:bg-primary/20 selection:text-primary-dark">
            <Navbar variant="light" />

            {/* Hero Section with Video */}
            <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-6">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">
                            The Sukrutham Journey
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-bold text-stone-900 mb-8 leading-tight">
                            A Soulful Base for <br /> <span className="text-stone-400 italic">Authentic Exploration</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light">
                            Experience the perfect balance of a traditional farmstead and a gateway to the heart of Kerala. From our organic fields to the hidden gems of the region, begin your journey here.
                        </p>
                    </div>

                    {/* Video Container */}
                    <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-stone-200">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/GB50Mm6nYEQ?autoplay=0&rel=0&modestbranding=1"
                            title="Sukrutham Farmstay Tour"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className="absolute inset-0 w-full h-full object-cover"
                        ></iframe>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <div className="flex flex-col items-center gap-4 text-stone-400 animate-bounce">
                            <span className="text-sm font-medium uppercase tracking-widest">Start the Journey</span>
                            <div className="w-px h-12 bg-stone-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <TourGallery />

            <Footer />
        </main>
    );
}
