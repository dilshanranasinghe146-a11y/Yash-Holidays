import React from 'react';
import {
  MapPin,
  Phone,
  CheckCircle2,
  Star,
  Instagram,
  Facebook,
  Mail,
  Lock,
  ArrowRight,
} from 'lucide-react';
import { YashLogo, WhatsAppIcon, GoogleIcon } from './TravelUI';

export const ContactSection = ({
  formData,
  setFormData,
  formSubmitted,
  setFormSubmitted,
  handleFormSubmit,
  sendLeadToWhatsApp,
  googleMapsUrl,
  googleReviewsUrl,
}) => (
    <section id="contact" className="py-16 sm:py-24 bg-[var(--sky-100)] border-t border-[var(--sky-200)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Left Column: Crisp White Enquiry Card */}
          <div className="lg:col-span-5 p-7 sm:p-10 rounded-3xl bg-white border border-[var(--sky-200)] shadow-card flex flex-col justify-between">
            <div>
              <span className="font-handwritten text-2xl text-[var(--ocean-500)] block mb-1">
                Speak with a specialist
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] leading-snug">
                Want to join us,
                <br />
                <span>but still have questions?</span>
              </h2>
              <p className="text-sm text-[var(--muted)] mt-3 mb-7">
                Leave a request for tours, air tickets, visa or insurance
              </p>

              {formSubmitted ? (
                <div className="p-6 rounded-2xl bg-[var(--sky-50)] border border-[var(--sky-200)] text-center space-y-4">
                  <CheckCircle2 className="w-10 h-10 text-[#15803D] mx-auto" aria-hidden="true" />
                  <h3 className="font-serif text-xl font-bold text-[var(--ink)]">Request Received!</h3>
                  <p className="text-xs sm:text-sm text-[var(--muted)]">
                    Thank you, {formData.name || 'Traveler'}. Our Yash Holidays team in Boralesgamuwa will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={sendLeadToWhatsApp}
                    className="btn-coral w-full py-3 text-xs uppercase tracking-wider"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    <span>Also Send Immediately via WhatsApp</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className="text-xs text-[var(--ocean-700)] underline block mx-auto font-medium"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs uppercase tracking-wider text-[var(--ink)] font-semibold mb-1.5"
                    >
                      Your name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="travel-input w-full px-3.5 py-2.5"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs uppercase tracking-wider text-[var(--ink)] font-semibold mb-1.5"
                    >
                      Phone / WhatsApp number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      autoComplete="tel"
                      placeholder="Phone / WhatsApp number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="travel-input w-full px-3.5 py-2.5"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label
                        htmlFor="contact-service"
                        className="block text-xs uppercase tracking-wider text-[var(--ink)] font-semibold mb-1.5"
                      >
                        Service
                      </label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="travel-select w-full px-3 py-2.5 text-sm"
                      >
                        <option value="Outbound Tour Package">Outbound Tour</option>
                        <option value="Customized Tour Package">Custom Tour</option>
                        <option value="Air Tickets">Air Tickets</option>
                        <option value="Visa Assistance">Visa Assistance</option>
                        <option value="Travel Insurance">Travel Insurance</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-dest"
                        className="block text-xs uppercase tracking-wider text-[var(--ink)] font-semibold mb-1.5"
                      >
                        Destination
                      </label>
                      <select
                        id="contact-dest"
                        value={formData.destination}
                        onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                        className="travel-select w-full px-3 py-2.5 text-sm"
                      >
                        <option value="Bali">Bali</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Maldives">Maldives</option>
                        <option value="India">India</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Other / Worldwide">Worldwide</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-comment"
                      className="block text-xs uppercase tracking-wider text-[var(--ink)] font-semibold mb-1.5"
                    >
                      Comment
                    </label>
                    <input
                      id="contact-comment"
                      type="text"
                      placeholder="Dates, number of travelers, etc."
                      value={formData.comment}
                      onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                      className="travel-input w-full px-3.5 py-2.5"
                    />
                  </div>

                  <button type="submit" className="btn-coral w-full py-3.5 text-sm mt-2">
                    <span>Send</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--sky-100)] flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--muted)]">
              <span className="font-semibold text-[var(--ink)]">Instant Hotline: 011 231 2093</span>
              <a
                href="https://wa.me/94775841144"
                target="_blank"
                rel="noreferrer"
                className="link-underline text-xs"
              >
                Chat on WhatsApp →
              </a>
            </div>
          </div>

          {/* Right Column: Contact Cards, Google Map & Rating Strip */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            {/* Mobile: Big tap-friendly action buttons */}
            <div className="grid grid-cols-2 gap-3 sm:hidden">
              <a
                href="tel:0112312093"
                className="flex flex-col items-center justify-center gap-1.5 p-4 min-h-[92px] rounded-2xl bg-[var(--ocean-700)] hover:bg-[var(--ocean-500)] text-white shadow-sm transition-colors"
              >
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wide">Call Now</span>
                <span className="text-[11px] text-[var(--sky-100)]">011 231 2093</span>
              </a>
              <a
                href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20would%20like%20a%20travel%20quote."
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-4 min-h-[92px] rounded-2xl bg-[#15803D] hover:bg-[#166534] text-white shadow-sm transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span className="text-xs font-bold tracking-wide">WhatsApp</span>
                <span className="text-[11px] text-white/90">+94 77 584 1144</span>
              </a>
              <a
                href="mailto:yashholidays.lk@gmail.com"
                className="flex flex-col items-center justify-center gap-1.5 p-3.5 min-h-[92px] rounded-2xl bg-white border border-[var(--sky-200)] text-[var(--ink)] shadow-sm active:bg-[var(--sky-50)] transition-colors text-center"
              >
                <Mail className="w-5 h-5 text-[var(--ocean-500)]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wide">Email Us</span>
                <span className="text-[10px] leading-tight text-[var(--muted)] break-all">yashholidays.lk@gmail.com</span>
              </a>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-col items-center justify-center gap-1.5 p-4 min-h-[92px] rounded-2xl bg-white border border-[var(--sky-200)] text-[var(--ink)] shadow-sm active:bg-[var(--sky-50)] transition-colors"
              >
                <MapPin className="w-5 h-5 text-[var(--coral)]" aria-hidden="true" />
                <span className="text-xs font-bold tracking-wide">Get Directions</span>
                <span className="text-[11px] text-[var(--muted)]">Boralesgamuwa</span>
              </a>
            </div>

            {/* Desktop / tablet: original small info cards */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-3.5">
              <div className="p-4 rounded-2xl bg-white border border-[var(--sky-200)] shadow-sm">
                <div className="flex items-center gap-1.5 text-[var(--ocean-700)] text-xs font-bold uppercase tracking-wider mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                  <span>Visit Our Office</span>
                </div>
                <p className="text-xs text-[var(--ink)] font-medium leading-snug">
                  276A/2E, Dehiwala Road, Boralesgamuwa
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[var(--sky-200)] shadow-sm">
                <div className="flex items-center gap-1.5 text-[var(--ocean-700)] text-xs font-bold uppercase tracking-wider mb-1">
                  <Phone className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                  <span>Direct Hotline</span>
                </div>
                <a
                  href="tel:0112312093"
                  className="text-sm text-[var(--ink)] font-bold hover:text-[var(--ocean-500)]"
                >
                  011 231 2093
                </a>
                <p className="text-[11px] text-[var(--muted)] mt-0.5">Yash Holidays Desk</p>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[var(--sky-200)] shadow-sm">
                <div className="flex items-center gap-1.5 text-[#15803D] text-xs font-bold uppercase tracking-wider mb-1">
                  <WhatsAppIcon className="w-3.5 h-3.5" />
                  <span>24/7 WhatsApp</span>
                </div>
                <a
                  href="https://wa.me/94775841144"
                  target="_blank"
                  rel="noreferrer"
                  className="block text-xs sm:text-sm text-[var(--ink)] font-bold hover:text-[var(--ocean-500)]"
                >
                  +94 77 584 1144
                </a>
                <a
                  href="tel:+94773124859"
                  className="block text-[11px] text-[var(--muted)] hover:text-[var(--ocean-700)]"
                >
                  +94 77 312 4859
                </a>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[var(--sky-200)] shadow-sm">
                <div className="flex items-center gap-1.5 text-[var(--ocean-700)] text-xs font-bold uppercase tracking-wider mb-1">
                  <Mail className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                  <span>Official Email</span>
                </div>
                <a
                  href="mailto:yashholidays.lk@gmail.com"
                  className="block text-xs text-[var(--ink)] font-bold hover:text-[var(--ocean-500)] break-all"
                >
                  yashholidays.lk@gmail.com
                </a>
                <p className="text-[11px] text-[var(--muted)] mt-0.5">Inquiries &amp; Documents</p>
              </div>
            </div>

            {/* Embedded Interactive Google Map */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[340px] rounded-2xl overflow-hidden border border-[var(--sky-200)] shadow-card bg-[var(--sky-50)]">
              <iframe
                title="Yash Holidays Pvt Ltd Boralesgamuwa Google Map"
                src="https://www.google.com/maps?q=276a/2E+Dehiwala+Rd,+Boralesgamuwa,+Sri+Lanka&output=embed"
                className="w-full h-full border-0 min-h-[300px]"
                allowFullScreen=""
                loading="eager"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute bottom-3 left-3 right-3 sm:right-auto bg-white px-4 py-2.5 rounded-xl border border-[var(--sky-200)] shadow-card flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#16A34A] shrink-0" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold text-[var(--ink)]">Yash Holidays Pvt Ltd</p>
                    <p className="text-[11px] text-[var(--muted)]">
                      276A/2E, Dehiwala Road, Boralesgamuwa
                    </p>
                  </div>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-[var(--sky-100)] text-[var(--ocean-700)] hover:bg-[var(--ocean-700)] hover:text-white text-xs font-semibold transition-colors shrink-0"
                >
                  Directions
                </a>
              </div>
            </div>

            {/* Google Reviews Strip */}
            <div className="p-4 rounded-2xl bg-white border border-[var(--sky-200)] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[var(--sky-50)] border border-[var(--sky-200)] flex items-center justify-center p-2 shrink-0">
                  <GoogleIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs sm:text-sm font-bold text-[var(--ink)]">
                      4.9 Star Google Rating
                    </span>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500" aria-hidden="true" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-[#15803D] bg-[#F0FDF4] px-1.5 py-0.5 rounded border border-[#BBF7D0]">
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-[var(--muted)] mt-0.5">
                    180+ Authentic Customer Reviews on Google Business Profile
                  </p>
                </div>
              </div>

              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline-ocean px-4 py-2 min-h-[38px] text-xs shrink-0"
              >
                <GoogleIcon className="w-3.5 h-3.5" />
                <span>Review on Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
);

export const SiteFooter = ({
  instagramUrl,
  facebookUrl,
  setActiveNavSection,
  navigateToTab,
  isOwnerMode,
  setIsOwnerMode,
  setIsOwnerLoginModalOpen,
}) => {
  const quickLinks = [
    {
      label: 'Home',
      onClick: () => {
        setActiveNavSection('home');
        navigateToTab('home');
      },
    },
    {
      label: 'Outbound Tours',
      onClick: () => {
        setActiveNavSection('tours');
        navigateToTab('home', 'about-tour');
      },
    },
    {
      label: 'Reviews',
      isReview: true,
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('reviews');
      },
    },
    {
      label: 'About Us',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('about');
      },
    },
    {
      label: 'Contacts',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('contact');
      },
    },
  ];

  const serviceLinks = [
    {
      label: 'Visa Services',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('visa');
      },
    },
    {
      label: 'Air Tickets',
      onClick: () => {
        setActiveNavSection('');
        navigateToTab('airtickets');
      },
    },
    {
      label: 'Custom Tours',
      onClick: () => navigateToTab('home', 'customizer'),
    },
  ];

  const handleToggleHost = () => {
    if (isOwnerMode) {
      setIsOwnerMode(false);
      try {
        localStorage.removeItem('yash_owner_mode');
      } catch (e) {
        console.error(e);
      }
    } else {
      setIsOwnerLoginModalOpen(true);
    }
  };

  return (
    <footer className="bg-[var(--ocean-700)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-24 sm:pt-14 sm:pb-24 lg:py-14">
        {/* Compact & Centered Mobile Footer (< sm) */}
        <div className="sm:hidden text-center space-y-5">
          <div className="flex flex-col items-center gap-1.5">
            <YashLogo onDark compact />
            <a
              href="mailto:yashholidays.lk@gmail.com"
              className="inline-flex items-center gap-1.5 text-xs text-[var(--sky-100)] hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[var(--sky-200)]" aria-hidden="true" />
              <span>yashholidays.lk@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2.5 text-xs text-white/90">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--sky-200)] transition-colors"
            >
              <Instagram className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 hover:text-[var(--sky-200)] transition-colors"
            >
              <Facebook className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Facebook</span>
            </a>
            {quickLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.onClick}
                className={`inline-flex items-center gap-1 hover:text-[var(--sky-200)] transition-colors ${
                  link.isReview ? 'text-amber-300 font-semibold' : ''
                }`}
              >
                {link.isReview && <Star className="w-3 h-3 fill-amber-300 text-amber-300" aria-hidden="true" />}
                <span>{link.label}</span>
              </button>
            ))}
            {serviceLinks.slice(0, 2).map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.onClick}
                className="hover:text-[var(--sky-200)] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 pt-1">
            <button
              type="button"
              onClick={handleToggleHost}
              className="text-white/75 hover:text-white inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded hover:bg-white/10 transition-colors"
            >
              <Lock className="w-3.5 h-3.5" aria-hidden="true" />
              <span>{isOwnerMode ? 'Host Mode: ON (Exit)' : 'Host Access'}</span>
            </button>

            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="btn-coral px-5 py-2 text-xs font-semibold"
            >
              Book Now
            </button>
          </div>

          <p className="text-[11px] text-[var(--sky-200)]/80 pt-2 border-t border-white/15">
            Yash Holidays Pvt Ltd • Boralesgamuwa, Sri Lanka
          </p>
        </div>

        {/* Tablet & Desktop Multi-Column Footer (sm+) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <YashLogo onDark />
            <p className="text-xs sm:text-sm text-[var(--sky-100)] leading-relaxed max-w-xs">
              276A/2E, Dehiwala Road, Boralesgamuwa, Sri Lanka — Worldwide Air Tickets, Visit Visas &amp; Tailor-Made Holidays.
            </p>
            <div className="flex items-center gap-3 pt-1">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" aria-hidden="true" />
                <span>Instagram</span>
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-medium transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" aria-hidden="true" />
                <span>Facebook</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--sky-200)] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={link.onClick}
                    className={`hover:text-[var(--sky-200)] transition-colors ${
                      link.isReview ? 'inline-flex items-center gap-1.5' : ''
                    }`}
                  >
                    {link.isReview && <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" aria-hidden="true" />}
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--sky-200)] mb-4">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <button
                    type="button"
                    onClick={link.onClick}
                    className="hover:text-[var(--sky-200)] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Book Now */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-sans text-xs font-bold uppercase tracking-widest text-[var(--sky-200)] mb-4">
              Contact Details
            </h3>
            <a
              href="tel:0112312093"
              className="flex items-center gap-2 text-sm font-semibold hover:text-[var(--sky-200)]"
            >
              <Phone className="w-4 h-4 text-[var(--sky-200)] shrink-0" aria-hidden="true" />
              <span>011 231 2093</span>
            </a>
            <a
              href="https://wa.me/94775841144"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm hover:text-[var(--sky-200)]"
            >
              <WhatsAppIcon className="w-4 h-4 text-[var(--sky-200)]" />
              <span>+94 77 584 1144</span>
            </a>
            <a
              href="mailto:yashholidays.lk@gmail.com"
              className="flex items-center gap-2 text-xs hover:text-[var(--sky-200)] break-all"
            >
              <Mail className="w-4 h-4 text-[var(--sky-200)] shrink-0" aria-hidden="true" />
              <span>yashholidays.lk@gmail.com</span>
            </a>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => navigateToTab('home', 'customizer')}
                className="btn-coral px-5 py-2.5 text-xs uppercase tracking-wider"
              >
                Book Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Host Access Bar (sm+) */}
        <div className="hidden sm:flex pt-6 flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--sky-100)]">
          <p>
            Yash Holidays Pvt Ltd • Boralesgamuwa, Sri Lanka
          </p>

          <button
            type="button"
            onClick={handleToggleHost}
            className="text-white/75 hover:text-white inline-flex items-center gap-1.5 px-2.5 py-1 rounded hover:bg-white/10 transition-colors"
            title={isOwnerMode ? 'Host Mode Active - Click to Logout' : 'Site Owner / Host Authentication'}
          >
            <Lock className="w-3.5 h-3.5" aria-hidden="true" />
            <span>{isOwnerMode ? 'Host Mode: ON (Exit)' : 'Host Access'}</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
