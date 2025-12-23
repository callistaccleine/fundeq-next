"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/OurCompany.module.css";

const stats = [
  { target: 150, suffix: "+", label: "Assets under management" },
  { target: 10000, suffix: "+", label: "Trusted clients globally" },
  { target: 20, suffix: "+", label: "Years of experience" }
];

const logos = [
  { name: "Handelsblatt Capital", initials: "HC" },
  { name: "Money", initials: "M" },
  { name: "Die Zeit", initials: "DZ" },
  { name: "Fonds Global", initials: "FG" },
  { name: "Börse Review", initials: "BR" },
  { name: "Extra Markets", initials: "EM" },
  { name: "Allurion Partners", initials: "AP" }
];

export default function OurCompany() {
  const { ref, visible } = useReveal(0.35);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    if (!visible) return;
    const duration = 1200;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const next = stats.map((stat) => Math.floor(stat.target * progress));
      setCounts(next);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [visible]);

  return (
    <section className={styles.section} id="company" ref={ref}>
      <div className={`${shared.container} ${styles.content} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
        <div className={styles.copyCol}>
          <p className={styles.kicker}>Our Company</p>
          <h2 className={styles.title}>Your Trusted Partner in Wealth Management</h2>
          <p className={styles.body}>
            With over 20 years of experience managing wealth for clients worldwide, our team specializes in creating
            personalized financial strategies that deliver results.
          </p>
          <Link className={`${shared.btnGhost} ${shared.btnLarge} ${styles.outlineBtn}`} href="#">
            Learn More About Our Story →
          </Link>
        </div>
        <div className={styles.statsCol}>
          {stats.map((stat, idx) => (
            <div key={stat.label} className={styles.statItem}>
              <div className={styles.statValue}>
                {counts[idx].toLocaleString()}
                {stat.suffix}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.logosWrap} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
        <div className={shared.container}>
          <div className={styles.logoMarquee}>
            <div className={styles.logoTrack}>
              {[...logos, ...logos].map((logo, idx) => (
                <div key={`${logo.name}-${idx}`} className={styles.logoItem}>
                  <div className={styles.logoMark}>{logo.initials}</div>
                  <div className={styles.logoName}>{logo.name}</div>
                </div>
              ))}
            </div>
          </div>
          <p className={styles.trusted}>Trusted by more than 12,000 financial companies in 40 countries.</p>
        </div>
      </div>
    </section>
  );
}
