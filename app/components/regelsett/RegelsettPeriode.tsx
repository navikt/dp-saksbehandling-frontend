import { BodyShort, Button, Detail, Heading } from "@navikt/ds-react";

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
  const { setAktivOpplysningsgruppe } = useDagpengerRettBehandling();

  const grupper = behandling.opplysningsgrupper.filter((gruppe) =>
    aktivtRegelsett.opplysningTypeIder.includes(gruppe.opplysningTypeId),
  );

  return (
    <div>
      <Heading className={styles.hjemmelTittel} size="medium">
        {aktivtRegelsett.hjemmel.tittel}
      </Heading>

      <Detail textColor="subtle" className={styles.hjemmelKilde}>
        {aktivtRegelsett.hjemmel.kilde.navn}
      </Detail>

      <Avklaringer
        avklaringer={aktivtRegelsett.avklaringer}
        behandlingId={behandling.behandlingId}
      />

      {grupper.map((gruppe) => (
        <div
          className={"card flex justify-between items-center m-2 p-2"}
          key={gruppe.opplysningTypeId}
        >
          <Heading size={"xsmall"}>{gruppe.navn}</Heading>
          <BodyShort>{formaterOpplysningVerdi(gruppe.opplysninger[0])}</BodyShort>
          {gruppe.opplysninger.length > 1 && (
            <Button
              className={"self-start"}
              size={"small"}
              variant={"tertiary"}
              onClick={() => setAktivOpplysningsgruppe(gruppe)}
            >
              Mer info
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}
