import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const WhatsAppFloatingButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="bg-white rounded-2xl p-3.5 shadow-xl border border-[#EADFCF] max-w-xs animate-in fade-in slide-in-from-bottom-2 duration-300 relative text-left">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-stone-400 hover:text-stone-700 text-xs p-1 cursor-pointer"
            aria-label="Close message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold text-xs text-[#241D17]">यदु Team is Online</span>
          </div>
          <p className="text-[11px] text-[#5C4D43] leading-snug pr-4">
            Order fresh Vedic A2 Bilona Ghee directly via WhatsApp. Free delivery + COD available!
          </p>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={getGeneralWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Order on WhatsApp"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA59] text-white flex items-center justify-center shadow-2xl hover:scale-108 transition-all duration-200 group relative cursor-pointer"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#E29D2C] border-2 border-white" />
        <MessageCircle className="w-7 h-7 fill-current group-hover:scale-110 transition-transform" />
      </a>
    </div>
  );
};
