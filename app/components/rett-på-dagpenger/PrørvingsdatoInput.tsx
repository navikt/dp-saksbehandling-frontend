import { DatePicker, Loader, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { Form } from "react-router";

import { formaterTilNorskDato } from "~/utils/dato.utils";
import { konverterOpplysningVerdiTilSkjemaVerdi } from "~/utils/opplysning.utils";
import { isDatoVerdi } from "~/utils/type-guards";
import { hentValideringForOpplysningPeriodeSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  prøvingsdatoOpplysning: components["schemas"]["OpplysningsgruppeV2"];
}

export function PrøvingsdatoInput(props: IProps) {
  const prøvingsdatoOpplysningPeriode = props.prøvingsdatoOpplysning.perioder[0];

  if (!prøvingsdatoOpplysningPeriode || !isDatoVerdi(prøvingsdatoOpplysningPeriode.verdi)) {
    return null;
  }

  const prøvingsdatoSkjema = useForm({
    method: "post",
    submitSource: "state",
    schema: hentValideringForOpplysningPeriodeSkjema(prøvingsdatoOpplysningPeriode.verdi.datatype),
    defaultValues: {
      _action: "lagre-opplysning",
      opplysningTypeId: props.prøvingsdatoOpplysning.opplysningTypeId,
      datatype: prøvingsdatoOpplysningPeriode.verdi.datatype,
      behandlingId: props.behandlingId,
      verdi: konverterOpplysningVerdiTilSkjemaVerdi(prøvingsdatoOpplysningPeriode.verdi),
      begrunnelse: "Prøvingsdato",
      gyldigFraOgMed: undefined,
      gyldigTilOgMed: undefined,
    },
  });

  const { datepickerProps, inputProps } = useDatepicker({
    defaultSelected: prøvingsdatoOpplysningPeriode.verdi.verdi
      ? new Date(prøvingsdatoOpplysningPeriode.verdi.verdi)
      : undefined,
    onDateChange: (date) => {
      if (date) {
        prøvingsdatoSkjema.field("verdi").setValue(formaterTilNorskDato(date));
      } else {
        prøvingsdatoSkjema.field("verdi").setValue("");
      }
      prøvingsdatoSkjema.submit();
    },
  });

  return (
    <Form {...prøvingsdatoSkjema.getFormProps()} className={"flex gap-2"}>
      <DatePicker {...datepickerProps}>
        <DatePicker.Input
          {...inputProps}
          form={prøvingsdatoSkjema.field("verdi").getInputProps().form}
          name={prøvingsdatoSkjema.field("verdi").getInputProps().name}
          error={prøvingsdatoSkjema.field("verdi").error()}
          label="Vurder retten fra"
          size={"small"}
        />
      </DatePicker>
      {prøvingsdatoSkjema.formState.isSubmitting && (
        <Loader size={"small"} className={"mb-1.5 self-end"} />
      )}
    </Form>
  );
}
