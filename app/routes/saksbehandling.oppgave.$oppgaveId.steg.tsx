import { Outlet, useRouteLoaderData } from "@remix-run/react";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import { type ISaksbehandlingsOppgaveLoader } from "./saksbehandling.oppgave.$oppgaveId";
import styles from "~/route-styles/behandle.module.css";

export default function PersonBehandle() {
  const { oppgave } = useRouteLoaderData(
    `routes/saksbehandling.oppgave.$oppgaveId`,
  ) as ISaksbehandlingsOppgaveLoader;

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
      </div>
      <Outlet />
    </>
  );
}
