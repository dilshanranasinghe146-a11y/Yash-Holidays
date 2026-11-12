import React from 'react';
import {
  Plane,
  FileCheck,
  Compass,
  MapPin,
  Phone,
  Calendar,
  CheckCircle2,
  Star,
  Award,
  HeartHandshake,
  BadgeCheck,
  FileText,
  Headphones,
  Plus,
  Edit3,
  Filter,
  ThumbsUp,
  Camera,
  MessageCircle,
  Sliders,
  Mail,
} from 'lucide-react';
import {
  WhatsAppIcon,
  GoogleIcon,
  YashLogo,
  PaxSelector,
  VISA_COUNTRY_CODES,
} from './TravelUI';
import { ContactSection } from './ContactAndFooter';
import visitVisaImg from '../assets/services/visit-visa.jpg';

export const VisaServicesPage = ({
  visaCountries,
  selectedVisaId,
  setSelectedVisaId,
  activeVisa,
  visaNote,
  setVisaNote,
  sendVisaInquiryToWhatsApp,
}) => (
  <div className="pt-16 min-[1101px]:pt-[74px]">
    {/* Visa Services Light Editorial Hero */}
    <section className="relative py-16 sm:py-20 overflow-hidden bg-mesh-sky border-b border-[var(--sky-200)]">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src={visitVisaImg}
          alt="Global Visit Visa Services"
          fetchpriority="high"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(245,250,253,0.86), rgba(227,241,250,0.96))',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--ocean-700)] inline-flex items-center gap-2 mb-3">
          <FileCheck className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
          <span>YASH HOLIDAYS VISIT VISA DESK</span>
        </p>
        <h1 className="hero-headline font-serif font-bold text-[var(--ink)]">
          Global <span className="editorial-italic">Visit Visa</span> Assistance &amp; Consultation
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          Professional Visit Visa documentation, embassy &amp; VFS appointment scheduling, financial file auditing, and cover letter preparation for{' '}
          <strong className="text-[var(--ink)] font-semibold">
            Canada, New Zealand, UK, USA, Malaysia, Thailand, Vietnam, India, China, and Japan
          </strong>
          .
        </p>

        {/* Country Selector Chips */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
          {visaCountries.map((item) => {
            const active = selectedVisaId === item.id;
            const code = VISA_COUNTRY_CODES[item.id] || item.country.slice(0, 2).toUpperCase();
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  setSelectedVisaId(item.id);
                  document.getElementById('visa-checklist-box')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`min-h-[44px] px-3.5 py-2 rounded-[9px] text-xs font-semibold transition-all border inline-flex items-center gap-2 ${
                  active
                    ? 'bg-[var(--ocean-700)] text-white border-[var(--ocean-700)] shadow-sm'
                    : 'bg-white text-[var(--ink)] border-[var(--sky-200)] hover:border-[var(--ocean-500)]'
                }`}
              >
                <span
                  className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                    active ? 'bg-white/20 text-white' : 'bg-[var(--sky-100)] text-[var(--ocean-700)]'
                  }`}
                >
                  {code}
                </span>
                <span>{item.country}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>

    {/* Interactive Country Document Checklist Hub */}
    <section id="visa-checklist-box" className="section-space bg-[var(--mist)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-[var(--sky-200)] shadow-card">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                <span className="uppercase tracking-wider text-[var(--ocean-700)] border-l-2 border-[var(--ocean-500)] pl-2.5">
                  {activeVisa.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[#15803D]">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>Processing Time: {activeVisa.processingTime}</span>
                </span>
              </div>

              <div>
                <h2 className="section-heading font-serif font-bold text-[var(--ink)] flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--sky-100)] text-[var(--ocean-700)] font-sans text-sm font-bold shrink-0">
                    {VISA_COUNTRY_CODES[activeVisa.id] || activeVisa.country.slice(0, 2).toUpperCase()}
                  </span>
                  <span>{activeVisa.country} — Visit Visa</span>
                </h2>
                <p className="text-sm text-[var(--ocean-700)] font-medium mt-1.5">
                  {activeVisa.visaType} • Validity: {activeVisa.stayValidity}
                </p>
              </div>

              <div className="space-y-3">
                <p className="text-xs uppercase tracking-widest text-[var(--muted)] font-bold">
                  Required Documents Checklist for Sri Lankan Applicants:
                </p>
                {activeVisa.docs.map((doc, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3.5 rounded-xl bg-[var(--mist)] border border-[var(--sky-200)]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--lagoon)] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-xs sm:text-sm text-[var(--ink)]">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-sand-panel border border-[var(--sky-200)] space-y-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-white border border-[var(--sky-200)] flex items-center justify-center text-[var(--ocean-500)] shrink-0">
                  <FileText className="w-5 h-5" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[var(--ocean-700)] font-semibold">
                    Yash Holidays Visa Specialists
                  </p>
                  <h3 className="font-serif text-xl font-bold text-[var(--ink)]">
                    Apply for {activeVisa.country} Visit Visa
                  </h3>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                Our Boralesgamuwa Visa Desk audits your bank statements, prepares your professional embassy cover letter, books VFS/Embassy appointments, and provides flight &amp; hotel itineraries for{' '}
                <strong>{activeVisa.country}</strong>.
              </p>

              <div>
                <label
                  htmlFor="visa-note-input"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold"
                >
                  Small Message / Your Travel Plan (Optional)
                </label>
                <textarea
                  id="visa-note-input"
                  name="visaNote"
                  rows={3}
                  value={visaNote}
                  onChange={(e) => setVisaNote(e.target.value)}
                  placeholder={`e.g., Planning to visit ${activeVisa.country} in December with family (3 adults), need guidance on bank balance...`}
                  className="travel-textarea w-full px-3.5 py-2.5"
                />
              </div>

              <div className="space-y-3 pt-1">
                <button
                  type="button"
                  onClick={() => sendVisaInquiryToWhatsApp(activeVisa.country, activeVisa.visaType)}
                  className="btn-coral w-full py-3 px-5 text-xs sm:text-sm"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Inquire {activeVisa.country} Visa on WhatsApp</span>
                </button>

                <a
                  href="tel:0112312093"
                  className="btn-outline-ocean bg-white w-full py-2.5 px-5 text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                  <span>Call Visa Hotline: 011 231 2093</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Visit Visa Comparison Table */}
    <section className="section-space bg-white border-t border-[var(--sky-100)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--ocean-700)] font-semibold">
              QUICK COMPARISON TABLE
            </p>
            <h2 className="section-heading font-serif font-bold text-[var(--ink)] mt-1">
              Visit Visa <span className="editorial-italic">Services Overview</span> Table
            </h2>
          </div>
          <p className="text-xs text-[var(--muted)]">
            Click any row to view full required documents above or inquire via WhatsApp.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[var(--sky-200)] bg-white shadow-card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--sky-200)] bg-[var(--sky-100)] text-[11px] uppercase tracking-wider text-[var(--ocean-700)]">
                <th className="py-4 px-5">Country</th>
                <th className="py-4 px-5">Visa Category (Visit Visa)</th>
                <th className="py-4 px-5">Processing Time</th>
                <th className="py-4 px-5">Stay / Entry Validity</th>
                <th className="py-4 px-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--sky-100)] text-xs sm:text-sm">
              {visaCountries.map((v) => {
                const code = VISA_COUNTRY_CODES[v.id] || v.country.slice(0, 2).toUpperCase();
                return (
                  <tr
                    key={v.id}
                    className={`hover:bg-[var(--sky-50)] transition-colors ${
                      selectedVisaId === v.id ? 'bg-[var(--sky-50)]' : ''
                    }`}
                  >
                    <td className="py-4 px-5 font-bold text-[var(--ink)] whitespace-nowrap">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedVisaId(v.id);
                          document.getElementById('visa-checklist-box')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="inline-flex items-center gap-2 hover:text-[var(--ocean-700)] text-left"
                      >
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-[var(--sky-100)] text-[var(--ocean-700)] text-[11px] font-bold">
                          {code}
                        </span>
                        <span>{v.country}</span>
                      </button>
                    </td>
                    <td className="py-4 px-5 text-[var(--ink)]">{v.visaType}</td>
                    <td className="py-4 px-5 text-[#15803D] font-semibold whitespace-nowrap">
                      {v.processingTime}
                    </td>
                    <td className="py-4 px-5 text-[var(--muted)]">{v.stayValidity}</td>
                    <td className="py-4 px-5 text-right whitespace-nowrap">
                      <div className="inline-flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            setSelectedVisaId(v.id);
                            document.getElementById('visa-checklist-box')?.scrollIntoView({ behavior: 'smooth' });
                          }}
                          className="btn-outline-ocean px-3 py-1.5 min-h-[36px] text-xs"
                        >
                          Checklist
                        </button>
                        <button
                          type="button"
                          onClick={() => sendVisaInquiryToWhatsApp(v.country, v.visaType)}
                          className="btn-coral px-3 py-1.5 min-h-[36px] text-xs"
                        >
                          Apply Now
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
);

export const AirTicketsPage = ({
  flightForm,
  setFlightForm,
  flightAdults,
  flightChildren,
  flightInfants,
  totalFlightPax,
  updateFlightPax,
  sendFlightQuoteToWhatsApp,
  airlinePartners,
  flightRoutesTable,
}) => (
  <div className="pt-16 min-[1101px]:pt-[74px]">
    {/* Air Tickets Hero */}
    <section className="relative py-16 sm:py-20 overflow-hidden bg-mesh-sky border-b border-[var(--sky-200)]">
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1920&q=85"
          alt="Worldwide Air Ticketing"
          fetchpriority="high"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(245,250,253,0.84), rgba(227,241,250,0.96))',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--ocean-700)] inline-flex items-center gap-2 mb-3">
          <Plane className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
          <span>YASH HOLIDAYS GLOBAL TICKETING DESK</span>
        </p>
        <h1 className="hero-headline font-serif font-bold text-[var(--ink)]">
          Worldwide <span className="editorial-italic">Air Ticketing</span> &amp; Flight Reservations
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          Special agency consolidator airfares, student baggage deals, group bookings, and 24/7 date-change support for flights from Colombo (CMB) to the UK, Canada, New Zealand, USA, Japan, China, and across Asia.
        </p>
      </div>
    </section>

    {/* Flight Quote Request Form + Partner Airlines */}
    <section className="section-space bg-[var(--mist)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-3xl bg-white border border-[var(--sky-200)] shadow-card">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[var(--sky-100)]">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[var(--ocean-700)]">
                  LOWEST AIRFARE REQUEST
                </span>
                <h2 id="flight-form-heading" className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] mt-1">
                  Request Your <span className="editorial-italic">Air Ticket</span> Quote
                </h2>
              </div>
              <Plane className="w-7 h-7 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
            </div>

            <form aria-labelledby="flight-form-heading" onSubmit={sendFlightQuoteToWhatsApp} className="space-y-5">
              <div className="flex flex-wrap gap-2">
                {['Round Trip', 'One Way', 'Multi-City'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFlightForm({ ...flightForm, tripType: type })}
                    className={`min-h-[44px] px-4 py-2 rounded-[9px] text-xs font-bold uppercase tracking-wider border transition-colors ${
                      flightForm.tripType === type
                        ? 'bg-[var(--ocean-700)] text-white border-[var(--ocean-700)]'
                        : 'bg-[var(--mist)] text-[var(--ink)] border-[var(--sky-200)] hover:border-[var(--ocean-500)]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="flight-from"
                    className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold"
                  >
                    Origin Airport
                  </label>
                  <input
                    id="flight-from"
                    name="from"
                    type="text"
                    value={flightForm.from}
                    onChange={(e) => setFlightForm({ ...flightForm, from: e.target.value })}
                    className="travel-input w-full px-4 py-2.5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="flight-to"
                    className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold"
                  >
                    Destination (City / Country)
                  </label>
                  <input
                    id="flight-to"
                    name="to"
                    type="text"
                    placeholder="e.g., London, Toronto, Auckland, Tokyo, Bangkok..."
                    value={flightForm.to}
                    onChange={(e) => setFlightForm({ ...flightForm, to: e.target.value })}
                    className="travel-input w-full px-4 py-2.5"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="flight-depart"
                    className="text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                    <span>Departure Date</span>
                  </label>
                  <input
                    id="flight-depart"
                    name="departDate"
                    type="date"
                    value={flightForm.departDate}
                    onChange={(e) => setFlightForm({ ...flightForm, departDate: e.target.value })}
                    className="travel-input w-full px-4 py-2.5"
                  />
                </div>

                <div>
                  <label
                    htmlFor="flight-return"
                    className="text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold flex items-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                    <span>Return Date {flightForm.tripType === 'One Way' && '(Optional)'}</span>
                  </label>
                  <input
                    id="flight-return"
                    name="returnDate"
                    type="date"
                    disabled={flightForm.tripType === 'One Way'}
                    value={flightForm.returnDate}
                    onChange={(e) => setFlightForm({ ...flightForm, returnDate: e.target.value })}
                    className="travel-input w-full px-4 py-2.5 disabled:opacity-45"
                  />
                </div>
              </div>

              <PaxSelector
                title="Flight Passengers (Pax Selection)"
                adults={flightAdults}
                childrenCount={flightChildren}
                infants={flightInfants}
                totalPax={totalFlightPax}
                totalLabel="Passengers"
                onUpdate={updateFlightPax}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="flight-cabin"
                    className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold"
                  >
                    Cabin Class
                  </label>
                  <select
                    id="flight-cabin"
                    name="cabin"
                    value={flightForm.cabin}
                    onChange={(e) => setFlightForm({ ...flightForm, cabin: e.target.value })}
                    className="travel-select w-full px-4 py-2.5"
                  >
                    <option value="Economy Class">Economy Class</option>
                    <option value="Premium Economy">Premium Economy</option>
                    <option value="Business Class">Business Class</option>
                    <option value="First Class">First Class</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="flight-airline"
                    className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold"
                  >
                    Preferred Airline
                  </label>
                  <select
                    id="flight-airline"
                    name="preferredAirline"
                    value={flightForm.preferredAirline}
                    onChange={(e) => setFlightForm({ ...flightForm, preferredAirline: e.target.value })}
                    className="travel-select w-full px-4 py-2.5"
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
                <label
                  htmlFor="flight-note"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1.5 font-semibold"
                >
                  Small Message / Special Flight Note (Extra Baggage, Student Fare, Wheelchair, etc.)
                </label>
                <textarea
                  id="flight-note"
                  name="note"
                  rows={2}
                  placeholder="Write any special request (e.g., student extra baggage allowance, vegetarian meal, short transit time, or flexible date ticket)..."
                  value={flightForm.note}
                  onChange={(e) => setFlightForm({ ...flightForm, note: e.target.value })}
                  className="travel-textarea w-full px-4 py-2.5"
                />
              </div>

              <button type="submit" className="btn-coral w-full py-3.5 text-sm">
                <WhatsAppIcon className="w-5 h-5" />
                <span>Check Lowest Fare on WhatsApp (+94 77 584 1144)</span>
              </button>
            </form>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-2xl bg-sand-panel border border-[var(--sky-200)] shadow-card space-y-4">
              <h3 className="font-serif text-xl font-bold text-[var(--ink)] flex items-center gap-2">
                <BadgeCheck className="w-5 h-5 text-[var(--lagoon)] shrink-0" aria-hidden="true" />
                <span>Why Book Air Tickets With Yash Holidays?</span>
              </h3>
              <ul className="space-y-3 text-xs sm:text-sm text-[var(--muted)]">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--ink)]">Unbeatable Consolidator Rates:</strong> Special agency fares to UK, Canada, New Zealand, Japan, China &amp; Asia.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--ink)]">Dummy / Hold Tickets for Visa:</strong> Verifiable flight itinerary reservations for embassy visa submissions.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--ink)]">Student &amp; Family Concessions:</strong> Up to 45kg–50kg baggage &amp; flexible date-change policies.
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-[var(--ink)]">Direct Hotline Support:</strong> Call 011 231 2093 or +94 77 584 1144 anytime for urgent rebooking.
                  </span>
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[var(--sky-200)] shadow-card space-y-4">
              <h3 className="font-serif text-lg font-bold text-[var(--ink)]">Global Airline Partners</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 border-t border-[var(--sky-100)]">
                {airlinePartners.map((airline, i) => (
                  <div
                    key={i}
                    className={`py-3 sm:py-3.5 ${
                      i % 2 === 1 ? 'sm:pl-4 sm:border-l border-[var(--sky-100)]' : 'sm:pr-3'
                    } border-b border-[var(--sky-100)]`}
                  >
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ocean-700)]">
                      {airline.tag}
                    </span>
                    <p className="text-sm font-bold text-[var(--ink)] mt-0.5">{airline.name}</p>
                    <p className="text-xs text-[var(--muted)] mt-0.5 leading-snug">{airline.route}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Flight Routes Comparison Table */}
    <section className="section-space bg-white border-t border-[var(--sky-100)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--ocean-700)] font-semibold">
              POPULAR GLOBAL FLIGHT ROUTES FROM COLOMBO (CMB)
            </p>
            <h2 className="section-heading font-serif font-bold text-[var(--ink)] mt-1">
              Air Ticket <span className="editorial-italic">Routes &amp; Airlines</span> Table
            </h2>
          </div>
          <p className="text-xs text-[var(--muted)]">
            Click "Check Lowest Fare" to pre-fill your route or get an instant quote via WhatsApp.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-[var(--sky-200)] bg-white shadow-card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[var(--sky-200)] bg-[var(--sky-100)] text-[11px] uppercase tracking-wider text-[var(--ocean-700)]">
                <th className="py-4 px-5">Route from Colombo (CMB)</th>
                <th className="py-4 px-5">Major Airlines</th>
                <th className="py-4 px-5">Connection Type</th>
                <th className="py-4 px-5">Baggage Allowance</th>
                <th className="py-4 px-5 text-right">Instant Quote</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--sky-100)] text-xs sm:text-sm">
              {flightRoutesTable.map((row, index) => (
                <tr key={index} className="hover:bg-[var(--sky-50)] transition-colors">
                  <td className="py-4 px-5 font-bold text-[var(--ink)]">
                    <div className="flex flex-col">
                      <span>{row.destination}</span>
                      <span className="text-[10px] text-[var(--ocean-700)] uppercase tracking-wider mt-0.5">
                        {row.tag}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-5 text-[var(--ink)]">{row.airlines}</td>
                  <td className="py-4 px-5 text-[#15803D] font-semibold">{row.transit}</td>
                  <td className="py-4 px-5 text-[var(--muted)]">{row.baggage}</td>
                  <td className="py-4 px-5 text-right whitespace-nowrap">
                    <a
                      href={`https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20Please%20share%20the%20lowest%20air%20ticket%20fare%20from%20Colombo%20(CMB)%20to%20${encodeURIComponent(
                        row.destination
                      )}.`}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-coral px-3.5 py-2 min-h-[36px] text-xs"
                    >
                      <Plane className="w-3.5 h-3.5" aria-hidden="true" />
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
);

export const ReviewsPage = ({
  reviewsList,
  filteredReviews,
  reviewFilter,
  setReviewFilter,
  likedReviews,
  handleToggleHelpful,
  handleShareReviewWhatsApp,
  handleOpenAddReview,
  handleOpenEditReview,
  isOwnerMode,
  setActivePhotoModal,
  initialReviews,
  handleSelectCountry,
  navigateToTab,
  googleReviewsUrl,
  googleMapsUrl,
}) => (
  <div className="pt-16 min-[1101px]:pt-[74px]">
    {/* Reviews Hero */}
    <section className="relative py-16 sm:py-20 overflow-hidden bg-mesh-sky border-b border-[var(--sky-200)]">
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--ocean-700)] inline-flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" aria-hidden="true" />
          <span>100% GENUINE SRI LANKAN TRAVELER REVIEWS</span>
        </p>
        <h1 className="hero-headline font-serif font-bold text-[var(--ink)]">
          Customer <span className="editorial-italic">Reviews &amp; Stories</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          Read authentic testimonials and feedback from Sri Lankan families, couples, and groups who booked their dream vacations, flight tickets, and visit visas with Yash Holidays Pvt Ltd.
        </p>

        {/* High-Trust Metrics Strip */}
        <div className="bg-white rounded-2xl border border-[var(--sky-200)] shadow-card grid grid-cols-2 sm:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--sky-100)] max-w-4xl mx-auto mt-10">
          <div className="p-5 sm:p-6">
            <div className="flex items-center justify-center gap-1 text-[var(--ocean-700)] font-serif font-bold text-2xl sm:text-3xl">
              <span>4.9</span>
              <Star className="w-5 h-5 fill-amber-500 text-amber-500" aria-hidden="true" />
            </div>
            <p className="text-xs text-[var(--muted)] font-medium mt-1">Average Star Rating</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ocean-500)]">1,450+</p>
            <p className="text-xs text-[var(--muted)] font-medium mt-1">Happy Travelers</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[#15803D]">99.4%</p>
            <p className="text-xs text-[var(--muted)] font-medium mt-1">Satisfaction Rate</p>
          </div>
          <div className="p-5 sm:p-6">
            <p className="font-serif text-2xl sm:text-3xl font-bold text-[var(--coral)]">24/7</p>
            <p className="text-xs text-[var(--muted)] font-medium mt-1">Tour Assistance</p>
          </div>
        </div>

        {/* Official Google Reviews Trust Strip */}
        <div className="mt-8 p-5 sm:p-6 rounded-2xl bg-white border border-[var(--sky-200)] max-w-4xl mx-auto shadow-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[var(--sky-50)] border border-[var(--sky-200)] flex items-center justify-center p-2.5 shrink-0">
                <GoogleIcon className="w-7 h-7" />
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[var(--ink)] font-bold text-base sm:text-lg">
                    Google Business Reviews
                  </span>
                  <div className="flex items-center text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500" aria-hidden="true" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-[#15803D]">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Rated <strong className="text-[var(--ink)]">4.9 Stars</strong> across{' '}
                  <strong className="text-[var(--ocean-700)]">182+ Verified Reviews</strong> on Google Maps
                </p>
                <div className="flex items-center gap-2.5 text-xs text-[var(--muted)] mt-1 flex-wrap">
                  <span className="inline-flex items-center gap-1 text-[#15803D] font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5" aria-hidden="true" /> 100% Genuine Travelers
                  </span>
                  <span>•</span>
                  <span>276A/2E, Dehiwala Road, Boralesgamuwa</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto shrink-0">
              <div className="w-full sm:w-48 text-xs space-y-1 bg-[var(--sky-50)] p-2.5 rounded-xl border border-[var(--sky-200)]">
                <div className="flex items-center justify-between text-[var(--ink)]">
                  <span>5 Stars</span>
                  <div className="w-24 bg-[var(--sky-200)] h-1.5 rounded-full overflow-hidden mx-2">
                    <div className="bg-amber-500 h-full w-[92%] rounded-full" />
                  </div>
                  <span className="font-bold">92%</span>
                </div>
                <div className="flex items-center justify-between text-[var(--ink)]">
                  <span>4 Stars</span>
                  <div className="w-24 bg-[var(--sky-200)] h-1.5 rounded-full overflow-hidden mx-2">
                    <div className="bg-amber-400 h-full w-[7%] rounded-full" />
                  </div>
                  <span className="font-bold">7%</span>
                </div>
              </div>

              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-coral w-full sm:w-auto px-5 py-2.5 text-xs whitespace-nowrap"
              >
                <GoogleIcon className="w-4 h-4 bg-white rounded-full p-0.5" />
                <span>Review Us on Google</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-8">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-ocean bg-white px-5 py-2.5 text-xs uppercase tracking-wider"
          >
            <GoogleIcon className="w-4 h-4" />
            <span>Write a Google Review</span>
          </a>
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-ocean bg-white px-5 py-2.5 text-xs"
          >
            <MapPin className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
            <span>View Boralesgamuwa Office on Maps</span>
          </a>
          <a
            href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20would%20like%20to%20send%20a%20customer%20review%20feedback%20for%20my%20recent%20trip."
            target="_blank"
            rel="noreferrer"
            className="btn-coral px-5 py-2.5 text-xs"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span>Submit Feedback via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>

    {/* Featured Traveler Spotlights + Filtered Reviews Grid */}
    <section className="section-space bg-[var(--mist)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Spotlight 1: Singapore */}
        <article className="mb-10 p-6 sm:p-10 rounded-3xl bg-white border border-[var(--sky-200)] shadow-card">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="lg:w-1/2 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--ocean-700)] inline-flex items-center gap-2">
                <Camera className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
                <span>FEATURED FAMILY MOMENTS • SINGAPORE GETAWAY</span>
              </p>

              <h2 className="section-heading font-serif font-bold text-[var(--ink)]">
                An Absolutely Amazing{' '}
                <span className="text-[var(--ocean-700)]">Singapore Experience!</span>
              </h2>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[var(--ink)]">
                  5.0 / 5.0 Star Family Experience
                </span>
              </div>

              <p className="text-sm sm:text-base text-[var(--ink)] leading-relaxed font-medium">
                "I would like to sincerely thank the entire team for making my Singapore trip such a wonderful and unforgettable experience. It was truly amazing, and honestly, I can’t express the whole experience in words!"
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
                <div className="p-4 rounded-xl bg-[var(--sky-50)] border border-[var(--sky-200)]">
                  <p className="text-xs font-bold text-[var(--ocean-700)] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#15803D] shrink-0" aria-hidden="true" />
                    <span>Special Thanks to Mr. Dhananjaya</span>
                  </p>
                  <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                    "Helped me so much from the very beginning with planning the trip and arranging the perfect package. Everything was arranged according to my needs and budget."
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[var(--sky-50)] border border-[var(--sky-200)]">
                  <p className="text-xs font-bold text-[var(--ocean-700)] flex items-center gap-1.5">
                    <Plane className="w-3.5 h-3.5 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                    <span>Special Thanks to Mr. Kasun</span>
                  </p>
                  <p className="text-xs text-[var(--muted)] mt-1 leading-relaxed">
                    "Helping me with the flight ticket booking and making the arrangements smoothly. Everything was well organized and filled with beautiful memories."
                  </p>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed italic border-l-2 border-[var(--ocean-500)] pl-4 py-1">
                "Thank you so much, Dhananjaya, Kasun, and the entire travel team! I truly appreciate all your effort and support. It was an amazing trip that I will always remember! Highly appreciated and definitely recommended!"
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20saw%20the%20Singapore%20family%20photos%20(Universal%20Studios,%20Merlion,%20Gardens%20by%20the%20Bay,%20Jewel%20Changi)%20and%20would%20like%20a%20similar%20Singapore%20package%20quote!"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-coral px-5 py-2.5 text-xs uppercase tracking-wider"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book Similar Singapore Tour</span>
                </a>
                <a
                  href="https://wa.me/94775841144?text=Hello%20Mr.%20Dhananjaya%20and%20Mr.%20Kasun!%20I%20would%20like%20assistance%20with%20Singapore%20family%20holiday%20packages%20and%20flight%20tickets."
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline-ocean px-5 py-2.5 text-xs uppercase tracking-wider"
                >
                  <Compass className="w-4 h-4" aria-hidden="true" />
                  <span>Speak with Trip Planners</span>
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3">
                {initialReviews[1].images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoModal(img)}
                    className={`group relative rounded-2xl overflow-hidden border border-[var(--sky-200)] shadow-sm text-left bg-[var(--sky-50)] ${
                      idx === 0 ? 'col-span-2 aspect-[16/10]' : 'aspect-square'
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover card-photo-zoom"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-16"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(27,58,82,0.88), transparent)',
                      }}
                    />
                    <div className="absolute bottom-2 left-2.5 right-2.5">
                      <span className="text-[11px] font-bold text-white block leading-tight">
                        {img.title}
                      </span>
                      <span className="text-[10px] text-[var(--sky-100)] block">
                        {img.location}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-center text-[var(--muted)] mt-2.5">
                Click any photo to enlarge full-resolution Singapore moments
              </p>
            </div>
          </div>
        </article>

        {/* Spotlight 2: Malaysia */}
        <article className="mb-14 p-6 sm:p-10 rounded-3xl bg-white border border-[var(--sky-200)] shadow-card">
          <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
            <div className="lg:w-1/2 space-y-4">
              <p className="text-xs font-bold uppercase tracking-widest text-[var(--ocean-700)] inline-flex items-center gap-2">
                <Camera className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
                <span>FEATURED TRAVEL MOMENTS • RECENT MALAYSIA GETAWAY</span>
              </p>

              <h2 className="section-heading font-serif font-bold text-[var(--ink)]">
                A Journey of Discovery with{' '}
                <span className="text-[var(--ocean-700)]">Nithya Dewammini</span> &amp;{' '}
                <span className="text-[var(--ocean-700)]">Prabashani Ranasinghe</span>
              </h2>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-xs font-bold text-[var(--ink)]">
                  5.0 / 5.0 Star Experience
                </span>
              </div>

              <p className="text-sm sm:text-base text-[var(--ink)] leading-relaxed">
                We are thrilled to share some of the most beautiful moments from the recent Malaysia getaway of{' '}
                <strong>Nithya Dewammini</strong> and <strong>Prabashani Ranasinghe</strong>.
              </p>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed italic border-l-2 border-[var(--ocean-500)] pl-4 py-1">
                "From the towering heights of the Petronas Twin Towers to the vibrant culture found at the Batu Caves, their journey through Kuala Lumpur was filled with discovery and joy. Whether they were taking in the scenic views at Genting Highlands or enjoying the ultimate fun at Sunway Lagoon, it was a trip to remember!"
              </p>

              <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                At <strong className="text-[var(--ink)]">Yash Holidays</strong>, our commitment is to provide a seamless, high-quality service so you can focus on the experience while we handle all the details. A huge thank you to Nithya and Prabashani for trusting us with your international adventure. We can’t wait to help you plan your next one!
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20saw%20Nithya%20and%20Prabashani's%20Malaysia%20photos%20(Genting,%20Batu%20Caves,%20Petronas,%20Sunway%20Lagoon)%20and%20would%20like%20a%20similar%20package%20quote!"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-coral px-5 py-2.5 text-xs uppercase tracking-wider"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Book Similar Malaysia Tour</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    handleSelectCountry('malaysia');
                    navigateToTab('home', 'about-tour');
                  }}
                  className="btn-outline-ocean px-5 py-2.5 text-xs uppercase tracking-wider"
                >
                  <Compass className="w-4 h-4" aria-hidden="true" />
                  <span>View Malaysia Itinerary</span>
                </button>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {initialReviews[0].images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActivePhotoModal(img)}
                    className="group relative rounded-2xl overflow-hidden border border-[var(--sky-200)] shadow-sm text-left bg-[var(--sky-50)] aspect-[3/4]"
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover card-photo-zoom"
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 h-16"
                      style={{
                        background:
                          'linear-gradient(to top, rgba(27,58,82,0.88), transparent)',
                      }}
                    />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="text-[11px] font-bold text-white block leading-tight">
                        {img.title}
                      </span>
                      <span className="text-[10px] text-[var(--sky-100)] block">
                        {img.location}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <p className="text-xs text-center text-[var(--muted)] mt-2.5">
                Click any photo to enlarge full-resolution moments
              </p>
            </div>
          </div>
        </article>

        {/* Star Category & Topic Filters (Clean Lucide Icons, no emojis) */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10 pb-4 border-b border-[var(--sky-200)]">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs uppercase tracking-wider text-[var(--muted)] font-bold mr-1 inline-flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-[var(--ocean-500)]" aria-hidden="true" />
              <span>Star &amp; Category:</span>
            </span>
            {[
              { id: 'All', label: 'All Reviews', count: reviewsList.length },
              {
                id: '5 Stars',
                label: '5 Stars',
                hasStar: true,
                count: reviewsList.filter((r) => r.rating === 5).length,
              },
              {
                id: '4 Stars',
                label: '4 Stars',
                hasStar: true,
                count: reviewsList.filter((r) => r.rating === 4).length,
              },
              {
                id: 'With Photos',
                label: 'With Photos',
                hasCamera: true,
                count: reviewsList.filter((r) => r.images && r.images.length > 0).length,
              },
              { id: 'Google Reviews', label: 'Google Verified', isGoogle: true },
              { id: 'Holiday Package', label: 'Tour Packages' },
              { id: 'Visa Service', label: 'Visa Services' },
              { id: 'Honeymoon', label: 'Honeymoon' },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setReviewFilter(cat.id)}
                className={`min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold inline-flex items-center gap-1.5 border transition-colors ${
                  reviewFilter === cat.id
                    ? 'bg-[var(--ocean-700)] text-white border-[var(--ocean-700)]'
                    : 'bg-white hover:bg-[var(--sky-100)] text-[var(--ink)] border-[var(--sky-200)]'
                }`}
              >
                {cat.isGoogle && <GoogleIcon className="w-3.5 h-3.5" />}
                {cat.hasStar && <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" aria-hidden="true" />}
                {cat.hasCamera && <Camera className="w-3.5 h-3.5 text-[var(--ocean-500)]" aria-hidden="true" />}
                <span>{cat.label}</span>
                {cat.count !== undefined && (
                  <span className="opacity-80 text-[11px]">({cat.count})</span>
                )}
              </button>
            ))}
          </div>

          <div className="text-xs text-[var(--muted)]">
            Showing <span className="font-bold text-[var(--ink)]">{filteredReviews.length}</span> unchangeable Google reviews
          </div>
        </div>

        {/* All Reviews Grid */}
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
            const isHelpful = likedReviews[rev.id];
            const currentLikes = (rev.helpfulCount || 10) + (isHelpful ? 1 : 0);

            return (
              <article
                key={rev.id}
                className="relative p-6 rounded-2xl bg-white border border-[var(--sky-200)] shadow-card shadow-card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-full bg-[var(--sky-100)] border border-[var(--sky-200)] text-[var(--ocean-700)] font-bold text-sm flex items-center justify-center shrink-0">
                        {initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          <h3 className="font-sans font-bold text-[var(--ink)] text-sm sm:text-base leading-tight">
                            {rev.name}
                          </h3>
                          <BadgeCheck className="w-4 h-4 text-[var(--ocean-500)] shrink-0" aria-hidden="true" />
                        </div>
                        <p className="text-xs text-[var(--muted)] flex items-center gap-1 mt-0.5">
                          <MapPin className="w-3 h-3 shrink-0" aria-hidden="true" />
                          <span>{rev.location || 'Sri Lanka'}</span>
                          <span>•</span>
                          <span>{rev.date}</span>
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[var(--muted)]">
                      <GoogleIcon className="w-3.5 h-3.5" />
                      <span>Verified</span>
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-3 bg-[var(--sky-50)] p-2.5 rounded-xl border border-[var(--sky-100)]">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < (rev.rating || 5)
                              ? 'text-amber-500 fill-amber-500'
                              : 'text-[var(--sky-200)]'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                      <span className="text-xs font-bold text-[var(--ink)] ml-1">{rev.rating}.0</span>
                    </div>
                    <span className="text-xs font-semibold text-[var(--ocean-700)] truncate max-w-[165px]">
                      {rev.tour}
                    </span>
                  </div>

                  {rev.highlight && (
                    <div className="mb-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[var(--sky-100)] text-[var(--ocean-700)] text-xs font-semibold">
                      <span>{rev.highlight}</span>
                    </div>
                  )}

                  {rev.images && rev.images.length > 0 && (
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-2 mb-4 mt-2">
                      {rev.images.map((img, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setActivePhotoModal(img)}
                          className="relative rounded-xl overflow-hidden border border-[var(--sky-200)] aspect-square group"
                          title={img.title}
                        >
                          <img
                            src={img.url}
                            alt={img.title}
                            loading="lazy"
                            className="w-full h-full object-cover card-photo-zoom"
                          />
                        </button>
                      ))}
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-[var(--ink)] leading-relaxed">
                    "{rev.review}"
                  </p>

                  {rev.ownerResponse && (
                    <div className="mt-4 p-3 rounded-xl bg-[var(--sky-50)] border-l-2 border-[var(--ocean-500)] text-left">
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-xs font-bold text-[var(--ocean-700)]">
                          Response from Yash Holidays Pvt Ltd
                        </span>
                        <BadgeCheck className="w-3.5 h-3.5 text-[var(--ocean-500)]" aria-hidden="true" />
                      </div>
                      <p className="text-xs text-[var(--muted)] leading-relaxed">{rev.ownerResponse}</p>
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-5 border-t border-[var(--sky-100)] flex items-center justify-between gap-2">
                  <button
                    type="button"
                    onClick={() => handleToggleHelpful(rev.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold inline-flex items-center gap-1.5 border transition-colors ${
                      isHelpful
                        ? 'bg-[var(--sky-100)] text-[var(--ocean-700)] border-[var(--ocean-500)]'
                        : 'bg-[var(--sky-50)] hover:bg-[var(--sky-100)] text-[var(--ink)] border-[var(--sky-200)]'
                    }`}
                  >
                    <ThumbsUp className="w-3.5 h-3.5 text-[var(--ocean-500)]" aria-hidden="true" />
                    <span>Helpful ({currentLikes})</span>
                  </button>

                  <div className="flex items-center gap-2">
                    {isOwnerMode && (
                      <button
                        type="button"
                        onClick={() => handleOpenEditReview(rev)}
                        className="px-3 py-1.5 rounded-lg bg-amber-100 hover:bg-amber-200 text-[var(--ink)] text-xs font-bold inline-flex items-center gap-1 border border-amber-300 transition-colors"
                      >
                        <Edit3 className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Customize</span>
                      </button>
                    )}
                    <button
                      type="button"
                      onClick={() => handleShareReviewWhatsApp(rev)}
                      className="btn-coral px-3.5 py-1.5 min-h-[34px] text-xs"
                    >
                      <WhatsAppIcon className="w-3.5 h-3.5" />
                      <span>Book Similar</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom Reviews Action Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-sand-panel border border-[#F0D9B5] text-center max-w-4xl mx-auto shadow-card">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[var(--ink)] mb-2">
            Want to Share Your Own <span className="editorial-italic">Experience</span> with Yash Holidays?
          </h2>
          <p className="text-sm text-[var(--muted)] max-w-2xl mx-auto mb-6">
            Every journey matters to us. Submit your honest feedback, photos, or holiday story and help other Sri Lankan travelers plan with total confidence.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {isOwnerMode ? (
              <button
                type="button"
                onClick={handleOpenAddReview}
                className="px-6 py-3 rounded-[9px] bg-amber-500 hover:bg-amber-400 text-[var(--ink)] font-bold text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-colors"
              >
                <Plus className="w-4 h-4" aria-hidden="true" />
                <span>Host: Add / Publish Review</span>
              </button>
            ) : (
              <a
                href={googleReviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-ocean px-6 py-3 text-xs uppercase tracking-wider"
              >
                <GoogleIcon className="w-4 h-4" />
                <span>Review Us on Google</span>
              </a>
            )}
            <button
              type="button"
              onClick={() => navigateToTab('home', 'customizer')}
              className="btn-coral px-6 py-3 text-xs uppercase tracking-wider"
            >
              <Sliders className="w-4 h-4" aria-hidden="true" />
              <span>Customize Your Tour</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export const AboutUsPage = ({ navigateToTab }) => (
  <div className="pt-16 min-[1101px]:pt-[74px]">
    {/* About Hero */}
    <section className="relative py-16 sm:py-20 overflow-hidden bg-mesh-sky border-b border-[var(--sky-200)]">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--ocean-700)] inline-flex items-center gap-2 mb-3">
          <Award className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
          <span>TRUSTED SRI LANKAN TRAVEL AGENCY</span>
        </p>
        <h1 className="hero-headline font-serif font-bold text-[var(--ink)]">
          About <span className="editorial-italic">Yash Holidays Pvt Ltd</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          Your all-around travel partner at{' '}
          <strong className="text-[var(--ink)]">276A/2E, Dehiwala Road, Boralesgamuwa</strong> — delivering world-class air ticketing, high-approval visit visa consultation, customized outbound tours, and travel insurance.
        </p>
      </div>
    </section>

    {/* Story & Metrics */}
    <section className="section-space bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="bg-[var(--mist)] rounded-2xl border border-[var(--sky-200)] shadow-card grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-[var(--sky-200)]">
          <div className="p-6 text-center">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ocean-700)]">10+</p>
            <p className="text-xs sm:text-sm font-semibold text-[var(--ink)] mt-1">Visit Visa Countries</p>
            <p className="text-xs text-[var(--muted)] mt-0.5">Canada, UK, NZ, US, Japan &amp; Asia</p>
          </div>
          <div className="p-6 text-center">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--coral)]">8+</p>
            <p className="text-xs sm:text-sm font-semibold text-[var(--ink)] mt-1">Signature Outbound Markets</p>
            <p className="text-xs text-[var(--muted)] mt-0.5">Bali, Thailand, Malaysia, Singapore &amp; more</p>
          </div>
          <div className="p-6 text-center">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[var(--ocean-500)]">50+</p>
            <p className="text-xs sm:text-sm font-semibold text-[var(--ink)] mt-1">Global Airline Partners</p>
            <p className="text-xs text-[var(--muted)] mt-0.5">Direct &amp; Worldwide Consolidator Fares</p>
          </div>
          <div className="p-6 text-center">
            <p className="font-serif text-3xl sm:text-4xl font-bold text-[#15803D]">99%</p>
            <p className="text-xs sm:text-sm font-semibold text-[var(--ink)] mt-1">Client Satisfaction</p>
            <p className="text-xs text-[var(--muted)] mt-0.5">24/7 Personal Traveler Support</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-widest text-[var(--ocean-700)] font-bold">
              OUR STORY &amp; MISSION
            </span>
            <h2 className="section-heading font-serif font-bold text-[var(--ink)]">
              Making International Travel <span className="editorial-italic">Effortless</span> for Sri Lankans
            </h2>
            <p className="text-sm sm:text-base text-[var(--ink)] leading-relaxed">
              At <strong>Yash Holidays Pvt Ltd</strong>, we believe planning an international trip should be just as exciting and stress-free as the holiday itself. Based in Boralesgamuwa, our experienced travel consultants handle every step of your journey under one roof.
            </p>
            <p className="text-sm text-[var(--muted)] leading-relaxed">
              Whether you are applying for a Visit Visa to{' '}
              <span className="text-[var(--ink)] font-medium">
                Canada, New Zealand, the UK, USA, China, or Japan
              </span>
              , booking a family tour to{' '}
              <span className="text-[var(--ink)] font-medium">
                Thailand, Malaysia, Singapore, Vietnam, Bali, Maldives, India, or Azerbaijan
              </span>
              , or searching for the lowest airfare, we guarantee transparent pricing and dedicated support.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[var(--sky-50)] border border-[var(--sky-200)]">
                <HeartHandshake className="w-5 h-5 text-[var(--ocean-500)] mb-2" aria-hidden="true" />
                <h3 className="font-sans text-sm font-bold text-[var(--ink)]">
                  Transparent &amp; Honest Advice
                </h3>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Clear visa checklists and genuine airfares with zero hidden charges.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[var(--sky-50)] border border-[var(--sky-200)]">
                <Headphones className="w-5 h-5 text-[var(--ocean-500)] mb-2" aria-hidden="true" />
                <h3 className="font-sans text-sm font-bold text-[var(--ink)]">
                  24/7 Traveler Assistance
                </h3>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Direct hotline &amp; WhatsApp assistance from departure until you return home safely.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-[var(--sky-50)] border border-[var(--sky-200)] shadow-card space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--sky-200)] pb-5">
                <YashLogo />
                <span className="text-xs font-semibold text-[#15803D]">
                  ● Verified Travel Agency
                </span>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3.5">
                  <MapPin className="w-5 h-5 text-[var(--ocean-500)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                      Head Office Address
                    </p>
                    <p className="text-[var(--ink)] font-semibold">
                      276A/2E, Dehiwala Road, Boralesgamuwa, Sri Lanka
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <Phone className="w-5 h-5 text-[var(--ocean-500)] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                      Yash Holidays Hotline
                    </p>
                    <a
                      href="tel:0112312093"
                      className="text-[var(--ink)] font-bold text-lg hover:text-[var(--ocean-700)]"
                    >
                      011 231 2093
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MessageCircle className="w-5 h-5 text-[#15803D] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[var(--muted)]">
                      Direct Mobile &amp; WhatsApp
                    </p>
                    <div className="flex flex-wrap gap-3 mt-1">
                      <a
                        href="tel:+94775841144"
                        className="text-[var(--ink)] font-bold hover:text-[var(--ocean-700)]"
                      >
                        +94 77 584 1144
                      </a>
                      <span className="text-[var(--sky-400)]">|</span>
                      <a
                        href="tel:+94773124859"
                        className="text-[var(--ink)] font-bold hover:text-[var(--ocean-700)]"
                      >
                        +94 77 312 4859
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[var(--sky-200)] flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => navigateToTab('visa')}
                  className="btn-coral flex-1 py-3 px-4 text-xs uppercase tracking-wider"
                >
                  Explore Visit Visas
                </button>
                <button
                  type="button"
                  onClick={() => navigateToTab('airtickets')}
                  className="btn-outline-ocean bg-white flex-1 py-3 px-4 text-xs uppercase tracking-wider"
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
);

