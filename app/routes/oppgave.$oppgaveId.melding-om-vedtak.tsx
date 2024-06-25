import { Tabs } from "@navikt/ds-react";
import { sanityClient } from "~/sanity/sanity-client";
import type { ISanityBrevMal } from "~/sanity/sanity-types";
import { json } from "@remix-run/node";
import { brevMalQuery } from "~/sanity/sanity-queries";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";

export async function loader() {
  console.time("melding-om-vedtak loader: sanity fetch");
  const sanityTexts = await sanityClient.fetch<ISanityBrevMal[]>(brevMalQuery);
  console.timeEnd("melding-om-vedtak loader: sanity fetch");

  return json({ sanityTexts });
}

export default function Oppgave() {
  return (
    <Tabs.Panel value="melding-om-vedtak">
      <MeldingOmVedtak />
    </Tabs.Panel>
  );
}
