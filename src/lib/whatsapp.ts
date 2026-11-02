import type { CartLine, CustomerDetails } from "@/types/catalog";

const BUSINESS_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER ?? "919028787219";

export function buildOrderMessage(lines: CartLine[], customer: CustomerDetails): string {
  const itemLines = lines
    .map((line, i) => {
      const price = line.unitPrice != null ? ` - ₹${line.unitPrice}` : "";
      return `${i + 1}. ${line.productName} - ${line.variantWeight}${price} - Quantity ${line.quantity}.`;
    })
    .join("\n");

  const total = lines.every((l) => l.unitPrice != null)
    ? lines.reduce((sum, l) => sum + (l.unitPrice ?? 0) * l.quantity, 0)
    : null;

  const parts = [
    "नमस्कार आईचा फराळ!",
    "",
    "मला खालील पदार्थ ऑर्डर करायचे आहेत:",
    itemLines,
    "",
    total != null ? `एकूण: ₹${total}` : "",
    `नाव: ${customer.name}`,
    `मोबाईल: ${customer.mobile}`,
    `सोसायटी: ${customer.society}`,
    `फ्लॅट: ${customer.flat}`,
    customer.instructions ? `सूचना: ${customer.instructions}` : "",
    "",
    "कृपया माझी ऑर्डर कन्फर्म करा.",
    "",
    "आईचा फराळ - एकदा खाल, पुन्हा मागाल!"
  ].filter((l) => l !== "");

  return parts.join("\n");
}

export function buildWhatsAppUrl(message: string, number: string = BUSINESS_NUMBER): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

/** Basic validation: Indian 10-digit mobile starting 6–9, after stripping +91/0 prefixes. */
export function normalizeIndianMobile(raw: string): string | null {
  const cleaned = raw.replace(/[\s-]/g, "").replace(/^(\+?91|0)/, "");
  return /^[6-9]\d{9}$/.test(cleaned) ? cleaned : null;
}
