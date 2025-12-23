"use client";

import { FormEvent, useState } from "react";

import { useReveal } from "./useReveal";
import shared from "../styles/shared.module.css";
import styles from "../styles/ContactSection.module.css";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactSection() {
  const { ref, visible } = useReveal();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const valueFor = (key: string) => formData.get(key)?.toString().trim() ?? "";

    const payload = {
      firstName: valueFor("firstName"),
      lastName: valueFor("lastName"),
      email: valueFor("email"),
      phone: valueFor("phone"),
      suburb: valueFor("suburb"),
      postcode: valueFor("postcode"),
      state: valueFor("state"),
      purpose: valueFor("purpose"),
      hearAbout: valueFor("hearAbout"),
      message: valueFor("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send your request right now.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Unable to send your request right now.");
    }
  };

  return (
    <section className={styles.section} id="contact" ref={ref}>
      <div className={styles.wrap}>
        <div className={`${styles.header} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          <h2 className={styles.title}>Get in touch with us</h2>
          <p className={styles.body}>Fill out the form below or schedule a meeting with us at your convenience.</p>
        </div>
        <div className={`${styles.grid} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="firstName">First name *</label>
                <input id="firstName" name="firstName" type="text" placeholder="First name" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="lastName">Last name *</label>
                <input id="lastName" name="lastName" type="text" placeholder="Last name" required />
              </div>
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="phone">Phone *</label>
                <input id="phone" name="phone" type="tel" placeholder="+614 XX XXX XXX" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="email">Email *</label>
                <input id="email" name="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="suburb">Suburb *</label>
                <input id="suburb" name="suburb" type="text" placeholder="Suburb" required />
              </div>
              <div className={styles.field}>
                <label htmlFor="postcode">Postcode *</label>
                <input id="postcode" name="postcode" type="text" placeholder="Postcode" required />
              </div>
            </div>
            <div className={styles.fieldRow}>
              <div className={styles.field}>
                <label htmlFor="state">State *</label>
                <select id="state" name="state" defaultValue="" required>
                  <option value="" disabled>
                    Select state
                  </option>
                  <option value="NSW">NSW</option>
                  <option value="VIC">VIC</option>
                  <option value="QLD">QLD</option>
                  <option value="WA">WA</option>
                  <option value="SA">SA</option>
                  <option value="TAS">TAS</option>
                  <option value="ACT">ACT</option>
                  <option value="NT">NT</option>
                </select>
              </div>
              <div className={styles.field}>
                <label htmlFor="purpose">Purpose *</label>
                <select id="purpose" name="purpose" defaultValue="" required>
                  <option value="" disabled>
                    Select purpose
                  </option>
                  <option value="capital-raise">Capital raise</option>
                  <option value="investor-relations">Investor relations</option>
                  <option value="compliance">Compliance</option>
                  <option value="advisory">Advisory</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="hearAbout">How did you hear about us? *</label>
              <select id="hearAbout" name="hearAbout" defaultValue="" required>
                <option value="" disabled>
                  Select an option
                </option>
                <option value="referral">Referral</option>
                <option value="investor">Investor</option>
                <option value="event">Event</option>
                <option value="search">Search</option>
                <option value="social">Social</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Additional comments</label>
              <textarea id="message" name="message" placeholder="Tell us more about your needs" rows={4} />
            </div>
            <label className={styles.checkbox}>
              <input type="checkbox" required /> I agree with the{" "}
              <a href="/legal/terms" target="_blank" rel="noopener noreferrer" className={styles.link}>
                Terms and Conditions
              </a>
            </label>
            {status === "success" && (
              <div className={`${styles.status} ${styles.statusSuccess}`} role="status">
                Thanks for reaching out. Our team will respond shortly.
              </div>
            )}
            {status === "error" && (
              <div className={`${styles.status} ${styles.statusError}`} role="alert">
                {error}
              </div>
            )}
            <button
              type="submit"
              className={`${shared.btnPrimary} ${shared.btnLarge} ${styles.primaryBtn}`}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending..." : "Send your request"}
            </button>
          </form>
        </div>
        <div className={`${styles.infoPanel} ${shared.reveal} ${visible ? shared.revealVisible : ""}`}>
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
    </section>
  );
}
