import {
  Button,
  Checkbox,
  CheckboxGroup,
  DatePicker,
  Heading,
  useDatepicker,
} from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { useState } from "react";
import { Form, useNavigation } from "react-router";

import { Opplysning } from "~/components/opplysning/Opplysning";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";
import { hentValideringForOpplysning } from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  opplysning: components["schemas"]["Opplysning"];
  periodeNummer: number;
}

export function RedigerPeriode({ opplysning, periodeNummer, behandlingId }: IProps) {
  const { state } = useNavigation();
  const [ingenFomDato, setIngenFomDato] = useState<string[]>([]);
  const [ingenTomDato, setIngenTomDato] = useState<string[]>([]);

  const opplysningForm = useForm({
    validator: hentValideringForOpplysning(opplysning),
    method: "post",
    defaultValues: {
      verdi: formaterOpplysningVerdi(opplysning),
      gyldigFraOgMed: opplysning.gyldigFraOgMed,
      gyldigTilOgMed: opplysning.gyldigTilOgMed,
    },
  });

  const datepickerFom = useDatepicker({
    defaultSelected: opplysning.gyldigFraOgMed ? new Date(opplysning.gyldigFraOgMed) : undefined,
    onDateChange: (date) => {
      opplysningForm.field("gyldigFraOgMed").setValue(date?.toISOString());
    },
  });
  const datepickerTom = useDatepicker({
    defaultSelected: opplysning.gyldigTilOgMed ? new Date(opplysning.gyldigTilOgMed) : undefined,
    onDateChange: (date) => {
      opplysningForm.field("gyldigTilOgMed").setValue(date?.toISOString());
    },
  });

  return (
    <div className="card mt-8 p-2">
      <Heading size={"xsmall"}>Periode {periodeNummer} </Heading>
      <Form {...opplysningForm.getFormProps()}>
        <input hidden={true} readOnly={true} name="_action" value="lagre-opplysning" />
        <input hidden={true} readOnly={true} name="opplysningId" value={opplysning.id} />
        <input hidden={true} readOnly={true} name="datatype" value={opplysning.datatype} />
        <input hidden={true} readOnly={true} name="behandlingId" value={behandlingId} />
        <Opplysning opplysning={opplysning} formScope={opplysningForm.scope("verdi")} />

        <div className={"flex gap-2 mt-4"}>
          <div>
            <input
              hidden={true}
              readOnly={true}
              {...opplysningForm.field("gyldigFraOgMed").getInputProps()}
            />
            <DatePicker {...datepickerFom.datepickerProps}>
              <DatePicker.Input
                {...datepickerFom.inputProps}
                disabled={ingenFomDato.includes("false")}
                label="Fra og med"
                size={"small"}
                error={opplysningForm.error("gyldigFraOgMed")}
              />
            </DatePicker>

            <CheckboxGroup
              legend="Ingen f.o.m.-dato"
              hideLegend={true}
              onChange={(value) => setIngenFomDato(value)}
              value={ingenFomDato}
            >
              <Checkbox value={"false"}>Ingen f.o.m.-dato</Checkbox>
            </CheckboxGroup>
          </div>

          <div>
            <input
              hidden={true}
              readOnly={true}
              {...opplysningForm.field("gyldigTilOgMed").getInputProps()}
            />
            <DatePicker {...datepickerTom.datepickerProps}>
              <DatePicker.Input
                {...datepickerTom.inputProps}
                disabled={ingenTomDato.includes("false")}
                label="Til og med"
                name={"gyldigTilOgMed"}
                size={"small"}
                error={opplysningForm.error("gyldigTilOgMed")}
              />
            </DatePicker>
            <CheckboxGroup
              legend="Ingen f.o.m.-dato"
              hideLegend={true}
              onChange={(value) => setIngenTomDato(value)}
              value={ingenTomDato}
            >
              <Checkbox value={"false"}>Ingen f.o.m.-dato</Checkbox>
            </CheckboxGroup>
          </div>
        </div>

        <Button variant="primary" type="submit" size="xsmall" loading={state !== "idle"}>
          Lagre
        </Button>
      </Form>
    </div>
  );
}
