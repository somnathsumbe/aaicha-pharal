"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/catalog";
import { useLanguage } from "@/context/LanguageContext";
import { useCart } from "@/context/CartContext";
import styles from "./ProductCard.module.scss";

export default function ProductCard({ product }: { product: Product }) {
  const { locale, t } = useLanguage();
  const { addLine } = useCart();
  const [selected, setSelected] = useState(product.variants[0]?.weight ?? "");
  const [justAdded, setJustAdded] = useState(false);

  const variant = product.variants.find((v) => v.weight === selected) ?? product.variants[0];

  const handleAdd = () => {
    if (!variant) return;
    addLine({
      productId: product.id,
      productName: product.name[locale],
      variantWeight: variant.weight,
      unitPrice: variant.price
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1400);
  };

  return (
    <article className={`${styles.card} ${product.featured ? styles.feature : ""}`}>
      <div className={styles.tile}>
        {product.featured && <span className={styles.badge}>आमची खासियत</span>}
        <Link href={`/products/${product.slug}`}>
          <Image src={product.image} alt={product.name[locale]} fill sizes="(min-width: 720px) 46vw, 100vw" />
        </Link>
      </div>
      <div className={styles.body}>
        <h3>
          <Link href={`/products/${product.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
            {product.name[locale]}
          </Link>
          <small>{product.name.en}</small>
        </h3>
        <p>{product.shortDescription[locale]}</p>
        <div className={styles.chips} role="group" aria-label={`${product.name[locale]} – ${t.product.chooseWeight}`}>
          {product.variants.map((v) => (
            <button
              key={v.weight}
              type="button"
              className={styles.chip}
              aria-pressed={v.weight === selected}
              onClick={() => setSelected(v.weight)}
            >
              {v.weight}
            </button>
          ))}
        </div>
        <button type="button" className={styles.addBtn} onClick={handleAdd} disabled={!product.available}>
          {justAdded ? t.product.added : product.available ? t.product.addToBag : t.product.outOfStock}
        </button>
      </div>
    </article>
  );
}
