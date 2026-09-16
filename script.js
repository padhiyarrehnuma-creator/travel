// ============================================================
// script.js - Explore World (Final Forest Emerald)
// Features: Voice, 3D, AI Chatbot, Dark Mode, Digital Ticket,
// Category theme backgrounds, Notification, Bookings, Multi-language
// ============================================================

// ============================================================
// DATA: 39 TOURS
// ============================================================
const tours = [
    { id: 1, name: 'Goa Beach Escape', price: 14999, desc: '3 days of sun, sand & sea at India\'s best beaches', category: 'beach', region: 'india', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 15, duration: '3 Days', rating: 4.8, reviews: 245, facilities: ['🏖️ Beach Activities', '🍳 Free Breakfast', '🚐 Airport Pickup', '🏨 3-Star Hotel'] },
    { id: 2, name: 'Himalayan Trek', price: 24999, desc: '5 days of breathtaking mountain views & adventure', category: 'mountain', region: 'india', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 10, duration: '5 Days', rating: 4.9, reviews: 189, facilities: ['🥾 Expert Guide', '⛺ Camping Gear', '🍽️ All Meals', '🎒 Trekking Poles'] },
    { id: 3, name: 'Jaipur City Tour', price: 9999, desc: '2 days exploring the Pink City\'s palaces & forts', category: 'city', region: 'india', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.6, reviews: 320, facilities: ['🚗 AC Car', '🏰 Palace Entry', '📸 Photo Guide', '🍛 Local Food'] },
    { id: 4, name: 'Kerala Backwaters', price: 18999, desc: '4 days of houseboat stays & serene waterways', category: 'beach', region: 'india', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 20, duration: '4 Days', rating: 4.9, reviews: 210, facilities: ['🛶 Houseboat Stay', '🥥 All Meals', '💆 Ayurvedic Massage', '🚐 Transfers'] },
    { id: 5, name: 'Varanasi Cultural Tour', price: 12999, desc: '3 days exploring the spiritual capital of India', category: 'cultural', region: 'india', img: 'images/varanasi.png', badge: 'popular', discount: 5, duration: '3 Days', rating: 4.7, reviews: 156, facilities: ['🛕 Temple Tours', '🚣 Ganga Aarti', '🍽️ Breakfast', '📿 Local Guide'] },
    { id: 6, name: 'Rishikesh Adventure', price: 16999, desc: '4 days of rafting, bungee jumping & yoga', category: 'adventure', region: 'india', img: 'images/rishikesh.png', badge: 'adventure', discount: 12, duration: '4 Days', rating: 4.8, reviews: 178, facilities: ['🚣 River Rafting', '🪂 Bungee Jump', '🧘 Yoga Sessions', '⛺ River Camp'] },
    { id: 7, name: 'Darjeeling Himalayan Tour', price: 21999, desc: '5 days of tea gardens & mountain views', category: 'mountain', region: 'india', img: 'images/mountain3.png', badge: 'luxury', discount: 8, duration: '5 Days', rating: 4.7, reviews: 98, facilities: ['🍵 Tea Garden Tour', '🚂 Toy Train', '🏔️ Kanchenjunga View', '🍳 Breakfast'] },
    { id: 8, name: 'Mumbai City Highlights', price: 7999, desc: '2 days of Bollywood, beaches & street food', category: 'city', region: 'india', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.5, reviews: 245, facilities: ['🎬 Bollywood Tour', '🏖️ Beach Visit', '🍛 Street Food', '🚕 City Cab'] },
    { id: 9, name: 'Goa Cultural Experience', price: 15999, desc: '3 days of Portuguese heritage & beach fun', category: 'cultural', region: 'india', img: 'https://images.unsplash.com/photo-1587922546307-776227941871?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '3 Days', rating: 4.6, reviews: 134, facilities: ['⛪ Church Tours', '🏖️ Beach Party', '🍷 Wine Tasting', '🏨 Resort Stay'] },
    { id: 10, name: 'Kashmir Great Lakes Trek', price: 29999, desc: '7 days of stunning alpine lake trekking', category: 'mountain', region: 'india', img: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 15, duration: '7 Days', rating: 5.0, reviews: 87, facilities: ['🥾 Expert Guide', '⛺ Camping', '🍽️ All Meals', '🏔️ Alpine Lakes'] },
    { id: 11, name: 'Mysore Heritage Tour', price: 8999, desc: '2 days of palaces, temples & silk shopping', category: 'cultural', region: 'india', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.5, reviews: 112, facilities: ['🏰 Palace Entry', '🛍️ Silk Shopping', '🍛 Local Cuisine', '🚗 AC Car'] },
    { id: 12, name: 'Andaman Island Escape', price: 34999, desc: '6 days of pristine beaches & water sports', category: 'beach', region: 'india', img: 'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 25, duration: '6 Days', rating: 4.9, reviews: 145, facilities: ['🤿 Scuba Diving', '🏖️ Beach Resort', '⛴️ Ferry Tickets', '🍽️ All Meals'] },
    { id: 13, name: 'Rafting in Rishikesh', price: 8999, desc: '2 days of thrilling white water rafting on Ganges', category: 'adventure', region: 'india', img: 'https://images.unsplash.com/photo-1530866495561-507c9faab2ed?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 10, duration: '2 Days', rating: 4.7, reviews: 198, facilities: ['🚣 Rafting', '🛡️ Safety Gear', '🍽️ Meals', '⛺ Camp Stay'] },
    { id: 14, name: 'Paragliding in Bir Billing', price: 12999, desc: '3 days of paragliding & camping in the Himalayas', category: 'adventure', region: 'india', img: 'images/paragling.png', badge: 'adventure', discount: 15, duration: '3 Days', rating: 4.8, reviews: 156, facilities: ['🪂 Paragliding', '📸 GoPro Video', '⛺ Camping', '🍽️ Meals'] },
    { id: 15, name: 'Scuba Diving in Andaman', price: 22999, desc: '4 days of scuba diving & marine exploration', category: 'adventure', region: 'india', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 20, duration: '4 Days', rating: 4.9, reviews: 132, facilities: ['🤿 Scuba Diving', '🐠 Marine Guide', '🏨 Resort Stay', '🍽️ All Meals'] },
    { id: 16, name: 'Delhi Heritage Walk', price: 6999, desc: '2 days exploring Old Delhi & New Delhi\'s landmarks', category: 'city', region: 'india', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.4, reviews: 234, facilities: ['🏛️ Monument Entry', '🚶 Guided Walk', '🍛 Street Food', '🎧 Audio Guide'] },
    { id: 17, name: 'Bangalore Tech & Nature', price: 8499, desc: '2 days of IT parks, gardens & lakes of Bengaluru', category: 'city', region: 'india', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 5, duration: '2 Days', rating: 4.5, reviews: 178, facilities: ['🌳 Garden Tour', '🏢 Tech Park Visit', '🍽️ Breakfast', '🚗 Cab Service'] },
    { id: 18, name: 'Hyderabad Culture', price: 7999, desc: '2 days of biryani, pearls & monuments of Hyderabad', category: 'city', region: 'india', img: 'images/hyderabad.png', badge: 'budget', discount: 0, duration: '2 Days', rating: 4.6, reviews: 189, facilities: ['🍛 Biryani Tour', '💎 Pearl Shopping', '🏰 Fort Visit', '🚗 AC Car'] },
    { id: 19, name: 'Paris Romance', price: 85000, desc: '5 days in the City of Love - Eiffel Tower & Louvre', category: 'city', region: 'europe', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 10, duration: '5 Days', rating: 4.9, reviews: 456, facilities: ['🗼 Eiffel Tower', '🏛️ Louvre Museum', '🛳️ Seine Cruise', '🥐 Breakfast'] },
    { id: 20, name: 'Rome Ancient Tour', price: 75000, desc: '5 days exploring Colosseum, Vatican & Roman history', category: 'cultural', region: 'europe', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 8, duration: '5 Days', rating: 4.8, reviews: 389, facilities: ['🏛️ Colosseum', '⛪ Vatican Tour', '🍕 Italian Food', '🚌 City Pass'] },
    { id: 21, name: 'London Royal Experience', price: 95000, desc: '6 days of Big Ben, Buckingham & British culture', category: 'city', region: 'europe', img: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 12, duration: '6 Days', rating: 4.8, reviews: 312, facilities: ['🕰️ Big Ben', '👑 Buckingham Palace', '🎡 London Eye', '🍳 Breakfast'] },
    { id: 22, name: 'Swiss Alps Adventure', price: 120000, desc: '7 days of snow-capped peaks & scenic trains', category: 'mountain', region: 'europe', img: 'images/mountain2.png', badge: 'adventure', discount: 15, duration: '7 Days', rating: 5.0, reviews: 245, facilities: ['🚂 Scenic Train', '🏔️ Mountain View', '⛷️ Ski Pass', '🍽️ All Meals'] },
    { id: 23, name: 'Santorini Sunset', price: 90000, desc: '5 days of white-blue villages & Aegean sunsets', category: 'beach', region: 'europe', img: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 10, duration: '5 Days', rating: 4.9, reviews: 378, facilities: ['🌅 Sunset View', '🏖️ Beach Day', '🍷 Wine Tour', '🏨 Cave Hotel'] },
    { id: 24, name: 'Barcelona Art & Beach', price: 80000, desc: '5 days of Gaudí architecture & Mediterranean beaches', category: 'cultural', region: 'europe', img: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '5 Days', rating: 4.7, reviews: 289, facilities: ['🎨 Gaudí Tour', '🏖️ Beach Visit', '🍷 Tapas Tour', '🍳 Breakfast'] },
    { id: 25, name: 'New York City Break', price: 110000, desc: '5 days in the city that never sleeps', category: 'city', region: 'americas', img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 12, duration: '5 Days', rating: 4.9, reviews: 567, facilities: ['🗽 Statue of Liberty', '🌆 Times Square', '🎭 Broadway Show', '🍕 NY Pizza Tour'] },
    { id: 26, name: 'Los Angeles Dream', price: 95000, desc: '5 days of Hollywood, beaches & theme parks', category: 'city', region: 'americas', img: 'https://images.unsplash.com/photo-1534190760961-74e8c1c5c3da?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '5 Days', rating: 4.7, reviews: 423, facilities: ['🎬 Hollywood Tour', '🎢 Theme Park', '🏖️ Santa Monica', '🚗 Car Rental'] },
    { id: 27, name: 'Cancun Beach Paradise', price: 85000, desc: '6 days of white sand beaches & Mayan ruins', category: 'beach', region: 'americas', img: 'images/beach3.png', badge: 'luxury', discount: 15, duration: '6 Days', rating: 4.8, reviews: 312, facilities: ['🏖️ Beach Resort', '🏛️ Mayan Ruins', '🤿 Snorkeling', '🍽️ All Inclusive'] },
    { id: 28, name: 'Toronto Multicultural', price: 90000, desc: '5 days of CN Tower, Niagara Falls & diversity', category: 'city', region: 'americas', img: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '5 Days', rating: 4.7, reviews: 245, facilities: ['🗼 CN Tower', '💦 Niagara Falls', '🍽️ Food Tour', '🚌 City Pass'] },
    { id: 29, name: 'Tokyo Cherry Blossom', price: 90000, desc: '6 days of sakura, Shibuya & Mount Fuji views', category: 'city', region: 'asia', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 12, duration: '6 Days', rating: 5.0, reviews: 523, facilities: ['🌸 Cherry Blossom', '🗻 Mount Fuji', '🍣 Sushi Tour', '🚄 Bullet Train'] },
    { id: 30, name: 'Dubai Luxury Experience', price: 55000, desc: '4 days of Burj Khalifa, desert safari & malls', category: 'city', region: 'asia', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 15, duration: '4 Days', rating: 4.8, reviews: 467, facilities: ['🏙️ Burj Khalifa', '🐪 Desert Safari', '🛍️ Dubai Mall', '🍽️ Fine Dining'] },
    { id: 31, name: 'Bali Island Escape', price: 45000, desc: '5 days of beaches, temples & rice terraces', category: 'beach', region: 'asia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 20, duration: '5 Days', rating: 4.9, reviews: 678, facilities: ['🏖️ Beach Day', '🛕 Temple Tour', '🌾 Rice Terrace', '🍽️ Breakfast'] },
    { id: 32, name: 'Singapore Modern Tour', price: 50000, desc: '4 days of Marina Bay, Sentosa & Gardens', category: 'city', region: 'asia', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '4 Days', rating: 4.8, reviews: 389, facilities: ['🌃 Marina Bay', '🎢 Universal Studios', '🌳 Gardens by Bay', '🍽️ Local Food'] },
    { id: 33, name: 'Bangkok Temple Tour', price: 35000, desc: '4 days of golden temples & Thai street food', category: 'cultural', region: 'asia', img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=400&h=400&fit=crop&auto=format', badge: 'budget', discount: 15, duration: '4 Days', rating: 4.7, reviews: 456, facilities: ['🛕 Temple Tour', '🍜 Street Food', '🛶 Floating Market', '💆 Thai Massage'] },
    { id: 34, name: 'Maldives Luxury', price: 95000, desc: '5 days of overwater villas & crystal-clear waters', category: 'beach', region: 'asia', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 18, duration: '5 Days', rating: 5.0, reviews: 234, facilities: ['🏝️ Overwater Villa', '🤿 Snorkeling', '🍽️ All Meals', '💆 Spa Treatment'] },
    { id: 35, name: 'Cape Town Adventure', price: 85000, desc: '6 days of Table Mountain, safaris & beaches', category: 'adventure', region: 'africa', img: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 12, duration: '6 Days', rating: 4.9, reviews: 245, facilities: ['🏔️ Table Mountain', '🦁 Safari', '🏖️ Beach Day', '🍽️ Wine Tour'] },
    { id: 36, name: 'Marrakech Cultural', price: 65000, desc: '5 days of desert, medinas & Moroccan culture', category: 'cultural', region: 'africa', img: 'https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 10, duration: '5 Days', rating: 4.7, reviews: 189, facilities: ['🐪 Desert Camel', '🏜️ Desert Camp', '🛍️ Medina Tour', '🍽️ Moroccan Food'] },
    { id: 37, name: 'Cairo Pyramids Tour', price: 70000, desc: '5 days of pyramids, Nile cruise & Egyptian history', category: 'cultural', region: 'africa', img: 'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?w=400&h=400&fit=crop&auto=format', badge: 'popular', discount: 12, duration: '5 Days', rating: 4.8, reviews: 267, facilities: ['🔺 Pyramids', '🚢 Nile Cruise', '🏛️ Museum Tour', '🍽️ Egyptian Food'] },
    { id: 38, name: 'Sydney Harbour Tour', price: 100000, desc: '6 days of Opera House, Bondi & Blue Mountains', category: 'city', region: 'oceania', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400&h=400&fit=crop&auto=format', badge: 'luxury', discount: 10, duration: '6 Days', rating: 4.9, reviews: 312, facilities: ['🎭 Opera House', '🏖️ Bondi Beach', '🏔️ Blue Mountains', '🦘 Wildlife Park'] },
    { id: 39, name: 'Queenstown Adventure', price: 115000, desc: '7 days of bungee, skiing & Milford Sound', category: 'adventure', region: 'oceania', img: 'https://images.unsplash.com/photo-1589802829985-817e51171b92?w=400&h=400&fit=crop&auto=format', badge: 'adventure', discount: 15, duration: '7 Days', rating: 5.0, reviews: 198, facilities: ['🪂 Bungee Jump', '⛷️ Ski Pass', '🚢 Milford Sound', '🎿 Ski Gear'] }
];

// ============================================================
// STATE
// ============================================================
let wishlist = readJSON('exploreworld_wishlist', []);
let userRatings = readJSON('exploreworld_user_ratings', {});
let tourComments = readJSON('exploreworld_comments', {});
let userBookings = readJSON('exploreworld_bookings', []);
let userPayments = readJSON('exploreworld_payments', []);
let currentCategory = 'all';
let currentPriceFilter = 'all';
let currentDurationFilter = 'all';
let currentSort = 'default';
let popupTourId = null;
let isLoggedIn = JSON.parse(localStorage.getItem('exploreworld_logged_in')) || false;
let currentSlide = 0;
let totalSlides = 0;
let bookingTour = null;
let selectedPaymentMethod = 'card';
let currentRegion = 'europe';
let pendingAction = null;
let calendarCursor = new Date();
let currentLanguage = localStorage.getItem('exploreworld_language') || 'en';
let counterStarted = false;

function readJSON(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch (error) { return fallback; }
}

function safeSetJSON(key, value) {
    try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) {}
}

let isListening = false;
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// ============================================================
// MULTI-LANGUAGE — FULL WEBSITE TRANSLATION
// ============================================================
const translations = {
    en: {
        "nav.home": "🏠 Home", "nav.about": "📖 About", "nav.tours": "✈️ Tours",
        "nav.offers": "🔥 Offers", "nav.profile": "👤 Profile",
        "nav.search": "Search destinations...",
        "hero.badge": "🌍 Your Journey Begins Here",
        "hero.title": "Explore the <span class='hero-highlight'>World</span>,<br/>One City at a Time",
        "hero.subtitle": "500+ destinations across India and the world — beaches, mountains, cities, and adventures await.",
        "hero.searchPlaceholder": "Where do you want to go?",
        "hero.searchBtn": "Search",
        "hero.stat1Label": "Happy Travelers", "hero.stat2Label": "Destinations", "hero.stat3Label": "Satisfaction",
        "hero.scroll": "⬇️ Scroll to explore",
        "cat.title": "Explore by Category", "cat.subtitle": "Pick your vibe — thousands of tours, one destination",
        "cat.beaches": "Beaches", "cat.mountains": "Mountains", "cat.cities": "Cities",
        "cat.cultural": "Cultural", "cat.adventure": "Adventure", "cat.international": "International",
        "live.kicker": "LIVE TRAVEL TOOLS", "live.title": "Plan With Live Information",
        "live.subtitle": "Real-time weather and a live travel calendar, right on the homepage.",
        "live.weather": "🌤️ Live Weather", "live.useLocation": "📍 Use my location",
        "live.cityPlaceholder": "Enter city, e.g. Jaipur", "live.search": "Search",
        "live.weatherLoading": "Checking live weather…", "live.weatherHint": "Search a city or use your location.",
        "live.calendar": "📅 Live Calendar",
        "trending.title": "🔥 Trending This Week", "trending.subtitle": "Most booked destinations right now",
        "intl.title": "🌍 Top International Tours", "intl.subtitle": "Fly beyond borders — explore the world",
        "intl.europe": "🗼 Europe", "intl.americas": "🗽 Americas", "intl.asia": "🏯 Asia",
        "intl.africa": "🦁 Africa", "intl.oceania": "🦘 Oceania",
        "faq.title": "❓ Frequently Asked Questions", "faq.subtitle": "Everything you need to know before booking",
        "reviews.title": "💬 What Our Travelers Say", "reviews.subtitle": "Real experiences from real adventurers",
        "about.eyebrow": "🌍 TRAVEL WITHOUT LIMITS", "about.heroTitle": "We Turn Places Into Stories",
        "about.heroSubtitle": "A modern travel experience built around discovery, simple booking and unforgettable memories. From the beaches of Goa to the streets of Paris — every journey is designed to feel effortless.",
        "about.exploreBtn": "Explore Tours →", "about.since": "Since 2020 · 50K+ travelers",
        "about.whoKicker": "WHO WE ARE",
        "about.whoTitle": "Travel should feel <span>exciting, not complicated.</span>",
        "about.whoPara1": "Explore World connects travelers with handpicked experiences across India and the world. We combine beautiful destinations, clear pricing and easy digital booking into one simple journey.",
        "about.whoPara2": "From quick weekend escapes to long international adventures, every tour is curated by people who actually love to travel. You get real photos, honest pricing, verified operators and support that stays with you before, during and after the trip.",
        "about.missionKicker": "OUR MISSION",
        "about.missionTitle": "Make every trip <span>simple and memorable.</span>",
        "about.missionPara1": "We believe great travel should not require endless research. That is why every tour on Explore World is designed to be easy to understand, easy to compare and easy to book — even on your phone during a bus ride.",
        "about.missionPara2": "We handle the boring parts so you can focus on the fun ones: what to see, what to eat and where to make your next memory.",
        "about.dnaKicker": "OUR DNA", "about.dnaTitle": "Built for curious explorers",
        "about.discover": "Discover", "about.discoverDesc": "Find meaningful places and experiences beyond the usual checklist.",
        "about.experience": "Experience", "about.experienceDesc": "Travel with carefully curated itineraries and destination-focused details.",
        "about.trust": "Trust", "about.trustDesc": "Transparent information, secure booking flow and helpful support.",
        "about.care": "Care", "about.careDesc": "Every interaction is designed around the traveler, before and after booking.",
        "about.happyTravelers": "Happy Travelers", "about.destinations": "Destinations",
        "about.countries": "Countries", "about.avgRating": "Average Rating",
        "about.whyKicker": "WHY EXPLORE WORLD", "about.whyTitle": "Everything you need for the journey",
        "about.clearInfo": "Clear Information", "about.clearInfoDesc": "Destination, duration, pricing and ratings in one place.",
        "about.easyBooking": "Easy Booking", "about.easyBookingDesc": "Simple traveler details, payment options and instant confirmation.",
        "about.liveUpdates": "Live Updates", "about.liveUpdatesDesc": "Keep track of booking status from your profile.",
        "about.travelBot": "TravelBot", "about.travelBotDesc": "Get quick travel answers and voice assistance while you explore.",
        "about.wishlist": "Wishlist", "about.wishlistDesc": "Save tours you love and come back whenever you're ready.",
        "about.digitalTicket": "Digital Ticket", "about.digitalTicketDesc": "Receive a digital booking ticket after confirmation.",
        "tours.eyebrow": "✈️ CURATED FOR YOU", "tours.title": "Your Next Story Starts Here",
        "tours.subtitle": "Explore real destinations, compare tours and book your next escape in a few clicks.",
        "tours.pill1": "🌏 39 destinations", "tours.pill2": "⭐ Rated by travelers", "tours.pill3": "🔒 Secure booking",
        "tours.allBtn": "All Tours", "tours.priceLabel": "Price:", "tours.priceAll": "All",
        "tours.durationLabel": "Duration:", "tours.durationAll": "All", "tours.sortLabel": "Sort:",
        "tours.sortDefault": "Default", "tours.sortPriceLow": "Price: Low to High",
        "tours.sortPriceHigh": "Price: High to Low", "tours.sortRating": "Rating",
    },
    hi: {
        "nav.home": "🏠 होम", "nav.about": "📖 हमारे बारे में", "nav.tours": "✈️ टूर",
        "nav.offers": "🔥 ऑफ़र", "nav.profile": "👤 प्रोफ़ाइल", "nav.search": "डेस्टिनेशन खोजें...",
        "hero.badge": "🌍 आपकी यात्रा यहाँ से शुरू होती है",
        "hero.title": "<span class='hero-highlight'>दुनिया</span> की सैर करें,<br/>एक शहर एक बार में",
        "hero.subtitle": "भारत और दुनिया भर में 500+ डेस्टिनेशन — बीच, पहाड़, शहर और एडवेंचर आपका इंतज़ार कर रहे हैं।",
        "hero.searchPlaceholder": "आप कहाँ जाना चाहते हैं?", "hero.searchBtn": "खोजें",
        "hero.stat1Label": "खुश यात्री", "hero.stat2Label": "डेस्टिनेशन", "hero.stat3Label": "संतुष्टि",
        "hero.scroll": "⬇️ एक्सप्लोर करने के लिए स्क्रॉल करें",
        "cat.title": "कैटेगरी से एक्सप्लोर करें", "cat.subtitle": "अपनी पसंद चुनें — हज़ारों टूर, एक डेस्टिनेशन",
        "cat.beaches": "बीच", "cat.mountains": "पहाड़", "cat.cities": "शहर",
        "cat.cultural": "सांस्कृतिक", "cat.adventure": "एडवेंचर", "cat.international": "इंटरनेशनल",
        "live.kicker": "लाइव ट्रैवल टूल्स", "live.title": "लाइव जानकारी के साथ प्लान करें",
        "live.subtitle": "होमपेज पर रियल-टाइम मौसम और लाइव ट्रैवल कैलेंडर।",
        "live.weather": "🌤️ लाइव मौसम", "live.useLocation": "📍 मेरी लोकेशन",
        "live.cityPlaceholder": "शहर दर्ज करें, जैसे जयपुर", "live.search": "खोजें",
        "live.weatherLoading": "मौसम लोड हो रहा है…", "live.weatherHint": "शहर खोजें या लोकेशन इस्तेमाल करें।",
        "live.calendar": "📅 लाइव कैलेंडर",
        "trending.title": "🔥 इस हफ्ते ट्रेंडिंग", "trending.subtitle": "अभी सबसे ज़्यादा बुक होने वाले डेस्टिनेशन",
        "intl.title": "🌍 टॉप इंटरनेशनल टूर", "intl.subtitle": "सीमाओं से आगे — दुनिया एक्सप्लोर करें",
        "intl.europe": "🗼 यूरोप", "intl.americas": "🗽 अमेरिका", "intl.asia": "🏯 एशिया",
        "intl.africa": "🦁 अफ्रीका", "intl.oceania": "🦘 ओशिनिया",
        "faq.title": "❓ अक्सर पूछे जाने वाले सवाल", "faq.subtitle": "बुकिंग से पहले जानने योग्य सब कुछ",
        "reviews.title": "💬 हमारे यात्री क्या कहते हैं", "reviews.subtitle": "असली एडवेंचरर्स के असली अनुभव",
        "about.eyebrow": "🌍 बिना सीमाओं के यात्रा", "about.heroTitle": "हम जगहों को कहानियों में बदलते हैं",
        "about.heroSubtitle": "खोज, आसान बुकिंग और अविस्मरणीय यादों के इर्द-गिर्द बना एक आधुनिक ट्रैवल अनुभव। गोवा के बीच से लेकर पेरिस की सड़कों तक — हर यात्रा आसान महसूस होने के लिए डिज़ाइन की गई है।",
        "about.exploreBtn": "टूर एक्सप्लोर करें →", "about.since": "2020 से · 50K+ यात्री",
        "about.whoKicker": "हम कौन हैं",
        "about.whoTitle": "यात्रा <span>रोमांचक होनी चाहिए, जटिल नहीं।</span>",
        "about.whoPara1": "Explore World भारत और दुनिया भर में यात्रियों को चुनिंदा अनुभवों से जोड़ता है। हम सुंदर डेस्टिनेशन, स्पष्ट मूल्य निर्धारण और आसान डिजिटल बुकिंग को एक सरल यात्रा में जोड़ते हैं।",
        "about.whoPara2": "छोटी वीकेंड ट्रिप से लेकर लंबे इंटरनेशनल एडवेंचर तक, हर टूर उन लोगों द्वारा क्यूरेट किया जाता है जो वाकई यात्रा करना पसंद करते हैं।",
        "about.missionKicker": "हमारा मिशन",
        "about.missionTitle": "हर यात्रा को <span>सरल और यादगार बनाएं।</span>",
        "about.missionPara1": "हम मानते हैं कि बेहतरीन यात्रा के लिए अंतहीन रिसर्च की ज़रूरत नहीं होनी चाहिए। इसलिए Explore World पर हर टूर को समझने, तुलना करने और बुक करने में आसान बनाया गया है।",
        "about.missionPara2": "हम उबाऊ हिस्से संभालते हैं ताकि आप मज़ेदार हिस्सों पर ध्यान दे सकें।",
        "about.dnaKicker": "हमारा डीएनए", "about.dnaTitle": "जिज्ञासु खोजकर्ताओं के लिए बनाया गया",
        "about.discover": "खोजें", "about.discoverDesc": "सामान्य चेकलिस्ट से आगे की सार्थक जगहें और अनुभव खोजें।",
        "about.experience": "अनुभव", "about.experienceDesc": "सावधानी से क्यूरेट किए गए इटिनरेरी और डेस्टिनेशन-केंद्रित विवरण के साथ यात्रा करें।",
        "about.trust": "भरोसा", "about.trustDesc": "पारदर्शी जानकारी, सुरक्षित बुकिंग प्रवाह और सहायक सपोर्ट।",
        "about.care": "देखभाल", "about.careDesc": "हर इंटरैक्शन यात्री के इर्द-गिर्द डिज़ाइन किया गया है।",
        "about.happyTravelers": "खुश यात्री", "about.destinations": "डेस्टिनेशन",
        "about.countries": "देश", "about.avgRating": "औसत रेटिंग",
        "about.whyKicker": "क्यों EXPLORE WORLD", "about.whyTitle": "यात्रा के लिए आपको जो चाहिए",
        "about.clearInfo": "स्पष्ट जानकारी", "about.clearInfoDesc": "डेस्टिनेशन, अवधि, मूल्य और रेटिंग एक जगह।",
        "about.easyBooking": "आसान बुकिंग", "about.easyBookingDesc": "सरल यात्री विवरण, भुगतान विकल्प और तुरंत पुष्टि।",
        "about.liveUpdates": "लाइव अपडेट", "about.liveUpdatesDesc": "अपने प्रोफ़ाइल से बुकिंग स्थिति ट्रैक करें।",
        "about.travelBot": "TravelBot", "about.travelBotDesc": "एक्सप्लोर करते समय त्वरित यात्रा उत्तर और वॉयस सहायता पाएं।",
        "about.wishlist": "विशलिस्ट", "about.wishlistDesc": "अपने पसंदीदा टूर सेव करें और जब चाहें वापस आएं।",
        "about.digitalTicket": "डिजिटल टिकट", "about.digitalTicketDesc": "पुष्टि के बाद डिजिटल बुकिंग टिकट प्राप्त करें।",
        "tours.eyebrow": "✈️ आपके लिए क्यूरेट किया गया", "tours.title": "आपकी अगली कहानी यहाँ से शुरू होती है",
        "tours.subtitle": "असली डेस्टिनेशन एक्सप्लोर करें, टूर की तुलना करें और कुछ क्लिक में बुक करें।",
        "tours.pill1": "🌏 39 डेस्टिनेशन", "tours.pill2": "⭐ यात्रियों द्वारा रेटेड", "tours.pill3": "🔒 सुरक्षित बुकिंग",
        "tours.allBtn": "सभी टूर", "tours.priceLabel": "कीमत:", "tours.priceAll": "सभी",
        "tours.durationLabel": "अवधि:", "tours.durationAll": "सभी", "tours.sortLabel": "क्रम:",
        "tours.sortDefault": "डिफ़ॉल्ट", "tours.sortPriceLow": "कीमत: कम से ज़्यादा",
        "tours.sortPriceHigh": "कीमत: ज़्यादा से कम", "tours.sortRating": "रेटिंग",
    },
    gu: {
        "nav.home": "🏠 હોમ", "nav.about": "📖 અમારા વિશે", "nav.tours": "✈️ ટૂર્સ",
        "nav.offers": "🔥 ઑફર્સ", "nav.profile": "👤 પ્રોફાઇલ", "nav.search": "ડેસ્ટિનેશન શોધો...",
        "hero.badge": "🌍 તમારી સફર અહીંથી શરૂ થાય છે",
        "hero.title": "<span class='hero-highlight'>દુનિયા</span> શોધો,<br/>એક સમયે એક શહેર",
        "hero.subtitle": "ભારત અને દુનિયાભરમાં 500+ ડેસ્ટિનેશન — બીચ, પર્વત, શહેરો અને એડવેન્ચર.",
        "hero.searchPlaceholder": "તમે ક્યાં જવા માંગો છો?", "hero.searchBtn": "શોધો",
        "hero.stat1Label": "ખુશ પ્રવાસીઓ", "hero.stat2Label": "ડેસ્ટિનેશન", "hero.stat3Label": "સંતોષ",
        "hero.scroll": "⬇️ એક્સપ્લોર કરવા સ્ક્રોલ કરો",
        "cat.title": "કેટેગરી દ્વારા એક્સપ્લોર કરો", "cat.subtitle": "તમારી પસંદ પસંદ કરો — હજારો ટૂર્સ, એક ડેસ્ટિનેશન",
        "cat.beaches": "બીચ", "cat.mountains": "પર્વતો", "cat.cities": "શહેરો",
        "cat.cultural": "સાંસ્કૃતિક", "cat.adventure": "એડવેન્ચર", "cat.international": "ઇન્ટરનેશનલ",
        "live.kicker": "લાઇવ ટ્રાવેલ ટૂલ્સ", "live.title": "લાઇવ માહિતી સાથે પ્લાન કરો",
        "live.subtitle": "હોમપેજ પર રીઅલ-ટાઇમ હવામાન અને લાઇવ કેલેન્ડર.",
        "live.weather": "🌤️ લાઇવ હવામાન", "live.useLocation": "📍 મારું સ્થાન",
        "live.cityPlaceholder": "શહેર દાખલ કરો, જેમ કે જયપુર", "live.search": "શોધો",
        "live.weatherLoading": "હવામાન લોડ થઈ રહ્યું છે…", "live.weatherHint": "શહેર શોધો અથવા સ્થાન વાપરો.",
        "live.calendar": "📅 લાઇવ કેલેન્ડર",
        "trending.title": "🔥 આ અઠવાડિયે ટ્રેન્ડિંગ", "trending.subtitle": "અત્યારે સૌથી વધુ બુક થતા ડેસ્ટિનેશન",
        "intl.title": "🌍 ટોપ ઇન્ટરનેશનલ ટૂર્સ", "intl.subtitle": "સીમાઓથી આગળ — દુનિયા એક્સપ્લોર કરો",
        "intl.europe": "🗼 યુરોપ", "intl.americas": "🗽 અમેરિકા", "intl.asia": "🏯 એશિયા",
        "intl.africa": "🦁 આફ્રિકા", "intl.oceania": "🦘 ઓશિયાનિયા",
        "faq.title": "❓ વારંવાર પૂછાતા પ્રશ્નો", "faq.subtitle": "બુકિંગ પહેલાં જાણવા જેવું બધું",
        "reviews.title": "💬 અમારા પ્રવાસીઓ શું કહે છે", "reviews.subtitle": "સાચા સાહસિકોના સાચા અનુભવો",
        "about.eyebrow": "🌍 મર્યાદા વગરની સફર", "about.heroTitle": "અમે સ્થળોને વાર્તાઓમાં બદલીએ છીએ",
        "about.heroSubtitle": "શોધ, સરળ બુકિંગ અને અવિસ્મરણીય યાદોની આસપાસ બનેલો આધુનિક ટ્રાવેલ અનુભવ.",
        "about.exploreBtn": "ટૂર્સ એક્સપ્લોર કરો →", "about.since": "2020 થી · 50K+ પ્રવાસીઓ",
        "about.whoKicker": "અમે કોણ છીએ",
        "about.whoTitle": "સફર <span>રોમાંચક હોવી જોઈએ, જટિલ નહીં.</span>",
        "about.whoPara1": "Explore World ભારત અને દુનિયાભરના પ્રવાસીઓને પસંદ કરેલા અનુભવો સાથે જોડે છે.",
        "about.whoPara2": "ટૂંકા વીકેન્ડ ટ્રિપથી લાંબા ઇન્ટરનેશનલ સાહસ સુધી, દરેક ટૂર પ્રવાસ પ્રેમીઓ દ્વારા ક્યુરેટ કરવામાં આવે છે.",
        "about.missionKicker": "અમારું મિશન",
        "about.missionTitle": "દરેક સફરને <span>સરળ અને યાદગાર બનાવો.</span>",
        "about.missionPara1": "અમે માનીએ છીએ કે સરસ સફર માટે અંતહીન સંશોધનની જરૂર નથી.",
        "about.missionPara2": "અમે કંટાળાજનક ભાગ સંભાળીએ છીએ જેથી તમે મજેદાર ભાગ પર ધ્યાન આપી શકો.",
        "about.dnaKicker": "અમારું DNA", "about.dnaTitle": "જિજ્ઞાસુ સાહસિકો માટે બનેલું",
        "about.discover": "શોધો", "about.discoverDesc": "સામાન્ય ચેકલિસ્ટથી આગળ અર્થપૂર્ણ સ્થળો અને અનુભવો શોધો.",
        "about.experience": "અનુભવ", "about.experienceDesc": "કાળજીપૂર્વક ક્યુરેટ કરેલા ઇટિનરરી સાથે પ્રવાસ કરો.",
        "about.trust": "વિશ્વાસ", "about.trustDesc": "પારદર્શક માહિતી, સુરક્ષિત બુકિંગ પ્રવાહ અને સહાયક સપોર્ટ.",
        "about.care": "સંભાળ", "about.careDesc": "દરેક ક્રિયાપ્રતિક્રિયા પ્રવાસીની આસપાસ ડિઝાઇન કરેલી છે.",
        "about.happyTravelers": "ખુશ પ્રવાસીઓ", "about.destinations": "ડેસ્ટિનેશન",
        "about.countries": "દેશો", "about.avgRating": "સરેરાશ રેટિંગ",
        "about.whyKicker": "કેમ EXPLORE WORLD", "about.whyTitle": "સફર માટે જે જોઈએ તે બધું",
        "about.clearInfo": "સ્પષ્ટ માહિતી", "about.clearInfoDesc": "ડેસ્ટિનેશન, અવધિ, ભાવ અને રેટિંગ એક જગ્યાએ.",
        "about.easyBooking": "સરળ બુકિંગ", "about.easyBookingDesc": "સરળ પ્રવાસી વિગતો, ચુકવણી વિકલ્પો અને તાત્કાલિક પુષ્ટિ.",
        "about.liveUpdates": "લાઇવ અપડેટ્સ", "about.liveUpdatesDesc": "તમારી પ્રોફાઇલથી બુકિંગ સ્થિતિ ટ્રેક કરો.",
        "about.travelBot": "TravelBot", "about.travelBotDesc": "એક્સપ્લોર કરતી વખતે ઝડપી જવાબો અને વોઇસ સહાય મેળવો.",
        "about.wishlist": "વિશલિસ્ટ", "about.wishlistDesc": "તમને ગમતી ટૂર્સ સેવ કરો અને તૈયાર હો ત્યારે પાછા આવો.",
        "about.digitalTicket": "ડિજિટલ ટિકિટ", "about.digitalTicketDesc": "પુષ્ટિ પછી ડિજિટલ બુકિંગ ટિકિટ મેળવો.",
        "tours.eyebrow": "✈️ તમારા માટે ક્યુરેટ કરેલું", "tours.title": "તમારી આગળની વાર્તા અહીંથી શરૂ થાય છે",
        "tours.subtitle": "સાચા ડેસ્ટિનેશન એક્સપ્લોર કરો, ટૂર્સની તુલના કરો અને થોડા ક્લિકમાં બુક કરો.",
        "tours.pill1": "🌏 39 ડેસ્ટિનેશન", "tours.pill2": "⭐ પ્રવાસીઓ દ્વારા રેટેડ", "tours.pill3": "🔒 સુરક્ષિત બુકિંગ",
        "tours.allBtn": "બધી ટૂર્સ", "tours.priceLabel": "ભાવ:", "tours.priceAll": "બધા",
        "tours.durationLabel": "અવધિ:", "tours.durationAll": "બધા", "tours.sortLabel": "ક્રમ:",
        "tours.sortDefault": "ડિફોલ્ટ", "tours.sortPriceLow": "ભાવ: ઓછાથી વધુ",
        "tours.sortPriceHigh": "ભાવ: વધુથી ઓછો", "tours.sortRating": "રેટિંગ",
    }
};

function applyLanguage(lang) {
    currentLanguage = translations[lang] ? lang : 'en';
    localStorage.setItem('exploreworld_language', currentLanguage);
    const t = translations[currentLanguage];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            if (el.getAttribute('data-i18n-html') === 'true') el.innerHTML = t[key];
            else el.textContent = t[key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.placeholder = t[key];
    });

    document.querySelectorAll('select option[data-i18n]').forEach(opt => {
        const key = opt.getAttribute('data-i18n');
        if (t[key]) opt.textContent = t[key];
    });

    document.documentElement.lang = currentLanguage;
    renderCalendar();
    console.log(`🌐 Language: ${currentLanguage}`);
}

// ============================================================
// VOICE RECOGNITION
// ============================================================
function startVoiceSearch(inputId, button, onResultCallback) {
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SR) { showFeedback('⚠️ Voice search not supported', 'error'); return; }
    if (button.classList.contains("listening")) {
        if (window.currentRecognition) window.currentRecognition.stop();
        return;
    }
    const input = document.getElementById(inputId);
    if (!input) return;

    const recognition = new SR();
    window.currentRecognition = recognition;
    recognition.continuous = false;
    recognition.interimResults = true;
    const languageMap = { en: "en-IN", hi: "hi-IN", gu: "gu-IN" };
    recognition.lang = languageMap[currentLanguage] || "en-IN";
    let finalTranscript = "";
    button.classList.add("listening");

    recognition.onresult = function (event) {
        let interimTranscript = "";
        for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) finalTranscript += transcript + " ";
            else interimTranscript += transcript;
        }
        input.value = (finalTranscript + interimTranscript).trim();
        input.dispatchEvent(new Event("input", { bubbles: true }));
    };

    recognition.onerror = function (event) {
        button.classList.remove("listening");
        if (event.error === "not-allowed") showFeedback('⚠️ Please allow microphone permission', 'error');
    };

    recognition.onend = function () {
        button.classList.remove("listening");
        const finalText = finalTranscript.trim();
        if (finalText) {
            input.value = finalText;
            input.dispatchEvent(new Event("input", { bubbles: true }));
            if (typeof onResultCallback === "function") onResultCallback(finalText);
            else if (typeof performSearch === "function") performSearch(finalText);
        }
        window.currentRecognition = null;
    };

    recognition.start();
}

// ============================================================
// SEARCH
// ============================================================
function performSearch(query) {
    const q = (query || '').trim().toLowerCase();
    if (!q) { showFeedback('🔍 Please enter a search term', 'info'); return; }
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById('tours').classList.remove('hidden');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.nav-link[data-section="tours"]').forEach(l => l.classList.add('active'));
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
    currentCategory = 'all';
    updateCategoryTheme('all');
    renderTours('all', currentPriceFilter, currentDurationFilter, currentSort);

    setTimeout(() => {
        const cards = document.querySelectorAll('.tour-card');
        let found = 0;
        cards.forEach(card => {
            const name = card.querySelector('h3')?.innerText?.toLowerCase() || '';
            const desc = card.querySelector('.description')?.innerText?.toLowerCase() || '';
            const match = name.includes(q) || desc.includes(q);
            card.style.display = match ? 'flex' : 'none';
            if (match) found++;
        });
        if (found === 0) showFeedback(`⚠️ No tours found for "${query}"`, 'info');
        else showFeedback(`🔍 Found ${found} tour(s) for "${query}"`, 'success');
    }, 100);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================================
// PASSWORD TOGGLE
// ============================================================
function setupPasswordToggle() {
    document.querySelectorAll('.toggle-password').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const input = document.getElementById(targetId);
            if (input) {
                if (input.type === 'password') { input.type = 'text'; this.textContent = '🙈'; }
                else { input.type = 'password'; this.textContent = '👁️'; }
            }
        });
    });
}

