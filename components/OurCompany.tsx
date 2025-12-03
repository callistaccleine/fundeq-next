import Link from "next/link";
import shared from "../styles/shared.module.css";
import styles from "../styles/OurCompany.module.css";

const stats = [
  { value: "150+", label: "Assets under management" },
  { value: "10,000+", label: "Trusted clients globally" },
  { value: "14+", label: "Years of experience" }
];

const logos = ["Handelsblatt", "Money", "Die Zeit", "Fonds", "Börse", "Extra", "Allurion"];

export default function OurCompany() {
  return (
    <section className={styles.section} id="company">
      <div className={`${shared.container} ${styles.content}`}>
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
          {stats.map((stat) => (
            <div key={stat.value} className={styles.statItem}>
              <div className={styles.statValue}>{stat.value}</div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
      <div className={`${styles.logosWrap}`}>
        <div className={shared.container}>
          <div className={styles.logosInner}>
            {logos.map((logo) => (
              <div key={logo} className={styles.logoItem}>
                {logo}
              </div>
            ))}
          </div>
          <p className={styles.trusted}>Trusted by more than 12,000 financial companies in 140 countries.</p>
        </div>
      </div>
    </section>
  );
}
