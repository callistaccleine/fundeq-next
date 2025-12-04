import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../../../styles/PrivacyPage.module.css";

export default function FraudAlertsPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Fraud Alerts</p>
          <h1 className={styles.title}>Staying safe with FundEQ</h1>
          <p className={styles.body}>
            FundEQ is committed to protecting our clients from fraud, phishing, and unauthorized activity. Review these guidelines to keep your account and information secure.
          </p>

          <div className={styles.block}>
            <h2>Recognizing fraud</h2>
            <ul>
              <li>Be wary of unsolicited emails, calls, or messages asking for personal or financial information.</li>
              <li>FundEQ will never ask you to share passwords or one-time codes.</li>
              <li>Verify sender domains end with @fundeq.com.au before responding or clicking links.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>Protecting your account</h2>
            <ul>
              <li>Use strong, unique passwords and enable device-level security.</li>
              <li>Access FundEQ only via our official site and apps; avoid public/shared devices.</li>
              <li>Review account activity regularly and report any suspicious changes immediately.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>Reporting suspicious activity</h2>
            <p>
              If you suspect fraud or receive a suspicious message, contact us at <a href="mailto:support@fundeq.com.au">support@fundeq.com.au</a> or call +61 2 5555 5555. Include screenshots or details to help our security team respond quickly.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Regulatory and legal</h2>
            <p>
              FundEQ Pty Ltd (ACN 649 634 686) holds AFSL 123456. We cooperate with regulators and law enforcement on fraud prevention and incidents. Misuse of the platform may result in account suspension and legal action.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Contact</h2>
            <p>
              FundEQ Security Team<br />
              Email: <a href="mailto:support@fundeq.com.au">support@fundeq.com.au</a><br />
              Phone: +61 2 5555 5555
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
