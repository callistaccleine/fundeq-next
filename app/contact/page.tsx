"use client";

import Navbar from "../../components/Navbar";
import { useReveal } from "../../components/useReveal";
import shared from "../../styles/shared.module.css";
import styles from "../../styles/ContactPage.module.css";
import { useRef } from "react";

export default function ContactPage() {
  const { ref, visible } = useReveal();
  const myRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className={styles.page}>
      <Navbar />
      <div
        className={`${shared.container} ${styles.container} ${visible ? "revealVisible" : ""}`}
        ref={ref as React.MutableRefObject<HTMLDivElement | null>}
      >
        <p className={styles.kicker}>Contact Us</p>
        <h1 className={styles.title}>Let&apos;s talk about your round.</h1>
        <p className={styles.body}>Share your goals and we&apos;ll respond within one business day.</p>
        <form className={styles.form}>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" type="text" placeholder="Jane Founder" required />
            </div>
            <div className={styles.field}>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" placeholder="you@company.com" required />
            </div>
          </div>
          <div className={styles.fieldRow}>
            <div className={styles.field}>
              <label htmlFor="company">Company</label>
              <input id="company" name="company" type="text" placeholder="FundEQ" />
            </div>
            <div className={styles.field}>
              <label htmlFor="role">Role</label>
              <input id="role" name="role" type="text" placeholder="Founder" />
            </div>
          </div>
          <div className={styles.field}>
            <label htmlFor="message">How can we help?</label>
            <textarea id="message" name="message" placeholder="Tell us about your fundraising goals or questions." rows={4} required />
          </div>
          <div className={styles.actions}>
            <button type="submit" className={`${shared.btnPrimary} ${shared.btnLarge}`}>
              Submit
            </button>
            <button type="reset" className={`${shared.btnGhost} ${shared.btnLarge}`}>
              Clear
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
