import shared from "../styles/shared.module.css";
import styles from "../styles/WhyFundEq.module.css";

export default function WhyFundEq() {
  return (
    <section className={shared.section}>
      <div className={shared.container}>
        <div className={shared.gridTwo}>
          <div className={styles.copy}>
            <div className={shared.badgePill}>Why FundEQ</div>
            <h2 className={styles.title}>Build the investor relationships you deserve.</h2>
            <p className={styles.body}>
              FundEQ is built by founders for founders. That means clarity, speed, and control over your round—without sacrificing compliance or investor quality.
            </p>
          </div>
          <div className={styles.cardsGrid}>
            <div className={shared.glassCard}>
              <div className={shared.badgePill}>Signal</div>
              <p className={shared.testimonial}>
                "FundEQ let us turn investor interest into action. Updates, Q&A, and documents in one place gave angels conviction fast."
              </p>
              <small className={styles.muted}>Amari Chen · CEO, LumenGrid</small>
            </div>
            <div className={shared.glassCard}>
              <div className={shared.badgePill}>Control</div>
              <p className={shared.testimonial}>
                "We launched a community round without diluting governance. Compliance was handled and we kept investors engaged weekly."
              </p>
              <small className={styles.muted}>Jordan Patel · Founder, BrightLedger</small>
            </div>
            <div className={shared.glassCard}>
              <div className={styles.headlineRow}>
                <h5 className={styles.cardTitle}>Protect your time, protect your round.</h5>
                <div className={shared.badgePill}>Security-first</div>
              </div>
              <ul className={shared.listClean}>
                <li>
                  <span>🔐</span>
                  <span>End-to-end encryption for signed docs and data rooms.</span>
                </li>
                <li>
                  <span>🧭</span>
                  <span>Guided funnels reduce drop-off and missed compliance steps.</span>
                </li>
                <li>
                  <span>📊</span>
                  <span>Engagement analytics show who is leaning in before you hop on a call.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