// ============================================================
// ACCOUNT MANAGEMENT
// ============================================================
function checkAccount() {
    let account = null;
    try { account = JSON.parse(localStorage.getItem('exploreworld_account') || 'null'); } catch (_) {}
    const loggedInFlag = localStorage.getItem('exploreworld_logged_in') === 'true';
    const accountPage = document.getElementById('createAccountPage');
    const mainApp = document.getElementById('mainApp');

    if (account && loggedInFlag) {
        isLoggedIn = true;
        if (accountPage) { accountPage.style.display = 'none'; accountPage.classList.remove('open'); }
        if (mainApp) mainApp.style.display = 'block';
        document.getElementById('profileName').textContent = account.fullName || 'Traveler';
        document.getElementById('profileEmail').textContent = account.email || '-';
        document.getElementById('profilePhone').textContent = account.phone || '-';
        document.getElementById('editFullName').value = account.fullName || '';
        document.getElementById('editEmail').value = account.email || '';
        document.getElementById('editPhone').value = account.phone || '';

        const avatarData = localStorage.getItem('exploreworld_avatar');
        const img = document.getElementById('profileAvatarImage');
        const avatarText = document.getElementById('profileAvatarText');
        if (avatarData && img) {
            img.src = avatarData;
            img.style.display = 'block';
            if (avatarText) avatarText.style.display = 'none';
        } else if (img) {
            img.style.display = 'none';
            if (avatarText) avatarText.style.display = 'block';
        }

        renderAddresses();
        renderUserBookings();
        renderUserPayments();
        renderNotificationPanel();

        if (pendingAction) {
            const action = pendingAction;
            pendingAction = null;
            setTimeout(() => {
                if (action.type === 'book') openBookingPopup(action.tourId);
                else if (action.type === 'wishlist') toggleWishlistItem(action.tourId);
                else if (action.type === 'wishlistView') openWishlistOverlay();
                else if (action.type === 'enquiry') openPopup(action.tourId);
            }, 250);
        }
    } else {
        isLoggedIn = false;
        if (accountPage) { accountPage.style.display = 'none'; accountPage.classList.remove('open'); }
        if (mainApp) mainApp.style.display = 'block';
    }
}

