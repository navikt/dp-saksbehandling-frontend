import { Button, DatePicker, Heading, TextField, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { isSameDay } from "date-fns";

import { useOppgave } from "~/hooks/useOppgave";
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
  const { readonly } = useOppgave();
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
      begrunnelse: prøvingsdatoOpplysningPeriode.kilde?.begrunnelse?.verdi,
      gyldigFraOgMed: undefined,
      gyldigTilOgMed: undefined,
    },
  });

  const periodeDato = new Date(prøvingsdatoOpplysningPeriode.verdi.verdi);
  const { selectedDay, datepickerProps, inputProps } = useDatepicker({
    defaultSelected: periodeDato,
    onDateChange: (date) => {
      if (date) {
        prøvingsdatoSkjema.field("verdi").setValue(formaterTilNorskDato(date));
      } else {
        prøvingsdatoSkjema.field("verdi").setValue("");
      }
    },
  });

  return (
    <div className={"card p-4"}>
      <Heading size={"small"}>Prøvingsdato</Heading>

      <DatePicker {...datepickerProps}>
        <DatePicker.Input
          {...inputProps}
          readOnly={readonly}
          form={prøvingsdatoSkjema.field("verdi").getInputProps().form}
          name={prøvingsdatoSkjema.field("verdi").getInputProps().name}
          error={prøvingsdatoSkjema.field("verdi").error()}
          label="Vurder retten fra"
          size={"small"}
        />
      </DatePicker>

      {selectedDay && !isSameDay(selectedDay, periodeDato) && (
        <>
          <TextField
            {...prøvingsdatoSkjema.field("begrunnelse").getInputProps()}
            error={prøvingsdatoSkjema.field("begrunnelse").error()}
            className={"my-2"}
            size={"small"}
            label={"Begrunnelse"}
          />
          <Button
            size={"small"}
            onClick={() => prøvingsdatoSkjema.submit()}
            loading={prøvingsdatoSkjema.formState.isSubmitting}
          >
            Lagre
          </Button>
        </>
      )}
    </div>
  );
}
