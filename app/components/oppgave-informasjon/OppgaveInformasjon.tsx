import { ClockDashedIcon, DatabaseIcon, FilesIcon, PuzzlePieceIcon } from "@navikt/aksel-icons";
import { Tabs } from "@navikt/ds-react";
import { useState } from "react";

import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { OppgaveHistorikk } from "~/components/oppgave-historikk/OppgaveHistorikk";
import { OppgaveKontroll } from "~/components/oppgave-kontroll/OppgaveKontroll";
import { OppgaveLenker } from "~/components/oppgave-lenker/OppgaveLenker";

interface IProps {
  visKontrollFane?: boolean;
  defaultTab: "dokumenter" | "informasjon" | "historikk" | "kontroll";
}

export function OppgaveInformasjon(props: IProps) {
  const [aktivTab, setAktivTab] = useState<string>(props.defaultTab);

  return (
    <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
      <Tabs.List>
        <Tabs.Tab value="dokumenter" label="Dokumenter" icon={<FilesIcon title="Dokumenter" />} />

        <Tabs.Tab
          value="informasjon"
          label="Informasjon"
          icon={<DatabaseIcon title="Informasjon" />}
        />

        <Tabs.Tab
          value="historikk"
          label="Historikk"
          icon={<ClockDashedIcon title="Historikk" />}
        />

        {props.visKontrollFane && (
          <Tabs.Tab value="kontroll" label="Kontroll" icon={<PuzzlePieceIcon title="Kontroll" />} />
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

      <Tabs.Panel value="kontroll">
        <OppgaveKontroll />
      </Tabs.Panel>
    </Tabs>
  );
}
