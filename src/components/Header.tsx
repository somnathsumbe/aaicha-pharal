"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import LanguageSwitcher from "./LanguageSwitcher";
import styles from "./Header.module.scss";

export default function Header() {
  const { t } = useLanguage();
  const { totalItems } = useCart();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/story", label: t.nav.story },
    { href: "/contact", label: t.nav.contact }
  ];

  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.bar}`}>
        <Link className={styles.logo} href="/" aria-label="आईचा फराळ – मुख्यपृष्ठ">
          <Image src="/images/wordmark.jpg" alt="आईचा फराळ" width={255} height={40} priority />
        </Link>
        <nav className={styles.nav} aria-label="मुख्य मेनू">
          {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
        <LanguageSwitcher />
        <Link href="/cart" className={styles.iconBtn} aria-label={t.cart.title}>
          🛍️
          {totalItems > 0 && <span className={styles.badge}>{totalItems}</span>}
        </Link>
        <button
          className={`${styles.iconBtn} ${styles.menuBtn}`}
          aria-label="मेनू उघडा"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
      {open && (
        <div className={styles.mobileMenu}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
          ))}
        </div>
      )}
    </header>
  );
}
