import React, { useState, useEffect } from 'react';
import yashLogo from './assets/yash-logo.jpg';
import malaysiaReview1 from './assets/reviews/malaysia-genting-temple.jpg';
import malaysiaReview2 from './assets/reviews/malaysia-batu-caves.jpg';
import malaysiaReview3 from './assets/reviews/malaysia-sunway-lagoon.jpg';
import malaysiaReview4 from './assets/reviews/malaysia-petronas-twin-towers.jpg';
import singaporeReview1 from './assets/reviews/singapore-merlion-park.jpg';
import singaporeReview2 from './assets/reviews/singapore-universal-studios.jpg';
import singaporeReview3 from './assets/reviews/singapore-gardens-by-the-bay.jpg';
import singaporeReview4 from './assets/reviews/singapore-jewel-changi.jpg';
import singaporeReview5 from './assets/reviews/singapore-heritage-temple.jpg';
import {
  Plane,
  Globe,
  ShieldCheck,
  FileCheck,
  Compass,
  Sparkles,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Users,
  Hotel,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Star,
  Clock,
  Navigation,
  Instagram,
  Facebook,
  Send,
  Menu,
  X,
  Sliders,
  Award,
  HeartHandshake,
  Luggage,
  BadgeCheck,
  FileText,
  Headphones,
  Building2,
  Mail,
  MessageSquare,
  Quote,
  Plus,
  Trash2,
  Edit3,
  RotateCcw,
  Check,
  CalendarCheck,
  Filter,
  ThumbsUp,
  Camera
} from 'lucide-react';

