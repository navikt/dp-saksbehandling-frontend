import { Detail } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/melding-om-vedtak/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import { useUtvidedeBeskrivelser } from "~/hooks/useUtvidedeBeskrivelser";
import { ISanityBrevMal } from "~/sanity/sanity-types";

import { components } from "../../../../openapi/melding-om-vedtak-typer";

interface IProps {
  meldingOmVedtak?: components["schemas"]["MeldingOmVedtakResponse"];
  readOnly?: boolean;
  sanityBrevMaler: ISanityBrevMal[];
}

export function UtvidedeBeskrivelser(props: IProps) {
  const { utvidedeBeskrivelser } = useUtvidedeBeskrivelser();

  return utvidedeBeskrivelser.map((utvidetBeskrivelse) => (
    <UtvidetBeskrivelseInput
      key={utvidetBeskrivelse.brevblokkId}
      readOnly={props.readOnly}
      meldingOmVedtak={props.meldingOmVedtak}
      utvidetBeskrivelse={utvidetBeskrivelse}
      sanityBrevMaler={props.sanityBrevMaler}
      label={
        <div>
          {utvidetBeskrivelse.tittel}
          <Detail textColor="subtle">Utvidet beskrivelse</Detail>
        </div>
      }
    />
  ));
}
