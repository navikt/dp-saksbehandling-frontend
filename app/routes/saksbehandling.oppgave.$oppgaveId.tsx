import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { getSession } from "~/models/auth.server";
import { redirect } from "@remix-run/router";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  // dp-saksbehandling returnerer tomt array for steg frem til regelmotor har klargjort opplysninger som må bekreftes
  if (oppgave.steg.length > 0 && !request.url.includes("/steg")) {
    throw redirect(`steg`);
  }

  return json({ oppgave });
}

export default function Oppgave() {
  return (
    <>
      <Outlet />
    </>
  );
}
