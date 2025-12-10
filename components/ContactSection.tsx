"use client";

import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/ContactSection.module.css";

export default function ContactSection() {
  const { ref, visible } = useReveal();

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <div className={shared.container}>
        <div className={`${styles.header} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          <h2 className={styles.title}>Get in touch with us</h2>
          <p className={styles.body}>Fill out the form below or schedule a meeting with us at your convenience.</p>
        </div>
        <div className={`${styles.grid} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          <form className={styles.form}>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="Enter your email" required />
              </div>
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" placeholder="FundEQ" />
              </div>
              <div className={styles.field}>
                <label htmlFor="role">Role</label>
                <input id="role" name="role" type="text" placeholder="Founder" />
              </div>
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="capital">Target raise</label>
                <input id="capital" name="capital" type="text" placeholder="$2.5M SAFE / equity / rev share" />
              </div>
              <div className={styles.field}>
                <label htmlFor="timeline">Timeline</label>
                <input id="timeline" name="timeline" type="text" placeholder="e.g. Launching in 30-60 days" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows={4} required />
            </div>
            <label className={styles.checkbox}>
              <input type="checkbox" required /> I agree with the Terms and Conditions
            </label>
            <button type="submit" className={`${shared.btnPrimary} ${shared.btnLarge} ${styles.primaryBtn}`}>
              Send your request
            </button>
          </form>
          <div className={styles.rightCol}>
            <h4 className={styles.subhead}>With our services you can</h4>
            <ul className={styles.bulletList}>
              <li>Improve usability of your product</li>
              <li>Engage investors at a higher level and outperform your competition</li>
              <li>Reduce onboarding time and improve close rates</li>
              <li>Balance investor needs with your business goals</li>
            </ul>
            <div className={styles.contactChannels}>
              <div className={styles.channel}>
                <a className={styles.channelLabel} href="mailto:admin@fundeq.com.au">Email</a>
                <span>admin@fundeq.com.au</span>
              </div>
            </div>
            <div className={styles.locations}>
              <div>
                <div className={styles.locationLabel}>Australia</div>
                <div className={styles.locationText}>Level 11, 410 Collins Street</div>
                <div className={styles.locationText}>Melbourne VIC 3000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
