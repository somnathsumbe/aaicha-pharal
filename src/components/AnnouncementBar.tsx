"use client";
import { useLanguage } from "@/context/LanguageContext";
import styles from "./AnnouncementBar.module.scss";

const copy = {
  mr: "आईच्या हातचा फराळ आता तुमच्या घरपोच!",
  hi: "माँ के हाथ का फराळ अब आपके घर पर!",
  en: "Aai's homemade pharal, now delivered to your door!"
};

export default function AnnouncementBar() {
  const { locale } = useLanguage();
  return <div className={styles.bar}>{copy[locale]}</div>;
}
