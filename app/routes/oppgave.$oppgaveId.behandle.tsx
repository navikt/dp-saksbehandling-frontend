import { Outlet, useLocation, useNavigate, useNavigation } from "@remix-run/react";
import { Loader, Tabs } from "@navikt/ds-react";
import { OppgaveHandlinger } from "~/components/oppgave-handlinger/OppgaveHandlinger";
import { DocPencilIcon, TasklistIcon, TasklistSendIcon } from "@navikt/aksel-icons";
import { BehandlingHandlinger } from "~/components/behandling-handlinger/BehandlingHandlinger";
import { MeldingOmVedtakProvider } from "~/context/melding-om-vedtak-context";
import { getEnv } from "~/utils/env.utils";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import styles from "~/route-styles/oppgave.module.css";

export default function Oppgave() {
  const navigate = useNavigate();
  const navigation = useNavigation();
  const location = useLocation();
  const { oppgave } = useTypedRouteLoaderData("routes/oppgave.$oppgaveId");

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

              {(getEnv("GCP_ENV") !== "prod" || oppgave.saksbehandlerIdent === "G151133") && (
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
  );
}
