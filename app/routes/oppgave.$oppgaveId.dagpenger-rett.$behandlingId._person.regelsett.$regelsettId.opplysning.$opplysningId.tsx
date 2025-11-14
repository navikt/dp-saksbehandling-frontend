import { ArrowLeftIcon } from "@navikt/aksel-icons";
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
import { Avklaringer } from "~/components/v2/avklaringer/Avklaringer";
import { EndretOpplysninger } from "~/components/v2/endret-opplysninger/EndretOpplysninger";
import { OpplysningPerioderTabell } from "~/components/v2/opplysning-perioder-tabell/OpplysningPerioderTabell";
import { OpplysningerTidslinje } from "~/components/v2/opplysninger-tidslinje/OpplysningerTidslinje";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { usePrøvingsdato } from "~/hooks/usePrøvingsdato";
import { hentBehandlingV2, hentVurderinger } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.regelsettId, "params.regelsettId er påkrevd");
  invariant(params.opplysningId, "params.opplysningId er påkrevd");
  const behandling = await hentBehandlingV2(request, params.behandlingId);
  const vurderinger = await hentVurderinger(request, params.behandlingId);
  const regelsett = [...behandling.vilkår, ...behandling.fastsettelser].find(
    (sett) => sett.id === params.regelsettId,
  );
  const opplysning = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === params.opplysningId,
  );

  if (!regelsett) {
    throw new Response(`Finner ikke regelsett med navn ${params.regelsettNavn}`, { status: 404 });
  }

  if (!opplysning) {
    throw new Response(`Finner ikke opplysning med id ${params.opplysningId}`, { status: 404 });
  }

  return { behandling, regelsett, opplysning, vurderinger, oppgaveId: params.oppgaveId };
}

export default function Opplysning() {
  const { behandling, vurderinger, regelsett, opplysning, oppgaveId } =
    useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  const { prøvingsdato } = usePrøvingsdato(behandling);

  const regelsettOpplysninger = behandling.opplysninger.filter(
    (opplysning) =>
      regelsett.opplysninger.includes(opplysning.opplysningTypeId) && opplysning.synlig,
  );

  return (
    <>
      <main className={"main"}>
        <LoadingLink
          to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/behandle`}
          className={"flex items-center gap-1 pb-2"}
        >
          <ArrowLeftIcon />
          Behandling
        </LoadingLink>

        <div className={"card p-4"}>
          <div className={"flex gap-4"}>
            <div className={"flex w-[500px] flex-col gap-4"}>
              <Avklaringer
                avklaringer={[...behandling.avklaringer]}
                behandlingId={behandling.behandlingId}
              />
              <EndretOpplysninger vurderinger={vurderinger} />
            </div>

            <div className={"flex flex-1 flex-col gap-4"}>
              <div className={"card p-4"}>
                <OpplysningerTidslinje
                  opplysninger={regelsettOpplysninger.reverse()}
                  tittel={regelsett.hjemmel.tittel}
                  fremhevØverstTidslinjeRad={true}
                  medLenkeTilOpplysning={true}
                  opplysningGrunnUrl={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${regelsett.id}/opplysning`}
                  pins={[{ label: "Prøvingsdato", date: prøvingsdato }]}
                />
              </div>

              <div className={"card p-4"}>
                <OpplysningerTidslinje
                  tittel={opplysning.navn}
                  regelsettHjemmel={regelsett.hjemmel.tittel}
                  opplysningKilde={opplysning.formål}
                  opplysninger={[opplysning]}
                  pins={[{ label: "Prøvingsdato", date: prøvingsdato }]}
                />
                <OpplysningPerioderTabell opplysning={opplysning} />
              </div>
            </div>
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
