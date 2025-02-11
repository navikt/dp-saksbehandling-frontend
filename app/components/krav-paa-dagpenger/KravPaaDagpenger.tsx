import { GavelSoundBlockIcon } from "@navikt/aksel-icons";
import classnames from "classnames";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IOpplysning } from "~/models/behandling.server";

import styles from "./KravPaaDagpenger.module.css";

export function KravPaaDagpenger() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  // Gammel måte - fases ut
  const harKravDagpengerOpplysning = finnOpplysningMedNavn(
    "Krav på dagpenger",
    behandling.opplysninger,
  );

  // Ny måte
  const harKravDagpengerUtfall = behandling.utfall;

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
}

function finnOpplysningMedNavn(navn: string, opplysninger: IOpplysning[]) {
  return opplysninger.find((opplysning) => opplysning.navn === navn);
}
