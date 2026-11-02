import type { Metadata } from "next";
import { products } from "@/lib/products";
import ProductGrid from "@/components/ProductGrid";

export const metadata: Metadata = {
  title: "पदार्थ",
  description: "आईची स्पेशल चकली, चिवडा, करंजी, बेसन लाडू, अळूवडी आणि कोथिंबीर वडी."
};

export default function ProductsPage() {
  return (
    <section className="wrap" style={{ padding: "48px 0" }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800, marginBottom: 20 }}>आमचे पदार्थ</h1>
      <ProductGrid products={products} />
    </section>
  );
}
