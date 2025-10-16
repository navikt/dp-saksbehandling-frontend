import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Heading, Theme } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  Link,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
  useRouteError,
} from "react-router";
import invariant from "tiny-invariant";

import akselDarksideOverrides from "~/aksel-darkside-overrides.css?url";
import { ErrorMessageComponent } from "~/components/error-boundary/RootErrorBoundaryView";
import { Avklaringer } from "~/components/v2/avklaringer/Avklaringer";
import { EndretOpplysninger } from "~/components/v2/endret-opplysninger/EndretOpplysninger";
import { OpplysningPerioderTabell } from "~/components/v2/opplysning-perioder-tabell/OpplysningPerioderTabell";
import { OpplysningerTidslinje } from "~/components/v2/opplysninger-tidslinje/OpplysningerTidslinje";
import globalDarksideCss from "~/global-darkside.css?url";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { hentBehandlingV2, hentVurderinger } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert, isDefined } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export function links() {
  return [
    { rel: "stylesheet", href: globalDarksideCss },
    { rel: "stylesheet", href: akselDarksideOverrides },
  ];
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.regelsettNavn, "params.regelsettNavn er påkrevd");
  invariant(params.opplysningId, "params.opplysningId er påkrevd");
  const behandling = await hentBehandlingV2(request, params.behandlingId);
  const vurderinger = await hentVurderinger(request, params.behandlingId);
  const regelsett = [...behandling.vilkår, ...behandling.fastsettelser].find(
    (sett) => sett.navn === params.regelsettNavn,
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
  const { tema } = useSaksbehandler();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const regelsettOpplysninger = behandling.opplysninger.filter(
    (opplysning) =>
      regelsett.opplysninger.includes(opplysning.opplysningTypeId) && opplysning.synlig,
  );

  const prøvingsdato = behandling.opplysninger.find(
    (opplysning) => opplysning.opplysningTypeId === "0194881f-91d1-7df2-ba1d-4533f37fcc76",
  );

  const pins = prøvingsdato?.perioder
    .map((periode) => {
      if (periode.verdi.datatype === "dato") {
        return { date: new Date(periode.verdi.verdi), label: "Prøvingsdato" };
      }
    })
    .filter(isDefined);

  return (
    <Theme theme={tema} className={"main flex flex-col gap-4"}>
      <div className={"card flex gap-4 p-4"}>
        <div className={"flex flex-1 flex-col gap-4"}>
          <div className={"card p-4"}>
            <Link to={"./../../../../behandle"} className={"flex items-center gap-1"}>
              <ArrowLeftIcon />
              Behandling
            </Link>

            <Heading size={"large"}>{regelsett.navn}</Heading>

            <OpplysningerTidslinje
              opplysninger={regelsettOpplysninger}
              medLenkeTilOpplysning={true}
              opplysningGrunnUrl={`/v2/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/regelsett/${regelsett.navn}/opplysning`}
              pins={pins}
            />
          </div>

          <div className={"card p-4"}>
            <Heading size={"large"}>{opplysning.navn}</Heading>
            <OpplysningerTidslinje opplysninger={[opplysning]} pins={pins} />
            <OpplysningPerioderTabell opplysning={opplysning} />
          </div>
        </div>

        <div className={"flex w-[500px] flex-col gap-4"}>
          <Avklaringer
            avklaringer={[...behandling.avklaringer]}
            behandlingId={behandling.behandlingId}
          />
          <EndretOpplysninger vurderinger={vurderinger} />
        </div>
      </div>
    </Theme>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return <ErrorMessageComponent error={error} />;
}
