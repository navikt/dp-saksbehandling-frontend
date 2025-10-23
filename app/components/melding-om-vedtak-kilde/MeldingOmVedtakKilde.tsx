import { Checkbox, Radio, RadioGroup } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { Form } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import {
  hentValideringForGodkjentBrevSkjema,
  hentValideringForMeldingOmVedtakKildeSkjema,
} from "~/utils/validering.util";

interface IProps {
  readOnly?: boolean;
  oppgave: components["schemas"]["Oppgave"];
}

export function MeldingOmVedtakKilde({ readOnly, oppgave }: IProps) {
  const { saksbehandler } = useTypedRouteLoaderData("root");

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

  return (
    <>
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
          readOnly={readOnly}
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
            readOnly={
              !(
                oppgave.beslutter?.ident === saksbehandler.onPremisesSamAccountName &&
                oppgave.tilstand === "UNDER_KONTROLL"
              )
            }
            defaultChecked={oppgave.kontrollertBrev === "JA"}
          >
            Beslutter har godkjent brev i Gosys
          </Checkbox>
        </Form>
      )}
    </>
  );
}