function redirectToAccount(actionType, tourId) {
    pendingAction = { type: actionType, tourId: tourId };
    const accountPage = document.getElementById('createAccountPage');
    if (accountPage) { accountPage.style.display = 'flex'; accountPage.classList.add('open'); }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const fullName = document.getElementById('accFullName').value.trim();
    const email = document.getElementById('accEmail').value.trim();
    const phone = document.getElementById('accPhone').value.trim();
    const password = document.getElementById('accPassword').value;
    const confirmPassword = document.getElementById('accConfirmPassword').value;

    if (!fullName || !email || !phone || !password || !confirmPassword) { showFeedback('⚠️ Please fill all fields', 'error'); return; }
    if (password !== confirmPassword) { showFeedback('⚠️ Passwords do not match', 'error'); return; }
    if (password.length < 6) { showFeedback('⚠️ Password must be at least 6 characters', 'error'); return; }
    if (!email.includes('@')) { showFeedback('⚠️ Please enter a valid email', 'error'); return; }

    safeSetJSON('exploreworld_account', { fullName, email, phone, password });
    localStorage.setItem('exploreworld_logged_in', 'true');
    isLoggedIn = true;
    showFeedback('✅ Account created successfully! 🎉', 'success');
    this.reset();
    checkAccount();
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const account = readJSON('exploreworld_account', null);
    if (!account) { showFeedback('⚠️ No account found. Please sign up first.', 'error'); return; }
    if (account.email === email && account.password === password) {
        localStorage.setItem('exploreworld_logged_in', 'true');
        isLoggedIn = true;
        showFeedback('✅ Login successful!', 'success');
        this.reset();
        checkAccount();
    } else {
        showFeedback('⚠️ Invalid email or password', 'error');
    }
});

document.getElementById('showLoginPage').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.account-box:first-child').style.display = 'none';
    document.getElementById('loginBox').style.display = 'block';
});
document.getElementById('showSignupPage').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('loginBox').style.display = 'none';
    document.querySelector('.account-box:first-child').style.display = 'block';
});

document.getElementById('logoutBtn').addEventListener('click', function() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('exploreworld_logged_in');
        isLoggedIn = false;
        showFeedback('🚪 Logged out successfully', 'info');
        document.getElementById('loginForm').reset();
        document.getElementById('createAccountForm').reset();
        document.querySelector('.account-box:first-child').style.display = 'block';
        document.getElementById('loginBox').style.display = 'none';
        document.getElementById('wishlistOverlay').classList.remove('open');
        document.getElementById('tourPopup').classList.remove('open');
        document.getElementById('bookingPopup').classList.remove('open');
        document.getElementById('createAccountPage').classList.remove('open');
        document.getElementById('createAccountPage').style.display = 'none';
        document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
        document.getElementById('home').classList.remove('hidden');
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.nav-link[data-section="home"]').forEach(l => l.classList.add('active'));
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

// ============================================================
// PROFILE PHOTO
// ============================================================
document.getElementById('avatarUpload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { showFeedback('⚠️ Please select an image file', 'error'); return; }
    if (file.size > 2 * 1024 * 1024) { showFeedback('⚠️ Image too large. Max 2MB', 'error'); return; }
    const reader = new FileReader();
    reader.onload = function(event) {
        const dataUrl = event.target.result;
        localStorage.setItem('exploreworld_avatar', dataUrl);
        const img = document.getElementById('profileAvatarImage');
        img.src = dataUrl;
        img.style.display = 'block';
        document.getElementById('profileAvatarText').style.display = 'none';
        showFeedback('✅ Profile photo updated!', 'success');
    };
    reader.readAsDataURL(file);
});

// ============================================================
// PROFILE EDIT / PASSWORD
// ============================================================
document.getElementById('editProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'block';
    document.getElementById('editProfileForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelProfileBtn').addEventListener('click', function() {
    document.getElementById('editProfileForm').style.display = 'none';
});
document.getElementById('saveProfileBtn').addEventListener('click', function() {
    const account = readJSON('exploreworld_account', null);
    if (!account) return;
    const fullName = document.getElementById('editFullName').value.trim();
    const email = document.getElementById('editEmail').value.trim();
    const phone = document.getElementById('editPhone').value.trim();
    if (!fullName || !email || !phone) { showFeedback('⚠️ Please fill all fields', 'error'); return; }
    account.fullName = fullName;
    account.email = email;
    account.phone = phone;
    safeSetJSON('exploreworld_account', account);
    document.getElementById('profileName').textContent = fullName;
    document.getElementById('profileEmail').textContent = email;
    document.getElementById('profilePhone').textContent = phone;
    document.getElementById('editProfileForm').style.display = 'none';
    showFeedback('✅ Profile updated successfully!', 'success');
});

document.getElementById('changePasswordBtn').addEventListener('click', function() {
    document.getElementById('changePasswordForm').style.display = 'block';
    document.getElementById('changePasswordForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelPasswordBtn').addEventListener('click', function() {
    document.getElementById('changePasswordForm').style.display = 'none';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
});
document.getElementById('savePasswordBtn').addEventListener('click', function() {
    const account = readJSON('exploreworld_account', null);
    if (!account) return;
    const current = document.getElementById('currentPassword').value;
    const newPwd = document.getElementById('newPassword').value;
    const confirmPwd = document.getElementById('confirmNewPassword').value;
    if (current !== account.password) { showFeedback('⚠️ Current password is incorrect', 'error'); return; }
    if (newPwd.length < 6) { showFeedback('⚠️ New password must be at least 6 characters', 'error'); return; }
    if (newPwd !== confirmPwd) { showFeedback('⚠️ Passwords do not match', 'error'); return; }
    account.password = newPwd;
    safeSetJSON('exploreworld_account', account);
    document.getElementById('changePasswordForm').style.display = 'none';
    document.getElementById('currentPassword').value = '';
    document.getElementById('newPassword').value = '';
    document.getElementById('confirmNewPassword').value = '';
    showFeedback('✅ Password changed successfully!', 'success');
});

// ============================================================
// NOTIFICATIONS
// ============================================================
document.getElementById('notificationsBtn').addEventListener('click', function() {
    const panel = document.getElementById('notificationsPanel');
    const isVisible = panel.style.display === 'block';
    panel.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        const prefs = readJSON('exploreworld_notifications', { bookings: true, offers: true, reminders: false, newsletter: false });
        document.getElementById('notifBookings').checked = prefs.bookings;
        document.getElementById('notifOffers').checked = prefs.offers;
        document.getElementById('notifReminders').checked = prefs.reminders;
        document.getElementById('notifNewsletter').checked = prefs.newsletter;
        panel.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('saveNotificationsBtn').addEventListener('click', function() {
    const prefs = {
        bookings: document.getElementById('notifBookings').checked,
        offers: document.getElementById('notifOffers').checked,
        reminders: document.getElementById('notifReminders').checked,
        newsletter: document.getElementById('notifNewsletter').checked
    };
    safeSetJSON('exploreworld_notifications', prefs);
    showFeedback('✅ Notification preferences saved!', 'success');
});

// ============================================================
// DIGITAL TICKET
// ============================================================
document.getElementById('digitalTicketBtn').addEventListener('click', function() {
    const panel = document.getElementById('digitalTicketPanel');
    const isVisible = panel.style.display === 'block';
    panel.style.display = isVisible ? 'none' : 'block';
    if (!isVisible) {
        const lastBooking = userBookings[userBookings.length - 1];
        if (lastBooking) {
            document.getElementById('digitalTicketContent').innerHTML = `
                <p><strong>Tour:</strong> ${lastBooking.tourName}</p>
                <p><strong>Date:</strong> ${lastBooking.date}</p>
                <p><strong>Travelers:</strong> ${lastBooking.travelers}</p>
                <p><strong>Booking ID:</strong> ${lastBooking.id}</p>
                <p><strong>Amount:</strong> ₹${lastBooking.total.toLocaleString('en-IN')}</p>
            `;
        } else {
            document.getElementById('digitalTicketContent').innerHTML = '<p style="text-align:center;color:var(--text-light);">No bookings yet.</p>';
        }
        panel.scrollIntoView({ behavior: 'smooth' });
    }
});

document.getElementById('ewPrintTicket')?.addEventListener('click', () => window.print());
document.getElementById('ewDownloadTicket')?.addEventListener('click', function() {
    const box = document.querySelector('#digitalTicketContent');
    if (!box) return;
    const content = box.innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ExploreWorld-Booking-Confirmation.txt';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
});

// ============================================================
// ADDRESSES
// ============================================================
let addresses = readJSON('exploreworld_addresses', {
    home: '123, Main Street, Andheri East, Mumbai - 400001',
    office: '456, Business Park, BKC, Mumbai - 400051',
    other: '789, Lake View, Pune - 411001'
});

function renderAddresses() {
    const list = document.getElementById('addressList');
    if (!list) return;
    const labels = { home: '🏠 Home', office: '🏢 Office', other: '📍 Other' };
    let html = '';
    Object.keys(addresses).forEach(key => {
        html += `
            <div class="address-card" data-address="${key}">
                <div class="address-type">${labels[key] || key}</div>
                <div class="address-detail">${addresses[key]}</div>
                ${key === 'home' ? '<span class="address-default">Default</span>' : ''}
                ${key !== 'home' ? `<button class="address-delete" onclick="deleteAddress('${key}')">🗑️</button>` : ''}
            </div>
        `;
    });
    list.innerHTML = html || '<p style="color:var(--text-light);">No addresses added yet.</p>';
}

function deleteAddress(key) {
    if (key === 'home') { showFeedback('⚠️ Cannot delete default address', 'error'); return; }
    if (confirm('Delete this address?')) {
        delete addresses[key];
        safeSetJSON('exploreworld_addresses', addresses);
        renderAddresses();
        showFeedback('✅ Address deleted', 'success');
    }
}

document.getElementById('showAddAddress').addEventListener('click', function() {
    document.getElementById('addAddressForm').style.display = 'block';
    document.getElementById('addAddressForm').scrollIntoView({ behavior: 'smooth' });
});
document.getElementById('cancelAddressBtn').addEventListener('click', function() {
    document.getElementById('addAddressForm').style.display = 'none';
    document.getElementById('newAddressLabel').value = '';
    document.getElementById('newAddressDetail').value = '';
});
document.getElementById('saveAddressBtn').addEventListener('click', function() {
    const label = document.getElementById('newAddressLabel').value.trim();
    const detail = document.getElementById('newAddressDetail').value.trim();
    if (!label || !detail) { showFeedback('⚠️ Please fill all fields', 'error'); return; }
    const key = label.toLowerCase().replace(/\s+/g, '_');
    addresses[key] = detail;
    safeSetJSON('exploreworld_addresses', addresses);
    document.getElementById('addAddressForm').style.display = 'none';
    document.getElementById('newAddressLabel').value = '';
    document.getElementById('newAddressDetail').value = '';
    renderAddresses();
    showFeedback('✅ Address added successfully!', 'success');
});

// ============================================================
// BOOKINGS & PAYMENTS
// ============================================================
function renderUserBookings() {
    const container = document.getElementById('userBookingsList');
    if (!container) return;
    if (userBookings.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:1.5rem;">No bookings yet. Start exploring!</p>';
        return;
    }
    const sorted = [...userBookings].sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
    container.innerHTML = sorted.map(b => {
        const hoursPassed = (Date.now() - new Date(b.bookingDate).getTime()) / (1000 * 60 * 60);
        let status = 'pending', statusText = '⏳ Pending', stepClass = 'active';
        if (hoursPassed > 24) { status = 'delivered'; statusText = '✅ Completed'; stepClass = 'completed'; }
        else if (hoursPassed > 1) { status = 'transit'; statusText = '✈️ In Progress'; }
        return `
            <div class="order-card">
                <div class="order-header">
                    <span class="order-id">#${b.id}</span>
                    <span class="order-status ${status}">${statusText}</span>
                </div>
                <div class="order-details">
                    <span>${b.tourName}</span>
                    <span>₹${b.total.toLocaleString('en-IN')}</span>
                    <span>📅 ${b.date}</span>
                </div>
                <div class="order-details" style="margin-top:4px;font-size:0.8rem;">
                    <span>👥 ${b.travelers} traveler(s)</span>
                    <span>📆 ${b.days} day(s)</span>
                    <span>💳 ${b.payment}</span>
                </div>
                <div class="order-tracker">
                    <div class="tracker-step completed"><span>📅</span> Booked</div>
                    <div class="tracker-step ${stepClass}"><span>✈️</span> Confirmed</div>
                    <div class="tracker-step ${status === 'delivered' ? 'completed' : ''}"><span>✅</span> Completed</div>
                </div>
            </div>
        `;
    }).join('');
}

function renderUserPayments() {
    const container = document.getElementById('userPaymentsList');
    if (!container) return;
    if (userPayments.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:1.5rem;">No payments yet.</p>';
        return;
    }
    const sorted = [...userPayments].sort((a, b) => new Date(b.paymentDate) - new Date(a.paymentDate));
    container.innerHTML = sorted.map(p => `
        <div class="payment-card">
            <div class="payment-info">
                <span class="payment-amount">₹${p.amount.toLocaleString('en-IN')}</span>
                <span class="payment-status success">✅ Success</span>
            </div>
            <div class="payment-details">
                <span>💳 ${p.method}</span>
                <span>📅 ${p.date}</span>
                <span>#${p.bookingId}</span>
            </div>
        </div>
    `).join('');
}

// ============================================================
// LOADING SCREEN
// ============================================================
function hideLoadingScreen() {
    const loader = document.getElementById('loadingScreen');
    if (loader) setTimeout(() => loader.classList.add('hidden'), 2200);
}

// ============================================================
// SLIDER
// ============================================================
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    totalSlides = slides.length;
    const dotsContainer = document.getElementById('sliderDots');
    if (!dotsContainer) return;
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.dataset.index = i;
        dot.addEventListener('click', function() { goToSlide(parseInt(this.dataset.index)); });
        dotsContainer.appendChild(dot);
    }
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');
    if (prevBtn) prevBtn.addEventListener('click', () => goToSlide((currentSlide - 1 + totalSlides) % totalSlides));
    if (nextBtn) nextBtn.addEventListener('click', () => goToSlide((currentSlide + 1) % totalSlides));
    setInterval(() => goToSlide((currentSlide + 1) % totalSlides), 5000);
}

function goToSlide(index) {
    currentSlide = index;
    const wrapper = document.getElementById('sliderWrapper');
    if (wrapper) wrapper.style.transform = `translateX(-${index * 100}%)`;
    document.querySelectorAll('.slide').forEach((s, i) => s.classList.toggle('active', i === index));
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === index));
}

// ============================================================
// DOWN TO TOP
// ============================================================
function setupDownToTop() {
    const btn = document.getElementById('downToTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) btn.classList.add('visible');
        else btn.classList.remove('visible');
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ============================================================
// NAVIGATION
// ============================================================
function setupNavigation() {
    document.querySelectorAll('.nav-link, [data-section]').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.classList.contains('nav-link') || this.hasAttribute('data-section')) {
                e.preventDefault();
            }
            const sectionName = this.dataset.section;
            if (!sectionName) return;
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            const target = document.getElementById(sectionName);
            if (target) target.classList.remove('hidden');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll(`.nav-link[data-section="${sectionName}"]`).forEach(l => l.classList.add('active'));
            const toggle = document.querySelector('.nav-toggle');
            if (toggle) toggle.checked = false;
            document.getElementById('wishlistOverlay').classList.remove('open');
            document.getElementById('tourPopup').classList.remove('open');
            document.getElementById('bookingPopup').classList.remove('open');
            if (sectionName === 'about') {
                setTimeout(startAboutCounter, 300);
            }
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

// ============================================================
// CATEGORY THEME BACKGROUND
// ============================================================
function updateCategoryTheme(category) {
    document.body.classList.remove('cat-beach', 'cat-mountain', 'cat-city', 'cat-cultural', 'cat-adventure', 'cat-all');
    if (category && category !== 'all') {
        document.body.classList.add('cat-' + category);
    } else {
        document.body.classList.add('cat-all');
    }
}

// ============================================================
// RENDER TOURS
// ============================================================
function renderTours(category = 'all', priceFilter = 'all', durationFilter = 'all', sort = 'default') {
    const grid = document.getElementById('tourGrid');
    if (!grid) return;

    let filtered = category === 'all' ? [...tours] : tours.filter(t => t.category === category);

    if (priceFilter !== 'all') {
        filtered = filtered.filter(t => {
            if (priceFilter === '0-10000') return t.price <= 10000;
            if (priceFilter === '10000-30000') return t.price > 10000 && t.price <= 30000;
            if (priceFilter === '30000-50000') return t.price > 30000 && t.price <= 50000;
            if (priceFilter === '50000-100000') return t.price > 50000 && t.price <= 100000;
            if (priceFilter === '100000+') return t.price > 100000;
            return true;
        });
    }

    if (durationFilter !== 'all') {
        filtered = filtered.filter(t => {
            const days = parseInt(t.duration);
            if (durationFilter === '1-3') return days >= 1 && days <= 3;
            if (durationFilter === '4-7') return days >= 4 && days <= 7;
            if (durationFilter === '8-14') return days >= 8 && days <= 14;
            if (durationFilter === '15+') return days >= 15;
            return true;
        });
    }

    if (sort === 'price-low') filtered.sort((a, b) => a.price - b.price);
    else if (sort === 'price-high') filtered.sort((a, b) => b.price - a.price);
    else if (sort === 'rating') filtered.sort((a, b) => (userRatings[b.id] || b.rating) - (userRatings[a.id] || a.rating));

    if (filtered.length === 0) {
        grid.innerHTML = `<div style="text-align:center;color:var(--text-light);padding:2rem;width:100%;">No tours found matching your filters.</div>`;
        return;
    }

    grid.innerHTML = filtered.map(t => buildTourCard(t)).join('');
    attachTourCardEvents(grid);
}

function buildTourCard(t) {
    const userRating = userRatings[t.id] || 0;
    const displayRating = userRating > 0 ? userRating : Math.floor(t.rating);
    const fullStars = Math.floor(displayRating);
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        starsHTML += i < fullStars ? '<span class="star active">★</span>' : '<span class="star">★</span>';
    }

    let badgeClass = 'badge-popular';
    let badgeText = '⭐ Popular';
    if (t.badge === 'popular') { badgeClass = 'badge-popular'; badgeText = '⭐ Popular'; }
    else if (t.badge === 'luxury') { badgeClass = 'badge-luxury'; badgeText = '💎 Luxury'; }
    else if (t.badge === 'budget') { badgeClass = 'badge-budget'; badgeText = '💰 Budget'; }
    else if (t.badge === 'adventure') { badgeClass = 'badge-adventure'; badgeText = '🧗 Adventure'; }

    const wishlisted = wishlist.some(item => item.id === t.id);

    // ✅ Custom facilities (user ke liye)
    const customFacilities = getUserCustomFacilities(t.id);
    const allFacilities = [...(t.facilities || []), ...customFacilities];

    const facilitiesHTML = allFacilities.map(f => `<li>✓ ${f}</li>`).join('');

    return `
        <div class="tour-card" data-id="${t.id}">
            ${t.badge ? `<span class="tour-badge ${badgeClass}">${badgeText}</span>` : ''}
            <div class="tour-image-wrapper" data-id="${t.id}">
                <img src="${t.img}" alt="${t.name}" class="tour-img" loading="lazy" />
            </div>
            <h3>${t.name}</h3>
            <p class="description">${t.desc}</p>
            <span class="duration">📅 ${t.duration}</span>

            <!-- ✅ FACILITIES SECTION -->
            <div class="facilities-section" data-tour-id="${t.id}">
                <button class="facilities-toggle" onclick="toggleFacilities(event, ${t.id})">
                    🎁 What's Included <span class="facilities-arrow">▼</span>
                </button>
                <div class="facilities-list" id="facilities-${t.id}" style="display:none;">
                    <ul>${facilitiesHTML}</ul>
                    <button class="add-custom-facility-btn" onclick="openCustomFacilityModal(event, ${t.id})">
                        ➕ Add Custom Facility
                    </button>
                </div>
            </div>

            <div class="rating-section">
                <div class="rating-stars" data-id="${t.id}">${starsHTML}</div>
                <span class="rating-text">${userRating > 0 ? '★' + userRating : '⭐ ' + t.rating + ' (' + t.reviews + ')'}</span>
            </div>
            <div class="price">₹${t.price.toLocaleString('en-IN')}</div>
            <div class="tour-actions">
                <button class="book-now" data-action="book" data-id="${t.id}">Book Now</button>
                <button class="enquiry-btn" data-action="enquiry" data-id="${t.id}">💬 Enquiry</button>
                <button class="wishlist-btn ${wishlisted ? 'active' : ''}" data-action="wishlist" data-id="${t.id}" title="Wishlist">
                    ${wishlisted ? '❤️' : '🤍'}
                </button>
            </div>
        </div>
    `;
}

function attachTourCardEvents(container) {
    container.querySelectorAll('.rating-stars').forEach(starContainer => {
        const stars = starContainer.querySelectorAll('.star');
        const tourId = parseInt(starContainer.dataset.id);
        stars.forEach((star, index) => {
            star.addEventListener('click', function(e) {
                e.stopPropagation();
                if (!isLoggedIn) {
                    showFeedback('⚠️ Please login to rate', 'info');
                    redirectToAccount('enquiry', tourId);
                    return;
                }
                userRatings[tourId] = index + 1;
                safeSetJSON('exploreworld_user_ratings', userRatings);
                showFeedback(`⭐ Rated ${index + 1} stars!`, 'success');
                renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
            });
        });
    });

    container.querySelectorAll('[data-action="book"]').forEach(btn => {
        btn.addEventListener('click', function(e) { e.stopPropagation(); handleBookNow(parseInt(this.dataset.id)); });
    });
    container.querySelectorAll('[data-action="enquiry"]').forEach(btn => {
        btn.addEventListener('click', function(e) { e.stopPropagation(); handleEnquiry(parseInt(this.dataset.id)); });
    });
    container.querySelectorAll('[data-action="wishlist"]').forEach(btn => {
        btn.addEventListener('click', function(e) { e.stopPropagation(); handleWishlist(parseInt(this.dataset.id)); });
    });

    container.querySelectorAll('.tour-image-wrapper').forEach(wrapper => {
        let clickTimer = null;
        wrapper.addEventListener('click', function(e) {
            e.stopPropagation();
            const id = parseInt(this.dataset.id);
            const isZoomed = this.classList.contains('zoomed');
            if (clickTimer) {
                clearTimeout(clickTimer);
                clickTimer = null;
                this.classList.remove('zoomed');
                handleEnquiry(id);
            } else {
                clickTimer = setTimeout(() => {
                    if (isZoomed) this.classList.remove('zoomed');
                    else {
                        document.querySelectorAll('.tour-image-wrapper.zoomed').forEach(w => w.classList.remove('zoomed'));
                        this.classList.add('zoomed');
                    }
                    clickTimer = null;
                }, 250);
            }
        });
    });

    container.querySelectorAll('.tour-card').forEach(card => {
        card.addEventListener('click', function(e) {
            if (e.target.closest('button') || e.target.closest('.tour-image-wrapper')) return;
            handleEnquiry(parseInt(this.dataset.id));
        });
    });
}

// ============================================================
// HANDLE ACTIONS
// ============================================================
function handleBookNow(tourId) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please create an account to book', 'info');
        redirectToAccount('book', tourId);
        return;
    }
    openBookingPopup(tourId);
}

