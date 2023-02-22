import React from "react";
import { Header } from "@navikt/ds-react-internal";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import type { IBruker } from "~/models/bruker.server";
import { hentBruker, mockHentBruker } from "~/models/bruker.server";
import { getSession } from "~/utils/auth.utils";
import { audienceDPSoknad } from "~/utils/api.utils";
import styles from "~/route-styles/bruker.module.css";
import { Brodsmuler } from "~/components/brodsmuler/Brodsmuler";
import { DagpengerStatusBruker } from "~/components/dagpenger-status-bruker/DagpengerStatusBruker";

export async function loader({ request }: LoaderArgs) {
  // getSession vil ha node-fetch httpIncomingRequest, Remix sin request er av typen fetch request
  // @ts-ignore
  const session = await getSession(request);

  if (!session || session.expiresIn === 0) {
    console.log("no session");
    return await mockHentBruker();
  }

  const onBehalfOfToken = await session.apiToken(audienceDPSoknad);
  const response = await hentBruker(onBehalfOfToken);

  return response.json();
}

export default function Personalia() {
  const bruker = useLoaderData<typeof loader>() as IBruker;

  return (
    <div>
      <Header>
        <Header.Title as="h1">NAV Dagpenger</Header.Title>
        <Header.User name={`${bruker.forNavn} ${bruker.mellomNavn} ${bruker.etterNavn}`} />
      </Header>

      <main>
        {/*<pre>{JSON.stringify(personalia, null, 2)}</pre>*/}
        <div className={styles.breadCrumbs}>
          <Brodsmuler bruker={bruker} />
        </div>

        <DagpengerStatusBruker bruker={bruker} />

        <nav>meny</nav>

        <div>Outlet content</div>
      </main>
    </div>
  );
}
