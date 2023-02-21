import React from "react";
import { Header } from "@navikt/ds-react-internal";
import { useLoaderData } from "@remix-run/react";
import type { LoaderArgs } from "@remix-run/node";
import { hentBruker, mockHentBruker } from "~/models/bruker.server";
import { getSession } from "~/utils/auth.utils";
import { audienceDPSoknad } from "~/utils/api.utils";

export async function loader({ request }: LoaderArgs) {
  // getSession vil ha node-fetch htttpIncomming request, remux sin request er av typen fetch request
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
  const personalia = useLoaderData<typeof loader>();

  return (
    <div>
      <Header>
        <Header.Title as="h1">NAV Dagpenger</Header.Title>
        <Header.User
          name={`${personalia.forNavn} ${personalia.mellomNavn} ${personalia.etterNavn}`}
        />
      </Header>

      <main>
        <pre>{JSON.stringify(personalia, null, 2)}</pre>
      </main>
    </div>
  );
}
