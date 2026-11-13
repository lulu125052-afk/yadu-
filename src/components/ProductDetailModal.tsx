import React from 'react';
import { Product } from '../types';
import { X, ShieldCheck, Check, MessageCircle, FileText, Sparkles, Award } from 'lucide-react';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, sizeId: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const defaultSize = product.sizes[0];
  const whatsappUrl = getProductWhatsAppUrl(
    product.nameEnglish,
    defaultSize.label,
    defaultSize.price
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-2xl w-full border border-[#EADFCF] shadow-2xl relative my-8 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 border-b border-[#EADFCF] bg-[#FAF7F2] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#241D17] text-[#E29D2C] flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="font-royal text-[10px] uppercase tracking-wider text-[#966107] font-bold block">
                NABL Certified Lab Specifications & Nutrition
              </span>
              <h3 className="font-brand text-xl font-bold text-[#241D17]">
                {product.nameHindi}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Top Product Snapshot */}
          <div className="flex flex-col sm:flex-row gap-5 items-center bg-[#FAF5EC] p-4 rounded-2xl border border-[#EADFCF]">
            <img
              src={product.image}
              alt={product.nameEnglish}
              className="w-28 h-28 object-cover rounded-xl border border-[#EADFCF]"
              referrerPolicy="no-referrer"
            />
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-bold text-base text-[#241D17]">{product.nameEnglish}</h4>
              <p className="text-xs text-[#5C4D43] leading-relaxed">{product.description}</p>
              <div className="pt-2 flex flex-wrap gap-2 text-[11px] justify-center sm:justify-start">
                <span className="bg-white px-2.5 py-1 rounded border border-[#EADFCF] text-[#966107] font-semibold">
                  Texture: {product.texture}
                </span>
                <span className="bg-white px-2.5 py-1 rounded border border-[#EADFCF] text-stone-600">
                  Smoke Point: {product.smokePoint}
                </span>
              </div>
            </div>
          </div>

          {/* NABL Lab Parameters Table */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <h5 className="font-bold text-xs uppercase tracking-wider text-[#241D17] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>NABL Accredited Laboratory Test Report:</span>
              </h5>
              <span className="text-[10px] text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                Batch: YD-2026-V8 · 100% Passed
              </span>
            </div>

            <div className="rounded-xl border border-[#EADFCF] overflow-hidden text-xs">
              <table className="w-full text-left border-collapse">
                <thead className="bg-[#FAF7F2] border-b border-[#EADFCF] text-stone-700">
                  <tr>
                    <th className="p-3 font-semibold">Tested Parameter</th>
                    <th className="p-3 font-semibold">Tested Value in यदु</th>
                    <th className="p-3 font-semibold">FSSAI Standard Limit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#EADFCF] text-[#241D17]">
                  <tr>
                    <td className="p-3 font-medium">Milk Fat Content</td>
                    <td className="p-3 font-bold text-emerald-700">{product.labSpecs.milkFat}</td>
                    <td className="p-3 text-stone-500">Min 99.5%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Moisture Content</td>
                    <td className="p-3 font-bold text-emerald-700">{product.labSpecs.moisture}</td>
                    <td className="p-3 text-stone-500">Max 0.30%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Free Fatty Acids (as Oleic)</td>
                    <td className="p-3 font-bold text-emerald-700">{product.labSpecs.freeFattyAcids}</td>
                    <td className="p-3 text-stone-500">Max 0.50%</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Peroxide Value (Freshness)</td>
                    <td className="p-3 font-bold text-emerald-700">{product.labSpecs.peroxideValue}</td>
                    <td className="p-3 text-stone-500">Max 0.5 meq/kg</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium">Chemical Adulteration Test</td>
                    <td className="p-3 font-bold text-emerald-700" colSpan={2}>
                      {product.labSpecs.adulteration}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Nutritional Breakdown Table */}
          <div>
            <h5 className="font-bold text-xs uppercase tracking-wider text-[#241D17] mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-[#966107]" />
              <span>Nutritional Facts (Per 100g Typical Serving):</span>
            </h5>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
              <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#EADFCF]">
                <div className="text-stone-500 text-[10px]">Energy</div>
                <div className="font-bold text-[#241D17] text-sm tabular-nums">
                  {product.nutritionPer100g.energy}
                </div>
              </div>
              <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#EADFCF]">
                <div className="text-stone-500 text-[10px]">Total Milk Fat</div>
                <div className="font-bold text-[#241D17] text-sm tabular-nums">
                  {product.nutritionPer100g.totalFat}
                </div>
              </div>
              <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#EADFCF]">
                <div className="text-stone-500 text-[10px]">Butyric Acid</div>
                <div className="font-bold text-emerald-700 text-sm tabular-nums">
                  {product.nutritionPer100g.butyricAcid}
                </div>
              </div>
              <div className="p-2.5 bg-[#FAF7F2] rounded-xl border border-[#EADFCF]">
                <div className="text-stone-500 text-[10px]">Vitamin A</div>
                <div className="font-bold text-[#966107] text-sm tabular-nums">
                  {product.nutritionPer100g.vitaminA}
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-[#EADFCF] bg-[#FAF7F2] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-stone-500 text-center sm:text-left">
            <span>FSSAI Lic. No. 10823005000124 · NABL Certified</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={() => {
                onAddToCart(product, defaultSize.id);
                onClose();
              }}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-[#241D17] bg-white border border-[#EADFCF] rounded-xl hover:bg-stone-50 cursor-pointer"
            >
              Add to Bag (₹{defaultSize.price})
            </button>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-xl shadow-sm cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
