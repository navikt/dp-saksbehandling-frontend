import React from "react";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import type { IPerson } from "~/models/person.server";
import { mockHentPerson } from "~/models/person.server";

export async function loader({ request }: LoaderArgs) {
  return await mockHentPerson();
}

export default function Person() {
  const bruker = useLoaderData<typeof loader>() as IPerson;

  return (
    <>
      <Brodsmuler bruker={bruker} />
      <main>
        <Outlet />
      </main>
    </>
  );
}
