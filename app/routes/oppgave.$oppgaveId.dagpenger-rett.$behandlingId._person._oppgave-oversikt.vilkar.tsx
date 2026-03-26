import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { PrøvingsdatoInput } from "~/components/rett-på-dagpenger/PrørvingsdatoInput";
import { VilkårTidslinje } from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Vilkårsvurderinger() {
  const { prøvingsdatoOpplysning } = useBehandling();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className="flex flex-col gap-4">
      {prøvingsdatoOpplysning && <PrøvingsdatoInput />}
      <VilkårTidslinje />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
