import React from "react";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import type { IBruker } from "~/models/bruker.server";
import { mockHentBruker } from "~/models/bruker.server";
import styles from "~/route-styles/bruker.module.css";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";
import { DagpengerStatusBruker } from "~/components/dagpenger-status-bruker/DagpengerStatusBruker";
import { DagpengerTidslinje } from "~/components/dagpenger-tidslinje/DagpengerTidslinje";
import { BrukerMeny } from "~/components/bruker-meny/BrukerMeny";

export async function loader({ request }: LoaderArgs) {
  // vi skal ikke bruke idporten tokens så like greit å bare la det stå som en full mock enn så lenge
  // todo: fyr opp info om bruker via saksbehandler obo
  return await mockHentBruker();
}

export default function Bruker() {
  const bruker = useLoaderData<typeof loader>() as IBruker;

  return (
    <main>
      {/*<pre>{JSON.stringify(personalia, null, 2)}</pre>*/}
      <Brodsmuler bruker={bruker} />
      <DagpengerStatusBruker bruker={bruker} />

      <div className={styles.tidslinjeContainer}>
        <DagpengerTidslinje />
      </div>

      <BrukerMeny />

      <Outlet />
    </main>
  );
}
