import { BodyLong, BodyShort, Box, CopyButton, Heading, Label, VStack } from "@navikt/ds-react";
import { useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useOppgave } from "~/hooks/useOppgave";

export default function BehandlingFerdig() {
  const { oppgave } = useOppgave();

  return (
    <Box className="card">
      <Box maxWidth="650px" marginInline="auto" paddingBlock="space-64">
        <VStack align="center" gap="space-32">
          <Heading size="xlarge" level="1">
            Klagen er ferdig vurdert
          </Heading>
          <VStack gap="space-16">
            <BodyLong className="text-center">
              Du må nå utføre neste steg i behandlingen, som er å kopiere behandlings-id og opprette
              en revurdering etter klage i personoversikten.
            </BodyLong>
            <BodyLong className="text-center">
              Når revurderingen etter klage er ferdig kontrollert, må klageoppgaven settes til
              fullført på nytt for å ferdigstille klageoppgaven.
            </BodyLong>
          </VStack>

          <VStack align="center" gap="space-8">
            <Label>Behandlings-ID</Label>
            <BodyShort>{oppgave.behandlingId}</BodyShort>
            <CopyButton copyText={oppgave.behandlingId} text="Kopier behandlings-ID" size="small" />
          </VStack>

          <LoadingLink asButtonVariant="primary" to={`/person/${oppgave.person.id}/oversikt`}>
            Gå til personoversikt
          </LoadingLink>
        </VStack>
      </Box>
    </Box>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
