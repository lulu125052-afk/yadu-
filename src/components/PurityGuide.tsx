import React, { useState } from 'react';
import { ShieldCheck, Flame, Droplets, Sparkles, CheckCircle2 } from 'lucide-react';

interface PurityTest {
  id: string;
  nameHindi: string;
  nameEnglish: string;
  duration: string;
  instructions: string;
  pureResult: string;
  impureResult: string;
  scienceNote: string;
  icon: React.ReactNode;
}

const TESTS: PurityTest[] = [
  {
    id: 'palm',
    nameHindi: 'हथेली परीक्षण (The Palm Test)',
    nameEnglish: 'Body Temperature Melting Test',
    duration: '30 Seconds',
    instructions: 'Take half a teaspoon of room-temperature यदु Ghee on the palm of your hand and hold it still.',
    pureResult: 'Pure unadulterated ghee melts completely into liquid oil within seconds from normal body temperature (~37°C).',
    impureResult: 'Adulterated ghee containing vanaspati or hydrogenated fats remains solid or leaves a waxy, sticky residue on the skin.',
    scienceNote: 'Natural milk fat has a melting point of 32°C–35°C, whereas adulterated oils melt only above 40°C.',
    icon: <Sparkles className="w-5 h-5 text-[#966107]" />,
  },
  {
    id: 'heat',
    nameHindi: 'अग्नि परीक्षण (The Heat Test)',
    nameEnglish: 'Direct Heat Browning Test',
    duration: '1 Minute',
    instructions: 'Heat 1 teaspoon of ghee in a pan or laddu on medium flame.',
    pureResult: 'Pure Bilona ghee melts immediately, turns deep golden-amber, and releases an unmistakable toasted-caramel aroma.',
    impureResult: 'Takes several minutes to heat, froths violently with white foam, or turns a sickly pale yellow without the signature nutty aroma.',
    scienceNote: 'The caramelization of microscopic cultured butter solids occurs instantly without chemical stabilizers.',
    icon: <Flame className="w-5 h-5 text-[#966107]" />,
  },
  {
    id: 'iodine',
    nameHindi: 'आयोडीन स्टार्च परीक्षण (The Starch Test)',
    nameEnglish: 'Iodine Solution Chemical Check',
    duration: '2 Minutes',
    instructions: 'Melt a small spoon of ghee in a bowl, let it cool slightly, then add 2-3 drops of standard tincture iodine.',
    pureResult: 'The solution remains golden-brown with zero color change.',
    impureResult: 'Any turning to purple, dark blue, or violet indicates starch adulteration (boiled potatoes, sweet potatoes, or cornstarch).',
    scienceNote: 'Iodine reacts specifically with amylose starches. Pure milk fat contains 0% starch.',
    icon: <Droplets className="w-5 h-5 text-[#966107]" />,
  },
  {
    id: 'grain',
    nameHindi: 'दानेदार बनावट (Granular Crystallization)',
    nameEnglish: 'Natural Crystal Texture Check',
    duration: 'Visual Inspection',
    instructions: 'Observe the consistency of the ghee at room temperature in the glass jar.',
    pureResult: 'Authentic Bilona Ghee separates into tiny, crystalline granules (दाने) suspended in liquid gold. Melts cleanly in your mouth without greasiness.',
    impureResult: 'Homogenous smooth paste like commercial margarine or chalky lard.',
    scienceNote: 'Slow cooling of ghee from whole cultured curd naturally allows high-melting triacylglycerols to form granules.',
    icon: <ShieldCheck className="w-5 h-5 text-[#966107]" />,
  },
];

export const PurityGuide: React.FC = () => {
  const [activeTest, setActiveTest] = useState('palm');
  const currentTest = TESTS.find((t) => t.id === activeTest) || TESTS[0];

  return (
    <section id="purity-test" className="py-20 bg-[#FAF7F2] relative border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966107] mb-3">
            <span className="w-5 h-[1px] bg-[#966107]" />
            <span className="font-royal">100% Transparency Pledge</span>
            <span className="w-5 h-[1px] bg-[#966107]" />
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] mb-4">
            घर पर शुद्धता की पहचान (Home Purity Tests)
          </h2>
          <p className="text-base text-[#5C4D43] leading-relaxed">
            We invite every customer to verify यदु Ghee before consuming. Here are 4 foolproof traditional and scientific tests you can perform in your own kitchen.
          </p>
        </div>

        {/* Interactive Test Tabs */}
        <div className="max-w-4xl mx-auto">
          {/* Tab buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
            {TESTS.map((t) => {
              const isActive = activeTest === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTest(t.id)}
                  className={`p-3.5 rounded-xl border text-center transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#241D17] text-[#FAF7F2] border-[#241D17] shadow'
                      : 'bg-white text-[#3B2E24] border-[#EADFCF] hover:border-[#C98816]'
                  }`}
                >
                  <div className="font-bold text-xs sm:text-sm line-clamp-1">{t.nameEnglish}</div>
                  <div
                    className={`text-[10px] mt-0.5 line-clamp-1 ${
                      isActive ? 'text-[#E29D2C]' : 'text-stone-500'
                    }`}
                  >
                    {t.duration}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Test Card */}
          <div className="bg-white rounded-3xl border border-[#EADFCF] shadow-sm p-6 sm:p-10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#EADFCF] mb-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#966107] font-royal">
                  Kitchen Purity Verification · Test Time: {currentTest.duration}
                </span>
                <h3 className="font-brand text-2xl font-bold text-[#241D17] mt-1">
                  {currentTest.nameHindi}
                </h3>
              </div>
              <div className="w-12 h-12 rounded-xl bg-[#FAF2E2] border border-[#E29D2C]/30 flex items-center justify-center text-[#966107] shrink-0">
                {currentTest.icon}
              </div>
            </div>

            {/* Instructions */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                परीक्षण विधि (How to Test):
              </h4>
              <p className="text-sm text-[#241D17] bg-[#FAF7F2] p-4 rounded-xl border border-[#EADFCF]">
                {currentTest.instructions}
              </p>
            </div>

            {/* Results Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Pure Result */}
              <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                  <span>शुद्ध यदु घी का परिणाम (Pure Result)</span>
                </div>
                <p className="text-xs sm:text-sm text-emerald-950 leading-relaxed font-medium">
                  {currentTest.pureResult}
                </p>
              </div>

              {/* Impure Result */}
              <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200">
                <div className="flex items-center gap-2 text-rose-800 font-bold text-xs uppercase tracking-wider mb-2">
                  <span className="text-rose-600 font-bold">✕</span>
                  <span>मिलावटी घी का संकेत (Adulterated Sign)</span>
                </div>
                <p className="text-xs sm:text-sm text-rose-950 leading-relaxed font-medium">
                  {currentTest.impureResult}
                </p>
              </div>
            </div>

            {/* Scientific Explanation */}
            <div className="pt-4 border-t border-[#EADFCF] flex items-start gap-3 text-xs text-[#5C4D43]">
              <span className="font-bold text-[#966107] shrink-0 font-royal">Scientific Note:</span>
              <span>{currentTest.scienceNote}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
