import Link from "next/link";
import shared from "../styles/shared.module.css";
import styles from "../styles/Hero.module.css";

const stats = [
  { label: "Avg. raise completion", value: "92%", detail: "when founders keep investors updated weekly" },
  { label: "Time to launch", value: "48 hrs", detail: "from draft to live with concierge support" },
  { label: "Investors engaged", value: "12k+", detail: "accredited + community backers ready to join" }
];

export default function Hero() {
  return (
    <section className={`${shared.section} ${styles.hero}`} id="top">
      <div className={shared.container}>
        <div className={styles.heroGrid}>
          <div className={styles.copyCol}>
            <div className={styles.ribbon}>
              <span className={styles.ribbonTag}>New</span>
              <small>Founder-first fundraising, ready in days</small>
            </div>
            <h1 className={styles.title}>Modern fundraising that treats investors like partners.</h1>
            <p className={styles.lede}>
              FundEQ combines compliant capital raises with an investor OS—so you can launch a round, keep backers engaged, and ship with confidence.
            </p>
            <div className={styles.actions}>
              <button className={`${shared.btnPrimary} ${shared.btnLarge}`}>Launch an offering</button>
              <Link className={`${shared.btnGhost} ${shared.btnLarge}`} href="#market">
                Preview marketplace
              </Link>
            </div>
            <div className={styles.statGrid}>
              {stats.map((stat) => (
                <div className={shared.statCard} key={stat.label}>
                  <h3>{stat.value}</h3>
                  <div className={styles.muted}>{stat.label}</div>
                  <div className={styles.subtle}>{stat.detail}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.visualCol}>
            <div className={styles.heroImage}>
              <div className={styles.heroHeader}>
                <div>
                  <div className={shared.badgePill}>Live round</div>
                  <h5 className={styles.company}>Harborwave Analytics</h5>
                  <small className={styles.muted}>Series A | AI + Climate</small>
                </div>
                <div className={styles.amountBlock}>
                  <div className={styles.amount}>$3.2M</div>
                  <small className={styles.muted}>of $4M target</small>
                </div>
              </div>
              <div className={`${shared.glassCard} ${styles.updateCard}`}>
                <div className={styles.cardHeader}>
                  <div className={styles.muted}>Investor updates</div>
                  <div className={shared.badgePill}>Weekly</div>
                </div>
                <ul className={shared.listClean}>
                  <li>
                    <span>📈</span>
                    <span>
                      <strong>MRR up 14%</strong> after releasing grid-balancing API.
                    </span>
                  </li>
                  <li>
                    <span>🤝</span>
                    <span>
                      <strong>New pilot</strong> signed with Western Utilities; first invoices next month.
                    </span>
                  </li>
                  <li>
                    <span>🛠️</span>
                    <span>
                      <strong>Engineering</strong> shipped predictive maintenance module; 27% fewer alerts.
                    </span>
                  </li>
                </ul>
              </div>
              <div className={styles.metricsRow}>
                <div className={shared.glassCard}>
                  <div className={styles.muted}>Compliance</div>
                  <div className={styles.amount}>KYC/AML cleared</div>
                  <small className={styles.subtle}>Audit log ready</small>
                </div>
                <div className={shared.glassCard}>
                  <div className={styles.muted}>Engagement</div>
                  <div className={styles.amount}>78%</div>
                  <small className={styles.subtle}>Investors active this month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
