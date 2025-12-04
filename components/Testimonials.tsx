"use client";

import styles from "../styles/Testimonials.module.css";
import shared from "../styles/shared.module.css";
import { useReveal } from "./useReveal";

const testimonials = [
  {
    quote: "Thanks to their guidance, I achieved my financial goals and built a stable future for my family.",
    name: "Sarah Thomas",
    role: "Chief Executive Officer",
    rating: 5,
    primary: true
  },
  {
    quote: "The team provided exceptional service and tailored solutions that perfectly matched my investment needs.",
    name: "Michael Lee",
    role: "Founder",
    rating: 4,
    primary: false
  }
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="testimonials" ref={ref}>
      <div className={shared.container}>
        <div className={`${styles.header} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          <p className={styles.kicker}>Testimonials</p>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Our suite of services is designed to meet all your financial needs, whether you&apos;re planning for retirement, investing in global markets, or building an estate plan.
          </p>
        </div>
        <div className={`${styles.cardsRow} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          {testimonials.map((item, idx) => (
            <article key={idx} className={`${styles.card} ${item.primary ? styles.cardPrimary : styles.cardGhost}`}>
              <div className={styles.rating} aria-label={`${item.rating} star rating`}>
                {"★".repeat(item.rating)}
              </div>
              <p className={styles.quote}>{item.quote}</p>
              <div className={styles.footerRow}>
                <div className={styles.avatar} aria-hidden />
                <div>
                  <div className={styles.name}>{item.name}</div>
                  <div className={styles.role}>{item.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
