import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
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
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import {
  hentOrkestratorBarn,
  hentOrkestratorLandListe,
} from "~/models/orkestrator-opplysning.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.barnId, "params.barnId er påkrevd");

  const [orkestratorBarn, orkestratorLandliste] = await Promise.all([
    hentOrkestratorBarn(request, params.barnId),
    hentOrkestratorLandListe(request),
  ]);

  return { orkestratorBarn, orkestratorLandliste };
}

export default function Barn() {
  const { oppgaveId, behandlingId } = useTypeSafeParams();

  const { orkestratorBarn, orkestratorLandliste } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

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

          <OrkestratorBarn
            orkestratorBarn={orkestratorBarn}
            orkestratorLandliste={orkestratorLandliste}
          />
        </div>
      </main>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
