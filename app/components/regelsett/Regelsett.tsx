import { Detail, Heading } from "@navikt/ds-react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { OrkestratorBarn } from "~/components/orkestrator-barn/OrkestratorBarn";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/behandling-typer";
import { OpplysningLinje } from "../opplysning-linje/OpplysningLinje";
import styles from "./Regelsett.module.css";

interface IProps {
  behandling: components["schemas"]["Behandling"];
  aktivtRegelsett: components["schemas"]["Regelsett"];
  readonly?: boolean;
}

export function Regelsett({ behandling, aktivtRegelsett, readonly }: IProps) {
  const { featureFlags } = useTypedRouteLoaderData("root");

  const aktivtRegelsettOpplysninger = aktivtRegelsett.opplysningIder
    .map((id) => behandling.opplysninger.find((opplysning) => opplysning.id === id))
    .filter((opplysning) => opplysning !== undefined)
    .filter((opplysning) => opplysning.synlig);

  const satsOgBarnetillegg =
    aktivtRegelsett.hjemmel.kapittel === "4" && aktivtRegelsett.hjemmel.paragraf === "12";

  const brukerOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Bruker",
  );

  const registerOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Register",
  );

  const legacyOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Legacy",
  );

  const regelOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Regel",
  );

  const visOrkestratorBarn = satsOgBarnetillegg && featureFlags.orkestratorBarnOpplysninger;
  const barnOpplysningId = aktivtRegelsettOpplysninger.find(
    (opplysning) => opplysning.datatype === "barn",
  )?.id;

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

      {brukerOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Brukerdata
          </Heading>
          <ul className={styles.opplysningListe}>
            {brukerOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                behandlingId={behandling.behandlingId}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {registerOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Registerdata
          </Heading>
          <ul className={styles.opplysningListe}>
            {registerOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                behandlingId={behandling.behandlingId}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {legacyOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Legacy
          </Heading>
          <ul className={styles.opplysningListe}>
            {legacyOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                behandlingId={behandling.behandlingId}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {regelOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Behandling
          </Heading>
          <ul className={styles.opplysningListe}>
            {regelOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
                behandlingId={behandling.behandlingId}
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {visOrkestratorBarn && barnOpplysningId && (
        <OrkestratorBarn opplysningId={barnOpplysningId} />
      )}
    </div>
  );
}
