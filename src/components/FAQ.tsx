import React, { useState } from 'react';
import { FAQS } from '../data/faqs';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { getGeneralWhatsAppUrl } from '../utils/whatsapp';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // First one open by default
  });
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = FAQS.filter((f) => {
    if (selectedCategory === 'all') return true;
    return f.category === selectedCategory;
  });

  return (
    <section id="faqs" className="py-20 bg-[#FAF7F2] relative border-b border-[#EADFCF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966107] mb-3">
            <span className="w-5 h-[1px] bg-[#966107]" />
            <span className="font-royal">Clear Answers & Transparency</span>
            <span className="w-5 h-[1px] bg-[#966107]" />
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] mb-4">
            अक्सर पूछे जाने वाले प्रश्न (FAQs)
          </h2>
          <p className="text-base text-[#5C4D43] leading-relaxed">
            Everything you need to know about our Vedic Bilona craftsmanship, health advantages, shelf life, and effortless WhatsApp dispatch.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 text-xs scrollbar-none">
          {[
            { id: 'all', label: 'All Questions' },
            { id: 'process', label: 'Bilona Process' },
            { id: 'health', label: 'Ayurvedic Health' },
            { id: 'ordering', label: 'Delivery & COD' },
            { id: 'storage', label: 'Storage & Shelf Life' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#241D17] text-white shadow-sm'
                  : 'bg-white text-[#3B2E24] border border-[#EADFCF] hover:bg-[#FAF5EC]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3 mb-12">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#EADFCF] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-5 text-left flex items-start justify-between gap-4 hover:bg-stone-50 transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <div>
                    {faq.questionHindi && (
                      <div className="font-brand text-base font-bold text-[#241D17] mb-1">
                        {faq.questionHindi}
                      </div>
                    )}
                    <div className="font-sans text-xs sm:text-sm font-semibold text-[#5C4D43]">
                      {faq.question}
                    </div>
                  </div>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#FAF5EC] border border-[#EADFCF] flex items-center justify-center text-[#966107] shrink-0 transition-transform duration-300 mt-0.5 ${
                      isOpen ? 'rotate-180 bg-[#241D17] text-white border-[#241D17]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4A3B32] leading-relaxed border-t border-[#F4EFE6] bg-[#FAF7F2]/50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions CTA */}
        <div className="bg-[#FAF5EC] p-6 rounded-2xl border border-[#EADFCF] text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#241D17] text-[#E29D2C] flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <div className="font-bold text-sm text-[#241D17]">Have more questions?</div>
              <div className="text-xs text-[#5C4D43]">Our Ayurvedic ghee vaidyas reply within 5 minutes on WhatsApp.</div>
            </div>
          </div>

          <a
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#25D366] hover:bg-[#20BA59] text-white text-xs font-semibold rounded-xl shadow-sm transition-colors cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
