import React from 'react';
import { ShieldCheck, Heart, Sparkles, Truck, Check, X, Award, Flame } from 'lucide-react';

export const WhyChooseYadu: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-[#FAF7F2] relative border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966107] mb-3">
            <span className="w-5 h-[1px] bg-[#966107]" />
            <span className="font-royal">Authentic Murrah Buffalo Heritage</span>
            <span className="w-5 h-[1px] bg-[#966107]" />
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] mb-4">
            यदु शुद्ध भैंस का घी ही क्यों? — शक्ति और शुद्धता का संगम
          </h2>
          <p className="text-base text-[#5C4D43] leading-relaxed">
            In traditional Indian homes and akhadas, pure Buffalo Bilona Ghee has always been the supreme source of endurance, joint strength, and deep culinary flavor. Here is why pure Murrah buffalo curd churning makes all the difference.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1 */}
          <div className="bg-white p-7 rounded-2xl border border-[#EADFCF] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#FAF2E2] border border-[#E29D2C]/40 flex items-center justify-center text-[#966107] mb-5">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-brand text-lg font-bold text-[#241D17] mb-2">
              मोती जैसा दानेदार घी
            </h3>
            <div className="font-royal text-xs font-semibold text-[#966107] uppercase tracking-wider mb-2">
              Pearl-White Danedaar Crystals
            </div>
            <p className="text-xs text-[#5C4D43] leading-relaxed">
              Made strictly from cultured whole buffalo dahi churned with wooden bilona. Creates dense, crystalline pearl-white grains with a divine rustic aroma.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-7 rounded-2xl border border-[#EADFCF] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#FAF2E2] border border-[#E29D2C]/40 flex items-center justify-center text-[#966107] mb-5">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-brand text-lg font-bold text-[#241D17] mb-2">
              असीम शारीरिक बल एवं ऊर्जा
            </h3>
            <div className="font-royal text-xs font-semibold text-[#966107] uppercase tracking-wider mb-2">
              Natural Stamina & Bone Strength
            </div>
            <p className="text-xs text-[#5C4D43] leading-relaxed">
              Rich in Calcium, Phosphorus, Magnesium, and healthy short-chain fats that fortify bones, nourish joint cartilage, and provide sustained vitality.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-7 rounded-2xl border border-[#EADFCF] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#FAF2E2] border border-[#E29D2C]/40 flex items-center justify-center text-[#966107] mb-5">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="font-brand text-lg font-bold text-[#241D17] mb-2">
              सर्वोच्च स्मोक पॉइंट (252°C)
            </h3>
            <div className="font-royal text-xs font-semibold text-[#966107] uppercase tracking-wider mb-2">
              Ideal for Sweets, Tadka & Rotis
            </div>
            <p className="text-xs text-[#5C4D43] leading-relaxed">
              Buffalo ghee boasts an extraordinary 252°C smoke point. Spices bloom to perfection without burning, making your rotis soft and festive mithai irresistible.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-7 rounded-2xl border border-[#EADFCF] shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#FAF2E2] border border-[#E29D2C]/40 flex items-center justify-center text-[#966107] mb-5">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="font-brand text-lg font-bold text-[#241D17] mb-2">
              सुरक्षित ग्लास जार व फ्री डिलीवरी
            </h3>
            <div className="font-royal text-xs font-semibold text-[#966107] uppercase tracking-wider mb-2">
              Zero Plastic & Pan-India COD
            </div>
            <p className="text-xs text-[#5C4D43] leading-relaxed">
              We never pack pure buffalo ghee in plastic tubs or pouches. Delivered fresh in heavy shock-cushioned lead-free glass jars across 19,000+ pincodes.
            </p>
          </div>
        </div>

        {/* Detailed Comparison Matrix */}
        <div className="bg-white rounded-2xl border border-[#EADFCF] shadow-sm overflow-hidden">
          <div className="p-6 bg-[#241D17] text-[#FAF7F2] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-royal text-xs uppercase tracking-widest text-[#E29D2C] block">
                The Transparency Matrix
              </span>
              <h3 className="font-brand text-xl sm:text-2xl font-bold">
                यदु वैदिक भैंस बिलोना घी vs सामान्य बाजार का क्रीम घी
              </h3>
            </div>
            <span className="text-xs text-stone-400 bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 self-start sm:self-auto">
              NABL Certified 99.88% Milk Fat
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#EADFCF] bg-[#FAF7F2] text-[#241D17]">
                  <th className="py-4 px-6 font-semibold w-1/3">विशेषता (Parameter)</th>
                  <th className="py-4 px-6 font-semibold text-[#966107] bg-[#FAF2E2]/60 w-1/3">
                    ✨ यदु वैदिक भैंस बिलोना घी (Yadu)
                  </th>
                  <th className="py-4 px-6 font-semibold text-stone-500 w-1/3">
                    ❌ बाजार का सामान्य घी (Commercial Brands)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#EADFCF]">
                <tr>
                  <td className="py-4 px-6 font-medium text-[#241D17]">दूध की नस्ल (Milk Origin)</td>
                  <td className="py-4 px-6 text-[#241D17] bg-[#FAF2E2]/30 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Free-grazing indigenous Murrah buffaloes (मुर्राह नस्ल)</span>
                  </td>
                  <td className="py-4 px-6 text-stone-500">
                    Mixed factory dairy milk with artificial yield boosters
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-medium text-[#241D17]">निर्माण विधि (Process)</td>
                  <td className="py-4 px-6 text-[#241D17] bg-[#FAF2E2]/30 font-medium">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Whole cultured dahi hand-churned with wooden Bilona</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-stone-500">
                    Machine centrifuge cream separation boiled with chemical anti-foaming agents
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-medium text-[#241D17]">बनावट व रंग (Texture & Color)</td>
                  <td className="py-4 px-6 text-[#241D17] bg-[#FAF2E2]/30 font-medium">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Natural lustrous pearl-white with dense granular (दानेदार) crystals</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-stone-500">
                    Artificially bleached, greasy or waxy with synthetic flavors
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-medium text-[#241D17]">पोषक तत्व व ऊर्जा (Nutrition)</td>
                  <td className="py-4 px-6 text-[#241D17] bg-[#FAF2E2]/30 font-medium">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Dense in Calcium (28mg), Phosphorus & Butyrate for joint health</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-stone-500">
                    Depleted of active micronutrients due to harsh industrial heating
                  </td>
                </tr>

                <tr>
                  <td className="py-4 px-6 font-medium text-[#241D17]">पैकेजिंग (Packaging)</td>
                  <td className="py-4 px-6 text-[#241D17] bg-[#FAF2E2]/30 font-medium">
                    <div className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>Chemical-free food-grade lead-free Glass Jars</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-stone-500">
                    Plastic containers or tin cans with toxic inner linings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
