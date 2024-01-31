import { Outlet } from "@remix-run/react";
import { BehandlingStegMenyPunkt } from "~/components/behandling-steg-meny-punkt/BehandlingStegMenyPunkt";
import styles from "~/route-styles/behandle.module.css";
import { defer, json, type LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getSession } from "~/models/auth.server";
import { hentOppgave } from "~/models/oppgave.server";
import { hentArbeidsforhold } from "~/models/arbeidsforhold.server";
import { hentJournalpost } from "~/models/saf.server";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { masterMenyMock } from "mocks/api-routes/oppgaverResponse";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");

  const session = await getSession(request);
  function hentJournalposter() {
    return Promise.all(
      oppgave.journalposter.map((journalpostId) => hentJournalpost(request, journalpostId)),
    );
  }
  if (params.oppgaveId === masterMenyMock.uuid)
    return json({
      journalposterPromises: await hentJournalposter(),
      arbeidsforholdPromise: { status: "success", data: [] },
    }); // ønsker en hardkodet oppgave i test

  const oppgave = await hentOppgave(params.oppgaveId, session);

  const journalposterPromises = hentJournalposter();
  const arbeidsforholdResponse = await hentArbeidsforhold(session, oppgave.person);

  return defer({
    journalposterPromises,
    arbeidsforholdPromise: arbeidsforholdResponse,
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
              <BehandlingStegMenyPunkt key={steg.uuid} {...steg} />
            ))}
          </ul>
        </div>
      </div>
      <Outlet />
    </>
  );
}
