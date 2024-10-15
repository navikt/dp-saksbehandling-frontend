import { useMeldingOmVedtakTekst } from "~/hooks/useMeldingOmVedtakTekst";
import type { ISanityBrevBlokk } from "~/sanity/sanity-types";
import type { IUtvidetBeskrivelse } from "~/context/melding-om-vedtak-context";
import { UtvidetBeskrivelseInput } from "~/components/utvidet-beskrivelser/UtvidetBeskrivelseInput";

export function UtvidetBeskrivelser(props: { brevBlokker: ISanityBrevBlokk[] }) {
  const { utvidetBeskrivelser, setUtvidetBeskrivelser } = useMeldingOmVedtakTekst();

  function oppdaterUtvidetBeskrivelse(oppdatertBeskrivelse: IUtvidetBeskrivelse) {
    let oppdatertUtvidetBeskrivelser = [...utvidetBeskrivelser];

    const utvidetBeskrivelseIndex = utvidetBeskrivelser.findIndex(
      (beskrivelse) => beskrivelse.brevblokkId === oppdatertBeskrivelse.brevblokkId,
    );

    if (utvidetBeskrivelseIndex !== -1) {
      const oppdatertElement = oppdatertUtvidetBeskrivelser[utvidetBeskrivelseIndex];
      oppdatertElement.tekst = oppdatertBeskrivelse.tekst;
      oppdatertElement.sistLagretTidspunkt =
        oppdatertBeskrivelse.sistLagretTidspunkt || oppdatertElement.sistLagretTidspunkt;
    } else {
      oppdatertUtvidetBeskrivelser = [...utvidetBeskrivelser, oppdatertBeskrivelse];
    }

    setUtvidetBeskrivelser(oppdatertUtvidetBeskrivelser);
  }

  return (
    <div>
      {props.brevBlokker?.map((blokk) => {
        const utvidetBeskrivelse = utvidetBeskrivelser.find(
          (beskrivelse) => beskrivelse.brevblokkId === blokk.textId,
        );

        return (
          blokk.utvidetBeskrivelse && (
            <UtvidetBeskrivelseInput
              key={blokk.textId}
              brevblokkId={blokk.textId}
              label={`Utvidet beskrivelse for ${blokk.title ? blokk.title : blokk.textId}`}
              updateContext={(utvidetBeskrivelse) => oppdaterUtvidetBeskrivelse(utvidetBeskrivelse)}
              verdi={utvidetBeskrivelse?.tekst || ""}
              sistLagretTidspunkt={utvidetBeskrivelse?.sistLagretTidspunkt}
            />
          )
        );
      })}
    </div>
  );
}
