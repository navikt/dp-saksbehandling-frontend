import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { type IOppgave, hentOppgave } from "~/models/oppgave.server";

import styles from "~/route-styles/behandle.module.css";
import type { IJournalpost } from "~/models/SAF.server";
import { hentJournalpost } from "~/models/SAF.server";

export interface ISaksbehandlingsOppgaveLoader {
  oppgave: IOppgave;
  journalposter: IJournalpost[];
}

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  const oppgave = await hentOppgave(params.oppgaveId, request);

  if (!oppgave) {
    throw new Response(null, {
      status: 500,
      statusText: `Fant ikke oppgave med id: ${params.oppgaveId}`,
    });
  }

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
    <>
      {oppgave.tilstand === "Innstilt" && (
        <div className={styles.innstiltBanner}>To-trinns kontroll</div>
      )}

      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
