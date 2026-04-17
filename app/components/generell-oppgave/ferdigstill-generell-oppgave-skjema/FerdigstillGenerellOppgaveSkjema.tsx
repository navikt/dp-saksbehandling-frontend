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
import { hentValideringForFerdigstillGenerellOppgave } from "~/utils/validering.util";

interface IProps {
  onAvbryt: () => void;
  lovligeSaker?: components["schemas"]["TynnSak"][];
}

export function FerdigstillGenerellOppgaveSkjema({ onAvbryt, lovligeSaker }: IProps) {
  const { pathname } = useLocation();
  const { behandlingId } = useTypeSafeParams();
  const { aktivtOppgaveSok } = useSaksbehandler();

  const ferdigstillSkjema = useForm({
    method: "post",
    action: pathname,
    submitSource: "state",
    schema: hentValideringForFerdigstillGenerellOppgave(),
    defaultValues: {
      _action: "ferdigstill-generell-oppgave",
      behandlingId,
      sakId: "",
      vurdering: "",
      aktivtOppgaveSok,
      behandlingsvariant: "" as unknown as components["schemas"]["BehandlingVariant"],
      nyOppgaveTittel: "",
      nyOppgaveEmneknagg: "",
      nyOppgaveBeskrivelse: "",
      nyOppgaveFrist: "",
      nyOppgaveTildelSammeSaksbehandler: false as boolean,
    },
  });

  const valgtVariant = ferdigstillSkjema.field("behandlingsvariant").value();

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
            description="Velg saken oppgaven skal knyttes til"
            error={ferdigstillSkjema.field("sakId").error()}
          >
            <option value="">Velg sak</option>
            {lovligeSaker.map(({ sakId, opprettetDato }) => (
              <option key={sakId} value={sakId}>
                {formaterTilNorskDato(opprettetDato)} – {sakId}
              </option>
            ))}
          </Select>
        )}

        <RadioGroup
          {...ferdigstillSkjema.field("behandlingsvariant").getInputProps()}
          error={ferdigstillSkjema.field("behandlingsvariant").error()}
          size="small"
          legend="Behandlingstype"
        >
          <Radio value="RETT_TIL_DAGPENGER_MANUELL">Manuell behandling</Radio>
          <Radio value="RETT_TIL_DAGPENGER_REVURDERING">Revurdering</Radio>
          <Radio value="KLAGE">Klage</Radio>
          <Radio value="GENERELL_OPPGAVE">Generell oppgave</Radio>
        </RadioGroup>

        <Textarea
          {...ferdigstillSkjema.field("vurdering").getInputProps()}
          error={ferdigstillSkjema.field("vurdering").error()}
          resize="vertical"
          label="Vurdering"
        />

        {valgtVariant === "GENERELL_OPPGAVE" && (
          <>
            <Heading size="xsmall" level="4">
              Ny generell oppgave
            </Heading>

            <TextField
              {...ferdigstillSkjema.field("nyOppgaveTittel").getInputProps()}
              error={ferdigstillSkjema.field("nyOppgaveTittel").error()}
              label="Tittel"
              size="small"
            />

            <Textarea
              {...ferdigstillSkjema.field("nyOppgaveBeskrivelse").getInputProps()}
              error={ferdigstillSkjema.field("nyOppgaveBeskrivelse").error()}
              resize="vertical"
              label="Beskrivelse"
              size="small"
            />

            <TextField
              {...ferdigstillSkjema.field("nyOppgaveEmneknagg").getInputProps()}
              error={ferdigstillSkjema.field("nyOppgaveEmneknagg").error()}
              label="Emneknagg"
              size="small"
            />

            <DatePicker>
              <DatePicker.Input
                {...ferdigstillSkjema.field("nyOppgaveFrist").getInputProps()}
                error={ferdigstillSkjema.field("nyOppgaveFrist").error()}
                label="Frist"
                size="small"
              />
            </DatePicker>

            <Checkbox
              size="small"
              name="nyOppgaveTildelSammeSaksbehandler"
              checked={!!ferdigstillSkjema.field("nyOppgaveTildelSammeSaksbehandler").value()}
              onChange={(e) => {
                ferdigstillSkjema
                  .field("nyOppgaveTildelSammeSaksbehandler")
                  .setValue(e.currentTarget.checked);
              }}
            >
              Tildel samme saksbehandler
            </Checkbox>
          </>
        )}

        <div className="flex gap-2">
          <Button type="button" variant="secondary" size="small" onClick={onAvbryt}>
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
