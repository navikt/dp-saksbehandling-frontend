import invariant from "tiny-invariant";
import { Alert, BodyShort, Button, Heading, Tabs } from "@navikt/ds-react";
import { sanityClient } from "~/sanity/sanity-client";
import type { ISanityBrevBlokk } from "~/sanity/sanity-types";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import { hentBrevBlokkerMedId } from "~/sanity/sanity-queries";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";
import { useNavigate, useRouteError } from "@remix-run/react";
import { RemixLink } from "~/components/RemixLink";
import { hentOppgave } from "~/models/oppgave.server";
import { hentMeldingOmVedtak } from "~/models/melding-om-vedtak.server";
import styles from "../route-styles/melding-om-vedtak.module.css";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const meldingOmVedtak = await hentMeldingOmVedtak(request, oppgave.behandlingId);

  const sanityBrevBlokker = await sanityClient.fetch<ISanityBrevBlokk[]>(
    hentBrevBlokkerMedId(meldingOmVedtak.brevblokkIder),
  );

  return json({ sanityBrevBlokker });
}

export default function Oppgave() {
  return (
    <Tabs.Panel value="melding-om-vedtak">
      <MeldingOmVedtak />
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
