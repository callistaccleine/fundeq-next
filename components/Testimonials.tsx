"use client";

import { useState, useRef } from "react";
import type { TouchEvent } from "react";
import styles from "../styles/Testimonials.module.css";
import shared from "../styles/shared.module.css";
import { useReveal } from "./useReveal";

const testimonials = [
  {
    quote:
      "FundEQ gave us the control and clarity we needed across mandates. Investors see progress, our team stays aligned, and we spend less time reconciling data.",
    name: "Liam Carter",
    role: "Managing Partner, Aurora Capital"
  },
  {
    quote: "Their reporting and governance kept our board confident while we expanded into new markets. Everything stayed compliant and well-documented.",
    name: "Jacob Patel",
    role: "Chief Investment Officer, Northpoint Ventures"
  },
  {
    quote: "We consolidated cash, FX, and capital calls in one place. The team saved hours each week and our LPs finally see updates without chasing us.",
    name: "Daniel Brooks",
    role: "General Partner, Meridian Growth"
  }
];

export default function Testimonials() {
  const { ref, visible } = useReveal(0.3);
  const [index, setIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const handleNext = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const onTouchStart = (e: TouchEvent) => {
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (!touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      dx < 0 ? handleNext() : handlePrev();
    }
  };

  return (
    <section className={styles.section} id="testimonials" ref={ref}>
      <div className={`${shared.container} ${styles.layout}`}>
        <div className={`${styles.imageCard} ${visible ? styles.imageVisible : ""}`} aria-hidden>
          <div className={styles.imageOverlay}>Client Stories</div>
        </div>
        <div className={`${styles.content} ${visible ? styles.contentVisible : ""}`}>
          <p className={styles.kicker}>Designed with clients in mind</p>
          <h2 className={styles.title}>Built for investors, guided by managers.</h2>
          <div
            className={styles.slider}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            role="region"
            aria-label="Client testimonials"
          >
            <div className={styles.slides} style={{ transform: `translateX(-${index * 100}%)` }}>
              {testimonials.map((item) => (
                <div className={styles.slide} key={item.name}>
                  <p className={styles.quote}>{item.quote}</p>
                  <p className={styles.author}>— {item.name}</p>
                  <p className={styles.role}>{item.role}</p>
                </div>
              ))}
            </div>
            <div className={styles.indicators} role="tablist" aria-label="Testimonial selector">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`${styles.indicator} ${i === index ? styles.indicatorActive : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-pressed={i === index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
