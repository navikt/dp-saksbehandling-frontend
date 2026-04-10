import { KyllingSvg } from "~/components/høytid-og-morro/paaske/KyllingSvg";
import { PaaskeEgg1Svg } from "~/components/høytid-og-morro/paaske/PaaskeEgg1Svg";
import { PaaskeEgg2Svg } from "~/components/høytid-og-morro/paaske/PaaskeEgg2Svg";
import { PaaskeEgg3Svg } from "~/components/høytid-og-morro/paaske/PaaskeEgg3Svg";

import styles from "./Paaske.module.css";

export function Paaske() {
  return (
    <div className={styles.container}>
      <RandomItem>
        <PaaskeEgg1Svg />
      </RandomItem>
      <RandomItem>
        <KyllingSvg />
      </RandomItem>
      <RandomItem>
        <PaaskeEgg2Svg />
      </RandomItem>
      <RandomItem>
        <KyllingSvg />
      </RandomItem>
      <RandomItem>
        <PaaskeEgg3Svg />
      </RandomItem>
      <RandomItem>
        <PaaskeEgg1Svg />
      </RandomItem>
      <RandomItem>
        <KyllingSvg />
      </RandomItem>
    </div>
  );
}

function RandomItem({ children }: { children: React.ReactNode }) {
  const rotation = Math.floor(Math.random() * 61) - 30;
  const scale = 0.7 + Math.random() * 0.5;

  return <span style={{ transform: `rotate(${rotation}deg) scale(${scale})` }}>{children}</span>;
}
