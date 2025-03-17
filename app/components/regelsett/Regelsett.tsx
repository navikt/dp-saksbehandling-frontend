import { Detail, Heading } from "@navikt/ds-react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { OpplysningLinje } from "~/components/opplysning-list/OpplysningLinje";
import { OrkestratorBarn } from "~/components/orkestrator-barn/OrkestratorBarn";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IRegelsett } from "~/models/behandling.server";

import styles from "./Regelsett.module.css";

interface IProps {
  aktivtRegelsett: IRegelsett;
  readonly?: boolean;
}

export function Regelsett({ aktivtRegelsett, readonly }: IProps) {
  const { behandling, orkestratorBarn } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

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

  const mellomstegOpplysninger = aktivtRegelsettOpplysninger.filter(
    (opplysning) => opplysning?.formål === "Mellomsteg",
  );

  const visOrkestratorBarn =
    satsOgBarnetillegg && featureFlags.orkestratorBarnOpplysninger

  return (
    <div>
      <Heading className={styles.hjemmelTittel} size="medium">
        {aktivtRegelsett.hjemmel.tittel}
      </Heading>
      <Detail textColor="subtle" className={styles.hjemmelKilde}>
        {aktivtRegelsett.hjemmel.kilde.navn}
      </Detail>
      <Avklaringer avklaringer={aktivtRegelsett.avklaringer} />

      {brukerOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Brukerdata
          </Heading>
          <ul className={styles.opplysningListe}>
            {brukerOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
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
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {mellomstegOpplysninger.length > 0 && (
        <>
          <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
            Mellomsteg
          </Heading>
          <ul className={styles.opplysningListe}>
            {mellomstegOpplysninger.map((opplysning) => (
              <OpplysningLinje
                key={`${opplysning.id}-${opplysning.verdi}`}
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
                opplysning={opplysning}
                readonly={readonly}
              />
            ))}
          </ul>
        </>
      )}

      {visOrkestratorBarn && (
        <>
          {orkestratorBarn.map((barn, index) => {
            return <OrkestratorBarn key={index} barnNummer={index + 1} barn={barn} />;
          })}
        </>
      )}
    </div>
  );
}
