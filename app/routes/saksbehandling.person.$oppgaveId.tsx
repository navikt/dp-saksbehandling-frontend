import { json, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { Navnestripe } from "~/components/brodsmuler/Navnestripe";
import { hentOppgave } from "~/models/oppgave.server";
import { hentPDL, type HentPersonResponsData } from "~/models/pdl.server";
import { type IPerson, mockHentPerson } from "~/models/person.server";

export const shouldRevalidate = () => false;

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

    return json({ ...personKonvertertPDLPerson, FNR: oppgave.person });
  } else {
    const data = await hentPDL(request, oppgave.person);
    return json({ ...data, FNR: oppgave.person });
  }
}

export default function Person() {
  const loaderData = useLoaderData<typeof loader>();
  const [navn, setNavn] = useState("Laster...");
  const [ident, setIdent] = useState("Laster...");

  useEffect(() => {
    if (!loaderData.hentPerson) {
      setNavn("Klarte ikke laste navn");
      return;
    }
    loaderData.FNR ? setIdent(loaderData.FNR) : setIdent("Klarte ikke laste ident");

    if (loaderData.hentPerson?.navn && loaderData.hentPerson.navn.length > 0) {
      const navn = loaderData.hentPerson.navn[0];
      const fulltNavn = `${navn.fornavn} ${navn.etternavn}`;
      setNavn(fulltNavn);
    }
  }, [loaderData]);

  return (
    <>
      <Navnestripe navn={navn} ident={ident} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
