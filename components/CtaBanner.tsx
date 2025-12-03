"use client";

import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/CtaBanner.module.css";

export default function CtaBanner() {
  const { ref, visible } = useReveal();

  return (
    <section className={`${shared.section} ${shared.reveal} ${visible ? shared.revealVisible : ""}`} ref={ref}>
      <div className={shared.container}>
        <div className={`${shared.glassCard} ${styles.ctaCard}`}>
          <div className={styles.copy}>
            <div className={shared.badgePill}>Ready when you are</div>
            <h3 className={styles.title}>Launch with FundEQ</h3>
            <p className={styles.body}>Share your round goals and we will prep a launch plan within one business day.</p>
          </div>
          <div className={styles.actions}>
            <button className={`${shared.btnAccent} ${shared.btnLarge}`}>Book a demo</button>
            <button className={`${shared.btnGhost} ${shared.btnLarge}`}>Download overview</button>
          </div>
        </div>
      </div>
    </section>
  );
}
