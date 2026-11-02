import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.scss";

const WA_DISPLAY = "90287 87219";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.cols}`}>
        <div>
          <Image src="/images/wordmark.jpg" alt="आईचा फराळ" width={200} height={32} />
          <p style={{ marginTop: 8 }}>एकदा खाल, पुन्हा मागाल!<br />पुणे, महाराष्ट्र</p>
        </div>
        <div>
          <h4>लिंक्स</h4>
          <Link href="/products">पदार्थ</Link>
          <Link href="/story">आमची गोष्ट</Link>
          <Link href="/delivery">घरपोच सेवा</Link>
        </div>
        <div>
          <h4>संपर्क</h4>
          <a href={`https://wa.me/919028787219`}>WhatsApp: {WA_DISPLAY}</a>
        </div>
        <div>
          <h4>माहिती</h4>
          <Link href="/privacy">गोपनीयता धोरण</Link>
          <Link href="/terms">अटी व शर्ती</Link>
        </div>
      </div>
      <div className={`wrap ${styles.fine}`}>© {new Date().getFullYear()} आईचा फराळ</div>
    </footer>
  );
}
