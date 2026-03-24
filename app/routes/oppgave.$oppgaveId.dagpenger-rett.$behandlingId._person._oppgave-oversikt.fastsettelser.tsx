import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { FastsettelserTidslinje } from "~/components/fastsettelser-tidslinje/FastsettelserTidslinje";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Vilkårsvurderinger() {
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return <FastsettelserTidslinje />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorMessageComponent error={error} />;
}
