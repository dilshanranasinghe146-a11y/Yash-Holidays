import React from 'react';
import { Plane, Compass } from 'lucide-react';
import yashLogo from '../assets/yash-logo.jpg';

// Official WhatsApp vector icon (pure vector, zero glow)
export const WhatsAppIcon = ({ className = 'w-5 h-5' }) => (
  <svg
    viewBox="0 0 24 24"
    className={`shrink-0 ${className}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

// Official Google Reviews vector icon
export const GoogleIcon = ({ className = 'w-5 h-5' }) => (
  <svg viewBox="0 0 24 24" className={`shrink-0 ${className}`} aria-hidden="true">
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

// Clean line traveler icons in --ocean-500 (no glow filter)
export const AdultPaxIcon = ({ className = 'w-7 h-7 text-[var(--ocean-500)]' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <circle cx="12" cy="7" r="4.2" />
    <path d="M4.5 21c0-4.14 3.36-7.5 7.5-7.5s7.5 3.36 7.5 7.5" />
  </svg>
);

export const ChildPaxIcon = ({ className = 'w-7 h-7 text-[var(--ocean-500)]' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <circle cx="12" cy="6.5" r="3.5" />
    <path d="M9.5 4.8c1.2-1 3.2-.8 4 1" />
    <path d="M6.5 18c0-2.8 1.8-4.5 4-4.5h3c2.2 0 4 1.7 4 4.5" />
    <path d="M6.5 14v4" />
    <path d="M17.5 14v4" />
    <path d="M10 18v3" />
    <path d="M14 18v3" />
  </svg>
);

export const InfantPaxIcon = ({ className = 'w-7 h-7 text-[var(--ocean-500)]' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
    aria-hidden="true"
  >
    <path d="M12 4.2c-.6-1.2.6-2 1.4-1.2.6.6 0 1.4-.8 1.4" />
    <circle cx="12" cy="8.2" r="3.8" />
    <path d="M7.5 12c-1.8-.8-2.6-2.2-2.8-3.2" />
    <path d="M16.5 12c1.8-.8 2.6-2.2 2.8-3.2" />
    <path d="M7.8 13.5c0 4.2 1.9 7.5 4.2 7.5s4.2-3.3 4.2-7.5" />
    <path d="M8.5 17c2 1 5 1 7 0" />
  </svg>
);

// Clean Yash Holidays Logo without heavy white box
export const YashLogo = ({ onDark = false, compact = false }) => (
  <div className="inline-flex items-center gap-2.5 select-none shrink-0 whitespace-nowrap">
    <img
      src={yashLogo}
      alt="Yash Holidays Pvt Ltd Logo"
      className={`w-10 h-10 object-contain shrink-0 ${
        onDark ? 'rounded-full bg-white/95 p-1 ring-2 ring-white/25' : 'mix-blend-multiply'
      }`}
    />
    <div className="flex flex-col shrink-0">
      <div className="flex items-baseline gap-1.5 leading-none whitespace-nowrap">
        <span
          className={`font-serif text-lg ${compact ? 'sm:text-xl' : 'sm:text-xl'} font-bold tracking-tight ${
            onDark ? 'text-white' : 'text-[var(--ink)]'
          }`}
        >
          Yash
        </span>
        <span
          className={`font-sans text-sm ${compact ? 'sm:text-base' : 'sm:text-base'} font-semibold tracking-[0.16em] uppercase ${
            onDark ? 'text-[var(--sky-200)]' : 'text-[var(--ocean-500)]'
          }`}
        >
          Holidays
        </span>
      </div>
      <div className="flex items-center gap-1.5 mt-0.5 whitespace-nowrap">
        <span
          className={`h-px w-4 ${onDark ? 'bg-[var(--sky-400)]' : 'bg-[var(--sky-400)]'}`}
          aria-hidden="true"
        />
        <span
          className={`text-[10px] uppercase tracking-[0.2em] font-semibold ${
            onDark ? 'text-[var(--sky-100)]' : 'text-[var(--muted)]'
          }`}
        >
          Pvt Ltd
        </span>
      </div>
    </div>
  </div>
);

// Country two-letter monogram code map (avoids inconsistent OS flag emojis as UI icons)
export const VISA_COUNTRY_CODES = {
  canada: 'CA',
  newzealand: 'NZ',
  uk: 'UK',
  us: 'US',
  malaysia: 'MY',
  thailand: 'TH',
  vietnam: 'VN',
  india: 'IN',
  china: 'CN',
  japan: 'JP',
};

// Shared PAX Counter Component (used identically by Custom Tour Builder & Air Tickets Quote)
export const PaxSelector = ({
  title,
  adults,
  childrenCount,
  infants,
  totalPax,
  totalLabel = 'Travelers',
  onUpdate,
}) => {
  const rows = [
    {
      label: 'Adults',
      ageHint: '(12+ Years)',
      value: adults,
      min: 1,
      Icon: AdultPaxIcon,
      onDec: () => onUpdate(-1, 0, 0),
      onInc: () => onUpdate(1, 0, 0),
      decLabel: `Decrease ${title} Adults`,
      incLabel: `Increase ${title} Adults`,
    },
    {
      label: 'Children',
      ageHint: '(2–11 Years)',
      value: childrenCount,
      min: 0,
      Icon: ChildPaxIcon,
      onDec: () => onUpdate(0, -1, 0),
      onInc: () => onUpdate(0, 1, 0),
      decLabel: `Decrease ${title} Children`,
      incLabel: `Increase ${title} Children`,
    },
    {
      label: 'Infants',
      ageHint: '(Under 2 Years)',
      value: infants,
      min: 0,
      Icon: InfantPaxIcon,
      onDec: () => onUpdate(0, 0, -1),
      onInc: () => onUpdate(0, 0, 1),
      decLabel: `Decrease ${title} Infants`,
      incLabel: `Increase ${title} Infants`,
    },
  ];

  return (
    <div className="bg-[var(--sky-50)] border border-[var(--sky-200)] rounded-2xl p-4 sm:p-6 space-y-4">
      <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[var(--ocean-700)]">
        {title}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-stretch">
        <div className="md:col-span-8 flex flex-col justify-between divide-y divide-[var(--sky-200)] md:pr-4">
          {rows.map((row) => {
            const Icon = row.Icon;
            return (
              <div
                key={row.label}
                className="flex items-center justify-between py-3 first:pt-0 last:pb-0 gap-3"
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--ocean-500)] shrink-0" />
                  <div className="flex flex-wrap items-baseline gap-x-2">
                    <span className="text-base font-semibold text-[var(--ink)]">
                      {row.label}
                    </span>
                    <span className="text-xs sm:text-sm text-[var(--muted)] font-medium">
                      {row.ageHint}
                    </span>
                  </div>
                </div>

                <div className="inline-flex items-center justify-between rounded-xl bg-white border border-[var(--sky-200)] px-1.5 py-1 min-w-[126px]">
                  <button
                    type="button"
                    onClick={row.onDec}
                    disabled={row.value <= row.min}
                    aria-label={row.decLabel}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--ink)] hover:bg-[var(--sky-100)] disabled:opacity-35 disabled:hover:bg-transparent font-bold text-lg transition-colors"
                  >
                    −
                  </button>
                  <span className="text-base font-bold text-[var(--ocean-700)] px-2 min-w-[26px] text-center select-none">
                    {row.value}
                  </span>
                  <button
                    type="button"
                    onClick={row.onInc}
                    aria-label={row.incLabel}
                    className="w-9 h-9 rounded-lg flex items-center justify-center text-[var(--ink)] hover:bg-[var(--sky-100)] font-bold text-lg transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:col-span-4 rounded-xl border border-[var(--sky-200)] bg-white p-4 sm:p-5 flex flex-col justify-between gap-4">
          <div>
            <span className="block text-xs uppercase tracking-wider text-[var(--muted)] font-semibold mb-3">
              PAX Summary
            </span>
            <div className="space-y-2.5 text-sm">
              <div className="flex items-center gap-2.5 text-[var(--ink)] font-semibold">
                <AdultPaxIcon className="w-5 h-5 text-[var(--ocean-500)]" />
                <span>{adults}x Adults</span>
              </div>
              <div className="flex items-center gap-2.5 text-[var(--muted)] font-medium">
                <ChildPaxIcon className="w-5 h-5 text-[var(--ocean-500)]" />
                <span>{childrenCount}x Children</span>
              </div>
              <div className="flex items-center gap-2.5 text-[var(--muted)] font-medium">
                <InfantPaxIcon className="w-5 h-5 text-[var(--ocean-500)]" />
                <span>{infants}x Infants</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-[var(--sky-100)]">
            <div className="rounded-lg bg-[var(--sky-100)] px-3 py-2 text-xs text-center font-semibold text-[var(--ink)]">
              Total:{' '}
              <span className="text-[var(--ocean-700)] font-bold">
                {totalPax} {totalLabel}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Subtle decorative dotted flight path with airplane between sections
export const FlightPathDivider = ({ label }) => (
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4" aria-hidden="true">
    <div className="flex items-center gap-4">
      <div className="flex-1 border-t-2 border-dashed border-[var(--sky-200)]" />
      <div className="inline-flex items-center gap-2 text-[var(--ocean-500)]">
        <Plane className="w-4 h-4 rotate-45" />
        {label && (
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--muted)]">
            {label}
          </span>
        )}
      </div>
      <div className="flex-1 border-t-2 border-dashed border-[var(--sky-200)]" />
    </div>
  </div>
);

// Subtle curved wave transition between page surfaces
export const SectionWave = ({ fill = '#FFFFFF', bg = 'transparent', flip = false }) => (
  <div
    className={`w-full overflow-hidden leading-none select-none ${flip ? 'rotate-180' : ''}`}
    style={{ backgroundColor: bg }}
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 1440 48"
      preserveAspectRatio="none"
      className="w-full h-6 sm:h-10 block"
    >
      <path
        d="M0,18 C320,52 720,0 1080,28 C1260,42 1380,26 1440,18 L1440,48 L0,48 Z"
        fill={fill}
      />
    </svg>
  </div>
);

// Subtle passport-stamp travel accent (non-interactive corner ornament, straight orientation)
export const PassportStampAccent = ({ code = 'CMB', label = 'BORALESGAMUWA • LK' }) => (
  <div
    aria-hidden="true"
    className="hidden sm:flex items-center gap-2 border border-dashed border-[var(--sky-200)] rounded-xl px-3 py-1.5 text-[var(--ocean-500)] select-none bg-white/80"
  >
    <Compass className="w-4 h-4 shrink-0" />
    <div className="leading-none text-left">
      <span className="block text-[9px] uppercase tracking-[0.2em] font-bold text-[var(--muted)]">
        {label}
      </span>
      <span className="block text-xs font-bold tracking-widest text-[var(--ocean-700)]">
        YASH • {code}
      </span>
    </div>
  </div>
);