function handleWishlist(tourId) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please create an account to add to wishlist', 'info');
        redirectToAccount('wishlist', tourId);
        return;
    }
    toggleWishlistItem(tourId);
}

function handleEnquiry(tourId) { openPopup(tourId); }

function toggleWishlistItem(tourId) {
    const tour = tours.find(t => t.id === tourId);
    if (!tour) return;
    const index = wishlist.findIndex(item => item.id === tourId);
    if (index > -1) { wishlist.splice(index, 1); showFeedback('💔 Removed from wishlist', 'info'); }
    else { wishlist.push({ ...tour }); showFeedback('❤️ Added to wishlist!', 'success'); }
    safeSetJSON('exploreworld_wishlist', wishlist);
    updateWishlist();
    renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    renderWishlist();
}

function openWishlistOverlay() {
    const overlay = document.getElementById('wishlistOverlay');
    if (!overlay) return;
    overlay.classList.add('open');
    renderWishlist();
    document.body.style.overflow = 'hidden';
}

document.getElementById('wishlistIcon').addEventListener('click', function(e) {
    e.preventDefault();
    if (!isLoggedIn) {
        showFeedback('⚠️ Please create an account to view wishlist', 'info');
        redirectToAccount('wishlistView', null);
        return;
    }
    openWishlistOverlay();
});

document.getElementById('closeWishlist').addEventListener('click', function() {
    document.getElementById('wishlistOverlay').classList.remove('open');
    document.body.style.overflow = '';
});
document.getElementById('wishlistOverlay').addEventListener('click', function(e) {
    if (e.target === this) { this.classList.remove('open'); document.body.style.overflow = ''; }
});

function updateWishlist() {
    const countEl = document.getElementById('wishlistCount');
    if (countEl) countEl.textContent = wishlist.length;
}

function renderWishlist() {
    const container = document.getElementById('wishlistItems');
    if (!container) return;
    if (wishlist.length === 0) {
        container.innerHTML = `<div class="empty-wishlist">❤️ Your wishlist is empty.<br>Start exploring tours!</div>`;
        return;
    }
    container.innerHTML = wishlist.map(item => `
        <div class="wishlist-item">
            <div class="wishlist-item-info">
                <img src="${item.img}" alt="${item.name}" />
                <div>
                    <div class="wishlist-item-name">${item.name}</div>
                    <div class="wishlist-item-price">₹${item.price.toLocaleString('en-IN')}</div>
                </div>
            </div>
            <button class="wishlist-item-remove" onclick="removeFromWishlist(${item.id})" title="Remove">🗑️</button>
        </div>
    `).join('');
}

function removeFromWishlist(tourId) {
    wishlist = wishlist.filter(item => item.id !== tourId);
    safeSetJSON('exploreworld_wishlist', wishlist);
    updateWishlist();
    renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    renderWishlist();
}

// ============================================================
// TOUR POPUP
// ============================================================
function openPopup(tourId) {
    const tour = tours.find(t => t.id === tourId);
    if (!tour) return;
    popupTourId = tourId;
    document.getElementById('popupImg').src = tour.img;
    document.getElementById('popupName').textContent = tour.name;
    document.getElementById('popupDesc').textContent = tour.desc + ` (${tour.duration})`;
    document.getElementById('popupPrice').textContent = '₹' + tour.price.toLocaleString('en-IN');

    const userRating = userRatings[tourId] || 0;
    document.querySelectorAll('#popupStars span').forEach((s, i) => s.classList.toggle('active', i < userRating));
    document.getElementById('popupRatingText').textContent = userRating > 0 ? '★' + userRating : 'Not rated';

    const commentsContainer = document.getElementById('popupComments');
    const list = tourComments[tourId] || [];
    commentsContainer.innerHTML = list.length === 0
        ? '<div class="comment-item">No requests yet.</div>'
        : list.slice(-3).map(c => `<div class="comment-item">${c.rating > 0 ? '⭐' + c.rating + ' - ' : ''}${c.comment}</div>`).join('');

    document.getElementById('tourPopup').classList.add('open');
    document.body.style.overflow = 'hidden';
        // Add 360° button
    setTimeout(add360ButtonToPopup, 50);
}

function closePopup() {
    document.getElementById('tourPopup').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('closePopup').addEventListener('click', closePopup);
document.getElementById('tourPopup').addEventListener('click', function(e) { if (e.target === this) closePopup(); });

document.querySelectorAll('#popupStars span').forEach(star => {
    star.addEventListener('click', function() {
        if (!isLoggedIn) { showFeedback('⚠️ Please create an account to rate', 'info'); return; }
        const rating = parseInt(this.dataset.value);
        if (popupTourId) {
            userRatings[popupTourId] = rating;
            safeSetJSON('exploreworld_user_ratings', userRatings);
            document.querySelectorAll('#popupStars span').forEach((s, i) => s.classList.toggle('active', i < rating));
            document.getElementById('popupRatingText').textContent = '★' + rating;
            showFeedback(`⭐ Rated ${rating} stars!`, 'success');
            renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
        }
    });
});

document.getElementById('popupBookNow').addEventListener('click', function() {
    if (!isLoggedIn) { redirectToAccount('book', popupTourId); return; }
    const tourId = popupTourId;
    closePopup();
    openBookingPopup(tourId);
});

document.getElementById('popupSubmitComment').addEventListener('click', function() {
    if (!isLoggedIn) { redirectToAccount('enquiry', popupTourId); return; }
    const comment = document.getElementById('popupComment').value.trim();
    if (!comment) { showFeedback('⚠️ Please write a request!', 'error'); return; }
    if (!popupTourId) return;
    if (!tourComments[popupTourId]) tourComments[popupTourId] = [];
    tourComments[popupTourId].push({ comment, rating: userRatings[popupTourId] || 0 });
    safeSetJSON('exploreworld_comments', tourComments);
    document.getElementById('popupComment').value = '';
    showFeedback('✅ Request submitted!', 'success');
    const list = tourComments[popupTourId] || [];
    document.getElementById('popupComments').innerHTML = list.slice(-3).map(c =>
        `<div class="comment-item">${c.rating > 0 ? '⭐' + c.rating + ' - ' : ''}${c.comment}</div>`
    ).join('');
});

// ============================================================
// BOOKING POPUP
// ============================================================
function openBookingPopup(tourId) {
    if (!isLoggedIn) { redirectToAccount('book', tourId); return; }
    const tour = tours.find(t => t.id === tourId);
    if (!tour) return;
    bookingTour = tour;
    document.getElementById('bookingTourName').textContent = '🌍 ' + tour.name;
    document.getElementById('bookingTourPrice').textContent = '₹' + tour.price.toLocaleString('en-IN') + ' per traveler';
    document.getElementById('bookingTourDuration').textContent = '📅 ' + tour.duration;
    const account = readJSON('exploreworld_account', null);
    if (account) {
        document.getElementById('bookingName').value = account.fullName || '';
        document.getElementById('bookingEmail').value = account.email || '';
        document.getElementById('bookingPhone').value = account.phone || '';
    }
    document.getElementById('bookingTravelers').value = '1';
    document.getElementById('bookingDays').value = tour.duration.split(' ')[0] || '3';
    document.getElementById('bookingDate').value = new Date().toISOString().split('T')[0];
    selectPaymentMethod('card');
    goToBookingStep(1);
    updateBookingSummary();
    document.getElementById('bookingPopup').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeBookingPopup() {
    document.getElementById('bookingPopup').classList.remove('open');
    document.body.style.overflow = '';
}

document.getElementById('closeBookingPopup').addEventListener('click', closeBookingPopup);
document.getElementById('bookingPopup').addEventListener('click', function(e) { if (e.target === this) closeBookingPopup(); });

function goToBookingStep(step) {
    document.querySelectorAll('.booking-step').forEach(s => s.style.display = 'none');
    const target = document.getElementById('bookingStep' + step);
    if (target) target.style.display = 'block';
    if (step === 2) {
        const name = document.getElementById('bookingName').value.trim();
        const email = document.getElementById('bookingEmail').value.trim();
        const phone = document.getElementById('bookingPhone').value.trim();
        if (!name || !email || !phone) {
            showFeedback('⚠️ Please fill all traveler details', 'error');
            document.querySelectorAll('.booking-step').forEach(s => s.style.display = 'none');
            document.getElementById('bookingStep1').style.display = 'block';
            return;
        }
    }
    if (step === 3) updateBookingSummary();
}

function selectPaymentMethod(method) {
    selectedPaymentMethod = method;
    document.querySelectorAll('.payment-option').forEach(o => o.classList.remove('selected'));
    document.querySelectorAll(`.payment-option[data-method="${method}"]`).forEach(o => o.classList.add('selected'));
    document.getElementById('cardDetails').style.display = method === 'card' ? 'block' : 'none';
    document.getElementById('netbankingOptions').style.display = method === 'netbanking' ? 'block' : 'none';
    document.getElementById('upiOptions').style.display = method === 'upi' ? 'block' : 'none';
    if (method === 'upi') generateUPIQRCode();
}

function generateUPIQRCode() {
    const qrBox = document.getElementById('upiQRCode');
    if (!qrBox) return;
    const upiId = 'exploreworld@upi';
    const amount = calculateTotal();
    const upiString = `upi://pay?pa=${upiId}&pn=ExploreWorld&am=${amount}&cu=INR`;
    qrBox.innerHTML = generateSVGQR(upiString);
}

function generateSVGQR(data) {
    const size = 25;
    const cellSize = 100 / size;
    let hash = 0;
    for (let i = 0; i < data.length; i++) { hash = ((hash << 5) - hash) + data.charCodeAt(i); hash |= 0; }
    let html = '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">';
    html += '<rect width="100" height="100" fill="white"/>';
    for (let y = 0; y < size; y++) {
        for (let x = 0; x < size; x++) {
            const isCorner = (x < 7 && y < 7) || (x >= size - 7 && y < 7) || (x < 7 && y >= size - 7);
            const isCornerInner = isCorner && ((x >= 2 && x <= 4 && y >= 2 && y <= 4) || (x >= size - 5 && x <= size - 3 && y >= 2 && y <= 4) || (x >= 2 && x <= 4 && y >= size - 5 && y <= size - 3));
            const isCornerBorder = isCorner && !isCornerInner && ((x === 0 || x === 6 || y === 0 || y === 6) || (x === size - 1 || x === size - 7 || y === size - 1 || y === size - 7));
            let filled = false;
            if (isCorner) filled = isCornerBorder || isCornerInner;
            else { const seed = (hash + x * 73856093 + y * 19349663) >>> 0; filled = (seed % 3) === 0; }
            if (filled) html += `<rect x="${x * cellSize}" y="${y * cellSize}" width="${cellSize}" height="${cellSize}" fill="#073b2a"/>`;
        }
    }
    html += '</svg>';
    return html;
}

function calculateTotal() {
    if (!bookingTour) return 0;
    const travelers = parseInt(document.getElementById('bookingTravelers')?.value) || 1;
    const days = parseInt(document.getElementById('bookingDays')?.value) || 1;
    const basePrice = bookingTour.price * travelers * days;
    let groupDiscount = travelers >= 5 ? Math.round(basePrice * 0.10) : 0;
    const afterDiscount = basePrice - groupDiscount;
    const gst = Math.round(afterDiscount * 0.05);
    return afterDiscount + gst;
}

function updateBookingSummary() {
    if (!bookingTour) return;
    const travelers = parseInt(document.getElementById('bookingTravelers').value) || 1;
    const days = parseInt(document.getElementById('bookingDays').value) || 1;
    const basePrice = bookingTour.price;
    const totalPrice = basePrice * travelers * days;
    let groupDiscount = travelers >= 5 ? Math.round(totalPrice * 0.10) : 0;
    const afterDiscount = totalPrice - groupDiscount;
    const gst = Math.round(afterDiscount * 0.05);
    const finalTotal = afterDiscount + gst;
    document.getElementById('summaryBasePrice').textContent = '₹' + totalPrice.toLocaleString('en-IN');
    document.getElementById('summaryTravelers').textContent = travelers;
    document.getElementById('summaryDays').textContent = days;
    document.getElementById('summaryGroupDiscount').textContent = '-₹' + groupDiscount.toLocaleString('en-IN');
    document.getElementById('summaryGST').textContent = '₹' + gst.toLocaleString('en-IN');
    document.getElementById('summaryTotal').textContent = '₹' + finalTotal.toLocaleString('en-IN');
    if (selectedPaymentMethod === 'upi') generateUPIQRCode();
}

document.getElementById('bookingTravelers').addEventListener('change', updateBookingSummary);
document.getElementById('bookingDays').addEventListener('change', updateBookingSummary);

// ============================================================
// CONFIRM BOOKING
// ============================================================
function confirmBooking() {
    const name = document.getElementById('bookingName').value.trim();
    const email = document.getElementById('bookingEmail').value.trim();
    const phone = document.getElementById('bookingPhone').value.trim();
    const travelers = document.getElementById('bookingTravelers').value;
    const days = document.getElementById('bookingDays').value;
    const date = document.getElementById('bookingDate').value;

    if (!name || !email || !phone) { showFeedback('⚠️ Please fill all traveler details', 'error'); goToBookingStep(1); return; }

    const basePrice = bookingTour.price * parseInt(travelers) * parseInt(days);
    let groupDiscount = parseInt(travelers) >= 5 ? Math.round(basePrice * 0.10) : 0;
    const afterDiscount = basePrice - groupDiscount;
    const gst = Math.round(afterDiscount * 0.05);
    const finalTotal = afterDiscount + gst;

    const paymentNames = { card: 'Credit/Debit Card', netbanking: 'Net Banking', upi: 'UPI', cod: 'Cash on Delivery' };
    const bookingId = 'EW' + Date.now().toString().slice(-6);
    const formattedDate = new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    const booking = { id: bookingId, tourName: bookingTour.name, tourId: bookingTour.id, travelers, days, total: finalTotal, payment: paymentNames[selectedPaymentMethod], date: formattedDate, bookingDate: new Date().toISOString() };
    userBookings.push(booking);
    safeSetJSON('exploreworld_bookings', userBookings);

    const payment = { bookingId, amount: finalTotal, method: paymentNames[selectedPaymentMethod], date: formattedDate, paymentDate: new Date().toISOString() };
    userPayments.push(payment);
    safeSetJSON('exploreworld_payments', userPayments);

    document.getElementById('successBookingId').textContent = bookingId;
    document.getElementById('successBookingDate').textContent = formattedDate;
    document.getElementById('successBookingAmount').textContent = '₹' + finalTotal.toLocaleString('en-IN');
    document.getElementById('successBookingPayment').textContent = paymentNames[selectedPaymentMethod];
    document.getElementById('successBookingTravelers').textContent = travelers;
    document.getElementById('successBookingDays').textContent = days;
    document.getElementById('successBookingDetails').textContent = `${bookingTour.name} for ${travelers} traveler(s) - ${days} Days`;

    generateQRCode(bookingId, finalTotal);
    closeBookingPopup();
    document.getElementById('bookingSuccessPopup').classList.add('open');
    launchConfetti();
    renderUserBookings();
    renderUserPayments();
}

function generateQRCode(bookingId, amount) {
    const container = document.getElementById('qrCodeBox');
    if (!container) return;
    container.innerHTML = generateSVGQR(`${bookingId}|${amount}|ExploreWorld`);
}

function closeBookingSuccess() {
    document.getElementById('bookingSuccessPopup').classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('[data-section="home"].nav-link')?.click();
}

function closeBookingSuccessAndGoProfile() {
    document.getElementById('bookingSuccessPopup').classList.remove('open');
    document.body.style.overflow = '';
    document.querySelector('[data-section="profile"].nav-link')?.click();
}

function downloadInvoice() { showFeedback('📥 Invoice downloaded! (Demo)', 'success'); }

// ============================================================
// CONFETTI
// ============================================================
function launchConfetti() {
    const container = document.createElement('div');
    container.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;overflow:hidden;';
    document.body.appendChild(container);
    const colors = ['#116b49', '#d4af37', '#f1dc93', '#27ae60', '#e74c3c'];
    for (let i = 0; i < 60; i++) {
        const c = document.createElement('div');
        c.style.cssText = `position:absolute;top:-10px;left:${Math.random() * 100}%;width:${Math.random() * 8 + 4}px;height:${Math.random() * 8 + 4}px;background:${colors[Math.floor(Math.random() * colors.length)]};border-radius:2px;animation: confettiFall ${Math.random() * 2 + 2}s linear ${Math.random() * 0.5}s forwards;`;
        container.appendChild(c);
    }
    if (!document.getElementById('confettiAnim')) {
        const style = document.createElement('style');
        style.id = 'confettiAnim';
        style.textContent = `@keyframes confettiFall { 0% { transform: translateY(0) rotate(0deg); opacity: 1; } 100% { transform: translateY(110vh) rotate(720deg); opacity: 0; } }`;
        document.head.appendChild(style);
    }
    setTimeout(() => container.remove(), 4000);
}

// ============================================================
// CATEGORY TABS
// ============================================================
function setupCategoryTabs() {
    document.querySelectorAll('.cat-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            updateCategoryTheme(currentCategory);
            renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
        });
    });
}

function setupFilters() {
    const pf = document.getElementById('priceFilter');
    const df = document.getElementById('durationFilter');
    const sf = document.getElementById('sortFilter');
    if (pf) pf.addEventListener('change', function() { currentPriceFilter = this.value; renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort); });
    if (df) df.addEventListener('change', function() { currentDurationFilter = this.value; renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort); });
    if (sf) sf.addEventListener('change', function() { currentSort = this.value; renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort); });
}

function setupOfferTabs() {
    document.querySelectorAll('.tab-btn').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.offer-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const target = document.getElementById(this.dataset.tab);
            if (target) target.classList.add('active');
        });
    });
}

function setupProfileTabs() {
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.profile-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.profile-tab-content').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            const target = document.getElementById('tab-' + this.dataset.tab);
            if (target) target.classList.add('active');

            // Load data on tab switch
            if (this.dataset.tab === 'bookings') renderUserBookings();
            if (this.dataset.tab === 'flights') renderUserFlights();
            if (this.dataset.tab === 'hotels') renderUserHotels();
            if (this.dataset.tab === 'payments') renderUserPayments();
            if (this.dataset.tab === 'addresses') renderAddresses();
            if (this.dataset.tab === 'dashboard') renderUserDashboard();
        });
    });
}

function setupFAQ() {
    document.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.closest('.faq-item');
            const isOpen = item.classList.contains('open');
            document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
            if (!isOpen) item.classList.add('open');
        });
    });
}

// ============================================================
// ABOUT COUNTER
// ============================================================
function startAboutCounter() {
    if (counterStarted) return;
    counterStarted = true;
    const counters = document.querySelectorAll('.about-stat-number');
    counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        const suffix = counter.dataset.suffix || '';
        const decimal = parseInt(counter.dataset.decimal) || 0;
        const duration = 2000;
        const startTime = performance.now();
        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = target * eased;
            if (decimal > 0) counter.textContent = current.toFixed(decimal) + suffix;
            else counter.textContent = Math.floor(current).toLocaleString('en-IN') + suffix;
            if (progress < 1) requestAnimationFrame(updateCounter);
            else {
                if (decimal > 0) counter.textContent = target.toFixed(decimal) + suffix;
                else counter.textContent = target.toLocaleString('en-IN') + suffix;
            }
        }
        requestAnimationFrame(updateCounter);
    });
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function() {
        if (this.dataset.section !== 'about') {
            counterStarted = false;
            document.querySelectorAll('.about-stat-number').forEach(c => c.textContent = '0');
        }
    });
});

// ============================================================
// SEARCH SETUP
// ============================================================
function setupSearch() {
    const input = document.getElementById('searchInput');
    const btn = document.getElementById('searchBtn');
    const micBtn = document.getElementById('searchMicBtn');
    if (!input) return;
    input.value = '';
    input.setAttribute('autocomplete', 'off');
    input.addEventListener('focus', function() { if (this.value.includes('@') && this.value.length > 3) this.value = ''; });
    input.addEventListener('click', function() { if (this.value.includes('@')) this.value = ''; });
    if (btn) btn.addEventListener('click', () => performSearch(input.value));
    if (input) input.addEventListener('keypress', function(e) { if (e.key === 'Enter') { e.preventDefault(); performSearch(this.value); } });
    if (micBtn) micBtn.addEventListener('click', function(e) { e.preventDefault(); startVoiceSearch('searchInput', micBtn, (t) => performSearch(t)); });
}

