"use client";

import { useState } from "react";
import shared from "../styles/shared.module.css";
import styles from "../styles/Faq.module.css";

const faqs = [
  {
    q: "How does FundEQ differ from traditional crowdfunding?",
    a: "We focus on investor-grade, founder-led rounds with clear compliance. Instead of one-off campaigns, FundEQ gives you an ongoing investor operating system."
  },
  {
    q: "Can I bring my own legal team?",
    a: "Absolutely. We provide templates and workflows that your counsel can review. We also partner with specialists if you need them."
  },
  {
    q: "What does onboarding look like?",
    a: "A FundEQ specialist helps tailor your round structure, uploads your data room, and sets up your investor portal—typically within two business days."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className={`${shared.section} ${styles.section}`}>
      <div className={shared.container}>
        <div className={shared.gridTwo}>
          <div>
            <h2 className={styles.title}>Frequently asked</h2>
            <p className={styles.body}>Straightforward answers before you book time with our team.</p>
          </div>
          <div className={styles.accordion}>
            {faqs.map((faq, index) => {
              const open = openIndex === index;
              return (
                <div className={styles.item} key={faq.q}>
                  <button className={styles.button} onClick={() => setOpenIndex(open ? -1 : index)} aria-expanded={open}>
                    <span>{faq.q}</span>
                    <span className={styles.icon}>{open ? "−" : "+"}</span>
                  </button>
                  {open && <div className={styles.answer}>{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
