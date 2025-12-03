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
    quote: "Thanks to their guidance, I achieved my financial goals and built a stable future for my family.",
    name: "Sarah Thomas",
    role: "Chief Executive Officer",
    rating: 4,
    primary: false
  }
];

export default function Testimonials() {
  const { ref, visible } = useReveal();

  return (
    <section className={`${styles.section} ${shared.reveal} ${visible ? shared.revealVisible : ""}`} id="testimonials" ref={ref}>
      <div className={shared.container}>
        <div className={styles.header}>
          <p className={styles.kicker}>Testimonials</p>
          <h2 className={styles.title}>What Our Clients Say</h2>
          <p className={styles.subtitle}>
            Our suite of services is designed to meet all your financial needs, whether you&apos;re planning for retirement, investing in global markets, or building an estate plan.
          </p>
        </div>
        <div className={styles.cardsRow}>
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
                <button className={styles.playBtn}>
                  <span className={styles.playDot} />
                  <span>Play Video</span>
                </button>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.navRow}>
          <button className={styles.navBtn} aria-label="Previous testimonial">
            ←
          </button>
          <button className={styles.navBtn} aria-label="Next testimonial">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
