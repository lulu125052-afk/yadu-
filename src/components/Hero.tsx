import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Sparkles, Award } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F2] via-[#FAF5EC] to-[#FAF7F2] pt-8 pb-16 md:py-20 border-b border-[#EADFCF]">
      {/* Subtle traditional aura / radial warm glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-gradient-to-tr from-[#E29D2C]/10 via-[#C98816]/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Brand Story & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial Kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#966107] mb-4">
              <span className="w-6 h-[1px] bg-[#966107]" />
              <span className="font-royal">Vedic Bilona Tradition · 100% Pure Murrah Buffalo Ghee</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#241D17] leading-[1.15] mb-6 text-balance">
              शुद्धता और परंपरा का प्रतीक —{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#966107] via-[#C98816] to-[#8F4E24]">
                यदु शुद्ध भैंस का घी
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-[#4A3B32] leading-relaxed mb-8 max-w-2xl font-normal">
              Handcrafted strictly from whole cultured curd of indigenous free-grazing Murrah buffaloes using the ancient bidirectional wooden Bilona method. Renowned for its pearl-white crystalline granular (दानेदार) texture, deeply comforting village aroma, high caloric stamina, and zero preservatives.
            </p>

            {/* CTAs: Primary WhatsApp & Secondary Explore */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-7 py-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#1EBE5D] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 group cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                <span className="tracking-wide">Order Buffalo Ghee via WhatsApp</span>
                <span className="text-xs font-normal opacity-90 pl-1 border-l border-white/30 hidden sm:inline">
                  Instant Reply
                </span>
              </a>

              <a
                href="#products"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-[#241D17] bg-[#F4EFE6] hover:bg-[#EADFCF] border border-[#EADFCF] rounded-xl transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>View Buffalo Ghee Packs</span>
                <ArrowRight className="w-4 h-4 text-[#966107]" />
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-[#EADFCF]/70">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
                <div className="flex flex-col">
                  <span className="font-royal font-bold text-sm text-[#241D17]">100% Murrah Breed</span>
                  <span className="text-[#6E5A4E]">Curd-Churned (Bilona)</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-royal font-bold text-sm text-[#241D17]">NABL Certified</span>
                  <span className="text-[#6E5A4E]">99.88% Pure Milk Fat</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-royal font-bold text-sm text-[#241D17]">Pearl-White Danedaar</span>
                  <span className="text-[#6E5A4E]">Natural Thick Crystals</span>
                </div>
                <div className="flex flex-col">
                  <span className="font-royal font-bold text-sm text-[#241D17]">Pan-India COD</span>
                  <span className="text-[#6E5A4E]">Glass Jar Safe Packed</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame with Buffalo Ghee imagery */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#E29D2C]/40 bg-[#241D17]">
                <img
                  src="/src/assets/images/product_buffalo_ghee_1794222792556.jpg"
                  alt="Pure Vedic Murrah Buffalo Ghee with dense granular texture in crystal jar"
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Soft gradient overlay for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#241D17]/80 via-transparent to-black/10 pointer-events-none" />

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#FAF7F2]/95 backdrop-blur-md border border-[#EADFCF] shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#FAF2E2] border border-[#E29D2C] flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5 text-[#966107]" />
                    </div>
                    <div>
                      <div className="font-bold text-xs text-[#241D17]">Authentic दानेदार Buffalo Ghee</div>
                      <div className="text-[11px] text-[#6E5A4E]">Pure curd-churned Murrah milk</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-royal text-xs font-bold text-[#966107]">FSSAI Approved</span>
                    <span className="block text-[10px] text-[#8F4E24]">Zero Preservatives</span>
                  </div>
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-[#241D17] text-[#FAF7F2] border border-[#C98816]/60 rounded-xl px-3.5 py-2 shadow-xl flex items-center gap-2">
                <Award className="w-4 h-4 text-[#E29D2C]" />
                <div className="text-left">
                  <div className="text-[10px] uppercase tracking-wider text-[#EADFCF]">Customer Rating</div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <span className="text-[#E29D2C]">★</span> 4.9/5 <span className="text-stone-400 font-normal">(1,800+ families)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
