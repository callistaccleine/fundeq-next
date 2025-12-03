import styles from "../styles/Logo.module.css";
import Image from "next/image";

type Props = {
  withText?: boolean;
  subtitle?: string;
};

export default function Logo({ withText = false, subtitle }: Props) {
  return (
    <div className={styles.logoGroup}>
      <Image src="/logo.png" alt="FundEQ logo" width={40} height={40} className={styles.logoImg} priority />
      {withText && (
        <div>
          <div className={styles.name}>FundEQ</div>
          {subtitle ? <small className={styles.subtitle}>{subtitle}</small> : null}
        </div>
      )}
    </div>
  );
}
