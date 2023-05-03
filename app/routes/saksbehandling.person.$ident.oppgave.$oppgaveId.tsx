import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { BehandleSoknadMeny } from "~/components/behandle-soknad-meny/BehandleSoknadMeny";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import { hentOppgave } from "~/models/oppgave.server";

import styles from "~/route-styles/behandle.module.css";
import type { IJournalpost } from "~/models/SAF.server";
import { hentJournalpost } from "~/models/SAF.server";

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const oppgave = await hentOppgave(params.oppgaveId);
  invariant(oppgave, `Fant ikke oppgave med id: ${params.oppgaveId}`);

  const journalposter: IJournalpost[] = [];
  for (const journalpostId of oppgave.journalposter) {
    const data = await hentJournalpost(request, journalpostId);
    journalposter.push(data);
  }

  return json({ oppgave, journalposter });
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

        <BehandleSoknadMeny tilstand={oppgave.tilstand} />
      </div>
      <Outlet />
    </div>
  );
}
