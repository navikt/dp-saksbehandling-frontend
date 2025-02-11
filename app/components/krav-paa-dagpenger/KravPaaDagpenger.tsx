import { GavelSoundBlockIcon } from "@navikt/aksel-icons";
import classnames from "classnames";

import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

import styles from "./KravPaaDagpenger.module.css";

export function KravPaaDagpenger() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const harKravDagpengerOpplysning = behandling.utfall;

  return (
    <div
      className={classnames(styles.kravPaaDagpenger, {
        [styles.kravPaaDagpengerSuccess]: harKravDagpengerOpplysning,
        [styles.kravPaaDagpengerError]: !harKravDagpengerOpplysning,
      })}
    >
      {harKravDagpengerOpplysning && (
        <>
          <GavelSoundBlockIcon fontSize="1.5rem" />
          Bruker har rett til dagpenger
        </>
      )}

      {!harKravDagpengerOpplysning && (
        <>
          <GavelSoundBlockIcon fontSize="1.5rem" />
          Bruker har ikke rett til dagpenger
        </>
      )}
    </div>
  );
}
