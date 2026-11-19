import { HGrid } from "@navikt/ds-react";
import { useActionData, useLoaderData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OppfolgingInfo } from "~/components/oppfolging/oppfolging-info/OppfolgingInfo";
import { OppfolgingInnhold } from "~/components/oppfolging/oppfolging-innhold/OppfolgingInnhold";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppfolging } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

import type { Route } from "./+types/behandling.$behandlingId.oppfolging";

export async function loader({ params, request }: Route.LoaderArgs) {
  const oppfolging = await hentOppfolging(request, params.behandlingId);

  return { oppfolging };
}

export async function action({ request, params }: Route.ActionArgs) {
  return await handleActions(request, params);
}

export default function OppfolgingRoute() {
  const { oppfolging } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <HGrid columns="350px 1fr" gap="space-16">
      <OppfolgingInfo oppfolging={oppfolging} />
      <OppfolgingInnhold oppfolging={oppfolging} />
    </HGrid>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
