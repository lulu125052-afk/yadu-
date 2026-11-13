import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/testimonials';
import { Testimonial } from '../types';
import { Star, ShieldCheck, Plus, Check } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [reviews, setReviews] = useState<Testimonial[]>(TESTIMONIALS);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form state
  const [authorName, setAuthorName] = useState('');
  const [authorLocation, setAuthorLocation] = useState('');
  const [productBought, setProductBought] = useState('Pure Vedic Buffalo Bilona Ghee (1L)');
  const [rating, setRating] = useState(5);
  const [highlight, setHighlight] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const filteredReviews = reviews.filter((r) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'classic') return r.productBought.toLowerCase().includes('classic') || r.productBought.toLowerCase().includes('pure vedic');
    if (activeFilter === 'reserve') return r.productBought.toLowerCase().includes('reserve');
    if (activeFilter === 'family') return r.productBought.toLowerCase().includes('family');
    return true;
  });

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName.trim() || !comment.trim()) return;

    const newRev: Testimonial = {
      id: `rev-${Date.now()}`,
      name: authorName.trim(),
      location: authorLocation.trim() || 'Verified Indian Consumer',
      rating,
      date: 'Just now',
      verified: true,
      productBought,
      highlight: highlight.trim() || 'Exceptional aroma and authentic granular texture!',
      comment: comment.trim(),
    };

    setReviews([newRev, ...reviews]);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setIsModalOpen(false);
      setAuthorName('');
      setAuthorLocation('');
      setHighlight('');
      setComment('');
    }, 1500);
  };

  return (
    <section id="reviews" className="py-20 bg-[#FAF5EC] relative border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966107] mb-3">
              <span className="w-5 h-[1px] bg-[#966107]" />
              <span className="font-royal">Verified Indian Households</span>
            </div>
            <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17]">
              ग्राहकों का अटूट विश्वास (Customer Reviews)
            </h2>
            <div className="flex items-center gap-3 mt-3 text-xs sm:text-sm text-[#5C4D43]">
              <div className="flex items-center text-[#E29D2C]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="font-bold text-[#241D17]">4.9 out of 5</span>
              <span>·</span>
              <span>Based on 1,800+ verified Murrah buffalo ghee dispatches</span>
            </div>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-[#C98816] bg-white hover:bg-[#FAF7F2] text-[#966107] text-xs font-bold transition-all shadow-sm hover:shadow cursor-pointer self-start md:self-auto"
          >
            <Plus className="w-4 h-4" />
            <span>Share Your Review</span>
          </button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
          {[
            { id: 'all', label: 'All Reviews (1,800+)' },
            { id: 'classic', label: 'Classic Buffalo Bilona' },
            { id: 'reserve', label: 'Reserve Earthen-Simmered' },
            { id: 'family', label: 'Family & Festive Pack' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#241D17] text-white shadow-sm'
                  : 'bg-white text-[#3B2E24] border border-[#EADFCF] hover:bg-[#FAF7F2]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-2xl p-6 border border-[#EADFCF] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* Rating & Verified Tag */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center text-[#E29D2C]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  {rev.verified && (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      <ShieldCheck className="w-3 h-3 text-emerald-700" />
                      <span>Verified Buyer</span>
                    </span>
                  )}
                </div>

                {/* Highlight */}
                <h4 className="font-bold text-sm text-[#241D17] mb-2 leading-snug">
                  &ldquo;{rev.highlight}&rdquo;
                </h4>

                {/* Comment */}
                <p className="text-xs text-[#5C4D43] leading-relaxed mb-4">
                  {rev.comment}
                </p>
              </div>

              {/* Author & Product details */}
              <div className="pt-4 border-t border-[#EADFCF]/70 text-xs">
                <div className="font-bold text-[#241D17]">{rev.name}</div>
                <div className="text-[11px] text-stone-500">{rev.location}</div>
                <div className="text-[10px] text-[#966107] font-semibold mt-1">
                  Purchased: {rev.productBought}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 border border-[#EADFCF] shadow-2xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-stone-400 hover:text-stone-700 cursor-pointer font-bold text-lg"
            >
              ✕
            </button>

            <h3 className="font-brand text-2xl font-bold text-[#241D17] mb-1">
              यदु भैंस घी समीक्षा लिखें (Write a Review)
            </h3>
            <p className="text-xs text-[#5C4D43] mb-6">
              Share your experience with aroma, pearl-white granular texture, and authenticity.
            </p>

            {submitted ? (
              <div className="py-12 text-center text-emerald-700 space-y-2">
                <Check className="w-12 h-12 mx-auto bg-emerald-100 p-2 rounded-full" />
                <h4 className="font-bold text-lg">धन्यवाद! Your review is submitted</h4>
                <p className="text-xs text-stone-600">Your feedback inspires our artisan buffalo goshalas.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4 text-xs">
                <div>
                  <label className="block font-bold text-stone-700 mb-1">Your Full Name:</label>
                  <input
                    type="text"
                    required
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="e.g. Radhika Sharma"
                    className="w-full h-10 px-3 rounded-xl border border-[#EADFCF] text-sm focus:outline-none focus:ring-2 focus:ring-[#C98816]/40"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Location / City:</label>
                  <input
                    type="text"
                    value={authorLocation}
                    onChange={(e) => setAuthorLocation(e.target.value)}
                    placeholder="e.g. Jaipur, Rajasthan"
                    className="w-full h-10 px-3 rounded-xl border border-[#EADFCF] text-sm focus:outline-none focus:ring-2 focus:ring-[#C98816]/40"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Product Purchased:</label>
                  <select
                    value={productBought}
                    onChange={(e) => setProductBought(e.target.value)}
                    className="w-full h-10 px-3 rounded-xl border border-[#EADFCF] text-sm focus:outline-none focus:ring-2 focus:ring-[#C98816]/40 bg-white"
                  >
                    <option value="Pure Vedic Buffalo Bilona Ghee (1L)">Pure Vedic Buffalo Bilona Ghee (1L)</option>
                    <option value="Pure Vedic Buffalo Bilona Ghee (500ml)">Pure Vedic Buffalo Bilona Ghee (500ml)</option>
                    <option value="Reserve Earthen-Simmered Buffalo Ghee (1L)">Reserve Earthen-Simmered Buffalo Ghee (1L)</option>
                    <option value="Royal Shahi Buffalo Ghee Family Pack (5L)">Royal Shahi Buffalo Ghee Family Pack (5L)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Rating:</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => setRating(star)}
                        className="text-lg p-1 text-[#E29D2C] cursor-pointer"
                      >
                        {star <= rating ? '★' : '☆'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Key Highlight (Title):</label>
                  <input
                    type="text"
                    value={highlight}
                    onChange={(e) => setHighlight(e.target.value)}
                    placeholder="e.g. Unbelievable aroma and dense pearl-white danedaar texture!"
                    className="w-full h-10 px-3 rounded-xl border border-[#EADFCF] text-sm focus:outline-none focus:ring-2 focus:ring-[#C98816]/40"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-700 mb-1">Your Detailed Experience:</label>
                  <textarea
                    rows={3}
                    required
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Tell us about the aroma, taste, how your family enjoyed it on rotis or sweets..."
                    className="w-full p-3 rounded-xl border border-[#EADFCF] text-sm focus:outline-none focus:ring-2 focus:ring-[#C98816]/40"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#241D17] text-[#FAF7F2] font-semibold text-sm rounded-xl hover:bg-[#3B2E24] transition-colors cursor-pointer"
                >
                  Submit Verified Review
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
