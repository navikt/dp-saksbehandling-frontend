import styles from "~/route-styles/oppgave.module.css";

import { ValidatedForm } from "remix-validated-form";
import { hentValideringRegler } from "~/utils/validering.util";
import { OpplysningTabell } from "~/components/opplysning-tabell/OpplysningTabell";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { Tabs } from "@navikt/ds-react";

export default function Oppgave() {
  const { behandling } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <Tabs.Panel value="behandling" className={styles.behandling}>
      <ValidatedForm
        validator={hentValideringRegler(behandling.opplysning)}
        method="post"
        className={styles.opplysninger}
      >
        <OpplysningTabell opplysninger={behandling.opplysning} />
      </ValidatedForm>
      <OppgaveInformasjon />
    </Tabs.Panel>
  );
}
