import shared from "../styles/shared.module.css";
import styles from "../styles/WhyFundEq.module.css";

const points = [
  {
    title: "Investment strategies for every client.",
    body:
      "Our prefabricated panel assembly allows us to deliver your home up to 3x faster than a typical construction. With a clear budget and a predictable timeline, you get less unfortunate surprises."
  },
  { title: "Financial advisor to guide you through every step.", body: "Read More" },
  { title: "Low fees, full transparency, and a proven track record.", body: "Read More" },
  { title: "Access to top-performing investment opportunities.", body: "Read More" }
];

export default function WhyFundEq() {
  return (
    <section className={styles.section} id="why">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.kicker}>Benefits</div>
          <h2 className={styles.title}>Why Choose Us?</h2>
          <p className={styles.subtitle}>
            Our suite of services is designed to meet all your financial needs, whether you&apos;re planning for retirement, investing in global markets, or building an estate plan.
          </p>
        </div>
        <div className={styles.bodyGrid}>
          <div className={styles.list}>
            {points.map((point) => (
              <div key={point.title} className={styles.point}>
                <h3 className={styles.pointTitle}>{point.title}</h3>
                <p className={styles.pointBody}>{point.body}</p>
              </div>
            ))}
          </div>
          <div className={styles.imageWrap}>
            <img src="/whychooseus.jpg" alt="Team presenting financial insights" className={styles.image} />
          </div>
        </div>
      </div>
    </section>
  );
}
