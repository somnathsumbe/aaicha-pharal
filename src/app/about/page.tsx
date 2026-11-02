import type { Metadata } from "next";
export const metadata: Metadata = { title: "आमच्याबद्दल" };
export default function AboutPage() {
  return (
    <section className="wrap" style={{ padding: "48px 0" }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800, marginBottom: 16 }}>आमच्याबद्दल</h1>
      <p>आईचा फराळ ही पुण्यातील एक घरगुती, कुटुंब-चालित सुरुवात आहे. आईच्या हातच्या चकलीपासून सुरू झालेला हा प्रवास आता जवळच्या सोसायट्यांपर्यंत पोहोचला आहे.</p>
    </section>
  );
}
