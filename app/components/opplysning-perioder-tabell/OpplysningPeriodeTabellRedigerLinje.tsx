import { Button, DatePicker, Table, Textarea, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useParams } from "react-router";

import { OpplysningPeriodeInput } from "~/components/opplysning-periode-input/OpplysningPeriodeInput";
import { useOpplysningLagret } from "~/hooks/useOpplysningLagret";
import {
  formaterTilNorskDato,
  maxGyldigTilOgMedDato,
  minGyldigFraOgMedDato,
} from "~/utils/dato.utils";
import { konverterOpplysningVerdiTilSkjemaVerdi } from "~/utils/opplysning.utils";
import { hentValideringForEndreOpplysningPeriodeSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  opplysning: components["schemas"]["RedigerbareOpplysninger"];
  periode: components["schemas"]["Opplysningsperiode"];
  setPeriodeUnderRedigering: (periodeId?: string) => void;
}

export function OpplysningPeriodeTabellRedigerLinje(props: IProps) {
  const { behandlingId } = useParams();
  const opplysningLagret = useOpplysningLagret();

  const periodeForm = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForEndreOpplysningPeriodeSkjema(props.periode.verdi.datatype),
    onSubmitSuccess: async (responseData) => {
      await opplysningLagret(responseData);
      props.setPeriodeUnderRedigering(undefined);
    },
    defaultValues: {
      _action: "endre-opplysning",
      opplysningId: props.periode.id,
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

  const ubegrensetFromDate =
    props.opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc77";

  const datepickerFraOgMed = useDatepicker({
    defaultSelected: props.periode.gyldigFraOgMed
      ? new Date(props.periode.gyldigFraOgMed)
      : undefined,
    fromDate: ubegrensetFromDate ? undefined : minGyldigFraOgMedDato(),
    toDate: maxGyldigTilOgMedDato(),
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
    fromDate: datepickerFraOgMed.selectedDay ?? minGyldigFraOgMedDato(),
    toDate: maxGyldigTilOgMedDato(),

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
        <DatePicker {...datepickerFraOgMed.datepickerProps} dropdownCaption>
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
        <DatePicker {...datepickerTilOgMed.datepickerProps} dropdownCaption>
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
          formScope={periodeForm.scope("verdi")}
          hideLabel={true}
        />
      </Table.DataCell>

      <Table.DataCell>
        <Textarea
          className="pb-2"
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
