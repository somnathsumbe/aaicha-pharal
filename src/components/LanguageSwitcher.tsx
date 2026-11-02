"use client";
import { useLanguage } from "@/context/LanguageContext";
import { locales } from "@/lib/i18n";

const labels: Record<string, string> = { mr: "मराठी", hi: "हिंदी", en: "English" };

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  return (
    <select
      aria-label="भाषा निवडा / Choose language"
      value={locale}
      onChange={(e) => setLocale(e.target.value as typeof locale)}
      style={{
        minHeight: 44,
        borderRadius: 999,
        border: "1.5px solid #cdb685",
        background: "#fff",
        padding: "0 14px",
        font: "500 .95rem Inter, sans-serif"
      }}
    >
      {locales.map((l) => (
        <option key={l} value={l}>{labels[l]}</option>
      ))}
    </select>
  );
}
