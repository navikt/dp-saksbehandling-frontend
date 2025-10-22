import { Button, DatePicker, Table, TextField, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { add, sub } from "date-fns";
import { useParams } from "react-router";

import { OpplysningPeriodeInput } from "~/components/v2/opplysning-periode-input/OpplysningPeriodeInput";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { konverterOpplysningVerdiTilSkjemaVerdi } from "~/utils/opplysning.utils";
import { hentValideringForOpplysningPeriodeSkjema } from "~/utils/validering.util";

import { components } from "../../../../openapi/behandling-typer";

interface IProps {
  opplysning: components["schemas"]["OpplysningsgruppeV2"];
  periode: components["schemas"]["Opplysningsperiode"];
  periodeIndex: number;
  setPeriodeUnderRedigering: (periode?: components["schemas"]["Opplysningsperiode"]) => void;
}

export function OpplysningPeriodeTabellRedigerLinje(props: IProps) {
  const { behandlingId } = useParams();

  const periodeForm = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForOpplysningPeriodeSkjema(props.periode.verdi.datatype),
    defaultValues: {
      _action: "lagre-opplysning",
      opplysningTypeId: props.opplysning.opplysningTypeId,
      datatype: props.periode.verdi.datatype,
      behandlingId: behandlingId,
      verdi: konverterOpplysningVerdiTilSkjemaVerdi(props.periode.verdi),
      begrunnelse: props.periode.kilde?.begrunnelse?.verdi,
      gyldigFraOgMed: props.periode.gyldigFraOgMed
        ? formaterTilNorskDato(props.periode.gyldigFraOgMed)
        : undefined,
      gyldigTilOgMed: props.periode.gyldigTilOgMed
        ? formaterTilNorskDato(props.periode.gyldigTilOgMed)
        : undefined,
    },
  });

  const forrigePeriodeTilOgMedDato =
    props.opplysning.perioder[props.periodeIndex - 1]?.gyldigTilOgMed;

  const nestePeriodeFraOgMedDato =
    props.opplysning.perioder[props.periodeIndex + 1]?.gyldigFraOgMed;

  const datepickerFraOgMed = useDatepicker({
    defaultSelected: props.periode.gyldigFraOgMed
      ? new Date(props.periode.gyldigFraOgMed)
      : undefined,
    // Tidligste gylding fra og med dato er forrige periode sin til og med dato + 1 dag
    fromDate: forrigePeriodeTilOgMedDato
      ? add(new Date(forrigePeriodeTilOgMedDato), { days: 1 })
      : undefined,
    toDate: nestePeriodeFraOgMedDato ? new Date(nestePeriodeFraOgMedDato) : undefined,
    onDateChange: (dato) => {
      periodeForm.field("gyldigFraOgMed").clearError();
      periodeForm.field("gyldigFraOgMed").setValue(dato ? formaterTilNorskDato(dato) : undefined);
    },
    // Siden aksel bare trigger onDateChange ved gyldige datoer, må vi håndtere ugyldige datoer her
    onValidate: (validation) => {
      if (validation.isInvalid) {
        periodeForm
          .field("gyldigFraOgMed")
          .setValue("Ugyldig dato som trigger feil ved submit :sad-panda:");
      }

      if (validation.isEmpty) {
        periodeForm.field("gyldigFraOgMed").setValue(undefined);
      }
    },
  });

  const datepickerTilOgMed = useDatepicker({
    defaultSelected: props.periode.gyldigTilOgMed
      ? new Date(props.periode.gyldigTilOgMed)
      : undefined,
    fromDate: datepickerFraOgMed.selectedDay ? datepickerFraOgMed.selectedDay : undefined,
    // Seneste gylding til og med dato er neste periode sin fra og med dato - 1 dag
    toDate: nestePeriodeFraOgMedDato
      ? sub(new Date(nestePeriodeFraOgMedDato), { days: 1 })
      : undefined,

    onDateChange: (dato) => {
      periodeForm.field("gyldigFraOgMed").clearError();
      periodeForm.field("gyldigTilOgMed").setValue(dato ? formaterTilNorskDato(dato) : undefined);
    },

    // Siden aksel bare trigger onDateChange ved gyldige datoer, må vi håndtere ugyldige datoer her
    onValidate: (validation) => {
      if (validation.isInvalid) {
        periodeForm
          .field("gyldigTilOgMed")
          .setValue("Ugyldig dato som trigger feil ved submit :sad-panda:");
      }

      if (validation.isEmpty) {
        periodeForm.field("gyldigTilOgMed").setValue(undefined);
      }
    },
  });

  return (
    <Table.Row>
      <Table.DataCell>
        <DatePicker {...datepickerFraOgMed.datepickerProps}>
          <DatePicker.Input
            {...datepickerFraOgMed.inputProps}
            form={periodeForm.field("gyldigFraOgMed").getInputProps().form}
            name={periodeForm.field("gyldigFraOgMed").getInputProps().name}
            error={periodeForm.field("gyldigFraOgMed").error()}
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
            form={periodeForm.field("gyldigTilOgMed").getInputProps().form}
            name={periodeForm.field("gyldigTilOgMed").getInputProps().name}
            error={periodeForm.field("gyldigTilOgMed").error()}
            size={"small"}
            label="Til og med"
            hideLabel={true}
          />
        </DatePicker>
      </Table.DataCell>

      <Table.DataCell>
        <OpplysningPeriodeInput
          opplysning={props.opplysning}
          periodeVerdi={props.periode.verdi}
          formScope={periodeForm.scope("verdi")}
        />
      </Table.DataCell>

      <Table.DataCell>
        <TextField
          {...periodeForm.field("begrunnelse").getInputProps()}
          size={"small"}
          error={periodeForm.field("begrunnelse").error()}
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
          onClick={() => periodeForm.submit()}
          loading={periodeForm.formState.isSubmitting}
        >
          Lagre
        </Button>
      </Table.DataCell>
    </Table.Row>
  );
}