// --- HIGH-RESOLUTION OFFICIAL WHATSAPP VECTOR ICON ---
const WhatsAppIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`shrink-0 ${className}`}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// --- OFFICIAL GOOGLE REVIEWS VECTOR ICON ---
const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg
    viewBox="0 0 24 24"
    className={`shrink-0 ${className}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill="#4285F4"
      d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
    />
    <path
      fill="#34A853"
      d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
    />
    <path
      fill="#FBBC05"
      d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 9.99 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
    />
    <path
      fill="#EA4335"
      d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
    />
  </svg>
);

const GOOGLE_REVIEWS_URL = "https://www.google.com/maps/search/?api=1&query=Yash+Holidays+Pvt+Ltd+276%2FE+Dehiwala+Road+Boralesgamuwa";

// --- OFFICIAL YASH HOLIDAYS LOGO (EXACT UPLOADED IMAGE) ---
const YashLogo = ({ className = "h-12", lightMode = true }) => (
  <div className={`inline-flex items-center gap-2.5 select-none shrink-0 whitespace-nowrap ${className}`}>
    <div className="relative flex items-center justify-center p-1 rounded-xl bg-white shadow-md shadow-sky-500/20 border border-white/40 overflow-hidden shrink-0">
      <img
        src={yashLogo}
        alt="Yash Holidays Pvt Ltd"
        className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-lg shrink-0"
      />
    </div>
    <div className="flex flex-col shrink-0">
      <div className="flex items-center gap-1.5 leading-none whitespace-nowrap">
        <span className="text-lg sm:text-xl xl:text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">YASH</span>
        <span className="text-lg sm:text-xl xl:text-2xl font-light tracking-widest text-sky-400">HOLIDAYS</span>
      </div>
      <div className="flex items-center gap-1.5 mt-1 whitespace-nowrap">
        <span className="h-[1.5px] w-5 sm:w-6 bg-gradient-to-r from-sky-400 to-transparent"></span>
        <Plane className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-sky-400 rotate-45 shrink-0" />
        <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-slate-300 font-bold">Pvt Ltd</span>
      </div>
    </div>
  </div>
);

// --- EXACT 3-NODE ITINERARY STAGES MATCHING REFERENCE IMAGE ---
const DESTINATION_STAGES = {
  bali: {
    durationDays: '7',
    countryShort: 'Bali',
    hubType: 'regions',
    highlightCities: 'Seminyak, Ubud, and Nusa Penida',
    stages: [
      {
        days: 'Days 1–2',
        place: 'Seminyak & Kuta',
        img1: 'https://images.unsplash.com/photo-1559628233-eb1b1a45564b?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1539367628448-4bc5c9d171c8?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 3–4',
        place: 'Ubud & Kintamani',
        img1: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 5–7',
        place: 'Nusa Penida',
        img1: 'https://images.unsplash.com/photo-1570789210967-2cac24afeb00?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  thailand: {
    durationDays: '6',
    countryShort: 'Thailand',
    hubType: 'cities',
    highlightCities: 'Bangkok, Pattaya, and Coral Island',
    stages: [
      {
        days: 'Days 1–2',
        place: 'Pattaya',
        img1: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 3–4',
        place: 'Bangkok',
        img1: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 5–6',
        place: 'Coral Island',
        img1: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  malaysia: {
    durationDays: '5',
    countryShort: 'Malaysia',
    hubType: 'hubs',
    highlightCities: 'Kuala Lumpur, Genting, and Putrajaya',
    stages: [
      {
        days: 'Days 1–2',
        place: 'Kuala Lumpur',
        img1: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1601933973783-43cf8a7d4c5f?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 3–4',
        place: 'Genting Highlands',
        img1: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1577948000111-9c970dfe3743?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Day 5',
        place: 'Putrajaya & Merdeka Square',
        img1: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  singapore: {
    durationDays: '5',
    countryShort: 'Singapore',
    hubType: 'destinations',
    highlightCities: 'Marina Bay, Universal Studios, and Sentosa',
    stages: [
      {
        days: 'Days 1–2',
        place: 'Marina Bay',
        img1: 'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Day 3',
        place: 'Universal Studios',
        img1: 'https://images.unsplash.com/photo-1490077476659-095159692ab5?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1508963493744-76fce69379c0?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 4–5',
        place: 'Sentosa & Changi',
        img1: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  'singapore-malaysia': {
    durationDays: '7',
    countryShort: 'Singapore & Malaysia',
    hubType: 'cities',
    highlightCities: 'Kuala Lumpur, Genting, and Singapore',
    stages: [
      {
        days: 'Days 1–3',
        place: 'Kuala Lumpur',
        img1: 'https://images.unsplash.com/photo-1583207804784-198ba4353030?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 4–5',
        place: 'Genting to Singapore',
        img1: 'https://images.unsplash.com/photo-1549144511-f099e773c147?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1543832923-44667a44c804?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 6–7',
        place: 'Universal & Departure',
        img1: 'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1516496636080-14fb876e029d?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  vietnam: {
    durationDays: '6',
    countryShort: 'Vietnam',
    hubType: 'cities',
    highlightCities: 'Hanoi, Ha Long Bay, and Da Nang',
    stages: [
      {
        days: 'Days 1–2',
        place: 'Hanoi & Ninh Binh',
        img1: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 3–4',
        place: 'Ha Long Bay Cruise',
        img1: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1531737212413-667205e1cda7?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 5–6',
        place: 'Da Nang & Hoi An',
        img1: 'https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1557750255-c76072a7aad1?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  maldives: {
    durationDays: '5',
    countryShort: 'the Maldives',
    hubType: 'atolls',
    highlightCities: 'Male, Private Island Atolls, and Coral Reefs',
    stages: [
      {
        days: 'Days 1–2',
        place: 'Overwater Villa & Lagoon',
        img1: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 3–4',
        place: 'Coral Reefs & Safari',
        img1: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Day 5',
        place: 'Island Relaxation & Sunset',
        img1: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  india: {
    durationDays: '6',
    countryShort: 'India',
    hubType: 'cities',
    highlightCities: 'Delhi, Agra, and Jaipur',
    stages: [
      {
        days: 'Days 1–2',
        place: 'Delhi',
        img1: 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 3–4',
        place: 'Agra',
        img1: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 5–6',
        place: 'Jaipur',
        img1: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=600&q=80'
      }
    ]
  },
  azerbaijan: {
    durationDays: '5',
    countryShort: 'Azerbaijan',
    hubType: 'cities',
    highlightCities: 'Baku, Gabala, and Shahdag',
    stages: [
      {
        days: 'Days 1–2',
        place: 'Baku & Flame Towers',
        img1: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1517824806704-9040b037703b?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 3–4',
        place: 'Old City & Gabala Lake',
        img1: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Day 5',
        place: 'Shahdag Mountain Resort',
        img1: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80',
        img2: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80'
      }
    ]
  }
};

// --- RICH DESTINATION DATA FOR ALL 8 CORE MARKETS ---
const DESTINATIONS = [
  {
    id: 'bali',
    name: 'BALI',
    country: 'Bali, Indonesia',
    tagline: 'Island of Gods, Tropical Sanctuaries & Cliffside Sunsets',
    duration: '7 Days / 6 Nights',
    priceFrom: 'LKR 195,000',
    flightRoute: 'Colombo (CMB) — Denpasar (DPS)',
    heroBg: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1920&q=80',
    introText: "We've planned a simple and convenient 6-day itinerary for your escape to Bali. You'll experience three breathtaking regions: Ubud's lush rainforests, Nusa Penida's dramatic turquoise cliffs, and Seminyak's sunset beach clubs.",
    highlights: [
      { label: '3 regions in Bali', sub: 'Ubud • Penida • Seminyak', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80' },
      { label: '6 days', sub: 'Curated island pace', img: 'https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=600&q=80' },
      { label: 'iconic temples & nature', sub: 'Lempuyang Gates of Heaven', img: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&w=600&q=80' },
      { label: 'island dining', sub: 'Jimbaran candlelit seafood dinner', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=600&q=80' },
      { label: 'enjoy the vibe', sub: 'Kelingking T-Rex Cliff Penida', img: 'https://images.unsplash.com/photo-1573790387438-4da905039392?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'thailand',
    name: 'THAILAND',
    country: 'Thailand',
    tagline: 'Golden Temples, Coral Islands & Vibrant Night Markets',
    duration: '5 Days / 4 Nights',
    priceFrom: 'LKR 168,000',
    flightRoute: 'Colombo (CMB) — Bangkok (BKK)',
    heroBg: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1920&q=80',
    introText: "We've planned a seamless 6-day holiday across Thailand's best highlights. You'll explore three unforgettable hubs: dazzling Bangkok, coastal Pattaya & Coral Island, or the turquoise limestone bays of Phuket & Krabi.",
    highlights: [
      { label: '3 cities in Thailand', sub: 'Bangkok • Pattaya • Phuket', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=600&q=80' },
      { label: '6 days', sub: 'Island & city combo', img: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=600&q=80' },
      { label: 'private island tours', sub: 'Phi Phi Maya Bay speedboat', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80' },
      { label: 'street food & cruises', sub: 'Chao Phraya dinner cruise & food', img: 'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=600&q=80' },
      { label: 'enjoy the vibe', sub: 'Sanctuary of Truth Pattaya', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'malaysia',
    name: 'MALAYSIA',
    country: 'Malaysia',
    tagline: 'Futuristic Twin Towers, Cool Highlands & Tropical Islands',
    duration: '5 Days / 4 Nights',
    priceFrom: 'LKR 159,000',
    flightRoute: 'Colombo (CMB) — Kuala Lumpur (KUL)',
    heroBg: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1920&q=80',
    introText: "We've organized an effortless 5-day Malaysian getaway. Experience the dazzling skyline of Kuala Lumpur, the misty mountain resorts of Genting Highlands, and the colorful heritage of Batu Caves & Putrajaya.",
    highlights: [
      { label: '3 hubs in Malaysia', sub: 'KL • Genting • Sunway', img: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80' },
      { label: '5 days', sub: 'Family & couple favorite', img: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?auto=format&fit=crop&w=600&q=80' },
      { label: 'iconic landmarks', sub: 'Petronas Towers & KLCC Park', img: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=600&q=80' },
      { label: 'cable car & parks', sub: 'Awana SkyWay & Theme Park', img: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=600&q=80' },
      { label: 'Batu Caves', sub: 'Murugan Temple & rainbow stairs', img: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'singapore',
    name: 'SINGAPORE',
    country: 'Singapore',
    tagline: 'Supertree Wonders, World-Class Attractions & Marina Glamour',
    duration: '5 Days / 4 Nights',
    priceFrom: 'LKR 245,000',
    flightRoute: 'Colombo (CMB) — Singapore (SIN)',
    heroBg: 'https://images.unsplash.com/photo-1506059612708-99d6c258160e?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1920&q=80',
    introText: "Experience the Lion City with zero stress. Our curated Singapore itinerary covers Marina Bay Sands, Gardens by the Bay, Sentosa Island, and Universal Studios in one sleek package.",
    highlights: [
      { label: '3 iconic precincts', sub: 'Marina Bay • Sentosa • Orchard', img: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=600&q=80' },
      { label: '5 days', sub: 'Action-packed luxury', img: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=600&q=80' },
      { label: 'world-class wonders', sub: 'Supertree Grove & Cloud Forest', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=600&q=80' },
      { label: 'theme park thrills', sub: 'Universal Studios Sentosa', img: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=600&q=80' },
      { label: 'enjoy the vibe', sub: 'Jewel Changi Rain Vortex', img: 'https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'vietnam',
    name: 'VIETNAM',
    country: 'Vietnam',
    tagline: 'Emerald Karst Bays, Golden Bridges & Lantern Towns',
    duration: '7 Days / 6 Nights',
    priceFrom: 'LKR 215,000',
    flightRoute: 'Colombo (CMB) — Hanoi (HAN) / Da Nang',
    heroBg: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=1920&q=80',
    introText: "Discover the magic of Vietnam across three iconic regions: historic Hanoi, an overnight luxury cruise on Ha Long Bay, and Central Vietnam's Golden Bridge at Ba Na Hills & Hoi An.",
    highlights: [
      { label: '3 gems in Vietnam', sub: 'Hanoi • Ha Long • Da Nang', img: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=600&q=80' },
      { label: '6 days', sub: 'Cruise & heritage tour', img: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=600&q=80' },
      { label: 'breathtaking views', sub: 'Golden Hand Bridge Ba Na Hills', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=600&q=80' },
      { label: 'overnight bay cruise', sub: 'Ha Long luxury deck cruise', img: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=600&q=80' },
      { label: 'enjoy the vibe', sub: 'Hoi An lantern boat on canal', img: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'maldives',
    name: 'MALDIVES',
    country: 'Maldives',
    tagline: 'Overwater Villas, Crystal Lagoons & Private Atoll Luxury',
    duration: '4 Days / 3 Nights',
    priceFrom: 'LKR 185,000',
    flightRoute: 'Colombo (CMB) — Malé (MLE) (1 Hr Direct)',
    heroBg: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80',
    introText: "Just a 60-minute flight from Colombo! We arrange seamless speedboat or seaplane transfers to handpicked Maldivian island resorts with beach and overwater villa options.",
    highlights: [
      { label: 'private island resorts', sub: 'North & South Malé Atolls', img: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=600&q=80' },
      { label: '4 days', sub: 'Pure tropical bliss', img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=600&q=80' },
      { label: 'luxury water villas', sub: 'Overwater decks & plunge pool', img: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=600&q=80' },
      { label: 'all-inclusive dining', sub: 'Ocean dining & candlelit sunset', img: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=600&q=80' },
      { label: 'enjoy the vibe', sub: 'Reef sharks, rays & coral diving', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'india',
    name: 'INDIA',
    country: 'India',
    tagline: 'Royal Palaces, Taj Mahal Wonders, Kashmir Valleys & Spiritual Trails',
    duration: '6 Days / 5 Nights',
    priceFrom: 'LKR 149,000',
    flightRoute: 'Colombo (CMB) — Delhi (DEL) / Kochi / Chennai',
    heroBg: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1920&q=80',
    introText: "We've crafted rich itineraries across India—from the iconic Golden Triangle (Delhi, Agra & Jaipur) to snowy Kashmir, serene Kerala backwaters, and sacred Buddhist & Hindu pilgrimage tours.",
    highlights: [
      { label: '3 royal cities', sub: 'Delhi • Agra • Jaipur', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=600&q=80' },
      { label: '6 days', sub: 'Heritage & culture', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=600&q=80' },
      { label: 'timeless wonders', sub: 'Hawa Mahal Palace of Winds', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=600&q=80' },
      { label: 'authentic cuisine', sub: 'Royal Mughlai & street chai', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=600&q=80' },
      { label: 'enjoy the vibe', sub: 'Amer Fort & Jaipur palaces', img: 'https://images.unsplash.com/photo-1584448141569-69f342da535c?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'azerbaijan',
    name: 'AZERBAIJAN',
    country: 'Azerbaijan',
    tagline: 'Land of Fire, European-Style Boulevards & Caucasus Snow Peaks',
    duration: '6 Days / 5 Nights',
    priceFrom: 'LKR 255,000',
    flightRoute: 'Colombo (CMB) — Baku (GYD)',
    heroBg: 'https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=1920&q=80',
    introText: "Experience where East meets Europe! Our 6-day Azerbaijan tour takes you through ultra-modern Baku, the ancient Flame Temples of Absheron, and the alpine peaks of Gabala & Shahdag.",
    highlights: [
      { label: '3 regions explored', sub: 'Baku • Gabala • Shahdag', img: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?auto=format&fit=crop&w=600&q=80' },
      { label: '6 days', sub: 'Euro-Asian luxury', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=600&q=80' },
      { label: 'architectural icons', sub: 'Heydar Aliyev Center & Towers', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80' },
      { label: 'mountain cable cars', sub: 'Shahdag & Tufandag snow resort', img: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?auto=format&fit=crop&w=600&q=80' },
      { label: 'enjoy the vibe', sub: 'Old City Maiden Tower & Caspian', img: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

const CORE_SERVICES = [
  {
    id: 'airtickets',
    title: 'Worldwide Air Tickets',
    subtitle: 'Global Airline Ticketing',
    desc: 'Competitive airfares on SriLankan Airlines, Emirates, Qatar Airways, Singapore Airlines, Malaysia Airlines, Thai Airways, IndiGo & more with instant issuance.',
    icon: Plane,
    badge: 'Best Fare Guarantee'
  },
  {
    id: 'visa',
    title: 'Visit Visa Assistance',
    subtitle: 'Embassy & e-Visa Specialists',
    desc: 'Expert Visit Visa documentation for Canada, New Zealand, UK, USA, Japan, China, Malaysia, Thailand, Vietnam, and India with cover letters & appointment booking.',
    icon: FileCheck,
    badge: '10+ Key Visa Markets'
  },
  {
    id: 'outbound',
    title: 'Outbound Tour Packages',
    subtitle: '8 Signature Markets',
    desc: 'All-inclusive group and private tours to Thailand, Malaysia, Singapore, Vietnam, Bali, Maldives, India, and Azerbaijan.',
    icon: Globe,
    badge: 'Most Popular'
  },
  {
    id: 'custom',
    title: 'Customized Tour Packages',
    subtitle: '100% Tailor-Made For You',
    desc: 'Your dates, your pace, your budget. Whether it is a honeymoon, family holiday, or corporate incentive tour, we build it around you.',
    icon: Sliders,
    badge: 'Flexible Itineraries'
  },
  {
    id: 'insurance',
    title: 'Travel Insurance',
    subtitle: 'Complete Peace of Mind',
    desc: 'Comprehensive international medical coverage, flight delay protection, and baggage security for worry-free global travel.',
    icon: ShieldCheck,
    badge: 'Instant Policy'
  }
];

// --- EXPANDED 10-COUNTRY VISIT VISA DATA (CANADA, NZ, UK, US, MALAYSIA, THAILAND, VIETNAM, INDIA, CHINA, JAPAN) ---
const VISA_COUNTRIES = [
  {
    id: 'canada',
    country: 'Canada',
    flag: '🇨🇦',
    visaType: 'Visitor Visa (Temporary Resident Visa - Subclass TRV)',
    processingTime: '4 – 8 Weeks',
    stayValidity: 'Up to 6 Months Stay (Multi-Entry up to Passport Validity)',
    category: 'Embassy / VFS Biometrics',
    docs: [
      'Valid Passport (Minimum 6 months validity + old passports showing travel history)',
      'Digital Visa Photograph (35mm x 45mm as per IRCC specifications)',
      '6-Month Updated Personal Bank Statements, FD Certificates & Asset Valuations',
      'Employment Confirmation Letter, Approved Leave Letter & 3–6 Months Pay Slips (or BR/Tax Returns)',
      'Detailed Purpose of Visit / Cover Letter, Family Information Form (IMM 5645) & Invitation Letter (if visiting family)',
      'Confirmed Flight Itinerary & Hotel Reservations (Prepared by Yash Holidays Visa Desk)'
    ]
  },
  {
    id: 'newzealand',
    country: 'New Zealand',
    flag: '🇳🇿',
    visaType: 'Visitor Visa (Online Tourist / Family Visit File Submission)',
    processingTime: '3 – 5 Weeks',
    stayValidity: 'Up to 3 or 6 Months Stay (Single / Multiple Entry)',
    category: 'Online Immigration Filing',
    docs: [
      'Clear High-Resolution Scan of Valid Passport Bio Page & Previous Visas',
      'Digital Studio Passport-Size Photograph (INZ compliant white background)',
      '6-Month Bank Statements, Fixed Deposits & Financial Sponsorship Proof',
      'Employer No-Objection Letter (NOC), Salary Slips or Business Registration Docs',
      'Day-by-Day New Zealand Holiday Itinerary & Cover Letter (Prepared by Yash Holidays)',
      'Return Air Ticket Reservation & Accommodation Booking Vouchers'
    ]
  },
  {
    id: 'uk',
    country: 'United Kingdom (UK)',
    flag: '🇬🇧',
    visaType: 'Standard Visitor Visa (6 Months / 2, 5, 10-Year Long Term)',
    processingTime: '3 – 4 Weeks',
    stayValidity: 'Up to 180 Days Per Visit (Multiple Entry)',
    category: 'GOV.UK & VFS Biometrics',
    docs: [
      'Original Valid Passport (with at least 2 blank pages) + Previous Passports',
      'Completed Online UKVI Application & VFS Colombo Biometrics Appointment Confirmation',
      '6-Month Personal Bank Statements with consistent income reflection & Financial Ties',
      'Employment Verification Letter, 6-Month Pay Slips, EPF/ETF or Business Registration & Tax Docs',
      'Professional Cover Letter, Sponsor Documents (if applicable) & Property/Family Ties in Sri Lanka',
      'Flight Reservation & UK Accommodation Itinerary (Handled by Yash Holidays)'
    ]
  },
  {
    id: 'us',
    country: 'United States (USA)',
    flag: '🇺🇸',
    visaType: 'B1/B2 Tourist & Business Visit Visa',
    processingTime: 'DS-160 Filing + US Embassy Interview Slot',
    stayValidity: 'Up to 5 Years Multiple Entry (180 Days per stay)',
    category: 'US Embassy Colombo Interview',
    docs: [
      'Valid Passport (Minimum 6 months validity beyond intended period of stay)',
      'DS-160 Confirmation Page & US Embassy Colombo Interview Appointment Letter',
      'US Visa Specification Photograph (2 x 2 inches / 51mm x 51mm, white background)',
      '6-Month Bank Statements, Fixed Deposits, Property Deeds & Strong Ties to Sri Lanka',
      'Employment Letter, Pay Slips or Business Registration & One-on-One Mock Interview Prep by Yash Holidays',
      'Planned US Travel Itinerary & Sponsor/Invitation Details (if visiting relatives)'
    ]
  },
  {
    id: 'malaysia',
    country: 'Malaysia',
    flag: '🇲🇾',
    visaType: 'Tourist e-Visa + MDAC Digital Arrival Card',
    processingTime: '2 – 4 Working Days',
    stayValidity: '30 Days Stay (Single / Multiple Entry)',
    category: 'Fast e-Visa Processing',
    docs: [
      'Clear Color Scan of Passport Bio Page (Minimum 6 months validity)',
      'Recent Studio Digital Passport Photograph (35mm x 50mm, white background)',
      '3-Month Updated Personal Bank Statement with Bank Seal & Signature',
      'Employment Confirmation Letter or Business Registration Copy',
      'Confirmed Return Air Ticket, Hotel Booking & MDAC Submission (Handled by Yash Holidays)'
    ]
  },
  {
    id: 'thailand',
    country: 'Thailand',
    flag: '🇹🇭',
    visaType: 'Tourist Visa (TR Sticker Visa / e-Visa - 60 Days)',
    processingTime: '5 – 7 Working Days',
    stayValidity: 'Up to 60 Days Single / Multiple Entry',
    category: 'Embassy / e-Visa',
    docs: [
      'Original Passport (Minimum 6 months validity from departure date)',
      '2 Recent Color Photographs (3.5cm x 4.5cm, white background, matte finish)',
      '6-Month Updated Personal Bank Statement with Original Bank Endorsement',
      'Employer Leave & Confirmation Letter / Business Registration Certificate',
      'Confirmed Return Flight Ticket & Paid/Confirmed Hotel Voucher (Provided by Yash Holidays)'
    ]
  },
  {
    id: 'vietnam',
    country: 'Vietnam',
    flag: '🇻🇳',
    visaType: 'Tourist Visit e-Visa (30-Day / 90-Day)',
    processingTime: '3 – 5 Working Days',
    stayValidity: '30 to 90 Days Single or Multiple Entry',
    category: 'Fast e-Visa Processing',
    docs: [
      'Clear Color Scan of Passport Bio Page (Minimum 6 months validity)',
      'Digital Passport-Size Portrait Photo (4cm x 6cm, white background, no glasses)',
      'Exact Entry & Exit Airport Checkpoints (Hanoi / Da Nang / Ho Chi Minh City)',
      'Confirmed Return Flight & Hotel Accommodation Itinerary (Provided by Yash Holidays)'
    ]
  },
  {
    id: 'india',
    country: 'India',
    flag: '🇮🇳',
    visaType: 'Tourist e-Visa / Double & Multiple Entry / Medical Visit Visa',
    processingTime: '2 – 4 Working Days',
    stayValidity: '30 Days / 1 Year Multiple Entry',
    category: 'Fast e-Visa / High Commission',
    docs: [
      'Clear Color Scan of Passport Bio Page (Minimum 6 months validity + 2 blank pages)',
      'Digital Square Photograph (2 x 2 inches, white background, front-facing)',
      'Sri Lankan National Identity Card (NIC) Copy & Applicant Family Information',
      'Return Air Ticket & Hotel / Pilgrimage Tour Itinerary (Prepared by Yash Holidays)'
    ]
  },
  {
    id: 'china',
    country: 'China',
    flag: '🇨🇳',
    visaType: 'L-Tourist Visit Visa & M-Business Visa',
    processingTime: '5 – 7 Working Days',
    stayValidity: '30 Days Single / Double Entry',
    category: 'Chinese Embassy Colombo',
    docs: [
      'Original Passport (Minimum 6 months validity) + COVA Online Visa Form',
      '2 Recent Chinese Visa Standard Photos (33mm x 48mm, white background, bareheaded)',
      '6-Month Personal or Company Bank Statement with Official Bank Stamp',
      'Employment Letter or Business Registration + Canton Fair / Business Invitation (for M-Visa)',
      'Confirmed Return Air Ticket & Day-by-Day Hotel Booking (Provided by Yash Holidays)'
    ]
  },
  {
    id: 'japan',
    country: 'Japan',
    flag: '🇯🇵',
    visaType: 'Tourist / Short-Term Visit Visa (Single & Multiple Entry)',
    processingTime: '5 – 8 Working Days',
    stayValidity: '15 / 30 / 90 Days Stay',
    category: 'Embassy / VFS Japan',
    docs: [
      'Original Passport + Completed Japan Visa Application Form',
      '2 Recent Photographs (45mm x 35mm, white background, taken within 6 months)',
      '6-Month Bank Statements, Tax Returns / Salary Slips & Financial Proof',
      'Detailed Day-by-Day Schedule of Stay (Koteihyo) prepared by Yash Holidays',
      'Employment Confirmation Letter / BR Copy + Confirmed Flight & Hotel Reservations'
    ]
  }
];

// --- STRUCTURED FLIGHT ROUTES FOR THE DEDICATED AIR TICKETS TABLE ---
const FLIGHT_ROUTES_TABLE = [
  {
    destination: 'London (LHR / LGW), UK',
    airlines: 'SriLankan Airlines (Direct), Emirates, Qatar Airways',
    transit: 'Direct or 1-Stop via DXB / DOH',
    baggage: '30kg – 46kg + 7kg Cabin (Student Fares Available)',
    tag: 'High Demand'
  },
  {
    destination: 'Toronto (YYZ) / Vancouver (YVR), Canada',
    airlines: 'Emirates, Qatar Airways, Cathay Pacific, SriLankan + Partners',
    transit: '1-Stop / 2-Stop Fast Connections',
    baggage: '2 Pieces (23kg x 2) + 7kg Cabin',
    tag: 'Visitor & Student'
  },
  {
    destination: 'Auckland (AKL) / Christchurch, New Zealand',
    airlines: 'Singapore Airlines, Malaysia Airlines, Emirates, Qantas',
    transit: '1-Stop via SIN / KUL / MEL',
    baggage: '30kg – 40kg + 7kg Cabin',
    tag: 'Best Connection'
  },
  {
    destination: 'New York (JFK) / Los Angeles (LAX), USA',
    airlines: 'Qatar Airways, Emirates, Singapore Airlines, Etihad',
    transit: '1-Stop via Doha / Dubai',
    baggage: '2 Pieces (23kg x 2) + 7kg Cabin',
    tag: 'Global Route'
  },
  {
    destination: 'Tokyo (NRT / HND) & Osaka (KIX), Japan',
    airlines: 'SriLankan Airlines (Direct to Narita), Singapore Airlines, Cathay Pacific',
    transit: 'Direct or 1-Stop via SIN / HKG',
    baggage: '30kg – 40kg + 7kg Cabin',
    tag: 'Direct Available'
  },
  {
    destination: 'Guangzhou (CAN) / Shanghai / Beijing, China',
    airlines: 'SriLankan Airlines, China Eastern, Malaysia Airlines, Cathay Pacific',
    transit: 'Direct or 1-Stop via KUL / BKK',
    baggage: '30kg – 46kg (Business & Canton Fair Fares)',
    tag: 'Business & Tourist'
  },
  {
    destination: 'Bangkok (BKK / DMK) & Phuket, Thailand',
    airlines: 'SriLankan Airlines, Thai Airways, Thai AirAsia',
    transit: 'Direct 3h 25m Flight',
    baggage: '20kg – 30kg + 7kg Cabin',
    tag: 'Daily Direct'
  },
  {
    destination: 'Kuala Lumpur (KUL) & Singapore (SIN)',
    airlines: 'SriLankan Airlines, Malaysia Airlines, Singapore Airlines, AirAsia',
    transit: 'Direct 3h 30m Flight',
    baggage: '20kg – 30kg + 7kg Cabin',
    tag: 'Best Value'
  },
  {
    destination: 'Hanoi (HAN) / Da Nang / Ho Chi Minh, Vietnam',
    airlines: 'Malaysia Airlines, Thai Airways, Singapore Airlines, AirAsia',
    transit: '1-Stop Short Transit via KUL / BKK',
    baggage: '25kg – 30kg + 7kg Cabin',
    tag: 'Trending Route'
  },
  {
    destination: 'Chennai, Delhi, Mumbai, Kochi & Tiruchirappalli, India',
    airlines: 'SriLankan Airlines, IndiGo, Air India',
    transit: 'Direct Flights Multiple Times Daily',
    baggage: '20kg – 30kg + 7kg Cabin',
    tag: 'Lowest Fares'
  }
];

const AIRLINE_PARTNERS = [
  { name: 'SriLankan Airlines', route: 'Direct Flights to London, Tokyo, Bangkok, KL, Singapore, China & India', tag: 'National Carrier' },
  { name: 'Singapore Airlines', route: 'Colombo to Singapore, New Zealand, Japan, USA, Bali & Australia', tag: '5-Star Luxury' },
  { name: 'Emirates & Qatar Airways', route: 'UK, Canada, USA, Europe & Middle East via Dubai / Doha', tag: 'Global Network' },
  { name: 'Malaysia Airlines & AirAsia', route: 'Direct Colombo to Kuala Lumpur, Vietnam, China, Japan & Bali', tag: 'Best Value' },
  { name: 'Thai Airways & Cathay Pacific', route: 'Bangkok, Phuket, Hong Kong, Japan, China & North America', tag: 'Smooth Transit' },
  { name: 'IndiGo & Air India', route: 'Chennai, Delhi, Mumbai, Kochi & Global Connections', tag: 'Frequent Daily' }
];

// --- INITIAL VERIFIED CUSTOMER REVIEWS (AUTHENTIC SRI LANKAN TRAVELERS) ---
const INITIAL_REVIEWS = [
  {
    id: 'rev-nithya-prabashani',
    name: 'Nithya Dewammini & Prabashani Ranasinghe',
    location: 'Sri Lanka',
    tour: 'Malaysia & Kuala Lumpur Discovery Getaway',
    tag: 'Holiday Getaway',
    rating: 5,
    date: 'Recent Trip 2026',
    verified: true,
    highlight: 'Petronas Towers, Batu Caves, Genting Highlands & Sunway Lagoon',
    images: [
      {
        url: malaysiaReview1,
        title: 'Chin Swee Caves Temple Pagoda',
        location: 'Genting Highlands, Malaysia'
      },
      {
        url: malaysiaReview2,
        title: 'Lord Murugan Statue & Rainbow Steps',
        location: 'Batu Caves, Kuala Lumpur'
      },
      {
        url: malaysiaReview3,
        title: 'Sunway Lagoon Theme Park Fun',
        location: 'Sunway City, Selangor'
      },
      {
        url: malaysiaReview4,
        title: 'Iconic Petronas Twin Towers Skybridge',
        location: 'Kuala Lumpur City Centre'
      }
    ],
    review:
      'We are thrilled to share some of the most beautiful moments from the recent Malaysia getaway of Nithya Dewammini and Prabashani Ranasinghe. From the towering heights of the Petronas Twin Towers to the vibrant culture found at the Batu Caves, their journey through Kuala Lumpur was filled with discovery and joy. Whether they were taking in the scenic views at Genting Highlands or enjoying the ultimate fun at Sunway Lagoon, it was a trip to remember! 🎡🚠 At Yash Holidays, our commitment is to provide a seamless, high-quality service so you can focus on the experience while we handle all the details. A huge thank you to Nithya and Prabashani for trusting us with your international adventure. We can’t wait to help you plan your next one!'
  },
  {
    id: 'rev-singapore-family',
    name: 'Singapore Family Getaway Experience',
    location: 'Sri Lanka to Singapore',
    tour: 'Singapore 5D4N Highlights, Universal Studios & Gardens',
    tag: 'Family Tour',
    rating: 5,
    date: 'Recent Trip 2026',
    verified: true,
    highlight: 'Universal Studios, Merlion Park, Gardens by the Bay & Jewel Changi',
    images: [
      {
        url: singaporeReview1,
        title: 'Merlion Park & Singapore Skyline',
        location: 'Merlion Park, Singapore'
      },
      {
        url: singaporeReview2,
        title: 'Universal Studios Singapore Globe',
        location: 'Resorts World Sentosa'
      },
      {
        url: singaporeReview3,
        title: 'Gardens by the Bay & Flower Dome',
        location: 'Marina Gardens Drive, Singapore'
      },
      {
        url: singaporeReview4,
        title: 'Jewel Changi Airport Rain Vortex',
        location: 'Jewel Changi, Singapore'
      },
      {
        url: singaporeReview5,
        title: 'Traditional Heritage Temple Courtyard',
        location: 'Historic Singapore'
      }
    ],
    review:
      'An Absolutely Amazing Singapore Experience! 🇸🇬✨ I would like to sincerely thank the entire team for making my Singapore trip such a wonderful and unforgettable experience. It was truly amazing, and honestly, I can’t express the whole experience in words! ❤️ A special thank you to Mr. Dhananjaya, who helped me so much from the very beginning with planning the trip and arranging the perfect package. Your support, and patience made everything so much easier. The prices were quoted very conveniently according to my requirements, and I was really happy with the package and the value provided. Everything was arranged according to my needs and budget, which made the whole experience even better. ❤️ Also, a big thank you to Mr. Kasun for helping me with the flight ticket booking and making the arrangements smoothly. ✈️ Everything was well organized, and the entire trip was an incredible experience filled with beautiful memories. From the planning stage to the actual journey, your team was supportive and helpful throughout. Thank you so much, Dhananjaya, Kasun, and the entire travel team! 🙏❤️ I truly appreciate all your effort and support. It was an amazing trip that I will always remember! 🇸🇬✨ Highly appreciated and definitely recommended!'
  },
  {
    id: 'rev-1',
    name: 'Dinuka & Kaveesha Perera',
    location: 'Colombo, Sri Lanka',
    tour: 'Bali 5D4N Luxury Honeymoon',
    tag: 'Honeymoon',
    rating: 5,
    date: 'October 2026',
    verified: true,
    review:
      'Yash Holidays made our Bali honeymoon unforgettable! From our private pool villa in Ubud to the sunset candlelit dinner on Jimbaran beach and private chauffeur, everything was flawless. 24/7 WhatsApp support was always there. Highly recommended!',
    highlight: 'Private Pool Villa & Candlelight Dinner'
  },
  {
    id: 'rev-2',
    name: 'Dr. Roshan & Family',
    location: 'Kandy, Sri Lanka',
    tour: 'Vietnam 7D6N Classic & Halong Bay',
    tag: 'Family Tour',
    rating: 5,
    date: 'September 2026',
    verified: true,
    review:
      'Traveling with elderly parents and kids can be quite stressful, but Yash Holidays organized a relaxed, comfortable itinerary in Hanoi, 5-star Halong Bay overnight cruise, and Da Nang Bana Hills. Driver and food arrangements were top tier.',
    highlight: 'Halong Bay Cruise & Kid-Friendly Guide'
  },
  {
    id: 'rev-3',
    name: 'Sanjeewa Jayawardena',
    location: 'Gampaha, Sri Lanka',
    tour: 'Malaysia & Singapore Twin Holiday',
    tag: 'Group Tour',
    rating: 5,
    date: 'August 2026',
    verified: true,
    review:
      'Best outbound travel agency in Sri Lanka! Got our Malaysia eVisa in 48 hours and Singapore itinerary was packed with Universal Studios and Marina Bay. Very transparent pricing with zero surprise charges. Will definitely book again!',
    highlight: 'Fast 48-Hour Visa & Transparent Pricing'
  },
  {
    id: 'rev-4',
    name: 'Chamari Alwis',
    location: 'Negombo, Sri Lanka',
    tour: 'Dubai & Abu Dhabi Desert Escape',
    tag: 'Luxury Tour',
    rating: 5,
    date: 'November 2026',
    verified: true,
    review:
      'From 30-day Dubai tourist visa stamping to 5-star hotel bookings and VIP desert safari with dune bashing, Yash Holidays took care of every single detail. Their team in Boralesgamuwa is extremely friendly and professional.',
    highlight: 'VIP Desert Safari & 5-Star Stay'
  },
  {
    id: 'rev-5',
    name: 'Nalin Senaratne',
    location: 'Kurunegala, Sri Lanka',
    tour: 'Thailand 6D5N Bangkok & Phuket Island',
    tag: 'Holiday Package',
    rating: 5,
    date: 'July 2026',
    verified: true,
    review:
      'Very reasonable rates compared to other Colombo travel agents. Phi Phi islands speedboat tour, Chao Phraya dinner cruise, and city transfers were seamlessly synchronized. Outstanding dedication from Mr. Yash and the team.',
    highlight: 'Seamless Airport & Island Transfers'
  },
  {
    id: 'rev-6',
    name: 'Tharushi & Friends',
    location: 'Colombo, Sri Lanka',
    tour: 'Maldives Overwater Resort Getaway',
    tag: 'Beach Vacation',
    rating: 5,
    date: 'September 2026',
    verified: true,
    review:
      'The speedboat transfer was ready right as we landed in Male Velana airport. The overwater villa recommended by Yash Holidays was absolute paradise. Pure luxury and crystal-clear lagoon. Thank you Yash Holidays team!',
    highlight: 'Direct Speedboat Transfer & Water Villa'
  },
  {
    id: 'rev-7',
    name: 'Pradeep Kumara',
    location: 'Boralesgamuwa, Sri Lanka',
    tour: 'UK & Schengen Visit Visa Consultation',
    tag: 'Visa Service',
    rating: 5,
    date: 'October 2026',
    verified: true,
    review:
      'I visited their office at 276/E, Dehiwala Road, Boralesgamuwa. Their documentation audit and professional embassy cover letter drafting made all the difference. Got my visit visa approved smoothly without any hassle!',
    highlight: 'Embassy Cover Letter & Document Audit'
  }
];

export default function App() {
  // 5 MAIN TABS: 'home' | 'visa' | 'airtickets' | 'reviews' | 'about'
  const [activeTab, setActiveTab] = useState('home');
  const [activeNavSection, setActiveNavSection] = useState('home'); // 'home' | 'tours'
  const [selectedCountryId, setSelectedCountryId] = useState('bali');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Custom Tour Builder State (with Adults, Children, Infants)
  const [customConfig, setCustomConfig] = useState({
    destination: 'Bali, Indonesia',
    days: 6,
    travelers: 2,
    adults: 2,
    children: 0,
    infants: 0,
    hotelClass: '4-Star Superior',
    includeFlights: true,
    includeVisa: true,
    includeInsurance: true,
    travelMonth: 'December 2026',
    specialNote: ''
  });

  // Air Ticket Page State (with Adults, Children, Infants)
  const [flightForm, setFlightForm] = useState({
    tripType: 'Round Trip',
    from: 'Colombo (CMB)',
    to: 'London (LHR) / Bangkok (BKK)',
    departDate: '',
    returnDate: '',
    passengers: '2 Adults',
    adults: 2,
    children: 0,
    infants: 0,
    cabin: 'Economy Class',
    preferredAirline: 'Any Best Fare Airline',
    note: ''
  });

  // Itinerary Showcase State (Compact Modern Day Explorer)
  const [activeTimelineDay, setActiveTimelineDay] = useState(0);
  const [itineraryViewMode, setItineraryViewMode] = useState('spotlight'); // 'spotlight' | 'overview'

  // Visa Page State (Default to Canada so user immediately sees the new Visit Visa additions)
  const [selectedVisaId, setSelectedVisaId] = useState('canada');
  const [visaNote, setVisaNote] = useState('');

  // Footer Request Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: 'Outbound Tour Package',
    destination: 'Bali',
    comment: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const activeDest = DESTINATIONS.find((d) => d.id === selectedCountryId) || DESTINATIONS[0];
  const activeVisa = VISA_COUNTRIES.find((v) => v.id === selectedVisaId) || VISA_COUNTRIES[0];

  // Defensive Numeric Pax Calculations (Zero NaN Guarantee)
  const customAdults = typeof customConfig.adults === 'number' && !isNaN(customConfig.adults) ? customConfig.adults : 2;
  const customChildren = typeof customConfig.children === 'number' && !isNaN(customConfig.children) ? customConfig.children : 0;
  const customInfants = typeof customConfig.infants === 'number' && !isNaN(customConfig.infants) ? customConfig.infants : 0;
  const totalCustomPax = customAdults + customChildren + customInfants;

  const updateCustomPax = (adultsDelta, childrenDelta, infantsDelta) => {
    const newAdults = Math.max(1, customAdults + adultsDelta);
    const newChildren = Math.max(0, customChildren + childrenDelta);
    const newInfants = Math.max(0, customInfants + infantsDelta);
    const total = newAdults + newChildren + newInfants;
    setCustomConfig((prev) => ({
      ...prev,
      adults: newAdults,
      children: newChildren,
      infants: newInfants,
      travelers: total
    }));
  };

  const flightAdults = typeof flightForm.adults === 'number' && !isNaN(flightForm.adults) ? flightForm.adults : 2;
  const flightChildren = typeof flightForm.children === 'number' && !isNaN(flightForm.children) ? flightForm.children : 0;
  const flightInfants = typeof flightForm.infants === 'number' && !isNaN(flightForm.infants) ? flightForm.infants : 0;
  const totalFlightPax = flightAdults + flightChildren + flightInfants;

  const updateFlightPax = (adultsDelta, childrenDelta, infantsDelta) => {
    const newAdults = Math.max(1, flightAdults + adultsDelta);
    const newChildren = Math.max(0, flightChildren + childrenDelta);
    const newInfants = Math.max(0, flightInfants + infantsDelta);
    const total = newAdults + newChildren + newInfants;
    const paxSummary = `${total} Pax (${newAdults} Adult${newAdults > 1 ? 's' : ''}${newChildren > 0 ? `, ${newChildren} Child${newChildren > 1 ? 'ren' : ''}` : ''}${newInfants > 0 ? `, ${newInfants} Infant${newInfants > 1 ? 's' : ''}` : ''})`;
    setFlightForm((prev) => ({
      ...prev,
      adults: newAdults,
      children: newChildren,
      infants: newInfants,
      passengers: paxSummary
    }));
  };

  const navigateToTab = (tab, sectionId = null) => {
    setActiveTab(tab);
    setMobileMenuOpen(false);
    setTimeout(() => {
      if (sectionId) {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 80);
  };

  const handleSelectCountry = (id) => {
    if (id === selectedCountryId) return;
    setIsTransitioning(true);
    setActiveTimelineDay(0);
    setTimeout(() => {
      setSelectedCountryId(id);
      const found = DESTINATIONS.find((d) => d.id === id);
      if (found) {
        setCustomConfig((prev) => ({ ...prev, destination: found.country }));
        setFormData((prev) => ({ ...prev, destination: found.country }));
      }
      setIsTransitioning(false);
    }, 200);
  };

  // Send Custom Package to Yash Holidays WhatsApp
  const sendCustomToWhatsApp = () => {
    const addons = [
      customConfig.includeFlights ? 'Return Air Tickets' : null,
      customConfig.includeVisa ? 'Visa Processing' : null,
      customConfig.includeInsurance ? 'Travel Insurance' : null
    ]
      .filter(Boolean)
      .join(', ');

    const paxDetails = `${totalCustomPax} Pax (${customAdults} Adult${customAdults > 1 ? 's' : ''}${customChildren > 0 ? `, ${customChildren} Child${customChildren > 1 ? 'ren' : ''}` : ''}${customInfants > 0 ? `, ${customInfants} Infant${customInfants > 1 ? 's' : ''}` : ''})`;

    const noteLine = customConfig.specialNote.trim()
      ? `%0A• *Special Message / Note:* ${encodeURIComponent(customConfig.specialNote.trim())}`
      : '';

    const text = `Hello Yash Holidays! ✈️%0A%0AI would like to request a *Customized Tour Package* quote:%0A• *Destination:* ${encodeURIComponent(
      customConfig.destination
    )}%0A• *Duration:* ${customConfig.days} Days / ${customConfig.days - 1} Nights%0A• *Travelers:* ${encodeURIComponent(
      paxDetails
    )}%0A• *Hotel Category:* ${encodeURIComponent(
      customConfig.hotelClass
    )}%0A• *Included Services:* ${encodeURIComponent(addons || 'Land Package Only')}${noteLine}%0A%0APlease share the best package quotation!`;
    window.open(`https://wa.me/94775841144?text=${text}`, '_blank');
  };

  // Send Visit Visa Inquiry to WhatsApp
  const sendVisaInquiryToWhatsApp = (countryName, visaType) => {
    const extraMsg = visaNote.trim()
      ? `%0A• *My Message / Travel Plan:* ${encodeURIComponent(visaNote.trim())}`
      : '';
    const text = `Hello Yash Holidays Visa Desk! 🛂%0A%0AI need assistance with a *Visit Visa*:%0A• *Country:* ${encodeURIComponent(
      countryName
    )}%0A• *Visa Type:* ${encodeURIComponent(visaType)}${extraMsg}%0A%0APlease share the required document checklist and visa fee details.`;
    window.open(`https://wa.me/94775841144?text=${text}`, '_blank');
  };

  // Send Air Ticket Inquiry to WhatsApp
  const sendFlightQuoteToWhatsApp = (e) => {
    e.preventDefault();
    const flightPaxSummary = `${totalFlightPax} Pax (${flightAdults} Adult${flightAdults > 1 ? 's' : ''}${flightChildren > 0 ? `, ${flightChildren} Child${flightChildren > 1 ? 'ren' : ''}` : ''}${flightInfants > 0 ? `, ${flightInfants} Infant${flightInfants > 1 ? 's' : ''}` : ''})`;
    const text = `Hello Yash Holidays Air Ticketing Desk! ✈️%0A%0APlease share the best airfare for:%0A• *Trip Type:* ${
      flightForm.tripType
    }%0A• *From:* ${encodeURIComponent(flightForm.from)}%0A• *To:* ${encodeURIComponent(
      flightForm.to
    )}%0A• *Departure:* ${flightForm.departDate || 'Flexible Dates'}%0A• *Return:* ${
      flightForm.returnDate || 'Flexible / N/A'
    }%0A• *Passengers:* ${encodeURIComponent(flightPaxSummary)}%0A• *Cabin:* ${
      flightForm.cabin
    }%0A• *Preferred Airline:* ${encodeURIComponent(
      flightForm.preferredAirline
    )}%0A• *Special Note:* ${encodeURIComponent(flightForm.note || 'Lowest / Best Connection')}`;
    window.open(`https://wa.me/94775841144?text=${text}`, '_blank');
  };

  // Handle Lead Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const sendLeadToWhatsApp = () => {
    const text = `Hello Yash Holidays!%0A%0A*New Website Inquiry*%0A• *Name:* ${formData.name || 'Traveler'}%0A• *Phone:* ${formData.phone}%0A• *Service:* ${formData.service}%0A• *Destination:* ${formData.destination}%0A• *Note:* ${formData.comment || 'Please call me back with details.'}`;
    window.open(`https://wa.me/94775841144?text=${text}`, '_blank');
  };

  // Customer Reviews State (with LocalStorage Persistence & Customization)
  const [reviewsList, setReviewsList] = useState(() => {
    try {
      const saved = localStorage.getItem('yash_customer_reviews');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          const withoutFeatured = parsed.filter(
            (r) => r.id !== 'rev-nithya-prabashani' && r.id !== 'rev-singapore-family'
          );
          return [INITIAL_REVIEWS[0], INITIAL_REVIEWS[1], ...withoutFeatured];
        }
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_REVIEWS;
  });

  const [activePhotoModal, setActivePhotoModal] = useState(null);

  const [reviewFilter, setReviewFilter] = useState('All');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);

  const [reviewForm, setReviewForm] = useState({
    name: '',
    location: 'Colombo, Sri Lanka',
    tour: 'Bali 5D4N Luxury Honeymoon',
    tag: 'Honeymoon',
    rating: 5,
    date: 'November 2026',
    highlight: 'Exceptional Service & Luxury Hotel',
    review: ''
  });

  // Automatically sync reviews with localStorage
  useEffect(() => {
    try {
      localStorage.setItem('yash_customer_reviews', JSON.stringify(reviewsList));
    } catch (e) {
      console.error(e);
    }
  }, [reviewsList]);

  const handleOpenAddReview = () => {
    setEditingReviewId(null);
    setReviewForm({
      name: '',
      location: 'Colombo, Sri Lanka',
      tour: 'Bali 5D4N Luxury Honeymoon',
      tag: 'Honeymoon',
      rating: 5,
      date: 'November 2026',
      highlight: 'Exceptional Experience',
      review: ''
    });
    setIsReviewModalOpen(true);
  };

  const handleOpenEditReview = (rev) => {
    setEditingReviewId(rev.id);
    setReviewForm({
      name: rev.name,
      location: rev.location || 'Sri Lanka',
      tour: rev.tour || 'Custom Tour Package',
      tag: rev.tag || 'Holiday Package',
      rating: rev.rating || 5,
      date: rev.date || '2026',
      highlight: rev.highlight || 'Wonderful Holiday',
      review: rev.review || ''
    });
    setIsReviewModalOpen(true);
  };

  const handleSaveReview = (e) => {
    e.preventDefault();
    if (!reviewForm.name.trim() || !reviewForm.review.trim()) return;

    if (editingReviewId) {
      setReviewsList((prev) =>
        prev.map((r) =>
          r.id === editingReviewId
            ? {
                ...r,
                ...reviewForm,
                rating: Number(reviewForm.rating) || 5
              }
            : r
        )
      );
    } else {
      const newReview = {
        id: 'rev-' + Date.now(),
        ...reviewForm,
        rating: Number(reviewForm.rating) || 5,
        verified: true
      };
      setReviewsList((prev) => [newReview, ...prev]);
    }
    setIsReviewModalOpen(false);
  };

  const handleDeleteReview = (id) => {
    if (window.confirm('Are you sure you want to delete this customer review?')) {
      setReviewsList((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const handleResetReviews = () => {
    if (window.confirm('Reset all customer reviews to Yash Holidays official list?')) {
      setReviewsList(INITIAL_REVIEWS);
      localStorage.removeItem('yash_customer_reviews');
    }
  };

  const handleShareReviewWhatsApp = (rev) => {
    const text = `Hello Yash Holidays! 🌟%0A%0A*Customer Review from ${encodeURIComponent(rev.name)}*%0A• *Tour:* ${encodeURIComponent(rev.tour)} (${rev.location})%0A• *Rating:* ${'⭐'.repeat(rev.rating)}%0A• *Review:* "${encodeURIComponent(rev.review)}"`;
    window.open(`https://wa.me/94775841144?text=${text}`, '_blank');
  };

  const filteredReviews =
    reviewFilter === 'All'
      ? reviewsList
      : reviewFilter === 'Google Reviews'
      ? reviewsList.filter((r) => r.source === 'Google' || r.googleVerified || r.verified)
      : reviewsList.filter((r) => r.tag === reviewFilter || r.tour.toLowerCase().includes(reviewFilter.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#050B16] text-white font-sans selection:bg-sky-500 selection:text-white overflow-x-hidden pb-20 md:pb-0">
      {/* ================= STICKY GLASSMORPHIC NAVBAR (DESKTOP & MOBILE RESPONSIVE) ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#050B16]/95 backdrop-blur-xl border-b border-white/10 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-3 xl:gap-6">
          <button
            type="button"
            onClick={() => navigateToTab('home')}
            className="focus:outline-none text-left shrink-0 mr-2 xl:mr-4 flex items-center"
          >
            <YashLogo />
          </button>

          {/* PC Desktop Navigation Bar (Only on xl+ screens: Single-Line Horizontal Pills) */}
          <nav className="hidden xl:flex items-center gap-1.5 bg-white/[0.03] p-1.5 rounded-full border border-white/10 text-xs xl:text-sm font-medium text-slate-200 shrink-0">
            {/* 1. Home Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('home');
                navigateToTab('home');
              }}
              className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'home' && activeNavSection === 'home'
                  ? 'bg-gradient-to-r from-[#0047AB] to-sky-500 text-white font-bold shadow-md shadow-sky-500/25'
                  : 'hover:text-sky-400 hover:bg-white/5'
              }`}
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Home</span>
            </button>

            {/* 2. Outbound Tours Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('tours');
                navigateToTab('home', 'about-tour');
              }}
              className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'home' && activeNavSection === 'tours'
                  ? 'bg-gradient-to-r from-[#0047AB] to-sky-500 text-white font-bold shadow-md shadow-sky-500/25'
                  : 'hover:text-sky-400 hover:bg-white/5'
              }`}
            >
              <Compass className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Outbound Tours</span>
            </button>

            {/* 3. Visa Services Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('');
                navigateToTab('visa');
              }}
              className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'visa'
                  ? 'bg-gradient-to-r from-[#0047AB] to-sky-500 text-white font-bold shadow-md shadow-sky-500/25'
                  : 'hover:text-sky-400 hover:bg-white/5'
              }`}
            >
              <FileCheck className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Visa Services</span>
            </button>

            {/* 4. Air Tickets Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('');
                navigateToTab('airtickets');
              }}
              className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'airtickets'
                  ? 'bg-gradient-to-r from-[#0047AB] to-sky-500 text-white font-bold shadow-md shadow-sky-500/25'
                  : 'hover:text-sky-400 hover:bg-white/5'
              }`}
            >
              <Plane className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">Air Tickets</span>
            </button>

            {/* 5. Customer Reviews Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('');
                navigateToTab('reviews');
              }}
              className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'reviews'
                  ? 'bg-gradient-to-r from-[#0047AB] to-sky-500 text-white font-bold shadow-md shadow-sky-500/25'
                  : 'hover:text-sky-400 hover:bg-white/5'
              }`}
            >
              <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 fill-amber-400/30" />
              <span className="whitespace-nowrap">Reviews</span>
            </button>

            {/* 6. About Us Tab */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('');
                navigateToTab('about');
              }}
              className={`px-3.5 py-2 rounded-full transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 ${
                activeTab === 'about'
                  ? 'bg-gradient-to-r from-[#0047AB] to-sky-500 text-white font-bold shadow-md shadow-sky-500/25'
                  : 'hover:text-sky-400 hover:bg-white/5'
              }`}
            >
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span className="whitespace-nowrap">About Us</span>
            </button>

            {/* 7. Contact Link */}
            <button
              type="button"
              onClick={() => navigateToTab(activeTab, 'contact')}
              className="px-3.5 py-2 rounded-full hover:text-sky-400 hover:bg-white/5 transition-colors whitespace-nowrap shrink-0"
            >
              Contact
            </button>
          </nav>

          {/* Right CTA, Email & Hotline (Desktop xl+) */}
          <div className="hidden xl:flex items-center gap-2.5 shrink-0">
            <a
              href="mailto:yashholidays.lk@gmail.com"
              className="hidden 2xl:flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-medium text-slate-200 transition-all whitespace-nowrap shrink-0"
              title="Official Email: yashholidays.lk@gmail.com"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>yashholidays.lk@gmail.com</span>
            </a>
            <a
              href="tel:0112312093"
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs font-medium text-slate-200 transition-all whitespace-nowrap shrink-0"
              title="Hotline: 011 231 2093"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>011 231 2093</span>
            </a>
            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#0047AB] to-sky-500 hover:from-[#0055CC] hover:to-sky-400 text-white font-semibold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 transition-all whitespace-nowrap shrink-0"
            >
              Custom Tour
            </button>
          </div>

          {/* Mobile & Tablet Quick Actions (< xl screens) */}
          <div className="flex xl:hidden items-center gap-2 shrink-0">
            <a
              href="tel:0112312093"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-sky-500/15 border border-sky-400/30 text-sky-400 hover:bg-sky-500 hover:text-white transition-all flex items-center gap-1.5 active:scale-95"
              title="Call Hotline: 011 231 2093"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-semibold">011 231 2093</span>
            </a>
            <a
              href="https://wa.me/94775841144"
              target="_blank"
              rel="noreferrer"
              className="p-2 sm:px-3 sm:py-2 rounded-xl bg-emerald-500/15 border border-emerald-400/30 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all flex items-center gap-1.5 active:scale-95"
              title="WhatsApp Yash Holidays"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span className="hidden sm:inline text-xs font-semibold">WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="hidden md:inline-flex px-3.5 py-2 rounded-xl bg-gradient-to-r from-[#0047AB] to-sky-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-sky-500/20 active:scale-95"
            >
              Custom Tour
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-all active:scale-95 flex items-center gap-1.5 ${
                mobileMenuOpen
                  ? 'bg-sky-500 text-[#050B16] border-sky-400 shadow-md shadow-sky-500/30'
                  : 'bg-white/10 text-white hover:bg-white/20 border-white/15'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile & Tablet Animated Slide-Down Navigation Drawer ("ඇදිලා එන" Navigation Drawer) */}
        <div
          className={`xl:hidden transition-all duration-300 ease-in-out overflow-hidden border-sky-400/20 bg-[#081226]/98 backdrop-blur-2xl ${
            mobileMenuOpen
              ? 'max-h-[850px] opacity-100 border-b shadow-2xl py-5 px-4 sm:px-6'
              : 'max-h-0 opacity-0 border-b-0 py-0 px-4 sm:px-6 pointer-events-none'
          }`}
        >
          {/* Main Navigation Buttons in 2 Columns */}
          <div className="grid grid-cols-2 gap-2.5 sm:gap-3 max-w-lg mx-auto">
            {/* 1. Home */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('home');
                navigateToTab('home');
              }}
              className={`p-3 rounded-xl text-left text-xs sm:text-sm font-bold border flex items-center gap-2 whitespace-nowrap transition-all active:scale-95 ${
                activeTab === 'home' && activeNavSection === 'home'
                  ? 'bg-sky-500 text-[#050B16] border-sky-400 shadow-lg shadow-sky-500/30'
                  : 'bg-[#0c1830] text-white border-white/15 hover:border-sky-400/50 hover:bg-[#102244]'
              }`}
            >
              <Globe className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Home</span>
            </button>

            {/* 2. Outbound Tours */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('tours');
                navigateToTab('home', 'about-tour');
              }}
              className={`p-3 rounded-xl text-left text-xs sm:text-sm font-bold border flex items-center gap-2 whitespace-nowrap transition-all active:scale-95 ${
                activeTab === 'home' && activeNavSection === 'tours'
                  ? 'bg-sky-500 text-[#050B16] border-sky-400 shadow-lg shadow-sky-500/30'
                  : 'bg-[#0c1830] text-white border-white/15 hover:border-sky-400/50 hover:bg-[#102244]'
              }`}
            >
              <Compass className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Outbound Tours</span>
            </button>

            {/* 3. Visa Services */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('');
                navigateToTab('visa');
              }}
              className={`p-3 rounded-xl text-left text-xs sm:text-sm font-bold border flex items-center gap-2 whitespace-nowrap transition-all active:scale-95 ${
                activeTab === 'visa'
                  ? 'bg-sky-500 text-[#050B16] border-sky-400 shadow-lg shadow-sky-500/30'
                  : 'bg-[#0c1830] text-white border-white/15 hover:border-sky-400/50 hover:bg-[#102244]'
              }`}
            >
              <FileCheck className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Visa Services</span>
            </button>

            {/* 4. Air Tickets */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('');
                navigateToTab('airtickets');
              }}
              className={`p-3 rounded-xl text-left text-xs sm:text-sm font-bold border flex items-center gap-2 whitespace-nowrap transition-all active:scale-95 ${
                activeTab === 'airtickets'
                  ? 'bg-sky-500 text-[#050B16] border-sky-400 shadow-lg shadow-sky-500/30'
                  : 'bg-[#0c1830] text-white border-white/15 hover:border-sky-400/50 hover:bg-[#102244]'
              }`}
            >
              <Plane className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">Air Tickets</span>
            </button>

            {/* 5. Customer Reviews */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('');
                navigateToTab('reviews');
              }}
              className={`p-3 rounded-xl text-left text-xs sm:text-sm font-bold border flex items-center gap-2 whitespace-nowrap transition-all active:scale-95 ${
                activeTab === 'reviews'
                  ? 'bg-sky-500 text-[#050B16] border-sky-400 shadow-lg shadow-sky-500/30'
                  : 'bg-[#0c1830] text-white border-white/15 hover:border-sky-400/50 hover:bg-[#102244]'
              }`}
            >
              <Star className="w-4 h-4 text-amber-400 shrink-0 fill-amber-400" />
              <span className="whitespace-nowrap">Reviews</span>
            </button>

            {/* 6. About Us */}
            <button
              type="button"
              onClick={() => {
                setActiveNavSection('');
                navigateToTab('about');
              }}
              className={`p-3 rounded-xl text-left text-xs sm:text-sm font-bold border flex items-center gap-2 whitespace-nowrap transition-all active:scale-95 ${
                activeTab === 'about'
                  ? 'bg-sky-500 text-[#050B16] border-sky-400 shadow-lg shadow-sky-500/30'
                  : 'bg-[#0c1830] text-white border-white/15 hover:border-sky-400/50 hover:bg-[#102244]'
              }`}
            >
              <Award className="w-4 h-4 shrink-0" />
              <span className="whitespace-nowrap">About Us</span>
            </button>

            {/* 7. Contact & Office */}
            <button
              type="button"
              onClick={() => navigateToTab(activeTab, 'contact')}
              className="p-3 rounded-xl text-left text-xs sm:text-sm font-bold border border-white/15 bg-[#0c1830] text-white flex items-center gap-2 whitespace-nowrap transition-all hover:border-sky-400/50 hover:bg-[#102244] active:scale-95"
            >
              <MapPin className="w-4 h-4 text-sky-400 shrink-0" />
              <span className="whitespace-nowrap">Contact & Office</span>
            </button>

            {/* 8. Customize Tour */}
            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="p-3 rounded-xl text-left text-xs sm:text-sm font-bold border border-sky-400/40 bg-gradient-to-r from-[#0047AB]/50 to-sky-600/50 text-white flex items-center gap-2 whitespace-nowrap transition-all hover:border-sky-400 hover:bg-sky-600/60 active:scale-95 shadow-md shadow-sky-500/20"
            >
              <Sliders className="w-4 h-4 text-sky-300 shrink-0" />
              <span className="whitespace-nowrap">Customize Tour</span>
            </button>
          </div>

          {/* Quick Action Buttons in Slide-Down Drawer (Call, WhatsApp & Email) */}
          <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-2.5 max-w-lg mx-auto">
            <div className="grid grid-cols-2 gap-2">
              <a
                href="tel:0112312093"
                className="py-2.5 px-3 rounded-xl bg-white/10 text-center text-xs font-semibold flex items-center justify-center gap-1.5 text-white hover:bg-white/20 transition-colors active:scale-95"
              >
                <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                <span>011 231 2093</span>
              </a>
              <a
                href="https://wa.me/94775841144"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-3 rounded-xl bg-emerald-600 text-center text-xs font-semibold flex items-center justify-center gap-1.5 text-white hover:bg-emerald-500 transition-colors active:scale-95"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white shrink-0" />
                <span>WhatsApp</span>
              </a>
            </div>

            <a
              href="mailto:yashholidays.lk@gmail.com"
              className="py-2.5 px-3 rounded-xl bg-sky-950/60 border border-sky-400/30 text-center text-xs font-semibold flex items-center justify-center gap-2 text-sky-300 hover:bg-sky-900/60 transition-colors active:scale-95"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>yashholidays.lk@gmail.com</span>
            </a>
          </div>
        </div>
      </header>

      {/* Mobile Backdrop Overlay (Tap outside to close slide drawer) */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 xl:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* ================= TAB 2: DEDICATED VISA SERVICES PAGE ================= */}
      {activeTab === 'visa' && (
        <div className="pt-20">
          {/* Visa Services Hero */}
          <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1920&q=85"
                alt="Global Visit Visa Services"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050B16]/90 via-[#050B16]/75 to-[#050B16]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-4">
                <FileCheck className="w-3.5 h-3.5" /> YASH HOLIDAYS VISIT VISA DESK
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
                Global <span className="text-sky-400">Visit Visa</span> Assistance & Consultation
              </h1>
              <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Professional Visit Visa documentation, embassy & VFS appointment scheduling, financial file auditing, and cover letter preparation for{' '}
                <strong className="text-white">
                  Canada, New Zealand, UK, USA, Malaysia, Thailand, Vietnam, India, China, and Japan
                </strong>.
              </p>

              {/* Quick Country Badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
                {VISA_COUNTRIES.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setSelectedVisaId(item.id);
                      document.getElementById('visa-checklist-box')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all border flex items-center gap-1.5 ${
                      selectedVisaId === item.id
                        ? 'bg-sky-500 text-[#050B16] border-sky-300 shadow-lg shadow-sky-500/25 scale-105'
                        : 'bg-white/5 text-slate-200 border-white/15 hover:border-sky-400/50'
                    }`}
                  >
                    <span>{item.flag}</span>
                    <span>{item.country}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Interactive Country Document Checklist Hub */}
          <section id="visa-checklist-box" className="py-16 bg-[#050B16]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B1933] via-[#081225] to-[#050B16] border border-sky-400/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left: Detailed Document Checklist */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="px-3 py-1 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-wider">
                        {activeVisa.category}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold">
                        Processing Time: {activeVisa.processingTime}
                      </span>
                    </div>

                    <div>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3">
                        <span>{activeVisa.flag}</span>
                        <span>{activeVisa.country} — Visit Visa</span>
                      </h2>
                      <p className="text-sm text-sky-300 font-medium mt-1">
                        {activeVisa.visaType} • Validity: {activeVisa.stayValidity}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                        Required Documents Checklist for Sri Lankan Applicants:
                      </p>
                      {activeVisa.docs.map((doc, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 rounded-xl bg-white/[0.03] border border-white/10"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-200">{doc}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Apply / Small Message Box for Selected Visit Visa */}
                  <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#062356] border border-sky-300/30 space-y-5">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-white">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-wider text-sky-200 font-semibold">
                          Yash Holidays Visa Specialists
                        </p>
                        <h3 className="text-lg font-bold text-white">
                          Apply for {activeVisa.country} Visit Visa
                        </h3>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-sky-100 leading-relaxed">
                      Our Boralesgamuwa Visa Desk audits your bank statements, prepares your professional embassy cover letter, books VFS/Embassy appointments, and provides flight & hotel itineraries for{' '}
                      <strong>{activeVisa.country}</strong>.
                    </p>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-sky-200 mb-1.5 font-semibold">
                        Small Message / Your Travel Plan (Optional)
                      </label>
                      <textarea
                        rows={3}
                        value={visaNote}
                        onChange={(e) => setVisaNote(e.target.value)}
                        placeholder={`e.g., Planning to visit ${activeVisa.country} in December with family (3 adults), need guidance on bank balance...`}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#050B16]/80 border border-white/25 text-xs sm:text-sm text-white placeholder-slate-400 focus:border-sky-300 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-3 pt-1">
                      <button
                        type="button"
                        onClick={() => sendVisaInquiryToWhatsApp(activeVisa.country, activeVisa.visaType)}
                        className="w-full py-3.5 px-5 rounded-xl bg-white hover:bg-sky-50 text-[#050B16] font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-emerald-600" />
                        <span>Inquire {activeVisa.country} Visa on WhatsApp</span>
                      </button>

                      <a
                        href="tel:0112312093"
                        className="w-full py-3 px-5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all"
                      >
                        <Phone className="w-4 h-4 text-sky-300" />
                        <span>Call Visa Hotline: 011 231 2093</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Structured Visit Visa Overview Table (All 10 Countries) */}
          <section className="py-12 sm:py-20 bg-gradient-to-b from-[#050B16] to-[#08152C] border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold">
                    QUICK COMPARISON TABLE
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Visit Visa Services Overview Table
                  </h2>
                </div>
                <p className="text-xs text-slate-400">
                  Click any row to view full required documents above or inquire via WhatsApp.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-white/15 bg-[#081226]/90 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/15 bg-white/[0.04] text-[11px] uppercase tracking-wider text-sky-300">
                      <th className="py-4 px-5">Country</th>
                      <th className="py-4 px-5">Visa Category (Visit Visa)</th>
                      <th className="py-4 px-5">Processing Time</th>
                      <th className="py-4 px-5">Stay / Entry Validity</th>
                      <th className="py-4 px-5 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                    {VISA_COUNTRIES.map((v) => (
                      <tr
                        key={v.id}
                        className={`hover:bg-white/[0.04] transition-colors ${
                          selectedVisaId === v.id ? 'bg-sky-500/10' : ''
                        }`}
                      >
                        <td className="py-4 px-5 font-bold text-white whitespace-nowrap">
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedVisaId(v.id);
                              document.getElementById('visa-checklist-box')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="flex items-center gap-2 hover:text-sky-400 text-left"
                          >
                            <span className="text-lg">{v.flag}</span>
                            <span>{v.country}</span>
                          </button>
                        </td>
                        <td className="py-4 px-5 text-slate-200">{v.visaType}</td>
                        <td className="py-4 px-5 text-emerald-300 font-medium whitespace-nowrap">
                          {v.processingTime}
                        </td>
                        <td className="py-4 px-5 text-slate-300">{v.stayValidity}</td>
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <div className="inline-flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => {
                                setSelectedVisaId(v.id);
                                document.getElementById('visa-checklist-box')?.scrollIntoView({ behavior: 'smooth' });
                              }}
                              className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold"
                            >
                              Checklist
                            </button>
                            <button
                              type="button"
                              onClick={() => sendVisaInquiryToWhatsApp(v.country, v.visaType)}
                              className="px-3 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-[#050B16] text-xs font-bold"
                            >
                              Apply Now
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ================= TAB 3: DEDICATED AIR TICKETS PAGE ================= */}
      {activeTab === 'airtickets' && (
        <div className="pt-20">
          {/* Air Tickets Hero */}
          <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85"
                alt="Worldwide Air Ticketing"
                className="w-full h-full object-cover opacity-35"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050B16]/90 via-[#050B16]/75 to-[#050B16]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-4">
                <Plane className="w-3.5 h-3.5" /> YASH HOLIDAYS GLOBAL TICKETING DESK
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
                Worldwide <span className="text-sky-400">Air Ticketing</span> & Flight Reservations
              </h1>
              <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Special agency consolidator airfares, student baggage deals, group bookings, and 24/7 date-change support for flights from Colombo (CMB) to the UK, Canada, New Zealand, USA, Japan, China, and across Asia.
              </p>
            </div>
          </section>

          {/* Interactive Flight Fare Quotation Form + Airline Partners */}
          <section className="py-16 bg-[#050B16]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                {/* Left: Interactive Airfare Calculator */}
                <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0B1933] via-[#081225] to-[#050B16] border border-sky-400/30 shadow-2xl">
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-white/10">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-widest text-sky-400">
                        LOWEST AIRFARE REQUEST
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                        Request Your Air Ticket Quote
                      </h2>
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
                      <Plane className="w-6 h-6" />
                    </div>
                  </div>

                  <form onSubmit={sendFlightQuoteToWhatsApp} className="space-y-5">
                    <div className="flex flex-wrap gap-2">
                      {['Round Trip', 'One Way', 'Multi-City'].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFlightForm({ ...flightForm, tripType: type })}
                          className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                            flightForm.tripType === type
                              ? 'bg-sky-500 text-[#050B16]'
                              : 'bg-white/5 text-slate-300 hover:bg-white/10 border border-white/10'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                          Origin Airport
                        </label>
                        <input
                          type="text"
                          value={flightForm.from}
                          onChange={(e) => setFlightForm({ ...flightForm, from: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                          Destination (City / Country)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g., London, Toronto, Auckland, Tokyo, Bangkok..."
                          value={flightForm.to}
                          onChange={(e) => setFlightForm({ ...flightForm, to: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                          Departure Date
                        </label>
                        <input
                          type="date"
                          value={flightForm.departDate}
                          onChange={(e) => setFlightForm({ ...flightForm, departDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                          Return Date {flightForm.tripType === 'One Way' && '(Optional)'}
                        </label>
                        <input
                          type="date"
                          disabled={flightForm.tripType === 'One Way'}
                          value={flightForm.returnDate}
                          onChange={(e) => setFlightForm({ ...flightForm, returnDate: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white disabled:opacity-40 focus:border-sky-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="sm:col-span-3 bg-[#050B16] border border-white/20 rounded-2xl p-4 sm:p-5 space-y-3.5 shadow-lg">
                        <div className="flex items-center justify-between">
                          <label className="text-xs uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
                            <Users className="w-4 h-4 text-sky-400 shrink-0" />
                            <span>Flight Passengers (Pax Selection)</span>
                          </label>
                          <span className="text-xs text-slate-300 font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/10">
                            Total: <strong className="text-sky-300">{totalFlightPax} Pax</strong>
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {/* Adults */}
                          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-sky-400/40 transition-colors flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold text-white">Adults</span>
                              <span className="text-[11px] font-medium text-sky-300 bg-sky-950/70 border border-sky-400/30 px-2 py-0.5 rounded-md">
                                12+ Years
                              </span>
                            </div>
                            <div className="flex items-center justify-between bg-[#050B16] border border-white/10 rounded-xl p-1">
                              <button
                                type="button"
                                onClick={() => updateFlightPax(-1, 0, 0)}
                                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-500 hover:text-white text-slate-200 font-bold flex items-center justify-center transition-all text-base border border-white/10 active:scale-90"
                                aria-label="Decrease flight adults"
                              >
                                -
                              </button>
                              <span className="text-base font-extrabold text-sky-300 px-2 select-none">{flightAdults}</span>
                              <button
                                type="button"
                                onClick={() => updateFlightPax(1, 0, 0)}
                                className="w-8 h-8 rounded-lg bg-sky-500/25 hover:bg-sky-500 hover:text-white text-sky-200 font-bold flex items-center justify-center transition-all text-base border border-sky-400/30 active:scale-90"
                                aria-label="Increase flight adults"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Children */}
                          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-sky-400/40 transition-colors flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold text-white">Children</span>
                              <span className="text-[11px] font-medium text-sky-300 bg-sky-950/70 border border-sky-400/30 px-2 py-0.5 rounded-md">
                                2–11 Years
                              </span>
                            </div>
                            <div className="flex items-center justify-between bg-[#050B16] border border-white/10 rounded-xl p-1">
                              <button
                                type="button"
                                onClick={() => updateFlightPax(0, -1, 0)}
                                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-500 hover:text-white text-slate-200 font-bold flex items-center justify-center transition-all text-base border border-white/10 active:scale-90"
                                aria-label="Decrease flight children"
                              >
                                -
                              </button>
                              <span className="text-base font-extrabold text-sky-300 px-2 select-none">{flightChildren}</span>
                              <button
                                type="button"
                                onClick={() => updateFlightPax(0, 1, 0)}
                                className="w-8 h-8 rounded-lg bg-sky-500/25 hover:bg-sky-500 hover:text-white text-sky-200 font-bold flex items-center justify-center transition-all text-base border border-sky-400/30 active:scale-90"
                                aria-label="Increase flight children"
                              >
                                +
                              </button>
                            </div>
                          </div>

                          {/* Infants */}
                          <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-sky-400/40 transition-colors flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-bold text-white">Infants</span>
                              <span className="text-[11px] font-medium text-sky-300 bg-sky-950/70 border border-sky-400/30 px-2 py-0.5 rounded-md">
                                Under 2 Yrs
                              </span>
                            </div>
                            <div className="flex items-center justify-between bg-[#050B16] border border-white/10 rounded-xl p-1">
                              <button
                                type="button"
                                onClick={() => updateFlightPax(0, 0, -1)}
                                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-500 hover:text-white text-slate-200 font-bold flex items-center justify-center transition-all text-base border border-white/10 active:scale-90"
                                aria-label="Decrease flight infants"
                              >
                                -
                              </button>
                              <span className="text-base font-extrabold text-sky-300 px-2 select-none">{flightInfants}</span>
                              <button
                                type="button"
                                onClick={() => updateFlightPax(0, 0, 1)}
                                className="w-8 h-8 rounded-lg bg-sky-500/25 hover:bg-sky-500 hover:text-white text-sky-200 font-bold flex items-center justify-center transition-all text-base border border-sky-400/30 active:scale-90"
                                aria-label="Increase flight infants"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                          Cabin Class
                        </label>
                        <select
                          value={flightForm.cabin}
                          onChange={(e) => setFlightForm({ ...flightForm, cabin: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                        >
                          <option value="Economy Class">Economy Class</option>
                          <option value="Premium Economy">Premium Economy</option>
                          <option value="Business Class">Business Class</option>
                          <option value="First Class">First Class</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1.5 font-semibold">
                          Preferred Airline
                        </label>
                        <select
                          value={flightForm.preferredAirline}
                          onChange={(e) => setFlightForm({ ...flightForm, preferredAirline: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                        >
                          <option value="Any Best Fare Airline">Any Best Fare</option>
                          <option value="SriLankan Airlines">SriLankan Airlines</option>
                          <option value="Emirates">Emirates</option>
                          <option value="Qatar Airways">Qatar Airways</option>
                          <option value="Singapore Airlines">Singapore Airlines</option>
                          <option value="Malaysia Airlines">Malaysia Airlines</option>
                          <option value="Thai Airways / AirAsia">Thai Airways / AirAsia</option>
                          <option value="Cathay Pacific">Cathay Pacific</option>
                          <option value="IndiGo / Air India">IndiGo / Air India</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs uppercase tracking-wider text-sky-300 mb-1.5 font-semibold">
                        Small Message / Special Flight Note (Extra Baggage, Student Fare, Wheelchair, etc.)
                      </label>
                      <textarea
                        rows={2}
                        placeholder="Write any special request (e.g., student extra baggage allowance, vegetarian meal, short transit time, or flexible date ticket)..."
                        value={flightForm.note}
                        onChange={(e) => setFlightForm({ ...flightForm, note: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white placeholder-slate-400 focus:border-sky-400 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-gradient-to-r from-[#0047AB] to-sky-500 hover:from-[#0055CC] hover:to-sky-400 text-white font-bold text-sm uppercase tracking-wider shadow-xl shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
                    >
                      <WhatsAppIcon className="w-5 h-5 text-white" />
                      <span>Check Lowest Fare on WhatsApp (+94 77 584 1144)</span>
                    </button>
                  </form>
                </div>

                {/* Right: Ticketing Advantages & Partner Airlines */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/15 space-y-4">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <BadgeCheck className="w-5 h-5 text-sky-400" /> Why Book Air Tickets With Yash Holidays?
                    </h3>
                    <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Unbeatable Consolidator Rates:</strong> Special agency fares to UK, Canada, New Zealand, Japan, China & Asia.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Dummy / Hold Tickets for Visa:</strong> Verifiable flight itinerary reservations for embassy visa submissions.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Student & Family Concessions:</strong> Up to 45kg–50kg baggage & flexible date-change policies.</span>
                      </li>
                      <li className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span><strong>Direct Hotline Support:</strong> Call `011 231 2093` or `+94 77 584 1144` anytime for urgent rebooking.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/15 space-y-4">
                    <h3 className="text-lg font-bold text-white">Global Airline Partners</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {AIRLINE_PARTNERS.map((airline, i) => (
                        <div key={i} className="p-3.5 rounded-2xl bg-[#0A162B] border border-white/10">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-sky-400">
                            {airline.tag}
                          </span>
                          <p className="text-sm font-bold text-white mt-0.5">{airline.name}</p>
                          <p className="text-[11px] text-slate-400 mt-1 leading-snug">{airline.route}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Structured Air Ticket Routes & Baggage Comparison Table */}
          <section className="py-12 sm:py-20 bg-gradient-to-b from-[#050B16] to-[#08152C] border-t border-white/10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-sky-400 font-semibold">
                    POPULAR GLOBAL FLIGHT ROUTES FROM COLOMBO (CMB)
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                    Air Ticket Routes & Airlines Table
                  </h2>
                </div>
                <p className="text-xs text-slate-400">
                  Click "Check Lowest Fare" to pre-fill your route or get an instant quote via WhatsApp.
                </p>
              </div>

              <div className="overflow-x-auto rounded-3xl border border-white/15 bg-[#081226]/90 shadow-2xl">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/15 bg-white/[0.04] text-[11px] uppercase tracking-wider text-sky-300">
                      <th className="py-4 px-5">Route from Colombo (CMB)</th>
                      <th className="py-4 px-5">Major Airlines</th>
                      <th className="py-4 px-5">Connection Type</th>
                      <th className="py-4 px-5">Baggage Allowance</th>
                      <th className="py-4 px-5 text-right">Instant Quote</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 text-xs sm:text-sm">
                    {FLIGHT_ROUTES_TABLE.map((row, index) => (
                      <tr key={index} className="hover:bg-white/[0.04] transition-colors">
                        <td className="py-4 px-5 font-bold text-white">
                          <div className="flex flex-col">
                            <span>{row.destination}</span>
                            <span className="text-[10px] text-sky-400 uppercase tracking-wider mt-0.5">
                              {row.tag}
                            </span>
                          </div>
                        </td>
                        <td className="py-4 px-5 text-slate-200">{row.airlines}</td>
                        <td className="py-4 px-5 text-emerald-300 font-medium">{row.transit}</td>
                        <td className="py-4 px-5 text-slate-300">{row.baggage}</td>
                        <td className="py-4 px-5 text-right whitespace-nowrap">
                          <a
                            href={`https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20Please%20share%20the%20lowest%20air%20ticket%20fare%20from%20Colombo%20(CMB)%20to%20${encodeURIComponent(
                              row.destination
                            )}.`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-[#050B16] text-xs font-bold transition-all"
                          >
                            <Plane className="w-3.5 h-3.5" />
                            <span>Check Lowest Fare</span>
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ================= TAB: DEDICATED CUSTOMER REVIEWS PAGE (WITH CUSTOMIZER) ================= */}
      {activeTab === 'reviews' && (
        <div className="pt-20">
          {/* Reviews Hero Section */}
          <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=85"
                alt="Happy Sri Lankan Travelers with Yash Holidays"
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050B16]/90 via-[#050B16]/80 to-[#050B16]" />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-xs font-bold uppercase tracking-widest mb-4">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>100% GENUINE SRI LANKAN TRAVELER REVIEWS</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
                Customer <span className="text-sky-400">Reviews & Stories</span>
              </h1>
              <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Read authentic testimonials and feedback from Sri Lankan families, couples, and groups who booked their dream vacations, flight tickets, and visit visas with Yash Holidays Pvt Ltd.
              </p>

              {/* High-Trust Metrics Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mt-10">
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
                  <div className="flex items-center justify-center gap-1 text-amber-400 font-black text-2xl sm:text-3xl">
                    <span>4.9</span>
                    <Star className="w-5 h-5 fill-amber-400" />
                  </div>
                  <p className="text-xs text-slate-300 font-medium mt-1">Average Star Rating</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
                  <p className="text-2xl sm:text-3xl font-black text-sky-400">1,450+</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Happy Travelers</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
                  <p className="text-2xl sm:text-3xl font-black text-emerald-400">99.4%</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Satisfaction Rate</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 backdrop-blur-md">
                  <p className="text-2xl sm:text-3xl font-black text-purple-400">24/7</p>
                  <p className="text-xs text-slate-300 font-medium mt-1">Tour Assistance</p>
                </div>
              </div>

              {/* Official Google Reviews Trust Strip */}
              <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-white/[0.06] border border-white/20 max-w-3xl mx-auto backdrop-blur-xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
                <div className="flex items-center gap-3.5 text-left">
                  <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center p-2.5 shadow-lg shadow-black/40 shrink-0 border border-white/80">
                    <GoogleIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-white font-extrabold text-sm sm:text-base">Google Reviews</span>
                      <div className="flex items-center text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-black text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-400/20">
                        4.9 / 5.0
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-0.5">
                      Rated <strong className="text-white">4.9 Stars</strong> across <strong className="text-sky-300">180+ Verified Reviews</strong> on Google Business Profile
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#050B16] font-bold text-xs flex items-center gap-2 shadow-lg shadow-black/30 active:scale-95 transition-all"
                  >
                    <GoogleIcon className="w-4 h-4" />
                    <span>Review Us on Google</span>
                  </a>
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/15 active:scale-95 transition-all"
                  >
                    Read on Google
                  </a>
                </div>
              </div>

              {/* Review Action Controls */}
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 rounded-full bg-white hover:bg-slate-100 text-[#050B16] font-bold text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 active:scale-95 transition-all"
                >
                  <GoogleIcon className="w-4 h-4" />
                  <span>Write a Google Review</span>
                </a>
                <button
                  type="button"
                  onClick={handleOpenAddReview}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#0047AB] to-sky-500 hover:from-[#0055CC] hover:to-sky-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/30 flex items-center gap-2 active:scale-95 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  <span>Write / Add Your Review</span>
                </button>
                <button
                  type="button"
                  onClick={handleResetReviews}
                  className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 text-xs font-semibold flex items-center gap-2 active:scale-95 transition-all"
                  title="Reset to Yash Holidays default reviews"
                >
                  <RotateCcw className="w-3.5 h-3.5 text-slate-400" />
                  <span>Reset Official Reviews</span>
                </button>
                <a
                  href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20would%20like%20to%20send%20a%20customer%20review%20feedback%20for%20my%20recent%20trip."
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-2 active:scale-95 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Submit via WhatsApp</span>
                </a>
              </div>
            </div>
          </section>

          {/* Interactive Reviews Filter & Grid Section */}
          <section className="py-12 sm:py-20 bg-gradient-to-b from-[#050B16] via-[#08152C] to-[#050B16]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* ================= SPECIAL TRAVELER SPOTLIGHT 1: SINGAPORE FAMILY GETAWAY ================= */}
              <div className="mb-10 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A1931] via-[#08152C] to-[#050B16] border border-sky-400/40 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
                  {/* Left Column: Story Details & Narrative */}
                  <div className="lg:w-1/2 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
                      <Camera className="w-3.5 h-3.5 text-emerald-400" />
                      <span>FEATURED FAMILY MOMENTS • SINGAPORE GETAWAY 🇸🇬</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                      An Absolutely Amazing <span className="text-sky-400">Singapore Experience!</span> 🇸🇬✨
                    </h2>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                        5.0 / 5.0 Star Family Experience
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-medium">
                      "I would like to sincerely thank the entire team for making my Singapore trip such a wonderful and unforgettable experience. It was truly amazing, and honestly, I can’t express the whole experience in words! ❤️"
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-400/30 transition-colors">
                        <p className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>Special Thanks to Mr. Dhananjaya</span>
                        </p>
                        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                          "Helped me so much from the very beginning with planning the trip and arranging the perfect package. Everything was arranged according to my needs and budget."
                        </p>
                      </div>

                      <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-sky-400/30 transition-colors">
                        <p className="text-xs font-bold text-sky-300 flex items-center gap-1.5">
                          <Plane className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                          <span>Special Thanks to Mr. Kasun</span>
                        </p>
                        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                          "Helping me with the flight ticket booking and making the arrangements smoothly. ✈️ Everything was well organized and filled with beautiful memories."
                        </p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-sky-400 pl-4 py-1">
                      "Thank you so much, Dhananjaya, Kasun, and the entire travel team! 🙏❤️ I truly appreciate all your effort and support. It was an amazing trip that I will always remember! Highly appreciated and definitely recommended!"
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20saw%20the%20Singapore%20family%20photos%20(Universal%20Studios,%20Merlion,%20Gardens%20by%20the%20Bay,%20Jewel%20Changi)%20and%20would%20like%20a%20similar%20Singapore%20package%20quote!"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white" />
                        <span>Book Similar Singapore Tour</span>
                      </a>
                      <a
                        href="https://wa.me/94775841144?text=Hello%20Mr.%20Dhananjaya%20and%20Mr.%20Kasun!%20I%20would%20like%20assistance%20with%20Singapore%20family%20holiday%20packages%20and%20flight%20tickets."
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 active:scale-95 transition-all"
                      >
                        <Compass className="w-4 h-4 text-sky-400" />
                        <span>Speak with Trip Planners</span>
                      </a>
                    </div>
                  </div>

                  {/* Right Column: 5-Photo Interactive Showcase */}
                  <div className="lg:w-1/2 w-full">
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                      {INITIAL_REVIEWS[1].images.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setActivePhotoModal(img)}
                          className={`group relative rounded-2xl overflow-hidden border border-white/20 shadow-lg cursor-pointer bg-[#050B16] ${
                            idx === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'
                          }`}
                        >
                          <img
                            src={img.url}
                            alt={img.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                          <div className="absolute bottom-2 left-2.5 right-2.5">
                            <span className="text-[11px] font-bold text-sky-300 block leading-tight">
                              {img.title}
                            </span>
                            <span className="text-[9px] text-slate-300 block">
                              {img.location}
                            </span>
                          </div>
                          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-center text-slate-400 mt-2.5">
                      Click any photo to enlarge full-resolution Singapore moments
                    </p>
                  </div>
                </div>
              </div>

              {/* ================= SPECIAL OFFICIAL TRAVELER SPOTLIGHT 2: MALAYSIA (NITHYA & PRABASHANI) ================= */}
              <div className="mb-14 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A1931] via-[#08152C] to-[#050B16] border border-sky-400/40 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-start justify-between">
                  {/* Left Column: Story Details & Narrative */}
                  <div className="lg:w-1/2 space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-widest">
                      <Camera className="w-3.5 h-3.5 text-emerald-400" />
                      <span>FEATURED TRAVEL MOMENTS • RECENT MALAYSIA GETAWAY</span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white leading-tight">
                      A Journey of Discovery with <span className="text-sky-400">Nithya Dewammini</span> & <span className="text-sky-400">Prabashani Ranasinghe</span>
                    </h2>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-xs font-bold text-amber-300 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-400/20">
                        5.0 / 5.0 Star Experience
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                      We are thrilled to share some of the most beautiful moments from the recent Malaysia getaway of{' '}
                      <strong className="text-white">Nithya Dewammini</strong> and{' '}
                      <strong className="text-white">Prabashani Ranasinghe</strong>.
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic border-l-2 border-sky-400 pl-4 py-1">
                      "From the towering heights of the Petronas Twin Towers to the vibrant culture found at the Batu Caves, their journey through Kuala Lumpur was filled with discovery and joy. Whether they were taking in the scenic views at Genting Highlands or enjoying the ultimate fun at Sunway Lagoon, it was a trip to remember! 🎡🚠"
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      At <strong>Yash Holidays</strong>, our commitment is to provide a seamless, high-quality service so you can focus on the experience while we handle all the details. A huge thank you to Nithya and Prabashani for trusting us with your international adventure. We can’t wait to help you plan your next one!
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <a
                        href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20saw%20Nithya%20and%20Prabashani's%20Malaysia%20photos%20(Genting,%20Batu%20Caves,%20Petronas,%20Sunway%20Lagoon)%20and%20would%20like%20a%20similar%20package%20quote!"
                        target="_blank"
                        rel="noreferrer"
                        className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-emerald-500/30 active:scale-95 transition-all"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-white" />
                        <span>Book Similar Malaysia Tour</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => {
                          handleSelectCountry('malaysia');
                          navigateToTab('home', 'about-tour');
                        }}
                        className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 active:scale-95 transition-all"
                      >
                        <Compass className="w-4 h-4 text-sky-400" />
                        <span>View Malaysia Itinerary</span>
                      </button>
                    </div>
                  </div>

                  {/* Right Column: 4-Photo Interactive Grid */}
                  <div className="lg:w-1/2 w-full">
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {INITIAL_REVIEWS[0].images.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => setActivePhotoModal(img)}
                          className="group relative rounded-2xl overflow-hidden border border-white/20 shadow-lg cursor-pointer bg-[#050B16] aspect-[3/4]"
                        >
                          <img
                            src={img.url}
                            alt={img.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                          <div className="absolute bottom-2.5 left-2.5 right-2.5">
                            <span className="text-[10px] font-bold text-sky-300 block leading-tight">
                              {img.title}
                            </span>
                            <span className="text-[9px] text-slate-300 block">
                              {img.location}
                            </span>
                          </div>
                          <div className="absolute top-2 right-2 p-1.5 rounded-lg bg-black/60 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                            <Camera className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      ))}
                    </div>
                    <p className="text-[11px] text-center text-slate-400 mt-2.5">
                      Click any photo to enlarge full-resolution moments
                    </p>
                  </div>
                </div>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-white/10">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold mr-1 flex items-center gap-1.5">
                    <Filter className="w-3.5 h-3.5 text-sky-400" /> Filter:
                  </span>
                  {[
                    'All',
                    'Google Reviews',
                    'Holiday Getaway',
                    'Family Tour',
                    'Honeymoon',
                    'Group Tour',
                    'Luxury Tour',
                    'Holiday Package',
                    'Beach Vacation',
                    'Visa Service'
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setReviewFilter(cat)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                        reviewFilter === cat
                          ? 'bg-sky-500 text-[#050B16] shadow-md shadow-sky-500/25 font-bold'
                          : 'bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10'
                      }`}
                    >
                      {cat === 'Google Reviews' && <GoogleIcon className="w-3.5 h-3.5" />}
                      <span>{cat}</span> {cat === 'All' ? `(${reviewsList.length})` : ''}
                    </button>
                  ))}
                </div>

                <div className="text-xs text-slate-400">
                  Showing <span className="font-bold text-white">{filteredReviews.length}</span> verified customer stories
                </div>
              </div>

              {/* Reviews Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredReviews.map((rev) => {
                  const initials = rev.name
                    ? rev.name
                        .split(' ')
                        .map((n) => n[0])
                        .slice(0, 2)
                        .join('')
                        .toUpperCase()
                    : 'YH';
                  return (
                    <div
                      key={rev.id}
                      className="group p-6 rounded-3xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/15 hover:border-sky-400/50 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between"
                    >
                      <div>
                        {/* Header: User Avatar, Name, Location & Verified Badge */}
                        <div className="flex items-start justify-between gap-3 mb-4">
                          <div className="flex items-center gap-3">
                            <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#0047AB] to-sky-500 text-white font-black text-sm flex items-center justify-center shadow-md shadow-sky-500/20 shrink-0">
                              {initials}
                            </div>
                            <div>
                              <div className="flex items-center gap-1.5">
                                <h3 className="font-bold text-white text-sm sm:text-base leading-tight">
                                  {rev.name}
                                </h3>
                                {rev.verified && (
                                  <BadgeCheck className="w-4 h-4 text-sky-400 shrink-0" title="Verified Traveler" />
                                )}
                              </div>
                              <p className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                                <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
                                <span>{rev.location || 'Sri Lanka'}</span>
                                <span className="text-white/20">•</span>
                                <span className="text-[11px] text-slate-500">{rev.date}</span>
                              </p>
                            </div>
                          </div>

                          <div className="flex items-center gap-1.5 flex-wrap justify-end">
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold bg-white/10 text-slate-200 border border-white/15">
                              <GoogleIcon className="w-3 h-3" />
                              <span>Google Review</span>
                            </span>
                            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-400/30 whitespace-nowrap">
                              {rev.tag}
                            </span>
                          </div>
                        </div>

                        {/* Star Rating & Tour Tag */}
                        <div className="flex items-center justify-between mb-3 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < (rev.rating || 5)
                                    ? 'text-amber-400 fill-amber-400'
                                    : 'text-slate-600'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs font-bold text-sky-300 truncate max-w-[180px]">
                            {rev.tour}
                          </span>
                        </div>

                        {/* Highlight Badge */}
                        {rev.highlight && (
                          <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-medium">
                            <Quote className="w-3 h-3 rotate-180 shrink-0 text-emerald-400" />
                            <span className="italic">{rev.highlight}</span>
                          </div>
                        )}

                        {/* Attached Photos Thumbnail Gallery if present */}
                        {rev.images && rev.images.length > 0 && (
                          <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mb-4 mt-2">
                            {rev.images.map((img, i) => (
                              <div
                                key={i}
                                onClick={() => setActivePhotoModal(img)}
                                className="relative rounded-xl overflow-hidden border border-white/20 aspect-square cursor-pointer hover:scale-105 transition-transform"
                                title={img.title}
                              >
                                <img
                                  src={img.url}
                                  alt={img.title}
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Review Body Text */}
                        <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic relative">
                          "{rev.review}"
                        </p>
                      </div>

                      {/* Card Footer: Edit/Customize, Delete & WhatsApp Inquiry */}
                      <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => handleOpenEditReview(rev)}
                            className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-sky-500/20 border border-white/10 hover:border-sky-400/40 text-[11px] font-semibold text-slate-300 hover:text-sky-300 flex items-center gap-1 transition-all active:scale-95"
                            title="Edit this review text & details"
                          >
                            <Edit3 className="w-3 h-3 text-sky-400" />
                            <span>Edit</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => handleDeleteReview(rev.id)}
                            className="p-1 rounded-lg bg-white/5 hover:bg-rose-500/20 border border-white/10 hover:border-rose-400/40 text-slate-400 hover:text-rose-300 transition-all active:scale-95"
                            title="Delete this review"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleShareReviewWhatsApp(rev)}
                          className="px-3 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-[#050B16] text-[11px] font-bold flex items-center gap-1.5 transition-all active:scale-95"
                          title="Ask Yash Holidays about this package on WhatsApp"
                        >
                          <WhatsAppIcon className="w-3 h-3" />
                          <span>Book Similar</span>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Customizer Banner */}
              <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-sky-950/70 via-[#0A1A38] to-sky-950/70 border border-sky-400/30 text-center max-w-4xl mx-auto shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Want to Share Your Own Experience with Yash Holidays?
                </h3>
                <p className="text-sm text-slate-300 max-w-2xl mx-auto mb-6">
                  Every journey matters to us. Submit your honest feedback, photos, or holiday story and help other Sri Lankan travelers plan with total confidence.
                </p>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={handleOpenAddReview}
                    className="px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-[#050B16] font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/30 flex items-center gap-2 active:scale-95 transition-all"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add New Customer Review</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => navigateToTab('home', 'customizer')}
                    className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 active:scale-95 transition-all"
                  >
                    <Sliders className="w-4 h-4 text-sky-400" />
                    <span>Customize Your Tour</span>
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ================= TAB 4: DEDICATED ABOUT US PAGE ================= */}
      {activeTab === 'about' && (
        <div className="pt-20">
          {/* About Us Hero */}
          <section className="relative py-16 sm:py-24 overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 z-0">
              <img
                src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=85"
                alt="About Yash Holidays Pvt Ltd"
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#050B16]/90 via-[#050B16]/75 to-[#050B16]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/15 border border-sky-400/30 text-sky-300 text-xs font-bold uppercase tracking-widest mb-4">
                <Award className="w-3.5 h-3.5" /> TRUSTED SRI LANKAN TRAVEL AGENCY
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase">
                About <span className="text-sky-400">Yash Holidays Pvt Ltd</span>
              </h1>
              <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Your all-around travel partner at <strong>276/E, Dehiwala Road, Boralesgamuwa</strong> — delivering world-class air ticketing, high-approval visit visa consultation, customized outbound tours, and travel insurance.
              </p>
            </div>
          </section>

          {/* Story, Vision & Metrics */}
          <section className="py-16 sm:py-20 bg-[#050B16]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
              {/* Key Metrics Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/15 text-center">
                  <p className="text-3xl sm:text-4xl font-black text-sky-400">10+</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-1">Visit Visa Countries</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Canada, UK, NZ, US, Japan & Asia</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/15 text-center">
                  <p className="text-3xl sm:text-4xl font-black text-sky-400">8+</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-1">Signature Outbound Markets</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Bali, Thailand, Malaysia, Singapore & more</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/15 text-center">
                  <p className="text-3xl sm:text-4xl font-black text-sky-400">50+</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-1">Global Airline Partners</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Direct & Worldwide Consolidator Fares</p>
                </div>
                <div className="p-6 rounded-3xl bg-white/[0.03] border border-white/15 text-center">
                  <p className="text-3xl sm:text-4xl font-black text-sky-400">99%</p>
                  <p className="text-xs sm:text-sm font-semibold text-white mt-1">Client Satisfaction</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">24/7 Personal Traveler Support</p>
                </div>
              </div>

              {/* Split Company Profile & Office Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-5">
                  <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                    OUR STORY & MISSION
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight">
                    Making International Travel Effortless for Sri Lankans
                  </h2>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    At <strong className="text-white">Yash Holidays Pvt Ltd</strong>, we believe planning an international trip should be just as exciting and stress-free as the holiday itself. Based in Boralesgamuwa, our experienced travel consultants handle every step of your journey under one roof.
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Whether you are applying for a Visit Visa to <span className="text-slate-200">Canada, New Zealand, the UK, USA, China, or Japan</span>, booking a family tour to <span className="text-slate-200">Thailand, Malaysia, Singapore, Vietnam, Bali, Maldives, India, or Azerbaijan</span>, or searching for the lowest airfare, we guarantee transparent pricing and dedicated support.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <div className="p-4 rounded-2xl bg-[#0A162B] border border-white/10">
                      <HeartHandshake className="w-5 h-5 text-sky-400 mb-2" />
                      <h4 className="text-sm font-bold text-white">Transparent & Honest Advice</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Clear visa checklists and genuine airfares with zero hidden charges.
                      </p>
                    </div>
                    <div className="p-4 rounded-2xl bg-[#0A162B] border border-white/10">
                      <Headphones className="w-5 h-5 text-sky-400 mb-2" />
                      <h4 className="text-sm font-bold text-white">24/7 Traveler Assistance</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Direct hotline & WhatsApp assistance from departure until you return home safely.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right: Official Corporate Card */}
                <div className="lg:col-span-6">
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-[#0B1933] to-[#050B16] border border-sky-400/30 shadow-2xl space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <YashLogo />
                      <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                        Verified Travel Agency
                      </span>
                    </div>

                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-3.5">
                        <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-400">Head Office Address</p>
                          <p className="text-white font-semibold">276/E, Dehiwala Road, Boralesgamuwa, Sri Lanka</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-400">Yash Holidays Hotline</p>
                          <a href="tel:0112312093" className="text-white font-bold text-lg hover:text-sky-400">
                            011 231 2093
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                        <div>
                          <p className="text-xs uppercase tracking-wider text-slate-400">Direct Mobile & WhatsApp</p>
                          <div className="flex flex-wrap gap-4 mt-1">
                            <a href="tel:+94775841144" className="text-white font-bold hover:text-sky-400">
                              +94 77 584 1144
                            </a>
                            <span className="text-white/30">|</span>
                            <a href="tel:+94773124859" className="text-white font-bold hover:text-sky-400">
                              +94 77 312 4859
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={() => navigateToTab('visa')}
                        className="flex-1 py-3 px-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-[#050B16] font-bold text-xs uppercase tracking-wider text-center"
                      >
                        Explore Visit Visas
                      </button>
                      <button
                        type="button"
                        onClick={() => navigateToTab('airtickets')}
                        className="flex-1 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider text-center"
                      >
                        Book Air Tickets
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* ================= TAB 1: MAIN HOME & OUTBOUND TOURS PAGE ================= */}
      {activeTab === 'home' && (
        <>
      {/* ================= HERO SECTION (REFERENCE IMAGE AESTHETIC) ================= */}
      <section id="home" className="relative min-h-screen pt-24 pb-16 flex flex-col justify-between overflow-hidden">
        {/* Background Scenic Image with Smooth Dark Fade */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeDest.heroBg}
            alt={activeDest.country}
            className={`w-full h-full object-cover object-center transition-all duration-700 scale-105 ${
              isTransitioning ? 'opacity-40 blur-sm' : 'opacity-90 blur-0'
            }`}
          />
          {/* Top Subtle Sky Vignette + Bottom Deep Midnight Fade (Like Reference Image) */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B16]/75 via-[#050B16]/25 to-[#050B16]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050B16]/60 via-transparent to-[#050B16]/60" />
        </div>

        {/* Top Country Switcher Pill Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
          <div className="flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-xs uppercase tracking-widest mb-4">
              <Sparkles className="w-3.5 h-3.5" /> Select Your Outbound Destination
            </div>

            {/* 8 Core Markets Switcher (Swipeable Carousel on Mobile, Centered on Desktop) */}
            <div className="w-full flex items-center gap-2 overflow-x-auto no-scrollbar py-2 px-2 max-w-4xl rounded-2xl bg-[#050B16]/60 backdrop-blur-xl border border-white/15 sm:flex-wrap sm:justify-center">
              {DESTINATIONS.map((dest) => {
                const active = dest.id === selectedCountryId;
                return (
                  <button
                    key={dest.id}
                    onClick={() => handleSelectCountry(dest.id)}
                    className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all flex items-center gap-1.5 shrink-0 whitespace-nowrap ${
                      active
                        ? 'bg-gradient-to-r from-[#0047AB] to-sky-500 text-white shadow-lg shadow-sky-500/30 scale-105'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Plane className={`w-3.5 h-3.5 shrink-0 ${active ? 'text-white' : 'text-sky-400/70'}`} />
                    <span>{dest.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Center Giant Magazine Title (Like "JAPAN" in Reference Image) */}
        <div className="relative z-10 my-auto py-8 sm:py-12 text-center px-4 select-none">
          <p className="text-xs sm:text-sm uppercase tracking-[0.35em] text-sky-300 font-semibold mb-1 drop-shadow">
            YASH HOLIDAYS SIGNATURE OUTBOUND TOUR
          </p>
          <h1
            className={`text-6xl sm:text-8xl md:text-[9.5rem] lg:text-[11.5rem] font-black uppercase tracking-widest leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/25 drop-shadow-2xl transition-all duration-500 ${
              isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
            }`}
          >
            {activeDest.name}
          </h1>
          <p className="max-w-2xl mx-auto mt-3 text-sm sm:text-lg text-slate-200 font-medium drop-shadow-md">
            {activeDest.tagline}
          </p>
          <div className="mt-4 inline-flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-sky-200 bg-[#050B16]/60 backdrop-blur-md px-5 py-2 rounded-full border border-sky-400/30">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-sky-400" /> {activeDest.duration}
            </span>
            <span className="text-white/30">•</span>
            <span className="flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-sky-400" /> {activeDest.flightRoute}
            </span>
            <span className="text-white/30">•</span>
            <span className="font-bold text-white">Packages from {activeDest.priceFrom}</span>
          </div>
        </div>

        {/* Bottom 5 Vertical Highlight Cards + White "Book" Pill Button (EXACT Reference Image Layout) */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-end justify-between gap-6">
            {/* 5 Vertical Thumbnail Glass Cards (Swipeable Carousel on Mobile) */}
            <div className="flex overflow-x-auto no-scrollbar gap-3 pb-2 sm:pb-0 sm:grid sm:grid-cols-5 sm:gap-4 flex-1 snap-x">
              {activeDest.highlights.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    const el = document.getElementById('about-tour');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="min-w-[150px] sm:min-w-0 snap-start flex-1 group relative h-48 sm:h-56 rounded-xl overflow-hidden border border-white/20 shadow-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:border-sky-400/70 shrink-0 sm:shrink"
                >
                  <img
                    src={item.img}
                    alt={item.label}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3">
                    <p className="text-xs sm:text-sm font-bold text-white leading-snug">
                      {item.label}
                    </p>
                    <p className="text-[11px] text-sky-300/90 mt-0.5 line-clamp-1">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Crisp White Pill "Book" Button on the Right (Matching Reference Image) */}
            <div className="flex flex-col sm:flex-row lg:flex-col items-center lg:items-end justify-end gap-3 lg:w-56">
              <div className="text-center lg:text-right hidden sm:block">
                <span className="text-[11px] uppercase tracking-widest text-sky-400 block">100% Customizable</span>
                <span className="text-xs text-slate-300">Flights + Visa + Hotels + Transfers</span>
              </div>
              <a
                href="#customizer"
                className="w-full py-3.5 px-8 rounded-lg bg-white/95 hover:bg-white text-[#050B16] font-bold text-sm tracking-wide text-center shadow-xl shadow-white/10 hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <span>Book {activeDest.name}</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= "ABOUT THE TOUR" (EXACT REFERENCE DESIGN) ================= */}
      <section id="about-tour" className="relative py-20 sm:py-28 bg-[#050B16] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Centered Section Header With Thin Horizontal Lines */}
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
            <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-white/40 to-white/60" />
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.2em] uppercase text-white text-center">
              ABOUT THE TOUR
            </h2>
            <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent via-white/40 to-white/60" />
          </div>

          {/* Interactive Country Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
            {DESTINATIONS.map((dest) => {
              const active = dest.id === selectedCountryId;
              return (
                <button
                  key={dest.id}
                  onClick={() => handleSelectCountry(dest.id)}
                  className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all border ${
                    active
                      ? 'bg-gradient-to-r from-[#0047AB] to-sky-500 border-sky-400 text-white shadow-md shadow-sky-500/30 scale-105'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  {dest.country}
                </button>
              );
            })}
          </div>

          {/* Two-Column Reference Layout Matching Screenshot Exactly */}
          {(() => {
            const stageInfo = DESTINATION_STAGES[selectedCountryId] || DESTINATION_STAGES.bali;
            const s1 = stageInfo.stages[0];
            const s2 = stageInfo.stages[1];
            const s3 = stageInfo.stages[2];

            return (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                {/* Left Column: Exactly Two Editorial Paragraphs with Lime-Yellow Highlights */}
                <div className="lg:col-span-5 flex flex-col justify-between space-y-12 sm:space-y-20 py-2">
                  <div className="space-y-2">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      We've planned a simple and convenient {stageInfo.durationDays}-day itinerary for your trip to {stageInfo.countryShort}.
                    </p>
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      You'll visit three {stageInfo.hubType}:
                    </p>
                    <p className="text-[#d4e157] font-semibold text-sm sm:text-base tracking-wide">
                      {stageInfo.highlightCities}.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                      No need to worry about routes, schedules, or finding places — everything is already organized. We'll show you where to go, what to see, and where to eat, so you can simply{' '}
                      <span className="text-[#d4e157] font-semibold">enjoy the journey.</span>
                    </p>

                    <div className="flex flex-wrap gap-3 pt-2">
                      <a
                        href="#customizer"
                        className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-[#050B16] font-bold text-xs transition-all shadow-md shadow-sky-500/20"
                      >
                        Customize {stageInfo.countryShort} Tour
                      </a>
                      <a
                        href={`https://wa.me/94775841144?text=Hi%20Yash%20Holidays!%20Please%20send%20me%20the%20itinerary%20details%20for%20${encodeURIComponent(
                          stageInfo.countryShort
                        )}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-4 py-2 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-300 hover:text-white border border-emerald-500/30 font-bold text-xs transition-all flex items-center gap-1.5"
                      >
                        <WhatsAppIcon className="w-3.5 h-3.5" />
                        <span>WhatsApp Quote</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column: 3-Node Vertical Timeline with Overlapping Photo Pairs */}
                <div className="lg:col-span-7 relative">
                  <div className="relative max-w-xl mx-auto py-2">
                    {/* The Continuous Vertical Line (Visible on mobile at left-3.5, on desktop at left-1/2) */}
                    <div className="absolute left-3.5 sm:left-1/2 top-4 bottom-4 w-[2px] -translate-x-1/2 bg-gradient-to-b from-sky-400/80 via-white/50 to-sky-400/30" />

                    {/* Node 1 */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 items-center mb-8 sm:mb-14 pl-8 sm:pl-0">
                      {/* Photos */}
                      <div className="relative h-28 sm:h-36 flex items-center justify-start sm:justify-end pr-0 sm:pr-6 order-2 sm:order-1">
                        <img
                          src={s1.img1}
                          alt={s1.place}
                          className="w-36 sm:w-40 h-24 sm:h-28 object-cover rounded-xl shadow-xl border border-white/20"
                        />
                        <img
                          src={s1.img2}
                          alt={s1.place}
                          className="w-28 sm:w-36 h-20 sm:h-24 object-cover rounded-xl shadow-2xl border border-white/30 absolute left-20 sm:left-auto sm:right-0 -bottom-2"
                        />
                      </div>

                      {/* White Center Node Dot with Glowing Pulse */}
                      <div className="absolute left-3.5 sm:left-1/2 top-4 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_#38bdf8] border-2 border-[#050B16]" />

                      {/* Days & City Name */}
                      <div className="pl-0 sm:pl-6 flex items-center justify-between order-1 sm:order-2">
                        <div>
                          <span className="block text-xs sm:text-sm text-[#d4e157] font-semibold tracking-wide">
                            {s1.days}
                          </span>
                          <h4 className="text-base sm:text-xl font-bold text-white tracking-wide mt-0.5">
                            {s1.place}
                          </h4>
                        </div>
                        <img
                          src={s2.img1}
                          alt="Teaser"
                          className="hidden sm:block w-16 h-20 object-cover rounded-lg border border-white/20 shadow-md ml-4"
                        />
                      </div>
                    </div>

                    {/* Node 2 */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 items-center mb-8 sm:mb-14 pl-8 sm:pl-0">
                      {/* Days & City Name */}
                      <div className="text-left sm:text-right pr-0 sm:pr-6 pl-0 sm:pl-0 order-1">
                        <span className="block text-xs sm:text-sm text-[#d4e157] font-semibold tracking-wide">
                          {s2.days}
                        </span>
                        <h4 className="text-base sm:text-xl font-bold text-white tracking-wide mt-0.5">
                          {s2.place}
                        </h4>
                      </div>

                      {/* White Center Node Dot with Glowing Pulse */}
                      <div className="absolute left-3.5 sm:left-1/2 top-4 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_#38bdf8] border-2 border-[#050B16]" />

                      {/* Photos */}
                      <div className="relative h-28 sm:h-36 flex items-center justify-start pl-0 sm:pl-6 order-2">
                        <img
                          src={s2.img1}
                          alt={s2.place}
                          className="w-36 sm:w-40 h-24 sm:h-28 object-cover rounded-xl shadow-xl border border-white/20"
                        />
                        <img
                          src={s2.img2}
                          alt={s2.place}
                          className="w-28 sm:w-36 h-20 sm:h-24 object-cover rounded-xl shadow-2xl border border-white/30 absolute left-20 sm:left-10 -bottom-2"
                        />
                      </div>
                    </div>

                    {/* Node 3 */}
                    <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 items-center pl-8 sm:pl-0">
                      {/* Photos */}
                      <div className="relative h-28 sm:h-36 flex items-center justify-start sm:justify-end pr-0 sm:pr-6 order-2 sm:order-1">
                        <img
                          src={s3.img1}
                          alt={s3.place}
                          className="w-36 sm:w-40 h-24 sm:h-28 object-cover rounded-xl shadow-xl border border-white/20"
                        />
                        <img
                          src={s3.img2}
                          alt={s3.place}
                          className="w-28 sm:w-36 h-20 sm:h-24 object-cover rounded-xl shadow-2xl border border-white/30 absolute left-20 sm:left-auto sm:right-0 -bottom-2"
                        />
                      </div>

                      {/* White Center Node Dot with Glowing Pulse */}
                      <div className="absolute left-3.5 sm:left-1/2 top-4 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-3.5 h-3.5 rounded-full bg-white shadow-[0_0_12px_#38bdf8] border-2 border-[#050B16]" />

                      {/* Days & City Name */}
                      <div className="pl-0 sm:pl-6 flex items-center justify-between order-1 sm:order-2">
                        <div>
                          <span className="block text-xs sm:text-sm text-[#d4e157] font-semibold tracking-wide">
                            {s3.days}
                          </span>
                          <h4 className="text-base sm:text-xl font-bold text-white tracking-wide mt-0.5">
                            {s3.place}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* ================= "WHAT'S INCLUDED" SECTION (EXACT REFERENCE IMAGE STYLE) ================= */}
      <section id="included" className="py-16 sm:py-24 bg-[#050B16] relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header with Right Horizontal Line */}
          <div className="flex items-center gap-6 mb-12">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-light tracking-[0.18em] uppercase text-white whitespace-nowrap">
              WHAT'S INCLUDED
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
          </div>

          {/* 4 Rounded Outlined Glass Cards in a Single Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Card 1: Guides */}
            <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/25 hover:border-sky-400/70 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Guides & Care</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Dedicated Yash Holidays tour coordinators & friendly local English-speaking guides who know everything about {activeDest.country}!
              </p>
            </div>

            {/* Card 2: Flights */}
            <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/25 hover:border-sky-400/70 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Plane className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Flights</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Routes:<br />
                <span className="text-sky-300 font-medium">{activeDest.flightRoute}</span>
                <br />
                Return air tickets with baggage on top global airlines.
              </p>
            </div>

            {/* Card 3: Transfers & Visa */}
            <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/25 hover:border-sky-400/70 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Navigation className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Transfers & Visa</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Private AC transfers from the airport to the hotels & all sightseeing tours, plus full Tourist Visa processing support.
              </p>
            </div>

            {/* Card 4: Hotels & Insurance */}
            <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/25 hover:border-sky-400/70 transition-all group">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400">
                  <Hotel className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white">Hotels & Insurance</h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Comfortable 3★, 4★, or 5★ accommodation (2 people per room, daily breakfasts included) + complete Travel Insurance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ALL-AROUND SERVICES SECTION ================= */}
      <section id="services" className="py-20 bg-gradient-to-b from-[#050B16] via-[#08152C] to-[#050B16]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs uppercase tracking-[0.3em] text-sky-400 font-semibold">
              ONE-STOP TRAVEL AGENCY IN SRI LANKA
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
              All-Around Travel Services by Yash Holidays
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-3">
              Whether you need a single airline ticket, urgent visa assistance, travel insurance, or a fully customized family holiday abroad, our team handles everything under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((srv) => {
              const IconComponent = srv.icon;
              return (
                <div
                  key={srv.id}
                  className="p-6 rounded-2xl bg-[#0A162B]/90 border border-white/10 hover:border-sky-400/50 transition-all flex flex-col justify-between group hover:-translate-y-1 shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0047AB] to-sky-500 flex items-center justify-center text-white shadow-lg shadow-sky-500/20">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-400/20">
                        {srv.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="text-xs text-sky-400 font-medium mt-0.5 mb-3">{srv.subtitle}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">{srv.desc}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    {srv.id === 'airtickets' ? (
                      <button
                        type="button"
                        onClick={() => navigateToTab('airtickets')}
                        className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
                      >
                        <span>Open Air Tickets Tab</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : srv.id === 'visa' ? (
                      <button
                        type="button"
                        onClick={() => navigateToTab('visa')}
                        className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
                      >
                        <span>Open Visa Services Tab</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <a
                        href={`https://wa.me/94775841144?text=Hello%20Yash%20Holidays,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                          srv.title
                        )}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-semibold text-sky-400 hover:text-sky-300 flex items-center gap-1.5"
                      >
                        <span>Inquire via WhatsApp</span>
                        <ChevronRight className="w-4 h-4" />
                      </a>
                    )}
                    <span className="text-[11px] text-slate-400">011 231 2093</span>
                  </div>
                </div>
              );
            })}

            {/* 6th Card: All 8 Outbound Markets Overview Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0047AB] to-[#062356] border border-sky-400/40 flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 text-white">
                  Our Core Outbound Markets
                </span>
                <h3 className="text-xl font-bold text-white mt-4">
                  Explore 8 Top Destinations
                </h3>
                <p className="text-xs text-sky-100 mt-1 mb-4">
                  Click any country below to load its sample itinerary:
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {DESTINATIONS.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => {
                        handleSelectCountry(d.id);
                        document.getElementById('about-tour')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="px-2.5 py-1 rounded-md bg-white/15 hover:bg-white text-white hover:text-[#0047AB] text-xs font-semibold transition-all"
                    >
                      {d.country}
                    </button>
                  ))}
                </div>
              </div>
              <a
                href="#customizer"
                className="mt-6 w-full py-2.5 rounded-xl bg-white text-[#0047AB] font-bold text-xs uppercase tracking-wider text-center hover:bg-sky-50 transition-all"
              >
                Build Custom Tour Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= INTERACTIVE CUSTOM TOUR PACKAGE BUILDER ================= */}
      <section id="customizer" className="py-20 bg-[#050B16] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0B1933] via-[#081225] to-[#050B16] border border-sky-400/30 shadow-2xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10">
              <div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-sky-400">
                  <Sparkles className="w-4 h-4" /> Tailor-Made Holidays
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  Customize Your Tour Package
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  Select your preferences below and send directly to our travel specialists for a personalized quotation.
                </p>
              </div>
              <div className="flex items-center gap-2 text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-4 py-2 rounded-full self-start md:self-center">
                <CheckCircle2 className="w-4 h-4" /> Fast Quote on WhatsApp
              </div>
            </div>

            {/* Step 1, 2, 3: Destination, Duration, Hotel Category */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
              {/* 1. Destination Picker */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                  1. Select Destination
                </label>
                <select
                  value={customConfig.destination}
                  onChange={(e) => setCustomConfig({ ...customConfig, destination: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                >
                  <option value="Thailand">Thailand (Bangkok / Phuket / Krabi)</option>
                  <option value="Malaysia">Malaysia (KL / Genting / Langkawi)</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Singapore + Malaysia Combo">Singapore + Malaysia Combo</option>
                  <option value="Vietnam">Vietnam (Hanoi / Ha Long / Da Nang)</option>
                  <option value="Bali, Indonesia">Bali, Indonesia</option>
                  <option value="Maldives">Maldives Resort Stay</option>
                  <option value="India">India (Golden Triangle / Kashmir / Kerala)</option>
                  <option value="Azerbaijan">Azerbaijan (Baku / Gabala / Shahdag)</option>
                </select>
              </div>

              {/* 2. Number of Days */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                  2. Duration ({customConfig.days} Days)
                </label>
                <input
                  type="range"
                  min="3"
                  max="14"
                  value={customConfig.days}
                  onChange={(e) => setCustomConfig({ ...customConfig, days: Number(e.target.value) })}
                  className="w-full accent-sky-400 mt-2 cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>3 Days</span>
                  <span className="text-sky-400 font-bold">{customConfig.days} Days / {customConfig.days - 1} Nights</span>
                  <span>14 Days</span>
                </div>
              </div>

              {/* 3. Hotel Star Category */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-2 font-semibold">
                  3. Hotel Category
                </label>
                <select
                  value={customConfig.hotelClass}
                  onChange={(e) => setCustomConfig({ ...customConfig, hotelClass: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                >
                  <option value="3-Star Comfort">3-Star Comfort Hotels</option>
                  <option value="4-Star Superior">4-Star Superior Hotels</option>
                  <option value="5-Star Luxury / Pool Villa">5-Star Luxury / Pool Villa</option>
                </select>
              </div>
            </div>

            {/* 4. Number of Travelers (Dedicated Spacious Full-Width Pax Selection) */}
            <div className="bg-[#050B16] border border-white/20 rounded-2xl p-4 sm:p-5 mb-6 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                <label className="text-xs uppercase tracking-wider text-sky-400 font-bold flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>4. Number of Travelers (Pax Selection)</span>
                </label>
                <span className="text-xs text-slate-300 font-semibold bg-white/10 px-3 py-1 rounded-full border border-white/10 w-fit">
                  Total: <strong className="text-sky-300">{totalCustomPax} Travelers</strong>
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                {/* Adults */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-sky-400/40 transition-colors flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">Adults</span>
                    <span className="text-[11px] font-medium text-sky-300 bg-sky-950/70 border border-sky-400/30 px-2 py-0.5 rounded-md">
                      12+ Years
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-[#050B16] border border-white/10 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => updateCustomPax(-1, 0, 0)}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-500 hover:text-white text-slate-200 font-bold flex items-center justify-center transition-all text-base border border-white/10 active:scale-90"
                      aria-label="Decrease Adults"
                    >
                      -
                    </button>
                    <span className="text-base font-extrabold text-sky-300 px-2 select-none">{customAdults}</span>
                    <button
                      type="button"
                      onClick={() => updateCustomPax(1, 0, 0)}
                      className="w-8 h-8 rounded-lg bg-sky-500/25 hover:bg-sky-500 hover:text-white text-sky-200 font-bold flex items-center justify-center transition-all text-base border border-sky-400/30 active:scale-90"
                      aria-label="Increase Adults"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-sky-400/40 transition-colors flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">Children</span>
                    <span className="text-[11px] font-medium text-sky-300 bg-sky-950/70 border border-sky-400/30 px-2 py-0.5 rounded-md">
                      2–11 Years
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-[#050B16] border border-white/10 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => updateCustomPax(0, -1, 0)}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-500 hover:text-white text-slate-200 font-bold flex items-center justify-center transition-all text-base border border-white/10 active:scale-90"
                      aria-label="Decrease Children"
                    >
                      -
                    </button>
                    <span className="text-base font-extrabold text-sky-300 px-2 select-none">{customChildren}</span>
                    <button
                      type="button"
                      onClick={() => updateCustomPax(0, 1, 0)}
                      className="w-8 h-8 rounded-lg bg-sky-500/25 hover:bg-sky-500 hover:text-white text-sky-200 font-bold flex items-center justify-center transition-all text-base border border-sky-400/30 active:scale-90"
                      aria-label="Increase Children"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 hover:border-sky-400/40 transition-colors flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-bold text-white">Infants</span>
                    <span className="text-[11px] font-medium text-sky-300 bg-sky-950/70 border border-sky-400/30 px-2 py-0.5 rounded-md">
                      Under 2 Years
                    </span>
                  </div>
                  <div className="flex items-center justify-between bg-[#050B16] border border-white/10 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => updateCustomPax(0, 0, -1)}
                      className="w-8 h-8 rounded-lg bg-white/5 hover:bg-sky-500 hover:text-white text-slate-200 font-bold flex items-center justify-center transition-all text-base border border-white/10 active:scale-90"
                      aria-label="Decrease Infants"
                    >
                      -
                    </button>
                    <span className="text-base font-extrabold text-sky-300 px-2 select-none">{customInfants}</span>
                    <button
                      type="button"
                      onClick={() => updateCustomPax(0, 0, 1)}
                      className="w-8 h-8 rounded-lg bg-sky-500/25 hover:bg-sky-500 hover:text-white text-sky-200 font-bold flex items-center justify-center transition-all text-base border border-sky-400/30 active:scale-90"
                      aria-label="Increase Infants"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. NEW SMALL MESSAGE / SPECIAL REQUESTS BOX */}
            <div className="mb-8">
              <label className="block text-xs uppercase tracking-wider text-sky-300 mb-2 font-semibold flex items-center gap-1.5">
                <MessageCircle className="w-3.5 h-3.5 text-sky-400" />
                <span>5. Small Message / Special Requests (Optional)</span>
              </label>
              <textarea
                rows={2}
                value={customConfig.specialNote}
                onChange={(e) => setCustomConfig({ ...customConfig, specialNote: e.target.value })}
                placeholder="Write a small note (e.g., preferred travel dates, child ages, honeymoon room decoration, vegetarian meals, or specific places you want to visit)..."
                className="w-full px-4 py-3 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white placeholder-slate-400 focus:border-sky-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Checkboxes for All-Around Services */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                  Included Services:
                </span>
                <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customConfig.includeFlights}
                    onChange={(e) => setCustomConfig({ ...customConfig, includeFlights: e.target.checked })}
                    className="rounded accent-sky-500 w-4 h-4"
                  />
                  <span>Air Tickets</span>
                </label>
                <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customConfig.includeVisa}
                    onChange={(e) => setCustomConfig({ ...customConfig, includeVisa: e.target.checked })}
                    className="rounded accent-sky-500 w-4 h-4"
                  />
                  <span>Visa Processing</span>
                </label>
                <label className="inline-flex items-center gap-2 text-xs sm:text-sm text-white cursor-pointer">
                  <input
                    type="checkbox"
                    checked={customConfig.includeInsurance}
                    onChange={(e) => setCustomConfig({ ...customConfig, includeInsurance: e.target.checked })}
                    className="rounded accent-sky-500 w-4 h-4"
                  />
                  <span>Travel Insurance</span>
                </label>
              </div>

              <button
                type="button"
                onClick={sendCustomToWhatsApp}
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#0047AB] to-sky-500 hover:from-[#0055CC] hover:to-sky-400 text-white font-bold text-sm shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Get Custom Package Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US SECTION (YASH HOLIDAYS PVT LTD) ================= */}
      <section id="about-us" className="py-20 bg-[#050B16] border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 text-xs font-semibold uppercase tracking-widest">
                <Award className="w-4 h-4" /> Trusted Sri Lankan Travel Partner
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
                About Yash Holidays Pvt Ltd
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Headquartered at <span className="text-white font-medium">276/E, Dehiwala Road, Boralesgamuwa</span>,{' '}
                <span className="text-sky-400 font-semibold">Yash Holidays Pvt Ltd</span> is a premier full-service outbound travel agency dedicated to making international travel effortless, affordable, and unforgettable for Sri Lankan travelers.
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">
                From issuing worldwide air tickets and managing complex visa applications to crafting luxury tailor-made holidays across{' '}
                <span className="text-slate-200">
                  Thailand, Malaysia, Singapore, Vietnam, Bali, Maldives, India, and Azerbaijan
                </span>
                , we take care of every flight, hotel, transfer, and travel insurance policy with 24/7 personal support.
              </p>

              <div className="grid grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl sm:text-3xl font-extrabold text-sky-400">8+</p>
                  <p className="text-xs text-slate-300 mt-1">Core Outbound Markets</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl sm:text-3xl font-extrabold text-sky-400">100%</p>
                  <p className="text-xs text-slate-300 mt-1">Customizable Tours</p>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-2xl sm:text-3xl font-extrabold text-sky-400">24/7</p>
                  <p className="text-xs text-slate-300 mt-1">Traveler Hotline Care</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#0A1931] to-[#050B16] border border-white/15 shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <YashLogo />
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 text-xs font-semibold">
                    Open for Inquiries
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Office Address</p>
                      <p className="text-white font-medium">276/E, Dehiwala Road, Boralesgamuwa, Sri Lanka</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Yash Holidays Hotline</p>
                      <a href="tel:0112312093" className="text-white font-bold text-base hover:text-sky-400 transition-colors">
                        011 231 2093
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MessageCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Mobile & WhatsApp Consultants</p>
                      <div className="flex flex-wrap gap-4 mt-1">
                        <a href="tel:+94775841144" className="text-white font-semibold hover:text-sky-400 transition-colors">
                          +94 77 584 1144
                        </a>
                        <span className="text-white/30">|</span>
                        <a href="tel:+94773124859" className="text-white font-semibold hover:text-sky-400 transition-colors">
                          +94 77 312 4859
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-slate-400">Official Inquiries Email</p>
                      <a href="mailto:yashholidays.lk@gmail.com" className="text-white font-semibold hover:text-sky-400 transition-colors">
                        yashholidays.lk@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: FEATURED CUSTOMER REVIEWS SHOWCASE ================= */}
      <section className="py-16 sm:py-24 bg-[#050B16] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>LOVED BY 1,450+ SRI LANKAN TRAVELERS</span>
                </div>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-bold transition-all"
                  title="View Yash Holidays on Google Reviews"
                >
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span>Google Rating: 4.9 ★★★★★ (180+ Reviews)</span>
                </a>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                What Our Travelers Say About <span className="text-sky-400">Yash Holidays</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-2xl">
                Real stories from verified travelers across Sri Lanka who explored Bali, Vietnam, Malaysia, Dubai, Thailand, and the Maldives with us.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-full bg-white hover:bg-slate-100 text-[#050B16] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all active:scale-95 shadow-md"
              >
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>Review on Google</span>
              </a>
              <button
                type="button"
                onClick={handleOpenAddReview}
                className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95"
              >
                <Plus className="w-4 h-4 text-sky-400" />
                <span>Write Review</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveNavSection('');
                  navigateToTab('reviews');
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#0047AB] to-sky-500 hover:from-[#0055CC] hover:to-sky-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/25 flex items-center gap-1.5 transition-all active:scale-95"
              >
                <span>View All Reviews ({reviewsList.length})</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsList.slice(0, 3).map((rev) => {
              const initials = rev.name
                ? rev.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()
                : 'YH';
              return (
                <div
                  key={rev.id}
                  className="p-6 rounded-3xl bg-white/[0.04] border border-white/15 hover:border-sky-400/40 backdrop-blur-xl shadow-xl flex flex-col justify-between transition-all hover:-translate-y-1"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0047AB] to-sky-500 text-white font-black text-xs flex items-center justify-center shrink-0">
                          {initials}
                        </div>
                        <div>
                          <p className="font-bold text-white text-sm leading-tight">{rev.name}</p>
                          <p className="text-[11px] text-slate-400">{rev.location}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 flex-wrap justify-end">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-white/10 text-slate-200 border border-white/15">
                          <GoogleIcon className="w-2.5 h-2.5" />
                          <span>Google</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-sky-500/15 text-sky-300 border border-sky-400/20">
                          {rev.tag}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < (rev.rating || 5)
                              ? 'text-amber-400 fill-amber-400'
                              : 'text-slate-600'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Attached Customer Photos Preview if present */}
                    {rev.images && rev.images.length > 0 && (
                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 mb-3.5">
                        {rev.images.map((img, i) => (
                          <div
                            key={i}
                            onClick={() => setActivePhotoModal(img)}
                            className="relative rounded-lg overflow-hidden border border-white/20 aspect-square cursor-pointer hover:scale-105 transition-transform"
                            title={img.title}
                          >
                            <img
                              src={img.url}
                              alt={img.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic mb-4">
                      "{rev.review}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                    <span className="font-semibold text-sky-300 truncate max-w-[170px]">{rev.tour}</span>
                    <button
                      type="button"
                      onClick={() => handleOpenEditReview(rev)}
                      className="text-[11px] text-slate-400 hover:text-sky-300 flex items-center gap-1 font-medium"
                    >
                      <Edit3 className="w-3 h-3" /> Customize
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
        </>
      )}

      {/* ================= SCENIC FOOTER, GLASS REQUEST FORM & GOOGLE MAP (EXACT REFERENCE STYLE) ================= */}
      <section id="contact" className="relative pt-20 pb-12 overflow-hidden">
        {/* Atmospheric Scenic Background Image Fading from Dark Top */}
        <div className="absolute inset-0 z-0">
          <img
            src={activeDest.footerBg}
            alt="Scenic Travel Footer"
            className="w-full h-full object-cover object-center opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B16] via-[#050B16]/70 to-[#050B16]/95" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left Column: Frosted Glass Request Card (Exact Reference Image Aesthetic) */}
            <div className="lg:col-span-5 p-8 sm:p-10 rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/25 shadow-2xl flex flex-col justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-light text-white leading-snug">
                  Want to join us,
                  <br />
                  <span className="font-semibold">but still have questions?</span>
                </h2>
                <p className="text-sm text-slate-200 mt-4 mb-8 font-medium">
                  Leave a request for tours, air tickets, visa or insurance
                </p>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 text-center space-y-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-300 mx-auto" />
                    <h3 className="text-lg font-bold text-white">Request Received!</h3>
                    <p className="text-xs text-slate-200">
                      Thank you, {formData.name || 'Traveler'}. Our Yash Holidays team in Boralesgamuwa will contact you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={sendLeadToWhatsApp}
                      className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#050B16] font-bold text-xs uppercase tracking-wider transition-all"
                    >
                      Also Send Immediately via WhatsApp
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-slate-300 underline block mx-auto"
                    >
                      Submit another inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-6">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm text-white placeholder-slate-300/80 focus:border-sky-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <input
                        type="tel"
                        required
                        placeholder="Phone / WhatsApp number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm text-white placeholder-slate-300/80 focus:border-sky-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-transparent border-b border-white/40 pb-2.5 text-xs sm:text-sm text-white focus:border-sky-400 focus:outline-none"
                      >
                        <option value="Outbound Tour Package" className="bg-[#081226]">Outbound Tour</option>
                        <option value="Customized Tour Package" className="bg-[#081226]">Custom Tour</option>
                        <option value="Air Tickets" className="bg-[#081226]">Air Tickets</option>
                        <option value="Visa Assistance" className="bg-[#081226]">Visa Assistance</option>
                        <option value="Travel Insurance" className="bg-[#081226]">Travel Insurance</option>
                      </select>

                      <select
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full bg-transparent border-b border-white/40 pb-2.5 text-xs sm:text-sm text-white focus:border-sky-400 focus:outline-none"
                      >
                        <option value="Bali" className="bg-[#081226]">Bali</option>
                        <option value="Thailand" className="bg-[#081226]">Thailand</option>
                        <option value="Malaysia" className="bg-[#081226]">Malaysia</option>
                        <option value="Singapore" className="bg-[#081226]">Singapore</option>
                        <option value="Vietnam" className="bg-[#081226]">Vietnam</option>
                        <option value="Maldives" className="bg-[#081226]">Maldives</option>
                        <option value="India" className="bg-[#081226]">India</option>
                        <option value="Azerbaijan" className="bg-[#081226]">Azerbaijan</option>
                        <option value="Other / Worldwide" className="bg-[#081226]">Worldwide</option>
                      </select>
                    </div>

                    <div>
                      <input
                        type="text"
                        placeholder="Comment (Dates, number of travelers, etc.)"
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        className="w-full bg-transparent border-b border-white/40 pb-2.5 text-sm text-white placeholder-slate-300/80 focus:border-sky-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-lg bg-white hover:bg-sky-50 text-[#050B16] font-bold text-sm tracking-wide shadow-lg transition-all mt-2"
                    >
                      Send
                    </button>
                  </form>
                )}
              </div>

              <div className="mt-6 pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                <span>Instant Hotline: 011 231 2093</span>
                <a
                  href="https://wa.me/94775841144"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-300 hover:underline font-medium"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>

            {/* Right Column: Live Embedded Google Map & Contact Cards for 276/E, Dehiwala Road, Boralesgamuwa */}
            <div className="lg:col-span-7 flex flex-col justify-between gap-6">
              {/* Contact Information Bar (4 High-Priority Contact Channels) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                <div className="p-4 rounded-2xl bg-[#050B16]/80 backdrop-blur-xl border border-white/20">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <MapPin className="w-4 h-4" /> Visit Our Office
                  </div>
                  <p className="text-xs text-white font-medium">
                    276/E, Dehiwala Road, Boralesgamuwa
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-[#050B16]/80 backdrop-blur-xl border border-white/20">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Phone className="w-4 h-4" /> Direct Hotline
                  </div>
                  <a href="tel:0112312093" className="text-sm text-white font-bold hover:text-sky-400">
                    011 231 2093
                  </a>
                  <p className="text-[10px] text-slate-400">Yash Holidays Desk</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#050B16]/80 backdrop-blur-xl border border-white/20">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <WhatsAppIcon className="w-4 h-4 text-white" /> 24/7 WhatsApp
                  </div>
                  <a href="https://wa.me/94775841144" target="_blank" rel="noreferrer" className="block text-xs sm:text-sm text-white font-bold hover:text-sky-400">
                    +94 77 584 1144
                  </a>
                  <a href="tel:+94773124859" className="block text-[11px] text-slate-300 hover:text-sky-400">
                    +94 77 312 4859
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-[#050B16]/80 backdrop-blur-xl border border-white/20">
                  <div className="flex items-center gap-2 text-sky-400 text-xs font-bold uppercase tracking-wider mb-1">
                    <Mail className="w-4 h-4" /> Official Email
                  </div>
                  <a href="mailto:yashholidays.lk@gmail.com" className="block text-xs text-white font-bold hover:text-sky-400 break-all">
                    yashholidays.lk@gmail.com
                  </a>
                  <p className="text-[10px] text-slate-400">Inquiries & Documents</p>
                </div>
              </div>

              {/* Embedded Interactive Google Map */}
              <div className="relative flex-1 min-h-[300px] sm:min-h-[340px] rounded-3xl overflow-hidden border border-white/25 shadow-2xl bg-[#081226]">
                <iframe
                  title="Yash Holidays Pvt Ltd Boralesgamuwa Google Map"
                  src="https://www.google.com/maps?q=276/E,+Dehiwala+Road,+Boralesgamuwa,+Sri+Lanka&output=embed"
                  className="w-full h-full border-0"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-[#050B16]/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/15 flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <div>
                    <p className="text-xs font-bold text-white">Yash Holidays Pvt Ltd</p>
                    <p className="text-[11px] text-slate-300">276/E, Dehiwala Road, Boralesgamuwa</p>
                  </div>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=276%2FE%2C+Dehiwala+Road%2C+Boralesgamuwa%2C+Sri+Lanka"
                    target="_blank"
                    rel="noreferrer"
                    className="ml-2 px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 text-[11px] font-semibold"
                  >
                    Directions
                  </a>
                </div>
              </div>

              {/* Google Reviews Trust Strip near map */}
              <div className="p-4 rounded-2xl bg-[#050B16]/90 border border-white/20 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center p-2 shadow-md shrink-0">
                    <GoogleIcon className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-xs sm:text-sm font-bold text-white">4.9 Star Google Rating</span>
                      <div className="flex text-amber-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-400/20">Verified</span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      180+ Authentic Customer Reviews on Google Business Profile
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-100 text-[#050B16] font-bold text-xs flex items-center gap-1.5 shadow active:scale-95 transition-all"
                  >
                    <GoogleIcon className="w-3.5 h-3.5" />
                    <span>Review on Google</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Minimalist Footer Bar */}
          <div className="mt-16 pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-white p-0.5 shrink-0 flex items-center justify-center">
                <img
                  src={yashLogo}
                  alt="Yash Holidays"
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <div>
                <span className="text-sm font-bold tracking-widest uppercase text-white block">
                  YASH HOLIDAYS PVT LTD
                </span>
                <a
                  href="mailto:yashholidays.lk@gmail.com"
                  className="text-[11px] text-slate-400 hover:text-sky-300 flex items-center gap-1 transition-colors"
                >
                  <Mail className="w-3 h-3 text-sky-400" /> yashholidays.lk@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 text-xs text-slate-300">
              <button
                type="button"
                onClick={() => {
                  setActiveNavSection('home');
                  navigateToTab('home');
                }}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveNavSection('tours');
                  navigateToTab('home', 'about-tour');
                }}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Outbound Tours
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveNavSection('');
                  navigateToTab('visa');
                }}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Visa Services
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveNavSection('');
                  navigateToTab('airtickets');
                }}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Air Tickets
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveNavSection('');
                  navigateToTab('reviews');
                }}
                className="text-amber-400 font-semibold hover:text-white transition-colors whitespace-nowrap flex items-center gap-1"
              >
                <Star className="w-3 h-3 fill-amber-400" />
                <span>Reviews</span>
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveNavSection('');
                  navigateToTab('about');
                }}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                About Us
              </button>
              <button
                type="button"
                onClick={() => navigateToTab(activeTab, 'contact')}
                className="hover:text-white transition-colors whitespace-nowrap"
              >
                Contacts
              </button>
            </div>

            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="px-6 py-2 rounded-full border border-white/40 hover:bg-white hover:text-[#050B16] text-xs font-semibold transition-all"
            >
              Book Now
            </button>
          </div>
        </div>
      </section>

      {/* ================= UNIVERSAL FLOATING QUICK-ACTION DOCK (DESKTOP SCREENS) ================= */}
      <div className="hidden md:flex flex-col gap-2.5 fixed right-3.5 sm:right-6 top-28 z-40">
        {/* WhatsApp Quick Chat */}
        <a
          href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20visited%20your%20website%20and%20would%20like%20to%20plan%20a%20trip."
          target="_blank"
          rel="noreferrer"
          title="WhatsApp Yash Holidays (+94 77 584 1144)"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-emerald-500 hover:bg-emerald-400 text-[#050B16] shadow-xl shadow-emerald-500/40 border border-emerald-300 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 text-[#050B16]" />
          <span className="hidden xl:group-hover:inline-block absolute right-14 bg-[#081226]/95 text-white text-xs px-2.5 py-1 rounded-lg border border-white/10 whitespace-nowrap shadow-xl">
            WhatsApp Yash Holidays
          </span>
        </a>

        {/* Direct Phone Hotline */}
        <a
          href="tel:0112312093"
          title="Call Hotline: 011 231 2093"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-[#0047AB] to-sky-500 hover:from-[#0055CC] hover:to-sky-400 text-white shadow-xl shadow-sky-500/40 border border-sky-400/50 flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          <span className="hidden xl:group-hover:inline-block absolute right-14 bg-[#081226]/95 text-white text-xs px-2.5 py-1 rounded-lg border border-white/10 whitespace-nowrap shadow-xl">
            Call 011 231 2093
          </span>
        </a>

        {/* Official Email */}
        <a
          href="mailto:yashholidays.lk@gmail.com"
          title="Email: yashholidays.lk@gmail.com"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#081226]/90 hover:bg-white/20 backdrop-blur-xl border border-white/25 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
          <span className="hidden xl:group-hover:inline-block absolute right-14 bg-[#081226]/95 text-white text-xs px-2.5 py-1 rounded-lg border border-white/10 whitespace-nowrap shadow-xl">
            yashholidays.lk@gmail.com
          </span>
        </a>

        {/* Office Direction / Google Map */}
        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('contact');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          title="Visit Boralesgamuwa Office Map"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#081226]/90 hover:bg-white/20 backdrop-blur-xl border border-white/25 text-white shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
        >
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400" />
          <span className="hidden xl:group-hover:inline-block absolute right-14 bg-[#081226]/95 text-white text-xs px-2.5 py-1 rounded-lg border border-white/10 whitespace-nowrap shadow-xl">
            276/E, Boralesgamuwa
          </span>
        </button>
      </div>

      {/* ================= FIXED LUXURY MOBILE BOTTOM ACTION BAR (MATCHING USER SCREENSHOT: Call | Map | Tours | Book) ================= */}
      <nav
        aria-label="Mobile Quick Action Navigation"
        className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#050B16]/95 backdrop-blur-2xl border-t border-white/15 px-4 py-2 shadow-[0_-10px_30px_rgba(0,0,0,0.85)]"
      >
        <div className="flex items-center justify-between max-w-md mx-auto">
          {/* 1. Call */}
          <a
            href="tel:0112312093"
            className="flex-1 flex flex-col items-center justify-center py-1 text-slate-300 hover:text-white transition-colors"
          >
            <Phone className="w-5 h-5 text-sky-400 mb-1" />
            <span className="text-[11px] font-medium tracking-tight">Call</span>
          </a>

          {/* 2. Map */}
          <button
            type="button"
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="flex-1 flex flex-col items-center justify-center py-1 text-slate-300 hover:text-white transition-colors"
          >
            <MapPin className="w-5 h-5 text-sky-400 mb-1" />
            <span className="text-[11px] font-medium tracking-tight">Map</span>
          </button>

          {/* 3. Tours */}
          <button
            type="button"
            onClick={() => {
              setActiveNavSection('tours');
              navigateToTab('home', 'about-tour');
            }}
            className={`flex-1 flex flex-col items-center justify-center py-1 transition-colors ${
              activeTab === 'home' && activeNavSection === 'tours'
                ? 'text-sky-400 font-bold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            <Compass className="w-5 h-5 text-sky-400 mb-1" />
            <span className="text-[11px] font-medium tracking-tight">Tours</span>
          </button>

          {/* 4. Book (Exact pill button with icon & text from user screenshot) */}
          <button
            type="button"
            onClick={() => navigateToTab('home', 'customizer')}
            className="flex-1 flex flex-col items-center justify-center group"
          >
            <div className="w-16 h-10 rounded-full bg-gradient-to-r from-[#0284c7] to-[#0ea5e9] flex flex-col items-center justify-center text-white shadow-lg shadow-sky-500/40 border border-sky-300/40 group-active:scale-95 transition-all">
              <CalendarCheck className="w-4 h-4 text-white" />
              <span className="text-[10px] font-bold text-white tracking-tight">Book</span>
            </div>
          </button>
        </div>
      </nav>

      {/* ================= INTERACTIVE REVIEW CUSTOMIZER MODAL DIALOG ================= */}
      {isReviewModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#08152C] border border-sky-400/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] my-8">
            <button
              type="button"
              onClick={() => setIsReviewModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
              aria-label="Close review modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-6">
              <span className="text-xs uppercase tracking-widest text-sky-400 font-bold">
                {editingReviewId ? 'EDIT CUSTOMER REVIEW' : 'ADD NEW CUSTOMER REVIEW'}
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {editingReviewId ? 'Customize Customer Review' : 'Share Your Travel Experience'}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {editingReviewId
                  ? 'Update the review text, rating, or traveler details below. Changes are saved automatically.'
                  : 'Add a new genuine traveler review. It will instantly appear on the website and reviews list.'}
              </p>
            </div>

            <form onSubmit={handleSaveReview} className="space-y-4 text-left">
              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1 font-semibold">
                  Customer / Traveler Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Kasun & Nimanthi Perera"
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1 font-semibold">
                    Home City / Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Colombo, Sri Lanka"
                    value={reviewForm.location}
                    onChange={(e) => setReviewForm({ ...reviewForm, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1 font-semibold">
                    Travel Date / Year
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. November 2026"
                    value={reviewForm.date}
                    onChange={(e) => setReviewForm({ ...reviewForm, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1 font-semibold">
                    Tour / Destination Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Bali 5D4N Luxury Tour"
                    value={reviewForm.tour}
                    onChange={(e) => setReviewForm({ ...reviewForm, tour: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1 font-semibold">
                    Category Tag
                  </label>
                  <select
                    value={reviewForm.tag}
                    onChange={(e) => setReviewForm({ ...reviewForm, tag: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                  >
                    <option value="Google Review">Google Review (Verified)</option>
                    <option value="Family Tour">Family Tour</option>
                    <option value="Holiday Getaway">Holiday Getaway</option>
                    <option value="Honeymoon">Honeymoon</option>
                    <option value="Group Tour">Group Tour</option>
                    <option value="Luxury Tour">Luxury Tour</option>
                    <option value="Holiday Package">Holiday Package</option>
                    <option value="Beach Vacation">Beach Vacation</option>
                    <option value="Visa Service">Visa Service</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1 font-semibold">
                  Star Rating (Click to set 1-5 Stars)
                </label>
                <div className="flex items-center gap-2 p-2.5 bg-[#050B16] rounded-xl border border-white/15">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                      className="p-1 hover:scale-125 transition-transform"
                    >
                      <Star
                        className={`w-6 h-6 ${
                          star <= reviewForm.rating
                            ? 'text-amber-400 fill-amber-400'
                            : 'text-slate-600'
                        }`}
                      />
                    </button>
                  ))}
                  <span className="ml-3 text-xs font-bold text-amber-400">
                    {reviewForm.rating} / 5 Stars
                  </span>
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1 font-semibold">
                  Highlight Quote / Headline
                </label>
                <input
                  type="text"
                  placeholder="e.g. Outstanding 5-Star Service & Villa"
                  value={reviewForm.highlight}
                  onChange={(e) => setReviewForm({ ...reviewForm, highlight: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-slate-300 mb-1 font-semibold">
                  Review Text / Feedback *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the experience with Yash Holidays (hotels, guides, transfers, visa assistance, pricing)..."
                  value={reviewForm.review}
                  onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050B16] border border-white/20 text-sm text-white focus:border-sky-400 focus:outline-none resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(false)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-semibold transition-all"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#0047AB] to-sky-500 hover:from-[#0055CC] hover:to-sky-400 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-sky-500/30 flex items-center gap-1.5 active:scale-95 transition-all"
                >
                  <Check className="w-4 h-4" />
                  <span>{editingReviewId ? 'Save Changes' : 'Publish Review'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Lightbox Modal for Full-Resolution Customer Review Photos */}
      {activePhotoModal && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setActivePhotoModal(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#050B16] border border-white/20 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[95vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-white/[0.02]">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-lg bg-sky-500/20 text-sky-400">
                  <Camera className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {activePhotoModal.title || 'Customer Travel Moment'}
                  </h4>
                  <p className="text-[11px] text-sky-300">
                    {activePhotoModal.location || 'Malaysia Getaway'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActivePhotoModal(null)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all active:scale-95"
                aria-label="Close photo"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Photo */}
            <div className="relative flex-1 flex items-center justify-center bg-black/60 p-2 sm:p-4 overflow-hidden">
              <img
                src={activePhotoModal.url}
                alt={activePhotoModal.title}
                className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-white/10 bg-[#050B16] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-slate-300 text-xs">
                Verified Yash Holidays Traveler Photo • Malaysia Tour
              </span>
              <a
                href={`https://wa.me/94775841144?text=${encodeURIComponent(
                  `Hello Yash Holidays! I love this customer photo at ${activePhotoModal.title} (${activePhotoModal.location}). Can you share a tour package for this destination?`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md active:scale-95 transition-all"
              >
                <WhatsAppIcon className="w-3.5 h-3.5" />
                <span>Inquire About This Tour</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}