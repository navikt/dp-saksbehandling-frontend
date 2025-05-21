import { data, LoaderFunctionArgs, useLoaderData } from "react-router";
import invariant from "tiny-invariant";

import { OppgavelistePerson } from "~/components/oppgaveliste-person/OppgavelistePerson";
import { OpprettKlage } from "~/components/opprett-klage/OpprettKlage";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";
import { hentOppgave, hentOppgaverForPerson } from "~/models/saksbehandling.server";
import { commitSession, getSession } from "~/sessions";

import styles from "../route-styles/person.module.css";

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
  const { oppgaverForPersonPromise, alert } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);

  return (
    <div className={styles.container}>
      <OpprettKlage />
      <div className={"card"}>
        {/*// @ts-expect-error Det Blir feil type interferens. Antatt feil mellom openapi-fetch typer data loader wrapperen fra react-router*/}
        <OppgavelistePerson oppgaverForPersonPromise={oppgaverForPersonPromise} />
      </div>
    </div>
  );
}
