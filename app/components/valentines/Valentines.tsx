import { HeartSvg } from "~/components/valentines/HeartSvg";

import styles from "./Valentines.module.css";

export function Valentines() {
  return (
    <div className={styles.container}>
      <RandomHeart />
      <RandomHeart />
      <RandomHeart />
      <RandomHeart />
      <RandomHeart />
      <RandomHeart />
    </div>
  );
}

function RandomHeart() {
  const rotation = Math.floor(Math.random() * 91) - 45;
  const scale = 0.8 + Math.random() * 0.4;

  return (
    <span
      style={{
        transform: `rotate(${rotation}deg) scale(${scale})`,
      }}
    >
      <HeartSvg />
    </span>
  );
}
