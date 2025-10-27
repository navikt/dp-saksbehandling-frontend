import { Button, DatePicker, Table, TextField, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { add } from "date-fns";
import { useParams } from "react-router";

import { OpplysningPeriodeInput } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForNyOpplysningPeriodeSkjema } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  nyPeriode: components["schemas"]["Opplysningsperiode"];
  opplysning: components["schemas"]["OpplysningsgruppeV2"];
  setPeriodeUnderRedigering: (periode?: components["schemas"]["Opplysningsperiode"]) => void;
}

export function OpplysningPeriodeTabellNyPeriode(props: IProps) {
  const { behandlingId } = useParams();

  const sisteOpplysningPeriodeTilOgMedDato =
    props.opplysning.perioder[props.opplysning.perioder.length - 1]?.gyldigTilOgMed;

  const nyOpplysningPeriodeForm = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForNyOpplysningPeriodeSkjema(props.opplysning.datatype),
    onSubmitSuccess: () => props.setPeriodeUnderRedigering(undefined),
    defaultValues: {
      _action: "lagre-opplysning",
      opplysningTypeId: props.opplysning.opplysningTypeId,
      datatype: props.opplysning.datatype,
      behandlingId: behandlingId,
      verdi: "",
      begrunnelse: "",
      gyldigFraOgMed: sisteOpplysningPeriodeTilOgMedDato
        ? formaterTilNorskDato(add(new Date(sisteOpplysningPeriodeTilOgMedDato), { days: 1 }))
        : undefined,
      // Håpløs casting for å gjøre typescript fornøyd. defaultValues scoper ned typen fra "string | undefined" fra  hentValideringForNyOpplysningPeriodeSkjema() til kun "undefined"
      gyldigTilOgMed: undefined as string | undefined,
    },
  });

  const datepickerFraOgMed = useDatepicker({
    defaultSelected: sisteOpplysningPeriodeTilOgMedDato
      ? add(new Date(sisteOpplysningPeriodeTilOgMedDato), { days: 1 })
      : undefined,
    fromDate: sisteOpplysningPeriodeTilOgMedDato
      ? add(new Date(sisteOpplysningPeriodeTilOgMedDato), { days: 1 })
      : undefined,
    onDateChange: (dato) => {
      nyOpplysningPeriodeForm.field("gyldigFraOgMed").clearError();
      nyOpplysningPeriodeForm
        .field("gyldigFraOgMed")
        .setValue(dato ? formaterTilNorskDato(dato) : undefined);
    },
    // Siden aksel bare trigger onDateChange ved gyldige datoer, må vi håndtere ugyldige datoer her
    onValidate: (validation) => {
      if (validation.isInvalid) {
        nyOpplysningPeriodeForm
          .field("gyldigFraOgMed")
          .setValue("Ugyldig dato som trigger feil ved submit :sad-panda:");
      }

      if (validation.isEmpty) {
        nyOpplysningPeriodeForm.field("gyldigFraOgMed").setValue(undefined);
      }
    },
  });

  const datepickerTilOgMed = useDatepicker({
    fromDate: datepickerFraOgMed.selectedDay,
    onDateChange: (dato) => {
      nyOpplysningPeriodeForm.field("gyldigFraOgMed").clearError();
      nyOpplysningPeriodeForm
        .field("gyldigTilOgMed")
        .setValue(dato ? formaterTilNorskDato(dato) : undefined);
    },
    // Siden aksel bare trigger onDateChange ved gyldige datoer, må vi håndtere ugyldige datoer her
    onValidate: (validation) => {
      if (validation.isInvalid) {
        nyOpplysningPeriodeForm
          .field("gyldigTilOgMed")
          .setValue("Ugyldig dato som trigger feil ved submit :sad-panda:");
      }

      if (validation.isEmpty) {
        nyOpplysningPeriodeForm.field("gyldigTilOgMed").setValue(undefined);
      }
    },
  });

  return (
    <Table.Row>
      <Table.DataCell>
        <DatePicker {...datepickerFraOgMed.datepickerProps}>
          <DatePicker.Input
            {...datepickerFraOgMed.inputProps}
            form={nyOpplysningPeriodeForm.field("gyldigFraOgMed").getInputProps().form}
            name={nyOpplysningPeriodeForm.field("gyldigFraOgMed").getInputProps().name}
            error={nyOpplysningPeriodeForm.field("gyldigFraOgMed").error()}
            size={"small"}
            label="Fra og med"
            hideLabel={true}
          />
        </DatePicker>
      </Table.DataCell>

      <Table.DataCell>
        <DatePicker {...datepickerTilOgMed.datepickerProps}>
          <DatePicker.Input
            {...datepickerTilOgMed.inputProps}
            form={nyOpplysningPeriodeForm.field("gyldigTilOgMed").getInputProps().form}
            name={nyOpplysningPeriodeForm.field("gyldigTilOgMed").getInputProps().name}
            error={nyOpplysningPeriodeForm.field("gyldigTilOgMed").error()}
            size={"small"}
            label="Til og med"
            hideLabel={true}
          />
        </DatePicker>
      </Table.DataCell>

      <Table.DataCell>
        <OpplysningPeriodeInput
          opplysning={props.opplysning}
          periodeVerdi={props.nyPeriode.verdi}
          formScope={nyOpplysningPeriodeForm.scope("verdi")}
        />
      </Table.DataCell>

      <Table.DataCell>
        <TextField
          {...nyOpplysningPeriodeForm.field("begrunnelse").getInputProps()}
          size={"small"}
          error={nyOpplysningPeriodeForm.field("begrunnelse").error()}
        />
      </Table.DataCell>

      <Table.DataCell>
        <Button
          size={"xsmall"}
          variant={"tertiary"}
          onClick={() => props.setPeriodeUnderRedigering(undefined)}
        >
          Avbryt
        </Button>
      </Table.DataCell>

      <Table.DataCell>
        <Button
          size={"xsmall"}
          variant={"primary"}
          onClick={() => nyOpplysningPeriodeForm.submit()}
          loading={nyOpplysningPeriodeForm.formState.isSubmitting}
        >
          Lagre
        </Button>
      </Table.DataCell>
    </Table.Row>
  );
}
