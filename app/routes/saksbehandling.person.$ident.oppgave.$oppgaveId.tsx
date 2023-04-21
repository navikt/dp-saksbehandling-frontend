import type { LoaderArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { hentOppgave } from "~/models/oppgave.server";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import { BehandleSoknadMeny } from "~/components/behandle-soknad-meny/BehandleSoknadMeny";
import styles from "~/route-styles/behandle.module.css";

export async function loader({ params }: LoaderArgs) {
  console.log("Kjører loader() i saksbehandling.person.$ident.behandle.$oppgaveId");
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const oppgave = await hentOppgave(params.oppgaveId);

  console.log(oppgave);

  invariant(oppgave, `Fant ikke behandling med id: ${params.oppgaveId}`);

  return json({ oppgave });
}

export default function PersonBehandle() {
  const { oppgave } = useLoaderData<typeof loader>();

  return (
    <div className={styles.container}>
      <div className={styles.menyContainer}>
        <div className={styles.behandlingStegListe}>
          <ul>
            {oppgave.steg.map((steg) => (
              <BehandlingStegMenyPunkt key={steg.uuid} {...steg} />
            ))}
          </ul>
        </div>

        <BehandleSoknadMeny />
      </div>
      <Outlet />
    </div>
  );
}
