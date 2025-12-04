"use client";

import Navbar from "../../components/Navbar";
import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import styles from "../../styles/ContactPage.module.css";

export default function ContactPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
}
