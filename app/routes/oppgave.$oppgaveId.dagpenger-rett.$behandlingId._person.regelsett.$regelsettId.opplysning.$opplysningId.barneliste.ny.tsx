import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useRouteError,
} from "react-router";

import BarnelisteSkjema from "~/components/barn/BarnelisteSkjema";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { OpplysningerTidslinje } from "~/components/opplysninger-tidslinje/OpplysningerTidslinje";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentOrkestratorLandListe } from "~/models/orkestrator-opplysning.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { alleRegelsett } from "~/utils/behandling.utils";
import { isAlert, isBarneliste } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const orkestratorLandliste = await hentOrkestratorLandListe(request);
  return { orkestratorLandliste };
}

export default function LeggTilBarn() {
  const { oppgaveId, behandlingId, regelsettId } = useTypeSafeParams();
  const { behandling, sistePrøvingsdato } = useBehandling();

  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const regelsett = alleRegelsett(behandling).find((sett) => sett.id === regelsettId);
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
        {barnOpplysning && (
          <div className={"card mb-4 p-4"}>
            <OpplysningerTidslinje
              tittel={barnOpplysning.navn}
              redigertAvSaksbehandler={barnOpplysning.redigertAvSaksbehandler}
              regelsettHjemmel={regelsett?.hjemmel.tittel}
              opplysningKilde={barnOpplysning.formål}
              opplysninger={[barnOpplysning]}
              pins={sistePrøvingsdato && [{ label: "Prøvingsdato", date: sistePrøvingsdato }]}
              visAllePerioder
            />
          </div>
        )}
        <BarnelisteSkjema
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
