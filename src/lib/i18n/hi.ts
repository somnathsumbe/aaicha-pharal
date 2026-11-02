const hi = {
  nav: { home: "होम", products: "पदार्थ", about: "हमारे बारे में", story: "हमारी कहानी", howToOrder: "ऑर्डर कैसे करें", delivery: "डिलीवरी सेवा", contact: "संपर्क करें" },
  hero: {
    tag: "एक बार खाएं, बार-बार मंगाएं!",
    title: "माँ के हाथ का स्वाद,\nअब आपके घर पर!",
    desc: "खमंग चकली, स्वादिष्ट चिवड़ा और असली महाराष्ट्रीयन फराळ। हर कौर में घर की याद!",
    ctaPrimary: "अभी ऑर्डर करें",
    ctaSecondary: "हमारे पदार्थ देखें"
  },
  product: { addToBag: "बैग में डालें", added: "✓ बैग में डाला गया", chooseWeight: "वज़न चुनें", priceTBD: "कीमत जल्द ही", outOfStock: "फिलहाल उपलब्ध नहीं" },
  cart: { title: "आपका बैग", empty: "आपका बैग खाली है।", subtotal: "कुल", sendOrder: "WhatsApp पर ऑर्डर भेजें", items: "वस्तुएं" },
  form: { name: "नाम", mobile: "मोबाइल नंबर", society: "सोसायटी / बिल्डिंग", flat: "फ्लैट नंबर", instructions: "सूचना (वैकल्पिक)", submit: "WhatsApp पर ऑर्डर भेजें", confirmNote: "WhatsApp खुलने पर Send दबाएं। हमारी पुष्टि के बाद ही ऑर्डर पक्का माना जाएगा।", errorGeneric: "कृपया सभी जानकारी सही भरें।" },
  footer: { quickLinks: "लिंक्स", info: "जानकारी", privacy: "गोपनीयता नीति", terms: "नियम व शर्तें" }
} as const;
export default hi;
