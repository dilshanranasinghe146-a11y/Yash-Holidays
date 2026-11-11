import React, { useEffect, useState } from 'react';
import {
  Plane,
  Globe,
  FileCheck,
  Compass,
  Phone,
  Star,
  Instagram,
  Facebook,
  Menu,
  X,
  Sliders,
  Award,
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
      icon: Globe,
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
      isActive: activeTab === 'visa',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('visa');
      },
      icon: FileCheck,
    },
    {
      id: 'airtickets',
      label: 'Air Tickets',
      isActive: activeTab === 'airtickets',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('airtickets');
      },
      icon: Plane,
    },
    {
      id: 'reviews',
      label: 'Reviews',
      isActive: activeTab === 'reviews',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('reviews');
      },
      icon: Star,
    },
    {
      id: 'about',
      label: 'About Us',
      isActive: activeTab === 'about',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('about');
      },
      icon: Award,
    },
    {
      id: 'contact',
      label: 'Contact US',
      isActive: activeTab === 'contact',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('contact');
      },
      icon: Phone,
      accentClass: 'text-[var(--ocean-500)]',
    },
  ];

  const mobileBottomTabs = [
    {
      id: 'home',
      label: 'Home',
      ariaLabel: 'Home',
      icon: Globe,
      isActive: activeTab === 'home' && activeNavSection === 'home',
      onClick: () => {
        setActiveNavSection('home');
        navigateToTab('home');
        setMobileMenuOpen(false);
      },
    },
    {
      id: 'tours',
      label: 'Tour',
      ariaLabel: 'Outbound Tours',
      icon: Compass,
      isActive: activeTab === 'home' && activeNavSection === 'tours',
      onClick: () => {
        setActiveNavSection('tours');
        navigateToTab('home', 'about-tour');
        setMobileMenuOpen(false);
      },
    },
    {
      id: 'airtickets',
      label: 'Air Tickets',
      ariaLabel: 'Air Tickets',
      icon: Plane,
      isActive: activeTab === 'airtickets',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('airtickets');
        setMobileMenuOpen(false);
      },
    },
    {
      id: 'visa',
      label: 'Visa',
      ariaLabel: 'Visa Services',
      icon: FileCheck,
      isActive: activeTab === 'visa',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('visa');
        setMobileMenuOpen(false);
      },
    },
    {
      id: 'reviews',
      label: 'Reviews',
      ariaLabel: 'Reviews',
      icon: Star,
      accentClass: 'text-amber-500',
      isActive: activeTab === 'reviews',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('reviews');
        setMobileMenuOpen(false);
      },
    },
    {
      id: 'contact',
      label: 'Contact US',
      ariaLabel: 'Contact Us',
      icon: Phone,
      accentClass: 'text-[var(--ocean-500)]',
      isActive: activeTab === 'contact',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('contact');
        setMobileMenuOpen(false);
      },
    },
  ];

  return (
    <>
      {/* Sticky Clean White Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 bg-white border-b transition-shadow duration-200 ${
          hasScrolled
            ? 'border-[var(--sky-200)] shadow-[0_8px_28px_-10px_rgba(27,58,82,0.14)]'
            : 'border-[var(--sky-100)] shadow-none'
        }`}
      >
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-5 xl:px-8 h-16 lg:h-[74px] flex items-center justify-between gap-2 xl:gap-4">
          {/* Left: Clean Brand Logo (no white box) */}
          <button
            type="button"
            onClick={() => {
              setActiveNavSection('home');
              navigateToTab('home');
            }}
            className="text-left shrink-0 flex items-center py-1 rounded-lg focus-visible:outline-[var(--ocean-700)]"
            aria-label="Yash Holidays Home"
          >
            <YashLogo compact />
          </button>

          {/* Desktop Navigation (lg+): soft sky-50 pill bar with icons & soft pill active highlight */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[var(--sky-50)] border border-[var(--sky-200)] rounded-2xl p-1 shrink-0"
          >
            {navItems.map((item) => {
              const Icon = item.icon;
              const isReviews = item.id === 'reviews';
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={item.onClick}
                  aria-current={item.isActive ? 'page' : undefined}
                  className={`px-2 py-1.5 xl:px-3 xl:py-2 rounded-xl text-[11px] xl:text-[13px] font-medium whitespace-nowrap inline-flex items-center gap-1 xl:gap-1.5 transition-all ${
                    item.isActive
                      ? 'bg-[var(--sky-100)] text-[var(--ocean-700)] font-semibold shadow-sm'
                      : 'text-[var(--ink)] hover:bg-white hover:text-[var(--ocean-500)]'
                  }`}
                >
                  <Icon
                    className={`w-3 h-3 xl:w-3.5 xl:h-3.5 shrink-0 ${
                      isReviews
                        ? `text-amber-500 ${item.isActive ? 'fill-amber-500' : ''}`
                        : item.accentClass || 'text-[var(--ocean-500)]'
                    }`}
                    aria-hidden="true"
                  />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Desktop Right Actions: plain phone number (xl+) + single solid coral CTA */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a
              href="tel:0112312093"
              className="hidden xl:inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--ocean-500)] whitespace-nowrap transition-colors"
              title={`Hotline: ${hotlinePhone}`}
            >
              <Phone className="w-4 h-4 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
              <span>{hotlinePhone}</span>
            </a>

            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="btn-coral px-3 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm whitespace-nowrap"
            >
              <span className="xl:hidden">Free Quote</span>
              <span className="hidden xl:inline">Get a Free Quote</span>
            </button>
          </div>

          {/* Mobile & Tablet (< lg): ONLY Hamburger Icon Button on the Right */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-[10px] text-[var(--ink)] hover:bg-[var(--sky-50)] transition-colors"
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation-drawer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile & Tablet Menu Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            role="dialog"
            aria-label="Mobile Navigation Menu"
            className="lg:hidden bg-white border-t border-[var(--sky-200)] h-[calc(100dvh-65px)] flex flex-col overflow-y-auto modal-scroll"
          >
            <div className="flex-1 flex flex-col justify-between gap-6 px-4 py-5 max-w-lg w-full mx-auto">
              <nav aria-label="Mobile Menu Links" className="divide-y divide-[var(--sky-100)]">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={item.onClick}
                      className={`w-full min-h-[48px] px-3 py-2.5 flex items-center justify-between text-left text-base font-medium transition-colors rounded-lg ${
                        item.isActive
                          ? 'bg-[var(--sky-100)] text-[var(--ocean-700)] font-semibold'
                          : 'text-[var(--ink)] hover:bg-[var(--sky-50)]'
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <Icon className="w-4 h-4 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                        <span>{item.label}</span>
                      </span>
                    </button>
                  );
                })}

                <button
                  type="button"
                  onClick={() => navigateToTab('home', 'customizer')}
                  className="w-full min-h-[48px] px-3 py-2.5 flex items-center gap-3 text-left text-base font-semibold text-[var(--ocean-700)] hover:bg-[var(--sky-50)] rounded-lg transition-colors"
                >
                  <Sliders className="w-4 h-4 text-[var(--coral)] shrink-0" aria-hidden="true" />
                  <span>Customize Tour</span>
                </button>
              </nav>

              {/* Email & Social Links */}
              <div className="pt-3 border-t border-[var(--sky-200)] flex flex-wrap items-center justify-between gap-3 text-xs text-[var(--muted)]">
                <a
                  href={`mailto:${officialEmail}`}
                  className="inline-flex items-center gap-1.5 text-[var(--ink)] font-medium hover:text-[var(--ocean-500)]"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--ocean-500)]" aria-hidden="true" />
                  <span>{officialEmail}</span>
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--ink)] hover:text-[var(--ocean-500)]"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[var(--ink)] hover:text-[var(--ocean-500)]"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

              {/* Bottom Two Full-Width Action Buttons */}
              <div className="pt-2 space-y-2.5">
                <a
                  href="tel:0112312093"
                  className="w-full min-h-[48px] rounded-[9px] bg-[var(--ocean-700)] hover:bg-[var(--ocean-500)] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
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
        )}
      </header>

      {/* Backdrop overlay behind open mobile drawer */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 bg-[#1B3A52]/35 z-40 lg:hidden"
          aria-hidden="true"
        />
      )}

      {/* Mobile-only Floating Pill Bottom Navigation Bar (hidden when menu drawer is open) */}
      {!mobileMenuOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden px-2.5 pt-1 pointer-events-none"
          style={{ paddingBottom: 'max(0.5rem, env(safe-area-inset-bottom))' }}
        >
          <nav
            className="pointer-events-auto max-w-lg mx-auto rounded-2xl bg-white/95 backdrop-blur-md border border-[var(--sky-200)] shadow-[0_8px_28px_-6px_rgba(27,58,82,0.18)] p-1 grid grid-cols-6 gap-0.5"
            aria-label="Quick Navigation"
          >
            {mobileBottomTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={tab.onClick}
                  aria-label={tab.ariaLabel}
                  aria-current={tab.isActive ? 'page' : undefined}
                  className={`flex flex-col items-center justify-center gap-0.5 py-1.5 px-0.5 min-h-[50px] rounded-xl transition-colors ${
                    tab.isActive
                      ? 'bg-[var(--sky-100)] text-[var(--ocean-700)]'
                      : 'text-[var(--muted)] hover:bg-[var(--sky-50)] hover:text-[var(--ocean-500)]'
                  }`}
                >
                  <Icon
                    className={`w-[18px] h-[18px] shrink-0 ${
                      tab.accentClass || (tab.isActive ? 'text-[var(--ocean-500)]' : '')
                    } ${tab.id === 'reviews' && tab.isActive ? 'fill-amber-500' : ''}`}
                    aria-hidden="true"
                  />
                  <span className="text-[9.5px] leading-tight font-semibold tracking-tight whitespace-nowrap">
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
};
