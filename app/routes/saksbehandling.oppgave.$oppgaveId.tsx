import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { getSession } from "~/models/auth.server";
import styles from "~/route-styles/behandle.module.css";
import { masterMenyMock } from "mocks/api-routes/oppgaverResponse";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const session = await getSession(request);
  if (params.oppgaveId === masterMenyMock.uuid) return json({ oppgave: masterMenyMock }); // ønsker en hardkodet oppgave i test
  const oppgave = await hentOppgave(params.oppgaveId, session);

  return json({ oppgave });
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
