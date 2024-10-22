import type { CustomCSSProperties } from "./GhostSvg";
import { GhostSvg } from "./GhostSvg";
import { useEffect, useState } from "react";
import styles from "./Ghosts.module.css";

const defaultGhostStyles: CustomCSSProperties[] = [
  {
    "--rotation": 0.24,
    "--size": 0.2,
  },
  {
    "--rotation": 0.51,
    "--size": 0.89,
  },
  {
    "--rotation": 0.78,
    "--size": 0.85,
  },
  {
    "--rotation": 0.11,
    "--size": 0.51,
  },
  {
    "--rotation": 0.76,
    "--size": 0.32,
  },
];

export function Ghosts() {
  const [ghostStyles, setGhostStyles] = useState<Array<CustomCSSProperties>>(defaultGhostStyles);

  useEffect(() => {
    const interval = setInterval(() => {
      const newGhostStyles = Array.from({ length: 5 }, () => ({
        "--rotation": Math.random(),
        "--size": Math.random(),
      }));
      setGhostStyles(newGhostStyles);
    }, 11000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      {ghostStyles.map((style, i) => (
        <GhostSvg key={i} style={style} />
      ))}
    </div>
  );
}
