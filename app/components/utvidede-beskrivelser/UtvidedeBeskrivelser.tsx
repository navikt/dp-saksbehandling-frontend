import { Detail } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import type { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";

export function UtvidedeBeskrivelser(props: {
  utvidetBeskrivelser: IUtvidetBeskrivelse[];
  readOnly?: boolean;
}) {
  return (
    <div>
      {props.utvidetBeskrivelser.map((utvidetBeskrivelse) => (
        <UtvidetBeskrivelseInput
          key={utvidetBeskrivelse.brevblokkId}
          brevblokkId={utvidetBeskrivelse.brevblokkId}
          readOnly={props.readOnly}
          label={
            <div>
              {utvidetBeskrivelse.tittel}
              <Detail textColor="subtle">Utvidet beskrivelse</Detail>
            </div>
          }
          verdi={utvidetBeskrivelse?.tekst || ""}
          sistEndretTidspunkt={utvidetBeskrivelse?.sistEndretTidspunkt}
        />
      ))}
    </div>
  );
}
