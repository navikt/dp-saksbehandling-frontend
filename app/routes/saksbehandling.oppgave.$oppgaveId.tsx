import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";

import styles from "~/route-styles/behandle.module.css";
import type { IJournalpost } from "~/models/SAF.server";
import { hentJournalpost } from "~/models/SAF.server";
import { getSession } from "~/models/auth.server";

interface IJournalposter {
  data: IJournalpost[];
  errors: boolean;
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  const journalposter: IJournalposter = {
    data: [],
    errors: false,
  };

  for (const journalpostId of oppgave.journalposter) {
    const response = await hentJournalpost(request, journalpostId);

    if (response.status === "error") {
      journalposter.errors = true;
    }

    if (response.status === "success" && response.data) {
      journalposter.data.push(response.data);
    } else {
      journalposter.errors = true;
    }
  }

  return json({ oppgave, journalposter });
}

export default function PersonBehandle() {
  const { oppgave } = useLoaderData<typeof loader>();
  const forslagTilVedtak = oppgave.steg.find((steg) => steg.id === "Forslag til vedtak");

  return (
    <>
      {forslagTilVedtak?.tilstand === "Utført" && oppgave.tilstand === "TilBehandling" && (
        <div className={styles.innstiltBanner}>To-trinns kontroll</div>
      )}

      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
