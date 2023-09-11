import { Button } from "@navikt/ds-react";
import { type ActionArgs, redirect } from "@remix-run/node";
import { Form, Outlet } from "@remix-run/react";
import invariant from "tiny-invariant";
import { PersonOversiktTabs } from "~/components/person-oversikt-tabs/PersonOversiktTabs";
import { stans } from "~/models/oppgave.server";

import styles from "~/route-styles/person.module.css";

export async function action({ request, params }: ActionArgs) {
  invariant(params.oppgaveId, "OppgaveId må være satt");

  const periodeId = params.oppgaveId as string;

  const response = await stans(periodeId, request);

  if (!response.ok) {
    throw new Response(null, {
      status: 500,
      statusText: "Feil ved stans av oppgave",
    });
  } else {
    const stans = await response.json();
    console.log("stans json response start");
    console.log(stans);
    console.log("stans json response slutt");
    return redirect(`/saksbehandling/oppgave/${stans.oppgaveId}`);
  }
}

export default function PersonOversikt() {
  return (
    <div className={styles.personOversiktKontainer}>
      <Form method="post">
        <Button>Stans</Button>
      </Form>
      <PersonOversiktTabs />
      <Outlet />
    </div>
  );
}
