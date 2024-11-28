import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";

import { hentOppgaver } from "~/models/oppgave.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const oppgaverResponse = await hentOppgaver(request, url.search);

  return json({
    oppgaver: oppgaverResponse.oppgaver,
    totaltAntallOppgaver: oppgaverResponse.totaltAntallOppgaver,
  });
}

export function Oppgaver() {
  return <Outlet />;
}
