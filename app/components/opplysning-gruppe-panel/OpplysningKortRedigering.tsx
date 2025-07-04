import { BodyShort, Button, Checkbox, DatePicker, Heading, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classnames from "classnames";
import { add, sub } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { Form } from "react-router";

import { Opplysning } from "~/components/opplysning/Opplysning";
import { NY_PERIODE_ID } from "~/components/opplysning-gruppe-panel/OpplysningGruppePanel";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";
import {
  hentValideringForOpplysningSkjema,
  hentValideringForSlettOpplysningSkjema,
} from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  periodeNummer: number;
  opplysning: components["schemas"]["Opplysning"];
  nestePeriode?: components["schemas"]["Opplysning"];
  forrigePeriode?: components["schemas"]["Opplysning"];
  aktivOpplysning?: components["schemas"]["Opplysning"];
  setAktivOpplysning: (opplysning: components["schemas"]["Opplysning"] | undefined) => void;
}

export function OpplysningKortRedigering({
  behandlingId,
  periodeNummer,
  opplysning,
  nestePeriode,
  forrigePeriode,
  aktivOpplysning,
  setAktivOpplysning,
}: IProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ingenFomDato, setIngenFomDato] = useState<boolean>(false);
  const [ingenTomDato, setIngenTomDato] = useState<boolean>(false);

  const opplysningForm = useForm({
    schema: hentValideringForOpplysningSkjema(opplysning.datatype),
    method: "post",
    defaultValues: {
      opplysningTypeId: opplysning.opplysningTypeId,
      datatype: opplysning.datatype,
      behandlingId: behandlingId,
      verdi: formaterOpplysningVerdi(opplysning),
      gyldigFraOgMed: opplysning.gyldigFraOgMed,
      gyldigTilOgMed: opplysning.gyldigTilOgMed,
      ingenTomDato: "false",
      ingenFomDato: "false",
    },
  });

  const slettOpplysningForm = useForm({
    method: "post",
    schema: hentValideringForSlettOpplysningSkjema(),
    defaultValues: { behandlingId, opplysningId: opplysning.id },
  });

  const tidligsteFraOgMedDato = forrigePeriode?.gyldigTilOgMed
    ? add(new Date(forrigePeriode?.gyldigTilOgMed), { days: 1 })
    : forrigePeriode?.gyldigFraOgMed
      ? add(new Date(forrigePeriode?.gyldigFraOgMed), { days: 1 })
      : undefined;
  const tidligsteTilOgMedDato = nestePeriode?.gyldigFraOgMed
    ? sub(new Date(nestePeriode?.gyldigFraOgMed), { days: 1 })
    : undefined;

  const datepickerFraOgMed = useDatepicker({
    defaultSelected: opplysning.gyldigFraOgMed
      ? new Date(opplysning.gyldigFraOgMed)
      : tidligsteFraOgMedDato,
    fromDate: forrigePeriode?.gyldigFraOgMed ? tidligsteFraOgMedDato : undefined,
  });

  const datepickerTilOgMed = useDatepicker({
    defaultSelected: opplysning.gyldigTilOgMed ? new Date(opplysning.gyldigTilOgMed) : undefined,
    toDate: nestePeriode?.gyldigFraOgMed ? tidligsteTilOgMedDato : undefined,
  });

  useEffect(() => {
    if (opplysning.id === aktivOpplysning?.id && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [aktivOpplysning]);

  return (
    <div
      ref={ref}
      className={classnames("card mt-2 p-4", {
        "border-1 border-blue-400": aktivOpplysning?.id === opplysning.id,
      })}
    >
      <Heading className={"mb-2 flex gap-1"} size={"xsmall"}>
        {opplysning.id === NY_PERIODE_ID ? <>Ny periode</> : <>Periode {periodeNummer + 1}</>}
      </Heading>

      <BodyShort size={"small"} weight={"semibold"}>
        {opplysning.navn}
      </BodyShort>
      <Form {...opplysningForm.getFormProps()}>
        <input hidden={true} readOnly={true} name="_action" value="lagre-opplysning" />
        <input
          hidden={true}
          readOnly={true}
          {...opplysningForm.field("opplysningTypeId").getInputProps()}
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

        <div className={"mt-4 flex gap-8"}>
          <div>
            <DatePicker {...datepickerFraOgMed.datepickerProps}>
              <DatePicker.Input
                {...datepickerFraOgMed.inputProps}
                size={"small"}
                label="Fra og med"
                form={opplysningForm.field("gyldigFraOgMed").getInputProps().form}
                name={opplysningForm.field("gyldigFraOgMed").getInputProps().name}
                error={opplysningForm.field("gyldigFraOgMed").error()}
                disabled={ingenFomDato}
              />
            </DatePicker>

            {!forrigePeriode && (
              <Checkbox
                size={"small"}
                className={"mt-1"}
                name={"ingenFomDato"}
                value={ingenFomDato}
                onChange={(event) => setIngenFomDato(event.currentTarget.checked)}
              >
                Ingen start
              </Checkbox>
            )}
          </div>

          <div>
            <DatePicker {...datepickerTilOgMed.datepickerProps}>
              <DatePicker.Input
                {...datepickerTilOgMed.inputProps}
                size={"small"}
                label={"Til og med"}
                form={opplysningForm.field("gyldigTilOgMed").getInputProps().form}
                name={opplysningForm.field("gyldigTilOgMed").getInputProps().name}
                error={opplysningForm.field("gyldigTilOgMed").error()}
                disabled={ingenTomDato}
              />
            </DatePicker>

            {!nestePeriode && (
              <Checkbox
                size={"small"}
                className={"mt-1"}
                name={"ingenTomDato"}
                value={ingenTomDato}
                onChange={(event) => setIngenTomDato(event.currentTarget.checked)}
              >
                Ingen slutt
              </Checkbox>
            )}
          </div>
        </div>
      </Form>

      <div className={"mt-4 flex gap-2"}>
        <Form {...slettOpplysningForm.getFormProps()}>
          <input hidden={true} readOnly={true} name="_action" value="slett-opplysning" />
          <input
            hidden={true}
            readOnly={true}
            {...slettOpplysningForm.field("opplysningId").getInputProps()}
          />
          <input
            hidden={true}
            readOnly={true}
            {...slettOpplysningForm.field("behandlingId").getInputProps()}
          />
          <Button
            variant="tertiary"
            type="submit"
            size="xsmall"
            loading={slettOpplysningForm.formState.isSubmitting}
          >
            Slett periode
          </Button>
        </Form>

        <Button
          className="ml-auto"
          variant="tertiary"
          type="button"
          size="xsmall"
          onClick={() => setAktivOpplysning(undefined)}
        >
          Avbryt
        </Button>

        <Button
          variant="primary"
          type="submit"
          size="xsmall"
          form={opplysningForm.formOptions.formId}
          loading={opplysningForm.formState.isSubmitting}
        >
          Lagre
        </Button>
      </div>
    </div>
  );
}
