import styles from "../styles/Logo.module.css";

type Props = {
  withText?: boolean;
  subtitle?: string;
};

export default function Logo({ withText = false, subtitle }: Props) {
  return (
    <div className={styles.logoGroup}>
      <div className={styles.mark}>FQ</div>
      {withText && (
        <div>
          <div className={styles.name}>FundEQ</div>
          {subtitle ? <small className={styles.subtitle}>{subtitle}</small> : null}
        </div>
      )}
    </div>
  );
}
