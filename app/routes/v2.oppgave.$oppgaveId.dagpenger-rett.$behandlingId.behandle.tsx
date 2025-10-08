import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { FastsettelserTidslinje } from "~/components/fastsettelser-tidslinje/FastsettelserTidslinje";
import { Avklaringer } from "~/components/v2/avklaringer/Avklaringer";
import { VilkårTidslinje } from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandlingV2 } from "~/models/behandling.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const behandling = await hentBehandlingV2(request, params.behandlingId);
  const oppgave = await hentOppgave(request, params.oppgaveId);

  return { behandling, oppgave };
}

export default function Behandle() {
  const { behandling, oppgave } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <div className={"bg-(--a-grayalpha-50)"}>
      <div className={"card m-4 flex gap-4 p-4"}>
        <div className={"flex flex-1 flex-col gap-4"}>
          <VilkårTidslinje behandling={behandling} oppgaveId={oppgave.oppgaveId} />
          <FastsettelserTidslinje behandling={behandling} oppgaveId={oppgave.oppgaveId} />
        </div>

        <div className={"w-[500px]"}>
          <Avklaringer
            avklaringer={[...behandling.avklaringer]}
            behandlingId={behandling.behandlingId}
          />
        </div>
      </div>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
