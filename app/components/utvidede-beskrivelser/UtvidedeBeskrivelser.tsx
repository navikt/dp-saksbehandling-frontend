import { Detail } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import type { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";
import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import type { ISanityBrevBlokk } from "~/sanity/sanity-types";

export function UtvidedeBeskrivelser(props: {
  brevBlokker: ISanityBrevBlokk[];
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
      {props.brevBlokker?.map((blokk) => {
        const utvidetBeskrivelse = utvidedeBeskrivelser.find(
          (beskrivelse) => beskrivelse.brevblokkId === blokk.textId,
        );

        return (
          blokk.utvidetBeskrivelse && (
            <UtvidetBeskrivelseInput
              key={blokk.textId}
              brevblokkId={blokk.textId}
              readOnly={props.readOnly}
              label={
                <div>
                  {blokk.title ? blokk.title : blokk.textId}
                  <Detail textColor="subtle">Utvidet beskrivelse</Detail>
                </div>
              }
              updateContext={(utvidetBeskrivelse) => oppdaterUtvidetBeskrivelse(utvidetBeskrivelse)}
              verdi={utvidetBeskrivelse?.tekst || ""}
              sistEndretTidspunkt={utvidetBeskrivelse?.sistEndretTidspunkt}
            />
          )
        );
      })}
    </div>
  );
}
