import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { getSession } from "~/models/auth.server";
import styles from "~/route-styles/oppgave.module.css";
import { Navnestripe } from "~/components/navnestripe/Navnestripe";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  return json({ oppgave });
}

export default function Oppgave() {
  return (
    <>
      <Navnestripe navn={"Donald Duck"} ident={"12345678910"} />
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}
