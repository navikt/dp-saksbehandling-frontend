import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  Outlet,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { components } from "@/openapi/saksbehandling-typer";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentBehandling, hentSak } from "~/models/behandling.server";
import { hentRapporteringPersonId } from "~/models/rapportering.server";
import { hentPersonOversikt } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { filtrerOppgaverTilBehandling } from "~/utils/oppgave.utils";
import { isAlert } from "~/utils/type-guards";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.personUuid, "params.peronUuid er påkrevd");

  const personOversikt = await hentPersonOversikt(request, params.personUuid);
  const rapporteringPersonIdPromise = hentRapporteringPersonId(
    request,
    personOversikt.person.ident,
  );

  const sisteSak = finnSisteSak(personOversikt.saker);
  const sisteSakIDpBehandling = sisteSak ? await hentSak(request, sisteSak.id) : undefined;

  const gjetterSisteDagpengerRettBehandlingId =
    sisteSakIDpBehandling === undefined
      ? sisteSak?.oppgaver.find(
          (oppgave) =>
            oppgave.behandlingType === "RETT_TIL_DAGPENGER" &&
            oppgave.tilstand === "FERDIG_BEHANDLET",
        )?.behandlingId
      : undefined;

  const gjetterSisteBehandling = gjetterSisteDagpengerRettBehandlingId
    ? await hentBehandling(request, gjetterSisteDagpengerRettBehandlingId)
    : undefined;

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      personOversikt,
      rapporteringPersonIdPromise,
      sisteSak,
      sisteSakIDpBehandling,
      gjetterSisteBehandling,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Person() {
  const { personOversikt, rapporteringPersonIdPromise, alert } = useLoaderData<typeof loader>();

  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  const oppgaverTilBehandling = filtrerOppgaverTilBehandling(personOversikt.oppgaver);

  return (
    <>
      <PersonBoks
        person={personOversikt.person}
        rapporteringPersonIdPromise={rapporteringPersonIdPromise}
        antallOppgaver={oppgaverTilBehandling.length}
      />
      <Outlet />
    </>
  );
}

function finnSisteSak(saker: components["schemas"]["Sak"][]) {
  return saker
    .filter(
      (sak) =>
        !sak.oppgaver.every((oppgave) =>
          ["AVBRUTT", "AVBRUTT_MASKINELT"].includes(oppgave.tilstand),
        ),
    )
    .at(0);
}
