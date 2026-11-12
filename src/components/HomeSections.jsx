import React, { useEffect, useRef, useState } from 'react';
import {
  Plane,
  Globe,
  Compass,
  MapPin,
  Phone,
  MessageCircle,
  Calendar,
  Users,
  Hotel,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  Star,
  Clock,
  Navigation,
  Sliders,
  Award,
  Mail,
  Plus,
  Edit3,
} from 'lucide-react';
import {
  WhatsAppIcon,
  GoogleIcon,
  YashLogo,
  PaxSelector,
  FlightPathDivider,
  SectionWave,
  PassportStampAccent,
} from './TravelUI';
import visitVisaImg from '../assets/services/visit-visa.jpg';
import outboundToursImg from '../assets/services/outbound-tours.jpg';
import travelInsuranceImg from '../assets/services/travel-insurance.jpg';

const withUnsplashWidth = (url, width) =>
  typeof url === 'string' && url.includes('images.unsplash.com')
    ? url.replace(/([?&]w=)\d+/, `$1${width}`)
    : url;

const SERVICE_PHOTOS = {
  airtickets: {
    src: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1400&q=90',
    alt: 'Commercial airplane wing above sunlit clouds for worldwide air tickets',
    linkText: 'Explore Air Tickets',
  },
  visa: {
    src: visitVisaImg,
    alt: 'Navy passports, travel ticket sleeve, and consultation desk essentials for visit visa assistance',
    linkText: 'Explore Visit Visas',
  },
  outbound: {
    src: outboundToursImg,
    alt: 'Sunlit turquoise lagoon, coastal limestone islands, and boutique resort deck for outbound tours',
    linkText: 'Inquire via WhatsApp',
  },
  custom: {
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1400&q=90',
    alt: 'Private luxury infinity pool resort overlooking turquoise ocean for customized tour packages',
    linkText: 'Inquire via WhatsApp',
  },
  insurance: {
    src: travelInsuranceImg,
    alt: 'Bright executive airport departure lounge with white cabin suitcase and passport for travel insurance',
    linkText: 'Inquire via WhatsApp',
  },
};

