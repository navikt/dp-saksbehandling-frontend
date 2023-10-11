import { Outlet } from "@remix-run/react";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import styles from "~/route-styles/behandle.module.css";
import { json, type LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession } from "~/models/auth.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentArbeidsforhold } from "~/models/arbeidsforhold.server";
import { hentJournalpost, type IJournalpost } from "~/models/SAF.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const session = await getSession(request);
  const oppgave = await hentOppgave(params.oppgaveId, session);
  const journalposter: IJournalpost[] = [];
  const [arbeidsforhold] = await Promise.all([
    hentArbeidsforhold(oppgave.person),
    oppgave.journalposter.map((journalpostId) => {
      console.log(`henter journalpost: ${journalpostId}`);
      return hentJournalpost(request, journalpostId).then((data) => {
        journalposter.push(data);
      });
    }),
  ]);

  return json({ journalposter, arbeidsforhold });
}

// Disse dataene skal aldri hentes på nytt når man driver å behandler oppgaven. Kallet til journalpost+arbeids
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
