import { GhostSvg } from "./GhostSvg";
import type { CSSProperties } from "react";
import styles from "./Ghosts.module.css";

export function Ghosts() {
  const ghosts = new Array(5).fill(0);

  return (
    <div className={styles.container}>
      {ghosts.map((_, i) => (
        <GhostSvg
          key={i}
          style={
            {
              "--rotation": Math.random(),
              "--size": Math.random(),
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
