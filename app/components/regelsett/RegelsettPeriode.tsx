import { ChevronLeftIcon, ChevronRightIcon } from "@navikt/aksel-icons";
import { BodyShort, Button, Detail, Heading, Tooltip } from "@navikt/ds-react";
import classnames from "classnames";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { useDagpengerRettBehandling } from "~/hooks/useDagpengerRettBehandling";

import { components } from "../../../openapi/behandling-typer";
import { formaterOpplysningVerdi } from "../opplysning-linje/OpplysningLinje";
import styles from "./Regelsett.module.css";

interface IProps {
  behandling: components["schemas"]["Behandling"];
  aktivtRegelsett: components["schemas"]["Regelsett"];
  readonly?: boolean;
}

export function RegelsettPeriode({ behandling, aktivtRegelsett }: IProps) {
  const { aktivOpplysningsgruppe, setAktivOpplysningsgruppe } = useDagpengerRettBehandling();

  const grupper = behandling.opplysningsgrupper.filter((gruppe) =>
    aktivtRegelsett.opplysningTypeIder.includes(gruppe.opplysningTypeId),
  );

  return (
    <div className={"bg-gray-100"}>
      <div className={styles.hjemmelContainer}>
        <Heading className={styles.hjemmelTittel} size="medium">
          {aktivtRegelsett.hjemmel.tittel}
        </Heading>

        <Detail textColor="subtle" className={styles.hjemmelKilde}>
          {aktivtRegelsett.hjemmel.kilde.navn}
        </Detail>
      </div>

      <Avklaringer
        avklaringer={aktivtRegelsett.avklaringer}
        behandlingId={behandling.behandlingId}
      />

      <div className={"card m-4"}>
        <Heading size={"small"} className={"pt-4 pl-6"}>
          Opplysninger
        </Heading>
        <ul>
          {grupper.map((gruppe) => {
            const erAktivGruppe =
              gruppe.opplysningTypeId === aktivOpplysningsgruppe?.opplysningTypeId;
            return (
              <li
                className={classnames(styles.opplysningLinje, {
                  [styles.opplysningLinjeAktiv]: erAktivGruppe,
                })}
                key={gruppe.opplysningTypeId}
              >
                <BodyShort>{gruppe.navn}</BodyShort>
                <BodyShort>{formaterOpplysningVerdi(gruppe.opplysninger[0])}</BodyShort>

                <Tooltip content={erAktivGruppe ? "Lukk opplysning" : "Åpne opplysning"}>
                  <Button
                    size={"small"}
                    variant={"tertiary"}
                    icon={erAktivGruppe ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    onClick={() => setAktivOpplysningsgruppe(erAktivGruppe ? undefined : gruppe)}
                  />
                </Tooltip>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
