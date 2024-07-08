import styles from "./BehandlingHandlinger.module.css";
import { RemixLink } from "~/components/RemixLink";

export function BehandlingHandlinger() {
  return (
    <div className={styles.container}>
      <RemixLink to={"avbryt-behandling"} asButtonVariant="secondary" size="small">
        Send til Arena
      </RemixLink>

      <RemixLink to={"godkjenn-behandling"} asButtonVariant="primary" size="small">
        Automatisk avslag
      </RemixLink>
    </div>
  );
}
