"use client";

import Link from "next/link";
import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/Services.module.css";

const services = [
  {
    title: "Investment Management",
    body: "Investment strategies to meet your goals.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={24} height={24} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="3" y="7" width="18" height="13" rx="2" />
        <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      </svg>
    ),
    href: "/services/investments"
  },
  {
    title: "Retirement Planning",
    body: "Secure your financial future with expert guidance.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={24} height={24} fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="12" cy="7" r="3" />
        <path d="M5 20c1.5-3 4-5 7-5s5.5 2 7 5" />
      </svg>
    ),
    href: "/services/retirement"
  },
  {
    title: "Estate Planning",
    body: "Protect and preserve your legacy.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={24} height={24} fill="none" stroke="currentColor" strokeWidth="1.6">
        <path d="M4 10a8 8 0 0 1 16 0v8a2 2 0 0 1-2 2h-3v-5h-6v5H6a2 2 0 0 1-2-2v-8Z" />
        <path d="M10 20v-4h4v4" />
      </svg>
    ),
    href: "/services/estate-planning"
  },
  {
    title: "Tax Strategies",
    body: "Minimize taxes while maximizing growth.",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={24} height={24} fill="none" stroke="currentColor" strokeWidth="1.6">
        <rect x="4" y="4" width="16" height="16" rx="2" />
        <path d="M8 9h8" />
        <path d="M8 12h5" />
        <path d="M8 15h6" />
      </svg>
    ),
    href: "/services/tax"
  }
];

export default function Services() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="services" ref={ref}>
      <div className={shared.container}>
        <div className={`${styles.header} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          <p className={styles.kicker}>Services</p>
          <h2 className={styles.title}>Our Financial Solutions</h2>
          <p className={styles.subtitle}>
            Our suite of services is designed to meet all your financial needs, whether you&apos;re planning for retirement,
            investing in global markets, or building an estate plan.
          </p>
        </div>
        <div className={`${styles.cardGrid} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          {services.map((service) => (
            <Link className={styles.cardLink} href={service.href} key={service.title}>
              <div className={styles.card}>
                <div className={styles.icon}>{service.icon}</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardBody}>{service.body}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className={styles.ctaRow}>
          <Link className={`${shared.btnGhost} ${shared.btnLarge} ${styles.outlineBtn}`} href="/services/investments">
            Explore Our Services →
          </Link>
        </div>
      </div>
    </section>
  );
}
