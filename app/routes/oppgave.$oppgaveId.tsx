import type { LoaderFunctionArgs } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { Outlet, useLoaderData, useLocation, useNavigate, useNavigation } from "@remix-run/react";
import invariant from "tiny-invariant";
import { hentOppgave } from "~/models/oppgave.server";
import { hentJournalpost } from "~/models/saf.server";
import { hentOppgaverForPerson } from "~/models/person.server";
import { hentBehandling } from "~/models/behandling.server";
import { PersonBoks } from "~/components/person-boks/PersonBoks";
import { Loader, Tabs } from "@navikt/ds-react";
import { OppgaveListe } from "~/components/oppgave-liste/OppgaveListe";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { DocPencilIcon, TasklistIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { BehandlingHandlinger } from "~/components/behandling-handlinger/BehandlingHandlinger";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { getEnv } from "~/utils/env.utils";
import styles from "~/route-styles/oppgave.module.css";
import { commitSession, getSession } from "~/sessions";
import { useHandleAlertMessages } from "~/hooks/useHandleAlertMessages";

export async function loader({ params, request }: LoaderFunctionArgs) {
  invariant(params.oppgaveId, "params.oppgaveId er påkrevd");
  const oppgave = await hentOppgave(request, params.oppgaveId);
  const behandling = await hentBehandling(request, oppgave.behandlingId);
  const oppgaverForPerson = await hentOppgaverForPerson(request, oppgave.person.ident);

  function hentJournalposter() {
    return Promise.all(
      oppgave.journalpostIder.map((journalpostId) => hentJournalpost(request, journalpostId)),
    );
  }

  const journalposterPromises = await hentJournalposter();
  const session = await getSession(request.headers.get("Cookie"));
  const alert = session.get("alert");

  return defer(
    {
      alert,
      oppgave,
      behandling,
      oppgaverForPerson,
      journalposterPromises,
    },
    {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    },
  );
}

export default function Oppgave() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();
  const { oppgave, oppgaverForPerson, alert } = useLoaderData<typeof loader>();
  useHandleAlertMessages(alert);

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
      <OppgaveListe oppgaver={oppgaverForPerson} />

      <div className={styles.behandlingBox}>
        <MeldingOmVedtakProvider>
          <Tabs size="medium" value={getSelectedTab()}>
            <div className={styles.tabMeny}>
              <Tabs.List>
                <Tabs.Tab
                  value="behandling"
                  label="Redigere opplysninger"
                  icon={<DocPencilIcon />}
                  onClick={() => navigate("")}
                />

                <Tabs.Tab
                  value="oversikt"
                  label="Behandlingsoversikt"
                  icon={<TasklistIcon />}
                  onClick={() => navigate("oversikt")}
                />

                {getEnv("GCP_ENV") !== "prod" && (
                  <Tabs.Tab
                    value="melding-om-vedtak"
                    label="Melding om vedtak"
                    icon={<TasklistSendIcon />}
                    onClick={() => navigate("melding-om-vedtak")}
                  />
                )}
              </Tabs.List>
              <OppgaveHandlinger />
              {oppgave.tilstand === "UNDER_BEHANDLING" && <BehandlingHandlinger />}
            </div>

            {navigation.state === "loading" && (
              <div className={styles.loaderContainer}>
                Laster side
                <Loader variant="interaction" size="xlarge" />
              </div>
            )}

            {navigation.state !== "loading" && <Outlet />}
          </Tabs>
        </MeldingOmVedtakProvider>
      </div>
    </div>
  );
}
