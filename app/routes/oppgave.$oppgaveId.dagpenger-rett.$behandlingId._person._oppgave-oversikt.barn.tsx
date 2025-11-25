import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Alert, Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OrkestratorBarn } from "~/components/orkestrator/orkestrator-barn/OrkestratorBarn";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import {
  hentOrkestratorBarn,
  hentOrkestratorLandListe,
} from "~/models/orkestrator-opplysning.server";
import { hentOppgave } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  let orkestratorBarn;
  let orkestratorLandliste;

  if (oppgave.soknadId) {
    orkestratorBarn = await hentOrkestratorBarn(request, oppgave.soknadId);
    orkestratorLandliste = await hentOrkestratorLandListe(request);
  }

  return { oppgave, orkestratorBarn, orkestratorLandliste };
}

export default function Behandle() {
  const { oppgaveId, behandlingId } = useTypeSafeParams();
  const { behandling } = useBehandling();
  const { orkestratorBarn, orkestratorLandliste } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const barnOpplysningId = behandling.opplysninger.find(
    (opplysning) => opplysning.datatype === "barn",
  )?.perioder[0].id;

  return (
    <>
      <main className="main">
        <LoadingLink
          to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/behandle`}
          className={"flex items-center gap-1 pb-2"}
        >
          <ArrowLeftIcon />
          Behandling
        </LoadingLink>
        <div className={"card p-4"}>
          <Heading size={"small"}>Rediger barn</Heading>
          {barnOpplysningId && orkestratorBarn && orkestratorLandliste && (
            <OrkestratorBarn
              opplysningId={barnOpplysningId}
              orkestratorBarn={orkestratorBarn}
              orkestratorLandliste={orkestratorLandliste}
            />
          )}
          {!barnOpplysningId && <Alert variant={"error"}>Finner ikke opplysningID for barn </Alert>}
        </div>
      </main>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
