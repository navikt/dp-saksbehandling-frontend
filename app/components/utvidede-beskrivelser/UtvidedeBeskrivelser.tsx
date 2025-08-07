import { Detail, Radio, RadioGroup } from "@navikt/ds-react";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import { useMeldingOmVedtak } from "~/hooks/useMeldingOmVedtak";

import { components } from "../../../openapi/melding-om-vedtak-typer";

type IUtvidetBeskrivelse = components["schemas"]["UtvidetBeskrivelse"];

export function UtvidedeBeskrivelser(props: {
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidedeBeskrivelser: (utvidedeBeskrivelser: IUtvidetBeskrivelse[]) => void;
  readOnly?: boolean;
}) {
  const { meldingOmVedtakKilde, setMeldingOmVedtakKilde } = useMeldingOmVedtak();

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
    <div className="flex flex-col gap-6">
      <RadioGroup
        legend="Send melding om vedtak til bruker"
        size="small"
        onChange={setMeldingOmVedtakKilde}
        value={meldingOmVedtakKilde}
      >
        <Radio value="DP-SAK">Som brev via DP-sak</Radio>
        <Radio value="GOSYS">Som brev via Gosys</Radio>
        <Radio value="INGEN">Ikke send melding til bruker</Radio>
      </RadioGroup>
      <hr className="border-(--a-border-subtle)" />
      {props.utvidedeBeskrivelser.map((utvidetBeskrivelse) => (
        <UtvidetBeskrivelseInput
          key={utvidetBeskrivelse.brevblokkId}
          readOnly={props.readOnly}
          utvidetBeskrivelse={utvidetBeskrivelse}
          updateContext={(utvidetBeskrivelse) => oppdaterUtvidetBeskrivelse(utvidetBeskrivelse)}
          label={
            <div>
              {utvidetBeskrivelse.tittel}
              <Detail textColor="subtle">Utvidet beskrivelse</Detail>
            </div>
          }
        />
      ))}
    </div>
  );
}
