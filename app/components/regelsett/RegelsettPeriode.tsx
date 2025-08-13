import { Detail, Heading } from "@navikt/ds-react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { OrkestratorBarn } from "~/components/orkestrator-barn/OrkestratorBarn";
import { RegelsettOpplysningListe } from "~/components/regelsett/RegelsettOpplysningListe";
import { isDefined } from "~/utils/type-guards";

import { components } from "../../../openapi/behandling-typer";
import styles from "./Regelsett.module.css";

interface IProps {
  behandling: components["schemas"]["Behandling"];
  aktivtRegelsett: components["schemas"]["Regelsett"];
  readonly?: boolean;
}

export function RegelsettPeriode({ behandling, aktivtRegelsett }: IProps) {
  const opplysningGrupper = aktivtRegelsett.opplysningTypeIder
    .map((id) =>
      behandling.opplysningsgrupper.find(
        (gruppe) => gruppe.synlig && gruppe.opplysningTypeId === id,
      ),
    )
    .filter(isDefined);

  const brukerOpplysninger = opplysningGrupper.filter(
    (opplysning) => opplysning.formål === "Bruker",
  );

  const registerOpplysninger = opplysningGrupper.filter(
    (opplysning) => opplysning.formål === "Register",
  );

  const legacyOpplysninger = opplysningGrupper.filter(
    (opplysning) => opplysning.formål === "Legacy",
  );

  const regelOpplysninger = opplysningGrupper.filter((opplysning) => opplysning.formål === "Regel");

  const visOrkestratorBarn =
    aktivtRegelsett.hjemmel.kapittel === "4" && aktivtRegelsett.hjemmel.paragraf === "12";

  const barnOpplysningId = opplysningGrupper.find((opplysning) => opplysning.datatype === "barn")
    ?.opplysninger[0].id;

  return (
    <div className={styles.container}>
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

      {brukerOpplysninger.length > 0 && (
        <RegelsettOpplysningListe tittel={"Søknad"} opplysninger={brukerOpplysninger} />
      )}

      {registerOpplysninger.length > 0 && (
        <RegelsettOpplysningListe tittel={"Register"} opplysninger={registerOpplysninger} />
      )}

      {legacyOpplysninger.length > 0 && (
        <RegelsettOpplysningListe tittel={"Arena"} opplysninger={legacyOpplysninger} />
      )}

      {regelOpplysninger.length > 0 && (
        <RegelsettOpplysningListe tittel={"Regelmotor"} opplysninger={regelOpplysninger} />
      )}

      {visOrkestratorBarn && barnOpplysningId && (
        <OrkestratorBarn opplysningId={barnOpplysningId} />
      )}
    </div>
  );
}
