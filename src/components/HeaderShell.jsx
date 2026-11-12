import React, { useEffect, useState } from 'react';
import {
  Home,
  Compass,
  FileText,
  Plane,
  Star,
  User,
  Phone,
  Instagram,
  Facebook,
  Menu,
  X,
  Sliders,
  Mail,
} from 'lucide-react';
import { YashLogo, WhatsAppIcon } from './TravelUI';

export const HeaderShell = ({
  activeTab,
  activeNavSection,
  setActiveNavSection,
  mobileMenuOpen,
  setMobileMenuOpen,
  navigateToTab,
  instagramUrl,
  facebookUrl,
  hotlinePhone,
  officialEmail,
}) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [mobileMenuOpen, setMobileMenuOpen]);

  const navItems = [
    {
      id: 'home',
      label: 'Home',
      isActive: activeTab === 'home' && activeNavSection === 'home',
      onClick: () => {
        setActiveNavSection('home');
        navigateToTab('home');
      },
      icon: Home,
    },
    {
      id: 'tours',
      label: 'Outbound Tours',
      isActive: activeTab === 'home' && activeNavSection === 'tours',
      onClick: () => {
        setActiveNavSection('tours');
        navigateToTab('home', 'about-tour');
      },
      icon: Compass,
    },
    {
      id: 'visa',
      label: 'Visa Services',
      isActive: activeTab === 'visa' || (activeTab === 'home' && activeNavSection === 'visa'),
      onClick: () => {
        setActiveNavSection('visa');
        navigateToTab('visa');
      },
      icon: FileText,
    },
    {
      id: 'airtickets',
      label: 'Air Tickets',
      isActive: activeTab === 'airtickets' || (activeTab === 'home' && activeNavSection === 'airtickets'),
      onClick: () => {
        setActiveNavSection('airtickets');
        navigateToTab('airtickets');
      },
      icon: Plane,
    },
    {
      id: 'reviews',
      label: 'Reviews',
      isActive: activeTab === 'reviews' || (activeTab === 'home' && activeNavSection === 'reviews'),
      onClick: () => {
        setActiveNavSection('reviews');
        navigateToTab('reviews');
      },
      icon: Star,
    },
    {
      id: 'about',
      label: 'About Us',
      isActive: activeTab === 'about' || (activeTab === 'home' && activeNavSection === 'about'),
      onClick: () => {
        setActiveNavSection('about');
        navigateToTab('about');
      },
      icon: User,
    },
    {
      id: 'contact',
      label: 'Contact US',
      isActive: activeTab === 'contact' || (activeTab === 'home' && activeNavSection === 'contact'),
      onClick: () => {
        setActiveNavSection('contact');
        navigateToTab('contact');
      },
      icon: Phone,
    },
  ];

  return (
    <>
      {/* Sticky Clean White Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow duration-200 ${
          hasScrolled
            ? 'border-[var(--sky-200)] shadow-[0_1px_2px_rgba(20,50,74,0.06),0_12px_32px_rgba(20,50,74,0.10)]'
            : 'border-[var(--sky-100)] shadow-none'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 min-[1440px]:px-8 h-16 min-[1101px]:h-[72px] flex items-center justify-between gap-2 min-[1440px]:gap-4">
          {/* Left: Clean Brand Logo (no heavy box) */}
          <button
            type="button"
            onClick={() => {
              setActiveNavSection('home');
              navigateToTab('home');
            }}
            className="text-left shrink-0 flex items-center py-1 rounded-lg min-h-[44px]"
            aria-label="Yash Holidays Home"
          >
            <YashLogo compact />
          </button>

          {/* Desktop Navigation (>1100px): Single White Rounded Pill Bar with thin --sky-200 border */}
          <nav
            aria-label="Primary Navigation"
            className="nav-desktop-only items-center gap-0.5 min-[1440px]:gap-1 bg-white border border-[var(--sky-200)] rounded-full p-1 shrink-0"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  aria-current={item.isActive ? 'page' : undefined}
                  className={`px-2 py-1.5 min-[1320px]:px-2.5 min-[1440px]:px-3.5 min-[1440px]:py-2 rounded-full text-[11.5px] min-[1320px]:text-[12px] min-[1440px]:text-[13px] whitespace-nowrap inline-flex items-center gap-1 min-[1440px]:gap-1.5 transition-colors duration-200 ${
                    item.isActive
                      ? 'bg-[var(--sky-100)] text-[var(--ocean-500)] font-semibold'
                      : 'text-[var(--ink)] font-medium hover:bg-[var(--sky-100)] hover:text-[var(--ocean-500)]'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions (>1100px): Phone number + ONE solid coral CTA */}
          <div className="nav-desktop-only items-center gap-2.5 min-[1440px]:gap-4 shrink-0">
            <a
              href="tel:0112312093"
              className="inline-flex items-center gap-1.5 text-[12px] min-[1320px]:text-[13px] min-[1440px]:text-sm font-semibold text-[var(--ink)] hover:text-[var(--ocean-500)] whitespace-nowrap transition-colors px-1.5 py-1.5 rounded-lg"
              title={`Hotline: ${hotlinePhone}`}
            >
              <Phone className="w-4 h-4 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
              <span>{hotlinePhone}</span>
            </a>

            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="btn-coral px-3.5 min-[1440px]:px-5 py-2 text-xs min-[1440px]:text-sm whitespace-nowrap shrink-0"
            >
              Get a Free Quote
            </button>
          </div>

          {/* Mobile & Tablet (<=1100px): ONLY Hamburger Icon Button on the Right */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="nav-mobile-only items-center justify-center w-11 h-11 rounded-[10px] text-[var(--ink)] hover:bg-[var(--sky-100)] hover:text-[var(--ocean-500)] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Backdrop overlay behind open mobile drawer */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`nav-drawer-mobile-only fixed inset-0 bg-[#14324A]/35 z-40 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Mobile & Tablet Smooth Slide-In Menu Drawer (<=1100px) */}
      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        aria-hidden={!mobileMenuOpen}
        inert={mobileMenuOpen ? undefined : ''}
        className={`nav-drawer-mobile-only fixed top-16 right-0 bottom-0 w-full max-w-sm bg-white border-l border-[var(--sky-200)] z-50 flex flex-col overflow-y-auto modal-scroll transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          mobileMenuOpen
            ? 'translate-x-0 shadow-[0_12px_32px_rgba(20,50,74,0.16)]'
            : 'translate-x-full pointer-events-none shadow-none'
        }`}
      >
        <div className="flex-1 flex flex-col justify-between gap-6 px-5 py-5 w-full">
          <nav aria-label="Mobile Menu Links" className="divide-y divide-[var(--sky-100)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  aria-current={item.isActive ? 'page' : undefined}
                  className={`relative w-full min-h-[56px] px-3 py-3 flex items-center justify-between text-left text-[18px] transition-colors ${
                    item.isActive
                      ? 'text-[var(--ocean-500)] font-semibold pl-4'
                      : 'text-[var(--ink)] font-medium hover:text-[var(--ocean-500)]'
                  }`}
                >
                  {item.isActive && (
                    <span
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-[3.5px] h-7 rounded-full bg-[var(--coral)]"
                      aria-hidden="true"
                    />
                  )}
                  <span className="flex items-center gap-3.5">
                    <Icon
                      className={`w-5 h-5 shrink-0 ${
                        item.isActive ? 'text-[var(--ocean-500)]' : 'text-[var(--muted)]'
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item.label}</span>
                  </span>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="w-full min-h-[56px] px-3 py-3 flex items-center gap-3.5 text-left text-[18px] font-semibold text-[var(--ocean-700)] hover:text-[var(--ocean-500)] transition-colors"
            >
              <Sliders className="w-5 h-5 text-[var(--coral)] shrink-0" aria-hidden="true" />
              <span>Customize Tour</span>
            </button>
          </nav>

          {/* Email, Social & Two Full-Width Action Buttons at Drawer Bottom */}
          <div className="space-y-4 pt-3 border-t border-[var(--sky-200)]">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--muted)]">
              <a
                href={`mailto:${officialEmail}`}
                className="inline-flex items-center gap-1.5 text-[var(--ink)] font-medium hover:text-[var(--ocean-500)] min-h-[44px]"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--ocean-500)]" aria-hidden="true" />
                <span>{officialEmail}</span>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--ink)] hover:text-[var(--ocean-500)] min-h-[44px]"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Instagram</span>
                </a>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[var(--ink)] hover:text-[var(--ocean-500)] min-h-[44px]"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>

            <div className="space-y-2.5">
              <a
                href="tel:0112312093"
                className="w-full min-h-[48px] rounded-[10px] bg-[var(--ocean-500)] hover:bg-[var(--ocean-700)] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <span>Call {hotlinePhone}</span>
              </a>
              <a
                href="https://wa.me/94775841144"
                target="_blank"
                rel="noreferrer"
                className="btn-coral w-full min-h-[48px] text-sm"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile & Tablet Sticky Bottom Quick-Navigation Bar (<=1100px), hidden when drawer open */}
      {!mobileMenuOpen && (
        <nav
          className="nav-drawer-mobile-only fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-t border-[var(--sky-200)] px-1.5 pt-1.5 shadow-[0_-4px_20px_rgba(20,50,74,0.08)]"
          style={{ paddingBottom: 'max(0.375rem, env(safe-area-inset-bottom))' }}
          aria-label="Quick Mobile Navigation"
        >
          <div className="max-w-xl mx-auto grid grid-cols-6 gap-0.5 sm:gap-1.5">
            {[
              { id: 'home', label: 'Home', item: navItems[0] },
              { id: 'tours', label: 'Tour', item: navItems[1] },
              { id: 'airtickets', label: 'Air Tickets', item: navItems[3] },
              { id: 'visa', label: 'Visa', item: navItems[2] },
              { id: 'reviews', label: 'Reviews', item: navItems[4] },
              { id: 'contact', label: 'Contact US', item: navItems[6] },
            ].map(({ id, label, item }) => {
              const Icon = item.icon;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={item.onClick}
                  aria-current={item.isActive ? 'page' : undefined}
                  className={`relative min-h-[48px] px-0.5 sm:px-2 py-1 rounded-[10px] flex flex-col items-center justify-center gap-0.5 transition-colors ${
                    item.isActive
                      ? 'bg-[var(--sky-100)] text-[var(--ocean-500)] font-semibold'
                      : 'text-[var(--ink)] font-medium hover:bg-[var(--sky-100)] hover:text-[var(--ocean-500)]'
                  }`}
                >
                  {item.isActive && (
                    <span
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-5 h-[2.5px] rounded-full bg-[var(--coral)]"
                      aria-hidden="true"
                    />
                  )}
                  <Icon
                    className={`w-4 h-4 shrink-0 ${
                      item.isActive ? 'text-[var(--ocean-500)]' : 'text-[var(--muted)]'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="text-[9.5px] sm:text-[11px] leading-tight tracking-[-0.02em] sm:tracking-normal whitespace-nowrap">
                    {label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </>
  );
};
