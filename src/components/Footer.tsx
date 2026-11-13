import React from 'react';
import { MessageCircle, Mail, Phone, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { getGeneralWhatsAppUrl, DISPLAY_PHONE, STORE_ADDRESS } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1612] text-[#F4EFE6] pt-16 pb-12 border-t border-[#3B2E24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#3B2E24]">
          
          {/* Brand Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#E29D2C] to-[#966107] flex items-center justify-center text-white shadow ring-2 ring-[#E29D2C]/30">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-5 h-5 text-[#FAF7F2]"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2c-3 0-5 2.5-5 5.5 0 2 1.2 3.8 3 4.8V17a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4.7c1.8-1 3-2.8 3-4.8C17 4.5 15 2 12 2z" />
                  <path d="M7 21h10" />
                  <path d="M9 13h6" />
                </svg>
              </div>
              <div>
                <span className="font-brand text-3xl font-bold tracking-tight text-white block leading-none">
                  यदु
                </span>
                <span className="font-royal text-[10px] tracking-[0.22em] text-[#E29D2C] uppercase font-semibold">
                  Vedic Buffalo Ghee
                </span>
              </div>
            </div>

            <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
              यदु celebrates the immortal Vedic tradition of hand-churned Murrah Buffalo Bilona Ghee. Handcrafted at Brahma Muhurta from cultured whole curd in clay vessels for unmatched stamina, calcium vitality, and pearl-white Danedaar purity.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-stone-300">
              <span className="font-brand text-sm text-[#E29D2C] font-semibold block mb-0.5">
                &quot;बलं पुष्टिर्धृतिश्चैव घृतं ददाति नित्यशः&quot;
              </span>
              <span className="text-[11px] text-stone-400">
                — Ancient Ayurveda (Pure Buffalo Ghee bestows enduring strength, deep physical stamina, and tissue nourishment)
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-royal text-xs font-bold uppercase tracking-wider text-[#E29D2C]">
              Buffalo Ghee Catalog
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Pure Vedic Buffalo Ghee (Classic)
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Reserve Earthen-Simmered Batch
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-white transition-colors">
                  Royal Shahi Family Pack (5L)
                </a>
              </li>
              <li>
                <a href="#bilona-process" className="hover:text-white transition-colors">
                  5-Samskara Bilona Method
                </a>
              </li>
              <li>
                <a href="#purity-test" className="hover:text-white transition-colors">
                  At-Home Purity Tests
                </a>
              </li>
            </ul>
          </div>

          {/* Trust & Certifications */}
          <div className="space-y-3">
            <h4 className="font-royal text-xs font-bold uppercase tracking-wider text-[#E29D2C]">
              Assurance & Trust
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E29D2C] shrink-0" />
                <span>FSSAI Lic. No. 10823005000124</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E29D2C] shrink-0" />
                <span>NABL Lab Batch Tested (99.88% Fat)</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E29D2C] shrink-0" />
                <span>Zero Preservatives / Bleaching</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E29D2C] shrink-0" />
                <span>Shatterproof Glass Packaging</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#E29D2C] shrink-0" />
                <span>Cash on Delivery (All India)</span>
              </li>
            </ul>
          </div>

          {/* Contact & WhatsApp */}
          <div className="space-y-3">
            <h4 className="font-royal text-xs font-bold uppercase tracking-wider text-[#E29D2C]">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors"
                >
                  WhatsApp: {DISPLAY_PHONE}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-stone-400 shrink-0" />
                <span>care@yadughee.com</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                <span>{STORE_ADDRESS}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 bg-[#25D366] hover:bg-[#20BA59] text-white text-xs font-semibold rounded-lg shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Direct WhatsApp Hotline</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Payment Security */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            © {new Date().getFullYear()} यदु (Yadu) Vedic Foods Pvt Ltd. All rights reserved. Handcrafted with reverence in India.
          </div>

          {/* Payment Trust Markers */}
          <div className="flex items-center gap-3 text-[11px] text-stone-400">
            <span className="font-medium">Supported Payments:</span>
            <span className="px-2 py-0.5 bg-white/10 rounded text-stone-300">UPI</span>
            <span className="px-2 py-0.5 bg-white/10 rounded text-stone-300">Google Pay</span>
            <span className="px-2 py-0.5 bg-white/10 rounded text-stone-300">PhonePe</span>
            <span className="px-2 py-0.5 bg-white/10 rounded text-stone-300">Cash on Delivery</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
