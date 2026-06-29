import { Button, DatePicker, Textarea, useDatepicker, VStack } from "@navikt/ds-react";
import { FieldArray, FormProvider, useForm } from "@rvf/react-router";
import { useLoaderData } from "react-router";

import { components } from "@/openapi/behandling-typer";
import { loader } from "~/routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId._person.regelsett.$regelsettId.opplysning.$opplysningId.barneliste.ny";
import { formaterTilBackendDato } from "~/utils/dato.utils";
import { hentValideringForNyBarneperiode } from "~/utils/validering.util";

import { LoadingLink } from "../loading-link/LoadingLink";
import Barneskjema, { SkjemaBarn } from "./Barneskjema";

const defaultBarn = {
  kilde: "Saksbehandler" as const,
  fornavnOgMellomnavn: "",
  etternavn: "",
  fødselsdato: new Date().toISOString().split("T")[0],
  ident: "",
  oppholdsland: "NOR",
  forsørgeransvar: undefined,
  kvalifiserer: undefined,
  begrunnelse: "",
};

interface Props {
  behandlingId: string;
  sisteBarneperiode?: components["schemas"]["Barneliste"];
  opplysningUrl: string;
}

const BarnelisteSkjema = ({ behandlingId, sisteBarneperiode, opplysningUrl }: Props) => {
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
      _action: "opprett-barneliste-periode",
      behandlingId,
      begrunnelse: "",
      gyldigFraOgMed: undefined as string | undefined,
      barn: barneliste,
    },
  });

  const gyldigFraOgMedDatepicker = useDatepicker({
    onDateChange: (date: Date | undefined) => {
      if (date) {
        const dato = formaterTilBackendDato(date);
        nyBarnelisteForm.field("gyldigFraOgMed").setValue(dato);
      } else {
        nyBarnelisteForm.field("gyldigFraOgMed").setValue("");
      }
    },
  });

  return (
    <FormProvider scope={nyBarnelisteForm.scope()}>
      <form {...nyBarnelisteForm.getFormProps()}>
        <VStack gap="space-8">
          <DatePicker {...gyldigFraOgMedDatepicker.datepickerProps}>
            <DatePicker.Input
              {...gyldigFraOgMedDatepicker.inputProps}
              error={nyBarnelisteForm.field("gyldigFraOgMed").error()}
              label="Gyldig fra og med"
            />
          </DatePicker>
          <FieldArray scope={nyBarnelisteForm.scope("barn")}>
            {(barneliste) => {
              return (
                <div className="flex-gap flex flex-wrap gap-4">
                  {barneliste.map((key, barn, index) => {
                    return (
                      <FormProvider key={key} scope={barn.scope()}>
                        <Barneskjema
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
          <Textarea
            {...nyBarnelisteForm.getInputProps("begrunnelse")}
            label="Begrunnelse"
            required
            error={nyBarnelisteForm.field("begrunnelse").error()}
            minRows={3}
          />
          <div className="flex gap-2">
            <Button type="submit">Lagre</Button>
            <LoadingLink to={opplysningUrl} asButtonVariant={"secondary"}>
              Avbryt
            </LoadingLink>
          </div>
        </VStack>
      </form>
    </FormProvider>
  );
};

export default BarnelisteSkjema;
