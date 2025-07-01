import { PadlockLockedFillIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Checkbox, DatePicker, Heading, useDatepicker } from "@navikt/ds-react";
import { useForm } from "@rvf/react-router";
import { add, sub } from "date-fns";
import { useEffect, useRef, useState } from "react";
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
  forrigePeriode?: components["schemas"]["Opplysning"];
  nestePeriode?: components["schemas"]["Opplysning"];

  readonly?: boolean;
  erAktiv?: boolean;
}

export function OpplysningRedigering({
  opplysning,
  periodeNummer,
  behandlingId,
  forrigePeriode,
  nestePeriode,

  readonly,
  erAktiv = false,
}: IProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [ingenFomDato, setIngenFomDato] = useState<boolean>(false);
  const [ingenTomDato, setIngenTomDato] = useState<boolean>(false);

  useEffect(() => {
    if (erAktiv && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [erAktiv]);

  const opplysningForm = useForm({
    schema: hentValideringForOpplysningSkjema(opplysning.datatype),
    method: "post",
    defaultValues: {
      opplysningId: opplysning.id,
      datatype: opplysning.datatype,
      behandlingId: behandlingId,
      verdi: formaterOpplysningVerdi(opplysning),
      gyldigFraOgMed: opplysning.gyldigFraOgMed,
      gyldigTilOgMed: opplysning.gyldigTilOgMed,
      ingenTomDato: "false",
      ingenFomDato: "false",
    },
  });

  const opplysningKanRedigeres = opplysning.redigerbar && !readonly;

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

  return (
    <div className={`card mt-2 p-4 ${erAktiv ? "border-2 border-blue-500" : ""}`} ref={ref}>
      <Heading className={"mb-2 flex gap-1"} size={"xsmall"}>
        {!opplysningKanRedigeres && <PadlockLockedFillIcon />} Periode {periodeNummer + 1}
      </Heading>

      <BodyShort size={"small"} weight={"semibold"}>
        {opplysning.navn}
      </BodyShort>

      {!opplysningKanRedigeres && (
        <>
          <BodyShort size={"small"}>{formaterOpplysningVerdi(opplysning)}</BodyShort>
          <div className={"mt-4 flex gap-6"}>
            <div>
              <BodyShort size={"small"} weight={"semibold"}>
                Gyldig fra og med
              </BodyShort>
              {opplysning.gyldigFraOgMed ? (
                <BodyShort size={"small"}>
                  {formaterTilNorskDato(opplysning.gyldigFraOgMed)}
                </BodyShort>
              ) : (
                <BodyShort size={"small"}>Ikke satt</BodyShort>
              )}
            </div>
            <div>
              <BodyShort size={"small"} weight={"semibold"}>
                Gyldig til og med
              </BodyShort>

              {opplysning.gyldigTilOgMed ? (
                <BodyShort size={"small"}>
                  {formaterTilNorskDato(opplysning.gyldigTilOgMed)}
                </BodyShort>
              ) : (
                <BodyShort size={"small"}>Ikke satt</BodyShort>
              )}
            </div>
          </div>
        </>
      )}

      {opplysningKanRedigeres && (
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

          <div className={"mt-4 flex gap-2"}>
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

              <Checkbox
                size={"small"}
                name={"ingenFomDato"}
                value={ingenFomDato}
                onChange={(event) => setIngenFomDato(event.currentTarget.checked)}
              >
                Ingen f.o.m.-dato
              </Checkbox>
            </div>

            <div>
              <DatePicker {...datepickerTilOgMed.datepickerProps}>
                <DatePicker.Input
                  {...datepickerTilOgMed.inputProps}
                  size={"small"}
                  label="Til og med"
                  form={opplysningForm.field("gyldigTilOgMed").getInputProps().form}
                  name={opplysningForm.field("gyldigTilOgMed").getInputProps().name}
                  error={opplysningForm.field("gyldigTilOgMed").error()}
                  disabled={ingenTomDato}
                />
              </DatePicker>

              <Checkbox
                size={"small"}
                name={"ingenTomDato"}
                value={ingenTomDato}
                onChange={(event) => setIngenTomDato(event.currentTarget.checked)}
              >
                Ingen t.o.m.-dato
              </Checkbox>
            </div>
          </div>

          <Button
            className={"mt-4"}
            variant="primary"
            type="submit"
            size="xsmall"
            loading={opplysningForm.formState.isSubmitting}
          >
            Lagre
          </Button>
        </Form>
      )}
    </div>
  );
}
