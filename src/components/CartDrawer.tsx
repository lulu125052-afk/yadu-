import React, { useState } from 'react';
import { CartItem } from '../types';
import { X, Trash2, MessageCircle, ArrowRight, ShieldCheck, ShoppingBag } from 'lucide-react';
import { getCartCheckoutWhatsAppUrl } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, sizeId: string, delta: number) => void;
  onRemoveItem: (productId: string, sizeId: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [customerName, setCustomerName] = useState('');
  const [pincode, setPincode] = useState('');

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const checkoutUrl = getCartCheckoutWhatsAppUrl(
    items,
    total,
    customerName.trim() || undefined,
    pincode.trim() || undefined
  );

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF7F2] border-l border-[#EADFCF] shadow-2xl flex flex-col justify-between">
          
          {/* Header */}
          <div className="p-5 border-b border-[#EADFCF] bg-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#966107]" />
              <h3 className="font-brand text-xl font-bold text-[#241D17]">
                आपकी घी थाली (Your Bag)
              </h3>
              <span className="text-xs text-stone-500 font-semibold bg-[#FAF5EC] px-2 py-0.5 rounded-full border border-[#EADFCF]">
                {totalItems} {totalItems === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-stone-400 hover:text-[#241D17] hover:bg-stone-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {items.length === 0 ? (
              <div className="py-20 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FAF2E2] text-[#966107] mx-auto flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <h4 className="font-bold text-base text-[#241D17]">Your bag is empty</h4>
                <p className="text-xs text-[#5C4D43] max-w-xs mx-auto">
                  Explore our pure A2 Gir Cow Ghee, Vedic Buffalo Ghee, or Royal Combo to get started.
                </p>
                <a
                  href="#products"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#241D17] text-white text-xs font-semibold rounded-xl hover:bg-[#3B2E24] cursor-pointer"
                >
                  <span>Explore Products</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.productId}-${item.sizeId}`}
                  className="bg-white rounded-xl p-3.5 border border-[#EADFCF] shadow-xs flex items-center gap-3.5"
                >
                  <img
                    src={item.image}
                    alt={item.productName}
                    className="w-16 h-16 rounded-lg object-cover border border-[#EADFCF] shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex-1 min-w-0">
                    <h5 className="font-bold text-xs text-[#241D17] truncate">
                      {item.productName}
                    </h5>
                    <div className="text-[11px] text-[#966107] font-semibold">
                      {item.sizeLabel}
                    </div>
                    <div className="text-xs font-bold text-[#241D17] mt-1 tabular-nums">
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                  </div>

                  {/* Quantity Stepper */}
                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => onRemoveItem(item.productId, item.sizeId)}
                      className="text-stone-400 hover:text-rose-600 p-1 cursor-pointer"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                    <div className="flex items-center border border-[#EADFCF] rounded-lg bg-[#FAF7F2] text-xs">
                      <button
                        onClick={() => onUpdateQuantity(item.productId, item.sizeId, -1)}
                        className="px-2 py-0.5 text-stone-600 hover:bg-[#EADFCF] font-bold cursor-pointer"
                      >
                        −
                      </button>
                      <span className="px-2 py-0.5 font-bold tabular-nums">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.productId, item.sizeId, 1)}
                        className="px-2 py-0.5 text-stone-600 hover:bg-[#EADFCF] font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout */}
          {items.length > 0 && (
            <div className="p-5 border-t border-[#EADFCF] bg-white space-y-4">
              {/* Optional Quick Fields */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <input
                  type="text"
                  placeholder="Your Name (Optional)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="px-3 py-2 rounded-lg border border-[#EADFCF] bg-[#FAF7F2] text-xs focus:outline-none focus:ring-1 focus:ring-[#C98816]"
                />
                <input
                  type="text"
                  maxLength={6}
                  placeholder="Pincode (Optional)"
                  value={pincode}
                  onChange={(e) => setPincode(e.target.value.replace(/\D/g, ''))}
                  className="px-3 py-2 rounded-lg border border-[#EADFCF] bg-[#FAF7F2] text-xs focus:outline-none focus:ring-1 focus:ring-[#C98816]"
                />
              </div>

              {/* Price Calculations */}
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-stone-600">
                  <span>Subtotal:</span>
                  <span className="font-semibold tabular-nums">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-emerald-700 font-semibold">
                  <span>Shipping:</span>
                  <span>FREE Pan-India Express</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-[#241D17] pt-2 border-t border-[#EADFCF]">
                  <span>Total Amount:</span>
                  <span className="text-lg tabular-nums">₹{total.toLocaleString('en-IN')}</span>
                </div>
              </div>

              {/* WhatsApp Checkout Button */}
              <a
                href={checkoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BA59] rounded-xl shadow transition-all cursor-pointer group"
              >
                <MessageCircle className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                <span>Checkout on WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-stone-500 text-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#966107]" />
                <span>Cash on Delivery (COD) & UPI available on WhatsApp</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
