import { components } from "~/../openapi/melding-om-vedtak-typer";
import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { MeldingOmVedtakDPSak } from "~/components/melding-om-vedtak/MeldingOmVedtakDPSak";
import { MeldingOmVedtakKilde } from "~/components/melding-om-vedtak/MeldingOmVedtakKilde";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak/MeldingOmVedtakPreview";
import { OppgaveFattVedtak } from "~/components/oppgave-fatt-vedtak/OppgaveFattVedtak";
import { OppgaveReturnerTilSaksbehandler } from "~/components/oppgave-returner-til-saksbehandler/OppgaveReturnerTilSaksbehandler";
import { OppgaveSendTilKontroll } from "~/components/oppgave-send-til-kontroll/OppgaveSendTilKontroll";
import { IAlert } from "~/context/alert-context";
import { useBehandling } from "~/hooks/useBehandling";
import { useOppgave } from "~/hooks/useOppgave";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";
import { ISanityBrevMal } from "~/sanity/sanity-types";
import { isAlert } from "~/utils/type-guards";

import styles from "./MeldingOmVedtak.module.css";

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"] | IAlert;
  sanityBrevMaler: ISanityBrevMal[];
}

export function MeldingOmVedtak({ meldingOmVedtak, sanityBrevMaler }: IProps) {
  const { oppgave, readonly } = useOppgave();
  const { behandling } = useBehandling();
  const { utvidedeBeskrivelser } = useUtvidedeBeskrivelser();

  const kanSendeTilKontroll =
    oppgave.tilstand === "UNDER_BEHANDLING" && behandling.kreverTotrinnskontroll;

  const kanFatteVedtak =
    (oppgave.tilstand === "UNDER_BEHANDLING" && !behandling.kreverTotrinnskontroll) ||
    oppgave.tilstand === "UNDER_KONTROLL";

  const kanReturnereTilSaksbehandler = oppgave.tilstand === "UNDER_KONTROLL";

  return (
    <div className={styles.meldingOmVedtakContainer}>
      <div className="flex flex-col gap-6">
        <MeldingOmVedtakKilde readOnly={readonly} oppgave={oppgave} />

        {oppgave.meldingOmVedtakKilde === "DP_SAK" && (
          <MeldingOmVedtakDPSak
            meldingOmVedtak={meldingOmVedtak}
            sanityBrevMaler={sanityBrevMaler}
          />
        )}

        <div className={"flex gap-2 border-t-1 border-(--ax-border-neutral-subtle) pt-4"}>
          {kanReturnereTilSaksbehandler && <OppgaveReturnerTilSaksbehandler />}
          {kanSendeTilKontroll && <OppgaveSendTilKontroll />}
          {kanFatteVedtak && <OppgaveFattVedtak />}
        </div>
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
