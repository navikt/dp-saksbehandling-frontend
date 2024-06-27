import { Alert, BodyShort, Button, Heading, Tabs } from "@navikt/ds-react";
import { sanityClient } from "~/sanity/sanity-client";
import type { ISanityBrevMal } from "~/sanity/sanity-types";
import { json } from "@remix-run/node";
import { brevMalQuery } from "~/sanity/sanity-queries";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { useNavigate, useRouteError } from "@remix-run/react";
import { RemixLink } from "~/components/RemixLink";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import styles from "../route-styles/melding-om-vedtak.module.css";

export async function loader() {
  const sanityTexts = await sanityClient.fetch<ISanityBrevMal[]>(brevMalQuery);

  return json({ sanityTexts });
}

export default function Oppgave() {
  return (
    <Tabs.Panel value="melding-om-vedtak">
      <MeldingOmVedtakProvider>
        <MeldingOmVedtak />
      </MeldingOmVedtakProvider>
    </Tabs.Panel>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  const navigate = useNavigate();

  if (error instanceof Error) {
    return (
      <div className={styles.errorContainer}>
        <Heading size="medium" level="2">
          Kan ikke generere brev
        </Heading>

        <BodyShort>Ta kontakt med Team STBS umiddelbart og del meldingen under</BodyShort>
        <Alert variant={"error"}>{error.message}</Alert>

        <div className={styles.buttonContainer}>
          <Button onClick={() => navigate(-1)} size="small" variant="secondary">
            Tilbake til forrige side
          </Button>
          <RemixLink to={"/"} asButtonVariant={"primary"} size="small">
            Til oppgaveliste
          </RemixLink>
        </div>
      </div>
    );
  }

  return <h1>Ukjent feil</h1>;
}
