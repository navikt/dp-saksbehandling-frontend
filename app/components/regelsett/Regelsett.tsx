import { Detail, Heading } from "@navikt/ds-react";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import { OpplysningLinje } from "~/components/opplysning-list/OpplysningLinje";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IOpplysning, IRegelsett } from "~/models/behandling.server";

import styles from "./Regelsett.module.css";

interface IProps {
  aktivtRegelsett: IRegelsett;
  readonly?: boolean;
}

type orkestratorOpplysningType = "localDate" | "land" | "boolean" | "number" | "string";

export function Regelsett({ aktivtRegelsett, readonly }: IProps) {
  const { behandling, orkestratorBarnOpplysninger } = useTypedRouteLoaderData(
    "routes/oppgave.$oppgaveId",
  );
  const { featureFlags } = useTypedRouteLoaderData("root");

  const aktivtRegelsettOpplysninger = aktivtRegelsett.opplysningIder
    .map((id) => behandling.opplysninger.find((opplysning) => opplysning.id === id))
    .filter((opplysning) => opplysning !== undefined)
    .filter((opplysning) => opplysning.synlig);

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

  const satsOgBarnetilleggRegelsett =
    aktivtRegelsett.hjemmel.kapittel === "4" && aktivtRegelsett.hjemmel.paragraf === "12";

  function hentOrkestratorOpplysningDataType(key: string): orkestratorOpplysningType {
    const datoTyper = ["fødselsdato", "barnetilleggFom", "barnetilleggTom"];
    if (datoTyper.includes(key)) {
      return "localDate";
    } else if (key === "oppholdssted") {
      return "land";
    } else {
      return "string";
    }
  }

  const mappedData = orkestratorBarnOpplysninger.map((barnOpplysning) => {
    return Object.entries(barnOpplysning).map(([key, value]) => ({
      opplysning: key,
      verdi: value,
      type: hentOrkestratorOpplysningDataType(key),
      visningsTekst: hentOrkestratorOpplysningVisningsTekst(key),
      fraRegister: setFraRegister(key, barnOpplysning.fraRegister),
    }));
  });

  function hentOrkestratorOpplysningVisningsTekst(key: string): string {
    if (key === "fornavnOgMellomnavn") {
      return "Fornavn";
    } else {
      return key
        .replace(/([a-z])([A-Z])/g, "$1 $2")
        .toLowerCase()
        .replace(/^./, (str) => str.toUpperCase());
    }
  }

  function setFraRegister(key: string, fraRegister: boolean): boolean | undefined {
    const eksludertListe = [
      "kvalifisererTilBarnetillegg",
      "barnetilleggFom",
      "barnetilleggTom",
      "begrunnelse",
      "barnId",
    ];

    if (eksludertListe.includes(key)) {
      return undefined;
    }

    if (key === "forsørgerBarnet") {
      return true;
    }

    return fraRegister;
  }

  console.log(mappedData)

  const mappedBarnOpplysninger: IOpplysning[] = orkestratorBarnOpplysninger.map((barnOpplysning) =>
    Object.entries(barnOpplysning).map(
      ([key, value]): IOpplysning => ({
        id: key,
        navn: key
          .replace(/([a-z])([A-Z])/g, "$1 $2")
          .toLowerCase()
          .replace(/^./, (str) => str.toUpperCase()),
        verdi: value.toString(),
        status: "Faktum",
        gyldigFraOgMed: null,
        gyldigTilOgMed: null,
        datatype: hentOrkestratorOpplysningDataType(key),
        kilde: null,
        synlig: true,
        formål: "Register",
        utledetAv: null,
      }),
    ),
  );

  if (satsOgBarnetilleggRegelsett && featureFlags.visOrkestratorBarnOpplysninger) {
    return (
      <div>
        <Heading className={styles.hjemmelTittel} size="medium">
          {aktivtRegelsett.hjemmel.tittel}
        </Heading>
        <Detail textColor="subtle" className={styles.hjemmelKilde}>
          {aktivtRegelsett.hjemmel.kilde.navn}
        </Detail>
        <Avklaringer avklaringer={aktivtRegelsett.avklaringer} />

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

        {mappedBarnOpplysninger.map((barnOpplysning, _index) => (
          <>
            <Heading size={"xsmall"} className={styles.opplysningListeHeading}>
              Barn {_index + 1}
            </Heading>
            <ul className={styles.opplysningListe}>
              {barnOpplysning.map((opplysning) => (
                <OpplysningLinje
                  key={`${opplysning.id}-${opplysning.verdi}`}
                  opplysning={opplysning}
                  readonly={readonly}
                />
              ))}
            </ul>
          </>
        ))}
      </div>
    );
  }

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
    </div>
  );
}
