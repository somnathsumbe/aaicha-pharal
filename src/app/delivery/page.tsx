import type { Metadata } from "next";
import { societies } from "@/lib/societies";
export const metadata: Metadata = { title: "घरपोच सेवा" };
export default function DeliveryPage() {
  return (
    <section className="wrap" style={{ padding: "48px 0" }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800, marginBottom: 16 }}>तुमच्या सोसायटीत आईचा फराळ!</h1>
      <p style={{ marginBottom: 24 }}>सध्या आमची घरपोच सेवा पुण्यातील निवडक सोसायट्या आणि जवळच्या इमारतींपुरतीच मर्यादित आहे. तुमची सोसायटी यादीत नसेल तर आम्हाला WhatsApp वर कळवा.</p>
      {societies.length === 0 ? (
        <div style={{ border: "1.5px dashed #cdb685", borderRadius: 20, padding: "32px 20px", textAlign: "center", background: "#fff" }}>
          <p>सोसायटी यादी लवकरच जोडली जाईल. कृपया थेट WhatsApp वर विचारा.</p>
        </div>
      ) : (
        <ul>
          {societies.map((s) => <li key={s.id}>{s.name} — {s.area}</li>)}
        </ul>
      )}
      <a
        href="https://wa.me/919028787219?text=नमस्कार%20आईचा%20फराळ!%20माझ्या%20सोसायटीत%20घरपोच%20सेवा%20मिळेल%20का%3F"
        style={{ display: "inline-block", marginTop: 24, minHeight: 48, lineHeight: "48px", padding: "0 24px", borderRadius: 999, background: "#8D1715", color: "#FFF8E9", textDecoration: "none", fontWeight: 600 }}
      >
        सोसायटीबद्दल विचारा
      </a>
    </section>
  );
}
