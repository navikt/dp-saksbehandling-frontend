import { Tabs } from "@navikt/ds-react";
import { ClockDashedIcon, DatabaseIcon, FilesIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { OppgaveLenker } from "~/components/oppgave-lenker/OppgaveLenker";
import { OppgaveHistorikk } from "~/components/oppgave-historikk/OppgaveHistorikk";
import { getEnv } from "~/utils/env.utils";

export function OppgaveInformasjon() {
  return (
    <Tabs defaultValue="dokumenter" size="medium">
      <Tabs.List>
        <Tabs.Tab value="dokumenter" label="Dokumenter" icon={<FilesIcon title="Dokumenter" />} />
        <Tabs.Tab
          value="informasjon"
          label="Informasjon"
          icon={<DatabaseIcon title="Informasjon" />}
        />
        {getEnv("GCP_ENV") !== "prod" && (
          <Tabs.Tab
            value="historikk"
            label="Historikk"
            icon={<ClockDashedIcon title="Historikk" />}
          />
        )}
      </Tabs.List>

      <Tabs.Panel value="dokumenter">
        <DokumentOversikt />
      </Tabs.Panel>

      <Tabs.Panel value="informasjon">
        <OppgaveLenker />
      </Tabs.Panel>

      <Tabs.Panel value="historikk">
        <OppgaveHistorikk />
      </Tabs.Panel>
    </Tabs>
  );
}
