import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { RettPåDagpenger } from "~/components/rett-på-dagpenger/RettPåDagpenger";
import { RevurderingResultat } from "~/components/revurdering-resultat/RevurderingResultat";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Behandle() {
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className="flex flex-col gap-4">
      {/* RevurderingResultat viser seg selv kun når omgjøring-regelsettet faktisk finnes,
          uavhengig av om behandlingen ble utløst av en manuell omgjøring eller et korrigert meldekort */}
      <RevurderingResultat />
      <RettPåDagpenger />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
