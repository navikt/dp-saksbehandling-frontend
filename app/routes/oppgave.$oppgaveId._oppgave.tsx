import styles from "~/route-styles/oppgave.module.css";

import { ValidatedForm } from "remix-validated-form";
import { hentValideringRegler } from "~/utils/validering.util";
import { OpplysningTabell } from "~/components/opplysning-tabell/OpplysningTabell";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { Outlet } from "@remix-run/react";

export default function Oppgave() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <div className={styles.behandling}>
      <div className={styles.opplysninger}>
        <ValidatedForm validator={hentValideringRegler(behandling.opplysning)} method="post">
          <OpplysningTabell readonly={true} opplysninger={behandling.opplysning} />
        </ValidatedForm>
        <Outlet />
      </div>
      <OppgaveInformasjon />
    </div>
  );
}
