import { BodyLong, BodyShort, CopyButton, Heading, Label } from "@navikt/ds-react";
import { LoaderFunctionArgs, useLoaderData, useRouteError } from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useOppgave } from "~/hooks/useOppgave";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  return { behandlingId: params.behandlingId };
}

export default function BehandlingFerdig() {
  const { behandlingId } = useLoaderData<typeof loader>();
  const { oppgave } = useOppgave();

  return (
    <div className="card">
      <div className={"mx-auto flex max-w-[650px] flex-col items-center gap-8 py-16"}>
        <Heading size="xlarge">Klagen er ferdig vurdert</Heading>
        <BodyLong className="text-center">
          Du må nå utføre neste steg i behandlingen, som er å kopiere behandlings-id og opprette en
          revurdering etter klage i personoversikten.
          <br />
          <br />
          Når revurderingen etter klage er ferdig kontrollert, må klageoppgaven settes til fullført
          på nytt for å ferdigstille klageoppgaven.
        </BodyLong>

        <div className="flex flex-col items-center gap-2">
          <Label>Behandlings-ID</Label>
          <BodyShort>{behandlingId}</BodyShort>
          <CopyButton copyText={behandlingId} text="Kopier behandlings-ID" size="small" />
        </div>

        <LoadingLink asButtonVariant="primary" to={`/person/${oppgave.person.id}/oversikt`}>
          Gå til personoversikt
        </LoadingLink>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
