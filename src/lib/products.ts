import type { Product } from "@/types/catalog";

// Placeholder prices (null) until the owner supplies real pricing.
// This is the source of truth today; Phase 10 swaps this module's
// reads for MongoDB queries behind the same Product type, so pages
// that import from here do not need to change.
const dryWeights = (): Product["variants"] => [
  { weight: "250g", unit: "g", price: null, available: true, stock: null },
  { weight: "500g", unit: "g", price: null, available: true, stock: null },
  { weight: "1kg", unit: "kg", price: null, available: true, stock: null }
];

export const products: Product[] = [
  {
    id: "chakli",
    slug: "aaichi-special-chakli",
    name: { mr: "आईची स्पेशल चकली", hi: "माँ की स्पेशल चकली", en: "Aai's Special Chakli" },
    shortDescription: {
      mr: "आईच्या हातची खास कुरकुरीत चकली, आमची ओळख.",
      hi: "माँ के हाथ की खास कुरकुरी चकली, हमारी पहचान।",
      en: "Aai's signature crisp, hand-shaped chakli."
    },
    description: {
      mr: "पारंपरिक पद्धतीने घरी बनवलेली खमंग आणि कुरकुरीत चकली. आईच्या खास रेसिपीनुसार तयार केली जाते.",
      hi: "पारंपरिक तरीके से घर पर बनी खमंग और कुरकुरी चकली। माँ की खास रेसिपी से तैयार।",
      en: "Traditionally hand-made, crisp chakli prepared at home using Aai's own recipe."
    },
    category: "dry-snack",
    image: "/images/chakli.jpg",
    variants: dryWeights(),
    featured: true,
    available: true,
    createdAt: "2026-11-02T00:00:00.000Z",
    updatedAt: "2026-11-02T00:00:00.000Z"
  },
  {
    id: "chivda",
    slug: "khamang-chivda",
    name: { mr: "खमंग चिवडा", hi: "खमंग चिवड़ा", en: "Khamang Chivda" },
    shortDescription: { mr: "घरगुती पद्धतीचा खमंग चिवडा.", hi: "घर के तरीके से बना खमंग चिवड़ा।", en: "Home-style savoury poha chivda." },
    description: {
      mr: "पोहे, शेंगदाणे आणि घरगुती मसाल्यांनी बनवलेला चवदार चिवडा.",
      hi: "पोहे, मूंगफली और घर के मसालों से बना स्वादिष्ट चिवड़ा।",
      en: "Flattened rice tossed with peanuts and home-ground spices."
    },
    category: "dry-snack",
    image: "/images/chivda.jpg",
    variants: dryWeights(),
    featured: false,
    available: true,
    createdAt: "2026-11-02T00:00:00.000Z",
    updatedAt: "2026-11-02T00:00:00.000Z"
  },
  {
    id: "karanji",
    slug: "karanji",
    name: { mr: "करंजी", hi: "करंजी", en: "Karanji" },
    shortDescription: { mr: "पारंपरिक सणासुदीची करंजी.", hi: "पारंपरिक त्योहारी करंजी।", en: "Festive, traditional sweet karanji." },
    description: {
      mr: "खोबरं आणि सुकामेवा भरलेली, सणासुदीला आवडणारी गोड करंजी.",
      hi: "नारियल और मेवों से भरी, त्योहारों की पसंदीदा मीठी करंजी।",
      en: "Pastry parcels filled with coconut and dry fruits, a festive favourite."
    },
    category: "sweet",
    image: "/images/karanji.jpg",
    variants: dryWeights(),
    featured: false,
    available: true,
    createdAt: "2026-11-02T00:00:00.000Z",
    updatedAt: "2026-11-02T00:00:00.000Z"
  },
  {
    id: "ladoo",
    slug: "besan-ladoo",
    name: { mr: "बेसन लाडू", hi: "बेसन लड्डू", en: "Besan Ladoo" },
    shortDescription: { mr: "घरगुती बेसन लाडू.", hi: "घर का बना बेसन लड्डू।", en: "Home-made gram-flour ladoo." },
    description: {
      mr: "साजूक तुपात भाजलेल्या बेसनाचे घरगुती लाडू.",
      hi: "शुद्ध घी में भुने बेसन से बने घर के लड्डू।",
      en: "Gram flour slow-roasted in ghee, rolled into ladoo."
    },
    category: "sweet",
    image: "/images/ladoo.jpg",
    variants: dryWeights(),
    featured: false,
    available: true,
    createdAt: "2026-11-02T00:00:00.000Z",
    updatedAt: "2026-11-02T00:00:00.000Z"
  },
  {
    id: "alu",
    slug: "alu-vadi",
    name: { mr: "अळूवडी", hi: "अरबी पत्ता वड़ी", en: "Alu Vadi" },
    shortDescription: { mr: "ताजी बनवलेली अळूवडी.", hi: "ताज़ी बनी अरबी पत्ता वड़ी।", en: "Freshly steamed and pan-fried colocasia-leaf rolls." },
    description: {
      mr: "अळूच्या पानांपासून बनवलेली, ताजी वाफवून तळलेली अळूवडी. प्री-ऑर्डरवर उपलब्ध.",
      hi: "अरबी के पत्तों से बनी, ताज़ी भाप में पकाई और तली हुई वड़ी। प्री-ऑर्डर पर उपलब्ध।",
      en: "Steamed colocasia-leaf rolls, lightly pan-fried fresh to order. Available on pre-order."
    },
    category: "fresh-snack",
    image: "/images/alu.jpg",
    variants: [{ weight: "प्री-ऑर्डर", unit: "serving", price: null, available: true, stock: null }],
    featured: false,
    available: true,
    createdAt: "2026-11-02T00:00:00.000Z",
    updatedAt: "2026-11-02T00:00:00.000Z"
  },
  {
    id: "kothimbir",
    slug: "kothimbir-vadi",
    name: { mr: "कोथिंबीर वडी", hi: "धनिया वड़ी", en: "Kothimbir Vadi" },
    shortDescription: { mr: "ताजी बनवलेली कोथिंबीर वडी.", hi: "ताज़ी बनी धनिया वड़ी।", en: "Freshly steamed and pan-fried coriander vadi." },
    description: {
      mr: "ताज्या कोथिंबिरीपासून बनवलेली वाफवून तळलेली वडी. प्री-ऑर्डरवर उपलब्ध.",
      hi: "ताज़े धनिये से बनी, भाप में पकाई और तली हुई वड़ी। प्री-ऑर्डर पर उपलब्ध।",
      en: "Fresh coriander and gram-flour vadi, steamed and lightly fried. Available on pre-order."
    },
    category: "fresh-snack",
    image: "/images/kothimbir.jpg",
    variants: [{ weight: "प्री-ऑर्डर", unit: "serving", price: null, available: true, stock: null }],
    featured: false,
    available: true,
    createdAt: "2026-11-02T00:00:00.000Z",
    updatedAt: "2026-11-02T00:00:00.000Z"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
