import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aaichapharal.example.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = ["", "/products", "/about", "/story", "/how-to-order", "/delivery", "/contact", "/privacy", "/terms"];
  const productPaths = products.map((p) => `/products/${p.slug}`);
  return [...staticPaths, ...productPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date()
  }));
}
