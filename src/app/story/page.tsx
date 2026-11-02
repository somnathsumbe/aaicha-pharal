import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = { title: "आमची गोष्ट" };

export default function StoryPage() {
  return (
    <section className="wrap" style={{ padding: "48px 0", display: "grid", gap: 28 }}>
      <h1 style={{ color: "#8D1715", fontSize: "2rem", fontWeight: 800 }}>प्रत्येक पदार्थामागे आहे आईच्या हातची माया!</h1>
      <div style={{ position: "relative", aspectRatio: "16/10", borderRadius: 20, overflow: "hidden", maxWidth: 720 }}>
        <Image src="/images/logo-full.jpg" alt="आईचा फराळ" fill sizes="(min-width: 720px) 720px, 100vw" />
      </div>
      <p>आईच्या हातची चकली एकदा खाल्लेले पुन्हा पुन्हा मागतात. त्याच प्रेमातून आमच्या कुटुंबाने हा छोटासा उपक्रम सुरू केला, आईची घरगुती चव तुमच्या घरापर्यंत पोहोचवण्यासाठी.</p>
      <p style={{ opacity: .75, fontSize: ".9rem" }}>(आईचा आणि स्वयंपाकघराचा खरा फोटो मालकाकडून मिळाल्यावर येथे जोडला जाईल.)</p>
    </section>
  );
}
