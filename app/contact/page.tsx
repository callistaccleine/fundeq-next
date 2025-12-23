"use client";

import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer";
import styles from "../../styles/ContactPage.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <ContactSection />
      <Faq />
      <Footer />
    </main>
  );
}
