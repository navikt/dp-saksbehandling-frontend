import {
  ActionFunctionArgs,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { OppfolgingInfo } from "~/components/oppfolging/oppfolging-info/OppfolgingInfo";
import { OppfolgingInnhold } from "~/components/oppfolging/oppfolging-innhold/OppfolgingInnhold";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppfolging } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const oppfolging = await hentOppfolging(request, params.behandlingId);

  return { oppfolging };
}

export default function OppfolgingRoute() {
  const { oppfolging } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className={`grid grid-cols-[350px_1fr] gap-4`}>
      <OppfolgingInfo oppfolging={oppfolging} />
      <OppfolgingInnhold oppfolging={oppfolging} />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
