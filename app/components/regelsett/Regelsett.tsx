import { Detail, Heading, Skeleton } from "@navikt/ds-react";
import { useNavigation } from "react-router";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { OrkestratorBarn } from "~/components/orkestrator-barn/OrkestratorBarn";
import { RegelsettOpplysningListe } from "~/components/regelsett/RegelsettOpplysningListe";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { isDefined } from "~/utils/type-guards";

import { components } from "../../../openapi/behandling-typer";
import styles from "./Regelsett.module.css";

interface IProps {
  behandling: components["schemas"]["Behandling"];
  aktivtRegelsett: components["schemas"]["Regelsett"];
  readonly?: boolean;
}

export function Regelsett({ behandling, aktivtRegelsett, readonly }: IProps) {
  const { state } = useNavigation();
  const { orkestratorBarn, orkestratorLandliste } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId.dagpenger-rett.$behandlingId.behandle",
  );
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
        <Heading
          className={styles.hjemmelTittel}
          size="medium"
          as={state === "loading" ? Skeleton : "h1"}
        >
          {aktivtRegelsett.hjemmel.tittel}
        </Heading>

        <Detail
          textColor="subtle"
          className={styles.hjemmelKilde}
          as={state === "loading" ? Skeleton : "p"}
        >
          {aktivtRegelsett.hjemmel.kilde.navn}
        </Detail>
      </div>

      <Avklaringer
        avklaringer={aktivtRegelsett.avklaringer}
        behandlingId={behandling.behandlingId}
        readOnly={readonly}
      />

      {brukerOpplysninger.length > 0 && (
        <RegelsettOpplysningListe
          tittel={"Søknad"}
          opplysninger={brukerOpplysninger}
          readonly={readonly}
        />
      )}

      {registerOpplysninger.length > 0 && (
        <RegelsettOpplysningListe
          tittel={"Register"}
          opplysninger={registerOpplysninger}
          readonly={readonly}
        />
      )}

      {legacyOpplysninger.length > 0 && (
        <RegelsettOpplysningListe
          tittel={"Arena"}
          opplysninger={legacyOpplysninger}
          readonly={readonly}
        />
      )}

      {regelOpplysninger.length > 0 && (
        <RegelsettOpplysningListe
          tittel={"Regelmotor"}
          opplysninger={regelOpplysninger}
          readonly={readonly}
        />
      )}

      {visOrkestratorBarn && barnOpplysningId && orkestratorBarn && orkestratorLandliste && (
        <OrkestratorBarn
          opplysningId={barnOpplysningId}
          orkestratorBarn={orkestratorBarn}
          orkestratorLandliste={orkestratorLandliste}
        />
      )}
    </div>
  );
}
