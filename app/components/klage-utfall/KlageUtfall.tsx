import { Fragment } from "react";

import { KlageOpplysning } from "~/components/klage-opplysning/KlageOpplysning";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { hentKlageOppgave } from "~/models/saksbehandling.server";

import styles from "./KlageUtfall.module.css";

interface IProps {
  klageOppgave: Awaited<ReturnType<typeof hentKlageOppgave>>;
}

export function KlageUtfall({ klageOppgave }: IProps) {
  return (
    <div className={styles.utfallContainer}>
      <div>
        {klageOppgave.utfallOpplysninger.map((opplysning) => (
          <Fragment key={opplysning.id}>
            {opplysning.navn}
            <KlageOpplysning opplysning={opplysning} oppgaveId={klageOppgave.id} />
          </Fragment>
        ))}
      </div>

      <MeldingOmVedtakPreview
        // @ts-expect-error TODO Fix type error
        html={klageOppgave.meldingOmVedtak?.html}
        // @ts-expect-error TODO Fix type error
        utvidedeBeskrivelser={klageOppgave.meldingOmVedtak?.utvidedeBeskrivelser}
      />
    </div>
  );
}
