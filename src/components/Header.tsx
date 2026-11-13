import React, { useState } from 'react';
import { MessageCircle, ShoppingBag, Menu, X, ShieldCheck } from 'lucide-react';
import { getGeneralWhatsAppUrl, DISPLAY_PHONE } from '../utils/whatsapp';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenPurityTest: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenPurityTest,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EADFCF]/80 transition-all">
      {/* Top Announcement Bar */}
      {showBanner && (
        <div className="bg-[#241D17] text-[#F4EFE6] px-4 py-1.5 text-xs font-medium flex items-center justify-between border-b border-[#3B2E24]">
          <div className="mx-auto flex items-center gap-2 tracking-wide text-center">
            <span className="text-[#E29D2C] hidden sm:inline">✦</span>
            <span>
              100% Pure Murrah Buffalo Bilona Ghee · Fresh batch churned at Brahma Muhurta · <strong>Free Express Delivery</strong> across India
            </span>
            <span className="text-[#E29D2C] hidden sm:inline">✦</span>
          </div>
          <button
            onClick={() => setShowBanner(false)}
            className="text-stone-400 hover:text-stone-200 text-xs px-1 cursor-pointer shrink-0"
            aria-label="Dismiss banner"
          >
            ✕
          </button>
        </div>
      )}

      {/* Main Navigation: Strict 3-Zone Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a
            href="#"
            className="flex items-center gap-3 group whitespace-nowrap shrink-0 text-decoration-none"
          >
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#E29D2C] to-[#966107] flex items-center justify-center text-white shadow-sm ring-2 ring-[#E29D2C]/30 group-hover:scale-105 transition-transform">
              {/* Traditional Golden Butter Urn / Diya Silhouette */}
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="w-6 h-6 text-[#FAF7F2]"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 2c-3 0-5 2.5-5 5.5 0 2 1.2 3.8 3 4.8V17a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4.7c1.8-1 3-2.8 3-4.8C17 4.5 15 2 12 2z" />
                <path d="M7 21h10" />
                <path d="M9 13h6" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-brand text-3xl font-bold tracking-tight text-[#241D17] leading-none">
                यदु
              </span>
              <span className="font-royal text-[10px] tracking-[0.22em] text-[#966107] uppercase font-semibold">
                Vedic Buffalo Ghee
              </span>
            </div>
          </a>

          {/* Zone 2: Clean Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#3B2E24]">
            <a
              href="#products"
              className="hover:text-[#966107] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Our Buffalo Ghee
            </a>
            <a
              href="#bilona-process"
              className="hover:text-[#966107] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              The Bilona Method
            </a>
            <a
              href="#benefits"
              className="hover:text-[#966107] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Health & Stamina
            </a>
            <a
              href="#order-builder"
              className="hover:text-[#966107] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8 flex items-center gap-1.5"
            >
              <span>Quick Order</span>
              <span className="text-[10px] text-[#966107] font-semibold bg-[#FAF2E2] px-1.5 py-0.5 rounded border border-[#E29D2C]/30">
                WhatsApp
              </span>
            </a>
            <a
              href="#reviews"
              className="hover:text-[#966107] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              Reviews
            </a>
            <a
              href="#faqs"
              className="hover:text-[#966107] transition-colors whitespace-nowrap shrink-0 hover:underline underline-offset-8"
            >
              FAQs
            </a>
          </nav>

          {/* Zone 3: Primary Action & Quick Tools */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Purity Test trigger */}
            <button
              onClick={onOpenPurityTest}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-[#8F4E24] hover:text-[#241D17] px-3 py-2 rounded-lg bg-[#F4EFE6] border border-[#EADFCF] hover:bg-[#EADFCF]/50 transition-colors cursor-pointer whitespace-nowrap"
              title="Test Purity at Home"
            >
              <ShieldCheck className="w-4 h-4 text-[#966107]" />
              <span>Purity Check</span>
            </button>

            {/* Cart Trigger */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-lg text-[#3B2E24] hover:bg-[#F4EFE6] border border-[#EADFCF] transition-colors cursor-pointer"
              aria-label="View Order Bag"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-[#966107] text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Primary CTA: Order on WhatsApp */}
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-lg shadow-sm hover:shadow transition-all whitespace-nowrap shrink-0 group cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
              <span>Order on WhatsApp</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#3B2E24] hover:bg-[#F4EFE6] cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#EADFCF] px-5 py-4 space-y-3">
          <nav className="flex flex-col space-y-2 text-sm font-medium text-[#241D17]">
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#966107] border-b border-[#F4EFE6]"
            >
              Our Buffalo Ghee Collection
            </a>
            <a
              href="#bilona-process"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#966107] border-b border-[#F4EFE6]"
            >
              The Bilona Method (5-Samskara)
            </a>
            <a
              href="#benefits"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#966107] border-b border-[#F4EFE6]"
            >
              Health, Stamina & Science
            </a>
            <a
              href="#order-builder"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#966107] border-b border-[#F4EFE6] flex items-center justify-between"
            >
              <span>Instant WhatsApp Order Builder</span>
              <span className="text-[10px] bg-[#25D366]/20 text-[#128C7E] px-2 py-0.5 rounded font-semibold">
                Direct
              </span>
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#966107] border-b border-[#F4EFE6]"
            >
              Customer Reviews (4.9 ★)
            </a>
            <a
              href="#faqs"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 hover:text-[#966107]"
            >
              Frequently Asked Questions
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPurityTest();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-[#8F4E24] bg-[#F4EFE6] border border-[#EADFCF] rounded-lg"
            >
              <ShieldCheck className="w-4 h-4 text-[#966107]" />
              <span>How to Test Purity at Home</span>
            </button>
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-lg shadow"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Direct WhatsApp Order ({DISPLAY_PHONE})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
