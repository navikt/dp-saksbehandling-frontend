import { GavelSoundBlockIcon } from "@navikt/aksel-icons";
import classnames from "classnames";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { IOpplysning } from "~/models/behandling.server";

import styles from "./KravPaaDagpenger.module.css";

export function KravPaaDagpenger() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const harKravDagpengerOpplysning = finnOpplysningMedNavn(
    "Krav på dagpenger",
    behandling.opplysninger,
  );
  return (
    <div
      className={classnames(styles.kravPaaDagpenger, {
        [styles.kravPaaDagpengerSuccess]: harKravDagpengerOpplysning?.verdi === "true",
        [styles.kravPaaDagpengerError]:
          !harKravDagpengerOpplysning || harKravDagpengerOpplysning?.verdi === "false",
      })}
    >
      {harKravDagpengerOpplysning?.verdi === "true" && (
        <>
          <GavelSoundBlockIcon fontSize="1.5rem" />
          Bruker har rett til dagpenger
        </>
      )}

      {(!harKravDagpengerOpplysning || harKravDagpengerOpplysning.verdi === "false") && (
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
