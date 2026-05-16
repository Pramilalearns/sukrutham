
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Star, Quote, MapPin, Globe, Map, ArrowRight, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TestimonialGrid from "@/components/TestimonialGrid";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Guest Reviews & Stories | Sukrutham Farmstay Memories",
    description: "Read heartwarming stories and reviews from our global family of guests. Discover why travelers from across the world choose Sukrutham Farmstay for their authentic Kerala experience.",
};

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
        names: "Steven & Sonny Davison",
        location: "UK",
        text: "The first place we have truly managed to switch off. The food was lovingly prepared by Arun the Chef. Each day all 3 meals were comprised of home grown or locally sourced fresh produce. Cuisine chosen due to its local heritage and health benefits. Our host has made us feel at home with the perfect balance of privacy, then a wealth of local knowledge and historical facts regarding Kerala and India as a whole. A truly inspiring trip. We will not forget our Honeymoon here. We will be back for the monsoon.",
        rating: 5,
        region: 'International'
    },
    {
        names: "Maha Saeed Amer",
        location: "Egypt",
        text: "Words will not be enough to say thank you. I came here after a very tough ending of 2025, being hospitalised for more than 2 months, where I felt that nothing is going to be the same again. But here I am, brought into this place to re-admire life & keep fighting for it. Thank You KP for the generosity, for the warmth I felt being here, and most importantly, for the great sunset view you took me to. Incredible !! Keep opening your place for people & keep smiling 😋 It is all about Details !! I decided to come again 2 days after leaving to attend a wedding 😋",
        rating: 5,
        region: 'International'
    },
    {
        names: "Nathalie Guichen, Charles De Gaulle",
        location: "Embrun, France",
        text: "Its an absolutely extraordinary place, full of tranquility and beauty. The beautiful place is imbibed with a wonderfull sense of serenity. The surrounding nature is wild and sublime. The birdsongs provides a delightfull background sound. Thanks a Lot !! Great Regards Dear Sir!",
        rating: 5,
        region: 'International'
    },
    {
        names: "Dibeena Pearl",
        location: "Australia",
        text: "This is our first homestay and it was an amazing experience. The environment, ambience helped us to enjoy the holidays. The meals were perfect to our requirements and we all were able to switch off from busy schedules and spend quality time with each other. Thanks to all the caretakers and owner of this Sukrutham. All the facilities & resources available to us during the stay were very nice and modern and the serene beauty just took our breaths away. Very modern house that has lots of attractions, very nice.",
        rating: 5,
        region: 'International'
    },
    {
        names: "Hilit & Dan Goren, Avital & Omrie Leuin",
        location: "Tel Aviv, Israel",
        text: "Wonderful place in a beautiful part of Kerala. Surrounded by lush jungle, running streams, waterfalls, the most beautiful garden with home grown fruit and vegetables, a beautiful home farm, of traditional Kerala architecture with beautiful rooms of total comfort and beautiful design. The host is sooo kind, and the traditional Kerala food is sooo delicious. I highly recommend coming to this heaven.",
        rating: 5,
        region: 'International'
    },
    {
        names: "Ashok Xavier",
        location: "Melbourne, Australia",
        text: "We are from Australia to Kerala for the very first time to explore the food, culture and the nature. Sukrutham Farmstay is the perfect place for our purpose to be fulfilled. The kids had a great time too. Green acres around, peacocks, waterfalls at a short distance are the highlights. Murali is a great person, made sure we had a great stay. Food was delicious especially the Appam with chicken curry was so good. Thank you so much Murali and we will come again.",
        rating: 5,
        region: 'International'
    },
    {
        names: "Ingo Traub, Dr. Uschi Traub",
        location: "Germany",
        text: "Quiet Oasis Near Thrissur. We enjoyed this serene place in the midst of luscious greenery - perfect place to recharge your batteries and escape the hustle and bustle of city life. The beautiful, quiet surroundings, the stylish furnishings, the South Indian dishes that were freshly prepared! We liked it very much and if you want to get some peace outside of Trichur (about 20 minutes drive) that is exactly the right place to stay. Guruvayur Temple is not far away and other attractions (waterfalls / View Points etc) are easily accessible by taxi. The friendly homeowner who also lives in the house is accessible 24/7 and helps with all concerns. As dog lovers we also loved meeting friendly Chippy. Thank you Murli for your hospitality!",
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
        names: "R. Mahesh Iyer & Family",
        location: "NC, USA",
        text: "We enjoyed a most unique, relaxing & enjoyable experience at Sukrutham. This is not your typical commercial resort. Nestled in a quaint village adjacent to lush paddy fields, and with abundant bird life we were enveloped in silence & peace. The host (Murali) is very hospitable & thoughtful. The food is custom made with local ingredients & is delicious. The town of Thrissur was easily accessible & we saw ancient temples, enjoyed ayurvedic massages nearby and took strolls in the local roads. The house itself is a typical kerala style construction & a special mention for chippy the dog!! loved it!!!",
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
        names: "Rebecca & Ian Graffy",
        location: "London, UK",
        text: "Had such a wonderful time at your Farmstay. It was the perfect place to relax and catch our breath after some hectic times & adventures, and we really appreciate your wonderful hospitality and your beautiful home! We really loved our sunset drive and walk to the hillock- it was such a lovely way to cap off our first trip to India. Thanks for your wonderful hospitality",
        rating: 5,
        region: 'International'
    },
    {
        names: "Katrin Simon",
        location: "Vienna, Austria",
        text: "Thank you for the lovely time we got to spend here. The house and the garden are filled with so many lovely special details that we got to discover something new and different everyday… same goes for the food we got to enjoy. We had an amazing time and thanks also to Chippy",
        rating: 5,
        region: 'International'
    },
    {
        names: "Sylvie & Blaise Pastor",
        location: "France",
        text: "Thank you so much Murli! Your house is a place of peace and perfect stay to be connected with Kerala nature, food and tradition. Our stay with our best friends Deepa & Ravi was wonderfull here and you are a super host.",
        rating: 5,
        region: 'International'
    },
    {
        names: "Aniruddha Das",
        location: "Hyderabad",
        text: "Sukrutham Farmstay felt like a gentle embrace from nature itself. The villa, shaped from warm laterite stone and Kerala’s timeless tradition, breathes peace in every corner. I’ m taking away the fragrance of home cooked Kerala meals- simple, soulfull and unforgettable. Host KP was gracious, warm and ever ready with a helping hand. A place where the heart slows, the mind quiets, and soul feels at home.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Lt Col ( Retd) C P Prem Vas",
        location: "Aluva, Kerala",
        text: "Wow! What a blissfull stay with a wonderfull host like KP ! The scrumptious spread from Chef Arun is superlative. What struck me during our stay is the speckless neatness and aroma of welcome and the warmth of the decor and hospitality. Visiting this place is like a rejunevation in itself. Keep up the wonderfull ‘ambience’ and stay blessed for a ‘ heaven ‘ you created.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Nehal Kapoor",
        location: "Hyderabad",
        text: "Mr Murli is a really good host. From the first interaction on call to helping out with everything at the property. He is very knowledgeable about the flora and fauna of the area and can show you multiple places in the area. The property is well designed & maintained. 11/10 rating.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Asha Vishwanath & Family",
        location: "Bangalore",
        text: "We were amazed to see the very beautifully maintained property. Having come from the busy city of Bangalore, life in this Farmstay was like a ‘Heaven on Earth’. Our stay was only for 3 nights and we wanted to stay more days. It is such a quiet and peaceful place with lots of greenery around. Being a garden enthusiast was really amazed at the plant collection. To talk about the home we were wonderstruck to see the beautiful antique & vintage collection. Mr Murali is the best host and the food served in this place is very delicious and felt homely. We hope to visit this place very often and surely we recommend this property to our friends & relatives",
        rating: 5,
        region: 'India'
    },
    {
        names: "Anil Nair & Sashi Menon",
        location: "Kotagiri, Ooty",
        text: "A beautiful calm and serene place. Tranquil surrounding. Beautifully landscaped. Sukrutham Farmstay is a tastefully done up place. Both the inside and outside have a touch of class. The rooms are spacious and the rooms are absolutely clean and tidy. The housekeeping too is impeccable. Enjoyed the stay and hospitality. Very warm and gracious regards . Thank You Murali . We will be soon back @ this awesome place.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Balaji Ramaswamy",
        location: "Chennai",
        text: "What a lovely place! I enjoyed watching different types of birds, amazed at the variety of plants, trees in the garden. Its a nice place to hang out with friends. I enjoyed every minute of my stay at Sukrutham. The host was so kind and generous. He took us to the temples, waterfalls...and with friends it was an amazing experience. We had a blast. We made such beautiful memories. The accommodation was immaculate. Excellent food. Thank you for your amazing hospitality. I would certainly recommend this place to my friends and family.",
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
        names: "Kapil",
        location: "Coimbatore",
        text: "A traditional Kerala based guest house, that was more than our expectations. The details that the host (Murali) has got in his house is awesome. The Rooms were so neat & with more detail miniatures. He served all the day so nice. There is no way to think, its other than our sweet home. Food was so good with Kerala style. Nice plantations to relax. Kids too enjoyed so well.",
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
        names: "Balaji & Kalpana Balaji",
        location: "India",
        text: "Heard rave reviews about the place from my husband after his first visit to Sukrutham. Was excited to see the place and fell in love with Sukrutham the moment i stepped in. The place is tastefully done and well maintained. A tour around the garden is really so calming for the mind. Nevertheless Kudos to Murali for the wonderful place he has and the hospitality. If you are looking for a place away from the mad rush, noise etc., Sukrutham is The Place nested among paddy fields on one side, Reserve forest and stream around. Eagerly look forward to my next visit here with my sons.",
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
        names: "Kirti Simha & Pallavi Simha",
        location: "Bangalore",
        text: "Oh! What a lovely place Sukrutham is!! We had a beautiful 3 days stay here. Pure Air & Lush Greenery, Soft-clear Water! Coming from Bangalore, even my skin felt detoxed and so many things to do nearby. So there was no time for boredom even though we came here with our 10year old son, He too was happily occupied. Last but not the least the food served here is hyper local and completely organic. Very healthy & tasty. I loved both, the veg & Non-veg biryanis a lot! Thanks Mr. K.P. Murali for being a wonderful host!!",
        rating: 5,
        region: 'India'
    },
    {
        names: "Karthik Iyer",
        location: "Coimbatore",
        text: "Awesome place in the lap of nature and culture. Great location, food and very hospitable. If you truly want to experience place, Stay by yourself and breathe, Sukrutham is the place. Mr. Murali is an amazing host, with a lovely home true kerala style! Thoroughly enjoyed my Stay; will come back to Sukrutham always. THANK YOU",
        rating: 5,
        region: 'India'
    },
    {
        names: "Janani Krishnan, Ram & Teju",
        location: "Chennai",
        text: "We had a lovely & pleasant stay @ Sukrutham Farmstay. Very clean and cosy rooms and vintage interiors, clean air, fresh food, serene location and great hospitality. We would like to come here again with more time on our hands. Thanks for having us !",
        rating: 5,
        region: 'India'
    },
    {
        names: "Maya Parameswaran",
        location: "Thiruvananthapuram, Kerala",
        text: "I stayed here in December 2024 with my parents aged 80,71. I took the Tapioca room, and my parents were in the Paddy room. The view from the Paddy room of green paddy fields is calm and peaceful. One gets to hear only nature's sounds : from the variety of bird calls, wind on the leaves, and the squirrels chirping during the day and crickets chirping, frogs croaking all through the night. Murali is a very helpful, nice host. He had warned ahead of our arrival itself that the road would be very bumpy and narrow, and he recommended a cab driver. During our stay, we visited Guruvayoor, Peringottukara temple. Murali helped by arranging a cab. For local town trips, Murali helped by arranging an auto. Guests have full access to the kitchen and can make their own tea/ coffee. We had kerala style vegetarian food for breakfast, lunch, and dinner.",
        rating: 5,
        region: 'India'
    },
    {
        names: "Deepa Ravi",
        location: "Chennai",
        text: "Six of us came to stay @ Sukrutham and spend the New Year’s eve here. Muralis hospitality is amazing. We loved the place and the attention to detail that Murali has put into everything. His home is lovely, calming and so incredibly serene. It filled us with such a sense of peace that we did not want to leave! Thank Murali for all the love & hospitality",
        rating: 5,
        region: 'India'
    },
    {
        names: "Mai Fukuda",
        location: "Tokyo, Japan",
        text: "Thank you so much for providing such a wonderfull and comfortable space!! I really enjoyed to explore the surrounding area which made me so calm and peacefull. The food was also amazing. I loved it !! Highly appreciate your prompt support during my stay for the sight seeing. I would like to come back again to stay here in the very near future !!",
        rating: 5,
        region: 'International'
    },
    {
        names: "Dr Shruthi Devi & Family / Dr Rama Devi & Dr Shivashanmugam Family",
        location: "Bangalore / Udumalpet",
        text: "We thoroughly enjoyed our stay in Sukrutham. We felt so much at home and our big family of 11 people including the kids did not want to leave and hence we extended our stay for another day. Mr K P Murali has set a standard for Homestays and has actually impressed us with his beautifully designed and decorated home. The collection of books he has, also gave us happy-me time (much needed for us). Oh! the food!!! Home cooked, healthy, delicious food made by beloved Ranjini. Chechi, wow- wherever we went for our day trips, we were back for the yummy food. Sukrutham has actually impressed us in many ways- we will definitely be back. Leaving relaxed, refreshed and inspired. Thank You ! IMPRESSED BEYOND WORDS. 11/10 stars.",
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
        names: "Abhishek George",
        location: "Hyderabad",
        text: "Quiet and Serene, Sukrutham Farmstay evokes a sense of tranquility that's very rarely found within the city. Definitely recommend if you're looking for a break and to reconnect with nature.",
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
        names: "Ankit Mehta & Rohan Gholkar",
        location: "Jodhpur / Toronto",
        text: "Highly Recommended! Best Experiences. This place has everything you would want for a perfect vacation: 1. Clean, spacious rooms with remote yet accessible location. 2. Green surroundings with all sorts of fruits, flowers, veggie plants and paddy fields. 3. An ultra-cool V V hospitable host who is eager to help guests with everything be it sight seeing options, food options, telling history of the place and what not!! 4. Food is delicious, home made & traditional Kerala style. The type you will never get at any Kerala restaurant, on top of it its served with love. 5. House is beautifully decorated in Kerala style and there is lots to do. 6. Great Internet connection for Digital Nomads.",
        rating: 5,
        region: 'International'
    },
    {
        names: "Sonia & Santosh M",
        location: "Wellington, New Zealand",
        text: "Beautiful grounds and rooms, great food and a very family-like feel. We loved staying here and seeing Kerala! An idyllic slice of paradise ! The authentic Kerala setting, beautifully presented and well equipped residence, scrumptious Kerala cuisine, and generous, thought-full hospitality of Murali and his staff has made this short stay very memorable and one of the highlights of our visit to India this year. Many thanks and best wishes for the future!!",
        rating: 5,
        region: 'International'
    }
];

