import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";

import { Barnevisning } from "~/components/barn/Barnevisning";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { useBehandling } from "~/hooks/useBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentOrkestratorLandListe } from "~/models/orkestrator-opplysning.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { formaterTilNorskDato } from "~/utils/dato.utils";
import { isAlert, isBarneliste } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ request }: LoaderFunctionArgs) {
  const orkestratorLandliste = await hentOrkestratorLandListe(request);

  return { orkestratorLandliste };
}

export default function VisBarn() {
  const { oppgaveId, behandlingId, periodeId, regelsettId } = useTypeSafeParams();
  const { behandling } = useBehandling();
  const barnOpplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-9428-74d5-b160-f63a4c61a23b",
  );

  const barneperiode = barnOpplysning?.perioder.find((periode) => periode.id === periodeId);

  if (barneperiode === undefined) {
    return;
  }

  const { orkestratorLandliste } = useLoaderData<typeof loader>();

  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  return (
    <>
      <main className="main">
        <LoadingLink
          to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandlingId}/regelsett/${regelsettId}/opplysning/${barnOpplysning?.opplysningTypeId}`}
          className={"flex items-center gap-1 pb-2"}
        >
          <ArrowLeftIcon />
          Behandling
        </LoadingLink>

        <div className={"card flex flex-col gap-6 p-4"}>
          <Heading size={"small"}>
            Barn for periode{" "}
            {barneperiode.gyldigFraOgMed ? formaterTilNorskDato(barneperiode.gyldigFraOgMed) : "--"}{" "}
            –{" "}
            {barneperiode.gyldigTilOgMed ? formaterTilNorskDato(barneperiode.gyldigTilOgMed) : "--"}
          </Heading>

          <div className={"flex flex-wrap gap-4"}>
            {isBarneliste(barneperiode.verdi) &&
              barneperiode.verdi.verdi.map((barn, index: number) => (
                <Barnevisning
                  key={`barn-${barn.fødselsdato}-${barn.fornavnOgMellomnavn}`}
                  barnNummer={index + 1}
                  barn={barn}
                  orkestratorLandliste={orkestratorLandliste}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
