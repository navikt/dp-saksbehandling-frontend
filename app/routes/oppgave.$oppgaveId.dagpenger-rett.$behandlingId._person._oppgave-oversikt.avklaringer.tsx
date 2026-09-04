import { Alert, Heading, Loader } from "@navikt/ds-react";
import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { useVurderingerQuery } from "~/api/behandling-hooks";
import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import EndretOpplysninger from "~/components/endret-opplysninger/EndretOpplysninger";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function AvklaringerOgVurderinger() {
  const { behandling } = useBehandling();
  const { data: vurderinger, isPending, error } = useVurderingerQuery(behandling.behandlingId);
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className="flex flex-col gap-4">
      <Avklaringer avklaringer={behandling.avklaringer} behandlingId={behandling.behandlingId} />
      {isPending && <Loader size="large" title="Henter vurderinger" />}
      {error && (
        <Alert variant="error">
          <Heading size="small">Kunne ikke hente vurderinger</Heading>
          <p>{error.message}</p>
        </Alert>
      )}
      {vurderinger && <EndretOpplysninger vurderinger={vurderinger} />}
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
