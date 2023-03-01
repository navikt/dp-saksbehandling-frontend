import React from "react";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import type { IPerson } from "~/models/person.server";
import { mockHentPerson } from "~/models/person.server";
import styles from "~/route-styles/bruker.module.css";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";
import { DagpengerTidslinje } from "~/components/dagpenger-tidslinje/DagpengerTidslinje";
import { BrukerMeny } from "~/components/bruker-meny/BrukerMeny";

export async function loader({ request }: LoaderArgs) {
  return await mockHentPerson();
}

export default function Person() {
  const bruker = useLoaderData<typeof loader>() as IPerson;

  return (
    <main>
      <Brodsmuler bruker={bruker} />

      <div className={styles.tidslinjeContainer}>
        <DagpengerTidslinje />
      </div>

      <BrukerMeny />

      <Outlet />
    </main>
  );
}
