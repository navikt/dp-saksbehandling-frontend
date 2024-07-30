import { Tabs } from "@navikt/ds-react";
import { DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { OppgaveLenker } from "~/components/oppgave-lenker/OppgaveLenker";

export function OppgaveInformasjon() {
  return (
    <Tabs defaultValue="dokumenter" size="small">
      <Tabs.List>
        <Tabs.Tab value="dokumenter" label="Dokumenter" icon={<FilesIcon title="Dokumenter" />} />
        <Tabs.Tab
          value="informasjon"
          label="Informasjon"
          icon={<DatabaseIcon title="Informasjon" />}
        />
      </Tabs.List>

      <Tabs.Panel value="dokumenter">
        <DokumentOversikt />
      </Tabs.Panel>

      <Tabs.Panel value="informasjon">
        <OppgaveLenker />
      </Tabs.Panel>
    </Tabs>
  );
}
