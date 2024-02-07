import { Outlet } from "@remix-run/react";
import { OppgaveStegMenyPunkt } from "~/components/oppgave-steg-meny-punkt/OppgaveStegMenyPunkt";
import styles from "~/route-styles/oppgave.module.css";
import { defer, type LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession } from "~/models/auth.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentJournalpost } from "~/models/saf.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { Button } from "@navikt/ds-react";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  function hentJournalposter() {
    return Promise.all(
      oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
    );
  }

  const journalposterPromises = hentJournalposter();

  return defer({
    journalposterPromises,
  });
}

export default function OppgaveStegView() {
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");

  return (
    <>
      <div className={styles.oppgaveStegContainer}>
        <ul>
          {oppgave.steg.map((steg) => (
            <OppgaveStegMenyPunkt key={steg.uuid} {...steg} />
          ))}
        </ul>

        <div className={styles.buttonContainer}>
          <Button variant="primary" size="small">
            Send til automatisk avslag
          </Button>
          <Button variant="secondary" size="small">
            Send til vanlig saksflyt i Arena
          </Button>
        </div>
      </div>

      <Outlet />
    </>
  );
}
