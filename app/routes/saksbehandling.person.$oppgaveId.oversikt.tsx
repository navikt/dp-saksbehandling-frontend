import { Button } from "@navikt/ds-react";
import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Form, Outlet } from "@remix-run/react";
import invariant from "tiny-invariant";
import { DagpengerTidslinje } from "~/components/dagpenger-tidslinje/DagpengerTidslinje";
import { PersonOversiktTabs } from "~/components/person-oversikt-tabs/PersonOversiktTabs";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { getSession } from "~/models/auth.server";
import { stansVedtak } from "~/models/vedtak.server";
import styles from "~/route-styles/person.module.css";

export async function action({ request, params }: ActionFunctionArgs) {
  invariant(params.oppgaveId, "OppgaveId må være satt");

  const session = await getSession(request);
  const periodeId = params.oppgaveId;
  const response = await stansVedtak(periodeId, session);

  return redirect(`/saksbehandling/oppgave/${response.oppgaveId}`);
}

export default function PersonOversikt() {
  const { arbeidssokerStatusResponse } = useTypedRouteLoaderData(
    "routes/saksbehandling.person.$oppgaveId",
  );

  return (
    <div className={styles.personOversiktKontainer}>
      <Form method="post" className={styles.stans}>
        <Button type="submit">Stans</Button>
      </Form>
      <DagpengerTidslinje arbeidssokerStatusResponse={arbeidssokerStatusResponse} />
      <PersonOversiktTabs />
      <Outlet />
    </div>
  );
}
