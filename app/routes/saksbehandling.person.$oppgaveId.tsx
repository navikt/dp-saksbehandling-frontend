import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Navnestripe } from "~/components/navnestripe/Navnestripe";
import { Personalia } from "~/components/personalia/Personalia";
import { hentArbeidssokerStatus, type IArbeidssokerStatus } from "~/models/arbeidssoker.server";
import { getSession } from "~/models/auth.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentPersonalia } from "~/models/pdl.server";
import { getEnv } from "~/utils/env.utils";
import type { INetworkResponse } from "~/utils/types";
import { sikkerLogger } from "~/utils/logger.utils";
import { mockPerson } from "../../mocks/data/mock-person";

export const shouldRevalidate = () => false;

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");

  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);
  const arbeidssokerStatusPromise = hentArbeidssokerStatus(session, oppgave.personIdent);

  try {
    if (getEnv("IS_LOCALHOST") === "true") {
      return json({
        error: null,
        person: mockPerson,
        arbeidssokerStatusResponse: await arbeidssokerStatusPromise,
      });
    }

    const personaliaPromise = hentPersonalia(session, oppgave.personIdent);
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
  const fulltNavn = `${person?.navn[0].fornavn} ${person?.navn[0].mellomnavn ?? ""} ${
    person?.navn[0].etternavn
  }`;

  return (
    <>
      {error && <div>{error}</div>}
      {person && <Navnestripe navn={fulltNavn} ident={"person.ident"} />}
      {person && <Personalia {...person} />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
