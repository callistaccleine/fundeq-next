import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import styles from "../../../styles/PrivacyPage.module.css";

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <Navbar />
      <section className={styles.section}>
        <div className={styles.container}>
          <p className={styles.kicker}>Terms & Conditions</p>
          <h1 className={styles.title}>FundEQ platform terms of use</h1>
          <p className={styles.body}>
            These Terms & Conditions govern your use of FundEQ Pty Ltd (ACN 649 634 686) services and platform. By accessing or using FundEQ, you agree to these terms.
          </p>

          <div className={styles.block}>
            <h2>Eligibility & accounts</h2>
            <ul>
              <li>You must be legally capable of entering contracts and meet any jurisdictional eligibility requirements.</li>
              <li>You are responsible for maintaining the confidentiality of your credentials and for all activity under your account.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>Platform use</h2>
            <ul>
              <li>Use FundEQ only for lawful purposes and in compliance with these terms and applicable regulations (including AFSL obligations).</li>
              <li>Do not attempt to bypass security controls, scrape data, or misuse the platform.</li>
              <li>Content you provide (documents, data, communications) must be accurate, lawful, and not infringe third-party rights.</li>
            </ul>
          </div>

          <div className={styles.block}>
            <h2>Not financial advice</h2>
            <p>
              Information on the platform is for informational purposes only and is not financial, legal, or tax advice. You should obtain independent professional advice before making investment or fundraising decisions.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Compliance & KYC/AML</h2>
            <p>
              You agree to provide information required for identity verification, accreditation, and compliance checks. FundEQ may suspend or restrict access if required information is not provided or if mandated by law.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Third-party services</h2>
            <p>
              We may integrate third-party services (e.g., KYC providers, cloud hosting). Their terms and privacy practices apply to their services. FundEQ is not responsible for third-party failures outside our control.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Intellectual property</h2>
            <p>
              FundEQ retains all rights in the platform, software, and branding. You receive a limited, revocable license to use the platform in accordance with these terms.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, FundEQ is not liable for indirect, incidental, or consequential losses. Our aggregate liability is limited to the fees you paid to FundEQ in the 12 months preceding the claim, except where prohibited by law.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Suspension & termination</h2>
            <p>
              We may suspend or terminate access for breaches of these terms, legal requirements, or security concerns. You may stop using the platform at any time; certain obligations (e.g., confidentiality, liability limits) survive termination.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Changes</h2>
            <p>
              We may update these terms from time to time. Material changes will be communicated via the platform or email. Continued use constitutes acceptance of updated terms.
            </p>
          </div>

          <div className={styles.block}>
            <h2>Governing law</h2>
            <p>These terms are governed by the laws of Victoria, Australia. Disputes are subject to the exclusive jurisdiction of courts in Victoria.</p>
          </div>

          <div className={styles.block}>
            <h2>Contact</h2>
            <p>
              FundEQ Pty Ltd (ACN 649 634 686)<br />
              Level 11, 410 Collins Street, Melbourne VIC 3000<br />
              Email: <a href="mailto:admin@fundeq.com.au">admin@fundeq.com.au</a>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
