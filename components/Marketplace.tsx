import Link from "next/link";
import shared from "../styles/shared.module.css";
import styles from "../styles/Marketplace.module.css";

const offers = [
  {
    name: "Altia Mobility",
    stage: "Series A extension",
    raise: "$1.5M of $2M target",
    tags: ["Climate", "Mobility", "B2B"],
    summary: "Fleet electrification platform turning vehicle data into grid-friendly charging plans.",
    highlight: "Signed national logistics partner; $220k MRR"
  },
  {
    name: "Northbeam Bio",
    stage: "Seed",
    raise: "$780k of $1.2M target",
    tags: ["Health", "AI", "Deeptech"],
    summary: "AI-native lab that designs therapeutic proteins with 70% faster iteration cycles.",
    highlight: "MIT-origin; 3 pharma pilots in flight"
  },
  {
    name: "BrightLedger",
    stage: "Community round",
    raise: "$410k of $600k target",
    tags: ["Fintech", "SMB", "SaaS"],
    summary: "Cashflow OS that turns invoices into investable assets for local supporters.",
    highlight: "NPS 72; expansion into 2 new cities"
  }
];

export default function Marketplace() {
  return (
    <section className={shared.section} id="market">
      <div className={shared.container}>
        <div className={styles.headerRow}>
          <h2 className={styles.headline}>Curated marketplace for serious investors.</h2>
          <Link className={`${shared.btnGhost} ${shared.btnSmall}`} href="#">
            See more deals
          </Link>
        </div>
        <div className={shared.gridThree}>
          {offers.map((offer) => (
            <div key={offer.name}>
              <div className={shared.marketCard}>
                <div className={styles.cardHead}>
                  <div>
                    <h5 className={styles.cardTitle}>{offer.name}</h5>
                    <small className={styles.muted}>{offer.stage}</small>
                  </div>
                  <div className={shared.badgePill}>{offer.raise}</div>
                </div>
                <p className={styles.body}>{offer.summary}</p>
                <div className={styles.highlight}>{offer.highlight}</div>
                <div className={shared.marketTags}>
                  {offer.tags.map((tag) => (
                    <span key={tag} className={shared.badgePill}>
                      {tag}
                    </span>
                  ))}
                </div>
                <button className={`${shared.btnGhost} ${shared.btnSmall} ${styles.fullWidth}`}>View details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
