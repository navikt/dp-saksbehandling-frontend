import styles from "./ValentinesDay.module.css";

export function ValentinesDay() {
  return (
    <div className={styles.container}>
      <div className={styles.heart}></div>
      <h1 className={styles.message}>Happy Valentine&#39;s Day!</h1>
    </div>
  );
}
