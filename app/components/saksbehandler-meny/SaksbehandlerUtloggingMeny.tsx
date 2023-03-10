import { Dropdown, Header } from "@navikt/ds-react-internal";
import type { ISaksbehandler } from "~/models/saksbehandler.server";
import styles from "./SaksbehandlerMeny.module.css";

interface IProps {
  saksbehandler: ISaksbehandler;
}

export function SaksbehandlerUtloggingMeny({ saksbehandler }: IProps) {
  return (
    <div className={styles.user}>
      <Dropdown>
        <Header.UserButton
          name={saksbehandler.givenName}
          description={saksbehandler.onPremisesSamAccountName}
          as={Dropdown.Toggle}
        />
        <Dropdown.Menu>
          <Dropdown.Menu.List>
            <Dropdown.Menu.List.Item>
              <a href={"/oauth2/logout"}>Logg ut</a>
            </Dropdown.Menu.List.Item>
          </Dropdown.Menu.List>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
