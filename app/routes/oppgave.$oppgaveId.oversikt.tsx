import { Tabs } from "@navikt/ds-react";

export async function loader() {
  return {};
}
export default function Oppgave() {
  return (
    <Tabs.Panel value="oversikt">
      <h1>LOl</h1>
    </Tabs.Panel>
  );
}
