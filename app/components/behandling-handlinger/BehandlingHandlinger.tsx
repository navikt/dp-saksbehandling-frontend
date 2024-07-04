import { Button } from "@navikt/ds-react";
import styles from "./BehandlingHandlinger.module.css";
import type { IBehandlingValg } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import { BehandlingBekreftModal } from "~/components/behandling-bekreft-modal/BehandlingBekreftModal";
import { useState } from "react";

export function BehandlingHandlinger() {
  const [aktivModalId, setAktivModalId] = useState<IBehandlingValg | undefined>();

  return (
    <div className={styles.container}>
      <Button
        type="button"
        variant="secondary"
        size="small"
        onClick={() => setAktivModalId("avbryt-behandling")}
      >
        Send til Arena
      </Button>
      <Button
        type="button"
        variant="primary"
        size="small"
        onClick={() => setAktivModalId("godkjenn-behandling")}
      >
        Automatisk avslag
      </Button>

      <BehandlingBekreftModal aktivModalId={aktivModalId} setAktivModalId={setAktivModalId} />
    </div>
  );
}
