import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { hentOppgaver } from "~/models/oppgave.server";
import { Outlet } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  console.time("oppgaver loader: hentOppgaver");
  const oppgaver = await hentOppgaver(request, url.search);
  console.timeEnd("oppgaver loader: hentOppgaver");

  return json({ oppgaver });
}

export function Oppgaver() {
  return <Outlet />;
}
