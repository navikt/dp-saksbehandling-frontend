import { Button } from "@navikt/ds-react";

import { KlageOpplysning } from "~/components/klage/klage-opplysning/KlageOpplysning";
import { OppgaveValgFerdigstillBehandlingKlage } from "~/components/oppgave-valg/OppgaveValgFerdigstillBehandlingKlage";
import { OppgaveValgFerdigstillKlage } from "~/components/oppgave-valg/OppgaveValgFerdigstillKlage";
import { useOppgave } from "~/hooks/useOppgave";
import { hentKlage } from "~/models/saksbehandling.server";
import { erMedholdEllerDelvisMedhold, hentKlageFerdigstillModus } from "~/utils/klage.utils";

import styles from "./KlageUtfall.module.css";

interface IProps {
  klage: Awaited<ReturnType<typeof hentKlage>>;
  readonly?: boolean;
  setAktivTab: (tab: string) => void;
}

export function KlageUtfall({ klage, readonly, setAktivTab }: IProps) {
  const { oppgave } = useOppgave();
  const skjulMeldingOmVedtak = erMedholdEllerDelvisMedhold(klage.utfall.verdi);
  const modus = hentKlageFerdigstillModus(klage.utfall.verdi, klage.tilstand);

  return (
    <div className={styles.utfallContainer}>
      {klage.utfallOpplysninger.map((opplysning) => (
        <KlageOpplysning
          key={opplysning.opplysningId}
          opplysning={opplysning}
          behandlingId={klage.behandlingId}
          readonly={readonly}
          visningType={"vertikal"}
        />
      ))}
      <div className="mt-4">
        {!skjulMeldingOmVedtak && (
          <Button
            variant="primary"
            size="small"
            disabled={readonly}
            onClick={() => setAktivTab("melding-om-vedtak")}
          >
            Skriv melding om vedtak
          </Button>
        )}

        {skjulMeldingOmVedtak && modus === "ferdigstill-behandling" && (
          <OppgaveValgFerdigstillBehandlingKlage
            oppgave={oppgave}
            buttonSize={"small"}
            buttonVariant={"primary"}
            className={"aksel--font-regular"}
            readOnly={readonly}
          />
        )}

        {skjulMeldingOmVedtak && modus === "fullfor-klage" && (
          <OppgaveValgFerdigstillKlage
            oppgave={oppgave}
            buttonSize={"small"}
            buttonVariant={"primary"}
            className={"aksel--font-regular"}
            readOnly={readonly}
            label={"Fullfør klage"}
          />
        )}
      </div>
    </div>
  );
}
