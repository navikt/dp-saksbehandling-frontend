import {
  Button,
  DatePicker,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  TextField,
  useDatepicker,
} from "@navikt/ds-react";
import { useField, useFormContext } from "@rvf/react-router";
import { parse } from "date-fns";

import { components as orkestratorComponents } from "@/openapi/soknad-orkestrator-typer";
import { formaterTilBackendDato } from "~/utils/dato.utils";

import { KildeTag } from "./KildeTag";

export interface SkjemaBarn {
  kilde: "Saksbehandler" | "Søknad" | "Register" | undefined;
  fornavnOgMellomnavn: string;
  etternavn: string;
  fødselsdato: string;
  ident: string;
  oppholdsland: string;
  forsørgeransvar: boolean | undefined;
  kvalifiserer: boolean | undefined;
  begrunnelse: string;
}

const RvfTextField = ({ name, label }: { name: string; label: string }) => {
  const field = useField(name);
  return <TextField {...field.getInputProps()} label={label} error={field.error()} />;
};

interface BarnefeltProps {
  onDelete: () => void;
  orkestratorLandliste: orkestratorComponents["schemas"]["Land"][];
}
const Barneskjema = ({ onDelete, orkestratorLandliste }: BarnefeltProps) => {
  const barnForm = useFormContext<SkjemaBarn>();

  const datoValue = barnForm.field("fødselsdato").value();
  const fodselsdatoField = useDatepicker({
    defaultSelected: datoValue ? parse(datoValue, "yyyy-MM-dd", new Date()) : new Date(),
    toDate: new Date(),
    onDateChange: (date: Date | undefined) => {
      if (date) {
        const dato = formaterTilBackendDato(date);
        barnForm.field("fødselsdato").setValue(dato);
      } else {
        barnForm.field("fødselsdato").setValue("");
      }
    },
  });
  return (
    <div className="card flex flex-col gap-4 p-4">
      <div>
        <KildeTag
          kilde={barnForm.field("kilde").value() as "Register" | "Søknad" | "Saksbehandler"}
        />
      </div>
      <RvfTextField name="fornavnOgMellomnavn" label="Fornavn og mellomnavn" />
      <RvfTextField name="etternavn" label="Etternavn" />
      <RvfTextField name="ident" label="Ident" />
      <DatePicker {...fodselsdatoField.datepickerProps}>
        <DatePicker.Input
          {...fodselsdatoField.inputProps}
          error={barnForm.error("fødselsdato")}
          label="Fødselsdato"
        />
      </DatePicker>
      <Select {...barnForm.getInputProps("oppholdsland")} label="Oppholdsland">
        {orkestratorLandliste.map((land) => (
          <option key={land.alpha3kode} value={land.alpha3kode}>
            {land.navn}
          </option>
        ))}
      </Select>
      <RadioGroup
        {...barnForm.getInputProps("forsørgeransvar")}
        legend="Forsørgeransvar"
        error={barnForm.error("forsørgeransvar")}
      >
        <div className="flex gap-4">
          <Radio value={true}>Ja</Radio>
          <Radio value={false}>Nei</Radio>
        </div>
      </RadioGroup>
      <RadioGroup
        {...barnForm.getInputProps("kvalifiserer")}
        legend="Kvalifiserer"
        error={barnForm.error("kvalifiserer")}
      >
        <div className="flex gap-4">
          <Radio value={true}>Ja</Radio>
          <Radio value={false}>Nei</Radio>
        </div>
      </RadioGroup>
      <Textarea {...barnForm.getInputProps("begrunnelse")} label="Begrunnelse" />

      <Button type="button" data-color="danger" onClick={() => onDelete()}>
        Slett barn
      </Button>
    </div>
  );
};

export default Barneskjema;
