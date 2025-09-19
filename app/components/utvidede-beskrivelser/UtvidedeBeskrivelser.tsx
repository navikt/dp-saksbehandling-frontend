import { Detail } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";

import { components } from "../../../openapi/melding-om-vedtak-typer";

type IUtvidetBeskrivelse = components["schemas"]["UtvidetBeskrivelse"];

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"];
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidedeBeskrivelser: (utvidedeBeskrivelser: IUtvidetBeskrivelse[]) => void;
  readOnly?: boolean;
}

export function UtvidedeBeskrivelser(props: IProps) {
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

  return props.utvidedeBeskrivelser.map((utvidetBeskrivelse) => (
    <UtvidetBeskrivelseInput
      key={utvidetBeskrivelse.brevblokkId}
      readOnly={props.readOnly}
      meldingOmVedtak={props.meldingOmVedtak}
      utvidetBeskrivelse={utvidetBeskrivelse}
      updateContext={(utvidetBeskrivelse) => oppdaterUtvidetBeskrivelse(utvidetBeskrivelse)}
      label={
        <div>
          {utvidetBeskrivelse.tittel}
          <Detail textColor="subtle">Utvidet beskrivelse</Detail>
        </div>
      }
    />
  ));
}
