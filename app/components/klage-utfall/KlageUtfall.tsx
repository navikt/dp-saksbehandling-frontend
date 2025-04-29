import { Radio, RadioGroup } from "@navikt/ds-react";
import { Fragment } from "react";

import { KlageOpplysning } from "~/components/klage-opplysning/KlageOpplysning";
import { MeldingOmVedtakPreview } from "~/components/melding-om-vedtak-preview/MeldingOmVedtakPreview";
import { hentKlageOppgave } from "~/models/saksbehandling.server";

import { mockMeldingerOmVedtak } from "../../../mocks/data/mock-melding-om-vedtak";
import styles from "./KlageUtfall.module.css";

interface IProps {
  klageOppgave: Awaited<ReturnType<typeof hentKlageOppgave>>;
}

export function KlageUtfall({ klageOppgave }: IProps) {
  return (
    <div className={styles.utfallContainer}>
      <div className={"m-2"}>
        <RadioGroup legend={"Utfall"} size="small" defaultValue={klageOppgave.utfall.verdi}>
          {klageOppgave.utfall.tilgjeneligeUtfall.map((valg) => (
            <Radio key={valg} value={valg}>
              {valg}
            </Radio>
          ))}
        </RadioGroup>

        {klageOppgave.utfallOpplysninger.map((opplysning) => (
          <Fragment key={opplysning.id}>
            {opplysning.navn}
            <KlageOpplysning opplysning={opplysning} oppgaveId={klageOppgave.id} />
          </Fragment>
        ))}
      </div>
      <MeldingOmVedtakPreview
        html={mockMeldingerOmVedtak[0].melding.html}
        utvidedeBeskrivelser={[]}
      />
    </div>
  );
}
