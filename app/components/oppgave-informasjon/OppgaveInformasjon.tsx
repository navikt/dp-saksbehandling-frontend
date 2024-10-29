import { Tabs } from "@navikt/ds-react";
import { ClockDashedIcon, DatabaseIcon, FilesIcon, PuzzlePieceIcon } from "@navikt/aksel-icons";
import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { OppgaveLenker } from "~/components/oppgave-lenker/OppgaveLenker";
import { OppgaveHistorikk } from "~/components/oppgave-historikk/OppgaveHistorikk";
import { useTypedRouteLoaderData } from "~/hooks/useTypedRouteLoaderData";
import { OppgaveKontroll } from "~/components/oppgave-kontroll/OppgaveKontroll";
import { useState } from "react";

interface IProps {
  visKontrollFane?: boolean;
}

export function OppgaveInformasjon(props: IProps) {
  const [aktivTab, setAktivTab] = useState("dokumenter");
  const { featureFlags } = useTypedRouteLoaderData("root");
  return (
    <Tabs size="medium" value={aktivTab} onChange={setAktivTab}>
      <Tabs.List>
        <Tabs.Tab value="dokumenter" label="Dokumenter" icon={<FilesIcon title="Dokumenter" />} />
        <Tabs.Tab
          value="informasjon"
          label="Informasjon"
          icon={<DatabaseIcon title="Informasjon" />}
        />
        {featureFlags.oppgaveHistorikk && (
          <Tabs.Tab
            value="historikk"
            label="Historikk"
            icon={<ClockDashedIcon title="Historikk" />}
          />
        )}
        {featureFlags.totrinnsKontroll && props.visKontrollFane && (
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
