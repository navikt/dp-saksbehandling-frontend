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
import { EndretOpplysninger } from "~/components/v2/endret-opplysninger/EndretOpplysninger";
import { VilkårTidslinje } from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentBehandlingV2, hentVurderinger } from "~/models/behandling.server";
import { RettPåDagpenger } from "~/rett-på-dagpenger/RettPåDagpenger";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const behandling = await hentBehandlingV2(request, params.behandlingId);
  const vurderinger = await hentVurderinger(request, params.behandlingId);

  return { behandling, vurderinger };
}
export default function Behandle() {
  const { oppgaveId } = useTypeSafeParams();
  const { behandling, vurderinger } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <main className={"main"}>
      <div className={"card flex gap-4 p-4"}>
        <div className={"flex flex-1 flex-col gap-4"}>
          <RettPåDagpenger behandling={behandling} />
          <VilkårTidslinje behandling={behandling} oppgaveId={oppgaveId} />
          <FastsettelserTidslinje behandling={behandling} oppgaveId={oppgaveId} />
        </div>

        <div className={"flex w-[500px] flex-col gap-4"}>
          <Avklaringer
            avklaringer={[...behandling.avklaringer]}
            behandlingId={behandling.behandlingId}
          />
          <EndretOpplysninger vurderinger={vurderinger} />
        </div>
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
