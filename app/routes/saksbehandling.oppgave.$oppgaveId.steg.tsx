import { Outlet } from "@remix-run/react";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import styles from "~/route-styles/behandle.module.css";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession } from "~/models/auth.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentArbeidsforhold } from "~/models/arbeidsforhold.server";
import { hentJournalpost } from "~/models/SAF.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);

  function hentJournalposter() {
    const promises = oppgave.journalposter.map((journalpostId) =>
      hentJournalpost(request, journalpostId),
    );

    // Ingen await her, denne skal resolves senere i neste Promise.all
    return Promise.all(promises);
  }

  const [journalposter, arbeidsforhold] = await Promise.all([
    hentJournalposter(),
    hentArbeidsforhold(session, oppgave.person),
  ]);

  return json({ journalposter, arbeidsforhold });
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
              <BehandlingStegMenyPunkt key={steg.uuid} {...steg} />
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
