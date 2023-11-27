import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { minsteinntektMockdata } from "~/views/behandling-steg/behandling-steg-minsteinntekt/minsteinntektMockdata";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, `params.oppgaveId er påkrevd`);

  return minsteinntektMockdata;
}
