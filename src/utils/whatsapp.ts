import { CartItem } from '../types';

export const WHATSAPP_PHONE_NUMBER = '919729391209';
export const DISPLAY_PHONE = '+91 97293 91209';
export const STORE_ADDRESS = 'Plot No. 712, Sector 8, Manesar, Gurugram, Haryana';

export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encoded}`;
}

export function getGeneralWhatsAppUrl(): string {
  return createWhatsAppUrl('Hello यदु Team, I want to order pure Vedic Buffalo Bilona Ghee.');
}

export function getProductWhatsAppUrl(
  productName: string,
  sizeLabel: string,
  price: number
): string {
  const message = `Namaste यदु Team! 🙏\n\nI want to order:\n🍯 *Product:* ${productName}\n⚖️ *Size:* ${sizeLabel}\n💰 *Price:* ₹${price.toLocaleString('en-IN')}\n\nPlease share payment options and delivery estimate.`;
  return createWhatsAppUrl(message);
}

export interface QuickOrderData {
  productName: string;
  sizeLabel: string;
  pricePerUnit: number;
  quantity: number;
  customerName?: string;
  pincode?: string;
  city?: string;
  deliveryOption?: string;
}

export function getQuickOrderWhatsAppUrl(data: QuickOrderData): string {
  const total = data.pricePerUnit * data.quantity;
  let msg = `*NEW ORDER INQUIRY — यदु (Yadu) VEDIC BUFFALO GHEE*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `🍯 *Product:* ${data.productName}\n`;
  msg += `⚖️ *Pack Size:* ${data.sizeLabel}\n`;
  msg += `📦 *Quantity:* ${data.quantity} jar${data.quantity > 1 ? 's' : ''}\n`;
  msg += `💵 *Total Amount:* ₹${total.toLocaleString('en-IN')} (Free Express Delivery)\n`;
  
  if (data.customerName) {
    msg += `👤 *Name:* ${data.customerName}\n`;
  }
  if (data.pincode) {
    msg += `📍 *Delivery Pincode:* ${data.pincode}${data.city ? ` (${data.city})` : ''}\n`;
  }
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `Please confirm my order and share dispatch timeline. Thank you!`;

  return createWhatsAppUrl(msg);
}

export function getCartCheckoutWhatsAppUrl(
  items: CartItem[],
  total: number,
  customerName?: string,
  pincode?: string
): string {
  let msg = `*NEW ORDER — यदु (Yadu) VEDIC BUFFALO GHEE*\n`;
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  items.forEach((item, index) => {
    msg += `${index + 1}. *${item.productName}* (${item.sizeLabel})\n   Qty: ${item.quantity} × ₹${item.price} = ₹${(item.quantity * item.price).toLocaleString('en-IN')}\n`;
  });
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `💰 *Grand Total:* ₹${total.toLocaleString('en-IN')}\n`;
  msg += `🚚 *Shipping:* FREE Express Delivery across India\n`;
  if (customerName) {
    msg += `👤 *Customer Name:* ${customerName}\n`;
  }
  if (pincode) {
    msg += `📍 *Pincode:* ${pincode}\n`;
  }
  msg += `━━━━━━━━━━━━━━━━━━━━━\n`;
  msg += `Please confirm my order and send payment link (COD / UPI).`;

  return createWhatsAppUrl(msg);
}
