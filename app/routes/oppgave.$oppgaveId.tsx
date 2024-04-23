import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { defer, redirect } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave, leggTilbakeOppgave } from "~/models/oppgave.server";
import { OppgaveInformasjon } from "~/components/oppgave-informasjon/OppgaveInformasjon";
import { hentJournalpost } from "~/models/saf.server";
import styles from "~/route-styles/oppgave.module.css";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);

  function hentJournalposter() {
    return Promise.all(
      oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
    );
  }

  const journalposterPromises = hentJournalposter();

  return defer({ oppgave, journalposterPromises });
}

export async function action({ params, request }: ActionFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const response = await leggTilbakeOppgave(request, params.oppgaveId);

  if (response.status === "success") {
    return redirect("/");
  }

  throw new Error("Noe gikk galt");
}

export default function Oppgave() {
  const { oppgave } = useLoaderData<typeof loader>();

  return (
    <div className={styles.container}>
      <Outlet />
      <OppgaveInformasjon person={oppgave.person} />
    </div>
  );
}
