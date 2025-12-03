import Link from "next/link";
import Logo from "./Logo";
import shared from "../styles/shared.module.css";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${shared.container} ${styles.inner}`}>
        <Logo withText subtitle="Founder-first fundraising" />
        <div className={styles.navLinks}>
          <Link className={styles.navLink} href="#platform">
            Platform
          </Link>
          <Link className={styles.navLink} href="#steps">
            How it works
          </Link>
          <Link className={styles.navLink} href="#market">
            Marketplace
          </Link>
          <div className={styles.actions}>
            <button className={`${shared.btnGhost} ${shared.btnSmall}`}>Login</button>
            <button className={`${shared.btnPrimary} ${shared.btnSmall}`}>Book a demo</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
