import styles from "./OpplysningTabell.module.css";
import { Vilkaar } from "~/vilkaar/Vilkaar";

export function OpplysningTabell() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div>§ 4-4. Krav til minsteinntekt</div>
      </div>
      <div className={styles.content}>
        <Vilkaar />
      </div>
    </div>
  );
}
