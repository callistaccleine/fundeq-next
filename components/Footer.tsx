import Link from "next/link";
import styles from "../styles/Footer.module.css";

const columns = [
  {
    title: "Our Company",
    links: [
      { label: "Who We Are", href: "/#company" },
      { label: "Our Team", href: "/team" }
    ]
  },
  {
    title: "Services",
    links: [
      { label: "Investments", href: "/services/investments" },
      { label: "Retirement Planning", href: "/services/retirement" },
      { label: "Estate Planning", href: "/services/estate-planning" },
      { label: "Tax Strategies", href: "/services/tax" }
    ]
  },
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Our Company", href: "/#company" },
      { label: "Services", href: "/#services" },
      { label: "Team", href: "/team" },
      { label: "Contact Us", href: "/contact" }
    ]
  },
  {
    title: "Head Office",
    links: [
      { label: "Level 11 410 Collins Street", href: "" },
      { label: "Melbourne, 3000", href: "" },
      { label: "+1 234 0235 0235", href: "tel:+123402350235" },
      { label: "support@fundeq.com.au", href: "mailto:support@fundeq.com.au" }
    ]
  }
];

const policies = [
  { label: "Terms & Conditions", href: "/legal/terms" },
  { label: "Privacy Policy", href: "/legal/privacy" },
  { label: "Complaints", href: "/contact" },
  { label: "Fraud Alerts", href: "/legal/fraud" }
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.colLinks}>
                {col.links.map((link) => {
                  if (!link.href) {
                    return (
                      <li key={link.label} className={styles.link}>
                        {link.label}
                      </li>
                    );
                  }
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label} className={styles.link}>
                      {isExternal ? (
                        <a href={link.href} target="_blank" rel="noreferrer">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href}>{link.label}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.policies}>
          {policies.map((item) => {
            const isExternal = item.href.startsWith("http");
            return isExternal ? (
              <a key={item.label} href={item.href} className={styles.policyLink} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ) : (
              <Link key={item.label} href={item.href} className={styles.policyLink}>
                {item.label}
              </Link>
            );
          })}
        </div>
        <p className={styles.disclaimer}>
          FUNDEQ Pty Ltd (ACN 649 634 686) holds Australian Financial Services Licence (AFSL 123456) and provides wealth management services in accordance with Australian regulations. Investments
          involve inherent risks, including the potential loss of principal. The value of investments may fluctuate, and past performance is not a reliable indicator of future results.
        </p>
        <p className={styles.disclaimer}>
          The content provided on this website is for informational purposes only and does not constitute financial advice, an offer, or a recommendation to buy or sell any financial product or
          service. You should seek independent professional advice (including tax and legal advice) before making investment decisions. FundEQ accepts no responsibility for any loss or damage arising
          from the use of this website or reliance on its content. Please review our Privacy Policy and Terms of Use for more details.
        </p>
        <div className={styles.copy}>Copyright © FundEQ. 2021 - {new Date().getFullYear()}. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
