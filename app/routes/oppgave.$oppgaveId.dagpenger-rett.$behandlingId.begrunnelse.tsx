import { Alert } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { BegrunnelseAvklaringer } from "~/components/begrunnelse/BegrunnelseAvklaringer";
import { BegrunnelseOpplysninger } from "~/components/begrunnelse/BegrunnelseOpplysninger";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { hentVurderinger } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const vurderinger = await hentVurderinger(request, params.behandlingId);

  return { vurderinger };
}

export default function BegrunnelseRoute() {
  const { vurderinger } = useLoaderData<typeof loader>();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

  return (
    <div className={"bg-(--a-grayalpha-50) p-4"}>
      {vurderinger.opplysninger.length === 0 && vurderinger.avklaringer.length === 0 && (
        <Alert variant={"info"}>
          Det er ingen opplysninger som er endret eller avklaringer som er kvittert
        </Alert>
      )}

      {vurderinger.opplysninger.length > 0 && (
        <BegrunnelseOpplysninger
          opplysninger={vurderinger.opplysninger}
          readOnly={oppgave.tilstand !== "UNDER_BEHANDLING"}
        />
      )}

      {vurderinger.avklaringer.length > 0 && (
        <BegrunnelseAvklaringer
          avklaringer={vurderinger.avklaringer}
          readOnly={oppgave.tilstand !== "UNDER_BEHANDLING"}
        />
      )}
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
