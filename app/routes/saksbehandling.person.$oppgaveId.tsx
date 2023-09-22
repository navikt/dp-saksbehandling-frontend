import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Navnestripe } from "~/components/brodsmuler/Navnestripe";
import { hentOppgave } from "~/models/oppgave.server";
import type { IPerson } from "~/models/pdl.server";
import { hentPersonalia, mockHentPerson } from "~/models/pdl.server";
import { getSession } from "~/models/auth.server";
import { getEnv } from "~/utils/env.utils";
import { Personalia } from "~/components/personalia/Personalia";
import { sikkerLogger } from "../../server/logger";

export const shouldRevalidate = () => false;

export async function loader({ request, params }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  if (getEnv("IS_LOCALHOST") === "true") {
    const mockPerson = await mockHentPerson();
    return json({ error: null, person: mockPerson });
  }

  try {
    const responseData = await hentPersonalia(session, oppgave.person);
    sikkerLogger.info(`PDL response: ${JSON.stringify(responseData)}`);
    sikkerLogger.info(`responseData.hentPerson: ${responseData.hentPerson}`);

    if (!responseData.hentPerson) {
      return json({ error: "Klarte ikke hente personalia", person: null });
    }

    // {"hentPerson":{"navn":[{"fornavn":"SPETTETE","mellomnavn":null,"etternavn":"PUSEKATT"}],"statsborgerskap":[{"land":"NOR"}],"telefonnummer":[],"bostedsadresse":[{"vegadresse":{"husnummer":"53","adressenavn":"Junkerveien","postnummer":"8076"}}],"kontaktadresse":[],"doedsfall":[],"utflyttingFraNorge":[],"sikkerhetstiltak":[],"foreldreansvar":[{"ansvar":"felles"}]}}

    const personData = responseData.hentPerson;

    const person: IPerson = {
      ident: oppgave.person,
      forNavn: personData.navn[0].fornavn,
      mellomNavn: personData.navn[0].mellomnavn,
      etterNavn: personData.navn[0].etternavn,
      telefon: personData.telefonnummer[0]?.nummer || "Har ikke nummer",
      kontaktadresse: personData?.kontaktadresse && personData?.kontaktadresse[0]?.vegadresse,
      bostedadresse: personData?.bostedsadresse && personData?.bostedsadresse[0]?.vegadresse,
      statsborgerskap: personData.statsborgerskap[0].land,
      utflyttingFraNorge: personData.utflyttingFraNorge[0].utflyttingsdato,
      antallBarn: 0,
    };

    return json({ person, error: null });
  } catch (error: unknown) {
    sikkerLogger.info(`PDL kall catch error: ${error}`);
    return json({ person: null, error: `Feil ved henting av personalia fra PDL` });
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
