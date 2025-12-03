import Logo from "./Logo";
import shared from "../styles/shared.module.css";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${shared.container} ${styles.inner}`}>
        <Logo withText subtitle="Founder-first fundraising platform" />
        <div className={styles.muted}>© {new Date().getFullYear()} FundEQ. All rights reserved.</div>
      </div>
    </footer>
  );
}
