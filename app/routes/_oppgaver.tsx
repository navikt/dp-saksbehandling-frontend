import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { hentOppgaver } from "~/models/oppgave.server";
import { Outlet } from "@remix-run/react";

export async function loader({ request }: LoaderFunctionArgs) {
  const url = new URL(request.url);
  const oppgaver = await hentOppgaver(request, url.search);

  return json({ oppgaver });
}

export function Oppgaver() {
  return <Outlet />;
}
