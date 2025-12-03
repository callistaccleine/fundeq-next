import Link from "next/link";
import shared from "../styles/shared.module.css";
import styles from "../styles/Services.module.css";

const services = [
  {
    title: "Investment Management",
    body: "Investment strategies to meet your goals.",
    icon: "💼"
  },
  {
    title: "Retirement Planning",
    body: "Secure your financial future with expert guidance.",
    icon: "🛡️"
  },
  {
    title: "Estate Planning",
    body: "Protect and preserve your legacy.",
    icon: "👥"
  },
  {
    title: "Tax Strategies",
    body: "Minimize taxes while maximizing growth.",
    icon: "📑"
  }
];

export default function Services() {
  return (
    <section className={styles.section} id="services">
      <div className={shared.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Services</p>
          <h2 className={styles.title}>Our Financial Solutions</h2>
          <p className={styles.subtitle}>
            Our suite of services is designed to meet all your financial needs, whether you&apos;re planning for retirement,
            investing in global markets, or building an estate plan.
          </p>
        </div>
        <div className={styles.cardGrid}>
          {services.map((service) => (
            <div className={styles.card} key={service.title}>
              <div className={styles.icon}>{service.icon}</div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardBody}>{service.body}</p>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link className={`${shared.btnGhost} ${shared.btnLarge} ${styles.outlineBtn}`} href="#">
            Explore Our Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
