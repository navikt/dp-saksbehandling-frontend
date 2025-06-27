import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { OppgavelistePerson } from "~/components/oppgaveliste-person/OppgavelistePerson";
import { OpprettBehandling } from "~/components/opprett-behandling/OpprettBehandling";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgaverForPerson, hentPersonUuid } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

import styles from "../route-styles/person.module.css";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.personUuid, "params.peronUuid er påkrevd");

  const person = await hentPersonUuid(request, params.personUuid);
  const oppgaverForPersonPromise = hentOppgaverForPerson(request, person.ident);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      person,
      oppgaverForPersonPromise,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function PersonOversikt() {
  const { oppgaverForPersonPromise, alert } = useLoaderData<typeof loader>();
  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  return (
    <div className={styles.container}>
      <OpprettBehandling />
      <div className={"card"}>
        {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
        <OppgavelistePerson oppgaverForPersonPromise={oppgaverForPersonPromise} />
      </div>
    </div>
  );
}
