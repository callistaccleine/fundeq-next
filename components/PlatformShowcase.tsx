"use client";

import Link from "next/link";
import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/PlatformShowcase.module.css";

const features = [
  { title: "Scalable and secure", body: "Bank-grade encryption, approvals, and audit trails by default.", href: "/contact" },
  { title: "Easy integrations", body: "Connect data rooms, CRMs, and reporting without heavy lift.", href: "/contact" },
  { title: "24/7 support", body: "Access to specialists when your team or investors need answers.", href: "/contact" }
];

export default function PlatformShowcase() {
  const { ref, visible } = useReveal(0.25);

  return (
    <section className={`${styles.section} ${shared.section}`} ref={ref}>
      <div className={`${shared.container} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
        <div className={styles.lower}>
          <div className={styles.copyBlock}>
            <h2 className={styles.title}>We'll be there for you throughout the journey</h2>
            <p className={styles.subtitle}>
              Optimise workflows and automate repetitive tasks so your team focuses on decisions, not data entry. Keep controls tight while speeding up investor updates.
            </p>
            <div className={styles.featureList}>
              {features.map((f) => (
                <div key={f.title} className={styles.featureRow}>
                  <span className={styles.featureDot} aria-hidden />
                  <div>
                    <div className={styles.featureTitle}>{f.title}</div>
                    <div className={styles.featureBody}>{f.body}</div>
                  </div>
                  <Link className={styles.featureLink} href={f.href}>
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.chartVisual}>
            <img className={styles.donut} src="/images/charts/pro-chart-icon.svg" alt="Sample allocation breakdown" />
          </div>
        </div>
      </div>
    </section>
  );
}
