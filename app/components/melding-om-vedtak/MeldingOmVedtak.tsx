import { useState } from "react";

import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/melding-om-vedtak-typer";
import { UtvidedeBeskrivelser } from "../utvidede-beskrivelser/UtvidedeBeskrivelser";
import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { meldingOmVedtak, oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<
    components["schemas"]["UtvidetBeskrivelse"][]
  >(meldingOmVedtak?.utvidedeBeskrivelser ?? []);
  const minOppgave = oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName;

  return (
    <>
      <div className={styles.meldingOmVedtakContainer}>
        <UtvidedeBeskrivelser
          utvidedeBeskrivelser={utvidedeBeskrivelser}
          setUtvidedeBeskrivelser={setUtvidedeBeskrivelser}
          readOnly={oppgave.tilstand !== "UNDER_BEHANDLING" || !minOppgave}
        />

        <MeldingOmVedtakPreview
          utvidedeBeskrivelser={utvidedeBeskrivelser}
          html={meldingOmVedtak?.html || ""}
        />
      </div>
    </>
  );
}
