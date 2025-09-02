import { Checkbox, Detail, Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { Form } from "react-router";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import {
  hentValideringForGodkjentBrevSkjema,
  hentValideringForMeldingOmVedtakKildeSkjema,
} from "~/utils/validering.util";

import { components } from "../../../openapi/melding-om-vedtak-typer";

type IUtvidetBeskrivelse = components["schemas"]["UtvidetBeskrivelse"];

export function UtvidedeBeskrivelser(props: {
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidedeBeskrivelser: (utvidedeBeskrivelser: IUtvidetBeskrivelse[]) => void;
  readOnly?: boolean;
}) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const meldingOmVedtakKildeSkjema = useForm({
    method: "post",
    schema: hentValideringForMeldingOmVedtakKildeSkjema(),
    defaultValues: {
      oppgaveId: oppgave.oppgaveId,
      meldingOmVedtakKilde: oppgave.meldingOmVedtakKilde,
    },
  });

  const godkjentBrevSkjema = useForm({
    method: "post",
    schema: hentValideringForGodkjentBrevSkjema(),
    defaultValues: {
      oppgaveId: oppgave.oppgaveId,
    },
  });

  function handleChange() {
    godkjentBrevSkjema.submit();
  }

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
      <Form {...meldingOmVedtakKildeSkjema.getFormProps()}>
        <input name="_action" value="lagre-melding-om-vedtak-kilde" hidden={true} readOnly={true} />
        <input
          {...meldingOmVedtakKildeSkjema.field("oppgaveId").getInputProps()}
          hidden={true}
          readOnly={true}
        />
        <RadioGroup
          {...meldingOmVedtakKildeSkjema.field("meldingOmVedtakKilde").getInputProps()}
          size="small"
          readOnly={props.readOnly}
          onChange={() => meldingOmVedtakKildeSkjema.submit()}
          error={meldingOmVedtakKildeSkjema.field("meldingOmVedtakKilde").error()}
          legend="Send melding om vedtak til bruker"
        >
          <Radio value="DP_SAK">Som brev via DP-sak</Radio>
          <Radio value="GOSYS">Som brev via Gosys</Radio>
          <Radio value="INGEN">Ikke send melding til bruker</Radio>
        </RadioGroup>
      </Form>
      {oppgave.meldingOmVedtakKilde == "GOSYS" && (
        <Form {...godkjentBrevSkjema.getFormProps()}>
          <input name="_action" value="lagre-godkjent-brev-i-gosys" hidden={true} readOnly={true} />
          <input
            {...godkjentBrevSkjema.field("oppgaveId").getInputProps()}
            hidden={true}
            readOnly={true}
          />
          <Checkbox
            {...godkjentBrevSkjema.field("godkjentBrev").getInputProps()}
            onChange={handleChange}
            size="small"
            defaultChecked={oppgave.kontrollertBrev === "JA"}
          >
            Beslutter har godkjent brev i Gosys
          </Checkbox>
        </Form>
      )}
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
