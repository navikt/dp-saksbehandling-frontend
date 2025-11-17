import { Tabs } from "@navikt/ds-react";

import { DokumentOversikt } from "~/components/dokument-oversikt/DokumentOversikt";
import { FagsystemLenker } from "~/components/fagsystem-lenker/FagsystemLenker";
import { OppgaveHistorikk } from "~/components/oppgave-historikk/OppgaveHistorikk";
import { OppgaveKontroll } from "~/components/v2/oppgave-kontroll/OppgaveKontroll";
import { useOppgave } from "~/hooks/useOppgave";
import { hentJournalpost } from "~/models/saf.server";
import { hentInntektRedigeringUrl } from "~/utils/behandling.utils";

import { components } from "../../../openapi/behandling-typer";
import { components as saksbehandlingComponents } from "../../../openapi/saksbehandling-typer";

interface IProps {
  behandling?: components["schemas"]["Behandling"];
  journalposterPromises: Promise<Awaited<ReturnType<typeof hentJournalpost>>[]>;
}

export function OppgaveStøtteInformasjon({ behandling, journalposterPromises }: IProps) {
  const { oppgave, underKontroll } = useOppgave();
  return (
    <div className={"card p-2"}>
      <Tabs defaultValue={hentDefaultStøtteTab(oppgave)} size={"small"}>
        <Tabs.List>
          <Tabs.Tab value="dokumenter" label="Dokumenter" />
          <Tabs.Tab value="fagsystemer" label="Fagsystemer" />
          <Tabs.Tab value="historikk" label="Historikk" />
          {underKontroll && <Tabs.Tab value="kontroll" label="Kontroll" />}
        </Tabs.List>

        <Tabs.Panel value="dokumenter">
          <DokumentOversikt journalposterPromises={journalposterPromises} />
        </Tabs.Panel>

        <Tabs.Panel value="fagsystemer">
          <FagsystemLenker
            inntektRedigeringUrl={behandling ? hentInntektRedigeringUrl(behandling) : undefined}
          />
        </Tabs.Panel>

        <Tabs.Panel value="historikk">
          <OppgaveHistorikk />
        </Tabs.Panel>

        {underKontroll && (
          <Tabs.Panel value="kontroll">
            <OppgaveKontroll />
          </Tabs.Panel>
        )}
      </Tabs>
    </div>
  );
}

function hentDefaultStøtteTab(oppgave: saksbehandlingComponents["schemas"]["Oppgave"]) {
  if (oppgave.tilstand === "UNDER_KONTROLL") {
    return "kontroll";
  }

  if (oppgave.beslutter) {
    return "historikk";
  }

  return "dokumenter";
}
