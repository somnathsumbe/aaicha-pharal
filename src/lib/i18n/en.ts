const en = {
  nav: { home: "Home", products: "Products", about: "About Us", story: "Our Story", howToOrder: "How to Order", delivery: "Delivery", contact: "Contact" },
  hero: {
    tag: "Taste it once, you'll order again!",
    title: "Aai's homemade taste,\nnow delivered to you!",
    desc: "Crisp chakli, flavourful chivda and authentic Maharashtrian pharal. Every bite tastes like home.",
    ctaPrimary: "Order now",
    ctaSecondary: "See our products"
  },
  product: { addToBag: "Add to bag", added: "✓ Added to bag", chooseWeight: "Choose weight", priceTBD: "Price coming soon", outOfStock: "Currently unavailable" },
  cart: { title: "Your bag", empty: "Your bag is empty.", subtotal: "Subtotal", sendOrder: "Send order on WhatsApp", items: "items" },
  form: { name: "Name", mobile: "Mobile number", society: "Society / building", flat: "Flat number", instructions: "Instructions (optional)", submit: "Send order on WhatsApp", confirmNote: "Press Send once WhatsApp opens. Your order is confirmed only after we confirm it.", errorGeneric: "Please fill in every field correctly." },
  footer: { quickLinks: "Quick links", info: "Information", privacy: "Privacy Policy", terms: "Terms & Conditions" }
} as const;
export default en;
