import { Tabs } from "@navikt/ds-react";
import { MeldingOmVedtak } from "~/components/melding-om-vedtak/MeldingOmVedtak";

export default function Oppgave() {
  return (
    <Tabs.Panel value="melding-om-vedtak">
      <MeldingOmVedtak />
    </Tabs.Panel>
  );
}
