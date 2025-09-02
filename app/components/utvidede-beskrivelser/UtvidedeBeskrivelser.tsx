import { Button, Checkbox, Detail, Radio, RadioGroup } from "@navikt/ds-react";
import { Form } from "react-router";

import { UtvidetBeskrivelseInput } from "~/components/utvidede-beskrivelser/UtvidetBeskrivelseInput";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/melding-om-vedtak-typer";

type IUtvidetBeskrivelse = components["schemas"]["UtvidetBeskrivelse"];

export function UtvidedeBeskrivelser(props: {
  utvidedeBeskrivelser: IUtvidetBeskrivelse[];
  setUtvidedeBeskrivelser: (utvidedeBeskrivelser: IUtvidetBeskrivelse[]) => void;
  readOnly?: boolean;
}) {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  // const meldingOmVedtakForm = useForm({
  //   schema: hentValideringForKlageOpplysningSkjema(opplysning),
  //   method: "post",
  //   defaultValues: {
  //     verdi: formaterOpplysningVerdi(opplysning),
  //     opplysningId: opplysning.opplysningId,
  //     datatype: opplysning.type,
  //     behandlingId: behandlingId,
  //   },
  // });
  // useEffect(
  //     () =>
  //       meldingOmVedtakForm.subscribe.value((formData) => {
  //         meldingOmVedtakForm.submit({ name: "verdi", value: formData.verdi });
  //       }),
  //     [],
  //   );

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
      <Form method="post">
        <input name="_action" value="lagre-melding-om-vedtak-kilde" hidden={true} readOnly={true} />
        <input name="oppgave-id" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
        <RadioGroup
          name="melding-om-vedtak-kilde"
          legend="Send melding om vedtak til bruker"
          size="small"
          readOnly={props.readOnly}
          defaultValue={oppgave.meldingOmVedtakKilde}
        >
          <Radio value="DP_SAK">Som brev via DP-sak</Radio>
          <Radio value="GOSYS">Som brev via Gosys</Radio>
          <Radio value="INGEN">Ikke send melding til bruker</Radio>
        </RadioGroup>
        <Button type="submit">Lagre :)</Button>
      </Form>
      {oppgave.meldingOmVedtakKilde == "GOSYS" && (
        <Form method="post">
          <input name="_action" value="lagre-godkjent-brev-i-gosys" hidden={true} readOnly={true} />
          <input name="oppgave-id" value={oppgave.oppgaveId} hidden={true} readOnly={true} />
          <Checkbox name="godkjent-brev" size="small">
            Beslutter har godkjent brev i Gosys
          </Checkbox>
          <Button type="submit">Lagre :)</Button>
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
