import { JSX, useState } from "react";

import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { IAlert } from "~/context/alert-context";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { isAlert } from "~/utils/type-guards";

import { components } from "../../../openapi/melding-om-vedtak-typer";
import { MeldingOmVedtakKilde } from "../melding-om-vedtak-kilde/MeldingOmVedtakKilde";
import { UtvidedeBeskrivelser } from "../utvidede-beskrivelser/UtvidedeBeskrivelser";
import styles from "./MeldingOmVedtak.module.css";

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
}

export function MeldingOmVedtak({ meldingOmVedtak }: IProps): JSX.Element {
  const { saksbehandler } = useTypedRouteLoaderData("root");
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const initialUtvidedeBeskrivelser: components["schemas"]["UtvidetBeskrivelse"][] = !isAlert(
    meldingOmVedtak,
  )
    ? (meldingOmVedtak?.utvidedeBeskrivelser ?? [])
    : [];

  const [utvidedeBeskrivelser, setUtvidedeBeskrivelser] = useState<
    components["schemas"]["UtvidetBeskrivelse"][]
  >(initialUtvidedeBeskrivelser);

  const minOppgave = oppgave.saksbehandler?.ident === saksbehandler.onPremisesSamAccountName;
  const readOnly = oppgave.tilstand !== "UNDER_BEHANDLING" || !minOppgave;

  return (
    <div className={styles.meldingOmVedtakContainer}>
      <div className="flex flex-col gap-6">
        <MeldingOmVedtakKilde readOnly={readOnly} />
        {oppgave.meldingOmVedtakKilde === "DP_SAK" && (
          <>
            {utvidedeBeskrivelser.length > 0 && <hr className="border-(--a-border-subtle)" />}
            <UtvidedeBeskrivelser
              utvidedeBeskrivelser={utvidedeBeskrivelser}
              setUtvidedeBeskrivelser={setUtvidedeBeskrivelser}
              readOnly={readOnly}
            />
          </>
        )}
      </div>

      <div className={styles.previewContainer}>
        {oppgave.meldingOmVedtakKilde === "DP_SAK" &&
          (isAlert(meldingOmVedtak) ? (
            <HttpProblemAlert error={meldingOmVedtak} />
          ) : (
            <MeldingOmVedtakPreview
              utvidedeBeskrivelser={utvidedeBeskrivelser}
              html={meldingOmVedtak?.html || ""}
            />
          ))}
      </div>
    </div>
  );
}
