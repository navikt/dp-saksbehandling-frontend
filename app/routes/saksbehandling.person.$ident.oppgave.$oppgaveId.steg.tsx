import { Outlet, useRouteLoaderData } from "@remix-run/react";
import { BehandleSoknadMeny } from "~/components/behandle-soknad-meny/BehandleSoknadMeny";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import { type IOppgave } from "~/models/oppgave.server";

import styles from "~/route-styles/behandle.module.css";

export default function PersonBehandle() {
  const data = useRouteLoaderData(`routes/saksbehandling.person.$ident.oppgave.$oppgaveId`);
  const oppgave: IOppgave = data.oppgave;

  return (
    <>
      <div className={styles.menyContainer}>
        <div className={styles.behandlingStegListe}>
          <ul>
            {oppgave.steg.map((steg) => (
              <BehandlingStegMenyPunkt key={steg.uuid} {...steg} />
            ))}
          </ul>
        </div>

        <BehandleSoknadMeny
          tilstand={oppgave.tilstand}
          muligetilstander={oppgave.muligeTilstander}
        />
      </div>
      <Outlet />
    </>
  );
}
