import { Outlet } from "@remix-run/react";
import { OppgaveStegMenyPunkt } from "~/components/oppgave-steg-meny-punkt/OppgaveStegMenyPunkt";
import styles from "~/route-styles/behandle.module.css";
import { defer, type LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession } from "~/models/auth.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentJournalpost } from "~/models/saf.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

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

// Disse dataene skal aldri hentes på nytt når man driver å behandler oppgaven. Kallet til journalpost+arbeidsforhold trengs dermed bare å gjøres en gang
export function shouldRevalidate() {
  return false;
}
export default function PersonBehandleStegMeny() {
  const { oppgave } = useTypedRouteLoaderData("routes/saksbehandling.oppgave.$oppgaveId");

  return (
    <>
      <div className={styles.menyContainer}>
        <div className={styles.behandlingStegListe}>
          <ul>
            {oppgave.steg.map((steg) => (
              <OppgaveStegMenyPunkt key={steg.uuid} {...steg} />
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
