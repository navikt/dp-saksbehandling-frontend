import { Alert, Heading, Loader } from "@navikt/ds-react";
import { ActionFunctionArgs, type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { useVurderingerQuery } from "~/api/behandling-hooks";
import { Avklaringer } from "~/components/avklaringer/Avklaringer";
import EndretOpplysninger from "~/components/endret-opplysninger/EndretOpplysninger";
import { OppgaveKontroll } from "~/components/oppgave-kontroll/OppgaveKontroll";
import { BehandlingProvider } from "~/context/behandling-context";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
import { useOppgave } from "~/hooks/useOppgave";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentBehandling } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const behandling = await hentBehandling(request, params.behandlingId);
  const forrigeBehandling = behandling.basertPå
    ? await hentBehandling(request, behandling.basertPå)
    : undefined;

  return { behandling, forrigeBehandling };
}

export default function BehandlingLayout() {
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");
  const { underKontroll } = useOppgave();
  const { behandling, forrigeBehandling } = useLoaderData<typeof loader>();
  const { data: vurderinger, isPending, error } = useVurderingerQuery(behandling.behandlingId);

  return (
    <BeslutterNotatProvider notat={oppgave.notat}>
      <BehandlingProvider behandling={behandling} forrigeBehandling={forrigeBehandling}>
        <div className="grid grid-cols-[minmax(0,1fr)_300px] gap-4">
          <div className="">
            <Outlet />
          </div>
          <aside aria-label="Sidepanel" className="flex min-w-0 flex-col gap-4">
            <div className="card flex min-w-0 flex-col gap-4 p-4">
              <Avklaringer avklaringer={behandling.avklaringer} />
              {isPending && <Loader size="large" title="Henter vurderinger" />}
              {error && (
                <Alert variant="error">
                  <Heading size="small">Kunne ikke hente vurderinger</Heading>
                  <p>{error.message}</p>
                </Alert>
              )}
              {vurderinger && <EndretOpplysninger vurderinger={vurderinger} />}
            </div>
            {underKontroll && (
              <div className="card p-4">
                <Heading className="pb-2" size="small">
                  Kontroll
                </Heading>
                <OppgaveKontroll />
              </div>
            )}
          </aside>
        </div>
      </BehandlingProvider>
    </BeslutterNotatProvider>
  );
}
