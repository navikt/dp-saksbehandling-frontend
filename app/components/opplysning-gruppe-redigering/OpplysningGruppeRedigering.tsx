import { CheckmarkIcon, XMarkIcon } from "@navikt/aksel-icons";
import {
  Accordion,
  Button,
  Detail,
  Heading,
  Timeline,
  TimelinePeriodProps,
} from "@navikt/ds-react";
import { Fragment, useState } from "react";

import { RedigerPeriode } from "~/components/opplysning-gruppe-redigering/RedigerPeriode";
import { formaterOpplysningVerdi } from "~/components/opplysning-linje/OpplysningLinje";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";
import { formaterNorskDato } from "~/utils/dato.utils";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
}

interface IAktivPeriode {
  opplysning: components["schemas"]["Opplysning"];
  periodeNummer: number;
}

export function OpplysningGruppeRedigering({ opplysningGruppe, behandlingId }: IProps) {
  const [aktivPeriode, setAktivPeriode] = useState<IAktivPeriode>({
    opplysning: opplysningGruppe.opplysninger[0],
    periodeNummer: 0,
  });

  console.log(opplysningGruppe.opplysninger);

  const { setAktivOpplysningsgruppe } = useDagpengerRettBehandling();
  return (
    <div className={"p-2"}>
      <div className={"flex justify-between"}>
        <div>
          <Heading size={"xsmall"}>{opplysningGruppe.navn}</Heading>
          <Detail textColor={"subtle"}>§ 4-5. Reelle arbeidssøkere (mock)</Detail>
        </div>
        <Button
          size={"small"}
          variant={"tertiary"}
          icon={<XMarkIcon />}
          onClick={() => setAktivOpplysningsgruppe(undefined)}
        >
          Lukk
        </Button>
      </div>

      <div>
        <Timeline>
          <Timeline.Row label={""}>
            {opplysningGruppe.opplysninger.map((opplysning, index) => (
              <Timeline.Period
                key={opplysning.opplysningTypeId}
                start={
                  opplysning.gyldigFraOgMed
                    ? new Date(opplysning.gyldigFraOgMed)
                    : new Date("01.01.1900")
                }
                end={
                  opplysning.gyldigTilOgMed
                    ? new Date(opplysning.gyldigTilOgMed)
                    : new Date("01.01.1900")
                }
                status={hentFargeForTidslinjePeriodeOpplysning(opplysning)}
                icon={hentIkonForTIdslinjePeriodeOpplysning(opplysning)}
                statusLabel={""}
                onSelectPeriod={() => setAktivPeriode({ opplysning, periodeNummer: index })}
                isActive={aktivPeriode?.opplysning.id === opplysning.id}
                id={opplysning.id}
              >
                <Detail textColor={"subtle"}>Periode: {index}</Detail>{" "}
                <Detail textColor={"subtle"}>
                  {`${opplysning.gyldigFraOgMed ? formaterNorskDato(opplysning.gyldigFraOgMed) : ""} - ${opplysning.gyldigTilOgMed ? formaterNorskDato(opplysning.gyldigTilOgMed) : "♾️"}`}
                </Detail>{" "}
                {formaterOpplysningVerdi(opplysning)}
              </Timeline.Period>
            ))}
          </Timeline.Row>
          {/*<Timeline.Zoom>*/}
          {/*  <Timeline.Zoom.Button label="1 uke" interval="month" count={0.25} />*/}
          {/*  <Timeline.Zoom.Button label="1 mnd" interval="month" count={1} />*/}
          {/*  <Timeline.Zoom.Button label="3 mnd" interval="month" count={3} />*/}
          {/*  <Timeline.Zoom.Button label="7 mnd" interval="month" count={7} />*/}
          {/*  <Timeline.Zoom.Button label="9 mnd" interval="month" count={9} />*/}
          {/*  <Timeline.Zoom.Button label="1.5 år" interval="year" count={1.5} />*/}
          {/*</Timeline.Zoom>*/}
        </Timeline>
      </div>

      {aktivPeriode && (
        <Fragment key={aktivPeriode.opplysning.id}>
          <RedigerPeriode
            opplysning={aktivPeriode.opplysning}
            periodeNummer={aktivPeriode.periodeNummer}
            behandlingId={behandlingId}
          />
        </Fragment>
      )}

      <Accordion size={"small"} className={"mt-8"}>
        <Accordion.Item>
          <Accordion.Header>Rådata</Accordion.Header>
          <Accordion.Content>
            <Detail>
              <pre>{JSON.stringify(opplysningGruppe.opplysninger, null, 2)}</pre>
            </Detail>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

function hentFargeForTidslinjePeriodeOpplysning(
  opplysning: components["schemas"]["Opplysning"],
): TimelinePeriodProps["status"] {
  switch (opplysning.datatype) {
    case "boolsk":
      return opplysning.verdi === "true" ? "success" : "danger";
    default:
      return "info";
  }
}

function hentIkonForTIdslinjePeriodeOpplysning(opplysning: components["schemas"]["Opplysning"]) {
  switch (opplysning.datatype) {
    case "boolsk":
      return opplysning.verdi === "true" ? <CheckmarkIcon /> : <XMarkIcon />;
    default:
      break;
  }
}
