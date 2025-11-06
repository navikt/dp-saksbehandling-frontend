import styles from "./CoffeeLoader.module.css";

export function CoffeeLoader() {
  return (
    <div className={styles.loader}>
      <ul>
        <li className={styles.steam} />
        <li className={styles.steam} />
        <li className={styles.steam} />
      </ul>

      <div className={styles.cup}>
        <span />
      </div>
    </div>
  );
}
