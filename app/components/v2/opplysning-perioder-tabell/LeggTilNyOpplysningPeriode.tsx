import { PlusCircleIcon } from "@navikt/aksel-icons";
import { Button, DatePicker, Textarea, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useState } from "react";
import { Form, useParams } from "react-router";

import { OpplysningPeriodeInput } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";
import { hentValideringForNyOpplysningPeriodeSkjema } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  opplysning: components["schemas"]["OpplysningsgruppeV2"];
}

export function LeggTilNyOpplysningPeriode(props: IProps) {
  const { behandlingId } = useParams();
  const [leggTilNyPeriode, setLeggTilNyPeriode] = useState(false);

  const sisteOpplysningPeriodeTilOgMedDato =
    props.opplysning.perioder[props.opplysning.perioder.length - 1]?.gyldigTilOgMed;

  const datepickerFraOgMed = useDatepicker({
    defaultSelected: sisteOpplysningPeriodeTilOgMedDato
      ? new Date(sisteOpplysningPeriodeTilOgMedDato)
      : undefined,
  });

  const datepickerTilOgMed = useDatepicker({
    defaultSelected: new Date(),
  });

  const nyOpplysningPeriodeForm = useForm({
    method: "post",
    schema: hentValideringForNyOpplysningPeriodeSkjema(props.opplysning.datatype),
    defaultValues: {
      opplysningTypeId: props.opplysning.opplysningTypeId,
      datatype: props.opplysning.datatype,
      behandlingId: behandlingId,
      verdi: "",
      begrunnelse: "",
      gyldigFraOgMed: "",
      gyldigTilOgMed: "",
    },
  });

  const nyPeriode: components["schemas"]["Opplysningsperiode"] = {
    id: "NY-PERIODE",
    opprettet: new Date().toISOString(),
    status: "Ny",
    verdi: {
      verdi: "",
      datatype: props.opplysning.datatype,
    } as unknown as components["schemas"]["Opplysningsverdi"],
  };

  return (
    <>
      {!leggTilNyPeriode && (
        <Button
          className={"mt-4"}
          variant={"secondary"}
          size={"small"}
          icon={<PlusCircleIcon aria-hidden />}
          onClick={() => setLeggTilNyPeriode(true)}
        >
          Legg til ny periode
        </Button>
      )}

      {leggTilNyPeriode && (
        <div className={"card-sunken"}>
          <Form {...nyOpplysningPeriodeForm.getFormProps()}>
            <input hidden={true} readOnly={true} name="_action" value="lagre-opplysning" />
            <input
              hidden={true}
              readOnly={true}
              {...nyOpplysningPeriodeForm.field("opplysningTypeId").getInputProps()}
            />
            <input
              hidden={true}
              readOnly={true}
              {...nyOpplysningPeriodeForm.field("datatype").getInputProps()}
            />
            <input
              hidden={true}
              readOnly={true}
              {...nyOpplysningPeriodeForm.field("behandlingId").getInputProps()}
            />
            <OpplysningPeriodeInput
              periodeVerdi={nyPeriode.verdi}
              formScope={nyOpplysningPeriodeForm.scope("verdi")}
            />
            <Button
              className={"mt-4"}
              variant={"secondary"}
              size={"small"}
              onClick={() => setLeggTilNyPeriode(false)}
              type={"button"}
            >
              Avbryt
            </Button>
            <Button variant={"primary"} size={"small"}>
              Lagre
            </Button>
            <DatePicker {...datepickerFraOgMed.datepickerProps}>
              <DatePicker.Input
                {...datepickerFraOgMed.inputProps}
                size={"small"}
                label="Fra og med"
                form={nyOpplysningPeriodeForm.field("gyldigFraOgMed").getInputProps().form}
                name={nyOpplysningPeriodeForm.field("gyldigFraOgMed").getInputProps().name}
                error={nyOpplysningPeriodeForm.field("gyldigFraOgMed").error()}
              />
            </DatePicker>
            <DatePicker {...datepickerTilOgMed.datepickerProps}>
              <DatePicker.Input
                {...datepickerTilOgMed.inputProps}
                size={"small"}
                label="Til og med"
                form={nyOpplysningPeriodeForm.field("gyldigTilOgMed").getInputProps().form}
                name={nyOpplysningPeriodeForm.field("gyldigTilOgMed").getInputProps().name}
                error={nyOpplysningPeriodeForm.field("gyldigTilOgMed").error()}
              />
            </DatePicker>
            <Textarea label="Begrunnelse" size="small" />;
            <pre>{JSON.stringify(nyOpplysningPeriodeForm.formState.fieldErrors)}</pre>
          </Form>
        </div>
      )}
    </>
  );
}
