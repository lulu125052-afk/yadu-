import React, { useState } from 'react';
import { Sparkles, CheckCircle2, Flame, Droplets, Sun, Compass } from 'lucide-react';

interface ProcessStep {
  step: string;
  hindiName: string;
  title: string;
  desc: string;
  secret: string;
  icon: React.ReactNode;
}

const STEPS: ProcessStep[] = [
  {
    step: '01',
    hindiName: 'मुर्राह नस्ल पालन एवं दुग्ध दोहन',
    title: 'Free-Grazing Murrah Buffaloes',
    desc: 'High-fat nutrient-dense whole milk sourced ethically from indigenous Murrah buffaloes grazing freely on chemical-free green pastures and natural fodder.',
    secret: 'Buffalo calves nurse first with love before traditional gentle hand-milking.',
    icon: <Sun className="w-5 h-5 text-[#966107]" />,
  },
  {
    step: '02',
    hindiName: 'मृद पात्र में मंद अग्नि पकाना',
    title: 'Slow Hearth Boiling (Manda Agni)',
    desc: 'Fresh rich buffalo milk is slowly simmered for hours in clay pots over low heat from sun-dried cow dung cakes, gently preserving natural calcium and bio-available lipids.',
    secret: 'No industrial pasteurizers or ultra-high heat flash denaturation.',
    icon: <Flame className="w-5 h-5 text-[#966107]" />,
  },
  {
    step: '03',
    hindiName: 'दही संस्कार (प्राकृतिक किण्वन)',
    title: 'Overnight Thick Dahi Setting',
    desc: 'Boiled milk is cooled naturally and cultured with natural live Vedic starter dahi (जामन) in earthenware vessels to set thick, creamy curd packed with gut-nourishing enzymes.',
    secret: 'The whole curd is cultured — never skimmed industrial cream or malai.',
    icon: <Droplets className="w-5 h-5 text-[#966107]" />,
  },
  {
    step: '04',
    hindiName: 'ब्रह्म मुहूर्त काष्ठ बिलोना मंथन',
    title: 'Bidirectional Wooden Bilona Churning',
    desc: 'At Brahma Muhurta (dawn), cultured buffalo dahi is churned back and forth with a traditional wooden bilona (मथानी) powered by rope tension, extracting pure snow-white Makhan.',
    secret: 'Clockwise and counter-clockwise rope motion preserves the delicate healthy fatty acid bonds.',
    icon: <Compass className="w-5 h-5 text-[#966107]" />,
  },
  {
    step: '05',
    hindiName: 'मोती जैसा दानेदार घृत निष्कासन',
    title: 'Slow Clarification into Danedaar Ghee',
    desc: 'Fresh white makhan is gently melted over an earthen stove until all residual moisture evaporates, yielding dense pearl-white granular (दानेदार) ghee with intoxicating aroma.',
    secret: 'Takes ~20-25 litres of pure Murrah milk to yield just 1 single litre of यदु Buffalo Ghee.',
    icon: <Sparkles className="w-5 h-5 text-[#966107]" />,
  },
];

export const BilonaProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState(3); // Default on Brahma Muhurta churning

  return (
    <section id="bilona-process" className="py-20 bg-[#F4EFE6] relative overflow-hidden border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966107] mb-3">
            <span className="w-5 h-[1px] bg-[#966107]" />
            <span className="font-royal">The Vedic 5-Samskara Method</span>
            <span className="w-5 h-[1px] bg-[#966107]" />
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] mb-4">
            परंपरागत काष्ठ बिलोना विधि
          </h2>
          <p className="text-base text-[#5C4D43] leading-relaxed">
            Authentic healing ghee is never made from separated cream. Our Murrah buffalo ghee is hand-churned from cultured whole curd in clay vessels to preserve active enzymes and granular crystals.
          </p>
        </div>

        {/* Two-Column Process Presentation: Image Left, Interactive Steps Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Documentary Photo Showcase */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-[#EADFCF] bg-[#241D17]">
              <img
                src="/src/assets/images/bilona_churning_process_1794222795083.jpg"
                alt="Authentic traditional Indian village wooden Bilona curd churning scene"
                className="w-full h-[440px] sm:h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#241D17]/85 via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="font-royal text-xs uppercase tracking-widest text-[#E29D2C] block mb-1">
                  Murrah Buffalo Bilona
                </span>
                <h4 className="font-brand text-xl sm:text-2xl font-bold mb-2">
                  दही से मक्खन, मक्खन से शुद्ध घृत
                </h4>
                <p className="text-xs text-stone-300 leading-relaxed max-w-lg">
                  Every drop of यदु Buffalo Ghee honors this ancient Vedic ritual. Hand-churned by rural artisans at sunrise without industrial separators or chemical refining.
                </p>
                <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between text-xs text-stone-300">
                  <span>25L Murrah Milk → 1L यदु Ghee</span>
                  <span className="text-[#E29D2C] font-semibold">100% Pearl-White दानेदार</span>
                </div>
              </div>
            </div>
          </div>

          {/* Step-by-Step Interactive Accordion / Timeline */}
          <div className="lg:col-span-6 space-y-3">
            {STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-white border-[#C98816] shadow-md ring-1 ring-[#C98816]/30'
                      : 'bg-[#FAF7F2] border-[#EADFCF] hover:bg-white hover:border-[#C98816]/60'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 transition-colors ${
                        isActive
                          ? 'bg-[#241D17] text-[#E29D2C]'
                          : 'bg-[#EADFCF]/60 text-[#3B2E24]'
                      }`}
                    >
                      {step.step}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-baseline justify-between mb-1">
                        <h4 className="font-brand text-base sm:text-lg font-bold text-[#241D17]">
                          {step.hindiName}
                        </h4>
                        <span className="text-xs font-semibold text-[#966107] font-royal">
                          Phase {step.step}
                        </span>
                      </div>
                      
                      <div className="font-royal text-xs font-semibold text-[#6E5A4E] mb-2 uppercase tracking-wider">
                        {step.title}
                      </div>

                      <p className="text-xs text-[#5C4D43] leading-relaxed mb-2">
                        {step.desc}
                      </p>

                      {isActive && (
                        <div className="mt-3 pt-3 border-t border-[#EADFCF] flex items-center gap-2 text-xs text-[#8F4E24] bg-[#FAF5EC] p-2.5 rounded-lg">
                          <CheckCircle2 className="w-4 h-4 text-[#966107] shrink-0" />
                          <span className="font-medium">{step.secret}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
