import { DatePicker, Textarea, TextField, useDatepicker, VStack } from "@navikt/ds-react";
import { Field, FieldArray, FormProvider, useForm } from "@rvf/react-router";

import { components } from "@/openapi/behandling-typer";
import { hentValideringForNyBarneperiode } from "~/utils/validering.util";

interface Props {
  behandlingId: string;
  sisteBarneperiode?: components["schemas"]["Barneliste"];
}

const Barneskjema = ({ behandlingId, sisteBarneperiode }: Props) => {
  const nyBarnelisteForm = useForm({
    method: "post",
    schema: hentValideringForNyBarneperiode(),
    submitSource: "state",
    defaultValues: {
      _action: "legg-til-barn",
      soknadBarnId: sisteBarneperiode?.søknadBarnId,
      behandlingId,
      begrunnelse: "",
      gyldigFraOgMed: undefined,
      barn:
        sisteBarneperiode?.verdi.map((barn) => ({
          fornavnOgMellomnavn: barn.fornavnOgMellomnavn || "",
          etternavn: barn.etternavn || "",
          fødselsdato: barn.fødselsdato,
          statsborgerskap: barn.statsborgerskap || "",
          kvalifiserer: (barn.kvalifiserer ? "true" : "false") as "true" | "false",
        })) || [],
    },
  });

  const datepickerFraOgMed = useDatepicker({});

  return (
    <FormProvider scope={nyBarnelisteForm.scope()}>
      <form {...nyBarnelisteForm.getFormProps()}>
        <VStack>
          <DatePicker {...datepickerFraOgMed.datepickerProps}>
            <DatePicker.Input
              {...datepickerFraOgMed.inputProps}
              form={nyBarnelisteForm.field("gyldigFraOgMed").getInputProps().form}
              name={nyBarnelisteForm.field("gyldigFraOgMed").getInputProps().name}
              error={nyBarnelisteForm.error("gyldigFraOgMed")}
              label="Gyldig fra og med"
              required
            />
          </DatePicker>

          <Textarea
            {...nyBarnelisteForm.field("begrunnelse").getInputProps()}
            label="Begrunnelse"
            required
            error={nyBarnelisteForm.error("begrunnelse")}
            minRows={3}
          />
          <div className="flex-gap flex gap-4">
            <FieldArray scope={nyBarnelisteForm.scope("barn")}>
              {(x) => {
                console.log(x);
                return x.map((key, barn) => {
                  console.log(barn.scope());
                  return (
                    <div className={"card p-4"}>
                      <Field scope={barn.scope("fornavnOgMellomnavn")}>
                        {(field) => <TextField {...field.getInputProps()} />}
                      </Field>
                      <Field scope={barn.scope("etternavn")}>
                        {(field) => <TextField {...field.getInputProps()} />}
                      </Field>
                    </div>
                  );
                });
              }}
            </FieldArray>
          </div>
        </VStack>
      </form>
    </FormProvider>
  );
};

export default Barneskjema;
