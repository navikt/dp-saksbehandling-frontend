import { Checkbox, DatePicker, Select, Textarea, TextField, useDatepicker } from "@navikt/ds-react";
import { FormApi } from "@rvf/react-router";
import z from "zod";

import { formaterTilBackendDato, formaterTilNorskDato } from "~/utils/dato.utils";
import {
  gyldigeNyOppfølgingÅrsaker,
  hentValideringForNyOppfolgingSkjema,
} from "~/utils/validering.util";

type NyOppfolgingsSkjema = z.infer<ReturnType<typeof hentValideringForNyOppfolgingSkjema>>;

export function NyOppfolgingFelter({ form }: { form: FormApi<NyOppfolgingsSkjema> }) {
  const fristField = form.field("frist");
  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: fristField.value()
      ? new Date(formaterTilBackendDato(fristField.value()))
      : undefined,
    onDateChange: (date) => {
      if (date) {
        fristField.setValue(formaterTilNorskDato(date));
      }
    },
  });

  return (
    <>
      <TextField
        {...form.field("tittel").getInputProps()}
        error={form.field("tittel").error()}
        label="Tittel"
        size="small"
      />

      <Textarea
        {...form.field("beskrivelse").getInputProps()}
        error={form.field("beskrivelse").error()}
        resize="vertical"
        label="Beskrivelse"
        size="small"
      />

      <Select
        {...form.field("årsak").getInputProps()}
        error={form.field("årsak").error()}
        label="Årsak"
        size="small"
      >
        <option value="">Velg årsak</option>
        {gyldigeNyOppfølgingÅrsaker.map((årsak) => (
          <option value={årsak} key={årsak}>
            {årsak}
          </option>
        ))}
      </Select>

      <DatePicker {...datepickerProps}>
        <DatePicker.Input
          {...inputProps}
          size="small"
          label={"Frist"}
          form={fristField.getInputProps().form}
          name={fristField.getInputProps().name}
          error={fristField.error()}
        />
      </DatePicker>

      <Checkbox
        form={form.field("tildelSammeSaksbehandler").getInputProps().form}
        name={form.field("tildelSammeSaksbehandler").getInputProps().name}
        value={form.field("tildelSammeSaksbehandler").value()}
        error={form.field("tildelSammeSaksbehandler").error()}
        size="small"
      >
        Tildel samme saksbehandler
      </Checkbox>
    </>
  );
}
