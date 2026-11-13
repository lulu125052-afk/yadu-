import React, { useState } from 'react';
import { Product } from '../types';
import { PRODUCTS } from '../data/products';
import { getProductWhatsAppUrl } from '../utils/whatsapp';
import { MessageCircle, ShoppingBag, Check, ShieldCheck, Star, Sparkles } from 'lucide-react';

interface ProductsProps {
  onAddToCart: (product: Product, sizeId: string) => void;
  onSelectProductDetails: (product: Product) => void;
}

export const Products: React.FC<ProductsProps> = ({
  onAddToCart,
  onSelectProductDetails,
}) => {
  // Track selected size per product ID
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'vedic-buffalo-bilona-classic': '1ltr',
    'vedic-buffalo-bilona-reserve': '1ltr-reserve',
    'vedic-buffalo-family-feast': '2ltr-festive',
  });

  // Track added feedback
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleSizeChange = (productId: string, sizeId: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: sizeId }));
  };

  const handleAddToCart = (product: Product) => {
    const sizeId = selectedSizes[product.id] || product.sizes[0].id;
    onAddToCart(product, sizeId);
    setAddedIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1800);
  };

  return (
    <section id="products" className="py-20 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966107] mb-3">
            <span className="w-5 h-[1px] bg-[#966107]" />
            <span className="font-royal">100% Pure Murrah Buffalo Milk · Earthen Hearth Churned</span>
            <span className="w-5 h-[1px] bg-[#966107]" />
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] mb-4">
            यदु शुद्ध वैदिक भैंस बिलोना घी संग्रह
          </h2>
          <p className="text-base text-[#5C4D43] leading-relaxed">
            Slowly hand-churned from cultured whole curd of indigenous free-grazing Murrah buffaloes. Celebrated for its dense pearl-white granular crystals (मोती जैसा दानेदार), high healthy fat richness, and authentic village aroma.
          </p>
        </div>

        {/* 3-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {PRODUCTS.map((product) => {
            const currentSizeId = selectedSizes[product.id] || product.sizes[0].id;
            const currentSize =
              product.sizes.find((s) => s.id === currentSizeId) || product.sizes[0];
            const isAdded = !!addedIds[product.id];
            const whatsappUrl = getProductWhatsAppUrl(
              product.nameEnglish,
              currentSize.label,
              currentSize.price
            );

            return (
              <div
                key={product.id}
                className="group flex flex-col justify-between bg-white rounded-2xl border border-[#EADFCF] shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Top Media & Image */}
                <div>
                  <div className="relative aspect-[4/3] w-full bg-[#F4EFE6] overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.nameEnglish}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />

                    {/* Gradient bottom scrim */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                    {/* Category Label */}
                    <div className="absolute top-3 left-3 bg-[#241D17]/85 backdrop-blur-sm text-[#F4EFE6] text-[11px] font-medium px-3 py-1 rounded-md border border-[#C98816]/30">
                      {product.category === 'classic'
                        ? 'Vedic Murrah Buffalo Ghee'
                        : product.category === 'vintage'
                        ? 'Reserve 8-Hr Earthen Simmered'
                        : 'Family & Festive Celebration Pack'}
                    </div>

                    {/* Rating Tag */}
                    <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-[#241D17] text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 fill-[#E29D2C] text-[#E29D2C]" />
                      <span>{product.rating}</span>
                      <span className="text-[10px] text-stone-500">({product.reviewCount})</span>
                    </div>

                    {/* Quick Texture Tag on Bottom of Image */}
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                      <span className="font-medium drop-shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 text-[#E29D2C]" />
                        {product.texture}
                      </span>
                      <button
                        onClick={() => onSelectProductDetails(product)}
                        className="text-[11px] underline underline-offset-2 text-stone-200 hover:text-white cursor-pointer"
                      >
                        Lab Specs & Info →
                      </button>
                    </div>
                  </div>

                  {/* Body Details */}
                  <div className="p-6">
                    {/* Hindi & English Titles */}
                    <div className="mb-2">
                      <h3 className="font-brand text-2xl font-bold text-[#241D17] leading-tight">
                        {product.nameHindi}
                      </h3>
                      <div className="font-royal text-xs font-semibold tracking-wider text-[#966107] uppercase mt-0.5">
                        {product.nameEnglish}
                      </div>
                    </div>

                    <p className="text-xs text-[#5C4D43] line-clamp-2 leading-relaxed mb-4">
                      {product.tagline}
                    </p>

                    {/* Features checklist */}
                    <ul className="space-y-1.5 mb-5 text-xs text-[#3B2E24]">
                      {product.features.slice(0, 3).map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#966107] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Size Selector Tabs */}
                    <div className="mb-5">
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-stone-500 mb-2">
                        Select Pack Size:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                        {product.sizes.map((size) => {
                          const isSelected = size.id === currentSizeId;
                          return (
                            <button
                              key={size.id}
                              type="button"
                              onClick={() => handleSizeChange(product.id, size.id)}
                              className={`py-2 px-2 text-xs font-medium rounded-lg border transition-all text-center cursor-pointer ${
                                isSelected
                                  ? 'bg-[#241D17] text-[#FAF7F2] border-[#241D17] shadow-sm'
                                  : 'bg-[#FAF7F2] text-[#3B2E24] border-[#EADFCF] hover:border-[#966107]'
                              }`}
                            >
                              <div className="font-bold leading-tight">{size.volume}</div>
                              <div
                                className={`text-[10px] mt-0.5 ${
                                  isSelected ? 'text-[#E29D2C]' : 'text-stone-500'
                                }`}
                              >
                                ₹{size.price}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Price Block */}
                    <div className="flex items-baseline justify-between pt-4 border-t border-[#EADFCF]/70 mb-5">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="font-bold text-2xl text-[#241D17] tabular-nums">
                            ₹{currentSize.price.toLocaleString('en-IN')}
                          </span>
                          <span className="text-sm text-stone-400 line-through tabular-nums">
                            ₹{currentSize.originalPrice.toLocaleString('en-IN')}
                          </span>
                        </div>
                        <span className="text-[11px] font-semibold text-emerald-700">
                          Save ₹{currentSize.savings.toLocaleString('en-IN')} (Free Delivery)
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-stone-500 block">Inclusive of all taxes</span>
                        <span className="text-[10px] text-[#966107] font-semibold">Glass Jar Safe Packed</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons (Direct WhatsApp & Add to Cart) */}
                <div className="p-6 pt-0 space-y-2.5">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-xl shadow-sm hover:shadow transition-colors group cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                    <span>Buy via WhatsApp</span>
                  </a>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#241D17] bg-[#F4EFE6] hover:bg-[#EADFCF] border border-[#EADFCF] rounded-xl transition-colors cursor-pointer"
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-700" />
                          <span className="text-emerald-700">Added to Bag</span>
                        </>
                      ) : (
                        <>
                          <ShoppingBag className="w-4 h-4 text-[#966107]" />
                          <span>Add to Order</span>
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={() => onSelectProductDetails(product)}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold text-[#8F4E24] hover:text-[#241D17] bg-white hover:bg-stone-50 border border-[#EADFCF] rounded-xl transition-colors cursor-pointer"
                    >
                      <ShieldCheck className="w-4 h-4 text-[#966107]" />
                      <span>Lab Certificate</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Guarantee Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F4EFE6] border border-[#EADFCF] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#241D17] text-[#E29D2C] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-[#241D17]">
                100% Pure Murrah Buffalo Danedaar Purity Guarantee
              </h4>
              <p className="text-xs text-[#5C4D43]">
                If you are not delighted by the rich aroma, pearl-white granular texture, and authentic taste of यदु Buffalo Ghee, enjoy our 100% hassle-free refund.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#order-builder"
              className="text-xs font-semibold text-[#966107] hover:underline underline-offset-4"
            >
              Custom Order Builder →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
