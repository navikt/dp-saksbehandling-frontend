import { CheckmarkCircleFillIcon, XMarkOctagonFillIcon } from "@navikt/aksel-icons";
import classnames from "classnames";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { IOpplysning } from "~/models/behandling.server";

import styles from "./KravPaaDagpenger.module.css";

export function KravPaaDagpenger() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const harKravDagpengerOpplysning = finnOpplysningMedNavn(
    "Krav på dagpenger",
    behandling.opplysning,
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
          <CheckmarkCircleFillIcon color={"var(--a-green-500)"} />
          Bruker har rett til dagpenger
        </>
      )}

      {(!harKravDagpengerOpplysning || harKravDagpengerOpplysning.verdi === "false") && (
        <>
          <XMarkOctagonFillIcon color={"var(--a-red-500)"} />
          Bruker har ikke rett til dagpenger
        </>
      )}
    </div>
  );
}

function finnOpplysningMedNavn(navn: string, opplysninger: IOpplysning[]) {
  return opplysninger.find((opplysning) => opplysning.navn === navn);
}
