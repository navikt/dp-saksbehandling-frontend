import { Detail } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";

import { components } from "../../../openapi/melding-om-vedtak-typer";

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"];
  readOnly?: boolean;
}

export function UtvidedeBeskrivelser(props: IProps) {
  const { utvidedeBeskrivelser } = useUtvidedeBeskrivelser();

  return utvidedeBeskrivelser.map((utvidetBeskrivelse) => (
    <UtvidetBeskrivelseInput
      key={utvidetBeskrivelse.brevblokkId}
      readOnly={props.readOnly}
      meldingOmVedtak={props.meldingOmVedtak}
      utvidetBeskrivelse={utvidetBeskrivelse}
      label={
        <div>
          {utvidetBeskrivelse.tittel}
          <Detail textColor="subtle">Utvidet beskrivelse</Detail>
        </div>
      }
    />
  ));
}
