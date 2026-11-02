import type { Metadata } from "next";
export const metadata: Metadata = { title: "गोपनीयता धोरण" };
export default function PrivacyPage() {
  return (
    <section className="wrap" style={{ padding: "48px 0", maxWidth: 760 }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800, marginBottom: 16 }}>गोपनीयता धोरण</h1>
      <p>येथे अंतिम गोपनीयता धोरण जोडले जाईल. कृपया मालकाने कायदेशीर मजकूर पुरवावा किंवा पडताळणीसाठी सल्लागाराशी संपर्क साधावा.</p>
    </section>
  );
}
