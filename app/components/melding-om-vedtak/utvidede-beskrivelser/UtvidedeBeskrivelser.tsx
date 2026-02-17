import { Detail } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/melding-om-vedtak/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";

interface IProps {
  readOnly?: boolean;
}

export function UtvidedeBeskrivelser(props: IProps) {
  const { utvidedeBeskrivelser } = useMeldingOmVedtak();

  return utvidedeBeskrivelser.map((utvidetBeskrivelse) => (
    <UtvidetBeskrivelseInput
      key={utvidetBeskrivelse.brevblokkId}
      readOnly={props.readOnly}
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
