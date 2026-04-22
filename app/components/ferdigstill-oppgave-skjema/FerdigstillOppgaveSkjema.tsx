import { Button, Heading, Radio, RadioGroup, Select, Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { Form, useLocation } from "react-router";

import { NyOppfolgingFelter } from "~/components/ny-oppfolging-felter/NyOppfolgingFelter";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForFerdigstillOppgave, NyBehandlingType } from "~/utils/validering.util";

interface IProps {
  setVisSkjema: (visSkjema: boolean) => void;
  lovligeSaker?: components["schemas"]["TynnSak"][];
  medBehandling: boolean;
  variant: "ferdigstill-innsending" | "ferdigstill-oppfolging";
}

export function FerdigstillOppgaveSkjema({
  lovligeSaker,
  setVisSkjema,
  medBehandling,
  variant,
}: IProps) {
  const { pathname } = useLocation();
  const { behandlingId } = useTypeSafeParams();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const ferdigstillSkjema = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForFerdigstillOppgave(variant),
    defaultValues: {
      _action: variant,
      behandlingId,
      sakId: "",
      vurdering: "",
      aktivtOppgaveSok,
      behandlingsvariant: (medBehandling ? "" : "INGEN") as NyBehandlingType,
      tittel: "",
      årsak: "",
      beskrivelse: "",
      frist: "",
      tildelSammeSaksbehandler: undefined,
    },
  });

  return (
    <div className="flex flex-col gap-4 rounded-(--ax-radius-8) border border-(--ax-border-info-subtle)! bg-(--ax-bg-info-moderate)! p-2">
      <Heading size="xsmall" level="3">
        Ferdigstill oppgave
      </Heading>

      <Form {...ferdigstillSkjema.getFormProps()} className="flex flex-col gap-4">
        {lovligeSaker && lovligeSaker.length > 0 && (
          <Select
            {...ferdigstillSkjema.field("sakId").getInputProps()}
            label="SakID"
            size="small"
            description={`Velg saken ${variant === "ferdigstill-innsending" ? "innsendingen" : "oppgaven"} skal knyttes til`}
            error={ferdigstillSkjema.field("sakId").error()}
          >
            <option hidden={true} value="">
              Velg sak
            </option>
            {lovligeSaker.map(({ sakId, opprettetDato }) => (
              <option key={sakId} value={sakId}>
                {formaterTilNorskDato(opprettetDato)} – {sakId}
              </option>
            ))}
          </Select>
        )}

        {medBehandling && (
          <RadioGroup
            {...ferdigstillSkjema.field("behandlingsvariant").getInputProps()}
            error={ferdigstillSkjema.field("behandlingsvariant").error()}
            size="small"
            legend="Behandlingstype"
            onChange={(val) => {
              ferdigstillSkjema.field("behandlingsvariant").setValue(val);
            }}
          >
            <Radio value="RETT_TIL_DAGPENGER_MANUELL">Manuell behandling</Radio>
            <Radio value="RETT_TIL_DAGPENGER_REVURDERING">Revurdering</Radio>
            <Radio value="KLAGE">Klage</Radio>
            <Radio value="OPPFOLGING">Oppfølging</Radio>
          </RadioGroup>
        )}

        <Textarea
          {...ferdigstillSkjema.field("vurdering").getInputProps()}
          error={ferdigstillSkjema.field("vurdering").error()}
          resize="vertical"
          label="Vurdering"
        />

        {ferdigstillSkjema.field("behandlingsvariant").value() === "OPPFOLGING" && (
          <>
            <Heading size="xsmall" level="4">
              Ny oppfølging
            </Heading>

            <NyOppfolgingFelter form={ferdigstillSkjema} />
          </>
        )}

        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            size="small"
            onClick={() => setVisSkjema(false)}
          >
            Avbryt
          </Button>

          <Button
            type="submit"
            variant="primary"
            size="small"
            loading={ferdigstillSkjema.formState.isSubmitting}
          >
            Ferdigstill
          </Button>
        </div>
      </Form>
    </div>
  );
}
