import { Heading } from "@navikt/ds-react";
import {
  ActionFunctionArgs,
  data,
  LoaderFunctionArgs,
  useActionData,
  useLoaderData,
} from "react-router";
import invariant from "tiny-invariant";

import { OppgavelistePerson } from "~/components/oppgaveliste-person/OppgavelistePerson";
import { OpprettKlage } from "~/components/opprett-klage/OpprettKlage";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgave, hentOppgaverForPerson } from "~/models/saksbehandling.server";
import { handleActions } from "~/server-side-actions/handle-actions";
import { commitSession, getSession } from "~/sessions";
import { isAlert } from "~/utils/type-guards";

import styles from "../route-styles/person.module.css";

export async function action({ request, params }: ActionFunctionArgs) {
  return await handleActions(request, params);
}

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.personUuid, "params.peronUuid er påkrevd");

  const oppgave = await hentOppgave(request, params.personUuid);
  const oppgaverForPersonPromise = hentOppgaverForPerson(request, oppgave.person.ident);

  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return data(
    {
      alert,
      oppgave,
      oppgaverForPersonPromise,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Oppgave() {
  const { oppgave, oppgaverForPersonPromise, alert } = useLoaderData<typeof loader>();

  const actionData = useActionData<typeof action>();
  useHandleAlertMessages(isAlert(actionData) ? actionData : undefined);
  useHandleAlertMessages(alert);

  return (
    <>
      <PersonBoks person={oppgave.person} oppgave={oppgave} />

      <div className={styles.container}>
        <div className={styles.buttonContainer}>
          <Heading size={"medium"}>Oppgaver</Heading>
          <OpprettKlage />
        </div>

        <div className={"card"}>
          {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
          <OppgavelistePerson oppgaverForPersonPromise={oppgaverForPersonPromise} />
        </div>
      </div>
    </>
  );
}
