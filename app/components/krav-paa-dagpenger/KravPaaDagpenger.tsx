import { GavelSoundBlockIcon, QuestionmarkDiamondIcon } from "@navikt/aksel-icons";
import { Loader } from "@navikt/ds-react";
import classnames from "classnames";
import { Suspense } from "react";
import { Await } from "react-router";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import { components } from "../../../openapi/behandling-typer";
import styles from "./KravPaaDagpenger.module.css";

export function KravPaaDagpenger() {
  const { behandlingPromise } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Suspense fallback={<Loader className="ml-2" size={"large"} />}>
      <Await resolve={behandlingPromise} errorElement={<KravPaaDagpengerError />}>
        {(behandling) => {
          if (behandling.error) {
            return <KravPaaDagpengerError />;
          }

          // Gammel måte - fases ut
          const harKravDagpengerOpplysning = finnOpplysningMedNavn(
            "Krav på dagpenger",
            behandling.data.opplysninger,
          );

          // Ny måte
          const harKravDagpengerUtfall = behandling.data.utfall;

          const harKravPaaDagpenger =
            harKravDagpengerUtfall === true || harKravDagpengerOpplysning?.verdi === "true";

          return (
            <div
              className={classnames(styles.kravPaaDagpenger, {
                [styles.kravPaaDagpengerSuccess]: harKravPaaDagpenger,
                [styles.kravPaaDagpengerError]: !harKravPaaDagpenger,
              })}
            >
              {harKravPaaDagpenger && (
                <>
                  <GavelSoundBlockIcon fontSize="1.5rem" />
                  Bruker har rett til dagpenger
                </>
              )}

              {!harKravPaaDagpenger && (
                <>
                  <GavelSoundBlockIcon fontSize="1.5rem" />
                  Bruker har ikke rett til dagpenger
                </>
              )}
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
}

function KravPaaDagpengerError() {
  return (
    <div className={classnames(styles.kravPaaDagpenger, styles.kravPaaDagpengerError)}>
      <QuestionmarkDiamondIcon fontSize="1.5rem" />
      Klarte ikke hente utfall fra behandling
    </div>
  );
}

function finnOpplysningMedNavn(navn: string, opplysninger: components["schemas"]["Opplysning"][]) {
  return opplysninger.find((opplysning) => opplysning.navn === navn);
}
