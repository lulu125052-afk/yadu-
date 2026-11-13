export interface ProductSize {
  id: string;
  label: string;
  volume: string;
  price: number;
  originalPrice: number;
  savings: number;
}

export interface Product {
  id: string;
  nameHindi: string;
  nameEnglish: string;
  tagline: string;
  description: string;
  image: string;
  category: 'classic' | 'vintage' | 'family';
  rating: number;
  reviewCount: number;
  sizes: ProductSize[];
  features: string[];
  texture: string;
  aroma: string;
  smokePoint: string;
  shelfLife: string;
  nutritionPer100g: {
    energy: string;
    totalFat: string;
    saturatedFat: string;
    monounsaturatedFat: string;
    polyunsaturatedFat: string;
    cholesterol: string;
    calcium: string;
    vitaminA: string;
    butyricAcid: string;
  };
  labSpecs: {
    milkFat: string;
    moisture: string;
    freeFattyAcids: string;
    peroxideValue: string;
    adulteration: string;
  };
}

export interface CartItem {
  productId: string;
  productName: string;
  sizeId: string;
  sizeLabel: string;
  price: number;
  quantity: number;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  date: string;
  verified: boolean;
  productBought: string;
  comment: string;
  highlight: string;
}

export interface FAQItem {
  id: string;
  question: string;
  questionHindi?: string;
  answer: string;
  category: 'process' | 'health' | 'ordering' | 'storage';
}
