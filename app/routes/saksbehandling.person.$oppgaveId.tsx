import { json, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { Navnestripe } from "~/components/brodsmuler/Navnestripe";
import { hentOppgave } from "~/models/oppgave.server";
import { hentPDL, type HentPersonResponsData } from "~/models/pdl.server";
import { type IPerson, mockHentPerson } from "~/models/person.server";
import { logger } from "../../server/logger";
export async function loader({ request, params }: LoaderArgs) {
  invariant(params.oppgaveId, "Fant ikke oppgaveId");
  const oppgave = await hentOppgave(params.oppgaveId, request);

  if (!oppgave) {
    throw new Response(null, {
      status: 500,
      statusText: `Fant ikke oppgave med id: ${params.oppgaveId}`,
    });
  }

  if (process.env.IS_LOCALHOST === "true") {
    const person: IPerson = await mockHentPerson(oppgave.person);

    const personKonvertertPDLPerson: HentPersonResponsData = {
      hentPerson: {
        navn: [
          { fornavn: person.forNavn, mellomnavn: person.mellomNavn, etternavn: person.etterNavn },
        ],
      },
    };

    return json({ ...personKonvertertPDLPerson, FNR: oppgave.person, errors: false });
  } else {
    let data;
    let errors = false;
    try {
      data = await hentPDL(request, oppgave.person);
    } catch (error: unknown) {
      errors = true;
      logger.warn(`Feil fra PDL: ${error}`);
      data = { error: [`Feil ved henting av pdl.`], hentPerson: {} };
      if (error instanceof Error) {
        data = { error: [`Feil ved henting av pdl, debug: ${error.message}`], hentPerson: {} };
      }
    }
    return json({ ...data, FNR: oppgave.person, errors: errors });
  }
}

export default function Person() {
  const loaderData = useLoaderData<typeof loader>();
  const [navn, setNavn] = useState("Laster...");

  useEffect(() => {
    if (loaderData.errors) {
      setNavn("Klarte ikke laste navn");
      return;
    }
    const hentPersonData = loaderData.hentPerson as HentPersonResponsData;

    if (hentPersonData.hentPerson?.navn && hentPersonData.hentPerson?.navn.length > 0) {
      const navn = hentPersonData.hentPerson?.navn[0];
      const fulltNavn = `${navn.fornavn} ${navn.etternavn}`;
      setNavn(fulltNavn);
    }
  }, [loaderData]);

  return (
    <>
      {!loaderData.errors && <Navnestripe navn={navn} ident={loaderData.FNR} />}
      <main>
        <Outlet />
      </main>
    </>
  );
}
