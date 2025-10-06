import { Timeline } from "@navikt/ds-react";
import { add, sub } from "date-fns";
import { components } from "openapi/behandling-typer";
import { Link } from "react-router";

interface IProps {
  opplysning: components["schemas"]["Opplysningsgruppe"];
  behandlingId: string;
  oppgaveId: string;
  regelsettNavn?: string;
}

export function OpplysningTidslinjerad(props: IProps) {
  const { opplysning, oppgaveId, behandlingId, regelsettNavn } = props;
  return (
    <Timeline.Row
      key={opplysning.opplysningTypeId}
      label={"\u00A0"}
      icon={
        <Link
          to={`/v2/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/${regelsettNavn}/opplysning/${opplysning.opplysningTypeId}`}
          className={"ml-6"}
        >
          {opplysning.navn}
        </Link>
      }
    >
      {opplysning.opplysninger.map((periode) => {
        const start = periode.gyldigFraOgMed
          ? new Date(periode.gyldigFraOgMed)
          : sub(new Date(), { years: 1 });

        const slutt = periode.gyldigTilOgMed
          ? new Date(periode.gyldigTilOgMed)
          : add(new Date(), { years: 1 });

        return (
          <Timeline.Period
            key={periode.id}
            start={start}
            end={slutt}
            // @ts-expect-error Typefeil forsvinner i v2
            status={hentFargeForOpplysningPeriode(periode.verdien)}
            // @ts-expect-error Typefeil forsvinner i v2
            icon={hentIkonForOpplysningPeriode(periode.verdien)}
          >
            {/*// @ts-expect-error Typefeil forsvinner i v2*/}
            {formaterOpplysningVerdi(periode.verdien)}
          </Timeline.Period>
        );
      })}
    </Timeline.Row>
  );
}
