"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { products, getFeaturedProducts } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import OrderDialog from "@/components/OrderDialog";
import { useCart } from "@/context/CartContext";
import styles from "./page.module.scss";

export default function HomePage() {
  const { t } = useLanguage();
  const { lines } = useCart();
  const [open, setOpen] = useState(false);
  const featured = getFeaturedProducts();
  const rest = products.filter((p) => !p.featured);

  return (
    <>
      <div className={styles.hero}>
        <div className={`wrap ${styles.heroInner}`}>
          <div>
            <span className={styles.tag}>{t.hero.tag}</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.desc}</p>
            <div className={styles.ctaRow}>
              <button className={`${styles.btn} ${styles.gold}`} onClick={() => (lines.length ? setOpen(true) : document.getElementById("products")?.scrollIntoView({ behavior: "smooth" }))}>
                {t.hero.ctaPrimary}
              </button>
              <Link className={`${styles.btn} ${styles.line}`} href="#products">{t.hero.ctaSecondary}</Link>
            </div>
          </div>
          <div className={styles.frame}>
            <Image src="/images/hero.jpg" alt="चकली, चिवडा, लाडू आणि करंजीचा पारंपरिक फराळ" fill sizes="(min-width: 960px) 420px, 380px" priority />
          </div>
        </div>
      </div>

      <div className={styles.trust}>
        <div className="wrap">
          <ul>
            <li>आईच्या हातची चव<small>घरच्या स्वयंपाकघरात तयार</small></li>
            <li>पारंपरिक पाककृती<small>महाराष्ट्रीयन घरांतली चव</small></li>
            <li>गुणवत्तेला प्राधान्य<small>प्रत्येक पदार्थ काळजीपूर्वक</small></li>
            <li>सोसायटीमध्ये घरपोच<small>निवडक सोसायट्यांमध्ये</small></li>
          </ul>
        </div>
      </div>

      <section id="products" className={styles.section}>
        <div className="wrap">
          <h2>आईचे खास पदार्थ</h2>
          <p className={styles.sub}>वजन निवडा, बॅगमध्ये टाका आणि WhatsApp वर ऑर्डर पाठवा. ऑर्डरची खात्री आम्ही स्वतः फोनवर/मेसेजवर करतो.</p>
          <div style={{ display: "grid", gap: 20, gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}>
            {[...featured, ...rest].map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className={`wrap ${styles.storyGrid}`}>
          <div>
            <h2>प्रत्येक पदार्थामागे आहे आईच्या हातची माया!</h2>
            <p>आईच्या हातची चकली एकदा खाल्लेले पुन्हा पुन्हा मागतात. त्याच प्रेमातून आमच्या कुटुंबाने हा छोटासा उपक्रम सुरू केला, आईची घरगुती चव तुमच्या घरापर्यंत पोहोचवण्यासाठी.</p>
          </div>
          <div className={styles.logoCard}>
            <Image src="/images/logo-full.jpg" alt="आईचा फराळ – घरगुती चव, आता घरपोच" width={900} height={600} />
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <h2>ऑर्डर करणे सोपे आहे</h2>
          <ol className={styles.steps}>
            <li>तुमचा आवडता फराळ निवडा.</li>
            <li>WhatsApp वर ऑर्डर पाठवा.</li>
            <li>तुमच्या सोसायटीत घरपोच फराळ मिळवा.</li>
          </ol>
        </div>
      </section>

      <section className={styles.deliver}>
        <div className={`wrap ${styles.deliverGrid}`}>
          <div>
            <h2>तुमच्या सोसायटीत आईचा फराळ!</h2>
            <p>सध्या आमची घरपोच सेवा पुण्यातील निवडक सोसायट्या आणि जवळच्या इमारतींपुरतीच मर्यादित आहे. तुमची सोसायटी यादीत नसेल तर आम्हाला कळवा.</p>
          </div>
          <a className={`${styles.btn}`} style={{ background: "#8D1715", color: "#FFF8E9" }} href="https://wa.me/919028787219?text=नमस्कार%20आईचा%20फराळ!%20माझ्या%20सोसायटीत%20घरपोच%20सेवा%20मिळेल%20का%3F">
            सोसायटीबद्दल विचारा
          </a>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <h2>ग्राहकांचे अभिप्राय</h2>
          <div className={styles.empty}>
            <p><b>पहिला अभिप्राय तुमचा असू द्या.</b><br />आमचा फराळ चाखल्यावर WhatsApp वर नक्की कळवा.</p>
          </div>
        </div>
      </section>

      <OrderDialog open={open} onClose={() => setOpen(false)} />
    </>
  );
}
