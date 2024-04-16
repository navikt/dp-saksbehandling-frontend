import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentArbeidssokerStatus, type IArbeidssokerStatus } from "~/models/arbeidssoker.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentPersonalia } from "~/models/pdl.server";
import type { INetworkResponse } from "~/utils/types";
import { sikkerLogger } from "~/utils/logger.utils";
import { Personalia } from "~/components/personalia/Personalia";

export const shouldRevalidate = () => false;

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");

  const oppgave = await hentOppgave(request, params.oppgaveId);
  const arbeidssokerStatusPromise = hentArbeidssokerStatus(request, oppgave.personIdent);

  try {
    const personaliaPromise = hentPersonalia(request, oppgave.personIdent);
    const [personalia, arbeidssokerStatusResponse] = await Promise.all([
      personaliaPromise,
      arbeidssokerStatusPromise,
    ]);

    if (!personalia.hentPerson) {
      return json({
        error: "Klarte ikke hente personalia",
        person: null,
        arbeidssokerStatusResponse: arbeidssokerStatusResponse,
      });
    }

    return json({
      error: null,
      person: personalia.hentPerson,
      arbeidssokerStatusResponse: arbeidssokerStatusResponse,
    });
  } catch (error: unknown) {
    sikkerLogger.info(`PDL kall catch error: ${error}`);
    const arbeidssokerStatusError: INetworkResponse<IArbeidssokerStatus> = {
      status: "error",
      error: {
        statusCode: 500,
        statusText: "noe gikk galt :shrug:",
      },
    };
    return json({
      error: `Feil ved henting av personalia fra PDL`,
      person: null,
      arbeidssokerStatusResponse: arbeidssokerStatusError,
    });
  }
}

export default function Person() {
  const { person, error } = useLoaderData<typeof loader>();

  return (
    <>
      {error && <div>{error}</div>}
      {person && <Personalia {...person} />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
