"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import shared from "../styles/shared.module.css";
import styles from "../styles/Navbar.module.css";

const links = [
  { label: "Home", href: "/" },
  { label: "Our Company", href: "/#company" },
  { label: "Services", href: "/#services" },
  { label: "Team", href: "/team" },
  { label: "Contact Us", href: "/contact" },
  { label: "Call Us", href: "tel:+123402350235" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={`${shared.container} ${styles.inner}`}>
        <Link href="/" className={styles.brandLink} onClick={() => setOpen(false)}>
          <Logo withText subtitle={undefined} />
        </Link>
        <button className={styles.menuButton} aria-label="Toggle navigation" onClick={() => setOpen((v) => !v)}>
          <span />
          <span />
          <span />
        </button>
        <div className={styles.navLinks}>
          {links.map((link) => (
            <Link key={link.label} className={styles.navLink} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className={`${styles.mobileMenu} ${open ? styles.mobileMenuOpen : ""}`}>
        {links.map((link) => (
          <Link key={link.label} className={styles.mobileLink} href={link.href} onClick={() => setOpen(false)}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
