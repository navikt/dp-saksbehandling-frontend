import type { CSSProperties } from "react";

import { Flagg } from "~/components/høytid-og-morro/17-mai/Flagg";
import { IsKrem1 } from "~/components/høytid-og-morro/17-mai/IsKrem1";
import { IsKrem2 } from "~/components/høytid-og-morro/17-mai/IsKrem2";
import { IsKrem3 } from "~/components/høytid-og-morro/17-mai/IsKrem3";
import { IsKrem4 } from "~/components/høytid-og-morro/17-mai/IsKrem4";
import { IsKrem5 } from "~/components/høytid-og-morro/17-mai/IsKrem5";

import styles from "./HippHippHurra.module.css";

export interface CustomCSSProperties extends CSSProperties {
  "--rotation"?: number;
  "--size"?: number;
}

export function HippHippHurra() {
  return (
    <div className={styles.container}>
      <IsKrem1
        style={{
          "--rotation": 0.5,
          "--size": 0.8,
        }}
      />
      <Flagg
        style={{
          "--rotation": 0.7,
          "--size": 0.9,
        }}
      />
      <IsKrem2
        style={{
          "--rotation": 0.6,
          "--size": 0.7,
        }}
      />
      <Flagg
        style={{
          "--rotation": 0.9,
          "--size": 0.6,
        }}
      />
      <IsKrem3
        style={{
          "--rotation": 0.9,
          "--size": 0.7,
        }}
      />
      <Flagg
        style={{
          "--rotation": 0.2,
          "--size": 0.4,
        }}
      />
      <IsKrem4
        style={{
          "--rotation": 0.8,
          "--size": 0.9,
        }}
      />
      <Flagg
        style={{
          "--rotation": 0.4,
          "--size": 0.6,
        }}
      />
      <IsKrem5
        style={{
          "--rotation": 0.7,
          "--size": 0.4,
        }}
      />
    </div>
  );
}
