import { Checkbox, DatePicker, Select, Textarea, TextField } from "@navikt/ds-react";
import type { FormApi } from "@rvf/react-router";

import { gyldigeNyGenerellOppgaveÅrsaker } from "~/utils/validering.util";

interface INyGenerellOppgaveFelterProps {
  form: FormApi<Record<string, unknown>>;
}

export function NyGenerellOppgaveFelter({ form }: INyGenerellOppgaveFelterProps) {
  return (
    <>
      <TextField
        {...form.field("nyOppgaveTittel").getInputProps()}
        error={form.field("nyOppgaveTittel").error()}
        label="Tittel"
        size="small"
      />

      <Textarea
        {...form.field("nyOppgaveBeskrivelse").getInputProps()}
        error={form.field("nyOppgaveBeskrivelse").error()}
        resize="vertical"
        label="Beskrivelse"
        size="small"
      />

      <Select
        {...form.field("nyOppgaveEmneknagg").getInputProps()}
        error={form.field("nyOppgaveEmneknagg").error()}
        label="Emneknagg"
        size="small"
      >
        <option value="">Velg emneknagg</option>
        {gyldigeNyGenerellOppgaveÅrsaker.map((årsak) => (
          <option value={årsak} key={årsak}>
            {årsak}
          </option>
        ))}
      </Select>

      <DatePicker>
        <DatePicker.Input
          {...form.field("nyOppgaveFrist").getInputProps()}
          error={form.field("nyOppgaveFrist").error()}
          label="Frist"
          size="small"
        />
      </DatePicker>

      <Checkbox
        size="small"
        name="nyOppgaveTildelSammeSaksbehandler"
        checked={!!form.field("nyOppgaveTildelSammeSaksbehandler").value()}
        onChange={(e) => {
          form.field("nyOppgaveTildelSammeSaksbehandler").setValue(e.currentTarget.checked);
        }}
      >
        Tildel samme saksbehandler
      </Checkbox>
    </>
  );
}
