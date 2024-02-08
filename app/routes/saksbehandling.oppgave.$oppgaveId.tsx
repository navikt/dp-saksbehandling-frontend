import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import type { IOppgave } from "~/models/oppgave.server";
import { hentOppgave } from "~/models/oppgave.server";
import { getSession } from "~/models/auth.server";
import styles from "~/route-styles/oppgave.module.css";
import { Navnestripe } from "~/components/navnestripe/Navnestripe";
import { Alert } from "@navikt/ds-react";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  return json({ oppgave });
}

export default function Oppgave() {
  const { oppgave } = useLoaderData<typeof loader>();
  return (
    <>
      <Navnestripe navn={"Donald Duck"} ident={"12345678910"} />
      {oppgaveErFerdigBehandlet(oppgave) && (
        <Alert fullWidth={true} variant={"info"}>
          Ferdig behandlet: Ukjent utfall
        </Alert>
      )}
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
export function oppgaveErFerdigBehandlet(oppgave: IOppgave) {
  return oppgave.tilstand === "FerdigBehandlet";
}
