import React, { useState } from 'react';
import { MessageCircle, Check, MapPin, Truck, Copy, QrCode } from 'lucide-react';
import { getQuickOrderWhatsAppUrl, QuickOrderData, DISPLAY_PHONE } from '../utils/whatsapp';

export const OrderBuilder: React.FC = () => {
  const [productType, setProductType] = useState<'classic' | 'vintage' | 'family'>('classic');
  const [packSize, setPackSize] = useState<string>('1kg');
  const [quantity, setQuantity] = useState<number>(1);
  const [pincode, setPincode] = useState<string>('');
  const [customerName, setCustomerName] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [showQrModal, setShowQrModal] = useState<boolean>(false);

  // Pricing matrix based on selection
  const priceCatalog: Record<'classic' | 'vintage' | 'family', Record<string, { label: string; price: number }>> = {
    classic: {
      '500g': { label: '500 ml Glass Jar', price: 749 },
      '1kg': { label: '1 Litre Glass Jar', price: 1399 },
      '2kg': { label: '2 Litres Value Jar', price: 2699 },
      '5kg': { label: '5 Litres Family Feast', price: 6499 },
    },
    vintage: {
      '500g': { label: '500 ml Reserve Jar', price: 899 },
      '1kg': { label: '1 Litre Reserve Jar', price: 1649 },
      '2kg': { label: '2 Litres Reserve Duo', price: 3199 },
      '5kg': { label: '5 Litres Reserve Canister', price: 7499 },
    },
    family: {
      '500g': { label: '500 ml Sampler Pack', price: 799 },
      '1kg': { label: '1 Litre Festive Jar', price: 1499 },
      '2kg': { label: '2 Litres Jar + Brass Spoon', price: 2799 },
      '5kg': { label: '5 Litres Family Feast Canister', price: 6499 },
    },
  };

  const selectedPriceData = priceCatalog[productType][packSize] || priceCatalog[productType]['1kg'];
  const unitPrice = selectedPriceData.price;
  const totalPrice = unitPrice * quantity;

  const productTitles: Record<'classic' | 'vintage' | 'family', string> = {
    classic: 'Pure Vedic Buffalo Bilona Ghee (Classic)',
    vintage: 'Reserve Earthen-Simmered Buffalo Ghee',
    family: 'Royal Shahi Buffalo Ghee Family Pack',
  };

  const orderData: QuickOrderData = {
    productName: productTitles[productType],
    sizeLabel: selectedPriceData.label,
    pricePerUnit: unitPrice,
    quantity,
    customerName: customerName.trim() || undefined,
    pincode: pincode.trim() || undefined,
    city: city.trim() || undefined,
  };

  const whatsappUrl = getQuickOrderWhatsAppUrl(orderData);

  // Pincode validation helper
  const isPincodeValid = /^\d{6}$/.test(pincode.trim());

  const getPincodeEstimate = () => {
    if (!isPincodeValid) return null;
    const prefix = pincode.slice(0, 2);
    if (['11', '12', '20'].includes(prefix)) {
      return { city: 'Delhi NCR', speed: '24-48 Hours Express', cod: true };
    }
    if (['40', '41'].includes(prefix)) {
      return { city: 'Mumbai / Pune Region', speed: '24-48 Hours Express', cod: true };
    }
    if (['56', '57'].includes(prefix)) {
      return { city: 'Bengaluru Region', speed: '48 Hours Express', cod: true };
    }
    if (['50', '60', '70'].includes(prefix)) {
      return { city: 'Hyderabad / Chennai / Kolkata', speed: '2-3 Days Express', cod: true };
    }
    if (['30', '31', '32', '38'].includes(prefix)) {
      return { city: 'Rajasthan / Gujarat Belt', speed: '24-48 Hours Direct', cod: true };
    }
    return { city: 'All India', speed: '3-4 Business Days', cod: true };
  };

  const pincodeEstimate = getPincodeEstimate();

  const handleCopyMessage = () => {
    const rawText = `Namaste यदु Team, I want to order ${productTitles[productType]} (${selectedPriceData.label}) - Qty: ${quantity} - Total: ₹${totalPrice.toLocaleString('en-IN')}. Pincode: ${pincode || 'India'}`;
    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="order-builder" className="py-20 bg-[#FAF5EC] relative border-b border-[#EADFCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#966107] mb-3">
            <span className="w-5 h-[1px] bg-[#966107]" />
            <span className="font-royal">Direct Farm-to-Kitchen Service</span>
            <span className="w-5 h-[1px] bg-[#966107]" />
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#241D17] mb-4">
            व्हाट्सएप त्वरित ऑर्डर बिल्डर (Buffalo Ghee)
          </h2>
          <p className="text-base text-[#5C4D43] leading-relaxed">
            Select your desired pack size and quantity in seconds. We pre-format your order so you can complete your purchase on WhatsApp with a single tap.
          </p>
        </div>

        {/* Builder Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-[#EADFCF] shadow-lg p-6 sm:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Configurator Column */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* 1. Product Type Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#241D17] mb-2.5">
                  1. Choose Buffalo Ghee Variety:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setProductType('classic')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      productType === 'classic'
                        ? 'border-[#C98816] bg-[#FAF2E2] ring-1 ring-[#C98816]'
                        : 'border-[#EADFCF] bg-[#FAF7F2] hover:bg-stone-50'
                    }`}
                  >
                    <div className="font-brand text-sm font-bold text-[#241D17]">Classic Bilona</div>
                    <div className="text-[11px] text-[#966107] font-semibold">Pearl White</div>
                    <div className="text-[10px] text-stone-500 mt-1">From ₹749</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProductType('vintage')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      productType === 'vintage'
                        ? 'border-[#C98816] bg-[#FAF2E2] ring-1 ring-[#C98816]'
                        : 'border-[#EADFCF] bg-[#FAF7F2] hover:bg-stone-50'
                    }`}
                  >
                    <div className="font-brand text-sm font-bold text-[#241D17]">Reserve Batch</div>
                    <div className="text-[11px] text-[#966107] font-semibold">Earthen Simmered</div>
                    <div className="text-[10px] text-stone-500 mt-1">From ₹899</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setProductType('family')}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                      productType === 'family'
                        ? 'border-[#C98816] bg-[#FAF2E2] ring-1 ring-[#C98816]'
                        : 'border-[#EADFCF] bg-[#FAF7F2] hover:bg-stone-50'
                    }`}
                  >
                    <div className="font-brand text-sm font-bold text-[#241D17]">Family Pack</div>
                    <div className="text-[11px] text-[#966107] font-semibold">Festive Value</div>
                    <div className="text-[10px] text-stone-500 mt-1">From ₹2,799</div>
                  </button>
                </div>
              </div>

              {/* 2. Pack Size Selector */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#241D17] mb-2.5">
                  2. Select Pack Size:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { key: '500g', title: '500 ml', tag: 'Trial Size' },
                    { key: '1kg', title: '1 Litre', tag: 'Most Popular' },
                    { key: '2kg', title: '2 Litres', tag: 'Best Value' },
                    { key: '5kg', title: '5 Litres', tag: 'Family Canister' },
                  ].map((size) => {
                    const isSelected = packSize === size.key;
                    const priceItem = priceCatalog[productType][size.key];
                    return (
                      <button
                        key={size.key}
                        type="button"
                        onClick={() => setPackSize(size.key)}
                        className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#241D17] text-[#FAF7F2] border-[#241D17] shadow-sm'
                            : 'bg-[#FAF7F2] text-[#3B2E24] border-[#EADFCF] hover:border-[#C98816]'
                        }`}
                      >
                        <div className="text-[10px] opacity-75 font-semibold mb-0.5">{size.tag}</div>
                        <div className="font-bold text-sm">{size.title}</div>
                        <div className={`text-xs mt-1 font-semibold ${isSelected ? 'text-[#E29D2C]' : 'text-[#966107]'}`}>
                          ₹{priceItem?.price.toLocaleString('en-IN')}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Quantity & Pincode Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Quantity */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#241D17] mb-2">
                    Quantity (Jars):
                  </label>
                  <div className="flex items-center border border-[#EADFCF] rounded-xl overflow-hidden bg-[#FAF7F2] h-12">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-12 h-full flex items-center justify-center text-lg font-bold text-[#3B2E24] hover:bg-[#EADFCF] cursor-pointer"
                    >
                      −
                    </button>
                    <div className="flex-1 text-center font-bold text-base text-[#241D17] tabular-nums">
                      {quantity}
                    </div>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="w-12 h-full flex items-center justify-center text-lg font-bold text-[#3B2E24] hover:bg-[#EADFCF] cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Pincode Checker */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#241D17] mb-2 flex items-center justify-between">
                    <span>Delivery Pincode:</span>
                    {pincodeEstimate && (
                      <span className="text-[10px] font-semibold text-emerald-700">✓ Deliverable</span>
                    )}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      maxLength={6}
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                      placeholder="e.g. 110001 or 400001"
                      className="w-full h-12 px-4 rounded-xl border border-[#EADFCF] bg-[#FAF7F2] text-sm text-[#241D17] focus:outline-none focus:ring-2 focus:ring-[#C98816]/40 focus:bg-white"
                    />
                    <MapPin className="w-4 h-4 text-stone-400 absolute right-3.5 top-4 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Optional Name */}
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Your Name (Optional):
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full h-11 px-4 rounded-xl border border-[#EADFCF] bg-[#FAF7F2] text-sm text-[#241D17] focus:outline-none focus:ring-2 focus:ring-[#C98816]/40 focus:bg-white"
                />
              </div>

              {/* Pincode estimate alert */}
              {pincodeEstimate && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center gap-3">
                  <Truck className="w-5 h-5 text-emerald-700 shrink-0" />
                  <div>
                    <span className="font-bold">{pincodeEstimate.city}:</span>{' '}
                    <span>{pincodeEstimate.speed} · Free Express Shipping & Cash on Delivery Available</span>
                  </div>
                </div>
              )}

            </div>

            {/* Right Summary & WhatsApp Dispatch Column */}
            <div className="lg:col-span-5 bg-[#FAF7F2] rounded-2xl border border-[#EADFCF] p-6 flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#EADFCF] mb-4">
                  <span className="font-royal text-xs uppercase tracking-wider font-bold text-[#966107]">
                    Order Summary
                  </span>
                  <span className="text-[11px] text-stone-500">Fresh Batch Reserved</span>
                </div>

                <div className="space-y-3 text-xs mb-6">
                  <div className="flex justify-between items-start">
                    <span className="text-stone-600">Product:</span>
                    <span className="font-bold text-[#241D17] text-right">
                      {productTitles[productType]}
                    </span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-stone-600">Pack Size:</span>
                    <span className="font-semibold text-[#241D17]">{selectedPriceData.label}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-stone-600">Quantity:</span>
                    <span className="font-semibold text-[#241D17] tabular-nums">{quantity} Jar{quantity > 1 ? 's' : ''}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-stone-600">Unit Price:</span>
                    <span className="text-stone-700 tabular-nums">₹{unitPrice.toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between items-center text-emerald-700">
                    <span>Express Delivery:</span>
                    <span className="font-bold uppercase text-[11px]">FREE (All India)</span>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4 border-t border-[#EADFCF] mb-6">
                  <div className="flex items-baseline justify-between">
                    <div>
                      <span className="text-xs text-stone-500 block">Total Amount:</span>
                      <span className="text-2xl sm:text-3xl font-bold text-[#241D17] tabular-nums">
                        ₹{totalPrice.toLocaleString('en-IN')}
                      </span>
                    </div>
                    <span className="text-[11px] text-stone-500 font-medium">
                      COD / UPI / Cards
                    </span>
                  </div>
                </div>

                {/* WhatsApp Message Preview Box */}
                <div className="bg-white rounded-xl border border-[#EADFCF] p-3 text-[11px] font-mono text-[#3B2E24] mb-6 relative">
                  <div className="text-[10px] uppercase font-sans tracking-wider text-[#966107] font-bold mb-1">
                    WhatsApp Message Preview:
                  </div>
                  <div className="line-clamp-3 text-stone-600">
                    &quot;Namaste यदु Team! I want to order {productTitles[productType]} ({selectedPriceData.label}) × {quantity} = ₹{totalPrice.toLocaleString('en-IN')}&quot;
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-xl shadow hover:shadow-md transition-all cursor-pointer group"
                >
                  <MessageCircle className="w-5 h-5 fill-current group-hover:scale-110 transition-transform" />
                  <span>Place Order on WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#EADFCF] bg-white hover:bg-stone-50 text-[#3B2E24] font-medium transition-colors cursor-pointer"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-700" /> : <Copy className="w-4 h-4 text-stone-500" />}
                    <span>{copied ? 'Copied!' : 'Copy Text'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowQrModal(true)}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg border border-[#EADFCF] bg-white hover:bg-stone-50 text-[#3B2E24] font-medium transition-colors cursor-pointer"
                  >
                    <QrCode className="w-4 h-4 text-stone-500" />
                    <span>Scan QR</span>
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* QR Code Modal for desktop users */}
      {showQrModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl max-w-sm w-full p-6 text-center border border-[#EADFCF] shadow-2xl relative">
            <button
              onClick={() => setShowQrModal(false)}
              className="absolute top-4 right-4 text-stone-400 hover:text-stone-700 cursor-pointer text-lg font-bold"
            >
              ✕
            </button>
            <div className="w-12 h-12 rounded-full bg-[#FAF2E2] text-[#966107] mx-auto flex items-center justify-center mb-3">
              <QrCode className="w-6 h-6" />
            </div>
            <h3 className="font-brand text-lg font-bold text-[#241D17] mb-1">
              Scan with WhatsApp Camera
            </h3>
            <p className="text-xs text-[#5C4D43] mb-4">
              Open WhatsApp on your mobile phone, scan the QR, and chat directly with the यदु team for pure Buffalo Ghee orders.
            </p>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 inline-block mb-4">
              <div className="w-44 h-44 bg-white border border-stone-200 rounded-lg flex flex-col items-center justify-center p-2 relative shadow-inner">
                <div className="grid grid-cols-6 gap-1 w-36 h-36">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div
                      key={i}
                      className={`rounded-[2px] ${
                        i % 2 === 0 || i % 7 === 0 || i === 0 || i === 5 || i === 30 || i === 35
                          ? 'bg-[#241D17]'
                          : 'bg-[#241D17]/20'
                      }`}
                    />
                  ))}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-md border-2 border-white">
                    <MessageCircle className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>
            </div>

            <div className="text-xs text-stone-600 mb-3">
              Direct Helpline: <strong>{DISPLAY_PHONE}</strong>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-semibold text-white bg-[#25D366] rounded-xl hover:bg-[#20BA59]"
            >
              <span>Or Open WhatsApp Directly</span>
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
