import type { Metadata } from "next";
export const metadata: Metadata = { title: "संपर्क" };
export default function ContactPage() {
  return (
    <section className="wrap" style={{ padding: "48px 0" }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800, marginBottom: 16 }}>संपर्क</h1>
      <p>पुणे, महाराष्ट्र</p>
      <p style={{ marginTop: 12 }}>
        <a href="https://wa.me/919028787219" style={{ fontWeight: 600, color: "#8D1715" }}>WhatsApp: 90287 87219</a>
      </p>
    </section>
  );
}
