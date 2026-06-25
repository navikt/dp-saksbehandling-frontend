import {
  Button,
  DatePicker,
  Radio,
  RadioGroup,
  Select,
  Textarea,
  TextField,
  useDatepicker,
  VStack,
} from "@navikt/ds-react";
import { FieldArray, FormProvider, useField, useForm, useFormContext } from "@rvf/react-router";
import { parse } from "date-fns";
import { useLoaderData } from "react-router";

import { components } from "@/openapi/behandling-typer";
import { components as orkestratorComponents } from "@/openapi/soknad-orkestrator-typer";
import { loader } from "~/routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId._person.regelsett.$regelsettId.opplysning.$opplysningId.barneliste.ny";
import { hentValideringForNyBarneperiode } from "~/utils/validering.util";

const defaultBarn = {
  kilde: "SAKSBEHANDLER" as const,
  fornavnOgMellomnavn: "",
  etternavn: "",
  fødselsdato: "",
  ident: "",
  oppholdsland: "",
  forsørgeransvar: undefined,
  kvalifiserer: undefined,
  begrunnelse: "",
};

interface SkjemaBarn {
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
const Barnefelt = ({ onDelete, orkestratorLandliste }: BarnefeltProps) => {
  const barnForm = useFormContext<SkjemaBarn>();

  console.log("fødselsdato", barnForm.field("fødselsdato").value());

  const datoValue = barnForm.field("fødselsdato").value();
  const fodselsdatoField = useDatepicker({
    defaultSelected: datoValue ? parse(datoValue, "yyyy-MM-dd", new Date()) : new Date(),
    toDate: new Date(),
  });
  return (
    <div className="card flex flex-col gap-4 p-4">
      <RvfTextField name="fornavnOgMellomnavn" label="Fornavn og mellomnavn" />
      <RvfTextField name="etternavn" label="Etternavn" />
      <RvfTextField name="ident" label="Ident" />
      <DatePicker {...fodselsdatoField.datepickerProps}>
        <DatePicker.Input
          {...fodselsdatoField.inputProps}
          error={barnForm.field("fødselsdato").error()}
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
      <RadioGroup {...barnForm.getInputProps("forsørgeransvar")} legend="Forsørgeransvar">
        <div className="flex gap-4">
          <Radio value={true}>Ja</Radio>
          <Radio value={false}>Nei</Radio>
        </div>
      </RadioGroup>
      <RadioGroup {...barnForm.getInputProps("kvalifiserer")} legend="Kvalifiserer">
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
interface Props {
  behandlingId: string;
  sisteBarneperiode?: components["schemas"]["Barneliste"];
}

const Barneskjema = ({ behandlingId, sisteBarneperiode }: Props) => {
  const { orkestratorLandliste } = useLoaderData<typeof loader>();
  const barneliste: SkjemaBarn[] =
    sisteBarneperiode?.verdi.map((barn) => ({
      ...defaultBarn,
      ...barn,
    })) || [];

  const nyBarnelisteForm = useForm({
    method: "post",
    schema: hentValideringForNyBarneperiode(),
    submitSource: "state",
    defaultValues: {
      _action: "legg-til-barn",
      soknadBarnId: sisteBarneperiode?.søknadBarnId,
      behandlingId,
      begrunnelse: "",
      gyldigFraOgMed: new Date(),
      barn: barneliste,
    },
    handleSubmit: (values) => {
      console.log(values);
    },
  });
  console.log("form state", nyBarnelisteForm.formState.fieldErrors);

  return (
    <FormProvider scope={nyBarnelisteForm.scope()}>
      <form {...nyBarnelisteForm.getFormProps()}>
        <VStack>
          <Textarea
            {...nyBarnelisteForm.getInputProps("begrunnelse")}
            label="Begrunnelse"
            required
            error={nyBarnelisteForm.field("begrunnelse").error()}
            minRows={3}
          />
          <FieldArray scope={nyBarnelisteForm.scope("barn")}>
            {(barneliste) => {
              return (
                <div className="flex-gap m-4 flex flex-wrap gap-4">
                  {barneliste.map((key, barn, index) => {
                    return (
                      <FormProvider key={key} scope={barn.scope()}>
                        <Barnefelt
                          onDelete={() => barneliste.remove(index)}
                          orkestratorLandliste={orkestratorLandliste}
                        />
                      </FormProvider>
                    );
                  })}
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => barneliste.push({ ...defaultBarn })}
                  >
                    Legg til barn
                  </Button>
                </div>
              );
            }}
          </FieldArray>
          <Button type="submit">Lagre</Button>
        </VStack>
      </form>
    </FormProvider>
  );
};

export default Barneskjema;
