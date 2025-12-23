"use client";

import { useState } from "react";
import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/Faq.module.css";

const categories = [
  {
    title: "Platform & Experience",
    items: [
      {
        q: "How does FundEQ differ from traditional crowdfunding?",
        a: "We focus on institutional quality, founder-led rounds with clear compliance. Rather than short campaigns, FundEQ gives you an ongoing investor operating rhythm."
      },
      {
        q: "What does onboarding look like?",
        a: "A FundEQ specialist sets your round structure, loads your data room, and configures your investor portal—typically within two business days."
      },
      {
        q: "How do investors track progress?",
        a: "Investors use a clean portal for updates, documents, and progress snapshots. You control what is shared, and everything stays compliant."
      }
    ]
  },
  {
    title: "Governance & Security",
    items: [
      {
        q: "Can I bring my own legal team?",
        a: "Yes. We supply templates and workflows for your counsel to review, and we can involve specialist advisers when needed."
      },
      {
        q: "What about data security?",
        a: "We use encrypted storage, role-based access, and audit trails. Sensitive material sits behind permissions you can adjust at any time."
      },
      {
        q: "Do you integrate with my existing tools?",
        a: "We connect to common data rooms, reporting tools, and CRM workflows. If you already have a stack, we adapt rather than rebuild."
      }
    ]
  },
  {
    title: "Commercials",
    items: [
      {
        q: "Is there a minimum raise or investment size?",
        a: "We match your round size, whether it is a smaller strategic raise or a larger staged plan. We scope the approach that fits your goals."
      },
      {
        q: "How are fees structured?",
        a: "Fees depend on the mix of advisory, compliance, and investor relations support. We outline the schedule upfront before you commit."
      }
    ]
  }
];

export default function Faq() {
  const [openKey, setOpenKey] = useState<string | null>(`${categories[0].title}-0`);
  const { ref, visible } = useReveal();

  const toggle = (key: string) => {
    setOpenKey((prev) => (prev === key ? null : key));
  };

  return (
    <section className={`${shared.section} ${styles.section}`} ref={ref}>
      <div className={shared.container}>
        <div className={`${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
          <p className={styles.body}>Giving you the clarity, control, and flexibility to move your raise forward.</p>
        </div>
        <div className={`${styles.categories} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          {categories.map((category) => (
            <div key={category.title} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.accordion}>
                {category.items.map((item, idx) => {
                  const key = `${category.title}-${idx}`;
                  const open = openKey === key;
                  return (
                    <div className={styles.item} key={key}>
                      <button className={styles.button} onClick={() => toggle(key)} aria-expanded={open}>
                        <span>{item.q}</span>
                        <span className={styles.icon}>{open ? "-" : "+"}</span>
                      </button>
                      {open && <div className={styles.answer}>{item.a}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
