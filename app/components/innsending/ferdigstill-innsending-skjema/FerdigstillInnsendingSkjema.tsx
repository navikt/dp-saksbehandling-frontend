import { Button, Heading, Radio, RadioGroup, Select, Textarea } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { Form, useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForFerdigstillInnsending } from "~/utils/validering.util";

interface IProps {
  medBehandling: boolean;
  setFerdigstillMedBehandling: (ferdigstillBehandling: boolean | undefined) => void;
  lovligeSaker: components["schemas"]["Innsending"]["lovligeSaker"];
}

export function FerdigstillInnsendingSkjema({
  medBehandling,
  lovligeSaker,
  setFerdigstillMedBehandling,
}: IProps) {
  const { pathname } = useLocation();
  const { behandlingId } = useTypeSafeParams();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const ferdigstillInnsendingSkjema = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForFerdigstillInnsending(medBehandling),
    defaultValues: {
      _action: "ferdigstill-innsending",
      behandlingId,
      sakId: "",
      behandlingType: medBehandling ? ("" as unknown as "RETT_TIL_DAGPENGER" | "KLAGE") : "INGEN",
      vurdering: "",
      aktivtOppgaveSok,
    },
  });

  return (
    <div className="flex flex-col gap-4 rounded-(--ax-radius-8) border border-(--ax-border-info-subtle)! bg-(--ax-bg-info-moderate)! p-2">
      <Heading size="xsmall" level="3">
        {medBehandling ? "Opprett ny behandling" : "Ferdigstill uten behandling"}
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
            {...ferdigstillInnsendingSkjema.field("behandlingType").getInputProps()}
            error={ferdigstillInnsendingSkjema.field("behandlingType").error()}
            size="small"
            className="aksel--horisontal"
            legend="Behandlingstype"
          >
            <Radio value="RETT_TIL_DAGPENGER">Rett til dagpenger</Radio>
            <Radio value="KLAGE">Klage</Radio>
          </RadioGroup>
        )}
        <Textarea
          {...ferdigstillInnsendingSkjema.field("vurdering").getInputProps()}
          error={ferdigstillInnsendingSkjema.field("vurdering").error()}
          resize="vertical"
          label="Vurdering"
        />

        <div className="flex gap-2">
          <Button
            type="button"
            variant="secondary"
            size="small"
            onClick={() => setFerdigstillMedBehandling(undefined)}
          >
            Avbryt
          </Button>

          <Button
            type="submit"
            variant="primary"
            size="small"
            loading={ferdigstillInnsendingSkjema.formState.isSubmitting}
          >
            {medBehandling ? "Opprett ny behandling" : "Ferdigstill"}
          </Button>
        </div>
      </Form>
    </div>
  );
}
