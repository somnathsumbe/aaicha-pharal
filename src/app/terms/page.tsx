import type { Metadata } from "next";
export const metadata: Metadata = { title: "अटी व शर्ती" };
export default function TermsPage() {
  return (
    <section className="wrap" style={{ padding: "48px 0", maxWidth: 760 }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800, marginBottom: 16 }}>अटी व शर्ती</h1>
      <p>येथे अंतिम अटी व शर्ती जोडल्या जातील. कृपया मालकाने कायदेशीर मजकूर पुरवावा किंवा पडताळणीसाठी सल्लागाराशी संपर्क साधावा.</p>
    </section>
  );
}
