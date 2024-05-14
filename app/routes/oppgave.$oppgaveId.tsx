import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { defer, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave, leggTilbakeOppgave, utsettOppgave } from "~/models/oppgave.server";
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
  const formData = await request.formData();
  const action = formData.get("_action");

  switch (action) {
    case "legg-tilbake-oppgave":
      const leggTilbakeResponse = await leggTilbakeOppgave(request, params.oppgaveId);

      if (leggTilbakeResponse.status === "success") {
        return redirect("/");
      }
      break;

    case "utsett-oppgave":
      const utsettTilDato = formData.get("utsettTilDato");
      const utsettResponse = await utsettOppgave(
        request,
        params.oppgaveId,
        utsettTilDato as string,
      );

      if (utsettResponse.status === "success") {
        return redirect("/");
      }

      break;
  }

  throw new Error("Noe gikk galt");
}

export default function Oppgave() {
  return (
    <div className={styles.container}>
      <Outlet />
      <OppgaveInformasjon />
    </div>
  );
}
