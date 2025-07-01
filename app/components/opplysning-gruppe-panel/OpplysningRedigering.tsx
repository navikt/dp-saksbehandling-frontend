import { PadlockLockedIcon, PencilWritingIcon } from "@navikt/aksel-icons";
import {
  BodyShort,
  Button,
  Checkbox,
  DatePicker,
  Detail,
  Heading,
  useDatepicker,
} from "@navikt/ds-react";
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
  const [redigeringsModus, setRedigeringsModus] = useState<boolean>(false);

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
        Periode {periodeNummer + 1} {opplysning.id}
        {opplysningKanRedigeres ? (
          <Button
            size={"xsmall"}
            className={"ml-auto"}
            variant={"tertiary"}
            icon={<PencilWritingIcon />}
            onClick={() => setRedigeringsModus(!redigeringsModus)}
            aria-label={"Rediger opplsyning"}
          >
            Endre
          </Button>
        ) : (
          <PadlockLockedIcon className={"ml-auto"} />
        )}
      </Heading>

      <BodyShort size={"small"} weight={"semibold"}>
        {opplysning.navn}
      </BodyShort>

      {!redigeringsModus && (
        <>
          <BodyShort size={"small"}>{formaterOpplysningVerdi(opplysning)}</BodyShort>
          <div className={"mt-4 flex gap-6"}>
            <div>
              <Detail textColor={"subtle"}>Fra og med</Detail>
              {opplysning.gyldigFraOgMed ? (
                <BodyShort size={"small"}>
                  {formaterTilNorskDato(opplysning.gyldigFraOgMed)}
                </BodyShort>
              ) : (
                <BodyShort size={"small"}>Ikke satt</BodyShort>
              )}
            </div>
            <div>
              <Detail textColor={"subtle"}>Til og med</Detail>

              {opplysning.gyldigTilOgMed ? (
                <BodyShort size={"small"}>
                  {formaterTilNorskDato(opplysning.gyldigTilOgMed)}
                </BodyShort>
              ) : (
                <BodyShort size={"small"}>Ikke satt</BodyShort>
              )}
            </div>
          </div>

          {/*<Button className={"mt-2"} size={"xsmall"} onClick={() => setRedigeringsModus(true)}>*/}
          {/*  Rediger*/}
          {/*</Button>*/}
        </>
      )}

      {redigeringsModus && (
        <>
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
            <Form>
              <Button variant="tertiary" type="button" size="xsmall">
                Slett periode
              </Button>
            </Form>

            <Button
              className="ml-auto"
              variant="tertiary"
              type="button"
              size="xsmall"
              onClick={() => setRedigeringsModus(false)}
            >
              Avbryt
            </Button>

            <Button
              variant="primary"
              type="submit"
              size="xsmall"
              loading={opplysningForm.formState.isSubmitting}
            >
              Lagre
            </Button>
          </div>
        </>
      )}
    </div>
  );
}
