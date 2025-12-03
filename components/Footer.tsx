import styles from "../styles/Footer.module.css";

const columns = [
  {
    title: "Our Company",
    links: ["Who We Are", "Our Team", "Careers", "Contact Us"]
  },
  {
    title: "Wealth Management",
    links: ["Alternative Investments", "Australian Equities", "International Equities", "Private Equity", "Foreign Exchange", "Fixed Income"]
  },
  {
    title: "Advisory Services",
    links: ["Capital Markets", "Investment Capabilities", "Settlement & Custody", "How To Invest"]
  },
  {
    title: "Important Links",
    links: ["Perspectives", "Book Consultation", "Investor Login", "Open Account"]
  },
  {
    title: "Head Office",
    links: ["Level 34 Corporate Building A 125 Main", "Street City, State, Zipcode Country", "+1 234 0235 0235", "Info@skycapp.com"]
  }
];

const policies = ["Terms & Conditions", "Privacy Policy", "Regulatory Affiliations", "Forms & Documentation", "Complaints", "Fraud Alerts"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.columns}>
          {columns.map((col) => (
            <div key={col.title} className={styles.column}>
              <h4 className={styles.colTitle}>{col.title}</h4>
              <ul className={styles.colLinks}>
                {col.links.map((link) => (
                  <li key={link} className={styles.link}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.policies}>
          {policies.map((item) => (
            <span key={item} className={styles.policyLink}>
              {item}
            </span>
          ))}
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
