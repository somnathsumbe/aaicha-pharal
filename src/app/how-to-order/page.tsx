import type { Metadata } from "next";
export const metadata: Metadata = { title: "ऑर्डर कशी करावी" };
export default function HowToOrderPage() {
  return (
    <section className="wrap" style={{ padding: "48px 0" }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800, marginBottom: 20 }}>ऑर्डर करणे सोपे आहे</h1>
      <ol style={{ display: "grid", gap: 16, paddingLeft: 20, fontWeight: 600, fontSize: "1.05rem" }}>
        <li>तुमचा आवडता फराळ निवडा.</li>
        <li>WhatsApp वर ऑर्डर पाठवा.</li>
        <li>तुमच्या सोसायटीत घरपोच फराळ मिळवा.</li>
      </ol>
      <p style={{ marginTop: 20 }}>WhatsApp उघडल्यावर ऑर्डर पाठवली जाते, पण आम्ही फोनवर किंवा मेसेजवर कन्फर्म केल्यावरच ऑर्डर पक्की समजली जाते.</p>
    </section>
  );
}
