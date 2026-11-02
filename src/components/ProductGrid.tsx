import type { Product } from "@/types/catalog";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
      {products.map((p) => <ProductCard key={p.id} product={p} />)}
    </div>
  );
}