export const ContactUsPage = ({
  formData,
  setFormData,
  formSubmitted,
  setFormSubmitted,
  handleFormSubmit,
  sendLeadToWhatsApp,
  googleMapsUrl,
  googleReviewsUrl,
}) => (
  <div className="pt-16 min-[1101px]:pt-[74px]">
    {/* Contact Us Light Editorial Header Banner */}
    <section className="py-12 sm:py-16 bg-mesh-sky border-b border-[var(--sky-200)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--ocean-700)] mb-3">
          <Phone className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
          <span>Yash Holidays Boralesgamuwa Desk</span>
        </div>

        <h1 className="hero-headline font-serif font-bold text-[var(--ink)] mb-4">
          Contact <span className="editorial-italic">Yash Holidays</span>
        </h1>

        <p className="max-w-2xl mx-auto text-sm sm:text-base text-[var(--muted)] leading-relaxed">
          Visit our Boralesgamuwa office or speak directly with our specialists for tailor-made holidays,
          worldwide air tickets, visit visas, and travel insurance.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs sm:text-sm">
          <a
            href="tel:0112312093"
            className="btn-coral px-4 py-2.5 inline-flex items-center gap-2"
          >
            <Phone className="w-4 h-4" aria-hidden="true" />
            <span>Call 011 231 2093</span>
          </a>
          <a
            href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20would%20like%20to%20speak%20with%20a%20travel%20specialist."
            target="_blank"
            rel="noreferrer"
            className="btn-outline-ocean bg-white px-4 py-2.5 inline-flex items-center gap-2"
          >
            <WhatsAppIcon className="w-4 h-4 text-[#15803D]" />
            <span>WhatsApp +94 77 584 1144</span>
          </a>
          <a
            href="mailto:yashholidays.lk@gmail.com"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-[9px] bg-white border border-[var(--sky-200)] text-[var(--ink)] font-medium hover:border-[var(--ocean-500)] transition-colors"
          >
            <Mail className="w-4 h-4 text-[var(--ocean-500)]" aria-hidden="true" />
            <span>yashholidays.lk@gmail.com</span>
          </a>
        </div>
      </div>
    </section>

    <ContactSection
      formData={formData}
      setFormData={setFormData}
      formSubmitted={formSubmitted}
      setFormSubmitted={setFormSubmitted}
      handleFormSubmit={handleFormSubmit}
      sendLeadToWhatsApp={sendLeadToWhatsApp}
      googleMapsUrl={googleMapsUrl}
      googleReviewsUrl={googleReviewsUrl}
    />
  </div>
);
