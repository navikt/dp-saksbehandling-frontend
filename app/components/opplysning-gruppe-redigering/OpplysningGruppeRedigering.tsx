import { CheckmarkIcon, XMarkIcon } from "@navikt/aksel-icons";
import { Button, Detail, Heading, Timeline } from "@navikt/ds-react";
import { Fragment, useState } from "react";

import { RedigerPeriode } from "~/components/opplysning-gruppe-redigering/RedigerPeriode";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";

import { components } from "../../../openapi/behandling-typer";

interface IProps {
  behandlingId: string;
  opplysningGruppe: components["schemas"]["Opplysningsgruppe"];
}

export function OpplysningGruppeRedigering({ opplysningGruppe, behandlingId }: IProps) {
  const [aktivPeriode, setAktivPeriode] = useState<components["schemas"]["Opplysning"]>(
    opplysningGruppe.opplysninger[0],
  );

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
            {opplysningGruppe.opplysninger.map((opplysning) => (
              <Timeline.Period
                key={opplysning.opplysningTypeId}
                start={
                  opplysning.gyldigFraOgMed
                    ? new Date(opplysning.gyldigFraOgMed)
                    : new Date("01.01.1900")
                }
                end={
                  opplysning.gyldigFraOgMed
                    ? new Date(opplysning.gyldigFraOgMed)
                    : new Date("01.01.2100")
                }
                status={"info"}
                icon={<CheckmarkIcon />}
                statusLabel={""}
                onSelectPeriod={() => setAktivPeriode(opplysning)}
                isActive={aktivPeriode?.id === opplysning.id}
                id={opplysning.id}
              />
            ))}
          </Timeline.Row>
        </Timeline>
      </div>

      {aktivPeriode && (
        <Fragment key={aktivPeriode.id}>
          <RedigerPeriode opplysning={aktivPeriode} behandlingId={behandlingId} />
        </Fragment>
      )}
    </div>
  );
}
