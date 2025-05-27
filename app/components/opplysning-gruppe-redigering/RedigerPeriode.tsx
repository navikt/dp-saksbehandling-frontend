import { BodyShort, Button, Checkbox, DatePicker, Heading, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useState } from "react";
import { Form } from "react-router";

import { Opplysning } from "~/components/opplysning/Opplysning";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { hentValideringForOpplysningSkjema } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  opplysning: components["schemas"]["Opplysning"];
  periodeNummer: number;
}

export function RedigerPeriode({ opplysning, periodeNummer, behandlingId }: IProps) {
  const [ingenFomDato, setIngenFomDato] = useState<boolean>(false);
  const [ingenTomDato, setIngenTomDato] = useState<boolean>(false);

  let defaultGyldigFraOgMedDato = undefined;
  let defaultGyldigTilOgMedDato = undefined;

  if (opplysning.gyldigFraOgMed === null) {
    defaultGyldigFraOgMedDato = "01.01.1900";
  } else if (opplysning.gyldigFraOgMed) {
    defaultGyldigFraOgMedDato = formaterTilNorskDato(opplysning.gyldigFraOgMed);
  }

  if (opplysning.gyldigTilOgMed === null) {
    defaultGyldigTilOgMedDato = "01.01.2100";
  } else if (opplysning.gyldigTilOgMed) {
    defaultGyldigTilOgMedDato = formaterTilNorskDato(opplysning.gyldigTilOgMed);
  }

  const opplysningForm = useForm({
    schema: hentValideringForOpplysningSkjema(opplysning.datatype),
    method: "post",
    defaultValues: {
      opplysningId: opplysning.id,
      datatype: opplysning.datatype,
      behandlingId: behandlingId,
      verdi: formaterOpplysningVerdi(opplysning),
      gyldigFraOgMed: defaultGyldigFraOgMedDato,
      gyldigTilOgMed: defaultGyldigTilOgMedDato,
      ingenTomDato: "false",
      ingenFomDato: "false",
    },
  });

  const datepickerFom = useDatepicker({
    defaultSelected: opplysning.gyldigFraOgMed ? new Date(opplysning.gyldigFraOgMed) : undefined,
  });

  const datepickerTom = useDatepicker({
    defaultSelected: opplysning.gyldigTilOgMed ? new Date(opplysning.gyldigTilOgMed) : undefined,
  });

  return (
    <div className="card mt-8 p-2">
      <Heading size={"xsmall"}>Periode {periodeNummer + 1} </Heading>

      {!opplysning.redigerbar && (
        <BodyShort size={"small"}>{formaterOpplysningVerdi(opplysning)}</BodyShort>
      )}

      {opplysning.redigerbar && (
        <Form {...opplysningForm.getFormProps()}>
          <input hidden={true} readOnly={true} name="_action" value="lagre-opplysning" />
          <input
            hidden={true}
            readOnly={true}
            {...opplysningForm.field("opplysningId").getInputProps()}
          />
          <input
            hidden={true}
            readOnly={true}
            {...opplysningForm.field("datatype").getInputProps()}
          />
          <input
            hidden={true}
            readOnly={true}
            {...opplysningForm.field("behandlingId").getInputProps()}
          />
          <Opplysning opplysning={opplysning} formScope={opplysningForm.scope("verdi")} />

          <div className={"flex gap-2 mt-4"}>
            <div>
              <DatePicker {...datepickerFom.datepickerProps}>
                <DatePicker.Input
                  {...datepickerFom.inputProps}
                  label="Fra og med"
                  form={opplysningForm.field("gyldigFraOgMed").getInputProps().form}
                  name={opplysningForm.field("gyldigFraOgMed").getInputProps().name}
                  error={opplysningForm.field("gyldigFraOgMed").error()}
                  disabled={ingenFomDato}
                />
              </DatePicker>

              <Checkbox
                name={"ingenFomDato"}
                value={ingenFomDato}
                onChange={(event) => setIngenFomDato(event.currentTarget.checked)}
              >
                Ingen f.o.m.-dato
              </Checkbox>
            </div>

            <div>
              <DatePicker {...datepickerTom.datepickerProps}>
                <DatePicker.Input
                  {...datepickerTom.inputProps}
                  label="Til og med"
                  form={opplysningForm.field("gyldigTilOgMed").getInputProps().form}
                  name={opplysningForm.field("gyldigTilOgMed").getInputProps().name}
                  error={opplysningForm.field("gyldigTilOgMed").error()}
                  disabled={ingenTomDato}
                />
              </DatePicker>

              <Checkbox
                name={"ingenTomDato"}
                value={ingenTomDato}
                onChange={(event) => setIngenTomDato(event.currentTarget.checked)}
              >
                Ingen t.o.m.-dato
              </Checkbox>
            </div>
          </div>

          <Button
            variant="primary"
            type="submit"
            size="xsmall"
            loading={opplysningForm.formState.isSubmitting}
          >
            Lagre
          </Button>

          {}
        </Form>
      )}
    </div>
  );
}
