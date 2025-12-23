"use client";

import Link from "next/link";
import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/FinalCta.module.css";

export default function FinalCta() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} ref={ref}>
      <div className={`${shared.container} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
        <div className={styles.logoRow}>
          <img src="/logo.png" alt="FundEQ" className={styles.logo} />
          <span className={styles.brand}>FundEQ</span>
        </div>
        <h2 className={styles.title}>
          We are a full-service financial company founders trust to create products that become verbs
        </h2>
        <div className={styles.actions}>
          <Link className={`${shared.btnPrimary} ${shared.btnLarge}`} href="/contact">
            Get Started Today
          </Link>
          <Link className={`${shared.btnGhost} ${shared.btnLarge} ${styles.outlineBtn}`} href="/contact">
            Contact Us For Investment Guide
          </Link>
        </div>
      </div>
    </section>
  );
}
