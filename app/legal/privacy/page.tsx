import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../../../styles/PrivacyPage.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Privacy Policy</p>
          <h1 className={styles.title}>How FundEQ handles your data</h1>
          <p className={styles.body}>
            This Privacy Policy explains how FundEQ Pty Ltd (ACN 649 634 686) (“FundEQ”, “we”, “us”) collects, uses, and protects your information in connection with our
            financial services and platform.
          </p>

          <div className={styles.block}>
            <h2>Information we collect</h2>
            <ul>
              <li>Identity and contact details (name, email, phone, company, role).</li>
              <li>Verification data for KYC/AML (ID documents, accreditation status as required by law).</li>
              <li>Usage and device data (logs, IP, browser type, session analytics).</li>
              <li>Transaction and investment preferences you share with us.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>How we use your information</h2>
            <ul>
              <li>Provide, operate, and improve our fundraising and investor services.</li>
              <li>Meet compliance obligations (KYC/AML, AFSL requirements, audit trails).</li>
              <li>Communicate updates, respond to requests, and support your account.</li>
              <li>Security, fraud detection, and risk monitoring.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>Legal bases</h2>
            <p>
              We process data under applicable laws (including Australian Privacy Principles) based on: consent, legitimate interests (service operation, security), contractual necessity,
              and compliance with legal obligations.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Sharing your data</h2>
            <ul>
              <li>Service providers (cloud, analytics, KYC/AML vendors) under strict confidentiality.</li>
              <li>Regulators or authorities when legally required.</li>
              <li>Advisors (legal, audit, security) to maintain compliance and platform integrity.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>Data security & retention</h2>
            <ul>
              <li>We apply technical and organizational controls (encryption, access controls, monitoring).</li>
              <li>We retain data only as long as necessary for legal, regulatory, and operational requirements.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>Your rights</h2>
            <ul>
              <li>Access, correction, or deletion of your personal data (subject to legal obligations).</li>
              <li>Opt-out of marketing communications at any time.</li>
              <li>Contact us for privacy requests: <a href="mailto:privacy@fundeq.com.au">privacy@fundeq.com.au</a>.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>International transfers</h2>
            <p>
              Data may be processed in Australia and other jurisdictions where our vendors operate. We use safeguards (contracts, due diligence) to protect your data consistent with applicable laws.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Changes to this policy</h2>
            <p>We may update this policy periodically. Material changes will be communicated via the platform or email.</p>
          </div>

          <div className={styles.block}>
            <h2>Contact</h2>
            <p>
              FundEQ Pty Ltd (ACN 649 634 686)<br />
              Level 11, 410 Collins Street, Melbourne VIC 3000<br />
              Email: <a href="mailto:support@fundeq.com.au">support@fundeq.com.au</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
