import shared from "../styles/shared.module.css";
import styles from "../styles/Steps.module.css";

const steps = [
  {
    title: "Shape your round",
    detail: "Pick your model (equity, SAFEs, revenue share) and let our guided builder translate it into investor-ready terms and visuals.",
    time: "Day 1"
  },
  {
    title: "Invite early believers",
    detail: "Share a private preview link with your angels and advisors. Capture commitments, refine messaging, and sharpen FAQs.",
    time: "Day 2"
  },
  {
    title: "Go live + stay live",
    detail: "Open the round to the FundEQ marketplace. Automate updates, track engagement, and keep your investor community activated.",
    time: "Day 3"
  }
];

export default function Steps() {
  return (
    <section className={shared.section} id="steps">
      <div className={shared.container}>
        <div className={shared.gridTwo}>
          <div className={styles.copy}>
            <h2 className={styles.title}>Launch in days, stay connected forever.</h2>
            <p className={styles.body}>
              Fundraising should feel like progress, not paperwork. We pair automation with human guidance so you can move from draft to live in under a week.
            </p>
            <div className={shared.glassCard}>
              <div className={styles.cardHead}>
                <div>
                  <div className={styles.muted}>Concierge support</div>
                  <h5 className={styles.cardTitle}>Real humans, not chatbots</h5>
                </div>
                <div className={shared.badgePill}>Included</div>
              </div>
              <p className={styles.subtle}>
                Work directly with former founders and legal ops specialists who understand the nuance of your round.
              </p>
            </div>
          </div>
          <div className={styles.stepLine}>
            {steps.map((step) => (
              <div className={`${shared.glassCard} ${styles.stepCard}`} key={step.title}>
                <div className={styles.stepDot} />
                <div className={styles.stepHead}>
                  <div>
                    <h5 className={styles.cardTitle}>{step.title}</h5>
                    <p className={styles.body}>{step.detail}</p>
                    <div className={shared.badgePill}>{step.time}</div>
                  </div>
                  <div className={styles.subtle}>Playbooks + templates</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
