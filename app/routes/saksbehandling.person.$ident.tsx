import { json, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import { useEffect, useState } from "react";
import invariant from "tiny-invariant";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";
import { hentPDL, type IPDLHentPersonRespons } from "~/models/pdl.server";

import { type IPerson, mockHentPerson } from "~/models/person.server";

export const shouldRevalidate = () => false;

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.ident, `params.ident er påkrevd`);

  if (process.env.IS_LOCALHOST === "true") {
    const person: IPerson = await mockHentPerson(params.ident);

    const personKonvertertPDLPerson: IPDLHentPersonRespons = {
      data: {
        hentPerson: {
          navn: [
            { fornavn: person.forNavn, mellomnavn: person.mellomNavn, etternavn: person.etterNavn },
          ],
        },
      },
    };

    return json(personKonvertertPDLPerson);
  } else {
    return hentPDL(request, params.ident as string);
  }
}

export default function Person() {
  const { ident } = useParams();
  const { data } = useLoaderData<typeof loader>();
  const [navn, setNavn] = useState("");

  useEffect(() => {
    if (data?.hentPerson?.navn || data.hentPerson?.navn?.length > 0) {
      const { fornavn, mellomnavn, etternavn } = data.hentPerson.navn[0];
      const navn: string = `${fornavn} ${mellomnavn} ${etternavn}`;

      return setNavn(navn);
    }
  }, [data]);

  return (
    <>
      <Brodsmuler navn={navn} ident={ident} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
