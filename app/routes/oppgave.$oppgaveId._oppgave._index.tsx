import { Tabs } from "@navikt/ds-react";
import { Outlet } from "@remix-run/react";

export default function Oppgave() {
  return (
    <Tabs.Panel value="behandling">
      <Outlet />
    </Tabs.Panel>
  );
}
