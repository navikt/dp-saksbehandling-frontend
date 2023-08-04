import { json, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData, useParams } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";
import { hentPDL } from "~/models/pdl.server";

import { IPerson, mockHentPerson } from "~/models/person.server";

export const shouldRevalidate = () => false;

export async function loader({ request, params }: LoaderArgs) {
  invariant(params.ident, `params.ident er påkrevd`);
  // const person: IPerson = await mockHentPerson(params.ident);

  return hentPDL(request, params.ident as string);
}

export default function Person() {
  const { ident } = useParams();
  const { errors, data } = useLoaderData<typeof loader>();

  return (
    <>
      <Brodsmuler data={data} ident={ident} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
