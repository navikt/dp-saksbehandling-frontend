import React from "react";
import { Outlet, useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import type { IPerson } from "~/models/person.server";
import { mockHentPerson } from "~/models/person.server";
import styles from "~/route-styles/bruker.module.css";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";
import { DagpengerTidslinje } from "~/components/dagpenger-tidslinje/DagpengerTidslinje";
import { BrukerMeny } from "~/components/bruker-meny/BrukerMeny";
import { Accordion } from "@navikt/ds-react";

export async function loader({ request }: LoaderArgs) {
  return await mockHentPerson();
}

export default function Person() {
  const bruker = useLoaderData<typeof loader>() as IPerson;

  return (
    <main>
      <Brodsmuler bruker={bruker} />

      <Accordion>
        <Accordion.Item defaultOpen={true}>
          <Accordion.Header>
            Status: Aktiv sak || Dagsats: 100kr (rediger) || Ventetid: 0 (rediger) || Gjenstående
            kvote: 420 (rediger) || Sanksjon: null (legg til sanksjon) || Barnetillegg: 0
          </Accordion.Header>
          <Accordion.Content>
            <div className={styles.tidslinjeContainer}>
              <DagpengerTidslinje />
            </div>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>

      <BrukerMeny />

      <Outlet />
    </main>
  );
}
