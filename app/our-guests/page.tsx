"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote, MapPin, Globe, Map, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";

// Types for our testimonials
interface Testimonial {
    names: string;
    location: string;
    text: string;
    rating?: number;
    region: 'India' | 'International';
}

const testimonials: Testimonial[] = [
    {
        names: "Dr Shruthi Devi & Family, / Dr Rama Devi & Dr Shivashanmugam Family",
        location: "Bangalore / Udumalpet",
        text: "We thoroughly enjoyed our stay in Sukrutham. We felt so much at home and our big family of 11 people including the kids did not want to leave and hence we extended our stay for another day. Mr K P Murali has set a standard for Homestays and has actually impressed us with his beautifully designed and decorated home. The collection of books he has, also gave us happy-me time (much needed for us). Oh! the food!!! Home cooked, healthy, delicious food made by beloved Ranjini. Chechi, wow- wherever we went for our day trips, we were back for the yummy food. Sukrutham has actually impressed us in many ways- we will definitely be back. Leaving relaxed, refreshed and inspired. Thank You ! IMPRESSED BEYOND WORDS. 11/10 stars.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Karthik Iyer",
        location: "Coimbatore",
        text: "Awesome place in the lap of nature and culture. Great location, food and very hospitable. If you truly want to experience place, Stay by yourself and breathe, Sukrutham is the place. Mr. Murali is an amazing host, with a lovely home true kerala style! Thoroughly enjoyed my Stay; will come back to Sukrutham always. THANK YOU.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Anastasia Chebaksarova",
        location: "Moscow, Russia",
        text: "The most shanti place i have visited in India. Very comfortable stay with beautiful views and tasty food. Thank you very much for the hospitality!",
        rating: 5,
        region: 'International'
    },
    {
        names: "Rani Chaves",
        location: "Tahiti, French Polynesia",
        text: "After 1 month traveling through India, I enjoyed a few days of peace and quiet at Sukrutham Farm. It has been a wonderful experience with delicious food & decadent sunsets. Loved having the peacocks right in front of the house. Enjoyed quiet walks in the neighborhood Mr. Murali helped arrange activities and it was a good break away from the most touristy places. The house is beautiful and the room tastefully decorated and spacious & comfortable. It truly was a lovely stay. Thank you.",
        rating: 5,
        region: 'International'
    },
    {
        names: "R. Mahesh Iyer & Family",
        location: "NC, USA",
        text: "We enjoyed a most unique, relaxing & enjoyable experience at Sukrutham. This is not your typical commercial resort. Nestled in a quaint village adjacent to lush paddy fields, and with abundant bird life we were enveloped in silence & peace. The host (Murali) is very hospitable & thoughtful. The food is custom made with local ingredients & is delicious. The town of Thrissur was easily accessible & we saw ancient temples, enjoyed ayurvedic massages nearby and took strolls in the local roads. The house itself is a typical kerala style construction & a special mention for chippy the dog!! loved it!!!",
        rating: 5,
        region: 'International'
    },
    {
        names: "Karin Przygocki",
        location: "USA",
        text: "Sukrutham is an all-around brilliant place, space and experience! The host, house, village, food., everything was wonderful. I especially loved a new Kerala dish - idiyappam and seeing 23 different species of birds in one day on and around the grounds. It was particularly fun to have several exotic bird species come to me while lounging on a patio! Thank you KP for sharing your home and culture. You are a perfect host.",
        rating: 5,
        region: 'International'
    },
    {
        names: "Ingo Traub & Dr. Uschi Traub",
        location: "Germany",
        text: "Quiet Oasis Near Thrissur. We enjoyed this serene place in the midst of luscious greenery - perfect place to recharge your batteries and escape the hustle and bustle of city life. The beautiful, quiet surroundings, the stylish furnishings, the South Indian dishes that were freshly prepared! We liked it very much and if you want to get some peace outside of Trichur (about 20 minutes drive) that is exactly the right place to stay. Guruvajur Temple is not far away and other attractions (waterfalls / View Points etc) are easily accessible by taxi. The friendly homeowner who also lives in the house is accessible 24/7 and helps with all concerns. As dog lovers we also loved meeting friendly Chippy Thank you Murli for your hospitality!",
        rating: 5,
        region: 'International'
    },
    {
        names: "Ankit Mehta & Rohan Gholkar",
        location: "Jodhpur, Rajasthan / Toronto, Canada",
        text: "Highly Recommended! Best Experiences. This place has everything you would want for a perfect vacation: 1. Clean, spacious rooms with remote yet accessible location. 2. Green surroundings with all sorts of fruits, flowers, veggie plants and paddy fields. 3. An ultra-cool V V hospitable host who is eager to help guests with everything be it sight seeing options, food options, telling history of the place and what not!! 4. Food is delicious, home made & traditional Kerala style. The type you will never get at any Kerala restaurant, on top of it its served with love. 5. House is beautifully decorated in Kerala style and there is lots to do. 6. Great Internet connection for Digital Nomads.",
        rating: 5,
        region: 'International'
    },
    {
        names: "Balaji & Kalpana Balaji",
        location: "India",
        text: "Heard rave reviews about the place from my husband after his first visit to Sukrutham. Was excited to see the place and fell in love with Sukrutham the moment i stepped in. The place is tastefully done and well maintained. A tour around the garden is really so calming for the mind. Nevertheless Kudos to Murali for the wonderful place he has and the hospitality. If you are looking for a place away from the mad rush, noise etc., Sukrutham is The Place nested among paddy fields on one side, Reserve forest and stream around. Eagerly look forward to my next visit.",
        rating: 5,
        region: 'India'
    },
    {
        names: "RK Menon",
        location: "India",
        text: "I was on a temple visit to Guruvayoor & Thrissur along with my family members when I came to know of \"Sukrutham\" as a place to spend an evening. What I saw was a well set up dwelling literally surrounded by agriculture fields. This place is owned and operated by KP Murali who has meticulously set it up. It remains meticulous and well maintained even now. So are the surroundings within its large premises - you can go for a \"nature walk\" within too. Amenities is top class. Food is good. Caretakers are good. Facilities are good. There are many locations to explore nearby - which I could not owing to time constraints. We left the next day morning satisfied but since the stay was short, we intend to revisit and stay there for a few days. A visit worth! A stay that was pleasant!! A stay we will cherish!!! Recommend!!!!",
        rating: 5,
        region: 'India'
    },
    {
        names: "Mohanraj, Dushyand",
        location: "India",
        text: "Had a very peaceful stay @ Sukrutham. The host was very kind and attentive to guest needs. This place looks so serene & calmness hits you the moment you step in Sukrutham. Amazing homely food, spotted different birds and the mini waterfalls was the cherry on top. Overall we had a nice stay. Hoping to come back again to this beautiful home. Thank you Murali sir for hosting us.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Kapil",
        location: "Coimbatore",
        text: "A traditional Kerala based guest house, that was more than our expectations. The details that the host (Murali) has got in his house is awesome. The Rooms were so neat & with more detail miniatures. He served all the day so nice. There is no way to think, its other than our sweet home. Food was so good with Kerala style. Nice plantations to relax. Kids too enjoyed so well.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Balaji Ramaswamy",
        location: "Chennai",
        text: "What a lovely place! I enjoyed watching different types of birds, amazed at the variety of plants, trees in the garden. Its a nice place to hang out with friends. I enjoyed every minute of my stay at Sukrutham. The host was so kind and generous. He took us to the temples, waterfalls...and with friends it was an amazing experience. We had a blast. We made such beautiful memories. The accomodation was immaculate. Excellent food. Thank you for your amazing hospitality. I would certainly recommend this place to my friends and family.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Prashanth. M",
        location: "Bangalore",
        text: "I Visited Sukrutham with my parents & this was their first home stay. The place is surrounded by greenery & has a beautiful garden. The house has traditional setting with modern amenities. Murali the host took personal attention & helped us with all our needs & also guided us on the places to visit. He is an amazing host who catered to the need of the guests. Overall a pleasant stay with calm & green surroundings.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Tejashwar Raja",
        location: "Tirunelveli",
        text: "Sukrutham Farm Stay in Thrissur is the ideal place for those in need of a break from polluted city life. With traditional architecture and 5 star amenities, it is in a league of its own! Don't hesitate and rob yourself of this wonderful experience.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Abhishek George",
        location: "Hyderabad",
        text: "Quiet and Serene, Sukrutham Farmstay evokes a sense of tranquility that's very rarely found within the city. Definitely recommend if you're looking for a break and to reconnect with nature.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Ram Lakshminarayanan",
        location: "Singapore",
        text: "This place is a hidden gem in God's own country. The words that come to mind when I have to describe this place are 'peace' and 'tranquility'. There are so many tourist attractions like dams, waterfalls, temples, rock garden - that can keep us occupied. Ayurveda clinic is close by. My three days here was completely a bliss. I hate to leave this place. My next trip will be for a longer period. K P Murali, the host is a lovely gentleman and the attention he gives to the guests is phenomenal. Looking forward to visit again - soon!",
        rating: 5,
        region: 'International'
    },
    {
        names: "Pinaki Roy",
        location: "Chennai",
        text: "Thanks a lot to Murali for the wonderful holiday. Brilliant place, great hospitality and an overall wonderful experience. The fantastic sight seeing places around was place was amazing. Never have I experienced such serene environment. Nature's bounty. Got to come back again! Great holiday in the lap of nature. Keep it up!",
        rating: 5,
        region: 'India'
    },
    {
        names: "Shalini Warrier - Executive Director, Federal Bank",
        location: "India",
        text: "This was my first experience at a farmstay. My family and I enjoyed the time spent here. The ambience, the visits to nearby places, the calm and soothing atmosphere, these and many more attributes made the stay really nice. KP Murali is a very hospitable host and took great care of every minute. The food was fantastic. I wish Sukrutham Farmstay the very best for Diwali and beyond.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Lina (Tech Director, Wells Fargo) & Shibin Kumar",
        location: "Bangalore",
        text: "\"We came for the sheer beauty of this place. We stayed for the peace and calm. And we returned for the warmth and hospitality. The tastefully appointed rooms, the beautiful artefacts and furniture, the lush greenery surrounding this place - all together is a heady concoction perfect for city dwellers like us who are looking to get away. Thoroughly enjoyed our stay. Thank you Murali, for showing us some of the hidden gems in and around the area. See you soon. And all the very best.\"",
        rating: 5,
        region: 'India'
    },
    {
        names: "Sachin, Charan and Ranjani",
        location: "Chennai",
        text: "Our First Air BnB Guests! The best stay we have had till date. We have been to many Airbnbs but this is definitely a step above. The hospitality is top notch. A curated experience that is well thought out, from the food to the sightseeing, and the rooms. Everything is hand-picked and has a wonderful back story. We will definitely come back here not just for the pace, but also the generosity and hospitality KP & Chippy have shown us. Stormee and Coffee (our dogs) will definitely miss this place and their dear Chippy",
        rating: 5,
        region: 'India'
    },
    {
        names: "Sonia & Santosh M",
        location: "Wellington, New Zealand",
        text: "Beautiful grounds and rooms, great food and a very family-like feel. We loved staying here and seeing Kerala! An idyllic slice of paradise ! The authentic Kerala setting, beautifully presented and well equipped residence, scrumptious Kerala cuisine, and generous, thought-full hospitality of Murali and his staff has made this short stay very memorable and one of the highlights of our visit to India this year. Many thanks and best wishes for the future!!",
        rating: 5,
        region: 'International'
    }
];

