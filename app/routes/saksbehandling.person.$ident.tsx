import { json, type LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";

import { mockHentPerson } from "~/models/person.server";

export const shouldRevalidate = () => false;

export async function loader({ params }: LoaderArgs) {
  invariant(params.ident, `params.ident er påkrevd`);
  const person = await mockHentPerson(params.ident);

  return json({ person });
}

export default function Person() {
  const { person } = useLoaderData<typeof loader>();

  return (
    <>
      <Brodsmuler person={person} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
