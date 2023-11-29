import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Navnestripe } from "~/components/brodsmuler/Navnestripe";
import { Personalia } from "~/components/personalia/Personalia";
import { hentArbeidssokerStatus, type IArbeidssokerStatus } from "~/models/arbeidssoker.server";
import { getSession } from "~/models/auth.server";
import { hentOppgave } from "~/models/oppgave.server";
import type { IPerson } from "~/models/pdl.server";
import { hentPersonalia, mockHentPerson } from "~/models/pdl.server";
import { getEnv } from "~/utils/env.utils";
import { sikkerLogger } from "../../server/logger";
import type { INetworkResponse } from "~/utils/types";

export const shouldRevalidate = () => false;

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");

  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);
  const arbeidssokerStatusPromise = hentArbeidssokerStatus(session, oppgave.person);

  try {
    if (getEnv("IS_LOCALHOST") === "true") {
      const [arbeidssokerStatusResponse, mockPerson] = await Promise.all([
        arbeidssokerStatusPromise,
        mockHentPerson(),
      ]);
      return json({
        error: null,
        person: mockPerson,
        arbeidssokerStatusResponse: arbeidssokerStatusResponse,
      });
    }
    const personaliaPromise = hentPersonalia(session, oppgave.person);
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

    const personData = personalia.hentPerson;
    //antall barn får man ikke hentet fra pdl via saksbehandlertoken, må bruke en annen tjeneste isåfall
    const person: IPerson = {
      ident: oppgave.person,
      forNavn: personData.navn[0].fornavn,
      mellomNavn: personData.navn[0].mellomnavn,
      etterNavn: personData.navn[0].etternavn,
      telefon: personData.telefonnummer[0]?.nummer || "Har ikke nummer",
      kontaktadresse:
        personData?.kontaktadresse && personData.kontaktadresse[0]
          ? personData.kontaktadresse[0]
          : undefined,
      statsborgerskap: personData.statsborgerskap[0].land,
      utflyttingFraNorge:
        personData?.utflyttingFraNorge && personData.utflyttingFraNorge[0]?.utflyttingsdato,
    };
    return json({ error: null, person, arbeidssokerStatusResponse: arbeidssokerStatusResponse });
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
  const fulltNavn = `${person?.forNavn} ${person?.mellomNavn ?? ""} ${person?.etterNavn}`;

  return (
    <>
      {error && <div>{error}</div>}
      {person && <Navnestripe navn={fulltNavn} ident={person.ident} />}

      {/*TODO Finn ut av typefeil mellom typeof loader og IPerson */}
      {person && <Personalia {...(person as IPerson)} />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
