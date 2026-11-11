import React, { useEffect, useState } from 'react';
import {
  Plane,
  Globe,
  FileCheck,
  Compass,
  MapPin,
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
      label: 'Contact',
      isActive: false,
      onClick: () => navigateToTab(activeTab, 'contact'),
      icon: MapPin,
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
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[74px] flex items-center justify-between gap-3">
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

          {/* Desktop Navigation (lg+): plain clean editorial links */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-3.5 xl:gap-6 shrink-0"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={item.onClick}
                aria-current={item.isActive ? 'page' : undefined}
                className={`relative py-2 text-[13px] xl:text-sm font-medium whitespace-nowrap transition-colors ${
                  item.isActive
                    ? 'text-[var(--ocean-700)] font-semibold'
                    : 'text-[var(--ink)] hover:text-[var(--ocean-500)]'
                }`}
              >
                <span>{item.label}</span>
                {item.isActive && (
                  <span
                    className="absolute left-0 right-0 -bottom-0.5 h-0.5 bg-[var(--ocean-500)] rounded-full"
                    aria-hidden="true"
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Right Actions: plain phone number + single solid coral CTA */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-5 shrink-0">
            <a
              href="tel:0112312093"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--ink)] hover:text-[var(--ocean-500)] whitespace-nowrap transition-colors"
              title={`Hotline: ${hotlinePhone}`}
            >
              <Phone className="w-4 h-4 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
              <span>{hotlinePhone}</span>
            </a>

            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="btn-coral px-4 xl:px-5 py-2.5 text-xs xl:text-sm whitespace-nowrap"
            >
              <span>Get a Free Quote</span>
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

      {/* Mobile-only Sticky Bottom Action Bar (Call + WhatsApp), hidden when menu drawer is open */}
      {!mobileMenuOpen && (
        <div
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white border-t border-[var(--sky-200)] shadow-[0_-6px_24px_-8px_rgba(27,58,82,0.14)] px-3 pt-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]"
          role="region"
          aria-label="Quick Contact Actions"
        >
          <div className="grid grid-cols-2 gap-2.5 max-w-lg mx-auto">
            <a
              href="tel:0112312093"
              className="min-h-[44px] rounded-[9px] bg-[var(--ocean-500)] hover:bg-[var(--ocean-700)] text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <span>Call</span>
            </a>
            <a
              href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20would%20like%20assistance%20with%20a%20travel%20inquiry."
              target="_blank"
              rel="noreferrer"
              className="btn-coral min-h-[44px] text-sm"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
