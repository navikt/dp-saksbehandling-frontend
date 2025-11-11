import {
  BodyShort,
  Button,
  Checkbox,
  DatePicker,
  Heading,
  Textarea,
  useDatepicker,
} from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import classnames from "classnames";
import { add, sub } from "date-fns";
import { useEffect, useRef, useState } from "react";
import { Form, useParams } from "react-router";

import { Opplysning } from "~/components/opplysning/Opplysning";
import { NY_PERIODE_ID } from "~/components/opplysning-gruppe-panel/OpplysningGruppePanel";
import { formaterOpplysningVerdi } from "~/utils/opplysning.utils";
import {
  hentValideringForOpplysningPeriodeSkjema,
  hentValideringForSlettPeriode,
} from "~/utils/validering.util";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  periodeNummer: number;
  opplysning: components["schemas"]["Opplysning"];
  nestePeriode?: components["schemas"]["Opplysning"];
  forrigePeriode?: components["schemas"]["Opplysning"];
  aktivPeriode?: components["schemas"]["Opplysning"];
  setAktivPeriode: (opplysning: components["schemas"]["Opplysning"] | undefined) => void;
}

export function OpplysningKortRedigering({
  behandlingId,
  periodeNummer,
  opplysning,
  nestePeriode,
  forrigePeriode,
  aktivPeriode,
  setAktivPeriode,
}: IProps) {
  const { oppgaveId, regelsettNavn } = useParams();
  const ref = useRef<HTMLDivElement>(null);
  const erPrøvingsdatoOpplysning = opplysning?.navn === "Prøvingsdato"; // Midlertidig løsning for å håndtere prøvingsdato som en spesiell opplysningstype. PJs jobber med hvordan de kan trekke ut prøvingsdato som en opplysning
  const [ingenFomDato, setIngenFomDato] = useState<boolean>(erPrøvingsdatoOpplysning || false);
  const [ingenTomDato, setIngenTomDato] = useState<boolean>(erPrøvingsdatoOpplysning || false);

  const opplysningForm = useForm({
    method: "post",
    action: `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle/${regelsettNavn}`,
    schema: hentValideringForOpplysningPeriodeSkjema(opplysning.datatype),
    defaultValues: {
      _action: "lagre-opplysning",
      opplysningTypeId: opplysning.opplysningTypeId,
      datatype: opplysning.datatype,
      behandlingId: behandlingId,
      verdi: formaterOpplysningVerdi(opplysning),
      begrunnelse: erPrøvingsdatoOpplysning
        ? "Prøvingsdato"
        : (opplysning.kilde?.begrunnelse?.verdi ?? ""),
      gyldigFraOgMed: opplysning.gyldigFraOgMed ?? undefined,
      gyldigTilOgMed: opplysning.gyldigTilOgMed ?? undefined,
      ingenTomDato: ingenTomDato.toString(),
      ingenFomDato: ingenFomDato.toString(),
    },
  });

  const slettOpplysningForm = useForm({
    method: "post",
    action: `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle/${regelsettNavn}`,
    schema: hentValideringForSlettPeriode(),
    defaultValues: { _action: "slett-periode", behandlingId, periodeId: opplysning.id },
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
    fromDate: datepickerFraOgMed.selectedDay
      ? add(datepickerFraOgMed.selectedDay, { days: 1 })
      : undefined,
    toDate: nestePeriode?.gyldigFraOgMed ? tidligsteTilOgMedDato : undefined,
  });

  useEffect(() => {
    if (opplysning.id === aktivPeriode?.id && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [aktivPeriode]);

  return (
    <div
      ref={ref}
      className={classnames("card mt-2 p-4", {
        "border-1 border-blue-400": aktivPeriode?.id === opplysning.id,
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

        <Textarea
          {...opplysningForm.field("begrunnelse").getInputProps()}
          error={opplysningForm.field("begrunnelse").error()}
          size={"small"}
          className={"mt-2"}
          label={"Begrunnelse"}
        />
      </Form>

      <div className={"mt-4 flex gap-2"}>
        <Form {...slettOpplysningForm.getFormProps()}>
          <input
            hidden={true}
            readOnly={true}
            {...slettOpplysningForm.field("_action").getInputProps()}
          />
          <input
            hidden={true}
            readOnly={true}
            {...slettOpplysningForm.field("periodeId").getInputProps()}
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
          onClick={() => setAktivPeriode(undefined)}
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
