"use client";

import Link from "next/link";
import shared from "../styles/shared.module.css";
import styles from "../styles/TeamSection.module.css";

const leaders = [
  {
    name: "Cormac Heffernan",
    role: "CEO",
    bio: "Seasoned financial-services leader and founding partner, with deep expertise in wealth-management platforms, investment operations, and corporate strategy.",
    image: "/images/team/cormac-image.png",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/cormac-heffernan-771b017?external_page=LPC.Card&external_control=ViewProfileLink&external_app_instance=EEF3EDC8-D9A1-5B96-A73E-0403B261643D&external_page_instance=&experiment=displayLinkedInDataPrebind" },
    ]
  },
  {
    name: "Han Soh",
    role: "Chief Investment Officer",
    bio: "Capital markets director with a strong foundation in private banking, specialising in capital raising, IPO/M&A advisory, and structured finance solutions.",
    image: "/images/team/hansoh-image.png",
    socials: [
      { label: "LinkedIn", url: "https://au.linkedin.com/in/han-soh-a31b9b50" },
    ]
  },
  {
    name: "Rufino Villaluz",
    role: "Investment Manager",
    bio: "Experienced finance and investment professional with a background spanning private banking, capital management, and alternative-investment advisory across Australia.",
    image: "/images/team/rufino-image.png",
    socials: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/rufino-villaluz-2488241a?external_page=LPC.Card&external_control=ViewProfileLink&external_app_instance=EEF3EDC8-D9A1-5B96-A73E-0403B261643D&external_page_instance=&experiment=displayLinkedInDataPrebind" },
    ]
  },
  {
    name: "Eugene Foo",
    role: "Fund Administrator",
    bio: "Specialist in reporting, PMO operations, and process optimisation, with expertise in streamlining organisational workflows and master scheduling.",
    image: "/images/team/eugene-foo.svg",
    socials: [
      { label: "LinkedIn", url: "https://au.linkedin.com/in/fooeugene" },
    ]
  },
];

export default function TeamSection() {
  const iconMap: Record<string, JSX.Element> = {
    LinkedIn: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={16} height={16} fill="currentColor">
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.24 8h4.52v15.5H.24V8zM8.75 8h4.33v2.13h.06c.6-1.1 2.07-2.26 4.25-2.26 4.55 0 5.4 2.98 5.4 6.86v7.77h-4.52v-6.88c0-1.64-.03-3.75-2.3-3.75-2.3 0-2.65 1.8-2.65 3.64v7h-4.52V8z" />
      </svg>
    ),
    X: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={16} height={16} fill="currentColor">
        <path d="M18.2 2h3.3l-7.2 8.2 8.5 11.8h-6.7l-5.3-7-6 7H1.5l7.7-8.9L1.2 2h6.8l4.8 6.5 5.4-6.5z" />
      </svg>
    ),
    Medium: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={16} height={16} fill="currentColor">
        <path d="M2 6.5c0-.2.06-.4.19-.55L4.6 3.1V3H0v.1l2.4 3.4v10l-2.4 3.3V20h7v-.1L4.6 16v-9.7l6.3 13.8h.2l5.48-13.8V17l-2 3V20H24v-.1l-2-3V5.1l2-2.9V2h-6.7l-4.3 11.1L8.2 5.1 10.5 2H2.2l-.2 4.5z" />
      </svg>
    ),
    YouTube: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={16} height={16} fill="currentColor">
        <path d="M23.5 6.2s-.2-1.7-.9-2.5c-.8-.9-1.7-.9-2.1-1C16.6 2.5 12 2.5 12 2.5h-.1s-4.6 0-8.5.2c-.4 0-1.3.1-2.1 1C.7 4.5.5 6.2.5 6.2S.3 8 .3 9.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.7.9 2.5c.8.9 1.9.9 2.3 1 1.7.2 7.3.2 7.3.2s4.6 0 8.5-.2c.4 0 1.3-.1 2.1-1 .7-.8.9-2.5.9-2.5s.2-1.8.2-3.5V9.7c0-1.7-.2-3.5-.2-3.5zM9.6 13.8V7.8l5.6 3-5.6 3z" />
      </svg>
    ),
    GitHub: (
      <svg viewBox="0 0 24 24" aria-hidden="true" width={16} height={16} fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 .1.1 1.4 2.8 1 .1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.9 0-1.3.5-2.3 1.1-3.1-.1-.3-.5-1.6.1-3.3 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 3 .1 3.3.7.8 1.1 1.8 1.1 3.1 0 4.6-2.8 5.6-5.3 5.9.4.3.8 1 .8 2.1v3.2c0 .3.2.7.8.6A11.6 11.6 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    )
  };

  return (
    <section className={styles.section}>
      <div className={shared.container}>
        <div className={styles.header}>
          <h1 className={styles.title}>Meet Our Team</h1>
          <p className={styles.body}>
            We blend capital markets discipline with founder-first empathy to keep every raise compliant, credible, and moving fast.
          </p>
        </div>
        <div className={styles.leadersGrid}>
          {leaders.map((leader) => (
            <div key={leader.name} className={styles.advisorCard} style={{ backgroundImage: `url(${leader.image})` }}>
              <div className={styles.overlay} />
              <div className={styles.advisorContent}>
                <div className={styles.name}>{leader.name}</div>
                <div className={styles.role}>{leader.role}</div>
                <p className={styles.bio}>{leader.bio}</p>
                {leader.socials && (
                  <div className={styles.socialRow}>
                    {leader.socials.map((s) => (
                      <a key={s.label} href={s.url} className={styles.socialLink} aria-label={s.label}>
                        <span>{iconMap[s.label] ?? "🔗"}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <div>
            <div className={styles.badge}>Concierge</div>
            <h3 className={styles.ctaTitle}>Meet the team behind your next raise.</h3>
            <p className={styles.body}>Book a confidential session to map your round, risk, and readiness in under 30 minutes.</p>
          </div>
          <div className={styles.actions}>
            <button className={`${shared.btnPrimary} ${shared.btnLarge}`}>Book with our CIO</button>
            <Link href="/legal/terms" className={`${shared.btnGhost} ${shared.btnLarge}`}>
              See compliance checklist
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
