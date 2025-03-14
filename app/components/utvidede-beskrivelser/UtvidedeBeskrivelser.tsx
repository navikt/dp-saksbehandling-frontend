import { Detail } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import { IUtvidetBeskrivelse } from "~/models/melding-om-vedtak.server";

export function UtvidedeBeskrivelser(props: {
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidedeBeskrivelser: (utvidedeBeskrivelser: IUtvidetBeskrivelse[]) => void;
  readOnly?: boolean;
}) {
  function oppdaterUtvidetBeskrivelse(oppdatertBeskrivelse: IUtvidetBeskrivelse) {
    let oppdatertUtvidedeBeskrivelser = [...props.utvidedeBeskrivelser];

    const utvidetBeskrivelseIndex = props.utvidedeBeskrivelser.findIndex(
      (beskrivelse) => beskrivelse.brevblokkId === oppdatertBeskrivelse.brevblokkId,
    );

    if (utvidetBeskrivelseIndex !== -1) {
      const oppdatertElement = oppdatertUtvidedeBeskrivelser[utvidetBeskrivelseIndex];
      oppdatertElement.tekst = oppdatertBeskrivelse.tekst;
      oppdatertElement.sistEndretTidspunkt =
        oppdatertBeskrivelse.sistEndretTidspunkt || oppdatertElement.sistEndretTidspunkt;
    } else {
      oppdatertUtvidedeBeskrivelser = [...props.utvidedeBeskrivelser, oppdatertBeskrivelse];
    }

    props.setUtvidedeBeskrivelser(oppdatertUtvidedeBeskrivelser);
  }

  return (
    <div>
      {props.utvidedeBeskrivelser.map((utvidetBeskrivelse) => (
        <UtvidetBeskrivelseInput
          key={utvidetBeskrivelse.brevblokkId}
          brevblokkId={utvidetBeskrivelse.brevblokkId}
          readOnly={props.readOnly}
          updateContext={(utvidetBeskrivelse) => oppdaterUtvidetBeskrivelse(utvidetBeskrivelse)}
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