function setupHeroSearch() {
    const input = document.getElementById('heroSearchInput');
    const btn = document.getElementById('heroSearchBtn');
    const micBtn = document.getElementById('heroMicBtn');
    if (btn) btn.addEventListener('click', () => { if (input) performSearch(input.value); });
    if (input) input.addEventListener('keypress', function(e) { if (e.key === 'Enter') { e.preventDefault(); performSearch(this.value); } });
    if (micBtn) micBtn.addEventListener('click', function(e) { e.preventDefault(); startVoiceSearch('heroSearchInput', micBtn, (t) => performSearch(t)); });

    document.querySelectorAll('.quick-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            const cat = this.dataset.category;
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            document.getElementById('tours').classList.remove('hidden');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.nav-link[data-section="tours"]').forEach(l => l.classList.add('active'));
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
            currentCategory = cat;
            updateCategoryTheme(cat);
            renderTours(cat, currentPriceFilter, currentDurationFilter, currentSort);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function setupCategoryExplorer() {
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const cat = this.dataset.category;
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            document.getElementById('tours').classList.remove('hidden');
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            document.querySelectorAll('.nav-link[data-section="tours"]').forEach(l => l.classList.add('active'));
            document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
            currentCategory = cat;
            updateCategoryTheme(cat);
            renderTours(cat, currentPriceFilter, currentDurationFilter, currentSort);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
}

function renderTrending() {
    const container = document.getElementById('trendingScroll');
    if (!container) return;
    const trendingIds = [1, 19, 25, 29, 31, 4, 22, 34, 12, 30, 38, 10];
    const trending = trendingIds.map(id => tours.find(t => t.id === id)).filter(Boolean);
    container.innerHTML = trending.map(t => `
        <div class="trending-card" data-id="${t.id}">
            <span class="trending-badge">🔥 Trending</span>
            <img src="${t.img}" alt="${t.name}" loading="lazy" />
            <div class="trending-info">
                <h3>${t.name}</h3>
                <p class="trending-country">📍 ${getRegionLabel(t.region)}</p>
                <div class="trending-meta">
                    <span class="trending-price">₹${t.price.toLocaleString('en-IN')}</span>
                    <span class="trending-rating">⭐ ${t.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
    const leftBtn = document.getElementById('trendingLeft');
    const rightBtn = document.getElementById('trendingRight');
    if (leftBtn) leftBtn.addEventListener('click', () => container.scrollBy({ left: -300, behavior: 'smooth' }));
    if (rightBtn) rightBtn.addEventListener('click', () => container.scrollBy({ left: 300, behavior: 'smooth' }));
    container.querySelectorAll('.trending-card').forEach(card => {
        card.addEventListener('click', () => handleEnquiry(parseInt(card.dataset.id)));
    });
}

function getRegionLabel(region) {
    const map = { 'india': 'India', 'europe': 'Europe', 'americas': 'Americas', 'asia': 'Asia', 'africa': 'Africa', 'oceania': 'Oceania' };
    return map[region] || region;
}

function setupRegionTabs() {
    document.querySelectorAll('.region-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.region-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            currentRegion = this.dataset.region;
            renderInternational(currentRegion);
        });
    });
}

function renderInternational(region) {
    const grid = document.getElementById('internationalGrid');
    if (!grid) return;
    const filtered = tours.filter(t => t.region === region);
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;color:var(--text-light);padding:2rem;">No tours in this region yet.</div>`;
        return;
    }
    grid.innerHTML = filtered.map(t => buildTourCard(t)).join('');
    attachTourCardEvents(grid);
}

function setupReviewsCarousel() {
    const scroll = document.getElementById('reviewsScroll');
    if (!scroll) return;
    let paused = false;
    scroll.addEventListener('mouseenter', () => paused = true);
    scroll.addEventListener('mouseleave', () => paused = false);
    scroll.addEventListener('touchstart', () => paused = true);
    scroll.addEventListener('touchend', () => setTimeout(() => paused = false, 2000));
    setInterval(() => {
        if (paused) return;
        const maxScroll = scroll.scrollWidth - scroll.clientWidth;
        if (scroll.scrollLeft >= maxScroll - 10) scroll.scrollTo({ left: 0, behavior: 'smooth' });
        else scroll.scrollBy({ left: 360, behavior: 'smooth' });
    }, 5000);
}

// ============================================================
// CHATBOT
// ============================================================
const chatbotTopics = [
    { icon: '📦', label: 'Bookings', response: 'You can view all your bookings in Profile → Bookings 📦' },
    { icon: '💳', label: 'Payment Help', response: 'We accept Credit/Debit Cards, UPI, Net Banking & Cash on Delivery 💳' },
    { icon: '✈️', label: 'Tour Confirmation', response: 'Tours are confirmed within 24 hours. Check your email! ✈️' },
    { icon: '🔄', label: 'Cancellation Policy', response: 'Free cancellation up to 7 days before tour start date 🔄' },
    { icon: '📞', label: 'Contact Support', response: '📞 +91 98765 43210 📧 info@exploreworld.com' },
    { icon: '🔐', label: 'Account Security', response: 'Keep your password secure. Never share OTP! 🔐' },
    { icon: '🏨', label: 'Hotel Bookings', response: 'We partner with 5-star resorts and premium hotels 🏨' },
    { icon: '⭐', label: 'Reviews', response: 'Rate tours after completion. Your feedback helps us improve! ⭐' },
    { icon: '🎒', label: 'Travel Tips', response: 'Pack light, carry essentials, and keep your documents safe! 🎒' },
    { icon: '🆘', label: 'Emergency Help', response: 'For urgent assistance, call us at +91 98765 43210 🆘' }
];

function getAIResponse(question) {
    const q = question.toLowerCase().trim();
    if (!q) return "Please ask me something! 😊";
    if (/^(hi|hello|hey|namaste|hii|hlo|hiii)/i.test(q)) return "Hello! 👋 Welcome to Explore World! How can I help you plan your next adventure today?";
    if (/thank|thanks|shukriya|dhanyavad/i.test(q)) return "You're most welcome! 😊 Happy to help. Have a wonderful journey!";
    if (/bye|goodbye|see you|alvida/i.test(q)) return "Goodbye! 👋 Have a safe and wonderful trip!";
    if (/who are you|what are you/i.test(q)) return "I'm TravelBot 🤖 — your personal AI travel assistant! I can help you find tours, book trips, answer questions, and give travel tips.";
    if (/tour|trip|package|destination/i.test(q)) return "We have 39 amazing tours! 🌍 From Indian gems like Goa, Jaipur, Kerala to international wonders like Paris, Tokyo, Bali!";
    if (/goa|beach/i.test(q)) return "Goa Beach Escape 🏖️ — 3 days of sun, sand & sea! Price starts at ₹14,999. Want to book?";
    if (/paris|eiffel/i.test(q)) return "Paris Romance 🗼 — 5 days in the City of Love! ₹85,000 per person. Includes Eiffel Tower, Louvre!";
    if (/bali|indonesia/i.test(q)) return "Bali Island Escape 🏝️ — 5 days of beaches, temples & rice terraces! Just ₹45,000.";
    if (/dubai|burj/i.test(q)) return "Dubai Luxury Experience 🏙️ — 4 days of Burj Khalifa, desert safari! ₹55,000.";
    if (/tokyo|japan|cherry/i.test(q)) return "Tokyo Cherry Blossom 🌸 — 6 days of sakura, Shibuya & Mount Fuji! ₹90,000.";
    if (/kerala|backwater/i.test(q)) return "Kerala Backwaters 🛶 — 4 days of houseboats & serenity! ₹18,999.";
    if (/jaipur|pink city/i.test(q)) return "Jaipur City Tour 👑 — 2 days of palaces & forts! ₹9,999.";
    if (/maldives/i.test(q)) return "Maldives Luxury 🏝️ — 5 days of overwater villas! ₹95,000. Paradise found! 🌊";
    if (/price|cost|kitna|rate|budget|how much/i.test(q)) return "Our tours range from ₹7,999 (Jaipur) to ₹1,20,000 (Swiss Alps). 💰 Use the Price filter!";
    if (/book|booking|reserve|kaise book/i.test(q)) return "Booking is easy! 1️⃣ Browse tours, 2️⃣ Click 'Book Now', 3️⃣ Fill details, 4️⃣ Choose payment, 5️⃣ Confirm!";
    if (/payment|pay|upi|card|netbanking|cod/i.test(q)) return "We accept 💳 Cards, 📱 UPI (with QR code), 🏦 Net Banking, 💵 Cash on Delivery.";
    if (/cancel|refund|wapsi/i.test(q)) return "Free cancellation up to 7 days before tour! 🔄 Contact support for help.";
    if (/weather|mausam|temperature/i.test(q)) return "Check current weather at your destination using the Live Weather widget on our homepage! 🌤️";
    if (/visa|passport|document/i.test(q)) return "For international tours, you need a valid passport and visa. 🛂 We help with documentation!";
    if (/food|khana|cuisine|eat/i.test(q)) return "All packages include meals! 🍽️ Local cuisine, veg & non-veg options available.";
    if (/hotel|stay|accommodation|room/i.test(q)) return "We partner with 3-5 star hotels and premium resorts. 🏨 All rooms are clean & comfortable!";
    if (/safe|security|insurance/i.test(q)) return "Your safety is our priority! 🛡️ All tours include travel insurance & 24/7 support.";
    if (/group|family|friends|discount/i.test(q)) return "Booking for 5+ travelers gets you automatic 10% OFF! 🎁";
    if (/contact|support|call|email|phone/i.test(q)) return "Reach us: 📞 +91 98765 43210, 📧 info@exploreworld.com. Available 24/7!";
    if (/recommend|suggest|best|which/i.test(q)) return "Based on popularity: 🌴 Goa for beaches, ⛰️ Himalayan Trek for adventure, 🌸 Tokyo for culture.";
    if (/adventure|trek|hiking|rafting/i.test(q)) return "Adrenaline rush? 🧗 Try Himalayan Trek (₹24,999), Rishikesh Rafting (₹8,999)!";
    if (/honeymoon|romantic|couple/i.test(q)) return "Romantic escapes 💑 — Paris, Bali, Maldives, Santorini! All curated for couples!";
    if (/festival|diwali|christmas|holi/i.test(q)) return "Festival specials! 🎉 Diwali - 50% off, Christmas - Buy 2 Get 1, Holi - 60% off!";
    if (/solo|alone|single/i.test(q)) return "Solo travel is amazing! 🎒 Our group tours are perfect for meeting new people.";
    if (/duration|days|how long|kitne din/i.test(q)) return "Tours range from 2-day quick escapes (Jaipur) to 7-day adventures (Swiss Alps). ⏱️";
    if (/available|availability|slot/i.test(q)) return "Most tours have daily availability! 🗓️ Book 1-2 weeks in advance for peak season.";
    if (/loyalty|points|reward/i.test(q)) return "Coming soon: Loyalty Points program! 🎁 Refer friends for ₹500 off!";
    if (/complain|feedback|issue|problem/i.test(q)) return "We're sorry! 😔 Please contact support at +91 98765 43210.";
    if (/help|madad/i.test(q)) return "I can help with: 📦 Bookings, 💳 Payments, 🌍 Tours, 🎫 Tickets, ❓ FAQs!";
    if (q.endsWith('?')) return "Interesting question! 🤔 Let me connect you with a human agent. Meanwhile, check our FAQ section!";

    const randomHelpful = [
        "Great question! 🌟 Let me help you. Could you tell me more?",
        "Interesting! 🤔 I'd recommend checking our Tours section!",
        "Thanks for asking! 😊 I specialize in travel-related queries!",
        "Hmm, let me think! 💭 Meanwhile, browse our 39 amazing tours!",
        "I'd love to help! 🤖 Try asking about: tours, bookings, payments, destinations!",
        "Awesome! 🎉 Our travel experts can help with that! Want a destination suggestion?"
    ];
    return randomHelpful[Math.floor(Math.random() * randomHelpful.length)];
}

function setupChatbot() {
    const toggle = document.getElementById('chatbotToggle');
    const container = document.getElementById('chatbotContainer');
    const close = document.getElementById('chatbotClose');
    const input = document.getElementById('chatbotInput');
    const send = document.getElementById('chatbotSend');
    const micBtn = document.getElementById('chatbotMicBtn');
    const messages = document.getElementById('chatbotMessages');
    const quickReplies = document.getElementById('chatbotQuickReplies');
    if (!toggle) return;
    quickReplies.innerHTML = chatbotTopics.map(t => `<button class="quick-reply" data-msg="${t.label}">${t.icon} ${t.label}</button>`).join('');
    toggle.addEventListener('click', () => container.classList.toggle('open'));
    close.addEventListener('click', () => container.classList.remove('open'));

    function addMessage(text, type) {
        const div = document.createElement('div');
        div.className = 'chatbot-msg ' + type;
        div.innerHTML = `<p>${text}</p>`;
        messages.appendChild(div);
        messages.scrollTop = messages.scrollHeight;
    }

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        addMessage(text, 'user');
        input.value = '';
        const typingDiv = document.createElement('div');
        typingDiv.className = 'chatbot-msg bot';
        typingDiv.innerHTML = '<p>TravelBot is typing...</p>';
        messages.appendChild(typingDiv);
        messages.scrollTop = messages.scrollHeight;
        setTimeout(() => {
            typingDiv.remove();
            addMessage(getAIResponse(text), 'bot');
        }, 700 + Math.random() * 600);
    }

    send.addEventListener('click', sendMessage);
    input.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendMessage(); });
    if (micBtn) micBtn.addEventListener('click', function(e) {
        e.preventDefault();
        startVoiceSearch('chatbotInput', micBtn, (t) => { input.value = t; sendMessage(); });
    });
    document.querySelectorAll('.quick-reply').forEach(btn => {
        btn.addEventListener('click', function() {
            const msg = this.dataset.msg;
            addMessage(msg, 'user');
            setTimeout(() => {
                const topic = chatbotTopics.find(t => t.label === msg);
                addMessage(topic ? topic.response : getAIResponse(msg), 'bot');
            }, 600);
        });
    });
}

