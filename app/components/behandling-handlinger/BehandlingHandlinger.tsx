import styles from "./BehandlingHandlinger.module.css";
import { RemixLink } from "~/components/RemixLink";
import { getEnv } from "~/utils/env.utils";

export function BehandlingHandlinger() {
  return (
    <div className={styles.container}>
      <RemixLink to={"avbryt-behandling"} asButtonVariant="secondary" size="small">
        Send til Arena
      </RemixLink>

      {getEnv("GCP_ENV") === "dev" && (
        <RemixLink to={"ferdigstill"} asButtonVariant="primary" size="small">
          Automatisk avslag
        </RemixLink>
      )}

      {getEnv("GCP_ENV") === "prod" && (
        <RemixLink to={"godkjenn-behandling"} asButtonVariant="primary" size="small">
          Automatisk avslag
        </RemixLink>
      )}
    </div>
  );
}