export const HomeSections = ({
  destinations,
  destinationStages,
  coreServices,
  visaCountries,
  selectedCountryId,
  activeDest,
  isTransitioning,
  handleSelectCountry,
  navigateToTab,
  setSelectedVisaId,
  customConfig,
  setCustomConfig,
  customAdults,
  customChildren,
  customInfants,
  totalCustomPax,
  updateCustomPax,
  sendCustomToWhatsApp,
  reviewsList,
  isOwnerMode,
  handleOpenAddReview,
  handleOpenEditReview,
  setActivePhotoModal,
  setActiveNavSection,
  googleReviewsUrl,
}) => {
  const [quickDest, setQuickDest] = useState(activeDest?.country || 'Bali');
  const [quickDate, setQuickDate] = useState('');
  const [prevHeroBg, setPrevHeroBg] = useState(activeDest?.heroBg || '');
  const [fadeInActive, setFadeInActive] = useState(true);
  const currentHeroRef = useRef(activeDest?.heroBg || '');
  const destTabRefs = useRef({});
  const hasMountedDestRef = useRef(false);

  useEffect(() => {
    const nextBg = activeDest?.heroBg;
    if (!nextBg || nextBg === currentHeroRef.current) return;
    setPrevHeroBg(currentHeroRef.current);
    currentHeroRef.current = nextBg;
    setFadeInActive(false);
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => setFadeInActive(true));
    });
    const timer = setTimeout(() => setPrevHeroBg(''), 850);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
    };
  }, [activeDest?.heroBg]);

  useEffect(() => {
    if (!hasMountedDestRef.current) {
      hasMountedDestRef.current = true;
      return;
    }
    const activeBtn = destTabRefs.current[selectedCountryId];
    if (activeBtn && typeof activeBtn.scrollIntoView === 'function') {
      activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  }, [selectedCountryId]);

  const handleQuickEnquire = (e) => {
    e.preventDefault();
    setCustomConfig((prev) => ({
      ...prev,
      destination: quickDest === 'Bali' ? 'Bali, Indonesia' : quickDest,
      departureDate: quickDate || prev.departureDate,
    }));
    const el = document.getElementById('customizer');
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const stageInfo = destinationStages[selectedCountryId] || destinationStages.bali;
  const s1 = stageInfo.stages[0];
  const s2 = stageInfo.stages[1];
  const s3 = stageInfo.stages[2];

  const featuredService = coreServices[0]; // Worldwide Air Tickets
  const pairServices = coreServices.slice(1, 3); // Visit Visas & Outbound Tours
  const tailServices = coreServices.slice(3, 5); // Customized Tours & Travel Insurance

  return (
    <>
      {/* ================= HERO SECTION (EDITORIAL PHOTOGRAPHY + 85SVH) ================= */}
      <section
        id="home"
        className="relative min-h-[85svh] pt-20 sm:pt-28 pb-16 sm:pb-24 flex flex-col justify-between overflow-hidden bg-[var(--sky-100)]"
      >
        {/* Crossfading Vivid Travel Photography with Gentle Slow Zoom & Editorial Overlays */}
        <div className="absolute inset-0 z-0 overflow-hidden bg-[var(--sky-100)]">
          {prevHeroBg && (
            <img
              src={prevHeroBg}
              alt=""
              aria-hidden="true"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover object-center"
              style={{ filter: 'saturate(1.18) contrast(1.06)' }}
            />
          )}
          <img
            key={activeDest.id}
            src={activeDest.heroBg}
            alt={`${activeDest.country} scenic travel view`}
            fetchpriority="high"
            referrerPolicy="no-referrer"
            className={`absolute inset-0 w-full h-full object-cover object-center hero-photo-zoom transition-opacity duration-[800ms] ease-out ${
              fadeInActive ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ filter: 'saturate(1.18) contrast(1.06)', viewTransitionName: 'hero-dest-bg' }}
          />
          {/* Desktop directional white mist wash protecting WCAG AA copy while preserving vivid right photography */}
          <div
            className="hidden lg:block absolute inset-0"
            style={{
              background:
                'linear-gradient(90deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.88) 40%, rgba(255,255,255,0.52) 58%, rgba(255,255,255,0.08) 76%)',
            }}
          />
          {/* Mobile & Tablet luminous veil: lets vivid travel photo shine clearly behind frosted text panel */}
          <div
            className="lg:hidden absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.14) 0%, rgba(255,255,255,0.32) 38%, rgba(255,255,255,0.28) 74%, rgba(245,250,253,0.68) 100%)',
            }}
          />
        </div>

        {/* Top Destination Selector Bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-1 sm:pt-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2.5 sm:gap-3">
            <div className="space-y-0.5 sm:space-y-1 bg-white/75 lg:bg-transparent backdrop-blur-[4px] lg:backdrop-blur-none px-3 py-1.5 lg:p-0 rounded-xl lg:rounded-none border border-white/70 lg:border-0 self-start shadow-sm lg:shadow-none">
              <span className="font-handwritten text-xl sm:text-[1.75rem] text-[var(--ocean-700)] block leading-none">
                Plan your dream trip
              </span>
              <p className="text-[10px] sm:text-xs uppercase tracking-[0.18em] sm:tracking-[0.2em] font-semibold text-[var(--ink)]/85">
                Select Your Outbound Destination
              </p>
            </div>

            <PassportStampAccent code="CMB" label="BORALESGAMUWA • LK" />
          </div>

          <div
            className="mt-2.5 sm:mt-3 flex items-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar snap-x snap-proximity pb-1 sm:flex-wrap"
            style={{ scrollPaddingInline: '0.75rem' }}
            role="tablist"
            aria-label="Outbound Destinations"
          >
            {destinations.map((dest) => {
              const active = dest.id === selectedCountryId;
              return (
                <button
                  key={dest.id}
                  ref={(el) => {
                    if (el) destTabRefs.current[dest.id] = el;
                  }}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => handleSelectCountry(dest.id)}
                  className={`snap-start min-h-[34px] sm:min-h-[44px] px-2.5 sm:px-3.5 py-1 sm:py-2 rounded-[8px] sm:rounded-[9px] text-[11px] sm:text-sm font-semibold transition-all inline-flex items-center gap-1 sm:gap-1.5 shrink-0 whitespace-nowrap border ${
                    active
                      ? 'bg-[var(--ocean-700)] text-white border-[var(--ocean-700)] shadow-sm'
                      : 'bg-white/95 text-[var(--ink)] border-[var(--sky-200)] hover:border-[var(--ocean-500)] hover:text-[var(--ocean-700)]'
                  }`}
                >
                  <Plane className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" aria-hidden="true" />
                  <span>{dest.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Hero Split Body */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-5 sm:py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-center">
            {/* Left Column: Typography, Open Info Strip & CTAs */}
            <div
              className={`lg:col-span-6 space-y-4 sm:space-y-5 bg-white/70 lg:bg-transparent backdrop-blur-[6px] lg:backdrop-blur-none p-4 sm:p-6 lg:p-0 rounded-2xl lg:rounded-none border border-white/75 lg:border-0 shadow-sm lg:shadow-none transition-opacity duration-[400ms] ease-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <p className="text-[11px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.22em] text-[var(--ocean-700)] font-semibold">
                YASH HOLIDAYS SIGNATURE OUTBOUND TOUR
              </p>

              <h1
                className="hero-headline font-serif font-bold text-[var(--ink)]"
                style={{ viewTransitionName: 'hero-dest-title', width: 'fit-content' }}
              >
                {activeDest.name}
              </h1>

              <p className="text-base sm:text-lg text-[var(--ink)] max-w-md font-medium leading-relaxed">
                {activeDest.tagline}
              </p>

              {/* Clean Open Info Strip (no heavy box or border) */}
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs sm:text-sm text-[var(--ink)] pt-1 max-w-lg">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                  <span>{activeDest.duration}</span>
                </span>
                <span className="w-px h-4 bg-[var(--sky-200)]" aria-hidden="true" />
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Plane className="w-4 h-4 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                  <span>{activeDest.flightRoute}</span>
                </span>
                <span className="w-px h-4 bg-[var(--sky-200)]" aria-hidden="true" />
                <span className="font-bold text-[var(--ocean-700)]">
                  Packages from {activeDest.priceFrom}
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2.5 xl:gap-3.5 pt-2">
                <a
                  href="#customizer"
                  onClick={() =>
                    setCustomConfig((prev) => ({
                      ...prev,
                      destination:
                        activeDest.country === 'Bali' ? 'Bali, Indonesia' : activeDest.country,
                    }))
                  }
                  className="btn-coral px-5 xl:px-6 py-3 text-sm whitespace-nowrap"
                >
                  <span>Get a Free Quote</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>

                <a
                  href={`https://wa.me/94775841144?text=${encodeURIComponent(
                    `Hello Yash Holidays! I would like a quote for ${activeDest.country} (${activeDest.duration}).`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-ocean bg-white/95 px-4 xl:px-5 py-3 text-sm whitespace-nowrap"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href="#customizer"
                  className="link-underline text-sm px-2.5 py-2 min-h-[44px] rounded-lg bg-white/80 whitespace-nowrap"
                >
                  <span>Book {activeDest.name}</span>
                  <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                </a>
              </div>
            </div>

            {/* Right Column: Asymmetric 5 Highlight Photo Strip / Mosaic */}
            <div
              className={`lg:col-span-6 space-y-3 transition-opacity duration-[400ms] ease-out ${
                isTransitioning ? 'opacity-0' : 'opacity-100'
              }`}
            >
              <div className="flex items-center justify-between text-xs text-[var(--ink)] bg-white/95 px-3.5 py-2 rounded-lg border border-[var(--sky-200)] shadow-[0_1px_2px_rgba(20,50,74,0.05)]">
                <span className="font-semibold text-[var(--ocean-700)] uppercase tracking-wider">
                  100% Customizable
                </span>
                <span className="text-[var(--muted)] font-medium">
                  Flights + Visa + Hotels + Transfers
                </span>
              </div>

              {/* Mobile: horizontal snap strip; Desktop: mixed 2+3 visual mosaic */}
              <div className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-3 pb-1 sm:grid sm:grid-cols-6 sm:gap-3">
                {activeDest.highlights.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      const el = document.getElementById('about-tour');
                      if (el) {
                        const y = el.getBoundingClientRect().top + window.scrollY - 80;
                        window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
                      }
                    }}
                    className={`snap-start min-w-[172px] sm:min-w-0 group relative rounded-[16px] overflow-hidden border border-white/80 shadow-card bg-white text-left shrink-0 sm:shrink ${
                      idx < 2 ? 'sm:col-span-3 h-48 sm:h-48' : 'sm:col-span-2 h-48 sm:h-40'
                    }`}
                  >
                    <img
                      src={item.img}
                      alt={item.label}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover card-photo-zoom"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-28"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(20,50,74,0.92) 0%, rgba(20,50,74,0.55) 56%, transparent 100%)',
                      }}
                    />
                    <div className="absolute bottom-2.5 left-3 right-3">
                      <p className="text-xs sm:text-sm font-bold text-white leading-snug capitalize">
                        {item.label}
                      </p>
                      <p className="text-[11px] text-[var(--sky-100)] mt-0.5 line-clamp-1">
                        {item.sub}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Quick-Enquiry Bar (Uniform 52px Baseline, Single-Column Mobile) */}
      <div className="relative z-20 -mt-10 sm:-mt-12 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <form
          onSubmit={handleQuickEnquire}
          className="bg-white rounded-[16px] border border-[var(--sky-200)] shadow-card p-4 sm:p-5"
          aria-label="Quick Trip Enquiry"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3.5 items-end">
            <div className="md:col-span-5 flex flex-col">
              <label
                htmlFor="hero-quick-dest"
                className="block text-xs uppercase tracking-wider font-semibold text-[var(--muted)] mb-1.5 leading-4"
              >
                Destination
              </label>
              <select
                id="hero-quick-dest"
                value={quickDest}
                onChange={(e) => setQuickDest(e.target.value)}
                className="travel-select w-full h-[52px] min-h-[52px] px-3.5 text-sm sm:text-base rounded-[12px]"
              >
                <option value="Bali">Bali, Indonesia</option>
                <option value="Thailand">Thailand</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Singapore">Singapore</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Maldives">Maldives</option>
                <option value="India">India</option>
                <option value="Azerbaijan">Azerbaijan</option>
              </select>
            </div>

            <div className="md:col-span-4 flex flex-col">
              <label
                htmlFor="hero-quick-date"
                className="block text-xs uppercase tracking-wider font-semibold text-[var(--muted)] mb-1.5 leading-4"
              >
                Preferred Travel Date
              </label>
              <input
                id="hero-quick-date"
                type="date"
                value={quickDate}
                onChange={(e) => setQuickDate(e.target.value)}
                className="travel-input w-full h-[52px] min-h-[52px] px-3.5 text-sm sm:text-base rounded-[12px]"
              />
            </div>

            <div className="md:col-span-3 flex flex-col">
              <button
                type="submit"
                className="btn-coral w-full h-[52px] min-h-[52px] px-5 text-sm rounded-[12px]"
              >
                <span>Enquire</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* ================= ALL-AROUND SERVICES SECTION (ASYMMETRIC EDITORIAL BENTO + MESH) ================= */}
      <section id="services" className="section-space bg-travel-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 reveal-item">
            <span className="font-handwritten text-2xl text-[var(--ocean-500)] block mb-1">
              Everything under one roof
            </span>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--ocean-700)] font-semibold">
              ONE-STOP TRAVEL AGENCY IN SRI LANKA
            </p>
            <h2 className="section-heading font-serif font-bold text-[var(--ink)] mt-2">
              All-Around <span className="editorial-italic">Travel</span> Services by Yash Holidays
            </h2>
            <div className="heading-coral-accent mt-3" aria-hidden="true" />
            <p className="text-[var(--muted)] mt-3 leading-relaxed">
              Whether you need a single airline ticket, urgent visa assistance, travel insurance, or a fully customized family holiday abroad, our team handles everything under one roof.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
            {/* 1. Featured Large Wide Horizontal Service Card (Air Tickets) */}
            {featuredService && (() => {
              const IconComp = featuredService.icon;
              const photo = SERVICE_PHOTOS[featuredService.id];
              return (
                <article
                  key={featuredService.id}
                  className="reveal-item scroll-card-reveal service-bento-card group lg:col-span-12 bg-white rounded-[18px] border border-[var(--sky-200)] shadow-card shadow-card-hover overflow-hidden grid grid-cols-1 lg:grid-cols-12"
                >
                  <div className="relative parallax-wrapper lg:col-span-6 h-56 sm:h-72 lg:h-auto min-h-[260px] overflow-hidden bg-[var(--sky-100)]">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover card-photo-zoom parallax-photo"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 text-[var(--ocean-700)] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-[6px] border-l-[3px] border-[var(--coral)] shadow-sm">
                      {featuredService.badge}
                    </span>
                  </div>

                  <div className="service-bento-body lg:col-span-6 p-6 sm:p-8 lg:p-10 flex flex-col justify-between bg-gradient-to-br from-white via-white to-[var(--sand)]/40">
                    <div>
                      <div className="flex items-center gap-2.5 text-[var(--ocean-500)] text-xs font-semibold uppercase tracking-widest mb-3">
                        <IconComp className="w-5 h-5 shrink-0" aria-hidden="true" />
                        <span>{featuredService.subtitle}</span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)]">
                        {featuredService.title}
                      </h3>
                      <p className="text-[var(--muted)] mt-3 leading-relaxed">
                        {featuredService.desc}
                      </p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-[var(--sky-100)] flex flex-wrap items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => navigateToTab('airtickets')}
                        className="link-underline text-sm min-h-[44px]"
                      >
                        <span>{photo.linkText}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                      <a
                        href="tel:0112312093"
                        className="text-xs font-semibold text-[var(--muted)] hover:text-[var(--ocean-700)] inline-flex items-center gap-1.5 min-h-[44px]"
                      >
                        <Phone className="w-3.5 h-3.5 text-[var(--ocean-500)]" aria-hidden="true" />
                        <span>011 231 2093</span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })()}

            {/* 2 & 3. Asymmetric 7 + 5 Editorial Feature Split (Visit Visas & Outbound Tours) */}
            {pairServices.map((srv, idx) => {
              const IconComp = srv.icon;
              const photo = SERVICE_PHOTOS[srv.id];
              const isWideVisa = idx === 0;
              return (
                <article
                  key={srv.id}
                  style={{ '--reveal-delay': `${(idx + 1) * 70}ms` }}
                  className={`reveal-item scroll-card-reveal service-bento-card group bg-white rounded-[18px] border border-[var(--sky-200)] shadow-card shadow-card-hover overflow-hidden flex flex-col justify-between ${
                    isWideVisa ? 'lg:col-span-7' : 'lg:col-span-5'
                  }`}
                >
                  <div className={isWideVisa ? 'sm:flex sm:flex-1' : ''}>
                    <div
                      className={`relative overflow-hidden bg-[var(--sky-100)] ${
                        isWideVisa
                          ? 'h-52 sm:h-auto sm:w-5/12 sm:min-h-[260px] shrink-0 sm:rounded-l-[18px]'
                          : 'h-52 sm:h-56 m-3 mb-0 rounded-[18px] shadow-sm'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover card-photo-zoom"
                      />
                      <span
                        className={`absolute top-3 left-3 bg-white/95 text-[var(--ocean-700)] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] border-l-[3px] shadow-sm ${
                          isWideVisa ? 'border-[var(--lagoon)]' : 'border-[var(--ocean-500)]'
                        }`}
                      >
                        {srv.badge}
                      </span>
                    </div>

                    <div className={`service-bento-body p-6 flex flex-col justify-between ${isWideVisa ? 'sm:flex-1' : 'pb-4'}`}>
                      <div>
                        <div className="flex items-center gap-2 text-[var(--ocean-500)] text-xs font-semibold uppercase tracking-widest mb-2">
                          <IconComp className="w-4 h-4 shrink-0" aria-hidden="true" />
                          <span>{srv.subtitle}</span>
                        </div>
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[var(--ink)]">
                          {srv.title}
                        </h3>
                        <p className="text-sm text-[var(--muted)] mt-2.5 leading-relaxed">
                          {srv.desc}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-[var(--sky-100)] flex items-center justify-between">
                    {srv.id === 'visa' ? (
                      <button
                        type="button"
                        onClick={() => navigateToTab('visa')}
                        className="link-underline text-sm min-h-[44px]"
                      >
                        <span>{photo.linkText}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </button>
                    ) : (
                      <a
                        href={`https://wa.me/94775841144?text=Hello%20Yash%20Holidays,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                          srv.title
                        )}.`}
                        target="_blank"
                        rel="noreferrer"
                        className="link-underline text-sm min-h-[44px]"
                      >
                        <span>{photo.linkText}</span>
                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </a>
                    )}
                    <span className="text-xs text-[var(--muted)] font-medium">011 231 2093</span>
                  </div>
                </article>
              );
            })}

            {/* 4 & 5. Tailored Services + 6. Core Outbound Markets Explorer on Warm Sand/Sky Panel */}
            {tailServices.map((srv, idx) => {
              const IconComp = srv.icon;
              const photo = SERVICE_PHOTOS[srv.id];
              return (
                <article
                  key={srv.id}
                  style={{ '--reveal-delay': `${(idx + 3) * 70}ms` }}
                  className="reveal-item scroll-card-reveal service-bento-card group lg:col-span-4 bg-white rounded-[18px] border border-[var(--sky-200)] shadow-card shadow-card-hover overflow-hidden flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-48 overflow-hidden m-3 mb-0 rounded-[18px] shadow-sm bg-[var(--sky-100)]">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover card-photo-zoom"
                      />
                      <span
                        className={`absolute top-3 left-3 bg-white/95 text-[var(--ocean-700)] text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px] border-l-[3px] shadow-sm ${
                          idx === 0 ? 'border-[var(--gold)]' : 'border-[var(--lagoon)]'
                        }`}
                      >
                        {srv.badge}
                      </span>
                    </div>

                    <div className="p-6 pb-4">
                      <div className="flex items-center gap-2 text-[var(--ocean-500)] text-xs font-semibold uppercase tracking-widest mb-2">
                        <IconComp className="w-4 h-4 shrink-0" aria-hidden="true" />
                        <span>{srv.subtitle}</span>
                      </div>
                      <h3 className="font-serif text-xl font-bold text-[var(--ink)]">
                        {srv.title}
                      </h3>
                      <p className="text-sm text-[var(--muted)] mt-2 leading-relaxed">
                        {srv.desc}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 py-4 border-t border-[var(--sky-100)] flex items-center justify-between">
                    <a
                      href={`https://wa.me/94775841144?text=Hello%20Yash%20Holidays,%20I%20would%20like%20to%20inquire%20about%20${encodeURIComponent(
                        srv.title
                      )}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-sm min-h-[44px]"
                    >
                      <span>{photo.linkText}</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </a>
                    <span className="text-xs text-[var(--muted)]">011 231 2093</span>
                  </div>
                </article>
              );
            })}

            {/* 6th Highlight Card: 8 Outbound Markets Overview on Warm Sand & Sky Surface */}
            <aside className="reveal-item lg:col-span-4 rounded-2xl bg-sand-panel border border-[var(--sky-200)] p-6 flex flex-col justify-between shadow-card">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--ocean-700)]">
                  Our Core Outbound Markets
                </p>
                <h3 className="font-serif text-2xl font-bold text-[var(--ink)] mt-2">
                  Explore 8 Top <span className="editorial-italic">Destinations</span>
                </h3>
                <p className="text-sm text-[var(--muted)] mt-1.5 mb-4">
                  Click any country below to load its sample itinerary:
                </p>

                <div className="flex flex-wrap gap-2">
                  {destinations.map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => {
                        handleSelectCountry(d.id);
                        document.getElementById('about-tour')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="min-h-[40px] px-3 py-1.5 rounded-[8px] bg-white hover:bg-[var(--ocean-700)] text-[var(--ink)] hover:text-white border border-[var(--sky-200)] text-xs font-semibold transition-colors"
                    >
                      {d.country}
                    </button>
                  ))}
                </div>
              </div>

              <a
                href="#customizer"
                className="btn-coral w-full mt-6 text-sm"
              >
                <span>Build Custom Tour Now</span>
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </aside>
          </div>
        </div>
      </section>

      {/* ================= SIGNATURE HOLIDAY CORRIDORS (ASYMMETRIC EDITORIAL LOOKBOOK) ================= */}
      <section id="holiday-corridors" className="scroll-mt-24 section-space bg-white border-y border-[var(--sky-100)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 reveal-item">
            <div>
              <span className="font-handwritten text-2xl text-[var(--ocean-500)] block mb-0.5">
                Handpicked escapes departing Colombo
              </span>
              <p className="text-xs uppercase tracking-[0.22em] text-[var(--ocean-700)] font-semibold">
                SIGNATURE HOLIDAY CORRIDORS
              </p>
              <h2 className="section-heading font-serif font-bold text-[var(--ink)] mt-1">
                Explore Our Core <span className="editorial-italic">Holiday</span> Destinations
              </h2>
              <div className="heading-coral-accent mt-3" aria-hidden="true" />
            </div>

            <a
              href="#customizer"
              className="link-underline text-sm self-start sm:self-end"
            >
              <span>Build Your Custom Holiday</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>

          {/* Mobile & Tablet (< lg): Compact Horizontal Destination Switcher Rail */}
          <div className="lg:hidden mb-5">
            <div className="w-full flex overflow-x-auto no-scrollbar gap-2.5 pb-1">
              {destinations.map((d, idx) => {
                const isSelected = d.id === selectedCountryId;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => handleSelectCountry(d.id)}
                    aria-pressed={isSelected}
                    className={`min-h-[46px] px-3.5 py-2 rounded-full border flex items-center gap-2.5 shrink-0 transition-all text-left ${
                      isSelected
                        ? 'bg-[var(--ocean-700)] border-[var(--ocean-700)] text-white shadow-sm'
                        : 'bg-[var(--mist)] border-[var(--sky-200)] text-[var(--ink)] hover:border-[var(--ocean-500)]'
                    }`}
                  >
                    <img
                      src={withUnsplashWidth(d.heroBg, 240)}
                      alt={d.country}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-7 h-7 rounded-full object-cover border border-white/80 shrink-0"
                    />
                    <span className="text-xs font-semibold whitespace-nowrap">
                      <span className={isSelected ? 'text-[var(--sky-200)] mr-1' : 'text-[var(--ocean-500)] mr-1'}>
                        0{idx + 1}
                      </span>
                      {d.country}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Asymmetric 12-Column Editorial Destination Directory + Featured Lookbook */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch reveal-item">
            {/* Desktop (lg+): Numbered Regional Corridor Index */}
            <div className="hidden lg:flex lg:col-span-5 flex-col justify-between bg-[var(--mist)] rounded-[20px] border border-[var(--sky-200)] p-3 gap-1.5">
              {destinations.map((d, idx) => {
                const isSelected = d.id === selectedCountryId;
                const dStage = destinationStages[d.id] || stageInfo;
                return (
                  <button
                    key={d.id}
                    type="button"
                    onClick={() => handleSelectCountry(d.id)}
                    aria-pressed={isSelected}
                    className={`w-full px-3.5 py-2.5 rounded-[14px] flex items-center gap-3.5 text-left transition-all border ${
                      isSelected
                        ? 'bg-white border-[var(--sky-200)] shadow-card border-l-[4px] border-l-[var(--coral)]'
                        : 'bg-transparent border-transparent hover:bg-white/75 hover:border-[var(--sky-200)]'
                    }`}
                  >
                    <span
                      className={`text-xs font-bold tracking-wider w-5 shrink-0 ${
                        isSelected ? 'text-[var(--coral)]' : 'text-[var(--ocean-500)]'
                      }`}
                    >
                      0{idx + 1}
                    </span>

                    <img
                      src={withUnsplashWidth(d.heroBg, 240)}
                      alt={d.country}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-12 h-12 rounded-[10px] object-cover border border-white shadow-sm shrink-0"
                    />

                    <div className="min-w-0 flex-1">
                      <h3 className="font-serif text-base font-bold text-[var(--ink)] leading-snug truncate">
                        {d.country}
                      </h3>
                      <p className="text-xs text-[var(--muted)] truncate mt-0.5">
                        {dStage.highlightCities}
                      </p>
                    </div>

                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        isSelected
                          ? 'text-[var(--ocean-700)] translate-x-0.5'
                          : 'text-[var(--muted)]/60'
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Editorial Lookbook Panel for Active Destination */}
            <article
              className={`lg:col-span-7 bg-white rounded-[20px] border border-[var(--sky-200)] shadow-card overflow-hidden flex flex-col justify-between transition-opacity duration-200 ${
                isTransitioning ? 'opacity-60' : 'opacity-100'
              }`}
            >
              {/* Top Asymmetric Visual Collage */}
              <div className="grid grid-cols-12 gap-3 p-3 pb-0">
                <div className="col-span-12 sm:col-span-8 relative h-56 sm:h-72 rounded-[14px] overflow-hidden bg-[var(--mist)]">
                  <img
                    key={`${activeDest.id}-main`}
                    src={withUnsplashWidth(activeDest.heroBg, 1000)}
                    alt={`${activeDest.country} holiday landscape`}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover card-photo-zoom"
                  />
                  <div className="absolute top-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-white/95 text-[var(--ocean-700)] text-[11px] font-semibold tracking-wide shadow-sm border-l-[3px] border-[var(--coral)]">
                      <Plane className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                      <span className="truncate max-w-[230px] sm:max-w-none">{activeDest.flightRoute}</span>
                    </span>
                  </div>
                </div>

                {/* Secondary Curated Experience Frames */}
                <div className="hidden sm:grid sm:col-span-4 grid-rows-2 gap-3 h-72">
                  {activeDest.highlights.slice(2, 4).map((item, idx) => (
                    <div
                      key={`${activeDest.id}-sub-${idx}`}
                      className="relative rounded-[14px] overflow-hidden border border-[var(--sky-100)] bg-[var(--mist)]"
                    >
                      <img
                        src={withUnsplashWidth(item.img, 600)}
                        alt={item.sub}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-x-2 bottom-2 bg-white/95 px-2.5 py-1.5 rounded-[8px] shadow-sm">
                        <p className="text-[11px] font-semibold text-[var(--ink)] leading-tight line-clamp-1">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Editorial Story, Signature Experiences & Actions */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between gap-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ocean-700)]">
                    <MapPin className="w-3.5 h-3.5 text-[var(--lagoon)] shrink-0" aria-hidden="true" />
                    <span>{stageInfo.highlightCities}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] mt-1.5">
                    {activeDest.country}
                  </h3>
                  <p className="text-sm font-medium text-[var(--ocean-700)] mt-0.5">
                    {activeDest.tagline}
                  </p>
                  <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed mt-3">
                    {activeDest.introText}
                  </p>

                  {/* Unified Editorial Experiential Divider Strip (replaces boxed cards) */}
                  <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--sky-200)] border-y border-[var(--sky-200)] py-3 bg-[var(--mist)]/60 rounded-lg">
                    {activeDest.highlights.slice(2, 5).map((item, idx) => (
                      <div
                        key={idx}
                        className="py-2 sm:py-0 sm:px-3.5 flex items-start gap-2.5 first:pt-0 sm:first:pl-3 last:pb-0"
                      >
                        <Compass className="w-4 h-4 text-[var(--lagoon)] shrink-0 mt-0.5" aria-hidden="true" />
                        <div className="min-w-0">
                          <p className="text-[11px] font-bold uppercase tracking-wider text-[var(--ocean-700)] leading-tight">
                            {item.label}
                          </p>
                          <p className="text-xs text-[var(--ink)] font-medium mt-0.5 leading-snug">
                            {item.sub}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--sky-100)] flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="#customizer"
                    onClick={() =>
                      setCustomConfig((prev) => ({
                        ...prev,
                        destination: activeDest.country,
                      }))
                    }
                    className="btn-coral px-5 py-2.5 text-sm"
                  >
                    <span>Tailor {activeDest.country} Trip</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </a>

                  <button
                    type="button"
                    onClick={() =>
                      document.getElementById('about-tour')?.scrollIntoView({ behavior: 'smooth' })
                    }
                    className="link-underline text-sm"
                  >
                    <span>View {stageInfo.durationDays}-Day Journey</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          </div>

          {/* Magazine Editorial Mosaic: Popular Destinations & Visit Visa Markets */}
          <div className="mt-14 pt-12 border-t border-[var(--sky-200)]">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 reveal-item">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--ocean-700)] font-semibold">
                  POPULAR DESTINATIONS &amp; VISA MARKETS
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] mt-1">
                  Handcrafted <span className="editorial-italic">Holidays</span> &amp; Visit Visas
                </h3>
                <div className="heading-coral-accent mt-2.5" aria-hidden="true" />
              </div>
              <button
                type="button"
                onClick={() => navigateToTab('visa')}
                className="link-underline text-sm self-start sm:self-end"
              >
                <span>Explore All {visaCountries.length} Visit Visa Countries</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5">
              {destinations.map((d, idx) => {
                const spanClasses = [
                  'sm:col-span-2 lg:col-span-5 lg:row-span-2 min-h-[280px] lg:min-h-[420px]',
                  'lg:col-span-7 min-h-[210px] sm:min-h-[220px]',
                  'lg:col-span-3 min-h-[200px]',
                  'lg:col-span-4 min-h-[200px]',
                  'lg:col-span-7 min-h-[215px]',
                  'lg:col-span-5 min-h-[215px]',
                  'lg:col-span-4 min-h-[210px]',
                  'sm:col-span-2 lg:col-span-8 min-h-[210px]',
                ][idx] || 'lg:col-span-4 min-h-[210px]';
                const isActiveCard = d.id === selectedCountryId;

                return (
                  <button
                    key={`mag-${d.id}`}
                    type="button"
                    onClick={() => {
                      handleSelectCountry(d.id);
                      document.getElementById('about-tour')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`reveal-item scroll-card-reveal group relative overflow-hidden rounded-[18px] border text-left shadow-card shadow-card-hover transition-all ${spanClasses} ${
                      isActiveCard ? 'border-[var(--ocean-500)] ring-2 ring-[var(--sky-200)]' : 'border-[var(--sky-200)]'
                    }`}
                  >
                    <img
                      src={withUnsplashWidth(d.heroBg, idx === 0 || idx === 1 || idx === 7 ? 1100 : 800)}
                      alt={`${d.country} travel destination`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="absolute inset-0 w-full h-full object-cover card-photo-zoom"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(245,250,253,0.96) 0%, rgba(245,250,253,0.82) 38%, rgba(245,250,253,0.12) 72%, transparent 100%)',
                      }}
                    />
                    <div className="relative h-full w-full p-5 sm:p-6 flex flex-col justify-end">
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[var(--ocean-700)]">
                        {d.duration}
                      </p>
                      <div className="flex items-end justify-between gap-3 mt-1">
                        <div>
                          <h4 className="font-serif text-xl sm:text-2xl font-bold text-[var(--ink)] leading-tight">
                            {d.country}
                          </h4>
                          <p className="text-xs font-semibold text-[var(--ocean-500)] mt-0.5">
                            From {d.priceFrom}
                          </p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--ocean-700)] group-hover:text-[var(--coral)] transition-colors shrink-0">
                          <span>View</span>
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Direct Visit Visa Markets Directory (editorial rectangular links, no pill badges) */}
            <div className="mt-7 pt-6 border-t border-[var(--sky-100)] flex flex-wrap items-center gap-2.5">
              <span className="text-xs uppercase tracking-[0.18em] text-[var(--muted)] font-semibold mr-2">
                Visit Visa Consultation:
              </span>
              {visaCountries.map((visa) => (
                <button
                  key={`corridor-visa-${visa.id}`}
                  type="button"
                  onClick={() => {
                    setSelectedVisaId(visa.id);
                    navigateToTab('visa');
                  }}
                  className="px-3 py-1.5 rounded-[10px] border border-[var(--sky-200)] bg-[var(--mist)] hover:bg-[var(--sky-100)] hover:border-[var(--ocean-500)] text-xs font-semibold text-[var(--ink)] transition-colors min-h-[36px]"
                >
                  {visa.country}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FlightPathDivider label="Sample 3-Stage Itinerary Explorer" />

      {/* ================= "ABOUT THE TOUR" ITINERARY STAGE EXPLORER ================= */}
      <section id="about-tour" className="relative section-space bg-[var(--mist)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-4 sm:gap-8 mb-6">
            <div className="h-px flex-1 bg-[var(--sky-200)]" />
            <h2 className="section-heading font-serif font-bold tracking-wide text-[var(--ink)] text-center">
              ABOUT THE <span className="editorial-italic">TOUR</span>
            </h2>
            <div className="h-px flex-1 bg-[var(--sky-200)]" />
          </div>

          {/* Interactive Country Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16">
            {destinations.map((dest) => {
              const active = dest.id === selectedCountryId;
              return (
                <button
                  key={dest.id}
                  type="button"
                  onClick={() => handleSelectCountry(dest.id)}
                  className={`min-h-[44px] px-4 py-2 rounded-[9px] text-xs font-semibold tracking-wider uppercase transition-all border ${
                    active
                      ? 'bg-[var(--ocean-700)] border-[var(--ocean-700)] text-white shadow-sm'
                      : 'bg-white border-[var(--sky-200)] text-[var(--ink)] hover:border-[var(--ocean-500)]'
                  }`}
                >
                  {dest.country}
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Column: Editorial Story */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 sm:space-y-14 py-2">
              <div className="space-y-2.5">
                <p className="text-[var(--ink)] text-base leading-relaxed">
                  We've planned a simple and convenient {stageInfo.durationDays}-day itinerary for your trip to {stageInfo.countryShort}.
                </p>
                <p className="text-[var(--muted)] text-base leading-relaxed">
                  You'll visit three {stageInfo.hubType}:
                </p>
                <p className="text-[var(--ocean-700)] font-serif font-bold text-xl tracking-wide">
                  {stageInfo.highlightCities}.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-[var(--muted)] text-base leading-relaxed">
                  No need to worry about routes, schedules, or finding places — everything is already organized. We'll show you where to go, what to see, and where to eat, so you can simply{' '}
                  <span className="text-[var(--ocean-700)] font-semibold">
                    enjoy the journey.
                  </span>
                </p>

                <div className="flex flex-wrap gap-3 pt-1">
                  <a href="#customizer" className="btn-coral px-5 py-2.5 text-xs sm:text-sm">
                    <span>Customize {stageInfo.countryShort} Tour</span>
                  </a>
                  <a
                    href={`https://wa.me/94775841144?text=Hi%20Yash%20Holidays!%20Please%20send%20me%20the%20itinerary%20details%20for%20${encodeURIComponent(
                      stageInfo.countryShort
                    )}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline-ocean px-5 py-2.5 text-xs sm:text-sm"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>WhatsApp Quote</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: 3-Node Vertical Timeline with Overlapping Photos */}
            <div className="lg:col-span-7 relative">
              <div className="relative max-w-xl mx-auto py-2">
                <div className="absolute left-3.5 sm:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-[var(--sky-200)]" />

                {/* Node 1 */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 items-center mb-8 sm:mb-14 pl-8 sm:pl-0">
                  <div className="relative h-28 sm:h-36 flex items-center justify-start sm:justify-end pr-0 sm:pr-6 order-2 sm:order-1">
                    <img
                      src={s1.img1}
                      alt={s1.place}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-36 sm:w-40 h-24 sm:h-28 object-cover rounded-[14px] shadow-card border-2 border-white"
                    />
                    <img
                      src={s1.img2}
                      alt={`${s1.place} highlight`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-28 sm:w-36 h-20 sm:h-24 object-cover rounded-[14px] shadow-card border-2 border-white absolute left-20 sm:left-auto sm:right-0 -bottom-2"
                    />
                  </div>

                  <div className="absolute left-3.5 sm:left-1/2 top-4 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3.5 h-3.5 rounded-full bg-[var(--coral)] border-2 border-white ring-2 ring-[var(--sky-200)]" />

                  <div className="pl-0 sm:pl-6 flex items-center justify-between order-1 sm:order-2">
                    <div>
                      <span className="block text-xs sm:text-sm text-[var(--ocean-700)] font-semibold tracking-wide">
                        {s1.days}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--ink)] mt-0.5">
                        {s1.place}
                      </h3>
                    </div>
                    <img
                      src={s2.img1}
                      alt={`${s2.place} preview`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="hidden sm:block w-16 h-20 object-cover rounded-lg border-2 border-white shadow-sm ml-4"
                    />
                  </div>
                </div>

                {/* Node 2 */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 items-center mb-8 sm:mb-14 pl-8 sm:pl-0">
                  <div className="text-left sm:text-right pr-0 sm:pr-6 order-1">
                    <span className="block text-xs sm:text-sm text-[var(--ocean-700)] font-semibold tracking-wide">
                      {s2.days}
                    </span>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--ink)] mt-0.5">
                      {s2.place}
                    </h3>
                  </div>

                  <div className="absolute left-3.5 sm:left-1/2 top-4 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3.5 h-3.5 rounded-full bg-[var(--ocean-500)] border-2 border-white ring-2 ring-[var(--sky-200)]" />

                  <div className="relative h-28 sm:h-36 flex items-center justify-start pl-0 sm:pl-6 order-2">
                    <img
                      src={s2.img1}
                      alt={s2.place}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-36 sm:w-40 h-24 sm:h-28 object-cover rounded-[14px] shadow-card border-2 border-white"
                    />
                    <img
                      src={s2.img2}
                      alt={`${s2.place} highlight`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-28 sm:w-36 h-20 sm:h-24 object-cover rounded-[14px] shadow-card border-2 border-white absolute left-20 sm:left-10 -bottom-2"
                    />
                  </div>
                </div>

                {/* Node 3 */}
                <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-10 items-center pl-8 sm:pl-0">
                  <div className="relative h-28 sm:h-36 flex items-center justify-start sm:justify-end pr-0 sm:pr-6 order-2 sm:order-1">
                    <img
                      src={s3.img1}
                      alt={s3.place}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-36 sm:w-40 h-24 sm:h-28 object-cover rounded-[14px] shadow-card border-2 border-white"
                    />
                    <img
                      src={s3.img2}
                      alt={`${s3.place} highlight`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-28 sm:w-36 h-20 sm:h-24 object-cover rounded-[14px] shadow-card border-2 border-white absolute left-20 sm:left-auto sm:right-0 -bottom-2"
                    />
                  </div>

                  <div className="absolute left-3.5 sm:left-1/2 top-4 sm:top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-3.5 h-3.5 rounded-full bg-[var(--coral)] border-2 border-white ring-2 ring-[var(--sky-200)]" />

                  <div className="pl-0 sm:pl-6 flex items-center justify-between order-1 sm:order-2">
                    <div>
                      <span className="block text-xs sm:text-sm text-[var(--ocean-700)] font-semibold tracking-wide">
                        {s3.days}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-[var(--ink)] mt-0.5">
                        {s3.place}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWave fill="var(--ocean-700)" bg="var(--mist)" />

      {/* ================= WHAT'S INCLUDED (SINGLE CONTRAST BAND IN --ocean-700) ================= */}
      <section id="included" className="section-space bg-[var(--ocean-700)] text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12 reveal-item">
            <div>
              <span className="font-handwritten text-2xl text-[var(--sky-200)] block">
                Every essential arranged
              </span>
              <h2 className="section-heading font-serif font-bold tracking-wide uppercase text-white mt-1">
                WHAT'S <span className="italic font-semibold text-[var(--sky-200)]">INCLUDED</span>
              </h2>
            </div>
            <div className="h-px flex-1 bg-white/25 hidden sm:block ml-6 mb-3" />
          </div>

          {/* Varied asymmetric layout on deep --ocean-700 section (no identical repeated boxes) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="reveal-item lg:col-span-5 border-t-[3px] border-[var(--coral)] pt-6 lg:pr-6">
              <div className="flex items-center gap-3 mb-3.5">
                <Users className="w-6 h-6 text-[var(--sky-200)] shrink-0" aria-hidden="true" />
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">Guides &amp; Care</h3>
              </div>
              <p className="text-base text-[var(--mist)] leading-relaxed">
                Dedicated Yash Holidays tour coordinators &amp; friendly local English-speaking guides who know everything about {activeDest.country}!
              </p>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--sky-200)] font-semibold">
                Direct 24/7 Coordinator Support from Colombo
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-7">
              <div className="reveal-item sm:col-span-2 border-t border-white/30 pt-5" style={{ '--reveal-delay': '60ms' }}>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Plane className="w-5 h-5 text-[var(--sky-200)] shrink-0" aria-hidden="true" />
                  <h3 className="font-serif text-xl font-bold text-white">Flights</h3>
                </div>
                <p className="text-sm text-[var(--mist)] leading-relaxed">
                  Routes: <span className="font-semibold text-white">{activeDest.flightRoute}</span>
                  <br />
                  Return air tickets with baggage on top global airlines.
                </p>
              </div>

              <div className="reveal-item border-t border-white/30 pt-5" style={{ '--reveal-delay': '120ms' }}>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Navigation className="w-5 h-5 text-[var(--sky-200)] shrink-0" aria-hidden="true" />
                  <h3 className="font-serif text-xl font-bold text-white">Transfers &amp; Visa</h3>
                </div>
                <p className="text-sm text-[var(--mist)] leading-relaxed">
                  Private AC transfers from the airport to the hotels &amp; all sightseeing tours, plus full Tourist Visa processing support.
                </p>
              </div>

              <div className="reveal-item border-t border-white/30 pt-5" style={{ '--reveal-delay': '180ms' }}>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <Hotel className="w-5 h-5 text-[var(--sky-200)] shrink-0" aria-hidden="true" />
                  <h3 className="font-serif text-xl font-bold text-white">Hotels &amp; Insurance</h3>
                </div>
                <p className="text-sm text-[var(--mist)] leading-relaxed">
                  Comfortable 3★, 4★, or 5★ accommodation (2 people per room, daily breakfasts included) + complete Travel Insurance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionWave fill="var(--sand)" bg="var(--ocean-700)" />

      {/* ================= INTERACTIVE CUSTOM TOUR PACKAGE BUILDER ================= */}
      <section id="customizer" className="section-space bg-sand-panel">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-[var(--sky-200)] shadow-card p-6 sm:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[var(--sky-100)]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--ocean-700)] inline-flex items-center gap-1.5">
                  <Sliders className="w-4 h-4 text-[var(--lagoon)]" aria-hidden="true" />
                  <span>Tailor-Made Holidays</span>
                </span>
                <h2 className="section-heading font-serif font-bold text-[var(--ink)] mt-1">
                  Customize Your <span className="editorial-italic">Tour</span> Package
                </h2>
                <p className="text-sm text-[var(--muted)] mt-1">
                  Select your preferences below and send directly to our travel specialists for a personalized quotation.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#15803D] self-start md:self-center">
                <CheckCircle2 className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Fast Quote on WhatsApp</span>
              </div>
            </div>

            {/* Step 1, 2, 3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
              <div>
                <label
                  htmlFor="custom-destination"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-2 font-semibold"
                >
                  1. Select Destination
                </label>
                <select
                  id="custom-destination"
                  value={customConfig.destination}
                  onChange={(e) => setCustomConfig({ ...customConfig, destination: e.target.value })}
                  className="travel-select w-full px-4 py-3"
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

              <div>
                <label
                  htmlFor="custom-duration"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-2 font-semibold"
                >
                  2. Duration ({customConfig.days} Days)
                </label>
                <input
                  id="custom-duration"
                  type="range"
                  min="3"
                  max="14"
                  value={customConfig.days}
                  onChange={(e) => setCustomConfig({ ...customConfig, days: Number(e.target.value) })}
                  className="w-full accent-[var(--ocean-500)] mt-3 cursor-pointer"
                />
                <div className="flex justify-between text-xs text-[var(--muted)] mt-1">
                  <span>3 Days</span>
                  <span className="text-[var(--ocean-700)] font-bold">
                    {customConfig.days} Days / {customConfig.days - 1} Nights
                  </span>
                  <span>14 Days</span>
                </div>
              </div>

              <div>
                <label
                  htmlFor="custom-hotel"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-2 font-semibold"
                >
                  3. Hotel Category
                </label>
                <select
                  id="custom-hotel"
                  value={customConfig.hotelClass}
                  onChange={(e) => setCustomConfig({ ...customConfig, hotelClass: e.target.value })}
                  className="travel-select w-full px-4 py-3"
                >
                  <option value="3-Star Comfort">3-Star Comfort Hotels</option>
                  <option value="4-Star Superior">4-Star Superior Hotels</option>
                  <option value="5-Star Luxury / Pool Villa">5-Star Luxury / Pool Villa</option>
                </select>
              </div>
            </div>

            {/* Travel Dates (Departure & Arrival) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 p-4 rounded-2xl bg-[var(--sky-50)] border border-[var(--sky-200)]">
              <div>
                <label
                  htmlFor="custom-depart-date"
                  className="text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                  <span>Departure Date</span>
                </label>
                <input
                  id="custom-depart-date"
                  type="date"
                  value={customConfig.departureDate}
                  onChange={(e) => setCustomConfig({ ...customConfig, departureDate: e.target.value })}
                  className="travel-input w-full px-4 py-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="custom-arrival-date"
                  className="text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold flex items-center gap-1.5"
                >
                  <Calendar className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                  <span>Arrival / Return Date</span>
                </label>
                <input
                  id="custom-arrival-date"
                  type="date"
                  value={customConfig.arrivalDate}
                  onChange={(e) => setCustomConfig({ ...customConfig, arrivalDate: e.target.value })}
                  className="travel-input w-full px-4 py-2.5"
                />
              </div>
            </div>

            {/* Step 4: Shared PAX Selection */}
            <div className="mb-6">
              <PaxSelector
                title="4. NUMBER OF TRAVELERS (PAX SELECTION)"
                adults={customAdults}
                childrenCount={customChildren}
                infants={customInfants}
                totalPax={totalCustomPax}
                totalLabel="Travelers"
                onUpdate={updateCustomPax}
              />
            </div>

            {/* Step 5: Small Message / Special Requests */}
            <div className="mb-8">
              <label
                htmlFor="custom-note"
                className="text-xs uppercase tracking-wider text-[var(--ink)] mb-2 font-semibold flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[var(--ocean-500)]" aria-hidden="true" />
                <span>5. Small Message / Special Requests (Optional)</span>
              </label>
              <textarea
                id="custom-note"
                rows={2}
                value={customConfig.specialNote}
                onChange={(e) => setCustomConfig({ ...customConfig, specialNote: e.target.value })}
                placeholder="Write a small note (e.g., preferred travel dates, child ages, honeymoon room decoration, vegetarian meals, or specific places you want to visit)..."
                className="travel-textarea w-full px-4 py-3"
              />
            </div>

            {/* Included Services Checkboxes & Coral Quote CTA */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[var(--sky-100)]">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-semibold">
                  Included Services:
                </span>
                <label className="inline-flex items-center gap-2 text-sm text-[var(--ink)] cursor-pointer min-h-[44px]">
                  <input
                    type="checkbox"
                    checked={customConfig.includeFlights}
                    onChange={(e) => setCustomConfig({ ...customConfig, includeFlights: e.target.checked })}
                    className="rounded accent-[var(--ocean-500)] w-4 h-4"
                  />
                  <span>Air Tickets</span>
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-[var(--ink)] cursor-pointer min-h-[44px]">
                  <input
                    type="checkbox"
                    checked={customConfig.includeVisa}
                    onChange={(e) => setCustomConfig({ ...customConfig, includeVisa: e.target.checked })}
                    className="rounded accent-[var(--ocean-500)] w-4 h-4"
                  />
                  <span>Visa Processing</span>
                </label>
                <label className="inline-flex items-center gap-2 text-sm text-[var(--ink)] cursor-pointer min-h-[44px]">
                  <input
                    type="checkbox"
                    checked={customConfig.includeInsurance}
                    onChange={(e) => setCustomConfig({ ...customConfig, includeInsurance: e.target.checked })}
                    className="rounded accent-[var(--ocean-500)] w-4 h-4"
                  />
                  <span>Travel Insurance</span>
                </label>
              </div>

              <button
                type="button"
                onClick={sendCustomToWhatsApp}
                className="btn-coral w-full sm:w-auto px-7 py-3.5 text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Get Custom Package Quote</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT US / WHY CHOOSE YASH HOLIDAYS ================= */}
      <section id="about-us" className="section-space bg-white border-t border-[var(--sky-100)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6 reveal-item">
              <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--ocean-700)]">
                <Award className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
                <span>Trusted Sri Lankan Travel Partner</span>
              </p>

              <h2 className="section-heading font-serif font-bold text-[var(--ink)]">
                About <span className="editorial-italic">Yash Holidays</span> Pvt Ltd
              </h2>
              <div className="heading-coral-accent" aria-hidden="true" />

              <p className="text-[var(--ink)] leading-relaxed">
                Headquartered at <span className="font-semibold">276A/2E, Dehiwala Road, Boralesgamuwa</span>,{' '}
                <span className="text-[var(--ocean-700)] font-semibold">Yash Holidays Pvt Ltd</span> is a premier full-service outbound travel agency dedicated to making international travel effortless, affordable, and unforgettable for Sri Lankan travelers.
              </p>

              <p className="text-[var(--muted)] text-sm sm:text-base leading-relaxed">
                From issuing worldwide air tickets and managing complex visa applications to crafting luxury tailor-made holidays across{' '}
                <span className="text-[var(--ink)] font-medium">
                  Thailand, Malaysia, Singapore, Vietnam, Bali, Maldives, India, and Azerbaijan
                </span>
                , we take care of every flight, hotel, transfer, and travel insurance policy with 24/7 personal support.
              </p>

              {/* Editorial Horizontal Metrics Strip (No identical boxes) */}
              <div className="grid grid-cols-3 gap-6 pt-4 border-t border-[var(--sky-200)]">
                <div>
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ocean-700)]">8+</p>
                  <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">Core Outbound Markets</p>
                </div>
                <div className="border-l border-[var(--sky-200)] pl-4 sm:pl-6">
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--coral)]">100%</p>
                  <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">Customizable Tours</p>
                </div>
                <div className="border-l border-[var(--sky-200)] pl-4 sm:pl-6">
                  <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ocean-700)]">24/7</p>
                  <p className="text-xs sm:text-sm text-[var(--muted)] mt-1">Traveler Hotline Care</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 reveal-item relative" style={{ '--reveal-delay': '80ms' }}>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-2 sm:-inset-3 translate-x-2 translate-y-2 rounded-[26px] bg-[var(--sand)] border border-[#f5dfc1]"
              />
              <div className="relative z-10 p-7 sm:p-9 rounded-[20px] bg-white border border-[var(--sky-200)] shadow-card space-y-6">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--sky-200)] pb-5">
                  <YashLogo />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#15803D]">
                    ● Open for Inquiries
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  <div className="flex items-start gap-3.5">
                    <MapPin className="w-5 h-5 text-[var(--ocean-500)] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Office Address</p>
                      <p className="text-[var(--ink)] font-semibold">
                        276A/2E, Dehiwala Road, Boralesgamuwa, Sri Lanka
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Phone className="w-5 h-5 text-[var(--ocean-500)] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--muted)]">Yash Holidays Hotline</p>
                      <a
                        href="tel:0112312093"
                        className="text-[var(--ink)] font-bold text-base hover:text-[var(--ocean-700)] transition-colors"
                      >
                        011 231 2093
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <MessageCircle className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                        Mobile &amp; WhatsApp Consultants
                      </p>
                      <div className="flex flex-wrap gap-3 mt-1">
                        <a
                          href="tel:+94775841144"
                          className="text-[var(--ink)] font-semibold hover:text-[var(--ocean-700)] transition-colors"
                        >
                          +94 77 584 1144
                        </a>
                        <span className="text-[var(--sky-400)]">|</span>
                        <a
                          href="tel:+94773124859"
                          className="text-[var(--ink)] font-semibold hover:text-[var(--ocean-700)] transition-colors"
                        >
                          +94 77 312 4859
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <Mail className="w-5 h-5 text-[var(--ocean-500)] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                        Official Inquiries Email
                      </p>
                      <a
                        href="mailto:yashholidays.lk@gmail.com"
                        className="text-[var(--ink)] font-semibold hover:text-[var(--ocean-700)] transition-colors"
                      >
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

      {/* ================= FEATURED CUSTOMER REVIEWS SHOWCASE ================= */}
      <section id="reviews-showcase" className="section-space bg-mesh-sky border-t border-[var(--sky-100)] bg-topo-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 reveal-item">
            <div>
              <div className="flex flex-wrap items-center gap-4 mb-2 text-xs font-semibold">
                <span className="inline-flex items-center gap-1.5 text-[var(--ocean-700)] uppercase tracking-widest">
                  <Star className="w-3.5 h-3.5 fill-[var(--gold)] text-[var(--gold)]" aria-hidden="true" />
                  <span>LOVED BY 1,450+ SRI LANKAN TRAVELERS</span>
                </span>
                <a
                  href={googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-[var(--sky-200)] text-[var(--ink)] hover:border-[var(--ocean-500)] transition-colors"
                  title="View Yash Holidays on Google Reviews"
                >
                  <GoogleIcon className="w-3.5 h-3.5" />
                  <span>Google Rating: 4.9 (180+ Reviews)</span>
                </a>
              </div>

              <h2 className="section-heading font-serif font-bold text-[var(--ink)]">
                What Our <span className="editorial-italic">Travelers</span> Say About{' '}
                <span className="text-[var(--ocean-700)]">Yash Holidays</span>
              </h2>
              <div className="heading-coral-accent mt-2.5" aria-hidden="true" />
              <p className="text-[var(--muted)] mt-2 max-w-2xl">
                Real stories from verified travelers across Sri Lanka who explored Bali, Vietnam, Malaysia, Dubai, Thailand, and the Maldives with us.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-ocean bg-white px-4 py-2 text-xs"
              >
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>Review on Google</span>
              </a>

              {isOwnerMode ? (
                <button
                  type="button"
                  onClick={handleOpenAddReview}
                  className="px-4 py-2.5 rounded-[9px] bg-amber-500 hover:bg-amber-400 text-[var(--ink)] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                  <span>Host: Add Review</span>
                </button>
              ) : (
                <a
                  href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20would%20like%20to%20share%20my%20travel%20experience%20and%20submit%20a%20review."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-ocean bg-white px-4 py-2 text-xs"
                >
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>Share Feedback</span>
                </a>
              )}

              <button
                type="button"
                onClick={() => {
                  setActiveNavSection('');
                  navigateToTab('reviews');
                }}
                className="btn-coral px-5 py-2.5 text-xs uppercase tracking-wider"
              >
                <span>View All Reviews ({reviewsList.length})</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviewsList.slice(0, 3).map((rev, idx) => {
              const initials = rev.name
                ? rev.name
                    .split(' ')
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('')
                    .toUpperCase()
                : 'YH';
              return (
                <article
                  key={rev.id}
                  style={{ '--reveal-delay': `${idx * 70}ms` }}
                  className={`reveal-item scroll-card-reveal relative p-6 sm:p-7 rounded-[18px] border shadow-card shadow-card-hover flex flex-col justify-between ${
                    idx === 0
                      ? 'bg-sand-panel border-[var(--sky-200)] border-t-[3px] border-t-[var(--coral)]'
                      : 'bg-white border-[var(--sky-200)]'
                  }`}
                >
                  {/* Subtle Decorative Quote Mark */}
                  <span
                    aria-hidden="true"
                    className="font-serif text-6xl leading-none text-[var(--sky-200)] absolute top-3 right-5 select-none pointer-events-none"
                  >
                    &ldquo;
                  </span>

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pr-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--sky-100)] border border-[var(--sky-200)] text-[var(--ocean-700)] font-bold text-xs flex items-center justify-center shrink-0">
                          {initials}
                        </div>
                        <div>
                          <p className="font-bold text-[var(--ink)] text-sm leading-tight">{rev.name}</p>
                          <p className="text-xs text-[var(--muted)]">{rev.location}</p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 mb-3">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3.5 h-3.5 ${
                              i < (rev.rating || 5)
                                ? 'text-[var(--gold)] fill-[var(--gold)]'
                                : 'text-[var(--sky-200)]'
                            }`}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ocean-700)] inline-flex items-center gap-1">
                        <GoogleIcon className="w-3 h-3" />
                        <span>{rev.tag}</span>
                      </span>
                    </div>

                    {rev.images && rev.images.length > 0 && (
                      <div className="grid grid-cols-4 sm:grid-cols-5 gap-1.5 mb-3.5">
                        {rev.images.map((img, i) => (
                          <button
                            key={i}
                            type="button"
                            onClick={() => setActivePhotoModal(img)}
                            className="relative rounded-lg overflow-hidden border border-[var(--sky-200)] aspect-square cursor-pointer group"
                            title={img.title}
                            aria-label={`View photo: ${img.title}`}
                          >
                            <img
                              src={img.url}
                              alt={img.title}
                              loading="lazy"
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover card-photo-zoom"
                            />
                          </button>
                        ))}
                      </div>
                    )}

                    <p className="text-sm text-[var(--ink)] leading-relaxed mb-4">
                      "{rev.review}"
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[var(--sky-100)] flex items-center justify-between text-xs gap-2">
                    <span className="font-semibold text-[var(--ocean-700)] truncate max-w-[180px]">
                      {rev.tour}
                    </span>
                    {isOwnerMode ? (
                      <button
                        type="button"
                        onClick={() => handleOpenEditReview(rev)}
                        className="text-xs text-[var(--ink)] bg-amber-100 hover:bg-amber-200 border border-amber-300 px-2.5 py-1 rounded-md inline-flex items-center gap-1 font-semibold transition-colors"
                        title="Host: Customize & Edit Review"
                      >
                        <Edit3 className="w-3 h-3" aria-hidden="true" />
                        <span>Customize</span>
                      </button>
                    ) : (
                      <span className="text-xs text-[#15803D] inline-flex items-center gap-1 font-medium shrink-0">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                        <span>Verified Traveler</span>
                      </span>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
