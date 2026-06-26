import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import { ActionFunctionArgs, type LoaderFunctionArgs, useRouteError } from "react-router";

import Barneskjema from "~/components/barn/Barneskjema";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useBehandling } from "~/hooks/useBehandling";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentOrkestratorLandListe } from "~/models/orkestrator-opplysning.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isBarneliste } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const orkestratorLandliste = await hentOrkestratorLandListe(request);
  return { orkestratorLandliste };
}

export default function LeggTilBarn() {
  const { oppgaveId, behandlingId, regelsettId } = useTypeSafeParams();
  const { behandling } = useBehandling();

  const barnOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-9428-74d5-b160-f63a4c61a23b",
  );
  const opplysningUrl = `/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/${regelsettId}/opplysning/${barnOpplysning?.opplysningTypeId}`;
  const sisteBarneperiode = barnOpplysning?.perioder.at(-1);
  const sisteBarneperiodeVerdi =
    sisteBarneperiode && isBarneliste(sisteBarneperiode.verdi)
      ? sisteBarneperiode.verdi
      : undefined;

  return (
    <main className="main">
      <LoadingLink to={opplysningUrl} className={"flex items-center gap-1 pb-2"}>
        <ArrowLeftIcon />
        Redigering av barn
      </LoadingLink>

      <div className={"card p-4"}>
        <Heading level="2" size="medium" spacing>
          Ny barneliste
        </Heading>
        <Barneskjema
          behandlingId={behandling.behandlingId}
          sisteBarneperiode={sisteBarneperiodeVerdi}
          opplysningUrl={opplysningUrl}
        />
      </div>
    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
