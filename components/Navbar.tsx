import Link from "next/link";
import Logo from "./Logo";
import shared from "../styles/shared.module.css";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`${shared.container} ${styles.inner}`}>
        <Link href="/">
          <Logo withText subtitle={null} />
        </Link>
        <div className={styles.navLinks}>
          <Link className={styles.navLink} href="/#company">
            Our Company
          </Link>
          <Link className={styles.navLink} href="/#services">
            Services
          </Link>
          <Link className={styles.navLink} href="/#team">
            Team
          </Link>
          <Link className={styles.navLink} href="/contact">
            Contact Us
          </Link>
          <Link className={styles.navLink} href="/#call">
            Call Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
