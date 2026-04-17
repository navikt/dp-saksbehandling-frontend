import {
  Button,
  Checkbox,
  DatePicker,
  Heading,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  TextField,
} from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { components } from "openapi/saksbehandling-typer";
import { Form, useLocation } from "react-router";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForFerdigstillInnsending } from "~/utils/validering.util";

interface IProps {
  setVisSkjema: (visSkjema: boolean) => void;
  lovligeSaker: components["schemas"]["Innsending"]["lovligeSaker"];
}

export function FerdigstillInnsendingSkjema({ lovligeSaker, setVisSkjema }: IProps) {
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
      behandlingsvariant: "" as unknown as
        | "RETT_TIL_DAGPENGER_MANUELL"
        | "RETT_TIL_DAGPENGER_REVURDERING"
        | "KLAGE"
        | "GENERELL_OPPGAVE",
      vurdering: "",
      aktivtOppgaveSok,
      nyOppgaveTittel: "",
      nyOppgaveEmneknagg: "",
      nyOppgaveBeskrivelse: "",
      nyOppgaveFrist: "",
      nyOppgaveTildelSammeSaksbehandler: false as boolean,
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
          <Radio value="GENERELL_OPPGAVE">Generell oppgave</Radio>
        </RadioGroup>

        <Textarea
          {...ferdigstillInnsendingSkjema.field("vurdering").getInputProps()}
          error={ferdigstillInnsendingSkjema.field("vurdering").error()}
          resize="vertical"
          label="Vurdering"
        />

        {ferdigstillInnsendingSkjema.field("behandlingsvariant").value() === "GENERELL_OPPGAVE" && (
          <>
            <Heading size="xsmall" level="4">
              Ny generell oppgave
            </Heading>

            <TextField
              {...ferdigstillInnsendingSkjema.field("nyOppgaveTittel").getInputProps()}
              error={ferdigstillInnsendingSkjema.field("nyOppgaveTittel").error()}
              label="Tittel"
              size="small"
            />

            <Textarea
              {...ferdigstillInnsendingSkjema.field("nyOppgaveBeskrivelse").getInputProps()}
              error={ferdigstillInnsendingSkjema.field("nyOppgaveBeskrivelse").error()}
              resize="vertical"
              label="Beskrivelse"
              size="small"
            />

            <TextField
              {...ferdigstillInnsendingSkjema.field("nyOppgaveEmneknagg").getInputProps()}
              error={ferdigstillInnsendingSkjema.field("nyOppgaveEmneknagg").error()}
              label="Emneknagg"
              size="small"
            />

            <DatePicker>
              <DatePicker.Input
                {...ferdigstillInnsendingSkjema.field("nyOppgaveFrist").getInputProps()}
                error={ferdigstillInnsendingSkjema.field("nyOppgaveFrist").error()}
                label="Frist"
                size="small"
              />
            </DatePicker>

            <Checkbox
              size="small"
              name="nyOppgaveTildelSammeSaksbehandler"
              checked={
                !!ferdigstillInnsendingSkjema.field("nyOppgaveTildelSammeSaksbehandler").value()
              }
              onChange={(e) => {
                ferdigstillInnsendingSkjema
                  .field("nyOppgaveTildelSammeSaksbehandler")
                  .setValue(e.currentTarget.checked);
              }}
            >
              Tildel samme saksbehandler
            </Checkbox>
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
