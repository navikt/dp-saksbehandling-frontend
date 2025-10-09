import { Theme } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import akselDarksideOverrides from "~/aksel-darkside-overrides.css?url";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { FastsettelserTidslinje } from "~/components/fastsettelser-tidslinje/FastsettelserTidslinje";
import { Avklaringer } from "~/components/v2/avklaringer/Avklaringer";
import { EndretOpplysninger } from "~/components/v2/endret-opplysninger/EndretOpplysninger";
import { VilkårTidslinje } from "~/components/vilkår-tidslinje/VilkårTidslinje";
import globalDarksideCss from "~/global-darkside.css?url";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentBehandlingV2, hentVurderinger } from "~/models/behandling.server";
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
  const vurderinger = await hentVurderinger(request, params.behandlingId);

  const oppgave = await hentOppgave(request, params.oppgaveId);

  return { behandling, vurderinger, oppgave };
}

export function links() {
  return [
    { rel: "stylesheet", href: globalDarksideCss },
    { rel: "stylesheet", href: akselDarksideOverrides },
  ];
}

export default function Behandle() {
  const { behandling, vurderinger, oppgave } = useLoaderData<typeof loader>();
  const { tema } = useSaksbehandler();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <>
      {/*<PersonBoks person={oppgave.person} />*/}
      <Theme theme={tema} className={"main"}>
        <div className={"card flex gap-4 p-4"}>
          <div className={"flex flex-1 flex-col gap-4"}>
            <VilkårTidslinje behandling={behandling} oppgaveId={oppgave.oppgaveId} />
            <FastsettelserTidslinje behandling={behandling} oppgaveId={oppgave.oppgaveId} />
          </div>

          <div className={"flex w-[500px] flex-col gap-4"}>
            <Avklaringer
              avklaringer={[...behandling.avklaringer]}
              behandlingId={behandling.behandlingId}
            />
            <EndretOpplysninger vurderinger={vurderinger} />
          </div>
        </div>
      </Theme>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
