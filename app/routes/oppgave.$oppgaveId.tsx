import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Await, Outlet, useLoaderData, useLocation, useNavigate } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgaverForPerson } from "~/models/person.server";
import { hentBehandling } from "~/models/behandling.server";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { Suspense } from "react";
import { Loader, Tabs } from "@navikt/ds-react";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import styles from "~/route-styles/oppgave.module.css";
import { DocPencilIcon, TasklistIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { BehandlingHandlinger } from "~/components/behandling-handlinger/BehandlingHandlinger";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandling(request, oppgave.behandlingId);
  const oppgaverForPersonPromise = hentOppgaverForPerson(request, oppgave.person.ident);

  function hentJournalposter() {
    return Promise.all(
      oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
    );
  }

  const journalposterPromises = hentJournalposter();
  return defer({
    oppgave,
    behandling,
    oppgaverForPersonPromise,
    journalposterPromises,
  });
}

export default function Oppgave() {
  const navigate = useNavigate();
  const location = useLocation();
  const { oppgave, oppgaverForPersonPromise } = useLoaderData<typeof loader>();

  function getSelectedTab() {
    if (location.pathname.includes("melding-om-vedtak")) {
      return "melding-om-vedtak";
    }
    if (location.pathname.includes("oversikt")) {
      return "oversikt";
    }
    return "behandling";
  }

  return (
    <div className={styles.container}>
      <PersonBoks person={oppgave.person} />
      <Suspense
        fallback={
          <div>
            Henter oppgaver for person <Loader />
          </div>
        }
      >
        <Await
          resolve={oppgaverForPersonPromise}
          errorElement={<div>Vi klarte ikke hente oppgaver for person 😬</div>}
        >
          {(oppgaver) => (
            <div>
              <OppgaveListe oppgaver={oppgaver} />
            </div>
          )}
        </Await>
      </Suspense>
      <div className={styles.behandlingBox}>
        <MeldingOmVedtakProvider>
          <Tabs size="medium" value={getSelectedTab()}>
            <div className={styles.tabMeny}>
              <Tabs.List>
                <Tabs.Tab
                  value="oversikt"
                  label="Behandlingsoversikt"
                  icon={<TasklistIcon />}
                  onClick={() => navigate("oversikt")}
                />
                <Tabs.Tab
                  value="behandling"
                  label="Redigere opplysninger"
                  icon={<DocPencilIcon />}
                  onClick={() => navigate("")}
                />
                <Tabs.Tab
                  value="melding-om-vedtak"
                  label="Melding om vedtak"
                  icon={<TasklistSendIcon />}
                  onClick={() => navigate("melding-om-vedtak")}
                />
              </Tabs.List>
              <OppgaveHandlinger />
              {oppgave.tilstand === "UNDER_BEHANDLING" && <BehandlingHandlinger />}
            </div>
            <Outlet />
          </Tabs>
        </MeldingOmVedtakProvider>
      </div>
    </div>
  );
}
