import type { Metadata } from "next";
import "./globals.scss";
import { LanguageProvider } from "@/context/LanguageContext";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://aaichapharal.example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "आईचा फराळ | Aai's Pharal — घरगुती चकली व महाराष्ट्रीयन फराळ, पुणे",
    template: "%s | आईचा फराळ"
  },
  description:
    "आईच्या हातची खास चकली आणि अस्सल घरगुती महाराष्ट्रीयन फराळ. पुण्यातील निवडक सोसायट्यांमध्ये घरपोच.",
  openGraph: {
    type: "website",
    locale: "mr_IN",
    siteName: "आईचा फराळ | Aai's Pharal"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="mr">
      <body>
        <LanguageProvider>
          <CartProvider>
            <AnnouncementBar />
            <Header />
            <main id="top">{children}</main>
            <Footer />
          </CartProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
