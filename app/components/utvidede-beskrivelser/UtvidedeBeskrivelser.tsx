import { Detail } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import type { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";

export function UtvidedeBeskrivelser(props: {
  utvidetBeskrivelser: IUtvidetBeskrivelse[];
  readOnly?: boolean;
}) {
  const { utvidedeBeskrivelser, setUtvidedeBeskrivelser } = useMeldingOmVedtakTekst();

  function oppdaterUtvidetBeskrivelse(oppdatertBeskrivelse: IUtvidetBeskrivelse) {
    let oppdatertUtvidedeBeskrivelser = [...utvidedeBeskrivelser];

    const utvidetBeskrivelseIndex = utvidedeBeskrivelser.findIndex(
      (beskrivelse) => beskrivelse.brevblokkId === oppdatertBeskrivelse.brevblokkId,
    );

    if (utvidetBeskrivelseIndex !== -1) {
      const oppdatertElement = oppdatertUtvidedeBeskrivelser[utvidetBeskrivelseIndex];
      oppdatertElement.tekst = oppdatertBeskrivelse.tekst;
      oppdatertElement.sistEndretTidspunkt =
        oppdatertBeskrivelse.sistEndretTidspunkt || oppdatertElement.sistEndretTidspunkt;
    } else {
      oppdatertUtvidedeBeskrivelser = [...utvidedeBeskrivelser, oppdatertBeskrivelse];
    }

    setUtvidedeBeskrivelser(oppdatertUtvidedeBeskrivelser);
  }

  return (
    <div>
      {props.utvidetBeskrivelser.map((utvidetBeskrivelse) => (
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
