import { useState } from "react";

import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/melding-om-vedtak-typer";
import { UtvidedeBeskrivelser } from "../utvidede-beskrivelser/UtvidedeBeskrivelser";
import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak() {
  const { meldingOmVedtak, oppgave } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.melding-om-vedtak",
  );

  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<
    components["schemas"]["UtvidetBeskrivelse"][]
  >(meldingOmVedtak?.utvidedeBeskrivelser ?? []);

  return (
    <>
      <div className={styles.meldingOmVedtakContainer}>
        <UtvidedeBeskrivelser
          utvidedeBeskrivelser={utvidedeBeskrivelser}
          setUtvidedeBeskrivelser={setUtvidedeBeskrivelser}
          readOnly={oppgave.tilstand !== "UNDER_BEHANDLING"}
        />

        <MeldingOmVedtakPreview
          utvidedeBeskrivelser={utvidedeBeskrivelser}
          html={meldingOmVedtak?.html || ""}
        />
      </div>
    </>
  );
}
