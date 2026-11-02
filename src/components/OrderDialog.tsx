"use client";
import { useEffect, useRef, useState } from "react";
import { useCart } from "@/context/CartContext";
import { useLanguage } from "@/context/LanguageContext";
import { buildOrderMessage, buildWhatsAppUrl, normalizeIndianMobile } from "@/lib/whatsapp";
import type { CustomerDetails } from "@/types/catalog";
import styles from "./OrderDialog.module.scss";

export default function OrderDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { lines, clear } = useCart();
  const { t } = useLanguage();
  const ref = useRef<HTMLDialogElement>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    if (!open && el.open) el.close();
  }, [open]);

  const summary = lines
    .map((l, i) => `${i + 1}. ${l.productName} - ${l.variantWeight} - Quantity ${l.quantity}.`)
    .join("\n");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const mobile = normalizeIndianMobile(data.mobile ?? "");
    if ((data.name ?? "").trim().length < 2 || !mobile || (data.society ?? "").trim().length < 2 || !(data.flat ?? "").trim()) {
      setError(t.form.errorGeneric);
      return;
    }
    setError("");
    const customer: CustomerDetails = {
      name: data.name.trim(),
      mobile,
      society: data.society.trim(),
      building: data.society.trim(),
      flat: data.flat.trim(),
      instructions: data.instructions?.trim() || undefined
    };
    const url = buildWhatsAppUrl(buildOrderMessage(lines, customer));
    const win = window.open(url, "_blank");
    if (!win) window.location.href = url;
    clear();
    onClose();
  };

  return (
    <dialog ref={ref} className={styles.dialog} aria-labelledby="order-dialog-title" onClose={onClose}>
      <form onSubmit={handleSubmit}>
        <h2 id="order-dialog-title" style={{ fontSize: "1.4rem" }}>तुमची ऑर्डर पाठवा</h2>
        <div className={styles.summary}>{summary}</div>
        <label htmlFor="name">{t.form.name}</label>
        <input id="name" name="name" autoComplete="name" required />
        <label htmlFor="mobile">{t.form.mobile}</label>
        <input id="mobile" name="mobile" type="tel" inputMode="numeric" autoComplete="tel" required />
        <label htmlFor="society">{t.form.society}</label>
        <input id="society" name="society" required />
        <label htmlFor="flat">{t.form.flat}</label>
        <input id="flat" name="flat" required />
        <label htmlFor="instructions">{t.form.instructions}</label>
        <input id="instructions" name="instructions" />
        <p className={styles.err} role="alert">{error}</p>
        <p style={{ fontSize: ".85rem" }}>{t.form.confirmNote}</p>
        <button type="submit" className={styles.submit}>{t.form.submit}</button>
        <button type="button" className={styles.cancel} onClick={onClose}>मागे जा</button>
      </form>
    </dialog>
  );
}
