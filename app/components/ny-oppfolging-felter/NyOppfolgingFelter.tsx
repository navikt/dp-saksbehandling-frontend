import { Checkbox, DatePicker, Select, Textarea, TextField, useDatepicker } from "@navikt/ds-react";
import { FormApi } from "@rvf/react-router";

import { formaterTilBackendDato, formaterTilNorskDato } from "~/utils/dato.utils";
import { gyldigeNyOppfølgingÅrsaker } from "~/utils/validering.util";

// @ts-expect-error: Denne komponenten brukes i tre forskjellige skjemaer, og det er to forskjellige varianter, og det er bare irriterende :)
export function NyOppfolgingFelter({ form }: { form: FormApi }) {
  const fristField = form.field("frist");
  const fristFieldValue = fristField.value();
  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: fristFieldValue
      ? new Date(formaterTilBackendDato(fristFieldValue))
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
        checked={form.field("tildelSammeSaksbehandler").value() === true}
        onClick={() =>
          form
            .field("tildelSammeSaksbehandler")
            .setValue(!form.field("tildelSammeSaksbehandler").value())
        }
        size="small"
      >
        Tildel samme saksbehandler
      </Checkbox>
    </>
  );
}
