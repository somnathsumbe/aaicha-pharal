import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import { getProductBySlug, products } from "@/lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) return {};
  return { title: product.name.mr, description: product.shortDescription.mr };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  return (
    <section className="wrap" style={{ padding: "48px 0", display: "grid", gap: 32 }}>
      <div style={{ position: "relative", aspectRatio: "4/3", borderRadius: 20, overflow: "hidden" }}>
        <Image src={product.image} alt={product.name.mr} fill sizes="100vw" />
      </div>
      <div>
        <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800 }}>{product.name.mr}</h1>
        <p style={{ opacity: .7, marginBottom: 12 }}>{product.name.en}</p>
        <p style={{ marginBottom: 16 }}>{product.description.mr}</p>
        <ul style={{ paddingLeft: 20 }}>
          {product.variants.map((v) => (
            <li key={v.weight}>{v.weight} — {v.price != null ? `₹${v.price}` : "किंमत लवकरच"}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
