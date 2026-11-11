import React from 'react';
import { X, Camera, Star, Check, Lock } from 'lucide-react';
import { WhatsAppIcon } from './TravelUI';

export const SiteModals = ({
  isReviewModalOpen,
  setIsReviewModalOpen,
  editingReviewId,
  reviewForm,
  setReviewForm,
  handleSaveReview,
  activePhotoModal,
  setActivePhotoModal,
  isOwnerMode,
  setIsOwnerMode,
  isOwnerLoginModalOpen,
  setIsOwnerLoginModalOpen,
  ownerPasswordInput,
  setOwnerPasswordInput,
  ownerPasswordError,
  setOwnerPasswordError,
}) => (
  <>
    {/* Desktop-only Single Floating WhatsApp Action Button (Bottom Right) */}
    <a
      href="https://wa.me/94775841144?text=Hello%20Yash%20Holidays!%20I%20visited%20your%20website%20and%20would%20like%20to%20plan%20a%20trip."
      target="_blank"
      rel="noreferrer"
      title="WhatsApp Yash Holidays (+94 77 584 1144)"
      aria-label="Chat on WhatsApp with Yash Holidays"
      className="hidden lg:inline-flex fixed bottom-6 right-6 z-40 items-center gap-2.5 px-4 py-3 rounded-full bg-[var(--coral)] hover:bg-[var(--coral-hover)] text-white font-semibold text-sm shadow-card transition-all hover:-translate-y-0.5"
    >
      <WhatsAppIcon className="w-5 h-5 text-white" />
      <span>WhatsApp</span>
    </a>

    {/* Review Customizer Modal (Owner Mode) */}
    {isReviewModalOpen && (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="review-modal-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B3A52]/60 overflow-y-auto modal-scroll"
      >
        <div className="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-white border border-[var(--sky-200)] shadow-card my-8">
          <button
            type="button"
            onClick={() => setIsReviewModalOpen(false)}
            className="absolute top-5 right-5 p-2 rounded-full bg-[var(--sky-50)] hover:bg-[var(--sky-100)] text-[var(--ink)] transition-colors"
            aria-label="Close review modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="mb-6 pr-8">
            <span className="text-xs uppercase tracking-widest text-[var(--ocean-700)] font-bold">
              {editingReviewId ? 'EDIT CUSTOMER REVIEW' : 'ADD NEW CUSTOMER REVIEW'}
            </span>
            <h3 id="review-modal-title" className="font-serif text-2xl font-bold text-[var(--ink)] mt-1">
              {editingReviewId ? 'Customize Customer Review' : 'Share Your Travel Experience'}
            </h3>
            <p className="text-xs text-[var(--muted)] mt-1">
              {editingReviewId
                ? 'Update the review text, rating, or traveler details below. Changes are saved automatically.'
                : 'Add a new genuine traveler review. It will instantly appear on the website and reviews list.'}
            </p>
          </div>

          <form onSubmit={handleSaveReview} className="space-y-4 text-left">
            <div>
              <label
                htmlFor="rev-name"
                className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
              >
                Customer / Traveler Name *
              </label>
              <input
                id="rev-name"
                type="text"
                required
                placeholder="e.g. Kasun & Nimanthi Perera"
                value={reviewForm.name}
                onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                className="travel-input w-full px-4 py-2.5"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="rev-location"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
                >
                  Home City / Location
                </label>
                <input
                  id="rev-location"
                  type="text"
                  placeholder="e.g. Colombo, Sri Lanka"
                  value={reviewForm.location}
                  onChange={(e) => setReviewForm({ ...reviewForm, location: e.target.value })}
                  className="travel-input w-full px-4 py-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="rev-date"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
                >
                  Travel Date / Year
                </label>
                <input
                  id="rev-date"
                  type="text"
                  placeholder="e.g. November 2026"
                  value={reviewForm.date}
                  onChange={(e) => setReviewForm({ ...reviewForm, date: e.target.value })}
                  className="travel-input w-full px-4 py-2.5"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="rev-tour"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
                >
                  Tour / Destination Name
                </label>
                <input
                  id="rev-tour"
                  type="text"
                  required
                  placeholder="e.g. Bali 5D4N Luxury Tour"
                  value={reviewForm.tour}
                  onChange={(e) => setReviewForm({ ...reviewForm, tour: e.target.value })}
                  className="travel-input w-full px-4 py-2.5"
                />
              </div>

              <div>
                <label
                  htmlFor="rev-tag"
                  className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
                >
                  Category Tag
                </label>
                <select
                  id="rev-tag"
                  value={reviewForm.tag}
                  onChange={(e) => setReviewForm({ ...reviewForm, tag: e.target.value })}
                  className="travel-select w-full px-4 py-2.5"
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
              <span className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold">
                Star Rating (Click to set 1-5 Stars)
              </span>
              <div className="flex items-center gap-2 p-2.5 bg-[var(--sky-50)] rounded-xl border border-[var(--sky-200)]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    aria-label={`${star} Stars`}
                    onClick={() => setReviewForm({ ...reviewForm, rating: star })}
                    className="p-1 hover:scale-110 transition-transform"
                  >
                    <Star
                      className={`w-6 h-6 ${
                        star <= reviewForm.rating
                          ? 'text-amber-500 fill-amber-500'
                          : 'text-[var(--sky-200)]'
                      }`}
                    />
                  </button>
                ))}
                <span className="ml-3 text-xs font-bold text-[var(--ink)]">
                  {reviewForm.rating} / 5 Stars
                </span>
              </div>
            </div>

            <div>
              <label
                htmlFor="rev-highlight"
                className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
              >
                Highlight Quote / Headline
              </label>
              <input
                id="rev-highlight"
                type="text"
                placeholder="e.g. Outstanding 5-Star Service & Villa"
                value={reviewForm.highlight}
                onChange={(e) => setReviewForm({ ...reviewForm, highlight: e.target.value })}
                className="travel-input w-full px-4 py-2.5"
              />
            </div>

            <div>
              <label
                htmlFor="rev-text"
                className="block text-xs uppercase tracking-wider text-[var(--ink)] mb-1 font-semibold"
              >
                Review Text / Feedback *
              </label>
              <textarea
                id="rev-text"
                rows={4}
                required
                placeholder="Describe the experience with Yash Holidays (hotels, guides, transfers, visa assistance, pricing)..."
                value={reviewForm.review}
                onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                className="travel-textarea w-full px-4 py-2.5 resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-[var(--sky-100)]">
              <button
                type="button"
                onClick={() => setIsReviewModalOpen(false)}
                className="btn-outline-ocean px-5 py-2 text-xs"
              >
                Cancel
              </button>
              <button type="submit" className="btn-coral px-6 py-2 text-xs uppercase tracking-wider">
                <Check className="w-4 h-4" aria-hidden="true" />
                <span>{editingReviewId ? 'Save Changes' : 'Publish Review'}</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    )}

    {/* Lightbox Modal for Traveler Photos */}
    {activePhotoModal && (
      <div
        role="dialog"
        aria-modal="true"
        className="fixed inset-0 z-[100] bg-[#1B3A52]/80 flex items-center justify-center p-3 sm:p-6 modal-scroll"
        onClick={() => setActivePhotoModal(null)}
      >
        <div
          className="relative max-w-4xl w-full bg-white border border-[var(--sky-200)] rounded-3xl overflow-hidden shadow-card flex flex-col max-h-[95dvh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--sky-100)] bg-[var(--sky-50)]">
            <div className="flex items-center gap-2.5">
              <div className="p-1.5 rounded-lg bg-[var(--sky-100)] text-[var(--ocean-500)]">
                <Camera className="w-4 h-4" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-sans text-sm font-bold text-[var(--ink)] leading-tight">
                  {activePhotoModal.title || 'Customer Travel Moment'}
                </h4>
                <p className="text-xs text-[var(--ocean-700)]">
                  {activePhotoModal.location || 'Malaysia Getaway'}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActivePhotoModal(null)}
              className="p-2 rounded-full bg-white border border-[var(--sky-200)] text-[var(--ink)] hover:bg-[var(--sky-100)] transition-colors"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="relative flex-1 flex items-center justify-center bg-[var(--sky-50)] p-2 sm:p-4 overflow-hidden">
            <img
              src={activePhotoModal.url}
              alt={activePhotoModal.title}
              className="max-h-[72dvh] w-auto max-w-full object-contain rounded-xl shadow-md"
            />
          </div>

          <div className="px-5 py-3 border-t border-[var(--sky-100)] bg-white flex flex-wrap items-center justify-between gap-3 text-xs">
            <span className="text-[var(--muted)]">Verified Yash Holidays Traveler Photo</span>
            <a
              href={`https://wa.me/94775841144?text=${encodeURIComponent(
                `Hello Yash Holidays! I love this customer photo at ${activePhotoModal.title} (${activePhotoModal.location}). Can you share a tour package for this destination?`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-coral px-4 py-2 min-h-[36px] text-xs"
            >
              <WhatsAppIcon className="w-3.5 h-3.5" />
              <span>Inquire About This Tour</span>
            </a>
          </div>
        </div>
      </div>
    )}

    {/* Floating Host / Owner Mode Indicator */}
    {isOwnerMode && (
      <div className="fixed bottom-20 lg:bottom-6 left-4 z-50 bg-white border-2 border-amber-400 shadow-card rounded-2xl px-4 py-2.5 flex items-center gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500" aria-hidden="true" />
          <span className="text-xs font-bold text-[var(--ink)]">Host / Owner Mode Active</span>
        </div>
        <span className="text-[11px] text-[var(--muted)] hidden sm:inline">
          (Review customize &amp; edit controls unlocked)
        </span>
        <button
          type="button"
          onClick={() => {
            setIsOwnerMode(false);
            try {
              localStorage.removeItem('yash_owner_mode');
            } catch (e) {
              console.error(e);
            }
          }}
          className="text-xs font-bold px-3 py-1 rounded-lg bg-amber-100 hover:bg-amber-200 text-[var(--ink)] border border-amber-300 transition-colors"
        >
          Exit Host Mode
        </button>
      </div>
    )}

    {/* Host / Owner Login Modal */}
    {isOwnerLoginModalOpen && (
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="owner-login-title"
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B3A52]/60 modal-scroll"
      >
        <div className="relative w-full max-w-sm p-6 rounded-3xl bg-white border border-[var(--sky-200)] shadow-card text-left">
          <button
            type="button"
            onClick={() => {
              setIsOwnerLoginModalOpen(false);
              setOwnerPasswordError('');
              setOwnerPasswordInput('');
            }}
            aria-label="Close site owner login modal"
            className="absolute top-4 right-4 p-2 rounded-full bg-[var(--sky-50)] hover:bg-[var(--sky-100)] text-[var(--ink)] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <div className="p-2.5 rounded-xl bg-[var(--sky-100)] border border-[var(--sky-200)]">
              <Lock className="w-5 h-5 text-[var(--ocean-700)]" aria-hidden="true" />
            </div>
            <div>
              <h4 id="owner-login-title" className="font-serif text-lg font-bold text-[var(--ink)]">
                Site Owner Access
              </h4>
              <p className="text-xs text-[var(--muted)]">Yash Holidays Host Authentication</p>
            </div>
          </div>

          <p className="text-xs text-[var(--muted)] mb-4 leading-relaxed">
            Enter the site owner password to enable review customization, editing, and publishing controls.
          </p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              const clean = ownerPasswordInput.trim().toLowerCase();
              if (clean === 'yash2026' || clean === 'yash123' || clean === 'hoster' || clean === 'admin') {
                setIsOwnerMode(true);
                try {
                  localStorage.setItem('yash_owner_mode', 'true');
                } catch (err) {
                  console.error(err);
                }
                setIsOwnerLoginModalOpen(false);
                setOwnerPasswordInput('');
                setOwnerPasswordError('');
              } else {
                setOwnerPasswordError('Incorrect host password. Please try again.');
              }
            }}
            className="space-y-3"
          >
            <div>
              <label htmlFor="host-password-input" className="sr-only">
                Host Password
              </label>
              <input
                id="host-password-input"
                type="password"
                autoFocus
                required
                placeholder="Enter Host Password..."
                value={ownerPasswordInput}
                onChange={(e) => {
                  setOwnerPasswordInput(e.target.value);
                  setOwnerPasswordError('');
                }}
                className="travel-input w-full px-4 py-2.5"
              />
              {ownerPasswordError && (
                <p className="text-xs text-[#DC2626] mt-1.5 font-medium">{ownerPasswordError}</p>
              )}
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => {
                  setIsOwnerLoginModalOpen(false);
                  setOwnerPasswordError('');
                  setOwnerPasswordInput('');
                }}
                className="btn-outline-ocean px-4 py-2 min-h-[38px] text-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-coral px-5 py-2 min-h-[38px] text-xs uppercase tracking-wider"
              >
                Unlock Host Mode
              </button>
            </div>
          </form>
        </div>
      </div>
    )}
  </>
);
