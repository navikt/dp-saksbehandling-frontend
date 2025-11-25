import { ActionFunctionArgs, useActionData, useRouteError } from "react-router";

import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import EndretOpplysninger from "~/components/endret-opplysninger/EndretOpplysninger";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { FastsettelserTidslinje } from "~/components/fastsettelser-tidslinje/FastsettelserTidslinje";
import { LinkTabs } from "~/components/link-tabs/LinkTabs";
import { OppgaveMeny } from "~/components/oppgave-meny/OppgaveMeny";
import { PrøvingsdatoInput } from "~/components/rett-på-dagpenger/PrørvingsdatoInput";
import { RettPåDagpenger } from "~/components/rett-på-dagpenger/RettPåDagpenger";
import { VilkårTidslinje } from "~/components/vilkår-tidslinje/VilkårTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export default function Behandle() {
  const { behandling, vurderinger, prøvingsdatoOpplysning } = useBehandling();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <main>
      <div className={"card p-4"}>
        <div className="flex justify-between gap-6">
          <LinkTabs className="flex-1" />
          <OppgaveMeny />
        </div>

        <div className="mt-4 flex gap-4">
          <div className={"flex w-[400px] flex-col gap-4"}>
            {prøvingsdatoOpplysning && <PrøvingsdatoInput />}

            <Avklaringer
              avklaringer={behandling.avklaringer}
              behandlingId={behandling.behandlingId}
            />

            <EndretOpplysninger vurderinger={vurderinger} />
          </div>

          <div className={"flex flex-1 flex-col gap-4"}>
            <RettPåDagpenger />
            <VilkårTidslinje />
            <FastsettelserTidslinje />
          </div>
        </div>
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
