import { ArrowLeftIcon } from "@navikt/aksel-icons";
import { Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  type LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { LoadingLink } from "~/components/loading-link/LoadingLink";
import { ProsessOpplysning } from "~/components/prosess-opplysning/ProsessOpplysning";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { useTypeSafeParams } from "~/hooks/useTypeSafeParams";
import { hentBehandling } from "~/models/behandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.behandlingId, "params.behandlingId er påkrevd");
  invariant(params.regelsettId, "params.regelsettId er påkrevd");

  const behandling = await hentBehandling(request, params.behandlingId);
  const regelsett = [...behandling.vilkår, ...behandling.fastsettelser]
    .filter((regelsett) => regelsett.type === "Prosess")
    .find((sett) => sett.id === params.regelsettId);

  if (!regelsett) {
    throw new Response(`Finner ikke prosessregelsett med navn ${params.regelsettNavn}`, {
      status: 404,
    });
  }

  return {
    behandling,
    regelsett,
  };
}

export default function ProsessRegelsett() {
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);

  const { behandling, regelsett } = useLoaderData<typeof loader>();
  const { oppgaveId } = useTypeSafeParams();
  const opplysninger = behandling.opplysninger.filter((opplysning) =>
    regelsett.opplysninger.includes(opplysning.opplysningTypeId),
  );

  return (
    <main className={"main"}>
      <LoadingLink
        to={`/oppgave/${oppgaveId}/dagpenger-rett/${behandling.behandlingId}/behandle`}
        className={"flex items-center gap-1 pb-2"}
      >
        <ArrowLeftIcon />
        Behandling
      </LoadingLink>

      <div className={"card p-4"}>
        <Heading size={"medium"}>{regelsett.hjemmel.tittel}</Heading>

        <div className={"mt-4 flex flex-col gap-4"}>
          {opplysninger.map((opplysning) => (
            <ProsessOpplysning key={opplysning.opplysningTypeId} opplysning={opplysning} />
          ))}
        </div>
      </div>
    </main>
  );
}
