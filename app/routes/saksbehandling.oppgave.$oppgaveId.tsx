import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave, type IOppgave } from "~/models/oppgave.server";

import styles from "~/route-styles/behandle.module.css";
import type { IJournalpost } from "~/models/SAF.server";
import { hentJournalpost } from "~/models/SAF.server";
import { getSession } from "~/models/auth.server";

export interface ISaksbehandlingsOppgaveLoader {
  oppgave: IOppgave;
  journalposter: IJournalpost[];
}

export async function loader({ params, request }: LoaderArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

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
      {oppgave.tilstand === "TilBehandling" && (
        <div className={styles.innstiltBanner}>To-trinns kontroll</div>
      )}

      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
