import { ActionFunctionArgs, type LoaderFunctionArgs, Outlet, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { BehandlingProvider } from "~/context/behandling-context";
import { BeslutterNotatProvider } from "~/context/beslutter-notat-context";
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
  const { behandling, forrigeBehandling } = useLoaderData<typeof loader>();

  return (
    <BeslutterNotatProvider notat={oppgave.notat}>
      <BehandlingProvider behandling={behandling} forrigeBehandling={forrigeBehandling}>
        <Outlet />
      </BehandlingProvider>
    </BeslutterNotatProvider>
  );
}