export default function OurGuestsPage() {
    const [activeTab, setActiveTab] = useState<'India' | 'International'>('India');

    const filteredTestimonials = testimonials.filter(t => t.region === activeTab);

    return (
        <main className="min-h-screen bg-[#FDFCF8] selection:bg-primary/20 selection:text-primary-dark font-sans relative">
            <Navbar />

            {/* --- Hero Section --- */}
            <section className="relative min-h-[60vh] flex flex-col items-center justify-center overflow-hidden bg-stone-900 border-b-8 border-primary">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/hero-carousel/slide2.jpg"
                        alt="Sukrutham Farmstay Guests"
                        fill
                        className="object-cover opacity-60 mix-blend-overlay"
                        priority
                    />
                    <div className="absolute inset-0 bg-stone-950/40 z-10"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-transparent z-10"></div>
                </div>

                <div className="container mx-auto px-6 md:px-12 relative z-20 text-center flex flex-col items-center justify-center pt-32 pb-32 flex-grow">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
                        Guestbook
                    </span>
                    <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-8 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        Words from Our <br className="hidden md:block" />
                        <span className="italic text-accent font-light">Global Family</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-100 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-4 duration-700 delay-200">
                        Over the years, Sukrutham has welcomed travelers from across the world. Here are their stories, their memories, and their experiences of a life rooted in nature.
                    </p>
                </div>
            </section>

            {/* --- Typography Highlights Section --- */}
            <section className="relative z-30 px-6 md:px-12 lg:px-20 -mt-24 mb-16">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-white rounded-[3rem] shadow-2xl shadow-stone-200/50 border border-stone-100 p-12 lg:p-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 items-center">
                            <div className="text-center md:text-right space-y-4">
                                <h3 className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-tight">
                                    "The most <br /> <span className="text-primary italic">shanti</span> place"
                                </h3>
                                <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">— Anastasia, Moscow</p>
                            </div>

                            <div className="text-center space-y-4 border-y md:border-y-0 md:border-x border-stone-200 py-12 md:py-0 px-4">
                                <h3 className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-tight">
                                    "Impressed <br /> <span className="text-accent italic">beyond</span> words."
                                </h3>
                                <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">— Dr Shruthi & Family, Bangalore</p>
                            </div>

                            <div className="text-center md:text-left space-y-4">
                                <h3 className="text-4xl md:text-5xl font-display font-bold text-stone-900 leading-tight">
                                    "An idyllic <br /> slice of <span className="text-primary italic">paradise!</span>"
                                </h3>
                                <p className="text-stone-500 uppercase tracking-widest text-xs font-bold">— Sonia & Santosh, New Zealand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Testimonials Tabs & Masonry Grid --- */}
            <section className="py-20 px-6 md:px-12 lg:px-20 bg-[#FDFCF8]">
                <div className="container mx-auto max-w-7xl">

                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-stone-900 mb-8">Memories from Around the World</h2>

                        {/* Tabs */}
                        <div className="inline-flex bg-white/50 p-1.5 rounded-full border border-stone-200 backdrop-blur-sm shadow-sm relative z-20">
                            <button
                                onClick={() => setActiveTab('India')}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
                                    activeTab === 'India'
                                        ? "bg-primary text-white shadow-md transform scale-105"
                                        : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
                                )}
                            >
                                <Map className="w-4 h-4" />
                                Guests from India
                            </button>
                            <button
                                onClick={() => setActiveTab('International')}
                                className={cn(
                                    "px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2",
                                    activeTab === 'International'
                                        ? "bg-primary text-white shadow-md transform scale-105"
                                        : "text-stone-600 hover:text-stone-900 hover:bg-white/50"
                                )}
                            >
                                <Globe className="w-4 h-4" />
                                International Guests
                            </button>
                        </div>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 md:gap-8 space-y-6 md:space-y-8 transition-opacity duration-500 animate-in fade-in">
                        {filteredTestimonials.map((testimonial, idx) => (
                            <div
                                key={`${activeTab}-${idx}`}
                                className="break-inside-avoid bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="flex gap-1 mb-6">
                                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>
                                <Quote className="w-8 h-8 text-stone-100 mb-4" />
                                <p className="text-stone-600 font-light leading-relaxed mb-8 relative z-10">
                                    "{testimonial.text}"
                                </p>
                                <div className="pt-6 border-t border-stone-100">
                                    <h4 className="font-bold text-stone-900 text-sm">{testimonial.names}</h4>
                                    <span className="text-xs text-stone-500 font-medium tracking-wide uppercase mt-1 block">
                                        {testimonial.location}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredTestimonials.length === 0 && (
                        <div className="text-center py-20 text-stone-500">
                            No testimonials found for this region.
                        </div>
                    )}
                </div>
            </section>

            {/* --- Final CTA Section --- */}
            <section className="py-24 bg-stone-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423985167-d86b978dd6f8?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center"></div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10 max-w-4xl">
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Ready to add your story?
                    </h2>
                    <p className="text-xl text-stone-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join our global family of travelers who have found their home away from home. Explore Sukrutham Farmstay and harvest happy memories.
                    </p>
                    <Link
                        href="/book"
                        className="inline-flex items-center gap-3 px-10 py-4 bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 group hover:-translate-y-1 text-lg"
                    >
                        <span>Reserve Your Sanctuary</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
