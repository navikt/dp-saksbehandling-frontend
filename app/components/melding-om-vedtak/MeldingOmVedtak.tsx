import { useState } from "react";

import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/melding-om-vedtak-typer";
import { MeldingOmVedtakKilde } from "../melding-om-vedtak-kilde/MeldingOmVedtakKilde";
import { UtvidedeBeskrivelser } from "../utvidede-beskrivelser/UtvidedeBeskrivelser";
import styles from "./MeldingOmVedtak.module.css";

export function MeldingOmVedtak() {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { meldingOmVedtak, oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<
    components["schemas"]["UtvidetBeskrivelse"][]
  >(meldingOmVedtak?.utvidedeBeskrivelser ?? []);
  const minOppgave = oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName;
  const readOnly = oppgave.tilstand !== "UNDER_BEHANDLING" || !minOppgave;

  function renderMeldingOmVedtakPreview() {
    switch (oppgave.meldingOmVedtakKilde) {
      case "DP_SAK":
        return (
          <MeldingOmVedtakPreview
            utvidedeBeskrivelser={utvidedeBeskrivelser}
            html={meldingOmVedtak?.html || ""}
          />
        );
      default:
        return <div className={styles.previewContainer} />;
    }
  }

  return (
    <>
      <div className={styles.meldingOmVedtakContainer}>
        <div className="flex flex-col gap-6">
          <MeldingOmVedtakKilde readOnly={readOnly} />
          <UtvidedeBeskrivelser
            utvidedeBeskrivelser={utvidedeBeskrivelser}
            setUtvidedeBeskrivelser={setUtvidedeBeskrivelser}
            readOnly={readOnly}
          />
        </div>
        {renderMeldingOmVedtakPreview()}
      </div>
    </>
  );
}
