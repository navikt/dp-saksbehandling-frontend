import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  useParams,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { Regelsett } from "~/components/regelsett/Regelsett";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentBehandling, hentVurderinger } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");

  const behandling = await hentBehandling(request, params.behandlingId);
  const vurderinger = await hentVurderinger(request, params.behandlingId);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      behandling,
      vurderinger,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function RegelsettRoute() {
  const { regelsettNavn } = useParams();
  const { behandling } = useTypedRouteLoaderData("routes/behandling.$behandlingId");

  const alleRegelsett = [...behandling.vilkår, ...behandling.fastsettelser];
  const nåværendeRegelsett = alleRegelsett.find((regelsett) => regelsett.navn === regelsettNavn);

  if (!nåværendeRegelsett) {
    return <div>Fant ikke regelsett</div>;
  }

  return (
    <Regelsett behandling={behandling} aktivtRegelsett={nåværendeRegelsett} readonly={false} />
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
