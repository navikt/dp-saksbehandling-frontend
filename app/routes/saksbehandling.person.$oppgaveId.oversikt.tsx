import { Button } from "@navikt/ds-react";
import { Form, Outlet } from "@remix-run/react";
import { DagpengerTidslinje } from "~/components/dagpenger-tidslinje/DagpengerTidslinje";
import { PersonOversiktTabs } from "~/components/person-oversikt-tabs/PersonOversiktTabs";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/person.module.css";

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
