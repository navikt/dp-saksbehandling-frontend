import { HttpProblemAlert } from "~/components/http-problem-alert/HttpProblemAlert";
import { MeldingOmVedtakKilde } from "~/components/melding-om-vedtak/MeldingOmVedtakKilde";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak/MeldingOmVedtakPreview";
import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";
import { useOppgave } from "~/hooks/useOppgave";
import { isAlert } from "~/utils/type-guards";

import { MeldingOmVedtakDPSak } from "../melding-om-vedtak/MeldingOmVedtakDPSak";
import { OppgaveValgFerdigstillKlage } from "../oppgave-valg/OppgaveValgFerdigstillKlage";
import styles from "./MeldingOmVedtakKlage.module.css";

export function MeldingOmVedtakKlage() {
  const { oppgave, readonly } = useOppgave();
  const { utvidedeBeskrivelser, meldingOmVedtak } = useMeldingOmVedtak();

  return (
    <div className={styles.meldingOmVedtakContainer}>
      <div className="flex flex-col gap-6">
        <MeldingOmVedtakKilde readOnly={readonly} oppgave={oppgave} />
        {oppgave.meldingOmVedtakKilde === "DP_SAK" && <MeldingOmVedtakDPSak />}
        <OppgaveValgFerdigstillKlage
          oppgave={oppgave}
          buttonSize="small"
          buttonVariant="primary"
          className=" "
          readOnly={readonly}
        />
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
