/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Product, CartItem } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { WhyChooseYadu } from './components/WhyChooseYadu';
import { BilonaProcess } from './components/BilonaProcess';
import { OrderBuilder } from './components/OrderBuilder';
import { PurityGuide } from './components/PurityGuide';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);

  const handleAddToCart = (product: Product, sizeId: string) => {
    const selectedSize = product.sizes.find((s) => s.id === sizeId) || product.sizes[0];

    setCartItems((prevItems) => {
      const existingIndex = prevItems.findIndex(
        (item) => item.productId === product.id && item.sizeId === sizeId
      );

      if (existingIndex > -1) {
        const updated = [...prevItems];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }

      return [
        ...prevItems,
        {
          productId: product.id,
          productName: product.nameEnglish,
          sizeId: selectedSize.id,
          sizeLabel: selectedSize.label,
          price: selectedSize.price,
          quantity: 1,
          image: product.image,
        },
      ];
    });

    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (productId: string, sizeId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.productId === productId && item.sizeId === sizeId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null)
    );
  };

  const handleRemoveItem = (productId: string, sizeId: string) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.sizeId === sizeId))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleScrollToPurity = () => {
    const elem = document.getElementById('purity-test');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const totalCartCount = cartItems.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] text-[#241D17]">
      {/* Header Navigation */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenPurityTest={handleScrollToPurity}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Product Catalog Cards */}
        <Products
          onAddToCart={handleAddToCart}
          onSelectProductDetails={(product) => setSelectedProductForModal(product)}
        />

        {/* Why Choose Yadu & Transparency Matrix */}
        <WhyChooseYadu />

        {/* The 5-Samskara Bilona Method */}
        <BilonaProcess />

        {/* Quick WhatsApp Order Builder & Pincode Checker */}
        <OrderBuilder />

        {/* Kitchen Purity Test Guide */}
        <PurityGuide />

        {/* Verified Customer Reviews */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Slide-over Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Product Lab Specs & Nutritional Modal */}
      <ProductDetailModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Floating WhatsApp Quick Action Button */}
      <WhatsAppFloatingButton />
    </div>
  );
}
