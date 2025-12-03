import shared from "../styles/shared.module.css";
import styles from "../styles/Features.module.css";

const features = [
  {
    title: "Founder-first fundraising",
    body: "Turn your story into a beautifully structured offering page that highlights traction, roadmap, and upside—without the legal headache.",
    bullets: ["Equity, revenue share, or community rounds", "Templates vetted by legal partners", "Dynamic updates for investor follow-along"]
  },
  {
    title: "Transparent investor portal",
    body: "Keep every backer in the loop with a single source of truth. Publish KPIs, send updates, and manage Q&A in one workspace.",
    bullets: ["Auto-generated KPI snapshots", "Update scheduling + delivery analytics", "Role-based access for teams"]
  },
  {
    title: "Compliance without friction",
    body: "FundEQ pairs automation with human review so you can launch faster while staying compliant with your jurisdiction.",
    bullets: ["KYC/AML, accreditation, and document vault", "E-signature + watermarking", "Audit-ready data room exports"]
  }
];

export default function Features() {
  return (
    <section className={shared.section} id="platform">
      <div className={shared.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.sectionTitle}>Everything you need to raise, onboard, and update.</h2>
          <div className={shared.badgePill}>Founder-ready workflows</div>
        </div>
        <div className={shared.gridThree}>
          {features.map((feature) => (
            <div key={feature.title}>
              <div className={shared.glassCard}>
                <div className={styles.cardHead}>
                  <h5 className={styles.cardTitle}>{feature.title}</h5>
                  <div className={shared.badgePill}>Live</div>
                </div>
                <p className={styles.cardBody}>{feature.body}</p>
                <ul className={shared.listClean}>
                  {feature.bullets.map((bullet) => (
                    <li key={bullet}>
                      <span>✔️</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
