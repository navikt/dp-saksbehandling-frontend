import { Button } from "@navikt/ds-react";
import { type ActionFunctionArgs, redirect } from "@remix-run/node";
import { Form, Outlet } from "@remix-run/react";
import invariant from "tiny-invariant";
import { PersonOversiktTabs } from "~/components/person-oversikt-tabs/PersonOversiktTabs";
import { stansVedtak } from "~/models/vedtak.server";
import styles from "~/route-styles/person.module.css";
import { getSession } from "~/models/auth.server";
import { DagpengerTidslinje } from "~/components/dagpenger-tidslinje/DagpengerTidslinje";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, "OppgaveId må være satt");

  const session = await getSession(request);
  const periodeId = params.oppgaveId;
  const response = await stansVedtak(periodeId, session);

  return redirect(`/saksbehandling/oppgave/${response.oppgaveId}`);
}

export default function PersonOversikt() {
  const { arbeidssokerStatus } = useTypedRouteLoaderData("routes/saksbehandling.person.$oppgaveId");

  return (
    <div className={styles.personOversiktKontainer}>
      <Form method="post" className={styles.stans}>
        <Button type="submit">Stans</Button>
      </Form>
      <DagpengerTidslinje arbeidssokerStatus={arbeidssokerStatus} />
      <PersonOversiktTabs />
      <Outlet />
    </div>
  );
}
