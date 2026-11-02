"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import OrderDialog from "@/components/OrderDialog";

export default function CartPage() {
  const { lines, setQuantity, removeLine, totalItems, hasUnknownPrices, totalKnownAmount } = useCart();
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <section className="wrap" style={{ padding: "48px 0" }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800, marginBottom: 20 }}>{t.cart.title}</h1>
      {lines.length === 0 ? (
        <p>{t.cart.empty} <Link href="/products">{t.nav.products}</Link></p>
      ) : (
        <>
          <ul style={{ listStyle: "none", padding: 0, display: "grid", gap: 12 }}>
            {lines.map((l) => (
              <li key={`${l.productId}-${l.variantWeight}`} style={{ background: "#fff", border: "1px solid #ecdcb5", borderRadius: 16, padding: 16, display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
                <div>
                  <strong>{l.productName}</strong> — {l.variantWeight}
                  {l.unitPrice != null && <span> — ₹{l.unitPrice}</span>}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <button aria-label="कमी करा" onClick={() => setQuantity(l.productId, l.variantWeight, l.quantity - 1)}>−</button>
                  <span>{l.quantity}</span>
                  <button aria-label="वाढवा" onClick={() => setQuantity(l.productId, l.variantWeight, l.quantity + 1)}>+</button>
                  <button aria-label="काढा" onClick={() => removeLine(l.productId, l.variantWeight)}>✕</button>
                </div>
              </li>
            ))}
          </ul>
          <p style={{ marginTop: 20, fontWeight: 600 }}>
            {t.cart.subtotal}: {hasUnknownPrices ? t.product.priceTBD : `₹${totalKnownAmount}`} · {totalItems} {t.cart.items}
          </p>
          <button
            onClick={() => setOpen(true)}
            style={{ marginTop: 16, minHeight: 48, padding: "0 28px", borderRadius: 999, border: 0, background: "#F9B817", color: "#542719", fontWeight: 600, cursor: "pointer" }}
          >
            {t.cart.sendOrder}
          </button>
          <OrderDialog open={open} onClose={() => setOpen(false)} />
        </>
      )}
    </section>
  );
}
