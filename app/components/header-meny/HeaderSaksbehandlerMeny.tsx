import { LeaveIcon } from "@navikt/aksel-icons";
import { Dropdown, InternalHeader, Switch } from "@navikt/ds-react";

import { useSaksbehandler } from "~/hooks/useSaksbehandler";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import type { ISaksbehandler } from "~/models/microsoft.server";

import styles from "./HeaderMeny.module.css";

interface IProps {
  saksbehandler: ISaksbehandler;
}

export function HeaderSaksbehandlerMeny({ saksbehandler }: IProps) {
  const { featureFlags } = useTypedRouteLoaderData("root");
  const {
    skjulSensitiveOpplysninger,
    setSkjulSensitiveOpplysninger,
    periodisertBehandlingsView,
    setPeriodisertBehandlingsView,
  } = useSaksbehandler();

  return (
    <div className={styles.user}>
      <Dropdown>
        <InternalHeader.UserButton
          name={saksbehandler.givenName}
          description={saksbehandler.onPremisesSamAccountName}
          as={Dropdown.Toggle}
        />
        <Dropdown.Menu className={styles.dropdownMeny}>
          <Dropdown.Menu.List>
            <Dropdown.Menu.List.Item>
              <Switch
                checked={skjulSensitiveOpplysninger}
                size={"small"}
                onChange={(e) => setSkjulSensitiveOpplysninger(e.target.checked)}
              >
                Skjul sensitive opplysninger (Best effort)
              </Switch>
            </Dropdown.Menu.List.Item>
            {featureFlags.periodiserteOpplysninger && (
              <Dropdown.Menu.List.Item>
                <Switch
                  checked={periodisertBehandlingsView}
                  size={"small"}
                  onChange={(e) => setPeriodisertBehandlingsView(e.target.checked)}
                >
                  Periodisert opplysning visning (Beta)
                </Switch>
              </Dropdown.Menu.List.Item>
            )}
            <Dropdown.Menu.List.Item>
              <a href={"/oauth2/logout"} className={styles.loggUt}>
                Logg ut <LeaveIcon aria-hidden fontSize="1.5rem" />
              </a>
            </Dropdown.Menu.List.Item>
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
