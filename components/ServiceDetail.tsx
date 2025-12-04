import styles from "../styles/ServiceDetail.module.css";
import shared from "../styles/shared.module.css";

export type ServiceKey = "investments" | "retirement" | "estate-planning" | "tax";

type ServiceDetail = {
  slug: ServiceKey;
  badge: string;
  title: string;
  subtitle: string;
  intro: string;
  benefits: string[];
  checklist: string[];
  stats: { label: string; value: string }[];
  ctaPrimary?: string;
  ctaSecondary?: string;
};

export const serviceDetails: Record<ServiceKey, ServiceDetail> = {
  investments: {
    slug: "investments",
    badge: "Investments",
    title: "Institutional-grade investing for founder portfolios",
    subtitle: "Curated strategies spanning public, private, and alternative markets to align with your risk profile and liquidity goals.",
    intro:
      "We pair discretionary management with transparent reporting, so you can diversify across geographies, sectors, and vehicles without operational friction.",
    benefits: [
      "Multi-asset allocations with risk controls and rebalancing",
      "Access to private markets, secondaries, and thematic mandates",
      "Performance analytics with tax-aware trade execution"
    ],
    checklist: [
      "Investment policy and risk calibration",
      "Portfolio construction and execution",
      "Ongoing reporting, tax-aware rebalancing"
    ],
    stats: [
      { label: "Coverage", value: "APAC + US" },
      { label: "Service model", value: "Discretionary + advisory" }
    ],
    ctaPrimary: "Start an investment mandate",
    ctaSecondary: "View sample reports"
  },
  retirement: {
    slug: "retirement",
    badge: "Retirement Planning",
    title: "Retirement outcomes without guesswork",
    subtitle: "Plan cash flows, risk, and tax so your future income is as deliberate as your career decisions.",
    intro: "We model multiple scenarios, stress-test markets, and build a glidepath that adapts with you.",
    benefits: [
      "Goal-based planning with probability of success analysis",
      "Optimized withdrawals, tax, and estate coordination",
      "Consolidated reporting across super, trusts, and direct holdings"
    ],
    checklist: [
      "Scenario planning and glidepath design",
      "Income, tax, and estate alignment",
      "Ongoing monitoring and adjustments"
    ],
    stats: [
      { label: "Planning horizon", value: "10-40 years" },
      { label: "Review cadence", value: "Quarterly" }
    ],
    ctaPrimary: "Schedule a retirement consult",
    ctaSecondary: "Download planning overview"
  },
  "estate-planning": {
    slug: "estate-planning",
    badge: "Estate Planning",
    title: "Protect and transfer wealth with precision",
    subtitle: "Coordinate structures, beneficiaries, and governance to preserve intent across generations.",
    intro: "We collaborate with your legal and tax advisors to align documentation, liquidity, and fiduciary responsibilities.",
    benefits: [
      "Structuring for tax efficiency and control",
      "Liquidity planning for bequests and philanthropy",
      "Document readiness with secure data rooms"
    ],
    checklist: [
      "Estate audit and gap analysis",
      "Structure and beneficiary design",
      "Execution roadmap with trusted counsel"
    ],
    stats: [
      { label: "Coordination", value: "Legal + tax + fiduciaries" },
      { label: "Data", value: "Encrypted vault + audit trails" }
    ],
    ctaPrimary: "Book an estate review",
    ctaSecondary: "See our governance checklist"
  },
  tax: {
    slug: "tax",
    badge: "Tax Strategies",
    title: "Tax strategies that support growth",
    subtitle: "Integrate tax thinking into every investment and liquidity decision.",
    intro: "Our team and partner network help you minimize drag, plan events, and stay compliant across jurisdictions.",
    benefits: [
      "Event-based planning for exits and liquidity",
      "Jurisdictional coordination (AU + US)",
      "Tax-aware portfolio rebalancing and harvesting"
    ],
    checklist: [
      "Tax posture review",
      "Event and transaction playbooks",
      "Ongoing optimization and reporting"
    ],
    stats: [
      { label: "Coverage", value: "Australia + cross-border" },
      { label: "Mode", value: "Advisory + coordination" }
    ],
    ctaPrimary: "Meet our tax specialists",
    ctaSecondary: "Download tax playbook"
  }
};

export function ServiceDetailView({ service }: { service: ServiceDetail }) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.badge}>{service.badge}</div>
          <h1 className={styles.title}>{service.title}</h1>
          <p className={styles.subtitle}>{service.subtitle}</p>
          <p className={styles.intro}>{service.intro}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>What you get</h3>
            <ul>
              {service.benefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <h3>How we work</h3>
            <ul>
              {service.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={styles.card}>
            <h3>Snapshot</h3>
            <div className={styles.stats}>
              {service.stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.actions}>
          {service.ctaPrimary && (
            <button className={`${shared.btnPrimary} ${shared.btnLarge}`}>{service.ctaPrimary}</button>
          )}
          {service.ctaSecondary && (
            <button className={`${shared.btnGhost} ${shared.btnLarge}`}>{service.ctaSecondary}</button>
          )}
        </div>
      </div>
    </section>
  );
}
