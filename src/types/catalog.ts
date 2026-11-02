export type Locale = "mr" | "hi" | "en";

export type LocalizedText = Record<Locale, string>;

export interface ProductVariant {
  weight: string;       // e.g. "250g", "500g", "1kg", or "pre-order"
  unit: "g" | "kg" | "serving";
  price: number | null; // null until the owner supplies a real price
  available: boolean;
  stock: number | null; // null = not tracked
}

export interface Product {
  id: string;
  slug: string;
  name: LocalizedText;
  shortDescription: LocalizedText;
  description: LocalizedText;
  category: "dry-snack" | "sweet" | "fresh-snack";
  image: string;          // path under /public/images
  gallery?: string[];
  variants: ProductVariant[];
  ingredients?: LocalizedText;
  allergens?: LocalizedText;
  storageInstructions?: LocalizedText;
  shelfLife?: LocalizedText;
  featured: boolean;
  available: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Society {
  id: string;
  name: string;
  area: string;
  buildings: string[];
  deliveryAvailable: boolean;
  deliveryFee: number;
  minimumOrder: number;
  deliverySchedule: string;
}

export interface CartLine {
  productId: string;
  productName: string;
  variantWeight: string;
  unitPrice: number | null;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  mobile: string;
  society: string;
  building: string;
  flat: string;
  address?: string;
  instructions?: string;
}