const handwrittenImages = Array.from({ length: 13 }, (_, i) => `/testimonial-handwritten/${i + 1}.png`);

export default function OurGuestsPage() {

    return (
        <main className="min-h-screen bg-[#FDFCF8] selection:bg-primary/20 selection:text-primary-dark font-sans relative overflow-x-hidden max-w-[100vw]">
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
                    <span 
                        className="inline-block py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700"
                        style={{ WebkitBackdropFilter: 'blur(12px)' }}
                    >
                        Guestbook
                    </span>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 tracking-tight drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">
                        Words from Our <br className="hidden md:block" />
                        <span className="italic text-accent font-light">Global Family</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-stone-100 font-medium leading-relaxed max-w-3xl mx-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-4 duration-700 delay-200">
                        Over the years, Sukrutham has welcomed travelers from across the world. Here are their stories, their memories, and their experiences of a life rooted in nature.
                    </p>
                </div>
            </section>

            {/* --- Typography Highlights Section --- */}
            <section className="relative z-30 px-4 md:px-12 lg:px-20 -mt-12 sm:-mt-20 lg:-mt-24 mb-16">
                <div className="container mx-auto max-w-7xl">
                    <div className="bg-white rounded-[2rem] sm:rounded-[3rem] shadow-2xl shadow-stone-200/50 border border-stone-100 p-8 md:p-12 lg:p-20">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-16 items-center">
                            <div className="text-center md:text-right space-y-3 md:space-y-4">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-tight">
                                    "The most <br /> <span className="text-primary italic">shanti</span> place"
                                </h3>
                                <p className="text-stone-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">— Anastasia, Moscow</p>
                            </div>

                            <div className="text-center space-y-3 md:space-y-4 border-y md:border-y-0 md:border-x border-stone-100 py-8 md:py-0 px-4">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-tight">
                                    "Impressed <br /> <span className="text-accent italic">beyond</span> words."
                                </h3>
                                <p className="text-stone-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">— Dr Shruthi & Family, Bangalore</p>
                            </div>

                            <div className="text-center md:text-left space-y-3 md:space-y-4 pt-8 md:pt-0">
                                <h3 className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-tight">
                                    "An idyllic <br /> slice of <span className="text-primary italic">paradise!</span>"
                                </h3>
                                <p className="text-stone-500 uppercase tracking-widest text-[10px] sm:text-xs font-bold">— Sonia & Santosh, New Zealand</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Testimonials Tabs & Masonry Grid --- */}
            <TestimonialGrid testimonials={testimonials} />


            {/* --- Lively & Sleek Guest Gallery --- */}
            <section className="py-16 md:py-20 px-6 md:px-12 lg:px-20 bg-white relative z-20 border-y border-stone-100/50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-10 md:mb-16">
                        <span className="text-stone-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-in fade-in slide-in-from-bottom-2 duration-1000">Guest Reflections</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium text-stone-900 leading-tight">
                            Moments from <Link href="/" className="italic text-stone-500 font-serif hover:text-primary transition-colors">Sukrutham Farmstay</Link>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 items-center pb-4 md:pb-8 px-4 md:px-0">
                        {[
                            { src: "/Home-Essence/customer.png", alt: "Welcoming our guests", offset: "md:translate-y-0", pos: "object-center" },
                            { src: "/Home-Essence/4.png", alt: "Shared joy at the farm", offset: "md:translate-y-12", pos: "object-center" },
                            { src: "/Home-Essence/1.png", alt: "Peaceful morning", offset: "md:-translate-y-8", pos: "object-[center_40%]" },
                            { src: "/Home-Essence/6.png", alt: "Connecting with nature", offset: "md:translate-y-8", pos: "object-center" }
                        ].map((img, idx) => (
                            <div key={idx} className={`relative aspect-[4/5] md:aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl shadow-stone-200/50 border border-stone-100 group bg-stone-50 transition-all duration-700 hover:z-20 hover:-translate-y-2 hover:shadow-2xl ${img.offset}`}>
                                <Image 
                                    src={img.src} 
                                    alt={img.alt}
                                    fill
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                    className={`object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110 ${img.pos}`}
                                />
                                <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/10 transition-colors duration-700 pointer-events-none"></div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-8 md:mt-12 block animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-stone-900 leading-tight">
                            "Harvest Happy <span className="text-primary italic">Memories</span>"
                        </h3>
                    </div>
                </div>
            </section>

            {/* --- Final CTA Section --- */}
            <section className="pt-24 pb-4 bg-stone-900 border-t border-white/5 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596423985167-d86b978dd6f8?auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center"></div>
                <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center relative z-10 max-w-4xl">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
                        Ready to add your story?
                    </h2>
                    <p className="text-xl text-stone-300 font-light mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join our global family of travelers who have found their home away from home. Explore <Link href="/" className="text-primary hover:underline font-medium">Sukrutham Farmstay</Link> and harvest happy memories.
                    </p>
                    <Link
                        href="/book"
                        className="inline-flex items-center gap-3 px-6 sm:px-10 py-3 sm:py-4 text-[13px] sm:text-base whitespace-nowrap bg-primary hover:bg-primary-dark text-white font-bold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 group hover:-translate-y-1 text-lg"
                    >
                        <span>Reserve Your Sanctuary</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>

            {/* --- Handwritten Testimonials Single Line Gallery --- */}
            <section 
                style={{ minHeight: '480px' }}
                className="bg-stone-900 relative flex items-center justify-center pt-0 pb-0"
            >
                {/* Subtle Grain Overlay */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]"></div>

                <div 
                    className="relative w-full max-w-[1400px] mx-auto z-20 px-4 md:px-12 overflow-x-auto no-scrollbar scroll-smooth pt-4 pb-0"
                    style={{ 
                        msOverflowStyle: 'none', 
                        scrollbarWidth: 'none',
                        WebkitOverflowScrolling: 'touch'
                    }}
                >
                    <style dangerouslySetInnerHTML={{ __html: `
                        .no-scrollbar::-webkit-scrollbar { display: none; }
                        .custom-zoom-img { transition: transform 0.6s cubic-bezier(0.34, 1.3, 0.64, 1); }
                        .group:hover .custom-zoom-img { transform: scale(1.6) translateY(-5px); z-index: 999; }
                        @media (min-width: 768px) {
                            .group:hover .custom-zoom-img { transform: scale(2.0) translateY(-8px); }
                        }
                    ` }} />
                    <div className="flex flex-nowrap justify-center items-center gap-6 md:gap-10 lg:gap-16 min-w-max md:min-w-0 mx-auto no-scrollbar py-8">
                        {[1, 5, 8, 10, 12].map((num, idx) => {
                            // Organic scattering in a single row
                            const rotation = (idx % 2 === 0 ? 3 : -3);
                            const yOffset = (idx % 3 === 0 ? 6 : idx % 2 === 0 ? -6 : 0);
                            
                            return (
                                <div 
                                    key={num}
                                    className="group relative flex-shrink-0 cursor-zoom-in"
                                    style={{ 
                                        transform: `rotate(${rotation}deg) translateY(${yOffset}px)`,
                                        zIndex: 10 + idx
                                    }}
                                >
                                    <div 
                                        style={{ width: '180px', height: '240px' }} 
                                        className="relative origin-center custom-zoom-img drop-shadow-2xl"
                                    >
                                        <div className="relative w-full h-full">
                                            <Image 
                                                src={`/testimonial-handwritten/${num}.png`}
                                                alt={`Handwritten Testimonial ${num}`}
                                                fill
                                                sizes="(max-width: 768px) 300px, 450px"
                                                className="object-contain"
                                                priority
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
