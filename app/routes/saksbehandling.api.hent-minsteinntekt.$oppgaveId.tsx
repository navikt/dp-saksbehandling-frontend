import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { hentMinsteinntekt } from "~/models/minsteinntekt.server";
import { getSession } from "~/models/auth.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);
  const session = await getSession(request);

  return hentMinsteinntekt(session, params.oppgaveId);
}
