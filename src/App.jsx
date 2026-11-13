import React, { useState, useEffect } from 'react';
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
  Sliders
} from 'lucide-react';
import { HeaderShell } from './components/HeaderShell';
import { HomeSections } from './components/HomeSections';
import {
  VisaServicesPage,
  AirTicketsPage,
  ReviewsPage,
  AboutUsPage,
  ContactUsPage
} from './components/DedicatedPages';
import { ContactSection, SiteFooter } from './components/ContactAndFooter';
import { SiteModals } from './components/SiteModals';

const GOOGLE_REVIEWS_URL = "https://maps.app.goo.gl/m1iJbk6p6WLAQQY4A";
const GOOGLE_MAPS_LOCATION_URL = "https://maps.app.goo.gl/m1iJbk6p6WLAQQY4A";
const INSTAGRAM_URL = "https://www.instagram.com/yash_holidays_pvt_ltd?psln=MTN0MnFvendoem5hbg==";
const FACEBOOK_URL = "https://www.facebook.com/share/1EQFzZnPzs/";
const OFFICE_ADDRESS = "276A/2E, Dehiwala Road, Boralesgamuwa, Sri Lanka";
const HOTLINE_PHONE = "011 231 2093";
const WHATSAPP_PHONE = "+94 77 584 1144";
const OFFICIAL_EMAIL = "yashholidays.lk@gmail.com";

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
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/0005574_-_Wat_Phra_Kaew_006.jpg/1280px-0005574_-_Wat_Phra_Kaew_006.jpg',
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
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Dataran_Merdeka_2.jpg/1280px-Dataran_Merdeka_2.jpg',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Twins_SE_Asia_2019_%2849171985716%29.jpg/1280px-The_Twins_SE_Asia_2019_%2849171985716%29.jpg'
      },
      {
        days: 'Days 3–4',
        place: 'Genting Highlands',
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Genting_SkyWorlds_Theme_Park.jpg/1280px-Genting_SkyWorlds_Theme_Park.jpg',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Genting-Highlands_Malaysia_Chin-Swee-Caves-Temple-02.jpg/1280px-Genting-Highlands_Malaysia_Chin-Swee-Caves-Temple-02.jpg'
      },
      {
        days: 'Day 5',
        place: 'Putrajaya & Merdeka Square',
        img1: 'https://images.unsplash.com/photo-1508062878650-88b52897f298?auto=format&fit=crop&w=600&q=80',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/16/Masjid_Putra%2C_Putrajaya%2C_Malaysia.jpg/1280px-Masjid_Putra%2C_Putrajaya%2C_Malaysia.jpg'
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
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2e/Singapore_Skyline_2019-10.jpg/1280px-Singapore_Skyline_2019-10.jpg'
      },
      {
        days: 'Day 3',
        place: 'Universal Studios',
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Universal_Studios_Singapore_globe_%28125026%29.jpg/1280px-Universal_Studios_Singapore_globe_%28125026%29.jpg',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/1_sentosa_aerial_2016.jpg/1280px-1_sentosa_aerial_2016.jpg'
      },
      {
        days: 'Days 4–5',
        place: 'Sentosa & Changi',
        img1: 'https://images.unsplash.com/photo-1508964942454-1a56651d54ac?auto=format&fit=crop&w=600&q=80',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/At_Jewel_Changi%2C_Singapore_2023_44.jpg/1280px-At_Jewel_Changi%2C_Singapore_2023_44.jpg'
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
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Twins_SE_Asia_2019_%2849171985716%29.jpg/1280px-The_Twins_SE_Asia_2019_%2849171985716%29.jpg',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8f/Batu_Caves_stairs_2022-05.jpg/1280px-Batu_Caves_stairs_2022-05.jpg'
      },
      {
        days: 'Days 4–5',
        place: 'Genting to Singapore',
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0b/Genting-Highlands_Malaysia_Chin-Swee-Caves-Temple-02.jpg/1280px-Genting-Highlands_Malaysia_Chin-Swee-Caves-Temple-02.jpg',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Marina_Bay_Sands_%28I%29.jpg/1280px-Marina_Bay_Sands_%28I%29.jpg'
      },
      {
        days: 'Days 6–7',
        place: 'Universal & Departure',
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/ff/Universal_Studios_Singapore_globe_%28125026%29.jpg/1280px-Universal_Studios_Singapore_globe_%28125026%29.jpg',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/At_Jewel_Changi%2C_Singapore_2023_44.jpg/1280px-At_Jewel_Changi%2C_Singapore_2023_44.jpg'
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
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Thap_Rua.jpg/1280px-Thap_Rua.jpg',
        img2: 'https://images.unsplash.com/photo-1509030450996-dd1a26dda07a?auto=format&fit=crop&w=600&q=80'
      },
      {
        days: 'Days 3–4',
        place: 'Ha Long Bay Cruise',
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/79/Ha_Long_Bay_in_2019.jpg/1280px-Ha_Long_Bay_in_2019.jpg',
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
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Delhi_fort.jpg/1280px-Delhi_fort.jpg',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/India_Gate_front.jpg/1280px-India_Gate_front.jpg'
      },
      {
        days: 'Days 3–4',
        place: 'Agra',
        img1: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=600&q=80',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8d/Agra_03-2016_16_Agra_Fort.jpg/1280px-Agra_03-2016_16_Agra_Fort.jpg'
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
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Flmtwrs.jpg/1280px-Flmtwrs.jpg',
        img2: 'https://thumb.wikimedia.org/wikipedia/en/thumb/d/d3/Heydar_Aliyev_Cultural_Center.jpg/1280px-Heydar_Aliyev_Cultural_Center.jpg'
      },
      {
        days: 'Days 3–4',
        place: 'Old City & Gabala Lake',
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/50/Palace_of_Shirvanshahs_common.JPG/1280px-Palace_of_Shirvanshahs_common.JPG',
        img2: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Q%C9%99b%C9%99l%C9%99_%C5%9F%C9%99h%C9%99rinin_Tufanda%C4%9Fdan_g%C3%B6r%C3%BCn%C3%BC%C5%9F%C3%BC.jpg/1280px-Q%C9%99b%C9%99l%C9%99_%C5%9F%C9%99h%C9%99rinin_Tufanda%C4%9Fdan_g%C3%B6r%C3%BCn%C3%BC%C5%9F%C3%BC.jpg'
      },
      {
        days: 'Day 5',
        place: 'Shahdag Mountain Resort',
        img1: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/59/Shahdag01.jpg/1280px-Shahdag01.jpg',
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
      { label: '3 regions in Bali', sub: 'Ubud • Penida • Seminyak', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=85' },
      { label: '6 days', sub: 'Curated island pace', img: 'https://images.unsplash.com/photo-1532186651327-6ac23687d189?auto=format&fit=crop&w=800&q=85' },
      { label: 'iconic temples & nature', sub: 'Lempuyang Gates of Heaven', img: 'https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=800&q=85' },
      { label: 'island dining', sub: 'Jimbaran candlelit seafood dinner', img: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=800&q=85' },
      { label: 'enjoy the vibe', sub: 'Kelingking T-Rex Cliff Penida', img: 'https://images.unsplash.com/photo-1584810359583-96fc3448beaa?auto=format&fit=crop&w=800&q=85' }
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
      { label: '3 cities in Thailand', sub: 'Bangkok • Pattaya • Phuket', img: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=800&q=85' },
      { label: '6 days', sub: 'Island & city combo', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=800&q=85' },
      { label: 'private island tours', sub: 'Phi Phi Maya Bay speedboat', img: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=85' },
      { label: 'street food & cruises', sub: 'Chao Phraya dinner cruise & food', img: 'https://images.unsplash.com/photo-1563492065599-3520f775eeed?auto=format&fit=crop&w=800&q=85' },
      { label: 'enjoy the vibe', sub: 'Sanctuary of Truth Pattaya', img: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=85' }
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
      { label: '3 hubs in Malaysia', sub: 'KL • Genting • Sunway', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?auto=format&fit=crop&w=800&q=85' },
      { label: '5 days', sub: 'Family & couple favorite', img: 'https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?auto=format&fit=crop&w=800&q=85' },
      { label: 'iconic landmarks', sub: 'Petronas Towers & KLCC Park', img: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?auto=format&fit=crop&w=800&q=85' },
      { label: 'cable car & parks', sub: 'Awana SkyWay & Theme Park', img: 'https://images.unsplash.com/photo-1605647540924-852290f6b0d5?auto=format&fit=crop&w=800&q=85' },
      { label: 'Batu Caves', sub: 'Murugan Temple & rainbow stairs', img: 'https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=85' }
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
    heroBg: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1920&q=85',
    footerBg: 'https://images.unsplash.com/photo-1496568816309-51d7c20e3b21?auto=format&fit=crop&w=1920&q=80',
    introText: "Experience the Lion City with zero stress. Our curated Singapore itinerary covers Marina Bay Sands, Gardens by the Bay, Sentosa Island, and Universal Studios in one sleek package.",
    highlights: [
      { label: '3 iconic precincts', sub: 'Marina Bay • Sentosa • Orchard', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=800&q=85' },
      { label: '5 days', sub: 'Action-packed luxury', img: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?auto=format&fit=crop&w=800&q=85' },
      { label: 'world-class wonders', sub: 'Supertree Grove & Cloud Forest', img: 'https://images.unsplash.com/photo-1506351421178-63b52a2d2562?auto=format&fit=crop&w=800&q=85' },
      { label: 'theme park thrills', sub: 'Universal Studios Sentosa', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=85' },
      { label: 'enjoy the vibe', sub: 'Jewel Changi Rain Vortex', img: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=85' }
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
      { label: '3 gems in Vietnam', sub: 'Hanoi • Ha Long • Da Nang', img: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=85' },
      { label: '6 days', sub: 'Cruise & heritage tour', img: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=800&q=85' },
      { label: 'breathtaking views', sub: 'Golden Hand Bridge Ba Na Hills', img: 'https://images.unsplash.com/photo-1568849676085-51415703900f?auto=format&fit=crop&w=800&q=85' },
      { label: 'overnight bay cruise', sub: 'Ha Long luxury deck cruise', img: 'https://images.unsplash.com/photo-1504457047772-27faf1c00561?auto=format&fit=crop&w=800&q=85' },
      { label: 'enjoy the vibe', sub: 'Hoi An lantern boat on canal', img: 'https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=800&q=85' }
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
      { label: 'private island resorts', sub: 'North & South Malé Atolls', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=800&q=85' },
      { label: '4 days', sub: 'Pure tropical bliss', img: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=800&q=85' },
      { label: 'luxury water villas', sub: 'Overwater decks & plunge pool', img: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?auto=format&fit=crop&w=800&q=85' },
      { label: 'all-inclusive dining', sub: 'Ocean dining & candlelit sunset', img: 'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=800&q=85' },
      { label: 'enjoy the vibe', sub: 'Reef sharks, rays & coral diving', img: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=85' }
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
      { label: '3 royal cities', sub: 'Delhi • Agra • Jaipur', img: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=85' },
      { label: '6 days', sub: 'Heritage & culture', img: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=85' },
      { label: 'timeless wonders', sub: 'Hawa Mahal Palace of Winds', img: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&w=800&q=85' },
      { label: 'authentic cuisine', sub: 'Royal Mughlai & street chai', img: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=800&q=85' },
      { label: 'enjoy the vibe', sub: 'Amer Fort & Jaipur palaces', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=85' }
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
      { label: '3 regions explored', sub: 'Baku • Gabala • Shahdag', img: 'https://images.unsplash.com/photo-1596306499300-0b7b1689b9f6?auto=format&fit=crop&w=800&q=85' },
      { label: '6 days', sub: 'Euro-Asian luxury', img: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=800&q=85' },
      { label: 'architectural icons', sub: 'Heydar Aliyev Center & Towers', img: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=85' },
      { label: 'mountain cable cars', sub: 'Shahdag & Tufandag snow resort', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=85' },
      { label: 'enjoy the vibe', sub: 'Old City Maiden Tower & Caspian', img: 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?auto=format&fit=crop&w=800&q=85' }
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
    processingTime: 'Contact us for the latest timeline',
    contactUs: true,
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
    processingTime: '4 to 5 weeks',
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
    processingTime: '14 working days',
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
    processingTime: 'Contact us for the latest timeline',
    contactUs: true,
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
    processingTime: '7 working days',
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
    processingTime: 'At least 7 working days',
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
    processingTime: '3 weeks',
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
    processingTime: '5 working days',
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
    processingTime: '5 working days',
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
    processingTime: '5 working days',
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
    date: '2 weeks ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 42,
    avatarBg: 'bg-emerald-600',
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
      'We are thrilled to share some of the most beautiful moments from our Malaysia getaway with Yash Holidays! From the towering heights of the Petronas Twin Towers to the vibrant culture at Batu Caves, our journey through Kuala Lumpur was filled with discovery and joy. Genting Highlands and Sunway Lagoon were unforgettable! Thank you Yash Holidays for the seamless, high-quality service!',
    ownerResponse:
      'Thank you so much Nithya and Prabashani for trusting Yash Holidays with your international adventure! We can’t wait to help you plan your next holiday! ❤️✈️'
  },
  {
    id: 'rev-singapore-family',
    name: 'Singapore Family Travel Experience',
    location: 'Colombo, Sri Lanka',
    tour: 'Singapore Family Holiday Package',
    tag: 'Family Tour',
    rating: 5,
    date: '3 weeks ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 38,
    avatarBg: 'bg-sky-600',
    highlight: 'Universal Studios, Merlion Park, Gardens by the Bay & Jewel Changi',
    images: [
      {
        url: singaporeReview1,
        title: 'Merlion Park Waterfront with Singapore Skyline',
        location: 'Marina Bay, Singapore'
      },
      {
        url: singaporeReview2,
        title: 'Universal Studios Singapore Iconic Globe Entry',
        location: 'Resorts World Sentosa, Singapore'
      },
      {
        url: singaporeReview3,
        title: 'Gardens by the Bay Flower Dome & Supertree Valley',
        location: 'Marina Gardens, Singapore'
      },
      {
        url: singaporeReview4,
        title: 'Jewel Changi Rain Vortex Indoor Waterfall',
        location: 'Changi Airport, Singapore'
      },
      {
        url: singaporeReview5,
        title: 'Sri Veeramakaliamman Temple Cultural Heritage',
        location: 'Serangoon Road, Singapore'
      }
    ],
    review:
      'An Absolutely Amazing Singapore Experience! 🇸🇬✨ A special thank you to Mr. Dhananjaya, who helped me so much from the very beginning with planning the trip and arranging the perfect package. The prices were quoted very conveniently according to my requirements. Also, a big thank you to Mr. Kasun for helping me with the flight ticket booking smoothly. Everything was well organized and filled with beautiful memories!',
    ownerResponse:
      'Thank you so much for your kind words and appreciation! Mr. Dhananjaya, Mr. Kasun, and our entire Yash Holidays team are overjoyed that you and your family had such an unforgettable Singapore experience. See you soon for your next trip! 🙏❤️'
  },
  {
    id: 'rev-ruvinda-vietnam',
    name: 'Ruvinda Perera',
    location: 'Kandy, Sri Lanka',
    tour: 'Vietnam 7D6N Hanoi, Ha Long & Da Nang',
    tag: 'Holiday Package',
    rating: 4,
    date: '1 month ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 19,
    avatarBg: 'bg-amber-600',
    highlight: 'Ha Long Luxury Cruise & Golden Bridge Ba Na Hills',
    review:
      'Wonderful holiday package to Vietnam! Ha Long Bay overnight cruise and the Golden Bridge at Ba Na Hills were beyond expectations. Tour coordinator Mr. Dhananjaya was always reachable. Flight timing on the return leg was slightly tiring, but overall outstanding travel service. 4 stars and highly recommended!',
    ownerResponse:
      'Thank you Ruvinda! We are delighted that you enjoyed Ba Na Hills and the Ha Long Bay cruise. We appreciate your valuable feedback regarding airline flight schedules and look forward to welcoming you on your next journey!'
  },
  {
    id: 'rev-pradeep-visa',
    name: 'Pradeep Kumara',
    location: 'Boralesgamuwa, Sri Lanka',
    tour: 'UK & Canada Visit Visa Consultation',
    tag: 'Visa Service',
    rating: 5,
    date: '1 month ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 29,
    avatarBg: 'bg-indigo-600',
    highlight: 'Embassy Cover Letter & Document Audit',
    review:
      'I visited their office at 276A/2E, Dehiwala Road, Boralesgamuwa. Their documentation audit and professional embassy cover letter drafting made all the difference. Got my visit visa approved smoothly without any hassle! Outstanding dedication.',
    ownerResponse:
      'Thank you Pradeep! Congratulations on your visa approval. It was our pleasure assisting you at our Boralesgamuwa office.'
  },
  {
    id: 'rev-mahesh-thailand',
    name: 'Mahesh Senanayake',
    location: 'Colombo, Sri Lanka',
    tour: 'Thailand Bangkok & Pattaya Getaway',
    tag: 'Group Tour',
    rating: 4,
    date: '2 months ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 14,
    avatarBg: 'bg-teal-600',
    highlight: 'Wat Arun Temple & Coral Island Speedboat',
    review:
      'Booked Thailand tour for 4 friends. Wat Arun temple, Coral Island speedboat, and Pattaya hotel were superb. SriLankan Airlines departure was delayed by an hour, but Yash Holidays private chauffeur was waiting patiently at BKK airport with our name board. Very reliable agency.',
    ownerResponse:
      'Thank you Mahesh! We appreciate your patience with the airline schedule and are glad our private airport team took great care of you.'
  },
  {
    id: 'rev-chamari-dubai',
    name: 'Chamari Alwis',
    location: 'Negombo, Sri Lanka',
    tour: 'Dubai & Abu Dhabi Desert Escape',
    tag: 'Luxury Tour',
    rating: 5,
    date: '2 months ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 24,
    avatarBg: 'bg-purple-600',
    highlight: 'VIP Desert Safari & 5-Star Stay',
    review:
      'From 30-day Dubai tourist visa stamping to 5-star hotel bookings and VIP desert safari with dune bashing, Yash Holidays took care of every single detail. Their team in Boralesgamuwa is extremely friendly and professional.',
    ownerResponse:
      'Thank you Chamari! We look forward to planning your next luxury getaway.'
  },
  {
    id: 'rev-anura-india',
    name: 'Anura Dissanayake',
    location: 'Matara, Sri Lanka',
    tour: 'India Golden Triangle (Delhi, Agra & Jaipur)',
    tag: 'Holiday Package',
    rating: 4,
    date: '3 months ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 12,
    avatarBg: 'bg-rose-600',
    highlight: 'Taj Mahal Sunrise & Private Innova Chauffeur',
    review:
      'Sunrise at Taj Mahal Agra and Amer Fort in Jaipur were breathtaking historical experiences. AC Innova vehicle and driver Mr. Sharma were very polite. Jaipur hotel check-in took 20 minutes, but Yash Holidays resolved it promptly. A solid 4-star experience!',
    ownerResponse:
      'Thank you Anura! We are glad you enjoyed the Taj Mahal and Jaipur palaces. Your feedback helps us continually elevate our partner hotels.'
  },
  {
    id: 'rev-kasun-bali',
    name: 'Kasun & Nimanthi Perera',
    location: 'Colombo, Sri Lanka',
    tour: 'Bali Tropical Island Honeymoon',
    tag: 'Honeymoon',
    rating: 5,
    date: '3 months ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 36,
    avatarBg: 'bg-pink-600',
    highlight: 'Private Pool Villa & Jimbaran Seafood Dinner',
    review:
      'Our Bali honeymoon was like a dream! Kelingking cliff tour in Nusa Penida and sunset candlelit seafood dinner at Jimbaran beach were arranged flawlessly. Thank you Yash Holidays for making our honeymoon unforgettable.',
    ownerResponse:
      'Warmest congratulations on your wedding Kasun & Nimanthi! Wishing you a lifetime of beautiful travels together.'
  },
  {
    id: 'rev-sanjeewa-tickets',
    name: 'Sanjeewa Jayawardena',
    location: 'Gampaha, Sri Lanka',
    tour: 'Worldwide Air Ticket & Baggage Consultation',
    tag: 'Air Tickets',
    rating: 5,
    date: '4 months ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 21,
    avatarBg: 'bg-blue-600',
    highlight: 'Best Fare Airline & 46kg Baggage Allowance',
    review:
      'Best air ticket prices in Sri Lanka. Mr. Kasun found us Qatar Airways flights to London with 46kg baggage allowance at much lower cost than online booking sites. Seat selection and web check-in were done for us. Top-tier ticketing team!',
    ownerResponse:
      'Thank you Sanjeewa! Ensuring the best airline fares and hassle-free flight booking is always our priority.'
  },
  {
    id: 'rev-tharushi-maldives',
    name: 'Tharushi & Friends',
    location: 'Colombo, Sri Lanka',
    tour: 'Maldives Overwater Resort Getaway',
    tag: 'Beach Vacation',
    rating: 5,
    date: '5 months ago',
    source: 'Google',
    googleVerified: true,
    helpfulCount: 18,
    avatarBg: 'bg-cyan-600',
    highlight: 'Direct Speedboat Transfer & Water Villa',
    review:
      'The speedboat transfer was ready right as we landed in Male Velana airport. The overwater villa recommended by Yash Holidays was absolute paradise. Pure luxury and crystal-clear lagoon. Thank you Yash Holidays team!',
    ownerResponse:
      'Thank you Tharushi! Maldives is always pure magic, and we are glad you had an incredible beach holiday.'
  }
];

export default function App() {
  // 5 MAIN TABS: 'home' | 'visa' | 'airtickets' | 'reviews' | 'about'
  const [activeTab, setActiveTab] = useState(() => {
    try {
      if (typeof window !== 'undefined') {
        const p = new URLSearchParams(window.location.search).get('tab');
        if (['visa', 'airtickets', 'reviews', 'about', 'contact'].includes(p)) {
          return p;
        }
      }
    } catch {}
    return 'home';
  });
  const [activeNavSection, setActiveNavSection] = useState('home'); // 'home' | 'tours'
  const [selectedCountryId, setSelectedCountryId] = useState('bali');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Custom Tour Builder State (with Adults, Children, Infants, Departure & Arrival Dates)
  const [customConfig, setCustomConfig] = useState({
    destination: 'Bali, Indonesia',
    days: 6,
    travelers: 2,
    adults: 2,
    children: 0,
    infants: 0,
    departureDate: '',
    arrivalDate: '',
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
    const isSameTab = tab === activeTab;
    setActiveTab(tab);
    setMobileMenuOpen(false);
    if (!sectionId) {
      window.scrollTo({ top: 0, left: 0, behavior: isSameTab ? 'smooth' : 'instant' });
      if (!isSameTab) {
        requestAnimationFrame(() => window.scrollTo({ top: 0, left: 0, behavior: 'instant' }));
      }
      return;
    }
    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        const y = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
      }
    }, 80);
  };

  const handleSelectCountry = (id) => {
    if (id === selectedCountryId) return;
    setIsTransitioning(false);
    setSelectedCountryId(id);
    const found = DESTINATIONS.find((d) => d.id === id);
    if (found) {
      setCustomConfig((prev) => ({ ...prev, destination: found.country }));
      setFormData((prev) => ({ ...prev, destination: found.country }));
    }
    setActiveTimelineDay(0);
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

    const dateLine = customConfig.departureDate || customConfig.arrivalDate
      ? `%0A• *Travel Dates:* ${customConfig.departureDate || 'Flexible'}${customConfig.arrivalDate ? ` to ${customConfig.arrivalDate}` : ''}`
      : '';

    const noteLine = customConfig.specialNote.trim()
      ? `%0A• *Special Message / Note:* ${encodeURIComponent(customConfig.specialNote.trim())}`
      : '';

    const text = `Hello Yash Holidays! ✈️%0A%0AI would like to request a *Customized Tour Package* quote:%0A• *Destination:* ${encodeURIComponent(
      customConfig.destination
    )}%0A• *Duration:* ${customConfig.days} Days / ${customConfig.days - 1} Nights${dateLine}%0A• *Travelers:* ${encodeURIComponent(
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
  const [likedReviews, setLikedReviews] = useState({});

  const handleToggleHelpful = (id) => {
    setLikedReviews((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const [reviewFilter, setReviewFilter] = useState('All');
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);

  // --- HOST / SITE OWNER ACCESS MODE FOR REVIEW CUSTOMIZATION ---
  const [isOwnerMode, setIsOwnerMode] = useState(() => {
    try {
      return (
        localStorage.getItem('yash_owner_mode') === 'true' ||
        window.location.search.includes('owner=true') ||
        window.location.search.includes('admin=true')
      );
    } catch {
      return false;
    }
  });
  const [isOwnerLoginModalOpen, setIsOwnerLoginModalOpen] = useState(false);
  const [ownerPasswordInput, setOwnerPasswordInput] = useState('');
  const [ownerPasswordError, setOwnerPasswordError] = useState('');

  // Automatically activate Host Mode if URL contains ?owner=true or ?admin=true
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('owner') === 'true' || params.get('admin') === 'true' || params.get('host') === 'true') {
        setIsOwnerMode(true);
        localStorage.setItem('yash_owner_mode', 'true');
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

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
    if (!isOwnerMode) {
      setIsOwnerLoginModalOpen(true);
      return;
    }
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
    if (!isOwnerMode) {
      setIsOwnerLoginModalOpen(true);
      return;
    }
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
      : reviewFilter === '5 Stars'
      ? reviewsList.filter((r) => r.rating === 5)
      : reviewFilter === '4 Stars'
      ? reviewsList.filter((r) => r.rating === 4)
      : reviewFilter === 'With Photos'
      ? reviewsList.filter((r) => r.images && r.images.length > 0)
      : reviewFilter === 'Google Reviews'
      ? reviewsList.filter((r) => r.source === 'Google' || r.googleVerified || r.verified)
      : reviewsList.filter((r) => r.tag === reviewFilter || (r.tour && r.tour.toLowerCase().includes(reviewFilter.toLowerCase())));


  // IntersectionObserver scroll-spy updating header nav chip while scrolling the home page
  useEffect(() => {
    if (activeTab !== 'home') {
      setActiveNavSection(activeTab);
      return;
    }
    const sectionNavMap = [
      { id: 'home', nav: 'home' },
      { id: 'services', nav: 'home' },
      { id: 'holiday-corridors', nav: 'tours' },
      { id: 'about-tour', nav: 'tours' },
      { id: 'included', nav: 'tours' },
      { id: 'customizer', nav: 'tours' },
      { id: 'about-us', nav: 'about' },
      { id: 'reviews-showcase', nav: 'reviews' },
      { id: 'contact', nav: 'contact' },
    ];
    const elements = sectionNavMap
      .map((entry) => ({ el: document.getElementById(entry.id), nav: entry.nav }))
      .filter((entry) => entry.el);

    if (!elements.length || !('IntersectionObserver' in window)) return;

    const visibleMap = new Map();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibleMap.set(entry.target.id, entry.isIntersecting ? entry.intersectionRatio : 0);
        });
        if (window.scrollY < 140) {
          setActiveNavSection('home');
          return;
        }
        for (const item of sectionNavMap) {
          if ((visibleMap.get(item.id) || 0) > 0) {
            setActiveNavSection(item.nav);
            return;
          }
        }
      },
      { rootMargin: '-22% 0px -58% 0px', threshold: [0, 0.15, 0.4] }
    );

    elements.forEach(({ el }) => observer.observe(el));
    const onTopCheck = () => {
      if (window.scrollY < 140) setActiveNavSection('home');
    };
    window.addEventListener('scroll', onTopCheck, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onTopCheck);
    };
  }, [activeTab]);

  // Subtle fade-up reveal on scroll (respecting prefers-reduced-motion)
  useEffect(() => {
    const items = Array.from(document.querySelectorAll('.reveal-item'));
    if (!items.length) return;
    const revealVisibleAndAbove = () => {
      const cutoff = window.innerHeight * 1.08;
      items.forEach((el) => {
        if (el.classList.contains('is-visible')) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= cutoff) {
          el.classList.add('is-visible');
        }
      });
    };
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: '60px 0px 60px 0px' }
    );
    items.forEach((el) => observer.observe(el));
    revealVisibleAndAbove();
    window.addEventListener('scroll', revealVisibleAndAbove, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', revealVisibleAndAbove);
    };
  }, [activeTab, selectedCountryId, reviewFilter]);

  return (
    <div className="min-h-screen page-shell-mobile-pad bg-[var(--mist)] text-[var(--ink)] font-sans relative selection:bg-[var(--ocean-500)] selection:text-white">
      <div className="editorial-grain-overlay" aria-hidden="true" />
      <HeaderShell
        activeTab={activeTab}
        activeNavSection={activeNavSection}
        setActiveNavSection={setActiveNavSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        navigateToTab={navigateToTab}
        instagramUrl={INSTAGRAM_URL}
        facebookUrl={FACEBOOK_URL}
        hotlinePhone={HOTLINE_PHONE}
        officialEmail={OFFICIAL_EMAIL}
      />

      <main>
        {activeTab === 'visa' && (
          <VisaServicesPage
            visaCountries={VISA_COUNTRIES}
            selectedVisaId={selectedVisaId}
            setSelectedVisaId={setSelectedVisaId}
            activeVisa={activeVisa}
            visaNote={visaNote}
            setVisaNote={setVisaNote}
            sendVisaInquiryToWhatsApp={sendVisaInquiryToWhatsApp}
            isTransitioning={isTransitioning}
          />
        )}

        {activeTab === 'airtickets' && (
          <AirTicketsPage
            flightForm={flightForm}
            setFlightForm={setFlightForm}
            flightAdults={flightAdults}
            flightChildren={flightChildren}
            flightInfants={flightInfants}
            totalFlightPax={totalFlightPax}
            updateFlightPax={updateFlightPax}
            sendFlightQuoteToWhatsApp={sendFlightQuoteToWhatsApp}
            airlinePartners={AIRLINE_PARTNERS}
            flightRoutesTable={FLIGHT_ROUTES_TABLE}
          />
        )}

        {activeTab === 'reviews' && (
          <ReviewsPage
            reviewsList={reviewsList}
            filteredReviews={filteredReviews}
            reviewFilter={reviewFilter}
            setReviewFilter={setReviewFilter}
            likedReviews={likedReviews}
            handleToggleHelpful={handleToggleHelpful}
            handleShareReviewWhatsApp={handleShareReviewWhatsApp}
            handleOpenAddReview={handleOpenAddReview}
            handleOpenEditReview={handleOpenEditReview}
            isOwnerMode={isOwnerMode}
            setActivePhotoModal={setActivePhotoModal}
            initialReviews={INITIAL_REVIEWS}
            handleSelectCountry={handleSelectCountry}
            navigateToTab={navigateToTab}
            googleReviewsUrl={GOOGLE_REVIEWS_URL}
            googleMapsUrl={GOOGLE_MAPS_LOCATION_URL}
          />
        )}

        {activeTab === 'about' && (
          <AboutUsPage navigateToTab={navigateToTab} />
        )}

        {activeTab === 'contact' && (
          <ContactUsPage
            formData={formData}
            setFormData={setFormData}
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
            handleFormSubmit={handleFormSubmit}
            sendLeadToWhatsApp={sendLeadToWhatsApp}
            googleMapsUrl={GOOGLE_MAPS_LOCATION_URL}
            googleReviewsUrl={GOOGLE_REVIEWS_URL}
          />
        )}

        {activeTab === 'home' && (
          <HomeSections
            destinations={DESTINATIONS}
            destinationStages={DESTINATION_STAGES}
            coreServices={CORE_SERVICES}
            visaCountries={VISA_COUNTRIES}
            selectedCountryId={selectedCountryId}
            activeDest={activeDest}
            isTransitioning={isTransitioning}
            handleSelectCountry={handleSelectCountry}
            navigateToTab={navigateToTab}
            setSelectedVisaId={setSelectedVisaId}
            customConfig={customConfig}
            setCustomConfig={setCustomConfig}
            customAdults={customAdults}
            customChildren={customChildren}
            customInfants={customInfants}
            totalCustomPax={totalCustomPax}
            updateCustomPax={updateCustomPax}
            sendCustomToWhatsApp={sendCustomToWhatsApp}
            reviewsList={reviewsList}
            isOwnerMode={isOwnerMode}
            handleOpenAddReview={handleOpenAddReview}
            handleOpenEditReview={handleOpenEditReview}
            setActivePhotoModal={setActivePhotoModal}
            setActiveNavSection={setActiveNavSection}
            googleReviewsUrl={GOOGLE_REVIEWS_URL}
          />
        )}

        {activeTab !== 'contact' && (
          <ContactSection
            formData={formData}
            setFormData={setFormData}
            formSubmitted={formSubmitted}
            setFormSubmitted={setFormSubmitted}
            handleFormSubmit={handleFormSubmit}
            sendLeadToWhatsApp={sendLeadToWhatsApp}
            googleMapsUrl={GOOGLE_MAPS_LOCATION_URL}
            googleReviewsUrl={GOOGLE_REVIEWS_URL}
          />
        )}
      </main>

      <SiteFooter
        instagramUrl={INSTAGRAM_URL}
        facebookUrl={FACEBOOK_URL}
        activeTab={activeTab}
        setActiveNavSection={setActiveNavSection}
        navigateToTab={navigateToTab}
        isOwnerMode={isOwnerMode}
        setIsOwnerMode={setIsOwnerMode}
        setIsOwnerLoginModalOpen={setIsOwnerLoginModalOpen}
      />

      <SiteModals
        isReviewModalOpen={isReviewModalOpen}
        setIsReviewModalOpen={setIsReviewModalOpen}
        editingReviewId={editingReviewId}
        reviewForm={reviewForm}
        setReviewForm={setReviewForm}
        handleSaveReview={handleSaveReview}
        activePhotoModal={activePhotoModal}
        setActivePhotoModal={setActivePhotoModal}
        isOwnerMode={isOwnerMode}
        setIsOwnerMode={setIsOwnerMode}
        isOwnerLoginModalOpen={isOwnerLoginModalOpen}
        setIsOwnerLoginModalOpen={setIsOwnerLoginModalOpen}
        ownerPasswordInput={ownerPasswordInput}
        setOwnerPasswordInput={setOwnerPasswordInput}
        ownerPasswordError={ownerPasswordError}
        setOwnerPasswordError={setOwnerPasswordError}
      />
    </div>
  );
}