// ============================================================
// FEEDBACK TOAST
// ============================================================
function showFeedback(message, type = 'success') {
    const existing = document.querySelector('.feedback-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'feedback-toast';
    const color = type === 'success' ? 'var(--green)' : type === 'error' ? '#EF4444' : type === 'info' ? 'var(--primary)' : 'var(--secondary)';
    toast.style.cssText = `
        position: fixed; bottom: 80px; left: 50%; transform: translateX(-50%);
        background: ${color}; color: #fff; padding: 12px 24px; border-radius: 8px;
        font-weight: 600; box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        z-index: 99999; max-width: 90%; text-align: center;
        font-family: 'Poppins', sans-serif; font-size: 0.9rem;
        animation: toastIn 0.3s ease;
    `;
    toast.textContent = message;
    document.body.appendChild(toast);
    if (!document.getElementById('toastAnim')) {
        const style = document.createElement('style');
        style.id = 'toastAnim';
        style.textContent = `@keyframes toastIn { from { opacity: 0; transform: translate(-50%, 20px); } to { opacity: 1; transform: translate(-50%, 0); } }`;
        document.head.appendChild(style);
    }
    setTimeout(() => { toast.style.opacity = '0'; toast.style.transition = 'opacity 0.3s'; setTimeout(() => toast.remove(), 300); }, 2500);
}

// ============================================================
// 3D TILT
// ============================================================
function setup3DTilt() {
    if ('ontouchstart' in window) return;
    if (window.innerWidth < 768) return;
    document.addEventListener('mousemove', function(e) {
        const card = e.target.closest('.tour-card');
        if (!card || card.querySelector('.tour-image-wrapper.zoomed')) return;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = rect.width / 2;
        const cy = rect.height / 2;
        const rotateX = ((y - cy) / cy) * -4;
        const rotateY = ((x - cx) / cx) * 4;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    });
    document.addEventListener('mouseout', function(e) {
        const card = e.target.closest('.tour-card');
        if (card) card.style.transform = '';
    });
}

// ============================================================
// LIVE WEATHER
// ============================================================
async function loadWeather(cityOrCoords) {
    const result = document.getElementById('weatherResult');
    if (!result) return;
    result.innerHTML = '<div class="weather-icon">⏳</div><div><strong>Loading live weather…</strong><p>Please wait.</p></div>';
    try {
        let latitude, longitude, label;
        if (typeof cityOrCoords === 'object') {
            latitude = cityOrCoords.latitude; longitude = cityOrCoords.longitude;
            label = 'Your location';
        } else {
            const city = encodeURIComponent((cityOrCoords || 'Mumbai').trim());
            const geo = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`);
            if (!geo.ok) throw new Error('City search failed');
            const data = await geo.json();
            if (!data.results?.length) throw new Error('City not found');
            latitude = data.results[0].latitude;
            longitude = data.results[0].longitude;
            label = `${data.results[0].name}, ${data.results[0].country}`;
        }
        const weather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m&timezone=auto`);
        if (!weather.ok) throw new Error('Weather service unavailable');
        const w = await weather.json();
        const c = w.current;
        const icons = {0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',71:'🌨️',73:'❄️',75:'❄️',80:'🌦️',81:'🌧️',82:'⛈️',95:'⛈️',96:'⛈️',99:'⛈️'};
        const names = {0:'Clear sky',1:'Mainly clear',2:'Partly cloudy',3:'Overcast',45:'Foggy',48:'Foggy',51:'Light drizzle',53:'Drizzle',55:'Heavy drizzle',61:'Light rain',63:'Rain',65:'Heavy rain',71:'Snow',73:'Snow',75:'Heavy snow',80:'Rain showers',81:'Rain showers',82:'Heavy showers',95:'Thunderstorm',96:'Thunderstorm',99:'Thunderstorm'};
        result.innerHTML = `<div class="weather-icon">${icons[c.weather_code] || '🌍'}</div><div><strong>${label}</strong><p>${names[c.weather_code] || 'Current'} · ${Math.round(c.temperature_2m)}°C · Feels ${Math.round(c.apparent_temperature)}°C</p><small>💧 ${c.relative_humidity_2m}% · 💨 ${Math.round(c.wind_speed_10m)} km/h · Updated live</small></div>`;
    } catch (error) {
        result.innerHTML = `<div class="weather-icon">⚠️</div><div><strong>Weather unavailable</strong><p>${error.message}. Try another city.</p></div>`;
    }
}

function setupWeather() {
    const input = document.getElementById('weatherCityInput');
    const btn = document.getElementById('weatherSearchBtn');
    const loc = document.getElementById('weatherLocationBtn');
    if (!input) return;
    btn?.addEventListener('click', () => loadWeather(input.value || 'Mumbai'));
    input.addEventListener('keypress', e => { if (e.key === 'Enter') loadWeather(input.value || 'Mumbai'); });
    loc?.addEventListener('click', () => {
        if (!navigator.geolocation) { showFeedback('⚠️ Location not supported', 'error'); return; }
        navigator.geolocation.getCurrentPosition(
            pos => loadWeather(pos.coords),
            () => showFeedback('⚠️ Location permission denied', 'error'),
            { enableHighAccuracy: true, timeout: 10000 }
        );
    });
    loadWeather('Mumbai');
}

function renderCalendar() {
    const grid = document.getElementById('calendarGrid');
    const title = document.getElementById('calendarMonth');
    if (!grid || !title) return;
    const y = calendarCursor.getFullYear(), m = calendarCursor.getMonth();
    title.textContent = calendarCursor.toLocaleDateString('en-IN', { month: 'long', year: 'numeric' });
    const first = new Date(y, m, 1).getDay();
    const total = new Date(y, m + 1, 0).getDate();
    const today = new Date();
    let cells = '';
    for (let i = 0; i < first; i++) cells += '<span class="calendar-day empty"></span>';
    for (let d = 1; d <= total; d++) {
        const active = d === today.getDate() && m === today.getMonth() && y === today.getFullYear();
        cells += `<span class="calendar-day ${active ? 'today' : ''}">${d}</span>`;
    }
    grid.innerHTML = cells;
}

function setupCalendar() {
    document.getElementById('calendarPrev')?.addEventListener('click', () => { calendarCursor.setMonth(calendarCursor.getMonth() - 1); renderCalendar(); });
    document.getElementById('calendarNext')?.addEventListener('click', () => { calendarCursor.setMonth(calendarCursor.getMonth() + 1); renderCalendar(); });
    renderCalendar();
}

// ============================================================
// LANGUAGE
// ============================================================
function setupLanguage() {
    const select = document.getElementById('languageSelect');
    if (!select) return;
    select.value = currentLanguage;
    select.addEventListener('change', e => applyLanguage(e.target.value));
    applyLanguage(currentLanguage);
}

// ============================================================
// NOTIFICATIONS
// ============================================================
function getNotifications() { return readJSON('exploreworld_notification_items', []); }
function addNotification(message, type='info') {
    const list = getNotifications();
    list.unshift({ id: Date.now(), message, type, time: new Date().toISOString(), read:false });
    safeSetJSON('exploreworld_notification_items', list.slice(0, 30));
    renderNotificationPanel();
}
function renderNotificationPanel() {
    const panel = document.getElementById('notificationsPanel');
    if (!panel) return;
    const items = getNotifications();
    const listHtml = items.length ? items.slice(0,8).map(n => `<div class="notification-live-item ${n.read ? '' : 'unread'}"><span>${n.type === 'booking' ? '📦' : '🔔'}</span><div><strong>${n.message}</strong><small>${new Date(n.time).toLocaleString('en-IN')}</small></div></div>`).join('') : '<p class="notification-empty">No new notifications yet.</p>';
    let list = panel.querySelector('.notification-live-list');
    if (!list) { list = document.createElement('div'); list.className = 'notification-live-list'; panel.appendChild(list); }
    list.innerHTML = listHtml;
}

// ============================================================
// THEME TOGGLE
// ============================================================
function setupThemeToggle() {
    const btn = document.getElementById('themeToggleBtn');
    if (!btn) return;

    // Check saved theme OR system preference
    const saved = localStorage.getItem('exploreworldTheme');
    let isDark = false;

    if (saved === 'dark') {
        isDark = true;
    } else if (saved === 'light') {
        isDark = false;
    } else {
        // Auto-detect from system
        isDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    // Apply theme
    if (isDark) {
        document.body.classList.add('ew-dark-mode');
        btn.textContent = '☀️';
    } else {
        document.body.classList.remove('ew-dark-mode');
        btn.textContent = '🌙';
    }

    // Button click to toggle
    btn.addEventListener('click', function() {
        document.body.classList.toggle('ew-dark-mode');
        const dark = document.body.classList.contains('ew-dark-mode');
        localStorage.setItem('exploreworldTheme', dark ? 'dark' : 'light');
        btn.textContent = dark ? '☀️' : '🌙';
    });

    // Auto-detect system change (only if user hasn't set manually)
    if (window.matchMedia) {
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (!localStorage.getItem('exploreworldTheme')) {
                if (e.matches) {
                    document.body.classList.add('ew-dark-mode');
                    btn.textContent = '☀️';
                } else {
                    document.body.classList.remove('ew-dark-mode');
                    btn.textContent = '🌙';
                }
            }
        });
    }
}
// ============================================================
// TOUR FACILITIES + CUSTOM FACILITIES
// ============================================================

// Toggle facilities visibility
function toggleFacilities(event, tourId) {
    event.stopPropagation();
    const list = document.getElementById('facilities-' + tourId);
    const arrow = event.currentTarget.querySelector('.facilities-arrow');
    if (list.style.display === 'none') {
        list.style.display = 'block';
        if (arrow) arrow.textContent = '▲';
    } else {
        list.style.display = 'none';
        if (arrow) arrow.textContent = '▼';
    }
}

// Get user custom facilities for a tour (only for logged in user)
function getUserCustomFacilities(tourId) {
    if (!isLoggedIn) return [];
    const account = readJSON('exploreworld_account', null);
    if (!account) return [];
    const userKey = 'exploreworld_custom_facilities_' + account.email;
    const allCustom = readJSON(userKey, {});
    return allCustom[tourId] || [];
}

// Open custom facility modal
function openCustomFacilityModal(event, tourId) {
    event.stopPropagation();
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to add custom facilities', 'info');
        redirectToAccount('enquiry', tourId);
        return;
    }

    // Create modal dynamically
    let modal = document.getElementById('customFacilityModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'customFacilityModal';
        modal.className = 'custom-facility-modal';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="custom-facility-content">
            <button class="close-popup" onclick="closeCustomFacilityModal(event)">✕</button>
            <h3>🎁 Add Custom Facility</h3>
            <p>Add your own facility for this tour (only visible to you)</p>
            <input type="text" id="customFacilityInput" placeholder="e.g. 🍕 Free Pizza, 🎁 Gift Pack, etc." maxlength="50" />
            <div class="custom-facility-buttons">
                <button onclick="saveCustomFacility(event, ${tourId})" class="create-account-btn">Save</button>
                <button onclick="closeCustomFacilityModal(event)" class="order-back-btn">Cancel</button>
            </div>
            <div id="existingCustomFacilities"></div>
        </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Show existing custom facilities with delete option
    renderExistingCustomFacilities(tourId);
}

// Render existing custom facilities
function renderExistingCustomFacilities(tourId) {
    const container = document.getElementById('existingCustomFacilities');
    if (!container) return;
    const facilities = getUserCustomFacilities(tourId);
    if (facilities.length === 0) {
        container.innerHTML = '';
        return;
    }
    container.innerHTML = `
        <h4 style="margin-top: 1rem; color: var(--primary);">Your Custom Facilities:</h4>
        <ul class="custom-facility-list">
            ${facilities.map((f, i) => `
                <li>
                    <span>${f}</span>
                    <button onclick="deleteCustomFacility(event, ${tourId}, ${i})" class="delete-facility-btn">🗑️</button>
                </li>
            `).join('')}
        </ul>
    `;
}

// Save custom facility
function saveCustomFacility(event, tourId) {
    event.stopPropagation();
    const input = document.getElementById('customFacilityInput');
    const value = input.value.trim();
    if (!value) {
        showFeedback('⚠️ Please enter a facility', 'error');
        return;
    }

    const account = readJSON('exploreworld_account', null);
    if (!account) return;

    const userKey = 'exploreworld_custom_facilities_' + account.email;
    const allCustom = readJSON(userKey, {});
    if (!allCustom[tourId]) allCustom[tourId] = [];
    allCustom[tourId].push(value);
    safeSetJSON(userKey, allCustom);

    showFeedback('✅ Custom facility added!', 'success');
    input.value = '';
    renderExistingCustomFacilities(tourId);

    // Refresh tour cards to show new facility
    renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
    renderInternational(currentRegion);
}

// Delete custom facility
function deleteCustomFacility(event, tourId, index) {
    event.stopPropagation();
    const account = readJSON('exploreworld_account', null);
    if (!account) return;
    const userKey = 'exploreworld_custom_facilities_' + account.email;
    const allCustom = readJSON(userKey, {});
    if (allCustom[tourId] && allCustom[tourId][index] !== undefined) {
        allCustom[tourId].splice(index, 1);
        if (allCustom[tourId].length === 0) delete allCustom[tourId];
        safeSetJSON(userKey, allCustom);
        showFeedback('🗑️ Facility removed', 'info');
        renderExistingCustomFacilities(tourId);
        renderTours(currentCategory, currentPriceFilter, currentDurationFilter, currentSort);
        renderInternational(currentRegion);
    }
}

// Close custom facility modal
function closeCustomFacilityModal(event) {
    if (event) event.stopPropagation();
    const modal = document.getElementById('customFacilityModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Expose globally
window.toggleFacilities = toggleFacilities;
window.openCustomFacilityModal = openCustomFacilityModal;
window.closeCustomFacilityModal = closeCustomFacilityModal;
window.saveCustomFacility = saveCustomFacility;
window.deleteCustomFacility = deleteCustomFacility;

// ============================================================
// BATCH 2: FLIGHT BOOKING + HOTEL BOOKING + LIVE LOCATION
// ============================================================

// Sample flights data (dummy - real API nahi chahiye)
const dummyFlights = [
    { id: 'FL001', airline: 'Air India', logo: '✈️', from: 'Mumbai', to: 'Goa', depart: '06:30', arrive: '07:45', duration: '1h 15m', price: 4500, seats: 12 },
    { id: 'FL002', airline: 'IndiGo', logo: '🛫', from: 'Mumbai', to: 'Goa', depart: '09:15', arrive: '10:30', duration: '1h 15m', price: 3800, seats: 8 },
    { id: 'FL003', airline: 'SpiceJet', logo: '🛩️', from: 'Mumbai', to: 'Goa', depart: '14:00', arrive: '15:20', duration: '1h 20m', price: 4200, seats: 15 },
    { id: 'FL004', airline: 'Vistara', logo: '✈️', from: 'Mumbai', to: 'Goa', depart: '18:30', arrive: '19:50', duration: '1h 20m', price: 5500, seats: 6 },
    { id: 'FL005', airline: 'Air India', logo: '✈️', from: 'Delhi', to: 'Goa', depart: '07:00', arrive: '09:30', duration: '2h 30m', price: 6200, seats: 10 },
    { id: 'FL006', airline: 'IndiGo', logo: '🛫', from: 'Delhi', to: 'Goa', depart: '12:45', arrive: '15:20', duration: '2h 35m', price: 5800, seats: 14 },
    { id: 'FL007', airline: 'SpiceJet', logo: '🛩️', from: 'Bangalore', to: 'Goa', depart: '08:00', arrive: '09:15', duration: '1h 15m', price: 3500, seats: 20 },
    { id: 'FL008', airline: 'Vistara', logo: '✈️', from: 'Bangalore', to: 'Goa', depart: '16:30', arrive: '17:45', duration: '1h 15m', price: 4100, seats: 9 },
    { id: 'FL009', airline: 'Air India', logo: '✈️', from: 'Mumbai', to: 'Delhi', depart: '06:00', arrive: '08:15', duration: '2h 15m', price: 5500, seats: 11 },
    { id: 'FL010', airline: 'IndiGo', logo: '🛫', from: 'Mumbai', to: 'Delhi', depart: '11:30', arrive: '13:45', duration: '2h 15m', price: 4800, seats: 18 },
    { id: 'FL011', airline: 'Emirates', logo: '🛫', from: 'Mumbai', to: 'Dubai', depart: '04:00', arrive: '06:15', duration: '3h 15m', price: 18500, seats: 22 },
    { id: 'FL012', airline: 'Air France', logo: '✈️', from: 'Delhi', to: 'Paris', depart: '02:30', arrive: '08:45', duration: '9h 15m', price: 52000, seats: 15 },
];

// Sample hotels data
const dummyHotels = [
    { id: 'HT001', name: 'Taj Exotica Resort', city: 'Goa', img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&h=200&fit=crop&auto=format', rating: 4.8, reviews: 342, price: 8500, amenities: ['🏊 Pool', '🍽️ Restaurant', '📶 WiFi', '🏖️ Beach Access'] },
    { id: 'HT002', name: 'The Leela Goa', city: 'Goa', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&h=200&fit=crop&auto=format', rating: 4.9, reviews: 456, price: 12000, amenities: ['🏊 Pool', '💆 Spa', '🍽️ 3 Restaurants', '🎾 Tennis'] },
    { id: 'HT003', name: 'Novotel Goa Resort', city: 'Goa', img: 'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?w=300&h=200&fit=crop&auto=format', rating: 4.5, reviews: 289, price: 5500, amenities: ['🏊 Pool', '📶 WiFi', '🍽️ Restaurant', '💪 Gym'] },
    { id: 'HT004', name: 'JW Marriott Mumbai', city: 'Mumbai', img: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=300&h=200&fit=crop&auto=format', rating: 4.7, reviews: 512, price: 9500, amenities: ['🏊 Pool', '💆 Spa', '🍽️ Restaurant', '🚗 Valet'] },
    { id: 'HT005', name: 'The Oberoi Mumbai', city: 'Mumbai', img: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=300&h=200&fit=crop&auto=format', rating: 4.9, reviews: 678, price: 15000, amenities: ['🌊 Ocean View', '🍽️ 4 Restaurants', '💆 Spa', '🏊 Pool'] },
    { id: 'HT006', name: 'ITC Maurya Delhi', city: 'Delhi', img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=300&h=200&fit=crop&auto=format', rating: 4.7, reviews: 423, price: 8800, amenities: ['🏊 Pool', '🍽️ Restaurant', '📶 WiFi', '🚗 Parking'] },
    { id: 'HT007', name: 'Rambagh Palace Jaipur', city: 'Jaipur', img: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=300&h=200&fit=crop&auto=format', rating: 4.9, reviews: 567, price: 25000, amenities: ['🏰 Heritage', '🍽️ Fine Dining', '💆 Spa', '🐘 Elephant Ride'] },
    { id: 'HT008', name: 'Bali Ubud Resort', city: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&h=200&fit=crop&auto=format', rating: 4.8, reviews: 789, price: 11000, amenities: ['🏊 Infinity Pool', '🌾 Rice Terrace View', '💆 Spa', '🧘 Yoga'] },
    { id: 'HT009', name: 'Burj Al Arab Dubai', city: 'Dubai', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300&h=200&fit=crop&auto=format', rating: 5.0, reviews: 891, price: 45000, amenities: ['🏨 7-Star', '🏖️ Private Beach', '🍽️ 8 Restaurants', '🚁 Helipad'] },
    { id: 'HT010', name: 'Paris Ritz Hotel', city: 'Paris', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=200&fit=crop&auto=format', rating: 4.9, reviews: 654, price: 38000, amenities: ['🏛️ Historic', '🍽️ Michelin', '💆 Spa', '🍷 Wine Cellar'] },
];

// Flight Search
function setupFlightBooking() {
    const searchBtn = document.getElementById('flightSearchBtn');
    if (!searchBtn) return;

    // Set min date
    const dateInput = document.getElementById('flightDate');
    if (dateInput) dateInput.min = new Date().toISOString().split('T')[0];

    searchBtn.addEventListener('click', function() {
        const from = document.getElementById('flightFrom').value.trim();
        const to = document.getElementById('flightTo').value.trim();
        const date = document.getElementById('flightDate').value;
        const passengers = parseInt(document.getElementById('flightPassengers').value) || 1;

        if (!from || !to || !date) {
            showFeedback('⚠️ Please fill all flight details', 'error');
            return;
        }

        const results = dummyFlights.filter(f =>
            f.from.toLowerCase().includes(from.toLowerCase()) &&
            f.to.toLowerCase().includes(to.toLowerCase())
        );

        const container = document.getElementById('flightResults');
        if (results.length === 0) {
            container.innerHTML = `<div class="empty-results">😔 No flights found for ${from} → ${to}. Try different cities.</div>`;
            return;
        }

        container.innerHTML = `
            <h3 style="color: var(--primary); margin-bottom: 1rem;">✈️ ${results.length} flights found · ${from} → ${to} · ${new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</h3>
            ${results.map(f => `
                <div class="flight-card">
                    <div class="flight-airline">
                        <span class="flight-logo">${f.logo}</span>
                        <div>
                            <strong>${f.airline}</strong>
                            <small>${f.id}</small>
                        </div>
                    </div>
                    <div class="flight-route">
                        <div class="flight-time">
                            <strong>${f.depart}</strong>
                            <small>${f.from}</small>
                        </div>
                        <div class="flight-duration">
                            <span>${f.duration}</span>
                            <div class="flight-line">✈️</div>
                        </div>
                        <div class="flight-time">
                            <strong>${f.arrive}</strong>
                            <small>${f.to}</small>
                        </div>
                    </div>
                    <div class="flight-price">
                        <div class="price-per-person">₹${f.price.toLocaleString('en-IN')}</div>
                        <small>per person</small>
                        <div class="seats-left">${f.seats} seats left</div>
                    </div>
                    <button class="flight-book-btn" onclick="bookFlight('${f.id}', '${from}', '${to}', '${date}', ${passengers})">Book Now</button>
                </div>
            `).join('')}
        `;
        window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
    });
}

// Book Flight
function bookFlight(flightId, from, to, date, passengers) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to book flights', 'info');
        redirectToAccount('enquiry', null);
        return;
    }

    const flight = dummyFlights.find(f => f.id === flightId);
    if (!flight) return;

    const totalPrice = flight.price * passengers;
    const bookingId = 'FL' + Date.now().toString().slice(-6);
    const formattedDate = new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    const booking = {
        id: bookingId,
        type: 'flight',
        airline: flight.airline,
        logo: flight.logo,
        from, to,
        depart: flight.depart,
        arrive: flight.arrive,
        duration: flight.duration,
        date: formattedDate,
        passengers,
        total: totalPrice,
        bookingDate: new Date().toISOString(),
        status: 'pending'
    };

    const flightBookings = readJSON('exploreworld_flight_bookings', []);
    flightBookings.push(booking);
    safeSetJSON('exploreworld_flight_bookings', flightBookings);

    showFeedback(`✅ Flight booked! ${flight.airline} ${from}→${to} for ${passengers} passenger(s)`, 'success');

    // Show success modal
    showBookingSuccessModal(booking, 'flight');
}

// Hotel Search
function setupHotelBooking() {
    const searchBtn = document.getElementById('hotelSearchBtn');
    if (!searchBtn) return;

    // Set min dates
    const checkIn = document.getElementById('hotelCheckIn');
    const checkOut = document.getElementById('hotelCheckOut');
    const today = new Date().toISOString().split('T')[0];
    if (checkIn) checkIn.min = today;
    if (checkOut) checkOut.min = today;

    // Auto-set checkout after checkin
    if (checkIn) {
        checkIn.addEventListener('change', () => {
            if (checkOut) checkOut.min = checkIn.value;
        });
    }

    searchBtn.addEventListener('click', function() {
        const city = document.getElementById('hotelCity').value.trim();
        const checkInDate = document.getElementById('hotelCheckIn').value;
        const checkOutDate = document.getElementById('hotelCheckOut').value;
        const guests = parseInt(document.getElementById('hotelGuests').value) || 1;

        if (!city || !checkInDate || !checkOutDate) {
            showFeedback('⚠️ Please fill all hotel details', 'error');
            return;
        }

        if (new Date(checkOutDate) <= new Date(checkInDate)) {
            showFeedback('⚠️ Check-out must be after check-in', 'error');
            return;
        }

        const nights = Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24));

        const results = dummyHotels.filter(h => h.city.toLowerCase().includes(city.toLowerCase()));

        const container = document.getElementById('hotelResults');
        if (results.length === 0) {
            container.innerHTML = `<div class="empty-results">😔 No hotels found in ${city}. Try another city.</div>`;
            return;
        }

        container.innerHTML = `
            <h3 style="color: var(--primary); margin-bottom: 1rem;">🏨 ${results.length} hotels found · ${city} · ${nights} night(s)</h3>
            ${results.map(h => {
                const totalPrice = h.price * nights * guests;
                return `
                <div class="hotel-card">
                    <div class="hotel-image">
                        <img src="${h.img}" alt="${h.name}" />
                    </div>
                    <div class="hotel-info">
                        <h4>${h.name}</h4>
                        <div class="hotel-rating">⭐ ${h.rating} (${h.reviews} reviews)</div>
                        <div class="hotel-amenities">
                            ${h.amenities.map(a => `<span>${a}</span>`).join('')}
                        </div>
                        <div class="hotel-price-info">
                            <div>₹${h.price.toLocaleString('en-IN')} / night</div>
                            <div class="hotel-total">Total: ₹${totalPrice.toLocaleString('en-IN')} for ${nights} night(s)</div>
                        </div>
                    </div>
                    <button class="hotel-book-btn" onclick="bookHotel('${h.id}', '${checkInDate}', '${checkOutDate}', ${guests}, ${nights})">Book Hotel</button>
                </div>
                `;
            }).join('')}
        `;
        window.scrollTo({ top: container.offsetTop - 100, behavior: 'smooth' });
    });
}

// Book Hotel
function bookHotel(hotelId, checkIn, checkOut, guests, nights) {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to book hotels', 'info');
        redirectToAccount('enquiry', null);
        return;
    }

    const hotel = dummyHotels.find(h => h.id === hotelId);
    if (!hotel) return;

    const totalPrice = hotel.price * nights * guests;
    const bookingId = 'HT' + Date.now().toString().slice(-6);
    const formattedCheckIn = new Date(checkIn).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
    const formattedCheckOut = new Date(checkOut).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });

    const booking = {
        id: bookingId,
        type: 'hotel',
        hotelName: hotel.name,
        city: hotel.city,
        img: hotel.img,
        checkIn: formattedCheckIn,
        checkOut: formattedCheckOut,
        nights,
        guests,
        total: totalPrice,
        bookingDate: new Date().toISOString(),
        status: 'pending'
    };

    const hotelBookings = readJSON('exploreworld_hotel_bookings', []);
    hotelBookings.push(booking);
    safeSetJSON('exploreworld_hotel_bookings', hotelBookings);

    showFeedback(`✅ Hotel booked! ${hotel.name} for ${nights} night(s)`, 'success');

    showBookingSuccessModal(booking, 'hotel');
}

// Success Modal (generic for flight & hotel)
function showBookingSuccessModal(booking, type) {
    let modal = document.getElementById('bookingSuccessModal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'bookingSuccessModal';
        modal.className = 'booking-success-modal';
        document.body.appendChild(modal);
    }

    const title = type === 'flight' ? '✈️ Flight Booking Confirmed!' : '🏨 Hotel Booking Confirmed!';
    const icon = type === 'flight' ? '🛫' : '🏨';

    modal.innerHTML = `
        <div class="booking-success-content">
            <div class="success-icon">${icon}</div>
            <h2>${title}</h2>
            <div class="booking-success-details">
                <p><strong>Booking ID:</strong> ${booking.id}</p>
                ${type === 'flight' ? `
                    <p><strong>Airline:</strong> ${booking.airline}</p>
                    <p><strong>Route:</strong> ${booking.from} → ${booking.to}</p>
                    <p><strong>Date:</strong> ${booking.date}</p>
                    <p><strong>Time:</strong> ${booking.depart} - ${booking.arrive}</p>
                    <p><strong>Passengers:</strong> ${booking.passengers}</p>
                ` : `
                    <p><strong>Hotel:</strong> ${booking.hotelName}</p>
                    <p><strong>City:</strong> ${booking.city}</p>
                    <p><strong>Check-in:</strong> ${booking.checkIn}</p>
                    <p><strong>Check-out:</strong> ${booking.checkOut}</p>
                    <p><strong>Nights:</strong> ${booking.nights}</p>
                    <p><strong>Guests:</strong> ${booking.guests}</p>
                `}
                <p><strong>Total Paid:</strong> ₹${booking.total.toLocaleString('en-IN')}</p>
                <div class="live-tracking-badge">🔴 LIVE TRACKING ACTIVE</div>
            </div>
            <div class="booking-success-buttons">
                <button onclick="closeBookingSuccessModal(event)" class="create-account-btn">OK</button>
                <button onclick="closeBookingSuccessModal(event); document.querySelector('[data-section=profile]').click()" class="order-back-btn">View in Profile</button>
            </div>
        </div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    // Update badge count in profile
    updateProfileBadges();
}

function closeBookingSuccessModal(event) {
    if (event) event.stopPropagation();
    const modal = document.getElementById('bookingSuccessModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Update profile badge counts
function updateProfileBadges() {
    const flightBookings = readJSON('exploreworld_flight_bookings', []);
    const hotelBookings = readJSON('exploreworld_hotel_bookings', []);
    const tourBookings = readJSON('exploreworld_bookings', []);
    const total = flightBookings.length + hotelBookings.length + tourBookings.length;

    // Update profile tabs if they exist
    const flightTab = document.querySelector('[data-tab="flights"]');
    const hotelTab = document.querySelector('[data-tab="hotels"]');
    if (flightTab && flightBookings.length > 0) {
        flightTab.innerHTML = `✈️ Flights (${flightBookings.length})`;
    }
    if (hotelTab && hotelBookings.length > 0) {
        hotelTab.innerHTML = `🏨 Hotels (${hotelBookings.length})`;
    }
}

// Expose globally
window.bookFlight = bookFlight;
window.bookHotel = bookHotel;
window.closeBookingSuccessModal = closeBookingSuccessModal;
window.updateProfileBadges = updateProfileBadges;

// Live Location Sharing (simple)
function setupLiveLocation() {
    // Check if we're on profile and add location button
    const profileTab = document.getElementById('tab-profile-dashboard');
    if (!profileTab) return;
    // Future enhancement - handled by profile dashboard
}

// ============================================================
// BATCH 3: PROFILE DASHBOARD + ANALYTICS + ACHIEVEMENTS
// ============================================================

// ---------- RENDER FLIGHTS TAB ----------
function renderUserFlights() {
    const container = document.getElementById('userFlightsList');
    if (!container) return;
    const flights = readJSON('exploreworld_flight_bookings', []);
    if (flights.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:1.5rem;">No flight bookings yet. Book your first flight!</p>';
        return;
    }
    const sorted = [...flights].sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
    container.innerHTML = sorted.map(f => {
        const hoursPassed = (Date.now() - new Date(f.bookingDate).getTime()) / (1000 * 60 * 60);
        let status = 'pending', statusText = '⏳ Confirmed', stepClass = 'active';
        if (hoursPassed > 24) { status = 'delivered'; statusText = '✅ Completed'; stepClass = 'completed'; }
        else if (hoursPassed > 1) { status = 'transit'; statusText = '✈️ In Flight'; }

        return `
            <div class="order-card">
                <div class="order-header">
                    <span class="order-id">#${f.id}</span>
                    <span class="order-status ${status}">${statusText}</span>
                </div>
                <div class="order-details">
                    <span>${f.logo} ${f.airline}</span>
                    <span>${f.from} → ${f.to}</span>
                    <span>📅 ${f.date}</span>
                </div>
                <div class="order-details" style="margin-top:4px;font-size:0.8rem;">
                    <span>🕐 ${f.depart} - ${f.arrive}</span>
                    <span>⏱️ ${f.duration}</span>
                    <span>👥 ${f.passengers} passenger(s)</span>
                    <span>💰 ₹${f.total.toLocaleString('en-IN')}</span>
                </div>
                <div class="order-tracker">
                    <div class="tracker-step completed"><span>📅</span> Booked</div>
                    <div class="tracker-step ${stepClass}"><span>✈️</span> Confirmed</div>
                    <div class="tracker-step ${status === 'delivered' ? 'completed' : ''}"><span>✅</span> Completed</div>
                </div>
                <div class="live-tracking-mini">
                    <div class="tracking-progress"><div class="tracking-bar" style="width: ${hoursPassed > 24 ? 100 : hoursPassed > 1 ? 65 : 30}%"></div></div>
                    <small style="color: var(--text-light); font-size: 0.75rem;">🔴 Live status: ${statusText}</small>
                </div>
            </div>
        `;
    }).join('');
}

// ---------- RENDER HOTELS TAB ----------
function renderUserHotels() {
    const container = document.getElementById('userHotelsList');
    if (!container) return;
    const hotels = readJSON('exploreworld_hotel_bookings', []);
    if (hotels.length === 0) {
        container.innerHTML = '<p style="color:var(--text-light);text-align:center;padding:1.5rem;">No hotel bookings yet. Book your first stay!</p>';
        return;
    }
    const sorted = [...hotels].sort((a, b) => new Date(b.bookingDate) - new Date(a.bookingDate));
    container.innerHTML = sorted.map(h => {
        const hoursPassed = (Date.now() - new Date(h.bookingDate).getTime()) / (1000 * 60 * 60);
        let status = 'pending', statusText = '⏳ Confirmed', stepClass = 'active';
        if (hoursPassed > 24) { status = 'delivered'; statusText = '✅ Completed'; stepClass = 'completed'; }
        else if (hoursPassed > 1) { status = 'transit'; statusText = '🏨 Checked-in'; }

        return `
            <div class="order-card">
                <div class="order-header">
                    <span class="order-id">#${h.id}</span>
                    <span class="order-status ${status}">${statusText}</span>
                </div>
                <div class="order-details">
                    <span>🏨 ${h.hotelName}</span>
                    <span>📍 ${h.city}</span>
                    <span>📅 ${h.checkIn} → ${h.checkOut}</span>
                </div>
                <div class="order-details" style="margin-top:4px;font-size:0.8rem;">
                    <span>🌙 ${h.nights} night(s)</span>
                    <span>👥 ${h.guests} guest(s)</span>
                    <span>💰 ₹${h.total.toLocaleString('en-IN')}</span>
                </div>
                <div class="order-tracker">
                    <div class="tracker-step completed"><span>📅</span> Booked</div>
                    <div class="tracker-step ${stepClass}"><span>🏨</span> Checked-in</div>
                    <div class="tracker-step ${status === 'delivered' ? 'completed' : ''}"><span>✅</span> Checked-out</div>
                </div>
                <div class="live-tracking-mini">
                    <div class="tracking-progress"><div class="tracking-bar" style="width: ${hoursPassed > 24 ? 100 : hoursPassed > 1 ? 65 : 30}%"></div></div>
                    <small style="color: var(--text-light); font-size: 0.75rem;">🔴 Live status: ${statusText}</small>
                </div>
            </div>
        `;
    }).join('');
}

// ---------- RENDER DASHBOARD ----------
function renderUserDashboard() {
    const account = readJSON('exploreworld_account', null);
    if (!account) return;

    const tourBookings = readJSON('exploreworld_bookings', []);
    const flightBookings = readJSON('exploreworld_flight_bookings', []);
    const hotelBookings = readJSON('exploreworld_hotel_bookings', []);
    const userRatingsData = readJSON('exploreworld_user_ratings', {});

    // Total trips
    const totalTrips = tourBookings.length + flightBookings.length + hotelBookings.length;
    document.getElementById('statTotalTrips').textContent = totalTrips;

    // Total spend
    const tourSpend = tourBookings.reduce((sum, b) => sum + (b.total || 0), 0);
    const flightSpend = flightBookings.reduce((sum, f) => sum + (f.total || 0), 0);
    const hotelSpend = hotelBookings.reduce((sum, h) => sum + (h.total || 0), 0);
    const totalSpend = tourSpend + flightSpend + hotelSpend;
    document.getElementById('statTotalSpend').textContent = '₹' + totalSpend.toLocaleString('en-IN');

    // Cities visited
    const cities = new Set();
    hotelBookings.forEach(h => { if (h.city) cities.add(h.city); });
    flightBookings.forEach(f => { if (f.to) cities.add(f.to); if (f.from) cities.add(f.from); });
    tourBookings.forEach(t => {
        // Try to extract city from tour name
        if (t.tourName) cities.add(t.tourName.split(' ')[0]);
    });
    document.getElementById('statCitiesVisited').textContent = cities.size;

    // Avg rating
    const ratingsArray = Object.values(userRatingsData).filter(r => r > 0);
    const avgRating = ratingsArray.length > 0
        ? (ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length).toFixed(1)
        : '0.0';
    document.getElementById('statAvgRating').textContent = avgRating;

    // Spend breakdown
    document.getElementById('spendBreakdown').textContent =
        `Trips: ₹${tourSpend.toLocaleString('en-IN')} · Flights: ₹${flightSpend.toLocaleString('en-IN')} · Hotels: ₹${hotelSpend.toLocaleString('en-IN')}`;

    // Analytics bar
    const maxSpend = Math.max(tourSpend, flightSpend, hotelSpend, 1);
    const tourBarPercent = (tourSpend / (tourSpend + flightSpend + hotelSpend || 1)) * 100;
    document.getElementById('spendBarTrips').style.width = tourBarPercent + '%';

    // Top category (from tour bookings)
    const categoryCount = {};
    tourBookings.forEach(b => {
        const tour = tours.find(t => t.id === b.tourId);
        if (tour) categoryCount[tour.category] = (categoryCount[tour.category] || 0) + 1;
    });
    const topCat = Object.entries(categoryCount).sort((a, b) => b[1] - a[1])[0];
    const catLabels = { beach: '🏖️ Beach', mountain: '⛰️ Mountain', city: '🏙️ City', cultural: '🏛️ Cultural', adventure: '🧗 Adventure' };
    document.getElementById('topCategory').textContent = topCat ? catLabels[topCat[0]] || topCat[0] : 'No tours yet';

    // Upcoming trips (next 30 days)
    const now = new Date();
    const thirtyDaysLater = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
    const upcoming = tourBookings.filter(b => {
        if (!b.date) return false;
        const bDate = new Date(b.date);
        return bDate >= now && bDate <= thirtyDaysLater;
    });
    document.getElementById('upcomingTrips').textContent = upcoming.length + ' trip(s)';

    // Savings (discounts + coupons)
    const totalSavings = tourBookings.reduce((sum, b) => sum + (b.savings || 0), 0);
    document.getElementById('totalSavings').textContent = '₹' + totalSavings.toLocaleString('en-IN');

    // Render achievements
    renderAchievements(totalTrips, cities.size, totalSpend, tourBookings.length, flightBookings.length, hotelBookings.length);
}

// ---------- ACHIEVEMENTS ----------
function renderAchievements(totalTrips, citiesCount, totalSpend, toursCount, flightsCount, hotelsCount) {
    const container = document.getElementById('achievementsGrid');
    if (!container) return;

    const achievements = [
        { icon: '🌱', name: 'First Steps', desc: 'Made your first booking', unlocked: totalTrips >= 1 },
        { icon: '🧭', name: 'Explorer', desc: 'Visited 3 different cities', unlocked: citiesCount >= 3 },
        { icon: '🌍', name: 'Globetrotter', desc: 'Visited 5 different cities', unlocked: citiesCount >= 5 },
        { icon: '🎒', name: 'Tour Lover', desc: 'Booked 3 tours', unlocked: toursCount >= 3 },
        { icon: '✈️', name: 'Frequent Flyer', desc: 'Booked 3 flights', unlocked: flightsCount >= 3 },
        { icon: '🏨', name: 'Hotel Hopper', desc: 'Booked 3 hotels', unlocked: hotelsCount >= 3 },
        { icon: '💰', name: 'Big Spender', desc: 'Spent over ₹1,00,000', unlocked: totalSpend >= 100000 },
        { icon: '👑', name: 'Royal Traveler', desc: 'Spent over ₹5,00,000', unlocked: totalSpend >= 500000 },
        { icon: '⭐', name: 'Rating Master', desc: 'Rated 5+ items', unlocked: Object.keys(readJSON('exploreworld_user_ratings', {})).length >= 5 },
        { icon: '🔥', name: 'Travel Addict', desc: 'Made 10+ bookings', unlocked: totalTrips >= 10 },
    ];

    container.innerHTML = achievements.map(a => `
        <div class="achievement-card ${a.unlocked ? 'unlocked' : 'locked'}">
            <div class="achievement-icon">${a.icon}</div>
            <div class="achievement-name">${a.name}</div>
            <div class="achievement-desc">${a.desc}</div>
            ${a.unlocked ? '<div class="achievement-badge">✓ Unlocked</div>' : '<div class="achievement-badge locked">🔒 Locked</div>'}
        </div>
    `).join('');
}

// ---------- EXPOSE GLOBALLY ----------
window.renderUserFlights = renderUserFlights;
window.renderUserHotels = renderUserHotels;
window.renderUserDashboard = renderUserDashboard;

// ============================================================
// BATCH 4: AI TRIP PLANNER + AI PACKING + AI PHOTOGRAPHY
// ============================================================

// ---------- AI TRIP PLANNER ----------
function openAITripPlanner() {
    const modal = document.getElementById('aiToolModal');
    const body = document.getElementById('aiToolModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <h2>🗺️ AI Trip Planner</h2>
        <p class="ai-modal-sub">Tell us your preferences, AI will plan the perfect trip</p>
        <div class="ai-form">
            <div class="form-group">
                <label>Destination</label>
                <input type="text" id="aiTripDest" placeholder="e.g. Goa, Paris, Bali" list="aiDestList" />
                <datalist id="aiDestList">
                    <option value="Goa">
                    <option value="Paris">
                    <option value="Bali">
                    <option value="Dubai">
                    <option value="Tokyo">
                    <option value="Maldives">
                    <option value="Jaipur">
                    <option value="Kerala">
                    <option value="Manali">
                    <option value="Singapore">
                </datalist>
            </div>
            <div class="form-group">
                <label>Number of Days</label>
                <select id="aiTripDays">
                    <option value="2">2 Days</option>
                    <option value="3" selected>3 Days</option>
                    <option value="4">4 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                    <option value="10">10 Days</option>
                </select>
            </div>
            <div class="form-group">
                <label>Budget (₹)</label>
                <select id="aiTripBudget">
                    <option value="15000">Under ₹15,000</option>
                    <option value="30000" selected>₹15,000 - ₹30,000</option>
                    <option value="50000">₹30,000 - ₹50,000</option>
                    <option value="100000">₹50,000 - ₹1,00,000</option>
                    <option value="200000">Above ₹1,00,000</option>
                </select>
            </div>
            <div class="form-group">
                <label>Trip Type</label>
                <select id="aiTripType">
                    <option value="relax">🧘 Relax & Unwind</option>
                    <option value="adventure">🧗 Adventure</option>
                    <option value="cultural">🏛️ Cultural</option>
                    <option value="romantic">💑 Romantic</option>
                    <option value="family">👨‍👩‍👧 Family</option>
                </select>
            </div>
        </div>
        <button class="ai-generate-btn" onclick="generateAITripPlan()">✨ Generate AI Itinerary</button>
        <div id="aiTripResult" class="ai-result"></div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function generateAITripPlan() {
    const dest = document.getElementById('aiTripDest').value.trim() || 'Goa';
    const days = parseInt(document.getElementById('aiTripDays').value) || 3;
    const budget = parseInt(document.getElementById('aiTripBudget').value) || 30000;
    const type = document.getElementById('aiTripType').value;

    const typeLabels = {
        relax: '🧘 Relaxing',
        adventure: '🧗 Adventurous',
        cultural: '🏛️ Cultural',
        romantic: '💑 Romantic',
        family: '👨‍👩‍👧 Family'
    };

    // AI-generated itinerary based on inputs
    const activities = {
        relax: ['Beach relaxation', 'Spa & wellness', 'Sunset views', 'Local café hopping', 'Yoga session', 'Pool time', 'Leisure walk'],
        adventure: ['Trekking', 'Water sports', 'Zip-lining', 'Rock climbing', 'Paragliding', 'Rafting', 'Camping'],
        cultural: ['Temple visit', 'Heritage walk', 'Local market tour', 'Museum visit', 'Cultural show', 'Art gallery', 'Traditional food tour'],
        romantic: ['Candlelight dinner', 'Sunset cruise', 'Couple spa', 'Photoshoot', 'Wine tasting', 'Private tour', 'Beach walk'],
        family: ['Theme park', 'Zoo visit', 'Beach day', 'Picnic', 'Boat ride', 'Kids activities', 'Family dinner']
    };

    const selectedActivities = activities[type] || activities.relax;
    const dailyBudget = Math.round(budget / days);

    let itinerary = '';
    for (let day = 1; day <= days; day++) {
        const morning = selectedActivities[(day - 1) * 3 % selectedActivities.length];
        const afternoon = selectedActivities[((day - 1) * 3 + 1) % selectedActivities.length];
        const evening = selectedActivities[((day - 1) * 3 + 2) % selectedActivities.length];

        itinerary += `
            <div class="ai-day-plan">
                <div class="ai-day-header">📅 Day ${day}</div>
                <div class="ai-day-items">
                    <div class="ai-time-slot"><strong>🌅 Morning:</strong> ${morning}</div>
                    <div class="ai-time-slot"><strong>☀️ Afternoon:</strong> ${afternoon}</div>
                    <div class="ai-time-slot"><strong>🌙 Evening:</strong> ${evening}</div>
                </div>
            </div>
        `;
    }

    const result = document.getElementById('aiTripResult');
    result.innerHTML = `
        <div class="ai-plan-header">
            <h3>✨ Your AI-Generated Trip Plan</h3>
            <div class="ai-plan-meta">
                <span>📍 ${dest}</span>
                <span>📅 ${days} Days</span>
                <span>💰 ₹${budget.toLocaleString('en-IN')}</span>
                <span>${typeLabels[type]}</span>
            </div>
            <div class="ai-budget-breakdown">
                <strong>Daily Budget:</strong> ₹${dailyBudget.toLocaleString('en-IN')} / day
            </div>
        </div>
        ${itinerary}
        <div class="ai-plan-tips">
            <h4>💡 AI Travel Tips</h4>
            <ul>
                <li>Book tours in advance for better prices</li>
                <li>Pack according to local weather</li>
                <li>Try local cuisine — ask our TravelBot for suggestions</li>
                <li>Keep emergency contacts saved</li>
            </ul>
        </div>
    `;
}

// ---------- AI PACKING ASSISTANT ----------
function openAIPacking() {
    const modal = document.getElementById('aiToolModal');
    const body = document.getElementById('aiToolModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <h2>🎒 AI Packing Assistant</h2>
        <p class="ai-modal-sub">Get a smart packing list based on your trip</p>
        <div class="ai-form">
            <div class="form-group">
                <label>Destination</label>
                <input type="text" id="aiPackDest" placeholder="e.g. Goa, Manali, Paris" />
            </div>
            <div class="form-group">
                <label>Number of Days</label>
                <select id="aiPackDays">
                    <option value="2">2 Days</option>
                    <option value="3" selected>3 Days</option>
                    <option value="5">5 Days</option>
                    <option value="7">7 Days</option>
                </select>
            </div>
            <div class="form-group">
                <label>Trip Type</label>
                <select id="aiPackType">
                    <option value="beach">🏖️ Beach</option>
                    <option value="mountain">⛰️ Mountain</option>
                    <option value="city">🏙️ City</option>
                    <option value="adventure">🧗 Adventure</option>
                </select>
            </div>
            <div class="form-group">
                <label>Weather</label>
                <select id="aiPackWeather">
                    <option value="sunny">☀️ Sunny</option>
                    <option value="rainy">🌧️ Rainy</option>
                    <option value="cold">❄️ Cold</option>
                    <option value="mixed">🌤️ Mixed</option>
                </select>
            </div>
        </div>
        <button class="ai-generate-btn" onclick="generateAIPackingList()">🎒 Generate Packing List</button>
        <div id="aiPackingResult" class="ai-result"></div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function generateAIPackingList() {
    const dest = document.getElementById('aiPackDest').value.trim() || 'Your destination';
    const days = parseInt(document.getElementById('aiPackDays').value) || 3;
    const type = document.getElementById('aiPackType').value;
    const weather = document.getElementById('aiPackWeather').value;

    const baseItems = {
        essential: ['🪪 ID/Passport', '💳 Cards & Cash', '📱 Phone + Charger', '🔋 Power Bank', '💊 Medicines', '🧴 Toiletries', '🕶️ Sunglasses', '🧢 Cap/Hat'],
        clothing: ['👕 T-shirts', '👖 Pants/Shorts', '🩲 Innerwear', '🧦 Socks', '👟 Comfortable Shoes', '🩴 Flip-flops', '🧥 Light Jacket'],
        beach: ['🩱 Swimwear', '🧴 Sunscreen', '🏖️ Beach Towel', '🕶️ Sunglasses', '👒 Sun Hat', '🥤 Water Bottle'],
        mountain: ['🧥 Warm Jacket', '🥾 Trekking Shoes', '🧤 Gloves', '🎿 Warm Cap', '🧣 Scarf', '🔦 Flashlight'],
        city: ['👔 Smart Outfit', '👞 Formal Shoes', '👜 Day Bag', '📷 Camera', '🗺️ City Map'],
        adventure: ['🥾 Hiking Boots', '🎒 Backpack', '🧗 Safety Gear', '🔦 Headlamp', '🥤 Water Bottle', '🍫 Energy Bars'],
        rainy: ['☔ Umbrella', '🧥 Raincoat', '🥾 Waterproof Shoes', '📱 Waterproof Pouch'],
        cold: ['🧥 Heavy Jacket', '🧤 Gloves', '🧣 Scarf', '👒 Beanie', '🧦 Wool Socks'],
        sunny: ['🧴 Sunscreen SPF 50', '🕶️ UV Sunglasses', '🧢 Sun Hat', '💧 Water Bottle', '👕 Light Cotton Clothes'],
        mixed: ['🧥 Light Jacket', '☔ Compact Umbrella', '👕 Layered Clothing', '👟 Comfortable Shoes']
    };

    const list = [
        ...baseItems.essential,
        ...baseItems.clothing,
        ...(baseItems[type] || []),
        ...(baseItems[weather] || [])
    ];

    // Remove duplicates
    const uniqueList = [...new Set(list)];

    const result = document.getElementById('aiPackingResult');
    result.innerHTML = `
        <div class="ai-plan-header">
            <h3>🎒 Your Smart Packing List</h3>
            <div class="ai-plan-meta">
                <span>📍 ${dest}</span>
                <span>📅 ${days} Days</span>
                <span>${type === 'beach' ? '🏖️ Beach' : type === 'mountain' ? '⛰️ Mountain' : type === 'city' ? '🏙️ City' : '🧗 Adventure'}</span>
                <span>${weather === 'sunny' ? '☀️ Sunny' : weather === 'rainy' ? '🌧️ Rainy' : weather === 'cold' ? '❄️ Cold' : '🌤️ Mixed'}</span>
            </div>
        </div>
        <div class="packing-list-grid">
            ${uniqueList.map(item => `
                <label class="packing-item">
                    <input type="checkbox" />
                    <span>${item}</span>
                </label>
            `).join('')}
        </div>
        <div class="ai-plan-tips">
            <h4>💡 Pro Tips</h4>
            <ul>
                <li>Pack ${days <= 3 ? 'light — one bag is enough' : 'smart — use packing cubes'}</li>
                <li>Roll clothes instead of folding to save space</li>
                <li>Keep essentials in carry-on bag</li>
                <li>Check airline baggage rules</li>
            </ul>
        </div>
    `;
}

// ---------- AI PHOTOGRAPHY GUIDE ----------
function openAIPhotography() {
    const modal = document.getElementById('aiToolModal');
    const body = document.getElementById('aiToolModalBody');
    if (!modal || !body) return;

    body.innerHTML = `
        <h2>📸 AI Photography Guide</h2>
        <p class="ai-modal-sub">Best photo spots, timing & pose ideas</p>
        <div class="ai-form">
            <div class="form-group">
                <label>Destination</label>
                <input type="text" id="aiPhotoDest" placeholder="e.g. Jaipur, Paris, Goa" />
            </div>
            <div class="form-group">
                <label>Photography Style</label>
                <select id="aiPhotoStyle">
                    <option value="instagram">📷 Instagram</option>
                    <option value="portrait">👤 Portrait</option>
                    <option value="landscape">🏞️ Landscape</option>
                    <option value="street">🚶 Street</option>
                    <option value="food">🍽️ Food</option>
                </select>
            </div>
        </div>
        <button class="ai-generate-btn" onclick="generateAIPhotoGuide()">📸 Get Photo Guide</button>
        <div id="aiPhotoResult" class="ai-result"></div>
    `;
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function generateAIPhotoGuide() {
    const dest = document.getElementById('aiPhotoDest').value.trim() || 'Your destination';
    const style = document.getElementById('aiPhotoStyle').value;

    const photoSpots = {
        instagram: [
            { name: 'Sunrise at Main Square', time: '5:30 AM - 6:30 AM', tip: 'Golden light, empty streets' },
            { name: 'Rooftop Café', time: '4:00 PM - 6:00 PM', tip: 'Aerial views, warm light' },
            { name: 'Street Art Alley', time: '10:00 AM - 12:00 PM', tip: 'Vibrant colors, no harsh shadows' },
            { name: 'Sunset Point', time: '6:00 PM - 7:30 PM', tip: 'Silhouette shots, golden hour' }
        ],
        portrait: [
            { name: 'Historical Monument', time: '7:00 AM - 9:00 AM', tip: 'Soft morning light on face' },
            { name: 'Garden with Flowers', time: '4:00 PM - 6:00 PM', tip: 'Colorful background, bokeh' },
            { name: 'Beach / Lake Side', time: '5:30 PM - 7:00 PM', tip: 'Reflective water, warm tones' }
        ],
        landscape: [
            { name: 'Mountain Viewpoint', time: '5:00 AM - 7:00 AM', tip: 'Mist, sunrise, wide angle' },
            { name: 'Valley Overlook', time: '4:00 PM - 6:30 PM', tip: 'Golden hour, layered depth' },
            { name: 'Waterfall / River', time: '10:00 AM - 2:00 PM', tip: 'Long exposure, tripod needed' }
        ],
        street: [
            { name: 'Local Market', time: '8:00 AM - 10:00 AM', tip: 'Action, candid moments' },
            { name: 'Old City Streets', time: '5:00 PM - 7:00 PM', tip: 'Golden light, shadows' },
            { name: 'Night Market', time: '8:00 PM - 10:00 PM', tip: 'Neon lights, high ISO' }
        ],
        food: [
            { name: 'Street Food Stall', time: '12:00 PM - 2:00 PM', tip: 'Overhead angle, natural light' },
            { name: 'Traditional Restaurant', time: '7:00 PM - 9:00 PM', tip: 'Warm lighting, close-up' },
            { name: 'Local Café', time: '3:00 PM - 5:00 PM', tip: 'Window light, styling' }
        ]
    };

    const spots = photoSpots[style] || photoSpots.instagram;

    const result = document.getElementById('aiPhotoResult');
    result.innerHTML = `
        <div class="ai-plan-header">
            <h3>📸 Photo Guide for ${dest}</h3>
            <div class="ai-plan-meta">
                <span>📍 ${dest}</span>
                <span>📷 ${style === 'instagram' ? 'Instagram' : style === 'portrait' ? 'Portrait' : style === 'landscape' ? 'Landscape' : style === 'street' ? 'Street' : 'Food'}</span>
            </div>
        </div>
        <div class="photo-spots-list">
            ${spots.map((spot, i) => `
                <div class="photo-spot-card">
                    <div class="photo-spot-number">${i + 1}</div>
                    <div class="photo-spot-info">
                        <h4>${spot.name}</h4>
                        <div class="photo-spot-meta">
                            <span>🕐 ${spot.time}</span>
                            <span>💡 ${spot.tip}</span>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        <div class="ai-plan-tips">
            <h4>💡 Photography Tips</h4>
            <ul>
                <li>Shoot in RAW for better editing</li>
                <li>Use grid lines for composition</li>
                <li>Golden hour (sunrise/sunset) = best light</li>
                <li>Always carry extra batteries & SD cards</li>
            </ul>
        </div>
    `;
}

// ---------- CLOSE MODAL ----------
function closeAIToolModal() {
    const modal = document.getElementById('aiToolModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// Expose globally
window.openAITripPlanner = openAITripPlanner;
window.generateAITripPlan = generateAITripPlan;
window.openAIPacking = openAIPacking;
window.generateAIPackingList = generateAIPackingList;
window.openAIPhotography = openAIPhotography;
window.generateAIPhotoGuide = generateAIPhotoGuide;
window.closeAIToolModal = closeAIToolModal;

// ============================================================
// BATCH 5: REELS FEED + INSTAGRAM FEED + 360° PREVIEW
// ============================================================

// ---------- REELS DATA ----------
const reelsData = [
    { id: 1, tourId: 1, img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=400&h=600&fit=crop&auto=format', title: 'Goa Beach Vibes', location: 'Goa, India', views: '245K', likes: '12.4K' },
    { id: 2, tourId: 2, img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&auto=format', title: 'Himalayan Sunrise', location: 'Himachal, India', views: '189K', likes: '9.8K' },
    { id: 3, tourId: 3, img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=400&h=600&fit=crop&auto=format', title: 'Pink City Magic', location: 'Jaipur, India', views: '312K', likes: '15.2K' },
    { id: 4, tourId: 4, img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=400&h=600&fit=crop&auto=format', title: 'Kerala Backwaters', location: 'Kerala, India', views: '267K', likes: '13.7K' },
    { id: 5, tourId: 19, img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&h=600&fit=crop&auto=format', title: 'Paris Nights', location: 'Paris, France', views: '523K', likes: '28.9K' },
    { id: 6, tourId: 25, img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&h=600&fit=crop&auto=format', title: 'NYC Lights', location: 'New York, USA', views: '456K', likes: '22.1K' },
    { id: 7, tourId: 29, img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&h=600&fit=crop&auto=format', title: 'Tokyo Cherry Blossoms', location: 'Tokyo, Japan', views: '678K', likes: '34.5K' },
    { id: 8, tourId: 31, img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=600&fit=crop&auto=format', title: 'Bali Paradise', location: 'Bali, Indonesia', views: '589K', likes: '29.8K' },
];

// ---------- RENDER REELS ----------
function renderReels() {
    const container = document.getElementById('reelsScroll');
    if (!container) return;
    container.innerHTML = reelsData.map(r => `
        <div class="reel-card" onclick="handleEnquiry(${r.tourId})">
            <div class="reel-video-thumb">
                <img src="${r.img}" alt="${r.title}" loading="lazy" />
                <div class="reel-play-icon">▶</div>
                <div class="reel-gradient-overlay"></div>
            </div>
            <div class="reel-info">
                <h4>${r.title}</h4>
                <p>📍 ${r.location}</p>
                <div class="reel-stats">
                    <span>👁️ ${r.views}</span>
                    <span>❤️ ${r.likes}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function scrollReels(direction) {
    const container = document.getElementById('reelsScroll');
    if (!container) return;
    container.scrollBy({ left: direction * 300, behavior: 'smooth' });
}

// ---------- INSTAGRAM FEED ----------
function renderInstaFeed() {
    const container = document.getElementById('instaFeedGrid');
    if (!container) return;

    // Default feed + user uploaded
    const userPosts = readJSON('exploreworld_insta_posts', []);

    const defaultPosts = [
        { img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300&h=300&fit=crop&auto=format', user: '@priya_travels', caption: 'Sunset at Goa 🌅', location: 'Goa, India' },
        { img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop&auto=format', user: '@rahul_adventures', caption: 'Top of the world ⛰️', location: 'Himachal' },
        { img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=300&h=300&fit=crop&auto=format', user: '@ananya_wanders', caption: 'Paris in my heart 💕', location: 'Paris' },
        { img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=300&h=300&fit=crop&auto=format', user: '@arjun_mehta', caption: 'Cherry blossom magic 🌸', location: 'Tokyo' },
        { img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&h=300&fit=crop&auto=format', user: '@sneha_patel', caption: 'Bali vibes ✨', location: 'Bali' },
        { img: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=300&h=300&fit=crop&auto=format', user: '@vikram_singh', caption: 'NYC never sleeps 🌃', location: 'New York' },
        { img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=300&h=300&fit=crop&auto=format', user: '@kavya_raj', caption: 'Pink City charm 💗', location: 'Jaipur' },
        { img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=300&h=300&fit=crop&auto=format', user: '@dev_travels', caption: 'Peaceful Kerala 🛶', location: 'Kerala' },
    ];

    const allPosts = [...userPosts, ...defaultPosts];

    container.innerHTML = allPosts.map(p => `
        <div class="insta-post-card">
            <div class="insta-post-header">
                <div class="insta-user-avatar">👤</div>
                <div>
                    <strong>${p.user}</strong>
                    <small>📍 ${p.location || 'Travel'}</small>
                </div>
            </div>
            <div class="insta-post-image">
                <img src="${p.img}" alt="${p.caption}" loading="lazy" />
            </div>
            <div class="insta-post-caption">${p.caption || ''}</div>
            <div class="insta-post-actions">
                <span>❤️</span>
                <span>💬</span>
                <span>📤</span>
            </div>
        </div>
    `).join('');
}

// ---------- INSTAGRAM UPLOAD ----------
function openInstaUpload() {
    if (!isLoggedIn) {
        showFeedback('⚠️ Please login to share photos', 'info');
        redirectToAccount('enquiry', null);
        return;
    }
    const modal = document.getElementById('instaUploadModal');
    if (modal) {
        modal.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function closeInstaUpload() {
    const modal = document.getElementById('instaUploadModal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

function submitInstaPhoto() {
    const fileInput = document.getElementById('instaPhotoInput');
    const caption = document.getElementById('instaCaptionInput').value.trim();
    const location = document.getElementById('instaLocationInput').value.trim();

    if (!fileInput.files || !fileInput.files[0]) {
        showFeedback('⚠️ Please select a photo', 'error');
        return;
    }
    if (!caption) {
        showFeedback('⚠️ Please add a caption', 'error');
        return;
    }

    const file = fileInput.files[0];
    if (file.size > 3 * 1024 * 1024) {
        showFeedback('⚠️ Photo too large. Max 3MB', 'error');
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const account = readJSON('exploreworld_account', null);
        const userName = account ? '@' + account.fullName.split(' ')[0].toLowerCase() : '@traveler';

        const posts = readJSON('exploreworld_insta_posts', []);
        posts.unshift({
            img: e.target.result,
            user: userName,
            caption: caption,
            location: location || 'Travel'
        });
        safeSetJSON('exploreworld_insta_posts', posts.slice(0, 20));

        showFeedback('✅ Photo posted to community feed!', 'success');
        closeInstaUpload();
        renderInstaFeed();

        fileInput.value = '';
        document.getElementById('instaCaptionInput').value = '';
        document.getElementById('instaLocationInput').value = '';
    };
    reader.readAsDataURL(file);
}

// ---------- 360° VIRTUAL PREVIEW ----------
const virtual360Data = {
    1: { title: '🏖️ Goa Beach 360°', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1600&h=800&fit=crop&auto=format', info: 'Drag to explore the beach' },
    19: { title: '🗼 Paris 360°', img: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1600&h=800&fit=crop&auto=format', info: 'Eiffel Tower area' },
    29: { title: '🏯 Tokyo 360°', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&h=800&fit=crop&auto=format', info: 'Shibuya crossing view' },
    31: { title: '🏝️ Bali 360°', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1600&h=800&fit=crop&auto=format', info: 'Temple & rice terraces' },
    3: { title: '🏰 Jaipur 360°', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1600&h=800&fit=crop&auto=format', info: 'Hawa Mahal area' },
    2: { title: '⛰️ Himalayan 360°', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&h=800&fit=crop&auto=format', info: 'Mountain peak view' },
};

function openVirtual360(tourId) {
    const data = virtual360Data[tourId];
    if (!data) {
        showFeedback('⚠️ 360° view not available for this tour yet', 'info');
        return;
    }

    const modal = document.getElementById('virtual360Modal');
    const title = document.getElementById('virtual360Title');
    const viewer = document.getElementById('virtual360Viewer');
    const image = document.getElementById('virtual360Image');
    const info = document.getElementById('virtual360Info');

    if (!modal || !viewer || !image) return;

    title.textContent = data.title;
    image.style.backgroundImage = `url('${data.img}')`;
    info.textContent = data.info;

    // Reset position
    let isDragging = false;
    let startX = 0;
    let scrollX = 0;
    let bgPosX = 50;

    viewer.onmousedown = (e) => {
        isDragging = true;
        startX = e.clientX;
        bgPosX = parseFloat(image.style.backgroundPositionX) || 50;
        viewer.style.cursor = 'grabbing';
    };
    viewer.onmousemove = (e) => {
        if (!isDragging) return;
        const dx = e.clientX - startX;
        const newPos = bgPosX - dx * 0.2;
        image.style.backgroundPositionX = `${newPos}%`;
    };
    viewer.onmouseup = () => {
        isDragging = false;
        viewer.style.cursor = 'grab';
    };
    viewer.onmouseleave = () => {
        isDragging = false;
        viewer.style.cursor = 'grab';
    };

    // Touch support
    viewer.ontouchstart = (e) => {
        isDragging = true;
        startX = e.touches[0].clientX;
        bgPosX = parseFloat(image.style.backgroundPositionX) || 50;
    };
    viewer.ontouchmove = (e) => {
        if (!isDragging) return;
        const dx = e.touches[0].clientX - startX;
        const newPos = bgPosX - dx * 0.3;
        image.style.backgroundPositionX = `${newPos}%`;
    };
    viewer.ontouchend = () => {
        isDragging = false;
    };

    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeVirtual360() {
    const modal = document.getElementById('virtual360Modal');
    if (modal) {
        modal.classList.remove('open');
        document.body.style.overflow = '';
    }
}

// ---------- ADD 360° BUTTON TO TOUR POPUP ----------
function add360ButtonToPopup() {
    const popupInfo = document.querySelector('.popup-info');
    if (!popupInfo) return;
    // Check if button already exists
    if (document.getElementById('view360Btn')) return;

    const btn = document.createElement('button');
    btn.id = 'view360Btn';
    btn.className = 'view-360-btn';
    btn.textContent = '🌍 View 360° Virtual Tour';
    btn.onclick = function() {
        openVirtual360(popupTourId);
    };

    // Insert before popup-comment
    const comment = popupInfo.querySelector('.popup-comment');
    if (comment) {
        popupInfo.insertBefore(btn, comment);
    } else {
        popupInfo.appendChild(btn);
    }
}

// Expose globally
window.renderReels = renderReels;
window.scrollReels = scrollReels;
window.renderInstaFeed = renderInstaFeed;
window.openInstaUpload = openInstaUpload;
window.closeInstaUpload = closeInstaUpload;
window.submitInstaPhoto = submitInstaPhoto;
window.openVirtual360 = openVirtual360;
window.closeVirtual360 = closeVirtual360;
window.add360ButtonToPopup = add360ButtonToPopup;

// ============================================================
// BATCH 6: WORLD MAP + SURPRISE ME + QUIZ + FLASH DEALS
// ============================================================

// ---------- INTERACTIVE WORLD MAP ----------
function filterByRegion(region) {
    // Navigate to tours section
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    const toursSection = document.getElementById('tours');
    if (toursSection) toursSection.classList.remove('hidden');

    // Update nav
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.nav-link[data-section="tours"]').forEach(l => l.classList.add('active'));

    // Show only tours from that region
    const grid = document.getElementById('tourGrid');
    if (!grid) return;

    const filtered = tours.filter(t => t.region === region);
    if (filtered.length === 0) {
        grid.innerHTML = `<div style="text-align:center;color:var(--text-light);padding:2rem;width:100%;">No tours in this region yet.</div>`;
    } else {
        grid.innerHTML = filtered.map(t => buildTourCard(t)).join('');
        attachTourCardEvents(grid);
    }

    // Reset category
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.toggle('active', b.dataset.category === 'all'));
    currentCategory = 'all';
    updateCategoryTheme('all');

    showFeedback(`🌍 Showing ${filtered.length} tours from ${getRegionLabel(region)}`, 'success');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- SURPRISE ME ----------
let surpriseRolling = false;
function surpriseMe() {
    if (surpriseRolling) return;
    surpriseRolling = true;
    const resultDiv = document.getElementById('surpriseResult');
    if (!resultDiv) return;

    // Show rolling animation
    resultDiv.innerHTML = '<div class="surprise-rolling">🎲 Rolling...</div>';

    let rollCount = 0;
    const rollInterval = setInterval(() => {
        const randomTour = tours[Math.floor(Math.random() * tours.length)];
        resultDiv.innerHTML = `<div class="surprise-rolling">🎯 ${randomTour.name}...</div>`;
        rollCount++;
        if (rollCount >= 10) {
            clearInterval(rollInterval);
            // Final result
            const finalTour = tours[Math.floor(Math.random() * tours.length)];
            resultDiv.innerHTML = `
                <div class="surprise-final">
                    <img src="${finalTour.img}" alt="${finalTour.name}" />
                    <h4>🎉 ${finalTour.name}</h4>
                    <p>₹${finalTour.price.toLocaleString('en-IN')} · ${finalTour.duration}</p>
                    <button class="surprise-view-btn" onclick="handleEnquiry(${finalTour.id})">View This Tour →</button>
                </div>
            `;
            surpriseRolling = false;
        }
    }, 100);
}

// ---------- FLASH DEALS COUNTDOWN ----------
function startFlashCountdown() {
    const hoursEl = document.getElementById('cdHours');
    const minutesEl = document.getElementById('cdMinutes');
    const secondsEl = document.getElementById('cdSeconds');
    if (!hoursEl || !minutesEl || !secondsEl) return;

    // Deal ends in 6 hours from now (or reset daily)
    const now = new Date();
    const endTime = new Date();
    endTime.setHours(23, 59, 59, 0); // End of today

    function update() {
        const diff = endTime - new Date();
        if (diff <= 0) {
            hoursEl.textContent = '00';
            minutesEl.textContent = '00';
            secondsEl.textContent = '00';
            return;
        }
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        hoursEl.textContent = String(hours).padStart(2, '0');
        minutesEl.textContent = String(minutes).padStart(2, '0');
        secondsEl.textContent = String(seconds).padStart(2, '0');
    }
    update();
    setInterval(update, 1000);
}

function scrollToTours() {
    document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
    document.getElementById('tours').classList.remove('hidden');
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.nav-link[data-section="tours"]').forEach(l => l.classList.add('active'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ---------- TRAVEL PERSONALITY QUIZ ----------
const quizQuestions = [
    {
        q: 'What is your ideal vacation vibe?',
        options: [
            { text: '🏖️ Relaxing on a beach', type: 'beach' },
            { text: '⛰️ Trekking in mountains', type: 'mountain' },
            { text: '🏙️ Exploring a new city', type: 'city' },
            { text: '🏛️ Immersing in culture', type: 'cultural' },
            { text: '🧗 Adventure sports', type: 'adventure' }
        ]
    },
    {
        q: 'How do you like to spend your evenings?',
        options: [
            { text: '🌅 Watching sunset', type: 'beach' },
            { text: '🔥 Bonfire in the wild', type: 'mountain' },
            { text: '🍽️ Trying local food', type: 'city' },
            { text: '🎭 Cultural show', type: 'cultural' },
            { text: '🌙 Stargazing', type: 'adventure' }
        ]
    },
    {
        q: 'What is your travel budget usually?',
        options: [
            { text: '💰 Budget-friendly', type: 'beach' },
            { text: '💎 Premium/luxury', type: 'city' },
            { text: '🎒 Moderate', type: 'mountain' },
            { text: '💸 Flexible for experiences', type: 'cultural' },
            { text: '⚡ Worth every rupee', type: 'adventure' }
        ]
    },
    {
        q: 'Who do you usually travel with?',
        options: [
            { text: '💑 Partner', type: 'beach' },
            { text: '👨‍👩‍👧 Family', type: 'cultural' },
            { text: '🧑 Solo', type: 'mountain' },
            { text: '👥 Friends group', type: 'adventure' },
            { text: '🏢 Colleagues', type: 'city' }
        ]
    },
    {
        q: 'What matters most in a trip?',
        options: [
            { text: '🌞 Weather & relaxation', type: 'beach' },
            { text: '📸 Photo opportunities', type: 'cultural' },
            { text: '🍜 Food & nightlife', type: 'city' },
            { text: '💪 Physical challenge', type: 'adventure' },
            { text: '🌲 Nature & peace', type: 'mountain' }
        ]
    }
];

let currentQuizStep = 0;
let quizAnswers = [];

function renderQuiz() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    if (currentQuizStep === 0 && quizAnswers.length === 0) {
        // Start screen
        container.innerHTML = `
            <div class="quiz-start">
                <div class="quiz-start-icon">🎯</div>
                <h3>Ready to discover your travel personality?</h3>
                <p>Answer 5 quick questions and get personalized tour recommendations</p>
                <button class="quiz-start-btn" onclick="startQuiz()">Start Quiz →</button>
            </div>
        `;
    } else if (currentQuizStep < quizQuestions.length) {
        // Question screen
        const q = quizQuestions[currentQuizStep];
        container.innerHTML = `
            <div class="quiz-progress">
                <div class="quiz-progress-bar" style="width: ${(currentQuizStep / quizQuestions.length) * 100}%"></div>
                <span>Question ${currentQuizStep + 1} of ${quizQuestions.length}</span>
            </div>
            <div class="quiz-question">
                <h3>${q.q}</h3>
                <div class="quiz-options">
                    ${q.options.map((opt, i) => `
                        <button class="quiz-option" onclick="selectQuizOption('${opt.type}', ${i})">
                            ${opt.text}
                        </button>
                    `).join('')}
                </div>
            </div>
        `;
    } else {
        // Result screen
        renderQuizResult();
    }
}

function startQuiz() {
    currentQuizStep = 0;
    quizAnswers = [];
    renderQuiz();
}

function selectQuizOption(type, index) {
    quizAnswers.push(type);
    currentQuizStep++;
    renderQuiz();
}

function renderQuizResult() {
    const container = document.getElementById('quizContainer');
    if (!container) return;

    // Calculate most frequent type
    const counts = {};
    quizAnswers.forEach(a => counts[a] = (counts[a] || 0) + 1);
    const topType = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];

    const typeInfo = {
        beach: { icon: '🏖️', title: 'Beach Lover', desc: 'You love sun, sand & sea! Relaxing vibes are your thing.', color: '#f59e0b' },
        mountain: { icon: '⛰️', title: 'Mountain Wanderer', desc: 'Nature, peace & fresh air — you love the mountains.', color: '#059669' },
        city: { icon: '🏙️', title: 'City Explorer', desc: 'You thrive in busy streets, cafés and urban adventures.', color: '#3b82f6' },
        cultural: { icon: '🏛️', title: 'Culture Enthusiast', desc: 'History, art & traditions fascinate you.', color: '#8b5cf6' },
        adventure: { icon: '🧗', title: 'Adrenaline Junkie', desc: 'You love challenges and thrilling experiences!', color: '#ef4444' }
    };

    const info = typeInfo[topType] || typeInfo.beach;

    // Get top 3 tours from that category
    const recommendedTours = tours.filter(t => t.category === topType).slice(0, 3);

    container.innerHTML = `
        <div class="quiz-result">
            <div class="quiz-result-icon">${info.icon}</div>
            <h3>You are a <span style="color: ${info.color}">${info.title}</span></h3>
            <p>${info.desc}</p>
            <div class="quiz-recommendations">
                <h4>🎁 Recommended Tours For You</h4>
                <div class="quiz-rec-grid">
                    ${recommendedTours.map(t => `
                        <div class="quiz-rec-card" onclick="handleEnquiry(${t.id})">
                            <img src="${t.img}" alt="${t.name}" />
                            <h5>${t.name}</h5>
                            <p>₹${t.price.toLocaleString('en-IN')}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
            <button class="quiz-retake-btn" onclick="startQuiz()">🔄 Retake Quiz</button>
        </div>
    `;
}

// Expose globally
window.filterByRegion = filterByRegion;
window.surpriseMe = surpriseMe;
window.scrollToTours = scrollToTours;
window.startQuiz = startQuiz;
window.selectQuizOption = selectQuizOption;

// ============================================================
// BATCH 7: PWA INSTALL PROMPT
// ============================================================

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Show install banner
    const banner = document.getElementById('pwaInstallBanner');
    if (banner && !localStorage.getItem('exploreworld_pwa_dismissed')) {
        setTimeout(() => {
            banner.style.display = 'block';
            banner.classList.add('show');
        }, 5000); // Show after 5 seconds
    }
});

function installPWA() {
    if (!deferredPrompt) {
        showFeedback('📱 PWA already installed or not supported', 'info');
        return;
    }
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(choiceResult => {
        if (choiceResult.outcome === 'accepted') {
            showFeedback('✅ App installed successfully!', 'success');
            const banner = document.getElementById('pwaInstallBanner');
            if (banner) banner.style.display = 'none';
        } else {
            showFeedback('Installation cancelled', 'info');
        }
        deferredPrompt = null;
    });
}

function dismissPWA() {
    const banner = document.getElementById('pwaInstallBanner');
    if (banner) {
        banner.style.display = 'none';
        banner.classList.remove('show');
    }
    localStorage.setItem('exploreworld_pwa_dismissed', 'true');
}

// Expose globally
window.installPWA = installPWA;
window.dismissPWA = dismissPWA;

// Register Service Worker (backup, in case HTML script didn't run)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(reg => console.log('✅ Service Worker registered'))
            .catch(err => console.log('⚠️ Service Worker registration failed:', err));
    });
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('🌿 Explore World - Forest Emerald');
    hideLoadingScreen();
    setupPasswordToggle();
    checkAccount();
            renderUserFlights();
        renderUserHotels();
        renderUserDashboard();
        updateProfileBadges();
    initSlider();
    setupNavigation();
    renderTours('all', 'all', 'all', 'default');
    updateCategoryTheme('all');
    setupCategoryTabs();
    setupFilters();
    setupOfferTabs();
    setupProfileTabs();
    setupFAQ();
    setupSearch();
    setupHeroSearch();
    setupCategoryExplorer();
    renderTrending();
    setupRegionTabs();
    renderInternational('europe');
    setupReviewsCarousel();
    setupChatbot();
    setupWeather();
    setupCalendar();
    setupLanguage();
    setupDownToTop();
    setup3DTilt();
    setupThemeToggle();
        renderReels();
    renderInstaFeed();
        renderQuiz();
    startFlashCountdown();
    setupFlightBooking();
    setupHotelBooking();
    updateProfileBadges();
    updateWishlist();
    renderWishlist();
    console.log(`📦 ${tours.length} tours | ❤️ ${wishlist.length} wishlist | 🔐 ${isLoggedIn ? 'Logged in' : 'Guest'}`);
});

// ============================================================
// GLOBAL
// ============================================================
window.handleBookNow = handleBookNow;
window.handleWishlist = handleWishlist;
window.handleEnquiry = handleEnquiry;
window.openPopup = openPopup;
window.removeFromWishlist = removeFromWishlist;
window.deleteAddress = deleteAddress;
window.goToBookingStep = goToBookingStep;
window.selectPaymentMethod = selectPaymentMethod;
window.confirmBooking = confirmBooking;
window.closeBookingSuccess = closeBookingSuccess;
window.closeBookingSuccessAndGoProfile = closeBookingSuccessAndGoProfile;
window.downloadInvoice = downloadInvoice;