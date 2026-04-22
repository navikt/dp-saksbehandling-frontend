import { Button, Heading, Radio, RadioGroup, Select, Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { Form, useLocation } from "react-router";

import { NyOppfolgingFelter } from "~/components/ny-oppfolging-felter/NyOppfolgingFelter";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForFerdigstillInnsending, NyBehandlingType } from "~/utils/validering.util";

interface IProps {
  setVisSkjema: (visSkjema: boolean) => void;
  lovligeSaker: components["schemas"]["Innsending"]["lovligeSaker"];
  medBehandling: boolean;
}

export function FerdigstillInnsendingSkjema({ lovligeSaker, setVisSkjema, medBehandling }: IProps) {
  const { pathname } = useLocation();
  const { behandlingId } = useTypeSafeParams();
  const { aktivtOppgaveSok } = useSaksbehandler();


  const ferdigstillInnsendingSkjema = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForFerdigstillInnsending(),
    defaultValues: {
      _action: "ferdigstill-innsending",
      behandlingId,
      sakId: "",
      behandlingsvariant: (medBehandling ? "" : "INGEN") as NyBehandlingType,
      vurdering: "",
      aktivtOppgaveSok,
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

      <Form {...ferdigstillInnsendingSkjema.getFormProps()} className="flex flex-col gap-4">
        <Select
          {...ferdigstillInnsendingSkjema.field("sakId").getInputProps()}
          label="SakID"
          size="small"
          description="Velg saken innsendingen skal knyttes til"
          error={ferdigstillInnsendingSkjema.field("sakId").error()}
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

        {medBehandling && (
          <RadioGroup
            {...ferdigstillInnsendingSkjema.field("behandlingsvariant").getInputProps()}
            error={ferdigstillInnsendingSkjema.field("behandlingsvariant").error()}
            size="small"
            legend="Behandlingstype"
            onChange={(val) => {
              ferdigstillInnsendingSkjema.field("behandlingsvariant").setValue(val);
            }}
          >
            <Radio value="RETT_TIL_DAGPENGER_MANUELL">Manuell behandling</Radio>
            <Radio value="RETT_TIL_DAGPENGER_REVURDERING">Revurdering</Radio>
            <Radio value="KLAGE">Klage</Radio>
            <Radio value="OPPFOLGING">Oppfølging</Radio>
          </RadioGroup>
        )}

        <Textarea
          {...ferdigstillInnsendingSkjema.field("vurdering").getInputProps()}
          error={ferdigstillInnsendingSkjema.field("vurdering").error()}
          resize="vertical"
          label="Vurdering"
        />

        {ferdigstillInnsendingSkjema.field("behandlingsvariant").value() === "OPPFOLGING" && (
          <>
            <Heading size="xsmall" level="4">
              Ny oppfølging
            </Heading>

            <NyOppfolgingFelter form={ferdigstillInnsendingSkjema} />
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
            loading={ferdigstillInnsendingSkjema.formState.isSubmitting}
          >
            Ferdigstill
          </Button>
        </div>
      </Form>
    </div>
  );
}
