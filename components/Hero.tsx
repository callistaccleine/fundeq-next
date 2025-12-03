"use client";

import Link from "next/link";
import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/Hero.module.css";

export default function Hero() {
  const { ref, visible } = useReveal(0.3);

  return (
    <section className={styles.hero} id="top" ref={ref}>
      <div className={styles.overlay} />
      <div className={shared.container}>
        <div className={`${styles.heroContent} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          <p className={styles.kicker}>FundEQ Private Market Platform</p>
          <h1 className={styles.title}>
            Turning <span>Today&apos;s Wealth</span> Into Tomorrow&apos;s Legacy
          </h1>
          <p className={styles.subtitle}>
            Helping founders and investors grow, preserve, and manage equity with expert guidance and transparent updates.
          </p>
          <div className={styles.actions}>
            <Link className={`${shared.btnGhost} ${shared.btnLarge} ${styles.lightBtn}`} href="/contact">
              Consultation
            </Link>
            <Link className={`${shared.btnPrimary} ${shared.btnLarge}`} href="/contact">
              Start Investing
            </Link>
          </div>
          <div className={styles.scrollHint}>↓</div>
        </div>
      </div>
    </section>
  );
}
